---
title: AIGC 在可视化生成场景的探索路径
date: 2024-01-22 16:51:00
update: 2024-01-22 16:51:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - AI
  - 数据可视化
  - 实践案例
keywords: *ref_0
description: 记录一下自 2023 年中以来大概半年多时间中结合 AIGC 技术在可视化自动生成场景的探索尝试和实践经验。
---


2022 年接近年底时 OpenAI 发布了 ChatGPT3，实际上一开始业界还没有太大的反响，但在过了大概一个月即 12 月的时候，ChatGPT3 突然引爆了 AI 技术发展新的潮流，业内大部分企业与开发者都开始讨论 OpenAI 与它的产品 ChatGPT3，紧接着 2023 年则成了 “AI 元年”，业内都开始积极探索如何将这种对话聊天 AI 机器人的技术能力结合到自己的业务和产品中去，实现“智能化升级”，抓住下一个风口。

这里则是记录一下自 2023 年中以来大概半年多时间中结合 AIGC 技术在可视化自动生成场景进行的探索尝试和实践经验。通过对这段经历的回顾也能认识到对目前 AI 技术的认知变化，对未来更好的开发 AI 应用产品有一定的借鉴意义。

<!-- truncate -->

## 可视化自动生成

可视化图表可以直观的呈现数据集的趋势、分布等特征，人们因此可以更好的理解数据集。但是，对于普通用户来说，要完成数据分析是具有一定挑战性的，现有的工具软件也一直在通过各种方式降低用户门槛。

