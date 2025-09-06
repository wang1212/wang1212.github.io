---
title: 「每周回顾」EP2025W35：Zed 集成 Gemini CLI、Claude Chrome 扩展测试及 AI 图像模型新进展
date: 2025-08-31 23:38:00
update: 2025-08-31 23:28:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 35 周的回顾，Vercel 推出 Streamdown，优化流式聊天内容渲染；Zed 支持 Gemini CLI 并提出 Agent Client Protocol 规范，促进 IDE 智能体标准化；Anthropic 发布 Claude for Chrome 扩展，进入早期测试；a16z 公布生成式 AI 应用榜单，Google Gemini 等增长显著，ChatGPT 仍领先；Google 发布 Gemini 2.5 Flash Image 模型，支持图像编辑功能，千问团队开源 Qwen-Image-Edit 模型。这些进展反映了 AI、IDE 和浏览器扩展领域的快速创新。
---

:::note[AI 总结]

本周技术新闻亮点包括：Vercel 推出 Streamdown，优化流式聊天内容渲染；Zed 支持 Gemini CLI 并提出 Agent Client Protocol 规范，促进 IDE 智能体标准化；Anthropic 发布 Claude for Chrome 扩展，进入早期测试；a16z 公布生成式 AI 应用榜单，Google Gemini 等增长显著，ChatGPT 仍领先；Google 发布 Gemini 2.5 Flash Image 模型，支持图像编辑功能，千问团队开源 Qwen-Image-Edit 模型。这些进展反映了 AI、IDE 和浏览器扩展领域的快速创新。

:::

<!-- truncate -->

##### [Streamdown](https://streamdown.ai/)

Vercel 发布了 react-markdown 的替代品 Streamdown，专门为流式聊天内容渲染设计。

`Chat` `Markdown` `React`

##### [Bring Your Own Agent to Zed — Featuring Gemini CLI](https://zed.dev/blog/bring-your-own-agent-to-zed)

自从 Gemini CLI 宣布集成到 VS Code 后，现在 Zed 也支持 Gemini CLI 了，这次不同的是，Zed 团队提出了一个智能体客户端协议（Agent Client Protocol，ACP），并公布了 ACP 的规范，这将成为比 CLI 编码代理继承到 IDE 标准化模式。近期，CodeX CLI 也支持了与 VS Code 集成使用。

- [Codex IDE extension](https://developers.openai.com/codex/ide/)
- [Agent Client Protocol](https://agentclientprotocol.com/overview/introduction)

`AI` `Zed` `ACP` `OpenAI` `Codex` `IDE` `CLI Code Agent`

##### [Piloting Claude for Chrome](https://www.anthropic.com/news/claude-for-chrome)

Anthropic 发布了 Claude for Chrome，一个 Chrome 扩展，可以将 Claude 集成到 Chrome 浏览器中，目前还处于早期预览版，仅有部分用户被邀请测试。

`Anthropic` `Claude` `Chrome`

##### [The Top 100 [Gen AI] Consumer Apps](<https://a16z.com/100-gen-ai-apps-5/>)

风投机构发布了最新一期前 100 生成式应用的榜单（每 6 个月发布一次），Google 的 Gemini、NotebookLM、Flow 等产品获得了突破式增长，ChatGPT 仍然是聊天助手的霸主。

`AI` `Apps`

##### [Introducing Gemini 2.5 Flash Image, our state-of-the-art image model](https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/)

Goolge 发布了代号为 Nano-Banana 的最新版本图像生成模型 Gemini 2.5 Flash Image，可以实现图像编辑、图像融合等等功能，一时之间风靡社区，现在 Gemini App 免费提供给所有用户。另外，千问团队也宣布开源了图像编辑模型 Qwen-Image-Edit。

- [Qwen-Image-Edit: Image Editing with Higher Quality and Efficiency](https://qwenlm.github.io/blog/qwen-image-edit/)

`AI` `Google` `Gemini` `Image` `Qwen`
