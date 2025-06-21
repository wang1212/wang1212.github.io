---
title: Web 字体加载对页面产生的影响
date: 2022-10-16 23:49:00
update: 2023-12-16 21:32:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - 实践案例
keywords: *ref_0
description: 由于使用了第三方 Web 字体，产生了一个潜在的线上问题，苦于调试过程中一直没有考虑字体加载会对页面产生一定影响，浪费了大量时间和精力。
---


通常，在 Web UI 设计过程中会用到定制字体，页面开发过程中会使用 CSS 引用（[@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)）该字体资源，不过**由于字体资源较大，通常会对页面性能造成一些不利影响。**

<!-- truncate -->

## 案例

由于公司的业务会用到设计师定制的 Web 字体，前段时间发现一个线上问题：在部分 iOS 机型上，DOM 元素的位置发生了错位。

首先，对于问题复现的必要条件做了分析，为以下几个方面：

- 部分 iOS 机型（新旧机型均有）
- 问题发生在首次页面加载时（即后续加载问题不再复现）

根据以往的经验和代码实现来看，可能是 DOM 测量的尺寸数据不准确导致的，于是首先尝试加了延迟的方案看看效果，发现问题依然存在，然后尝试线上调试看看具体测量到的 DOM 尺寸数据是否准确。由于线上调试比较麻烦，所以也更进一步分析为何问题出现在清除缓存后的首次加载，推测是什么资源加载太慢导致的？但当时由于着急，主要考虑的都是显式引入的资源（例如 js、css 文件等，忽略了一些细节），在这方面也没有什么进展。于是，继续尝试线上调试，结果发现首次加载和二次加载得到的 DOM 测量数据完全一致，此时这个问题就有点“邪门”了，难道是浏览器内核渲染的问题？调试了很久，也没有什么收获，但考虑到对线上用户影响不是很大，就暂时搁置了这个问题，暂且认为是浏览器内核的一个什么 bug（虽然说这个确实没有什么说服力，但苦于花了很多精力和时间依然找不到原因，考虑到解决这个问题的性价比不高就先放弃了）。

后来，有个同事提到之前的文档有记录过类似因为公司定制字体加载导致的页面问题，简单看了下文档后，发现之前确实忽略了这个细节（字体文件通常比较大，加载比较慢，但由于是放在 CDN 上的所以一直没太在意）。经过和业务侧的前端沟通后，一天下午抽空尝试了下，发现确实是由于 Web 字体资源太大（CDN 不太稳定）加载较慢导致的 DOM 位置渲染错位（需要注意的是，该原因并没有导致 DOM 测量出现错误）。这里贴一下解决该问题的示例代码：

```typescript
document.fonts.ready.then(() => {
  this.resize();
});
```

## 解决方案

近期，看到了 Google Chrome 团队构建的 [web.dev](https://web.dev/) 站点进行了大改版，其中有一篇专门针对[字体加载对页面性能影响的文章](https://web.dev/articles/avoid-invisible-text?hl=en)感觉很有价值，所以更新一下这篇文章。

### 方案一：在字体加载后再使用

要做到这一点，需要了解字体资源何时会加载成功，实际上在前面的案例中已经看到有现成的 Web API 可以支持：

```javascript
document.fonts.ready.then((fontFaceSet) => {
  // Any operation that needs to be done only after all used fonts
  // have finished loading can go here.
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // some fonts may still be unloaded if they aren't used on the site
  console.log(fontFaces.map((f) => f.status));
});
```

当前，除过使用 CSS（`@font-face`）方式加载第三方字体资源，还可以通过 JavaScript 方式来加载，和以上 API 结合使用：

```javascript
// Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)");

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);

// Load the font
font.load();

// Wait until the fonts are all loaded
document.fonts.ready.then(() => {
  // Use the font to render text (for example, in a canvas)
});
```

web.dev 文中也提到一个第三方工具库 [`Font Face Observer`](https://github.com/bramstein/fontfaceobserver)，其提供了更容易的使用方式：

```javascript
var font = new FontFaceObserver('My Family', {
  weight: 400
});

font.load().then(function () {
  console.log('Font is available');
}, function () {
  console.log('Font is not available');
});
```

### 方案二：`font-display` 属性

该方案是 web.dev 文中提到的首个方案，因为它足够简单：

```css
/* Before */
@font-face {
  font-family: Helvetica;
}

/* After */
@font-face {
  font-family: Helvetica;
  font-display: swap;
}
```

随着技术的发展，很多以前很难办到的事情，也许使用一个新的特性就能解决，不过这也需要我们持续学习。

## 参考资源

- <https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts>
- <https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API>
- <https://web.dev/articles/avoid-invisible-text?hl=en>
- <https://github.com/bramstein/fontfaceobserver>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display>