可视化自动生成正是为了解决上述问题的一个研究领域，业内像 Vega 推出了 [Voyager](https://vega.github.io/voyager/) 项目来期望实现这一目标，通过图表推荐和数据洞察来尽可能自动化的完成数据分析任务。

现在，结合 AI 技术实现可视化自动生成和数据洞察是一次新的机会，像 [Tableau](https://www.tableau.com/)、[Rath](https://kanaries.net/rath)、[Highcharts](https://www.highcharts.com/chat/gpt/) 等等都在积极进行探索尝试。

## 探索路径

下面，来简单回顾一下我们结合 AI 技术（大语言模型）和业务做的一些可视化生成场景的探索和实践结果，通过探索路径看看最终是如何成功将 AI 技术融合到可视化生成业务中的，另一方面也进一步了解目前 AI 技术的局限性。

### 生成可视化图表代码

像 ChatGPT3 这些同类产品展现出的 AI 生成文本的卓越能力让人们非常感兴趣，另外对于开发者来说代码本质上也是以文本形式编辑和保存，这就出现了 AI 生成文本的一个很好的应用场景，即代码生成，事实上社区也是这样发展的，出现了很多用于完成代码生成的专家大语言模型，微软也推出了 Github Copilot 产品用于 AI 辅助编码。

基于这样一个背景，**通过自然语言对话直接生成可视化图表代码来渲染可视化效果是一个非常理想的技术路径**，这也是我们开始探索的起点。

我们选择了资讯这一业务场景，由于其满足流量高、更新频率高、时效性强、新闻资讯以纯文本形式呈现缺乏表现力、可视化质量要求不高等特点，非常适合做 AIGC 可视化的落地应用。为此，我们首先筛选出一批适合生成可视化图表的资讯数据集，基于 OpenAI 提供的 API 服务，通过提示词工程的方式来进行技术验证。

一开始，我们先验证其代码生成能力，即**在上下文中给出图表模板代码和资讯文本，然后给出让其根据模版代码和资讯文本中的相关数据生成可视化代码的指令。**

很显然，我们遇到了大家都会遇到的问题，即大模型存在严重的“幻觉”，通过调整一些参数（例如 temperature）虽然能保证输出的稳定性，但依然无法确保准确性。另一方面，考虑到我们使用的是私有代码，尝试用一些开源项目（例如 echarts、chart.js）来进行验证，效果要好很多，这就意味着**模型训练过程中提供私有代码库相关的训练集效果会大幅改善。**

**一次解决一个复杂的问题显然对 AI 模型来说有很大的难度（实际上对于人类也是如此），我们尝试将任务进行拆分，分步与 AI 模型交互来解决代码生成的问题**。将其分解为以下几个步骤：

- 提取数据集
- 图表推荐
- 代码生成
- 渲染可视化效果

数据的准确性是用户的核心关注点，因此将数据集提取作为单独一步是非常有必要的；不同的数据集特征维度数量不同，可用于可视化呈现的形式也具有差异，提供默认的几类图表类型和相关信息，让 AI 模型结合资讯内容完成意图分析以推荐适合的可视化图表类型；最后一步，将数据集和对应类型图表的模板代码作为上下文提供给 AI 模型让其生成最终的代码。

从最终的结果来看，分步解决问题的确要比一次完成任务效果好很多，重要的是在每一步的结果产生后，我们可以**利用工程化手段将一些错误合理的修复掉**。当然，这里面有一个可能让很多人感觉疑惑的问题，即第三步的必要性，拥有数据集和图表类型后，为什么不能通过工程化手段直接生成最终代码？这是由于现有图表库的代码设计中不同类型图表的数据结构和解析逻辑不一致，导致工程侧难以实现该目标。另一方面，这里面也引申出一个很重要的问题，即要**实现工程代码与 AI 模型交互的前提是 AI 模型的输出必须结构化（即代码可解析）**，这也是为何 OpenAI 后来推出了 [JSON Mode](https://platform.openai.com/docs/guides/text-generation/json-mode) 特性的原因，当然社区对此问题已经有大量的讨论，可以通过提示词工程和轮询的方式来解决。

虽然效果已经得到改善，但仍然存在几个致命的缺陷导致这套方案无法落地在真实业务场景中：AI 模型对数据数值是敏感的，比常规文本更容易出现幻觉，这也就导致数据无法确保百分百准确，而这是数据可视化的关键；生成的代码可成功执行的概率低于 50%，远低于目标，虽然可能通过私有代码库训练集微调的方式来改善，但根据一些开源项目的对比验证结果来看，直接生成代码的技术路径似乎并不可行。

结合以上分析，基于文本直接生成图表代码的方案宣告失败，但这一过程中我们积累了大量的宝贵经验。

期间，我们也在积极关注社区在这一领域的进展，发现有很多项目在做类似的事情，经过简单尝试发现效果差不多；还有一部分项目基于已有的数据集和上下文通过图表推荐的方式生成代码实现可视化生成的目标。

### 图表推荐和生成代码

经过分析，我们发现从文本中提取数据集实际上是不必要的，通常的场景是用户已有数据集的情况下通过描述需求来进行数据分析。另一方面，通过向资讯业务的同事深入了解后才知道很多有丰富数据的资讯新闻实际上是由机器人生成的，即先有数据集才有的资讯新闻内容。

据此，我们开始新方案的尝试，即**结合标准的表格数据集和文本描述完成图表推荐再生成图表代码**。具体步骤为：

- 根据数据集和文本描述完成图表推荐
- 结合数据集和图表模板代码生成代码
- 渲染可视化效果

这里，我们对数据集的格式进行了约束，要求必须提供表格结构的数据集（一维对象数组），这是分析了现有的数据分析产品之后做出的决定，因为**表格结构是人们存储数据集的普遍格式，不需要进行预处理工作，标准的表格数据集约束隔离了业务，让任务变得更简单**。为了实现这一目标，业务侧需要依赖数据编排服务将数据集标准化，图表库侧则将数据解析的逻辑放在了图表的模板代码中，表格结构约束相当于成为隔离业务和图表库的协议层。

这一方案中依然依赖于 AI 模型生成最终的图表代码，相比于之前的效果已经有所改善，但仍然存在类似的问题：AI 模型对数据数值是敏感的，在提供的数据集准确的情况下最终生成的代码中数值有很大概率会出错；在数据集量级比较大的情况下，AI 模型提示词的上下文 token 数据具有硬性限制，这一问题无法解决（虽然目前随着技术发展超长上下文已经实现，但输入 token 数量越多意味着 AI 模型推理的时间越长，且输出越不稳定和时间更长）。

基于目前所做尝试的结果，再结合社区中相关的讨论，大家普遍的共识是：AI 模型的能力目前尚不足以完成复杂的专业任务，在代码生成场景更适合以辅助工具的形式出现，而不是面向最终用户的产品。换句话说，**AI 模型结合工程侧能力才是 AI 技术在业务中顺利落地的正确路径。**

在该方案的设计过程中，我们曾设想过将第二步代码生成也用工程化手段解决，但面临的困境是一个数据集如果数据维度较多，那么可利用该数据集生成不同的可视化效果，即便是同类型的图表，而这取决于用户意图，如何将用户意图翻译成代码逻辑用工程化手段基本是无法实现的。用简单的例子来说明，一个数据集中包含了一家公司的股价和利润率数据，它们均可用折线图或者柱状图来表达，最终可视化效果表达的是这家公司的股价还是利润率变化趋势取决于用户意图。

至此，我们基本已经明确几个关键点：数据集不经过 AI 模型处理，包含大量细节的代码片段也不应该由 AI 模型生成，AI 模型可以胜任图表推荐任务。

### 基于数据特征进行图表推荐

在进行下一步尝试之前，我们开始思考如何优化工程侧的代码，以使其更适合 AIGC 任务。例如，一开始不同类型图表的数据集格式要求和数据解析逻辑实现不一致，这增加了问题的复杂性，我们通过引入标准化的表格数据集约束来解决了这一问题。通过进一步了解目前可视化领域主流项目的动向，分析其衍生项目（例如 [Vega-Altair](https://altair-viz.github.io/)、[Plot](https://observablehq.com/plot/what-is-plot)）的 APIs 设计后，我们发现其都**遵循声明式的设计，并蕴含了图形语法的设计思想**，而这让我们看到了新的可能性。

于是，我们提出新的方案：**对图表库进行抽象封装设计，将数据解析逻辑抽象为声明式的数据编码配置，使其仅通过标准的表格数据集加几个数据编码配置参数即可渲染指定的可视化效果；基于可视化图表的数据特征训练 AI 可视化推荐模型。**

该方案经过验证，效果超出预期，并具备落地真实业务场景的可能性。在这一版本的方案中，工程侧的实现细节比较多，总的来说就做了两件事：一是对图表库的 APIs 进行了抽象封装，二是提供了 AI 可视化推荐模型的训练集。

具体的来说，我们在**渲染一个可视化图表时需要提供两部分参数，标准的表格数据集和数据编码配置，后者可以理解为一个指定数据集中的哪些字段映射到图表中的指定维度**，例如渲染一个柱状图需要 x 和 y 两个维度，对应的则是数据集中的两个不同字段。因此，我们可以**声明数据编码配置参数的类型定义约束**，例如柱状图的 x 维度要求为字符串类型数据，折线图的 x 维度要求为日期类型数据，这样就**为图表推荐任务提供了判断标准，形成了训练 AI 可视化推荐的模型训练集。**

这里需要注意的是，我们之前一直说图表推荐的结果是适合可视化的图表类型，其实这是不准确的，因为**一类图表可以有很多不同的用例**，例如属于折线图类型的有单折线、多折线、堆叠折线等等。所以，**AI 模型的训练集实际上代表的是一个个图表用例**，模型最终推荐的结果也是对应的用例类型和数据编码配置参数，可以说**图表推荐是根据数据集的特征来判断的，该结果也可以通过人工标注的方式进行调整。**

现阶段，基于该模式，我们已经成功将 AIGC 可视化能力落地在多个业务场景，快速生成可视化图表效果来帮助用户直观的了解数据集信息。后续面临的问题则是，常规的可视化图表效果不具备吸引力，且仅能表达数据集的显式信息，而这些问题均可以尝试结合 AI 技术来解决，例如基于自然语言的图表效果微调，AI 数据洞察等等。

另外，值得一提的是微软的 [LIDA](https://microsoft.github.io/lida/) 项目，其目标是建立一个基于 LLMs 自动生成可视化和信息图表的系统，其设计较为复杂且更具备通用性，设计思想有一定的借鉴意义。

## 参考资源

- <https://vega.github.io/voyager/>
- <https://www.highcharts.com/chat/gpt/>
- <https://github.com/victordibia/data2vis>
- <https://altair-viz.github.io/>
- <https://observablehq.com/plot/what-is-plot>
- <https://microsoft.github.io/lida/>
