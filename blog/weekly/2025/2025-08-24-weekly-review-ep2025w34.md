---
title: 「每周回顾」EP2025W34：Google 系列产品更新，阿里开源图像模型
date: 2025-08-24 23:38:00
update: 2025-08-24 23:28:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2025 年第 34 周的回顾，Google 推出 Gemini 2.5 Flash 图像模型与 Code Assist 新功能，进一步完善开发者工具矩阵；阿里开源 Qwen-Image-Edit，字节开源 Seed-OSS，DeepSeek 发布 3.1；英伟达提出小语言模型是 Agentic AI 的未来；OpenAI 发布 AGENTS.md 规范。Anthropic 推出高等教育 AI 课程，Windsurf SWE 模型转为免费。SimilarWeb 报告显示 AI 写作与陪伴领域持续下滑，客户支持场景出现增长。
---

:::note[AI 总结]

Google 推出 Gemini 2.5 Flash 图像模型与 Code Assist 新功能，进一步完善开发者工具矩阵；阿里开源 Qwen-Image-Edit，字节开源 Seed-OSS，DeepSeek 发布 3.1；英伟达提出小语言模型是 Agentic AI 的未来；OpenAI 发布 AGENTS.md 规范。Anthropic 推出高等教育 AI 课程，Windsurf SWE 模型转为免费。SimilarWeb 报告显示 AI 写作与陪伴领域持续下滑，客户支持场景出现增长。

:::

<!-- truncate -->

##### [Introducing Gemini 2.5 Flash Image, our state-of-the-art image model](https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/)

图像生成与编辑领域最近火热，Google 也推出了 Gemini 2.5 Flash，新版本图像生成编辑模型，实测效果不错。

`Google` `Gemini Flash` `Image`

##### [What's new in Gemini Code Assist](https://developers.googleblog.com/en/new-in-gemini-code-assist/)

Google 为 Gemini Code Assist 引入了新的功能，智能体模式，可以更好的完成复杂的多步任务。智能体模式已经是多数 AI 编码代理插件的标配，Google 算是姗姗来迟，但总归是有了。

`Google` `Gemini Code Assist`

##### [Qwen-Image-Edit](https://huggingface.co/Qwen/Qwen-Image-Edit)

阿里现在开源了 Qwen-Image-Edit，一个图像编辑模型，支持阿里已经开源了图像生成和编辑模型。

`AI` `Qwen` `Image Edit` `OpenSource`

##### [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153v1)

英伟达的新论文揭示了新的观点：SLM（小语言模型）才是 Agentic AI 的未来，经济高效。

简单的来说，对于很多简单的任务直接用 LLM 不仅贵而且相当于“大炮打蚊子”，大材小用。随着现在 SLM 的发展不断成熟，小模型在指令跟随，工具调用，格式化输出等领域也不输于大模型。

就自己在平时构建智能体的开发过程中感受来看，确实很多简单任务用 SLM 输出不仅更快，而且结果也不差。现在的 AI 智能体系统在处理任务时通常会包含多次 LLM 服务调用，导致响应非常慢，在部分节点换用 SLM 确实是个不错的选择。

小模型只要性能不错，Token 输出足够快，完全是更好的选择。

`NVIDIA` `Small Language Models` `Agentic AI`

##### [Anthropic launches higher education advisory board and AI Fluency courses](https://www.anthropic.com/news/anthropic-higher-education-initiatives)

Anthropic 发布了一系列新的 AI 课程，来帮助学生和老师更好的了解 AI 以及 AI 教学。

`Anthropic` `Higher Education` `Cursor`

##### [Seed-OSS Open-Source Models](https://huggingface.co/collections/ByteDance-Seed/seed-oss-68a609f4201e788db05b5dcd)

字节跳动开源了 Seed-OSS 模型，该模型专为强大的长篇文本，推理，代理和一般功能以及多功能开发人员友好的功能而设计。

另外，DeepSeek 也在近期低调发布了 3.1 版本。

`AI` `ByteDance` `Seed` `OpenSource`

##### [AGENTS.md](https://agents.md/)

OpenAI 发布了 AGENTS.md 开发规范，一个 AI 编码代理的配置文档，现在终于要终结混乱的规则、工作流、智能体配置文件了。

`AI` `CCode Agent`

##### [Here’s which Google AI developer tool to use for each situation](https://cloud.google.com/blog/products/ai-machine-learning/choose-the-right-google-ai-developer-tool-for-your-workflow)

Google 发布了官方的 AI 编码代理适用场景指南，帮助开发者选择合适的工具。自此，Google 已经构建起了完整的 AI 编码代理产品矩阵，包括 Jules、Gemini CLI、Gemini Code Assistant、Google AI Studio 等。

`Google` `AI` `Developer` `Code Agent`

##### [Windsurf](https://windsurf.com/)

Windsurf 已经取消了一直以来提供限免的 SWE 模型的 Lite 版本，好消息是 SWE 现在直接默认免费提供，对于一些简单的任务来说，SWE 模型表现已经足够了。

`AI IDE`

##### [Global AI Tracker](https://www.similarweb.com/corp/wp-content/uploads/2025/08/attachment-Global-AI-Tracker-8.18.pdf)

SimilarWeb 每半个月发布一期全球 AI 站点追踪分析报告，我们可以从中看出一些有趣的现象，比如在月初的报告中，AI 场景品类中仅 AI 旅游有了正增长，其它诸如 AI 写作、AI 陪伴等领域出现萎缩。现在新一期报告已经发布，可以看到 AI 写作、AI 陪伴领域仍然在持续下滑，而客户支持与体验领域则有了初步的增长迹象。

`AI` `SimilarWeb`
