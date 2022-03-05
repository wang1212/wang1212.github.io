---

    {
		"title": "Web 性能优化案例分析 1",
		"tags": ["计算机技术", "Web", "Front End"],
        "keywords": ["计算机技术", "Web", "Front End", "性能优化"],
        "summary": "Web 性能相关的概念很多，但如何落地在真实业务场景中，其实是一个比较难的事情，或者说机会鲜有，在这里记录一下真实业务案例做性能优化的过程。",
        "ctime": "2021-09-24 00:51:00",
        "mtime": "2022-02-24 23:50:00"
    }

---

　　能在真实业务场景中落地 Web 性能优化方案的机会鲜有，大多数时候业务是较为简单而且要求不高的，前段时间恰好有一个比较核心的业务，对稳定性和性能有一定的要求，在这个过程中也算是做了很多尝试和实践，在此作为案例记录一下分析的过程和最终解决的方案。

## 业务情况与技术难点

　　首先，介绍一下业务的具体情况和存在的技术难点。这是一个移动端 WebView 渲染的页面，属于 App 的二级核心页面，用户量数十万，日均 UV 万人，金融资产相关，所以可以看得出来对页面的稳定性要求是比较高的；其次，页面布局分为上中下三部分，中部是一个长列表，**页面整体**可以竖向滚动。以 DOM 结构说明：
  
```html
<body class="scroll-container">
  <header />
  <main class="long-list" />
  <footer />  
</body>
```
  
　　那么，重点来了，就是页面中部这个长列表是该页面的业务核心展示位置，这个长列表事实上类似于一个表格，在页面整体向上滚动过程中表头要做到吸顶效果，而表格内部是可以横向滚动的，且横向滚动过程中第一列（包括表头）要实现列冻结效果，说到这里如果了解 Excel 的行列冻结效果的话就很清楚了；其次，每一行作为一个列表项，列表项具有非常复杂的内部布局，且可以嵌套子项进行折叠交互，列表项存在 10% 用户会出现 1000+ 项的场景。以更细化的 DOM 结构说明：
  
```html
<body class="scroll-container">
  <header />
  <main class="long-list">
    <header class="row sticky-top">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </header>
    <div class="row">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </div>    
    <div class="row">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </div>
  </main>
  <footer />  
</body>
```
  
　　以上，就是该业务的大致需求了，经过分析有以下几个技术难点：
  
  - 滚动吸顶效果（兼容、抖动问题）
  - 长列表性能（虚拟列表）
  - 列冻结效果（性能、交互流畅性）
  - 表头的吸顶与列冻结效果结合（性能、抖动问题、交互流畅性）
  - 列表项布局（嵌套布局、子项折叠交互）
  - 列表数据动态更新

## 逐个击破

　　接下来，就是针对每个技术难点进行分析和攻克，这里主要记录一下当时的分析过程，后续也会看到多个难点的实现方式会互相产生影响，这也是该项目复杂的原因。

### 滚动吸顶效果

　　对于吸顶效果，在目前移动设备已足够先进的情况下，其实老旧机型兼容问题倒不是最大的问题，所以 CSS 能解决当然是最好的。首先 CSS 属性 [`position:sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) 则可以很方便的实现滚动吸顶效果，经过尝试在主流设备上确实效果不错。作为一个覆盖了数十万用户的 C 端业务，有必要保证一定的兼容性，结果发现在 IOS 和一些比较老的安卓机型会出现问题，而社区并没有提供一个很好的 Polyfill 方案，所以只能换个思路，用 JS 来实现。
  
  > https://caniuse.com/?search=sticky
  
　　JS 实现滚动吸顶效果最简单的方式就是监听 `scroll` 事件，更改 `position: fixed; top: 0px;` 或者 `position: relative; top: npx;` 或者 `transform: translateY(npx);`，经过实践，第一种吸顶后滚动容器高度会塌陷，后两者则不会；但是，后两者这种方式在滚动过程中会很明显的发现有抖动现象，也就是说在滚动过程中不断的计算 `Y` 值然后更改，在视觉上给人一种很不稳定的感觉，体验并不好，而第一种的话可以给要吸顶的元素增加一个固定高度的父元素，保证吸顶后滚动容器高度不会塌陷。实现方式类似以下 DOM 结构：
  
```html
<body class="scroll-container">
  <div class="sticky-container">
    <div class="sticky-content"></div>
  </div>
  <div />
  <div />
  <div />  
</body>
```

　　在这里，**sticky-content** 就是要实现吸顶的元素，**sticky-container** 则充当占位符，防止滚动容器高度坍塌。不过，在实际测试过程中发现 IOS 的 `scroll` 事件有点问题，响应有一定的延迟，所以抖动现象非常明显。于是，引入 [`IntersectionObserver API`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver) 来替代监听 `scroll` 事件倒是一个很不错的想法，而且社区有提供 Polyfill 方案。经过实践，效果很理想。
  
　　简单总结一下实现思路，利用 `IntersectionObserver API` 监听滚动过程中 **sticky-content** 元素出入视区并触发添加/取消 `position: fixed; top: 0px;` 样式实现吸顶，而 **sticky-container** 的高度需要根据子元素的高度进行实时测量并固定（可以利用 [`Resize Observer API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Resize_Observer_API) 实现）以防止滚动容器 **scroll-container** 元素的高度坍塌。

### 长列表性能

　　一般来说，在做开发方案的时候不应该过度设计，或者说过度优化，一旦决定要做比较复杂的实现方案就要有一定的数据依据。根据需求和产品给出的用户数据来看，页面中部的长列表有 10% 的用户展示列表项会超过 1000 个，也就是说长列表的性能是必须要考虑的事情。
  
