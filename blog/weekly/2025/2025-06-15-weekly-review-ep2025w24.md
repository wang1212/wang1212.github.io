---
title: 「每周回顾」EP2025W24：React 服务器组件中导入的工作原理
date: 2025-06-15 18:00:00
update: 2025-06-15 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 24 周的回顾，Dan Abramov 的最新博文深入探讨了 React Server Components (RSC) 中导入的机制。文章阐述了 RSC 如何通过扩展 JavaScript 的模块系统，实现客户端与服务端代码的统一编写和边界控制，从而优化了在 React 应用中处理导入的方式。
---

:::note[AI 总结]

Dan Abramov 的最新博文深入探讨了 React Server Components (RSC) 中导入的机制。文章阐述了 RSC 如何通过扩展 JavaScript 的模块系统，实现客户端与服务端代码的统一编写和边界控制，从而优化了在 React 应用中处理导入的方式。

:::

<!-- truncate -->

##### [How Imports Work in RSC](https://overreacted.io/how-imports-work-in-rsc/)

Dan Abramov 新的博文，介绍了 React Server Components (RSC) 中导入（import）的工作原理，通过扩展 JavaScript 模块系统（`import`/`export`），实现客户端/服务端代码的统一编写与边界控制。

`React.js` `React Server Components` `import`
