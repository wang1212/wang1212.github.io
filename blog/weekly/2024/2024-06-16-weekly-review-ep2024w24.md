---
title: 「每周回顾」EP2024W24：Node.js 内存泄漏、AI 领域精选及 Self-RAG 新范式
date: 2024-06-11 18:00:00
update: 2024-06-11 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2024 年第 24 周的回顾，一篇深入分析了 Node.js 中 setTimeout 导致的内存泄漏问题，揭示了其与浏览器环境的差异。同时，我们精选了 ICLR 2024 的最佳 AI 学术论文及演讲资源。此外，还介绍了一种针对 RAG（检索增强生成）技术缺陷提出的新范式 Self-RAG，该技术通过自我反思显著提升了语言模型的输出质量。
---

:::note[AI 总结]

一篇深入分析了 Node.js 中 setTimeout 导致的内存泄漏问题，揭示了其与浏览器环境的差异。同时，我们精选了 ICLR 2024 的最佳 AI 学术论文及演讲资源。此外，还介绍了一种针对 RAG（检索增强生成）技术缺陷提出的新范式 Self-RAG，该技术通过自我反思显著提升了语言模型的输出质量。

:::

<!-- truncate -->

##### [Your Node is Leaking Memory? setTimeout Could be the Reason](https://lucumr.pocoo.org/2024/6/5/node-timeout/)

一篇线上问题分析的文章，原来 Node.js 中的 setTimeout 调用返回的是一个对象，而浏览器中该 API 返回的是一个数字 id，也正因为这个差异导致 Node.js 中如果保存了该对象的引用的情况下，只是简单的调用 clearTimeout 会导致内存泄露的问题。

`Node.js` `内存泄露`

##### [ICLR 2024 — Best Papers & Talks](https://www.latent.space/p/iclr-2024-benchmarks-agents)

一些精选的 AI 领域学术论文和视频资源。

`AI` `论文`

##### [Self-RAG: Learning to Retrieve, Generate and Critique through Self-Reflections](https://selfrag.github.io/)

一篇针对目前 RAG 技术架构缺陷提出的新范式，可通过自我反思提高语言模型（LM）的输出质量。

`AI` `RAG`