　　长列表的性能优化最典型的技术就是“虚拟列表”，而最典型又最简单的场景则是列表容器给一个固定高度，列表项高度固定。根据 UI 稿和交互稿来看，页面上中下的布局，滚动的是整个页面，而不是中部的长列表，而且这样的交互方式确实也更自然一些。所以，固定列表容器高度的“虚拟列表”方案是不合适的。除此之外，前面提到根据需求来看列表项具有比较复杂的逻辑，布局也较为复杂，列表项的高度也是不固定的，这就给实现虚拟列表带来一定的难度。
  
　　分析到这里，社区著名的 `react-window` 虚拟列表组件及其相关的组件库均不能实现目前的需求，但提供了可变高度列表项的用例。此时，转变思路，既然长列表无法作为一个固定高度的滚动容器，那么将整个页面视为一个虚拟列表是否行得通？以 DOM 结构说明：
  
```html
<body class="scroll-container virtual-list">
  <header />
  <main class="long-list" />
  <!-- <main class="long-list virtual-list" /> -->
  <footer />
</body>
```

　　经过简单的验证后，发现此方案行不通。首先，因为页面要调用客户端协议实现下拉刷新交互，发现页面容器固定高度为 100%，设置 `overflow: scroll;` 样式后下拉刷新的交互手势事件监听会出问题，客户端还不好解决；其次，整个页面作为虚拟列表，要把页面每个元素都作为列表项进行处理，反而还把问题变得复杂化了。于是，放弃此方案，寻找一种不固定滚动容器高度的虚拟列表方案。恰巧，发现 `react-virtualized` 有一个示例刚好符合这种场景：
  
  > https://bvaughn.github.io/react-virtualized/#/components/WindowScroller
  
　　基于此，也快速做了验证，效果还不错，但是马上就要面临下一个问题，在这种场景下怎么做到列冻结的效果？似乎又陷入了一个僵局。这个时候，去看了一下该示例的源码，想探究一下实现的机制，发现主要还是依赖于监听 `scroll` 事件。
  
　　回过头来，重新分析需求和所提供的用户数据，10% 的用户展示列表项会超过 1000 个，而这 10% 的用户又可能所使用的设备偏中高端机型，即便如此，列表项的上限也仅会在千这个数量级，并不会上万。那么，一个页面渲染上千个 DOM 元素对于中高端机型来说倒不会有太大性能问题。根据 UI 稿来分析，一个列表所包含的 DOM 元素数量在 30-50 之间，如果有 1000 项，就会有 3w-5w 个 DOM 元素，性能压力很大；但是，假如让视区外的列表项仅渲染一个 DOM 元素做占位，此时整个列表的 DOM 元素数量会下降到 1000 - n + n(30-50)，而这个 n 则代表可在视区内展示的列表项个数，一般在 3-6 之间，这样 DOM 元素的数量急剧下降，性能压力得到极大的缓解。以 DOM 结构说明：
  
```html
<body class="scroll-container">
  <header />
  <main class="long-list">
    <header class="row sticky-top">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </header>
    <!-- screen top -->
    <div class="row">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </div>
    <div class="row">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </div>
    <!-- screen bottom -->
    <div class="row" />
    <div class="row" />
    <div class="row" />
  </main>
  <footer />  
</body>
```

　　总结一下，这里主要解决两个问题：1. 滚动容器不能是固定高度；2. 列表项布局要足够灵活，可以实现列冻结效果。理想的“虚拟列表”实现需要同时处理滚动容器和列表项的逻辑，经过分析在有限的条件下可以实现一个“半虚拟化列表”。半虚拟化是什么意思呢？这里就要借鉴一下实现吸顶的方案了，让逃离视区的列表项并非不渲染任何 DOM 元素，而是渲染 1 个 DOM 元素做占位以自动撑开滚动容器的高度，虚拟掉列表项的子元素，而留下列表项容器元素做占位，自然而然的也就把问题的复杂度降低到只需要处理列表项的逻辑，而滚动容器的逻辑不再需要手动处理，由布局自动完成。具体实现可以借助 `IntersectionObserver API` 监听列表项出入视区，而利用 `Resize Observer API` 固定列表项容器元素的高度，这里还有一个小技巧应该给列表项容器元素给一个默认的高度（可以估算一个平均值）以撑开容器高度，这样可以降低滚动过程中布局偏移（LS）现象的影响以提高用户体验。以 DOM 结构说明：
  
  ```html
<body class="scroll-container">
  <header />
  <main class="long-list">
    <header class="row sticky-top">
      <div class="column sticky-left" />
      <div class="column" />
      <div class="column" />
    </header>
    <!-- screen top -->
    <div class="placeholder">
      <div class="row">
        <div class="column sticky-left" />
        <div class="column" />
        <div class="column" />
      </div>        
    </div>
    <div class="placeholder">
      <div class="row">
        <div class="column sticky-left" />
        <div class="column" />
        <div class="column" />
      </div>        
    </div>
    <!-- screen bottom -->
    <div class="placeholder" />
    <div class="placeholder" />
    <div class="placeholder" />
  </main>
  <footer />  
</body>
```

　　在多次更换和验证实现长列表的方案时，除过用不同配置的真机设备和不同数量级数据的测试真实感受交互过程中卡顿外，最重要且可以量化性能指标的手段则是利用 Chrome 开发工具的 **Performance** 工具分析滚动交互过程中的帧率情况，包括出现的布局偏移（LS）现象频率，以及利用 **Memory** 工具分析内存消耗和稳定情况。

## 参考资源

- https://developer.mozilla.org/en-US/docs/Web/Performance
- https://developers.google.com/web/fundamentals
- https://web.dev/user-centric-performance-metrics/
- https://developer.mozilla.org/en-US/
- https://caniuse.com/
