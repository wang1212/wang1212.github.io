---
title: 「每周回顾」EP2024W13：Node.js ESM 模块化进展与 AWS 网络架构概览
date: 2024-03-27 18:00:00
update: 2024-03-27 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2024 年第 13 周的回顾，主要关注 Node.js 在 ES 模块化方面的最新进展，包括 __dirname 在 ESM 中的回归支持，以及 CommonJS 模块直接引用 ES 模块的新特性，这将极大简化开发者在 ESM 迁移过程中的路径处理和模块引用问题。此外，回顾还提及了《ByteByteGo》中关于分布式系统节点故障检测和 AWS 典型网络架构的探讨。
---

:::note[AI 总结]

主要关注 Node.js 在 ES 模块化方面的最新进展，包括 __dirname 在 ESM 中的回归支持，以及 CommonJS 模块直接引用 ES 模块的新特性，这将极大简化开发者在 ESM 迁移过程中的路径处理和模块引用问题。此外，回顾还提及了《ByteByteGo》中关于分布式系统节点故障检测和 AWS 典型网络架构的探讨。

:::

<!-- truncate -->

##### [__dirname is back in Node.js with ES modules](https://www.sonarsource.com/blog/dirname-node-js-es-modules/)

用习惯了 commonjs 的 Node.js 用户对于 ESM 中文件路径的处理感觉到非常麻烦，好消息是 __dirname 将会被 ESM 支持。

`Node.js` `__dirname`

##### [EP103: Typical AWS Network Architecture in One Diagram](https://blog.bytebytego.com/p/ep103-typical-aws-network-architecture)

103 期中关于如何检测分布式系统中的节点故障的内容值得一看，不同的心跳机制。

`《ByteByteGo》`

##### [require(esm) in Node.js](https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/)

ESM 是 Node.js 发展的正确方向，最新发布的特性支持在 commonjs 代码可以直接引用 ES 模块。

`Node.js` `Module`
