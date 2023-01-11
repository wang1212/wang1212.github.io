---
title: 交互状态设计：声明式与命令式
date: 2023-01-09 23:37:00
update: 2023-01-09 23:37:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - 程序架构设计
  - ZRender
  - ECharts
  - Web 前端
keywords: *ref_0
description: 通常，对于 Web 页面的交互处理中，尤其是 DOM 元素样式的变化用 CSS 处理是非常简单的，但如果是普通对象呢？问题似乎变得复杂起来了，这篇文章以 ZRender 与 ECharts 的源码实现为例，讨论一下在复杂场景中处理交互状态的设计方案，及其可采用的声明式与命令式编码方案，对比其适用性和设计优劣。
draft: true
---

> _最后更新于 2023-01-09 23:37:00_

通常，对于 Web 页面的交互处理中，尤其是 DOM 元素样式的变化用 CSS 处理是非常简单的，但如果是普通对象呢？问题似乎变得复杂起来了，这篇文章以 ZRender 与 ECharts 的源码实现为例，讨论一下在复杂场景中处理交互状态的设计方案，及其可采用的声明式与命令式编码方案，对比其适用性和设计优劣。

<!-- truncate -->

## 什么是交互状态

在开始讨论之前，有必要清晰的理解即将要讨论的问题的核心：**交互状态**。

对于强交互的应用来说，用户不同的交互行为会导致应用呈现不同的状态。以 Web 场景举一个简单的例子，对于 `button` 标签来说，用 CSS 可以声明 `:hover`、`:active`、`:disabled` 及默认样式，这里就对应了一个按钮的 4 种样式（状态），它们都是在特定的交互行为下才会触发的样式（状态），这里要讨论的交互状态则就是类似这 4 种样式的概念。如下所示：

```css
button {
  color: white;
}
button:hover {
  color: green;
}
button:active {
  color: red;
}
button:disabled {
  color: gray;
}
```

需要清楚的是，这里的交互指的并不一定是常规的鼠标交互行为，其代表的是我们将一种事情变更为另一种状态的行为，例如一个列表中文本的搜索、筛选高亮，交互则指的是搜索和筛选的这两种用户行为。

## 交互状态的处理

以上 `button` 标签的例子中，CSS 声明了 4 种状态，浏览器本身已经实现了 `button` 标签用户交互行为事件监听，并自动帮助开发者在不同的交互行为下切换相应的状态（样式）。这是处理交互状态中最省心、最简单的场景，只需要声明交互状态即可。

另一方面，熟悉 DOM API 的开发者经常会这样做：

```javascript
button.onmouseenter = () => {
  button.style.color = 'green';
}
button.onmouseleave = () => {
  button.style.color = 'white';
}

button.onkeydown = () => {
  button.style.color = 'red';
}
button.onkeyup = () => {
  button.style.color = 'white';
}

if (/* disabled */) {
  button.style.color = 'gray';
}
```

以上属于命令式（过程式）的编码风格，对于仅需要改变 `button` 元素的一个 `color` 属性来说代码是比较简洁的，但如果需要改变 `button` 元素的多个属性或者逻辑更复杂时，显然代码就变得更加复杂和不易维护了。

当然，遵循 Web 开发中表现与行为相分离的原则，可以将样式（状态）改为用 CSS 类进行声明，如下所示：

```javascript
button.onmouseenter = () => {
  button.classList.add(hoverClassName);
}
button.onmouseleave = () => {
  button.classList.remove(hoverClassName);
}

button.onkeydown = () => {
  button.classList.add(activeClassName);
}
button.onkeyup = () => {
  button.classList.remove(activeClassName);
}

if (/* disabled */) {
  button.classList.add(disabledClassName);
}
```

所以，将状态和状态变更的逻辑进行拆分，代码会更清晰、易维护一些，状态采用声明式方案预先定义好，在相应的交互行为触发时进行状态的切换即可。

## 参考资源
