---
title: 「每周回顾」EP2025W26：ECMAScript 2025 正式发布，AI 代理与前端工具持续演进
date: 2025-06-29 12:48:00
update: 2025-06-29 16:31:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 26 周的回顾，ECMAScript 2025 正式发布，引入了 using 关键字和 Array.fromAsync 等新特性。同时，AI 领域Agentic RAG 概念的提出，强调了更智能的检索增强生成。前端工具方面，Prettier 发布了性能优化的新版本，Three.js 的色器语言 TSL 支持编译到多个目标环境。此外，Google 发布了开源的 Gemini CLI，为开发者提供了便捷的 AI 命令行交互工具。
---

:::note[AI 总结]

ECMAScript 2025 正式发布，引入了 using 关键字和 Array.fromAsync 等新特性。同时，AI 领域Agentic RAG 概念的提出，强调了更智能的检索增强生成。前端工具方面，Prettier 发布了性能优化的新版本，Three.js 的色器语言 TSL 支持编译到多个目标环境。此外，Google 发布了开源的 Gemini CLI，为开发者提供了便捷的 AI 命令行交互工具。

:::

<!-- truncate -->

##### [What's coming to JavaScript](https://deno.com/blog/updates-from-tc39)

TC39 第 108 次会议最近 提出了 4 个阶段的 9 项提案，代表了从粗略想法（阶段 0）到完全标准化的特征（阶段 4）。其中阶段 4 的提案基本上代表会在不久的将来成为 JavaScript 的一部分，这一次包含了使用 `using` 关键字自动化管理资源的使用和释放，`Array.fromAsync` 支持异步填充数组元素，`Error.isError()` 检查一个对象是否是错误等。另外，第 129 届 Ecma 大会批准了 ECMAScript 2025 语言规范，这意味着它现在正式成为标准。

- [Ecma International approves ECMAScript 2025: What’s new?](https://2ality.com/2025/06/ecmascript-2025.html)

`TC39` `JavaScript` `ECMAScript`

##### [RAG vs Agentic RAG](https://blog.bytebytego.com/p/ep169-rag-vs-agentic-rag)

传统的 RAG（Retrieval-Augmented Generation）检索简单、适应性有限，且依赖于静态知识，对于动态、实时信息的灵活性较差。Agentic RAG 对此进行了改进，引入了 AI 代理，这些代理可以做出决策、选择工具，甚至优化查询以获得更准确、更灵活的响应。

`RAG` `Agentic`

##### [Prettier 3.6.0](https://prettier.io/blog/2025/06/23/3.6.0)

Prettier v3.6 发布，现在经过性能优化的 CLI 工具只需通过一个 flag 配置即可启用。

`Prettier`

##### [Three.js Shading Language](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language)

Three.js 创建了自己的着色器语言，目的是为了让开发者更容易地创建 GPU 程序，其直接由 JavaScript 编写，且对类型友好，更重要的是其可以编译成不同目标环境的着色器代码，例如 WebGL、WebGPU 等。

`Three.js` `Shading` `Language`

##### [JPEG Image Format History](https://spectrum.ieee.org/jpeg-image-format-history)

JPEG 图像格式的发展历程。JPEG 的成功源于委员会驱动的标准化、DCT 压缩的效率性和历史时机（例如 GIF 专利问题推动采用）。尽管技术局限存在，它通过高兼容性和"降级友好"设计，奠定了互联网图像共享基础。虽然现在有许多更先进的图像格式（WebP、AVIF 等），但 JPEG 仍然是最广泛使用的格式之一并将长期存在。

`JPEG` `Image` `Format` `History`

##### [Gemini CLI: your open-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)

Google 发布了 Gemini CLI，一个开源的 AI 代理工具，它提供了一个命令行界面，可以让你通过自然语言与 AI 代理进行交互。同类型的还有 Claude Code、OpenAI Codex CLI 等等，不过 Google 不仅提供了免费版，更提供了业界最优惠的请求限制，每分钟 60 个模型请求和每天 1000 个模型请求。

`AI` `Gemini` `CLI` `Google`

##### [React Visualized](https://react.gg/visualized)

React Visualized 是一个以可视化方式来一步一步探索 React 的工作原理的教程。

`React.js` `Visualized`
