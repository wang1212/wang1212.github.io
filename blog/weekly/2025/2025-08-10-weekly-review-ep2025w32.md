---
title: 「每周回顾」EP2025W32：GPT-5 发布、Gemini 新功能、gpt-oss 开源及多项开发者工具更新
date: 2025-08-10 14:32:00
update: 2025-08-10 14:32:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 32 周的回顾，OpenAI 发布统一系统 GPT-5 及开源模型集 gpt-oss；Google 推出 Gemini Storybook、“引导学习”模式及 Jules 正式版，并发布 Genie 3 世界模型；GitHub 强化 Copilot 代码审查与 Actions 自动化；V8 优化 JSON.stringify 性能；Chrome DevTools 新增 CSS 基线显示；ECharts 6 发布多项内置图表；Bytebytego 解析 LLM 世界观构建原理。
---

:::note[AI 总结]

本周 OpenAI 发布统一系统 GPT-5 及开源模型集 gpt-oss；Google 推出 Gemini Storybook、“引导学习”模式及 Jules 正式版，并发布 Genie 3 世界模型；GitHub 强化 Copilot 代码审查与 Actions 自动化；V8 优化 JSON.stringify 性能；Chrome DevTools 新增 CSS 基线显示；ECharts 6 发布多项内置图表；Bytebytego 解析 LLM 世界观构建原理。

:::

<!-- truncate -->

##### [Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)

OpenAI 发布了 GPT-5，现在它被定义为一个统一系统，具有智能的路由器，不再需要用户手动切换不同的模式，并在编码、写作等场景相比 GPT-4o 有显著提升。

`OpenAI` `GPT-5`

##### [Introducing Gemini Storybook](https://gemini.google/overview/storybook/)

Gemini 在本周发布了一个小功能，即支持生成故事书，目前来看效果还不错。另外，自上周 ChatGPT 发布学习模式后， Gemini 也推出了类似的功能，称为“引导学习”模式，用户可以通过互动式的方式循序渐进的学习某个知识。

- [ChatGPT Study Mode](https://openai.com/index/chatgpt-study-mode/)
- [Guided Learning](https://blog.google/outreach-initiatives/education/guided-learning/)

`Gemini` `Storybook`

##### [Introducing gpt-oss](https://openai.com/index/introducing-gpt-oss/)

OpenAI 宣布了 gpt-oss，一个开源的 AI 模型集合，其中 20B 模型可以在消费平台运行，仅需要 16GB 内存左右，据官方透露，其性能与 o4-mini 接近，这是 OpenAI 时隔多年后又一次为社区带来开源技术。与此同时，Google 也宣布了新的世界模型 Genie 3，相对于第二代提升很大，可以生成数分钟的视频。

- [Genie 3: A New Frontier for World Models](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/)

`OpenAI` `gpt-oss` `Genie`

##### [How to use GitHub Copilot to level up your code reviews and pull requests](https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-to-level-up-your-code-reviews-and-pull-requests/)

GitHub 发布了文章介绍了如何使用 GitHub Copilot 来提升代码审查和 Pull Request 的质量。Google 的 Gemini 也发布了 Github Action 工具。

- [Introducing Gemini CLI and GitHub Actions](https://blog.google/technology/developers/introducing-gemini-cli-github-actions/)

`GitHub` `Copilot` `Code Review` `Pull Request`

##### [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)

V8 发布了文章介绍了 JSON.stringify 的优化，主要介绍了 V8 的优化策略和技术细节。

`V8` `JSON.stringify`

##### [Jules, our asynchronous coding agent, is now available for everyone.](https://blog.google/technology/google-labs/jules-now-available/)

Jules 是 Google Labs 发布的异步代码代理，现在结束了测试发布了正式版并对所有人开放。

`Google` `Jules` `Code Agent`

##### [Automate your project with GitHub Models in Actions](https://github.blog/ai-and-ml/generative-ai/automate-your-project-with-github-models-in-actions/)

前不久，GitHub 发布了 GitHub Models，现在可以在 GitHub Actions 中使用 GitHub Models 引入 AI 能力来自动化完成一些事情，比如 issues 分析、根据 PR 自动生成 changelog 等。

`GitHub` `Actions` `AI`

##### [Baseline for CSS properties now in Chrome DevTools](https://web.dev/blog/baseline-devtools-css)

Chrome DevTools 中的 Elements 面板现在支持显示 CSS 属性的基线值，以帮助开发者更方便的了解兼容性情况。

`Chrome` `DevTools` `CSS` `Baseline`

##### [How LLMs See the World](https://blog.bytebytego.com/p/how-llms-see-the-world)

Bytebytego 发布了文章介绍了 LLMs 了解世界的原理，主要介绍了文本 Tokenization 的过程和一些相关技术对比。

`LLM` `Tokenization`

##### [Apache ECharts 6 New Features](https://echarts.apache.org/handbook/en/basics/release-note/v6-feature/)

前不久，Apache ECharts 发布了 6.0 版本，带来了不少新特性，像一些过去需要我们自己开发图表已经内置支持，例如蜂群图。

`ECharts` `6.0`
