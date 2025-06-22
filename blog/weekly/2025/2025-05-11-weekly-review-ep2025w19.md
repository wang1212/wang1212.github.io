---
title: 「每周回顾」EP2025W19：服务端组件、Node.js 24 及 Llama 4
date: 2025-05-11 18:00:00
update: 2025-05-11 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 19 周的回顾，Dan Abramov 探讨了 Astro 组件与 React Server Components 的差异，建议从 Astro 入手理解服务端组件。Node.js v24.0.0 发布，更新包括默认附带 npm v11。Meta 的 Llama 4 采用混合专家架构及原生多模态训练，支持千万级 Token 上下文，但对硬件要求更高。V8 引擎新增显式编译提示，开发者可通过注释优化 JavaScript 启动性能。
---

:::note[AI 总结]

Dan Abramov 探讨了 Astro 组件与 React Server Components 的差异，建议从 Astro 入手理解服务端组件。Node.js v24.0.0 发布，更新包括默认附带 npm v11。Meta 的 Llama 4 采用混合专家架构及原生多模态训练，支持千万级 Token 上下文，但对硬件要求更高。V8 引擎新增显式编译提示，开发者可通过注释优化 JavaScript 启动性能。

:::

<!-- truncate -->

##### [RSC for Astro Developers](https://overreacted.io/rsc-for-astro-developers)

Dan Abramov 新的博文，探讨了 Astro 中用于服务端的 Astro Components 和 React 的 Server Components 的差异，两者的数据模型是相似的，都是单向数据流，相对于前者，RSC 使用纯 JavaScript 函数，无文件格式限制。作者建议开发者如果对于 RSC 感到困惑，或许可以从 Astro 开始了解服务端组件这一技术概念。

`React.js` `Astro` `React Server Component`

##### [Node v24.0.0 (Current)](https://nodejs.org/en/blog/release/v24.0.0)

Node.js v24.0.0 发布，带多多项重要变化，包括默认附带 npm v11，`URLPattern` API 现在全局可用，测试运行器现在可以自动等待子测试完成等等。

`Node.js` `npm`

##### [Llama 4: The Challenges of Creating a Frontier-Level LLM](https://cameronrwolfe.substack.com/p/llama-4)

Llama 4 和 Meta 在研究战略上的巨大转变背后的完整故事，Llama 首次采用了混合专家（MOE）架构，并在多模态模型实现上采用了顶级实验室通用的做法，即统一的嵌入架构和原生的多模态训练方式，新的模型支持千万级 TOKEN 上下文。Meta 此次的重大转型也伴随着风险，作为开源标杆的 Llama，后续对硬件性能的要求将更高，如何平衡开源社区的成本也是值得考虑的关键点。

`AI` `LLM` `LLama`

##### [V8: Explicit Compile Hints](https://v8.dev/blog/explicit-compile-hints)

JavaScript 启动时的解析编译延迟影响网页加载性能，V8 需在即时编译（eager）与延迟编译（lazy）间抉择，开发者可以通过添加魔术注释标记关键 JS 文件，主动控制编译时机，相当于给 V8 引擎提了个醒。

`V8` `编译器` `性能优化`
