---
title: Web 性能优化之批量 DOM 操作 - FastDOM
tags:
  - 计算机技术
  - Web
  - Front End
keywords:
  - 计算机技术
  - Web
  - Front End
  - 性能优化
summary: >-
  原生应用时代，DOM 操作一般借助类似 jQuery 的工具库手动完成，而在框架/库应用时代 DOM
  操作退居幕后自动完成，原生应用与框架应用性能孰高孰低？DOM 批量操作对于性能有何影响？利用 FastDOM 库来解决这些性能问题。
ctime: '2021-10-04 00:06:00'
mtime: '2022-03-10 00:28:00'
author: 不如怀念 ([@wang1212](https://github.com/wang1212))
---

　　利用 JS 开发的原生应用与依赖于 React.js/Vue 开发的框架/库应用，性能孰高孰低？这两者最显著的区别在于原生应用需要手动操作 DOM 完成业务，而框架/库应用是基于数据变化响应式的应用，后者只需要关注数据如何变化，至于体现在 DOM 上的变化皆由框架/库内部自动完成。所以，要搞清楚两者的性能优劣，可能**批量**的 DOM 操作是一个不可忽略的核心因素。从代码执行的角度分析，框架/库也是基于原生 API 进行的封装抽象，因此代码执行时的路径更长、堆栈更深，由此可见原生 API 的操作性能应该是最高的。但是，现实情况是业务通常来说是复杂的，代码实现中 DOM 操作的逻辑分散在各处，那么多个 DOM 操作之间是否会产生影响从而不利于性能？这个时候就要关注宿主浏览器的渲染机制是如何理解批量的 DOM 操作的，这里引入的概念就是**关键渲染路径（Critical rendering path）**。
  
  > https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
  > https://developers.google.com/web/fundamentals/performance/rendering
  
　　简单的来说，浏览器逐帧渲染的机制每次都需要经历一个**先计算后布局再渲染**的过程，DOM API 可以分为读和写两类，如果把一些批量的 DOM 操作先按读和写分为两组，统一先执行读操作，然后再执行写操作，这样就能实现最高的性能。这里的问题就在于如果高频率的进行 DOM 读写的交替操作会加重浏览器的负担，浏览器无法在一次渲染路径内完成所有的 DOM 操作，因此产生严重的性能问题。
  
　　那么，现在问题就很明朗了，一个复杂的业务场景中，如何实现批量 DOM 操作合理的调度才是实现高性能的关键，原生应用依赖于开发者自主对于代码的规划，要将分散在各处的 DOM 操作进行合理的调度并不是一件容易的事情，反而可能因此搞乱项目架构；而现在的类似 React.js 的框架/库则基于此，以一种数据驱动的响应式应用的理念，将复杂的 DOM 操作封装在内部，设计一种优化的调度机制实现高性能的应用。
  
```
// 批量的 DOM 操作
-> DOM 读 1
-> DOM 写 1
-> DOM 读 2
-> DOM 写 2

// 优化调度
-> DOM 读 1
-> DOM 读 2
-> DOM 写 1
-> DOM 写 2
```
  
## 真实的业务场景

　　以上，讨论了原生应用与框架/库应用在性能方面的关键所在，批量 DOM 操作的调度至关重要。虽然说框架/库在底层帮助我们完成了 DOM 操作和调度，但在日常的业务开发过程中难免会遇到需要开发者与 DOM 交互的场景，而我此前就遇到一个真实的业务场景。
  
　　在一个优化过的虚拟列表中，需要针对列表项中一些 DOM 元素进行缩放处理，而实现的具体思路是先要在渲染完成后测量 DOM 尺寸进行计算，再加样式进行 DOM 的缩放。以 DOM 结构说明：
  
```html
<div class="virtual-list">
  <div class="row">
    <span class="width-50 js-scale">some text too long.</span>
    <span class="width-50 js-scale">some text too long.</span>
  </div>
  <div class="row">
    <span class="width-50 js-scale">some text too long.</span>
    <span class="width-50 js-scale">some text too long.</span>
  </div>
  <div class="row" />
  <div class="row" />
  <div class="row" />
</div>
```
  
　　在列表滚动渲染的过程中，需要针对 **js-scale** DOM 元素进行缩放处理，不允许自动换行的文本过长时（超过指定宽度时），利用 `transform: scale(n);` 样式进行缩放。那么，这里就涉及一次 DOM 的读和写操作，本身虚拟列表对性能要求比较高，虚拟化的实现过程中有性能损耗，缩放的实现对性能的影响要降到最低。
  
　　最简单的实现就是以 **row** 为单位，在每次渲染初始化后就进行缩放处理，由于 **row** 是逐个渲染的，所以缩放的处理过程实际上为：
  
```
-> row1 DOM 读
-> row1 DOM 写
-> row2 DOM 读
-> row2 DOM 写
...
```
  
　　实际上，这就是前面所分析的，DOM 的读和写操作高频的交替发生，性能影响非常明显。以 **row** 为单位进行缩放处理降低了实现的复杂度，但要将所有 **row** 的 DOM 操作统一调度起来会麻烦一些，不过并不是很难。实现的思路就是用两个数组分别收集对 DOM 的读和写操作函数，然后再统一先执行所有的读操作，再执行写操作，为了保证 UI 交互的及时响应，要动态的每隔一段时间就统一把收集到的 DOM 操作执行一遍再重新收集。
  
### FastDOM
  
　　不过，不必造轮子，在 Google 的 Web 性能文档中提及一个 npm 工具库 [FastDOM](https://github.com/wilsonpage/fastdom)，正如其名，该工具库的目的就是加速 DOM 的批量处理以提高性能。
  
> https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
  
　　在利用 FastDOM 验证以上真实业务场景中所遇到的性能问题时，效果还是比较理想的。
  
　　那么，我们接下来就看看其实现机制，其工作原理文档中也有所提及：
  
> https://github.com/wilsonpage/fastdom#how-it-works

　　简单的来说，与之前设想的实现思路一致，用 `window.requestAnimationFrame()` API 来动态控制以提高对 UI 交互的及时响应。事实上，其源码实现也并不难，可以简单的来分析一下。其提供了两个最主要的 API：
  
  - `fastdom.measure()` - 对应 DOM 的读操作
  - `fastdom.mutate()` - 对应 DOM 的写操作

　　在其内部，用两个数组分别收集 DOM 的读和写函数：
  
```js
// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L39
function FastDom() { 
  var self = this; 
  self.reads = []; 
  self.writes = [];
  // ...
}

// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L71
measure: function(fn, ctx) { 
  var task = !ctx ? fn : fn.bind(ctx); 
  this.reads.push(task); 
  scheduleFlush(this); 
  // ...
}

// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L88
mutate: function(fn, ctx) { 
  var task = !ctx ? fn : fn.bind(ctx); 
  this.writes.push(task); 
  scheduleFlush(this); 
  // ...
}
```
  
　　短短几行代码就已经完成了对批量 DOM 操作调度的初步实现，在这里需要重点关注 `scheduleFlush()` 的实现，其决定了所收集的 DOM 操作何时执行，并且是如何保证  UI 交互响应的及时性的。
  
```js
// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L28
var raf = win.requestAnimationFrame 
  || win.webkitRequestAnimationFrame 
  || win.mozRequestAnimationFrame 
  || win.msRequestAnimationFrame 
  || function(cb) { return setTimeout(cb, 16); }; 

// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L168
function scheduleFlush(fastdom) { 
  if (!fastdom.scheduled) { 
    fastdom.scheduled = true; 
    fastdom.raf(flush.bind(null, fastdom)); 
  } 
} 
 
// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L185
function flush(fastdom) { 
  var writes = fastdom.writes; 
  var reads = fastdom.reads; 
  var error; 
    
  try { 
    fastdom.runTasks(reads); 
    fastdom.runTasks(writes); 
  } catch (e) { error = e; } 
    
  fastdom.scheduled = false; 
    
  // If the batch errored we may still have tasks queued 
  if (reads.length || writes.length) scheduleFlush(fastdom); 
  // ...
 } 

// https://github.com/wilsonpage/fastdom/blob/master/fastdom.js#L58
runTasks: function(tasks) { 
  var task; while (task = tasks.shift()) task(); 
}
```
  
　　对于调度的实现过程略微复杂，但代码看起来还是很简单的，利用 `requestAnimationFrame()` API 刷新 DOM 操作队列，尽最大可能保证帧率的稳定性，利用 `fastdom.scheduled` 标志位控制刷新队列的操作定期执行，防止短时间内出现“长任务”对帧渲染产生不利影响，而 `requestAnimationFrame()` API 的兼容性也做了特殊处理，回退到 `setTimeout(cb, 16)` 以保证实现尽可能接近原生 API。
  
　　除此之外，FastDOM 还提供了一些其它的 API 增强开发的便利性和实用性，比如 `clear()` API 可以在必要时清空 DOM 操作队列，而 `catch()` 则可以统一处理捕获到的异常。
  
## 结语

　　本文主要基于原生应用和框架/库应用在性能方面的差异进行分析，针对其核心因素批量 DOM 操作的合理调度，借一个真实的业务场景来说明如何手动调度 DOM 批量操作以实现高性能。本着不造轮子的原则，对 Google 文档中提及的 FastDOM 工具库的源码实现做了简单分析，以验证设想的实现思路。

## 参考资源

- https://developer.mozilla.org/en-US/docs/Web/Performance
- https://developers.google.com/web/fundamentals
- https://github.com/wilsonpage/fastdom
- https://web.dev/user-centric-performance-metrics/
- https://caniuse.com/
