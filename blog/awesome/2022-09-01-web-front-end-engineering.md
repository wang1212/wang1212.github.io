---
title: 精选资源：Web 前端工程化
date: 2022-09-01 14:47:00
update: 2024-03-12 19:33:00
authors: wang1212
tags: &ref_0
  - 精选资源
  - 计算机技术
  - Web 前端
  - 工程化
keywords: *ref_0
description: 精选资源集合，有关 Web 前端工程化领域的内容。
---

:::tip[精选资源]

这是一个系列，收集不同领域相关的精选（高价值）内容，包括深入分析文章、视频、工具等。

_探索一项新兴技术出现的背景、动机，尤其是其背后的设计哲学，更甚的是在不断的版本演进过程中遇到了什么问题，产生了什么思考，以及是如何决策并得到最优解。_

:::

Web 前端发展至今，已成为一个非常复杂的领域，纷繁复杂的工程化技术、工具为构建前端产品提供了有力的支持，通过深入探索工程化技术的发展路径、不同工具的设计理念与差异，了解 Web 前端发展趋势。

<!-- truncate -->

## Webpack

:::note[基础概念]

- [Webpack 官网](https://webpack.js.org/)
- [Webpack: Concepts](https://webpack.js.org/concepts/)

模块联合（Module Federation）技术：

- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Webpack 5 Module Federation: A game-changer in JavaScript architecture Webpack 5 Module](https://angularindepth.com/posts/1173/webpack-5-module-federation-a-game-changer-in-javascript-architecture)

:::

下面是一些关于实现细节的深度探索解析的内容。

:::note[技术原理解析]

简单的理解 Web 捆绑器的工作原理：

- [Under-the-hood of web bundlers (e.g. Webpack)](https://angularindepth.com/posts/1209/under-the-hood-of-web-bundlers-e-g-webpack)

了解 Webpack 打包的过程：

- [An in-depth perspective on webpack's bundling process](https://angularindepth.com/posts/1482/an-in-depth-perspective-on-webpacks-bundling-process)
- [Demistifying webpack's 'import' function: using dynamic arguments](https://angularindepth.com/posts/1483/demistifying-webpacks-import-function-using-dynamic-arguments)
- [Webpack: An in-depth introduction to SplitChunksPlugin](https://angularindepth.com/posts/1490/webpack-an-in-depth-introduction-to-splitchunksplugin)
- [This is how angular-cli/webpack delivers your CSS styles to the client](https://angularindepth.com/posts/1176/this-is-how-angular-cli-webpack-delivers-your-css-styles-to-the-client)

:::

了解一些可以提高调试效率的技巧。

:::note[调试技巧]

- [This will make you more efficient at debugging Webpack unspecified build errors](https://angularindepth.com/posts/1166/this-will-make-you-more-efficient-at-debugging-webpack-unspecified-build-errors)

:::

## 其它

### Hot Module Replacement

热模块替换（HMR）在应用程序运行时更换、添加或删除模块，而无需完全重新加载。目前的主要应用场景是优化开发过程中预览视图与代码如何高效同步的问题，具体表现为可在不刷新整个预览视图的情况下实现仅更改的代码模块同步更新。

:::note[技术原理解析]

- [Webpack: Hot Module Replacement](<https://webpack.js.org/concepts/hot-module-replacement/>)
- [Hot Module Replacement is Easy](https://bjornlu.com/blog/hot-module-replacement-is-easy)

:::
