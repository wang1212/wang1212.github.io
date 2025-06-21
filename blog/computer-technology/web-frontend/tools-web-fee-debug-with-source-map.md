---
title: Web 前端调试工具：SourceMap 文件
date: 2021-11-28 22:31:00
update: 2022-05-07 21:57:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - 工具
  - Debug
  - SourceMap
  - 实践案例
keywords: *ref_0
description: Web 前端项目在生产环境发布的代码是经过混淆和压缩的，如何调试则成为了一个难题，SourceMap 文件则是一个解决该问题时可以利用的很好的工具。
---


Web 前端项目出于加载性能优化和安全考虑，在生产环境部署的代码是经过混淆和压缩的，对于利用生产环境收集到的错误堆栈信息要进行调试是非常具有挑战性的。理想情况下，应该在生产环境收集错误堆栈信息，然后映射到源码进行调试。恰好，**SourceMap 文件**提供了这个机制，可以将编译（压缩）后的代码映射到源代码中。

<!-- truncate -->

以下是其规范：

> [Source Map Revision 3 Proposal](https://sourcemaps.info/spec.html)

所以，利用 SourceMap 文件可以改善线上问题调试困难的现状。

## 实际应用：调试线上问题

几个月前，新上线的项目接入 SkyWalking 日志后，出了一些兼容性问题，大部分问题根据客户反馈的交互流程基本可以猜到出问题的代码位置，尤其是可以使用测试机进行复现，在本地调试直接可以获知具体的错误栈信息。但其中有几个问题，由于客户的机型太小众，而且系统版本太旧，没有类似的测试机环境可以复现，只能根据线上收集到的错误日志和其中的栈信息定位错误。这看似是个很简单的问题，但实际上不好解决，因为线上日志的错误栈信息中对应的行列号是压缩和混淆后的代码，基本定位不到具体的源码位置。于是，一直在本地模拟用户的交互和测试数据，苦于无法复现，最终回过头来还是决定思考一下怎么根据栈信息定位错误。

当然，一个很明显的场景就是，本地使用 Webpack 这类构建工具进行开发时，代码本身在本地调试的过程中就已经进行了编译转换和合并，为了能在 Web 开发工具中定位到错误发生的源码位置，会生成 **sourcemap** 文件来解决这一问题。想到这里，调试线上问题的思路也基本明确了，那就是利用构建发布代码时生成的 **sourcemap** 文件配合获取的线上日志栈信息中行列号解析出源码的对应位置（文件，行列号）。此时，又出现了两个问题，第一个问题是原来的构建发布代码过程中出于安全考虑是不产生 **sourcemap** 文件的，当然回过头来想一下，只要目前的项目源码和当前线上发布时的是一致的，重新生成 sourcemap 文件也能解决问题；第二个问题就比较难办了，以前只是配置 Webpack，至于自己如何手动解析 sourcemap 倒还没尝试过，先是查了下资料，发现这个文件格式标准是 Google 提出来的，但没有找到官方提供的解析工具，不过后续却找到了一个 _Mozilla_ 的开源项目 [`source-map`](https://github.com/mozilla/source-map) 解决了该问题。

### 工具脚本

有了 **sourcemap** 文件和解析工具其实就很好解决问题了，这里贴一下自己使用的工具脚本源码：

```js
/**
 * 调试压缩代码（要保留 dist 文件夹）
 * ! 上线前请注意不要把 sourcemap 文件一同发布
 */
import process from 'process';
import path from 'path';
import fs from 'fs';
import sourceMap from 'source-map';

// * 第一步：更改要调试的压缩代码文件对应 sourcemap 文件名称
let sourcemap = fs.readFileSync(
  path.join(process.cwd(), './dist/js/index.314d075b.js.map')
);
sourcemap = JSON.parse(sourcemap);

async function parse() {
  const s = await new sourceMap.SourceMapConsumer(sourcemap);

  // * 第二步：将 `line` 和 `column` 更改为线上错误日志堆栈信息中的行列号
  console.debug(
    s.originalPositionFor({
      line: 15,
      column: 69,
    })
  );

  s.destroy();
}

// * 最后运行脚本：`node scripts/debug-min-code.mjs`
// 查看打印出的实际文件和位置信息
parse();
```

## 实际应用：调试第三方库

对于我们自己写的项目源代码利用诸如 Webpack 等构建工具可以在打包时生成 **sourcemap** 文件，调试项目源代码就会很方便。但是，在我们开发过程中，一般来说会依赖很多第三方库，大部分的第三方库最终提供的也是经过编译、混淆、压缩、打包的单个 js 文件，如何在开发过程中根据错误堆栈信息调试第三方库也是一个问题。

一般来说，有两种方案。第一种方案是社区普遍采用的方式，为用户额外提供一个经过编译、打包但未压缩、混淆的单个 js 文件，在包的入口处根据环境导出不同的版本。以 React 的入口文件为示例：

```js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
```

这里的 `NODE_ENV` 环境变量是社区共识，而且在各种构建工具中都会自动设置相应的值。这种方案的优势是对于用户来说易于使用，劣势是用户调试过程中的代码依然是被编译和打包后的单个庞大的 js 文件，并非源代码，调试起来也有诸多不便。

第二种方案就是利用 **sourcemap** 文件，包在发布的时候附带相应的 sourcemap 文件。但这种方案对于用户来说可能不是开箱即用的，我在使用 Webpack 作为构建工具时，发生错误后，在 Chrome 的开发工具中发现第三方库的 sourcemap 文件没有生效，这个问题的原因可以参考下面这篇文章：

> [4 Reasons Why Your Source Maps are Broken](https://blog.sentry.io/2018/10/18/4-reasons-why-your-source-maps-are-broken)

前端构建工具链中基本都会涉及到处理 sourcemap 文件的过程，所以在使用多个工具链的时候，需要特别注意。对于 Webpack，使用 [`source-map-loader`](https://github.com/webpack-contrib/source-map-loader) 这个工具库就可以修复第三方库的 sourcemap 文件失效问题，这样我们在开发过程中就可以基于第三方库的源码进行调试了（当然前提是有提供 sourcemap 文件）。

## 参考资料

- [Source Map Revision 3 Proposal](https://sourcemaps.info/spec.html)
- [source-map](https://github.com/mozilla/source-map)
- [4 Reasons Why Your Source Maps are Broken](https://blog.sentry.io/2018/10/18/4-reasons-why-your-source-maps-are-broken)
- [source-map-loader](https://github.com/webpack-contrib/source-map-loader)
