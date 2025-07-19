---
title: 「每周回顾」EP2024W1：LLM 年度回顾、V8 引擎优化及 Web 新趋势
date: 2024-01-02 18:00:00
update: 2024-01-02 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2024 年第 1 周的回顾，涵盖了字节序和后端缓存系统问题，探讨了 CSS 逻辑属性作为未来 Web 开发趋势，总结了 2023 年大型语言模型（LLM）的飞速发展，并介绍了 V8 引擎新一代 JIT 优化编译器 Maglev 如何提升 JavaScript 性能。
---

:::note[AI 总结]

涵盖了字节序和后端缓存系统问题，探讨了 CSS 逻辑属性作为未来 Web 开发趋势，总结了 2023 年大型语言模型（LLM）的飞速发展，并介绍了 V8 引擎新一代 JIT 优化编译器 Maglev 如何提升 JavaScript 性能。

:::

<!-- truncate -->

##### [EP93: Is Passkey Shaping a Passwordless Future?](https://blog.bytebytego.com/p/ep93-is-passkey-shaping-a-passwordless)

EP93 是今年第一期，其中关于字节序的内容又加强了记忆，还有一个就是后端缓存系统的 4 种问题及其解决方案是新了解的内容。

`《ByteByteGo》`

##### [Late to Logical](https://css-tricks.com/late-to-logical/)

前段时间注意到 web.dev 与 Chrome 开发者网站在过去的一年发生了大变样，今天刚好看到了 CSS 领域一些相关的新技术文章，不过其中提到了“物理属性”和“逻辑属性”的概念，以前倒是没仔细探究过。从目前的标准发展来看，“逻辑属性”将是未来的趋势。

- [Logical Properties](https://web.dev/learn/css/logical-properties)

`CSS` `web.dev`

##### [2023, year of open LLMs](https://huggingface.co/blog/2023-in-llms)

Hugging Face 发布了一篇博文，对过去的 2023 年进行了简单的总结，实际上也是对过去一年 AI 领域，尤其是 LLM 发展历程的简单梳理，由于在下半年接触并学习了相关知识，相关的技术概念倒也能看得懂。

`AI` `Hugging Face`

##### [Maglev - V8’s Fastest Optimizing JIT](https://v8.dev/blog/maglev)

Node.js 的 v8 引擎团队发布了新的博文，其中介绍了新的 JIT 优化编译器 Maglev，根据该团队的介绍，过去的 2023 年一整年 v8 的性能优化工作取得了很多成果，目前 v8 的编译器实际上多个部分组成，Maglev 仅是优化编译器的一部分。

`Node.js`
