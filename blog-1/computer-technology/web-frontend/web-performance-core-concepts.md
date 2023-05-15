---
title: Web 前端性能优化：核心概念与指标
date: 2021-07-19 00:51:00
update: 2021-07-24 21:56:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - 性能优化
  - 核心概念
keywords: *ref_0
description: 在一些较为复杂的 Web 应用中可能会出现性能瓶颈，导致用户体验急剧下降，做优化之前更应该了解一下相关的核心概念，从而在出问题时确定优化路径。
---

> _最后更新于 2021-07-24 21:56:00_

说到 Web 的性能优化，可能很多时候我们采取了一些措施，看到了肉眼可见的改进，如果我们可以对其进行测量，确定我们改进的效率（百分比）是不是会更有意义？换句话说，如果我们了解性能瓶颈可能发生的位置，衡量用户体验好坏的指标，做到实时追踪性能变化，我们是不是可以更迅速的采取优化措施？在应用上线前，我们就可以做一些低成本而有高收益的优化工作，进一步提升用户体验。

所以，这里主要介绍一下 Web 性能相关的核心概念和相关指标。

谷歌作为力推 Web 技术的科技巨头，不仅提供了出色的 Chrome DevTools，更是贡献了高质量的开发文档，为业界引进了众多先进的理念，先来拜读一下下面这篇文章，搞明白为何我们需要对 Web 网站做极致的优化？

