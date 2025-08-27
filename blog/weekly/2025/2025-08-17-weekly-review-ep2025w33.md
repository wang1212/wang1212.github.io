---
title: 「每周回顾」EP2025W33：GitHub 并入微软、Cursor 调整收费、Google 推出 Gemma 3
date: 2025-08-17 18:38:00
update: 2025-08-17 18:28:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 33 周的回顾，Google 推出轻量级开源模型 Gemma 3 和 AI 编码代理 Jules 更新；Windsurf 与 Devin 团队合作强化 IDE 功能；Cursor 推出 Agent CLI 并调整计费，引发社区不满；亚马逊的 AI IDE Kiro 正式上线并公布收费模式；智谱发布多模态模型 GLM-4.5V；pnpm 新版本支持多种 JS 运行时；GitHub CEO 宣布离职，公司将并入微软 CoreAI。
---

:::note[AI 总结]

Google 推出轻量级开源模型 Gemma 3 和 AI 编码代理 Jules 更新；Windsurf 与 Devin 团队合作强化 IDE 功能；Cursor 推出 Agent CLI 并调整计费，引发社区不满；亚马逊的 AI IDE Kiro 正式上线并公布收费模式；智谱发布多模态模型 GLM-4.5V；pnpm 新版本支持多种 JS 运行时；GitHub CEO 宣布离职，公司将并入微软 CoreAI。

:::

<!-- truncate -->

##### [Codebase to LLM prompt, complete with file tree, templating, token count](https://www.opensourceprojects.dev/post/1956768219903185389)

一个开源的 CLI 工具，可以把代码库转换为提示词，以便基于上下文来对代码库进行分析提问。类似的工具还有 Repomix，但对于大型代码库来说，打包后的提示词文件高达几 MB，对模型的上下文窗口大小形成挑战。

`Open Source` `Code2prompt` `Codebase` `LLM` `Prompt`

##### [Introducing Gemma 3 270M: The compact model for hyper-efficient AI](https://developers.googleblog.com/en/introducing-gemma-3-270m/)

Gemma 是 Google 的开源模型，以小规模移动设备优化为目标。现在发布了 Gemma 3，拥有 2.7 亿参数，具有强大的指令遵循和文本结构化能力，支持微调。

`Google` `Gemini`

##### [jules Changelog](https://jules.google/docs/changelog/)

Google 的 AI 异步编码代理产品 Jules 发布了多项重要更新，现在支持 Web 搜索，任务执行过程中可以将代码导入 GitHub 实现人工介入，虚拟机存储增加到 20GB 上限以支持大型项目。

`Google` `jules` `Changelog`

##### [Windsurf Wave 12: Devin features in Windsurf](https://windsurf.com/blog/windsurf-wave-12)

Windsurf 发布了 Wave 12，带来重磅更新，推出了被构建 AI 程序员 Devin 的公司收购后联手合作构建的新功能，将 DeepWiki 导入了 AI IDE，让代码分析更简单快捷。

`Windsurf` `Wave 12` `Devin` `DeepWiki`

##### [Cursor Agent CLI](https://cursor.com/ja/blog/cli)

Cursor 发布了 Agent CLI，现在 Cursor 正从一个 AI 编码 IDE 转向一个 AI 编程平台，这包括 Web Agent、IDE、CLI 等多个产品。另外，Cursor 也公布了一项重要更新，Auto 模式将不再无限量，而是计入用户的账户额度，近期频繁的调整计费方案，社区已经对 Cursor 表达了不满，许多人都在寻找替代品。

- [Updates to Teams and Auto](https://cursor.com/ja/blog/aug-2025-pricing)

`Cursor` `Agent` `CLI`

##### [Kiro Pricing Update + Waitlist Invites Coming Soon](https://kiro.dev/blog/pricing-waitlist-updates/)

亚马逊的 AI 编码 IDE 已经结束内测，正式开放给所有用户，并公布了产品计费方案，采用两种请求模型进行计费：Spec 请求和 Vibe 请求。

`Amazon` `Kiro`

##### [GLM-4.5V](https://huggingface.co/zai-org/GLM-4.5V)

智谱新发布了 GLM 4.5V 多模态推理模型，是 GLM 4.5 开源的延续。VLM 也是目前关注越来越多的领域，因为任务越来越复杂，多模态能力成为解决这些问题不可或缺的能力。

`Z.AI` `GLM` `4.5V`

##### [pnpm 10.14](https://pnpm.io/blog/releases/10.14)

pnpm 现在支持不同的 JS 运行时，例如 Deno、Bun 等等。

`pnpm` `10.14`

##### [Auf Wiedersehen, GitHub ♥️](https://github.blog/news-insights/company-news/goodbye-github/)

GitHub 现任 CEO Thomas Dohmke 宣布离职，将持续任职到 2025 年底。后续，GitHub 将不再作为独立主体存在，而是会被合并到微软的 CoreAI 团队。也许，是时候出现 GitHub 的下一个替代者了？

`GitHub` `Microsoft` `Thomas Dohmke`
