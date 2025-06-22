---
title: 「每周回顾」EP2025W23：探索 Claude 4 系统提示与渐进式 JSON
date: 2025-06-08 18:00:00
update: 2025-06-08 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 23 周的回顾，Anthropic 发布了 Claude 4 系统提示符，揭示了其如何通过提示工程塑造模型行为。同时，Dan Abramov 提出了渐进式 JSON 概念，借鉴 JPEG 渐进式加载，通过广度优先传输和占位符使客户端能部分处理数据，提升并行性，旨在解决数据加载瓶颈。React Server Components (RSC) 也采用了此流式传输模型，作者呼吁工具生态系统采纳渐进式流式传输以优化性能。
---

:::note[AI 总结]

Anthropic 发布了 Claude 4 系统提示符，揭示了其如何通过提示工程塑造模型行为。同时，Dan Abramov 提出了渐进式 JSON 概念，借鉴 JPEG 渐进式加载，通过广度优先传输和占位符使客户端能部分处理数据，提升并行性，旨在解决数据加载瓶颈。React Server Components (RSC) 也采用了此流式传输模型，作者呼吁工具生态系统采纳渐进式流式传输以优化性能。

:::

<!-- truncate -->

##### [Highlights from the Claude 4 system prompt](https://simonwillison.net/2025/May/25/claude-4-system-prompt/)

Anthropic 将其聊天模型的大部分系统提示符作为发行说明的一部分发布，让我们有机会来了解 Anthropic 如何通过提示工程塑造模型行为。

`AI` `Anthropic` `Claude` `提示工程`

##### [Progressive JSON](https://overreacted.io/progressive-json/)

Dan Abramov 带来了他新的一篇精彩的博文，通过类比 JPEG 渐进式加载的方式，提出渐进式 JSON，采用广度优先传输与占位符机制（如 $ 符号），使客户端能部分处理数据而无需全量加载，提升并行性。React Server Components (RSC) 的流式传输也应用了此模型。作者呼吁工具生态采纳渐进式流式传输，以解决单一慢操作拖累整体性能的工程瓶颈（如数据库延迟），并强调需编程模型（如 React 的 `<Suspense>`）优雅处理不完整数据。

`React.js` `渐进式 JSON`