> [Why does speed matter?](https://web.dev/why-speed-matters/)

<!-- truncate -->

## RAIL 性能模型

RAIL 是一个由谷歌提出的以用户为中心的性能模型，将用户体验分解为关键操作，帮助开发者为每个操作定义性能目标。RAIL 代表

Web 应用程序生命周期的四个方面：

- Response（50 毫秒内处理事件）
- Animation（10 毫秒内生成一帧）
- Idle（最大化空闲时间）
- Load（交付内容并在 5 秒内可交互）

括号中表示推荐的性能目标，是我们在开发 Web 应用时务必要满足的，这样才能保证良好的用户体验。**RAIL 性能模型本质上是提出了一个简单而有效的衡量性能的方法，并给出一个推荐的目标，至于可能发生性能瓶颈的关键点和如何去达到优化目标则没有提及太多。**

> https://web.dev/rail/

## 关键渲染路径

关键渲染路径（Critical rendering path）是一个核心且基础的概念，描述了浏览器将 HTML、CSS 和 JavaScript 转换为屏幕上的像素所经历的一系列步骤。**其影响最大的是页面首次加载的渲染性能，其次是页面复杂交互的渲染性能。**

简单的来说，关键渲染路径主要为以下几个步骤：

- 下载完 HTML 文件开始解析，**构建文档对象模型（DOM）和 CSS 对象模型（CSSOM）**；
- 将 DOM 和 CSSOM 树**合成渲染树（Render tree）**，DOM 代表内容，CSSOM 代表样式；
- 构建好渲染树，开始**布局（Layout ）计算**，确定元素在页面上的位置和尺寸，以及元素之间的位置，输出“盒模型”；
- 完成布局计算后，就可以将渲染树中的每个节点转换成屏幕上的实际像素，即**“绘制（Paint）”或者“光栅化（Rasterization）”**。

理解了有哪几个步骤之后就可以围绕这些来做优化了，各个步骤具体的内容以及可能带来的性能瓶颈看下方文档更能容易理解一些，在这里不再赘述。

> https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
>
> https://developers.google.com/web/fundamentals/performance/critical-rendering-path

能深刻理解关键渲染路径的概念，就会对 Web 性能优化有了一个比较清晰的认识，因为页面完成初始化后，后续用户交互造成的页面结构布局发生的变化主要就体现在**布局（Layout ）计算**与**重绘（Repaint）**这两个方面，性能瓶颈也由此产生。

## pixel pipeline

现代 Web 网站或者应用具备丰富的动态交互能力，这就意味着页面是随时间和用户交互触发在动态变化，其中某一时刻的状态我们称之为帧（frame），多个连续的帧状态组合在一起就实现了动态效果（动画）。而要保证交互的流畅性，我们就得了解帧率（frame rate）这个概念，它表示连续帧的变化速率，尽可能与显示设备的刷新率（通常为 60 次/秒）保持一致，理想情况下每一帧花费的时间为 16 毫秒左右（1 秒 / 60 = 16.66 毫秒），实际上由于系统有额外的工作要做，时间会更短。**为了优化帧率达到理想状态，我们需要了解浏览器在每一帧都涉及哪些工作，即像素管道（pixel pipeline）**：

- 执行 JavaScript
- 样式计算（Style）
- 布局（Layout）
- 绘制（Paint）
- 合成（Composite）

以上步骤就是每一帧所要做的工作，优化的手段就是降低每个步骤的耗时。可以看出，实际上这是关键渲染路径中提到的布局与重绘更细化的表示。不过值得注意的是，**并不是每一帧都要历经以上所有的步骤，在某些情况下可以跳过某些步骤**，这就给了我们优化帧率的一个突破口。详细的内容查看下面谷歌开发者文档，图文介绍直观易懂，还有参考文档也值得收藏。

> https://developers.google.com/web/fundamentals/performance/rendering#the_pixel_pipeline
>
> https://csstriggers.com/
>
> https://gist.github.com/paulirish/5d52fb081b3570c81e3a

### 动画性能

谈到帧率的时候，我们很容易会想到动画，60 FPS（frame per second）是实现动画的一个核心性能目标。实现动画有两种方式：CSS 和 JavaScript。

CSS 实现动画较为简单，一般来说性能也最佳，有几个值得注意的地方：

- 尽量用 `transform`（3d）和 `opacity ` 实现动画，在大多数渲染引擎中它们**不会触发布局和绘制**
- 可以利用 `will-change`（或者 `translateZ`）CSS 属性来**触发创建新的 GPU 层，优化性能，但不要滥用**
- **减少绘制区域**和**降低绘制的复杂性**

而利用 JavaScript 实现动画灵活性更大，也能实现更复杂的动画效果，也有几个需要注意的地方：

- 用 `requestAnimationFrame` 实现动画，避免使用 `setTimeout` 或 `setInterval`
- 避免发生**强制同步布局**和**布局抖动**
- 对 JS 处理函数进行**去抖动**和**节流**优化
- 可以把复杂的 JS 计算放入 `Web Worker` 线程执行

以上只是对一些核心要点的总结，具体的内容查看下列文章进行了解。

> https://developer.mozilla.org/en-US/docs/Web/Performance/Animation_performance_and_frame_rate
>
> https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas
>
> https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance
>
> https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution
>
> https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
>
> https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers

## Web Vitals

Web Vitals 是谷歌提出的一项计划，用来量化现代网站的用户体验，是对网站性能的一种侧面但又直接有效的反映。换句话说，谷歌对纷繁复杂的性能指标进行了综合分析，最终抽象出了 Web Vitals 所包含的多个简化指标。其中最被重视的有三个指标，称为 **Core Web Vitals**，也就是核心指标：

- Largest Contentful Paint (LCP)：测量加载性能；
- First Input Delay (FID)：测量交互性；
- Cumulative Layout Shift (CLS)：测量视觉稳定性。

**核心指标更多的反映的是网站初始化加载过程的用户体验（性能），**谷歌作为搜索巨头，其提出的 Web Vitals 主要目的是为搜索业务服务。其余指标也主要以测量加载性能为主，算是作为核心指标的一种辅助决策工具。

当然，谷歌不仅提出了分析指标，还提出了优化方案，以及提供了众多工具，详细内容查看下方官方文档即可。

> https://web.dev/vitals/
>
> https://github.com/GoogleChrome/web-vitals

## 布局偏移（LS）

累积布局偏移（Cumulative Layout Shift，CLS）作为核心指标之一，其特殊的是在页面初始化完成后也可以继续**追踪用户交互过程中的布局偏移（Layout Shift，LS）现象**。

如何理解布局偏移现象？最典型的例子就是，当用户打开一个页面向下滚动过程中遇到一个还未加载完成的图片资源（此时图片没有高度），继续向下滚动时图片加载完成的瞬间页面高度被撑开，用户就会有瞬间的页面下坠感，而这种感觉会随着图片高度的大小成正比增长。有时候我们也称之为“页面抖动”，其对用户体验带来巨大的伤害，必须被重视。

CLS 相关的详细内容阅读下面的文章了解即可，文末也对如何改进 CLS 问题提供了一些建议。虽然目前提供了一些可以用来测量 LS 的 API，但终究还是调试起来不方便，好消息是 Chrome 88 版本在 DevTools 中加入了对 LS 现象的测量功能，查看下面第二篇文章了解。

> https://web.dev/cls/
>
> https://developer.chrome.com/blog/new-in-devtools-88/#web-vitals

## 缓存

缓存（Cache）对 Web 应用是至关重要的，因为 Web 应用对网络状况的好坏异常敏感，利用缓存可以降低网络波动带来的用户体验下降的影响。

Web 应用不像原生应用程序那样，用户安装到本地后，后续使用大部分资源将直接从本地加载，不受网络状况的影响；而 Web 应用在用户每一次使用时所有的资源都必须重新从网络获取，这就导致过于依赖网络状况，不过利用缓存我们可以做大量的优化工作，根据 Web 应用的生命周期来划分，缓存也可以分为以下几类：

- HTTP 缓存：请求缓存，主要依赖于浏览器客户端（`Cache-Control` 和 `Expires`）
- 版本缓存：利用 webpack 等打包工具对特定版本的静态资源做长期缓存策略
- 数据缓存：有一系列 API 提供了在客户端进行临时或者持久化的数据缓存（例如 `localStorage`、`sessionStorage`、`indexedDB` 等）

当然，以上列举的只是一些典型的缓存手段，针对不同的场景可以灵活运用多种缓存策略做优化。

> https://developers.google.com/web/fundamentals/performance/get-started/httpcaching-6
>
> https://web.dev/http-cache/
>
> https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching
>
> https://developers.google.com/web/fundamentals/instant-and-offline/web-storage

## 渐进式 Web 应用

渐进式 Web 应用（Progressive Web Apps，PWAs） 的目标是为跨平台的 Web 网络应用带来类似原生应用程序的用户体验，是一种应用的设计模式。其主要依赖于 `Service Worker` API 实现资源缓存，在离线的网络状况下也能正常为用户提供部分功能，且能将 Web 应用以类似原生应用的方式安装到用户桌面。一个复杂的 PWA 的资源缓存并不好处理，鉴于此 Chrome 团队开发了 Workbox 工具来简化这部分工作，以帮助开发者更容易的构建和管理 PWA。具体详细内容查看下方文档。

> https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
>
> https://web.dev/progressive-web-apps/
>
> https://developers.google.com/web/tools/workbox

Workbox 工具的缓存策略值得探究，可以作为实现其它缓存方案的思想借鉴。

## PRPL 模型

PRPL 模型是一种交互设计模式，目标是让网页加载的更快，其建议：

- （**Push**）预加载或者推送最重要的资源
- （**Render**）初始的路由页面渲染应该尽可能快
- （**Pre-cache**）预缓存后续将要加载的资源
- （**Lazy load**）延迟加载其它路由页面和非关键性资源

可以说，PRPL 模型是对整个 Web 站点生命周期中核心路径上所做优化的总结，对设计优化的 Web 站点具有指导意义。

> https://web.dev/apply-instant-loading-with-prpl/

## 参考资源

- https://developer.mozilla.org/en-US/docs/Web/Performance
- https://developers.google.com/web/fundamentals
- https://web.dev/user-centric-performance-metrics/
