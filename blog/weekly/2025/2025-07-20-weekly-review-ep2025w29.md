---
title: 「每周回顾」EP2025W29：AI 工具进展与 WebAssembly 的十年
date: 2025-07-20 13:43:00
update: 2025-07-20 18:25:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 29  周的回顾，聚焦 AI 领域，Windsurf IDE 迎来重大更新，支持语音输入与历史对话引用。OpenAI 发布 ChatGPT Agent，整合交互、信息合成与对话能力。月之暗面推出开源大模型 Kimi-K2，强调规划与工具调用。此外，Stack Overflow 宣布转型，旨在重建高质量开发者社区并引入 AI 问答搜索，以应对生成式 AI 带来的挑战。WebAssembly 发展十年，仍待广泛成熟的应用场景。
---

:::note[AI 总结]

聚焦 AI 领域，Windsurf IDE迎来重大更新，支持语音输入与历史对话引用。OpenAI 发布 ChatGPT Agent，整合交互、信息合成与对话能力。月之暗面推出开源大模型 Kimi-K2，强调规划与工具调用。此外，Stack Overflow 宣布转型，旨在重建高质量开发者社区并引入 AI 问答搜索，以应对生成式 AI 带来的挑战。WebAssembly 发展十年，仍待广泛成熟的应用场景。

:::

<!-- truncate -->

##### [Windsurf Wave 11](https://windsurf.com/blog/windsurf-wave-11)

过去的两周，AI IDE 领域发生了一些重大变化，主角便是 Windsurf，现在 Windsurf 的变化终于具有了确定性，也发布最新一次大更新，带来了语音输入支持，以及对历史对话的引用特性。

`Windsurf` `AI` `Code Agent`

##### [WebAssembly: Yes, but for What?](https://queue.acm.org/detail.cfm?id=3746171)

不知不觉间，WebAssembly 已经发展了十年，从最初的实验性技术，到如今已经成为成熟的 Web 技术之一。但就目前的发展来看，WebAssembly 还没有广泛且成熟的场景应用，可能最成功的场景之一便是 SQLite 的 WebAssembly 版本，使得 Chrome 放弃了 WebSQL 规范。除此之外，WebAssembly 最让大家觉得有潜力的便是高性能场景，毕竟 JavaScript 相对于 C++ 等语言来说，性能差距还是比较明显的，但即便如此这仍然不是一个成熟的应用场景。

`WebAssembly`

##### [Introducing ChatGPT agent: bridging research and action](https://openai.com/index/introducing-chatgpt-agent/)

OpenAI 发布了 ChatGPT Agent，这是一个基于 LLM 的智能体，可以与用户进行交互，并执行一些任务。据称，ChatGPT Agent 的性能在多个基准测试中都表现出色，它融合了先前突破的三大优势：Operator 与网站的交互能力、Deep Research 的信息合成能力，以及 ChatGPT 的智能和对话流畅性。

`ChatGPT Agent` `AI`

##### [Kimi-K2](https://moonshotai.github.io/Kimi-K2/)

月之暗面发布了迄今为止参数规模最大的开源 LLM，并在各个领域的基准测试取得优秀成绩，这是一个面向智能体的大模型，具备规划能力以及优秀的工具调用能力。

`Kimi K2` `LLM` `AI`

##### [A New Era of Stack Overflow](https://stackoverflow.blog/2025/07/10/a-new-era-of-stack-overflow/)

Stack Overflow 宣布了未来的发展方向以及使命和愿景，对于喜欢 Stack Overflow 的开发者来说，这是一个值得期待的消息。由于两三年前突然爆火的生成式 AI 浪潮，Stack Overflow 的用户数量急剧下降，似乎全世界都认为 Stack Overflow 将会衰退，但可能一个简单的真相被忽略了，那就是现有的 LLMs 训练数据依赖于高质量的数据集，而 Stack Overflow 的数据恰恰是高质量的数据集，当我们的时代不算发展，LLMs 所依赖的高质量数据集将会更加匮乏，而 Stack Overflow 的未来目标方向则是围绕如何使其社区重回开发者中心，并积累高质量的数据集。同时，Stack Overflow 也为开发者带来了自然语言问答搜索的功能，帮助开发者更快速的找到可信的答案。

- [Stack Overflow AI](https://stackoverflow.ai/)

`Stack Overflow` `AI`
