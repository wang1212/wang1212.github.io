---
title: 「每周回顾」EP2025W27：GitHub Copilot Chat 开源
date: 2025-07-06 21:43:00
update: 2025-07-06 21:46:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 27 周的回顾，微软宣布开源 GitHub Copilot Chat 扩展，旨在巩固 VSCode 在开发者心中的地位，并将其打造成开源的 AI 编辑器，以应对 Cursor、Windsurf 等竞品的挑战。同时，文章也介绍了奖励模型（RM）作为 LLM 研究基石的重要性，以及上下文工程如何提升 LLM 性能。此外，20 年后 PNG 标准的更新也值得关注，它带来了对 HDR 和 APNG 动画等新特性支持。
---

:::note[AI 总结]

微软宣布开源 GitHub Copilot Chat 扩展，旨在巩固 VSCode 在开发者心中的地位，并将其打造成开源的 AI 编辑器，以应对 Cursor、Windsurf 等竞品的挑战。同时，文章也介绍了奖励模型（RM）作为 LLM 研究基石的重要性，以及上下文工程如何提升 LLM 性能。此外，20 年后 PNG 标准的更新也值得关注，它带来了对 HDR 和 APNG 动画等新特性支持。

:::

<!-- truncate -->

##### [Open Source AI Editor: First Milestone4](https://code.visualstudio.com/blogs/2025/06/30/openSourceAIEditorFirstMilestone)

VSCode 在不久前就宣布将开源 GitHub Copilot Chat 扩展，微软的这一举动的原因不得而知，但从最近编码智能体的发展来看，GitHub Copilot 从引领者已经变为落后的一员，Cursor、Windsurf 这些被开发者称赞的竞品目前是以 VSCode 开源项目的分支来进行开发维护的，很显然这对于社区来说是不友好的，对于商业公司来说也增加了巨大的维护成本，而这一切都是因为 VSCode 目前对于扩展的限制还是太多了。微软开源 GitHub Copilot Chat 扩展的重要原因想必包含了在这场竞争中一定要稳固 VSCode 在开发者心中的地位，就像他们说的，将其打造为开源的 AI 编辑器。

`VSCode` `GitHub Copilot` `Open Source`

##### [Reward Models](https://cameronrwolfe.substack.com/p/reward-models)

奖励模型 (RM) 是大型语言模型 (LLM) 研究的基石，通过将人类偏好融入训练过程，实现了显著的进步。尽管 RM 发挥着至关重要的作用，但它却常常被忽视。这篇文章针对奖励模型进行了详细的讨论和解读，即便不是算法相关的开发者也能很好的理解，这对我们了解现如今 LLMs 的原理和分析问题将会有极大的帮助。这篇文章中也提到了现如今可以简单评估 LLMs 输出的一种方案，即使用 LLMs 作为裁判，以此来替代人工评估。

- [Using LLMs for Evaluation](https://cameronrwolfe.substack.com/p/llm-as-a-judge)

`LLM` `Reward Model`

##### [Context Engineering Guide](https://nlp.elvissaravia.com/p/context-engineering-guide)

很多人都说提示词工程已经不重要了，实际上它现在演变成了一种更具工程化的概念，即上下文工程（Context Engineering），通过合理组织上下文，可以显著提高 LLMs 的性能。

`LLM` `Prompt Engineering` `Context Engineering`

##### [PNG is back](https://www.programmax.net/articles/png-is-back/)

罕见的，20 年后 PNG 的规范标准更新了，这一次更新的亮点是对 HDR 的部分支持，识别 APNG 动画，支持 Exif 数据等等。

`PNG` `Specification`
