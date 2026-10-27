---
title: 精选资源：构建生产级 AI Agent
date: 2025-12-07 21:17:00
update: 2026-10-28 02:17:34
authors: wang1212
tags: &ref_0
  - 精选资源
  - 计算机技术
  - AI
  - Agent
  - 架构设计
keywords: *ref_0
description: 精选资源集合，有关如何构建生产级 AI Agent 的资源。
---

:::tip[精选资源]

这是一个系列，收集不同领域相关的精选（高价值）内容，包括深入分析文章、视频、工具等。

_探索一项新兴技术出现的背景、动机，尤其是其背后的设计哲学，更甚的是在不断的版本演进过程中遇到了什么问题，产生了什么思考，以及是如何决策并得到最优解。_

:::

学习如何高效构建生产级 AI Agent 应用，从提示词到上下文工程（Context Engineering），以及工具框架、架构设计、评估（Evaluation）与代理安全（Agent Security）。

<!-- truncate -->

## Context Engineering

上下文工程。

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) - 2025-09 · 定义上下文工程与提示词工程的区别：上下文是注意力预算有限的资源（context rot），需像系统工程一样甄选、压缩与按需加载信息，以在长程任务中保持模型的聚焦与可控。
- [Architecting efficient context-aware multi-agent framework for production](https://developers.googleblog.com/en/architecting-efficient-context-aware-multi-agent-framework-for-production/) - 2025-12 · 以 Google Agent Development Kit (ADK) 为例，阐述生产级多代理框架的上下文架构：把上下文视为"编译视图"而非字符串缓冲区，通过分层存储、处理器管线与作用域移交实现可靠、高效且可调试的多代理系统。
- [Introducing Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval) - 2024-09 · 提出上下文检索方法：入库前用 Claude 为每个文本块生成简短上下文说明并前置，配合语义嵌入与 BM25 双路检索可将检索失败率降低 49%，叠加重排序后可降低 67%。

## AI Agent

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) - 2024-12 · 基于与数十个团队的合作实践，主张用简单、可组合的模式而非复杂框架构建代理：区分工作流与代理，梳理增强型 LLM、提示链、路由、并行化、编排者-工作者等基础模式，并强调精心设计代理-计算机接口（ACI）。
- [Agent-native Architectures: How to Build Apps After Code Ends](https://every.to/guides/agent-native) - 2026-01 · 由 Dan Shipper 与 Claude 合著的 agent 原生应用架构指南：以能力对等、原子工具粒度、可组合、能力涌现与持续改进为原则，功能不再是预先编写的代码而是描述结果、由 agent 携带工具循环达成，并附移动端存储与检查点恢复等实践。
- [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) - 2025-06 · 复盘 Claude Research 多代理研究系统：并行子代理架构在广度优先研究任务上性能提升 90.2%，但 token 消耗约为普通聊天的 15 倍，并沉淀了任务委派、工具设计与 LLM 评估的实践经验。

### Harness Engineering

- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) - 2025-11 · 解决长时任务代理跨多个上下文窗口"失忆"的问题：借鉴人类工程师轮班交接，由初始化代理搭建特性清单、进度文件与环境脚本，编码代理每会话增量推进、端到端验证并留下干净的交接产物。
- [Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) - 2026-01 · 拆解 Codex CLI agent loop 的一手实现：在 Responses API 上组装提示（角色优先级、AGENTS.md 逐级聚合、环境上下文），让新提示严格保持旧提示前缀以命中 prompt 缓存（中途改配置只追加消息、不修改历史），弃用 previous_response_id 保持无状态以支持 ZDR，超限后经 /responses/compact 自动压缩——生产级 agent 循环的机制细节。
- [Unlocking the Codex harness: how we built the App Server](https://openai.com/index/unlocking-the-codex-harness/) - 2026-02 · 讲解 Codex harness 如何跨 CLI、IDE、桌面与 Web 复用：Codex core 承载 agent 循环与线程持久化，经 App Server 双向 JSON-RPC 暴露稳定事件流——以 item（started→delta→completed 生命周期）、turn、thread 三原语刻画对话，服务端可反向发起审批暂停回合，供 JetBrains/Xcode 等外部集成，把 harness 变成可长期依赖的平台接口。
- [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) - 2026-02 · OpenAI 团队五个月"零手写代码"、用 Codex 产出约百万行代码构建产品的复盘：工程师角色转向设计环境、表达意图与构建反馈回路，并把"黄金原则"写进仓库、用自动化清理任务持续纠偏以保持代码库一致。
- [Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) - 2026-03 · 受 GAN 启发引入"生成器 + 评估器"结构，把主观的设计品味转化为可评分的评审标准，并扩展为规划器、生成器、评估器的三代理 harness，缓解长任务中的上下文焦虑与自我评估偏乐观。
- [Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/research/managed-agents) - 2026-04 · 提出"元 harness"架构 Managed Agents：仿照操作系统虚拟化硬件的思路，将 session（持久事件日志）、harness 与 sandbox 解耦为可独立替换的接口，凭据经 vault 与代理隔离、永不进入沙箱，容器按需拉起后 p95 首响延迟降低超 90%，让 harness 假设不再随模型演进而过时。
- [An open-source spec for Codex orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) - 2026-04 · 开源编排规范 Symphony：把 Linear 式任务看板变成编码代理的控制平面——每个开放任务保证有一个代理在独立工作区持续运行、崩溃即重启，人类只评审产出，部分团队三周内落地 PR 增长 500%；规范先于实现（SPEC.md 让代理用 6 种语言各实现一遍来打磨歧义），工作流以 WORKFLOW.md 随代码版本化，并总结出"别把代理当状态机节点、要像好经理一样给目标"的编排哲学。
- [Codex as a platform: build on the open agent harness](https://developers.openai.com/blog/codex-as-a-platform) - 2026-08 · 把开源 Codex harness 定位为可嵌入产品的平台：harness 质量直接改变模型表现（ARC-AGI-3 上保留推理 + 上下文压缩使 GPT-5.6 Sol 从 13.3% 升至 38.3%、输出 token 减 6 倍），按场景选择 codex exec / SDK / app-server 三种集成层，把 agent 嵌进既有界面（仪表盘、队列、审批流）而非万能聊天框——示例应用 Relay 以应用自有 MCP 工具 + 人工审批门控落地，Cisco 与 Thrive（7,000 份报税、耗时降 1/3）为已验证案例。

### Agent Tools

- [Writing effective tools for agents — with agents](https://www.anthropic.com/engineering/writing-tools-for-agents) - 2025-09 · 把工具视为确定性系统与非确定性代理之间的契约：先搭建原型，再用代理生成评估任务量化表现，最后让 Claude Code 自动迭代优化工具，并总结命名空间划分、返回有意义上下文、响应 token 效率等设计原则。
- [Code execution with MCP: Building more efficient agents](https://www.anthropic.com/engineering/code-execution-with-mcp) - 2025-11 · 把 MCP 服务器呈现为代码 API 而非一次性载入的工具清单：代理在文件系统中按需发现并加载工具定义、在执行环境内过滤与转换数据，使中间结果不再流经模型上下文，token 消耗可从约 15 万降至 2 千。
  - [Introducing advanced tool use on the Claude Developer Platform](https://www.anthropic.com/engineering/advanced-tool-use) - 2025-11 · Claude 平台三项工具能力：Tool Search Tool 按需发现工具以保留 95% 的上下文窗口，Programmatic Tool Calling 让模型以代码编排工具调用、仅返回最终结果，Tool Use Examples 用示例传递 Schema 无法表达的调用约定。
- [From model to agent: Equipping the Responses API with a computer environment](https://openai.com/index/equip-responses-api-computer-environment/) - 2026-03 · 讲解如何为 Responses API 装配托管计算机环境：shell 工具在容器中执行并支持并发会话，每条命令设输出上限（截断保留首尾）以省上下文；文件与 SQLite 让模型按需取数而非填满 prompt；出站经 sidecar 代理强制域名白名单、密钥做域名级注入（模型只见占位符）；SKILL.md 技能装载与原生 compaction 撑起长时工作流。
- [How to build agents with filesystems and bash](https://vercel.com/blog/how-to-build-agents-with-filesystems-and-bash) - 2024-01 · 用文件系统与 bash 两个基础工具替代大部分自定义工具：LLM 已在海量代码上训练，天然擅长目录导航与文本检索，把领域数据结构化为文件即可实现精准、按需的上下文取用，使销售电话摘要代理的单次成本从约 1 美元降至 0.25 美元。

### Agent Skills

- [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) - 2025-10 · 提出 Agent Skills：以 SKILL.md 为入口的文件夹封装指令、脚本与资源，借助渐进式披露（元数据→正文→附加文件）按需加载领域知识并可捆绑可执行代码，像为新员工准备入职手册一样将组织知识转化为代理的可复用能力。
- [Shell + Skills + Compaction: Tips for long-running agents that do real work](https://developers.openai.com/blog/skills-shell-tips) - 2026-02 · OpenAI 侧 Skills + 托管 shell + 服务端压缩的实战指南：技能描述要写成"何时用/何时不用"的路由逻辑，负例可修复"加技能反而降 20% 触发率"的意外，模板与示例入技能按需加载近乎免费，需确定性时直接点名技能，/mnt/data 作产物交接边界；Glean 的 Salesforce 技能把评估准确率从 73% 提到 85%、首响延迟降 18.1%。

### Evaluation

- [Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents) - 2026-01 · 从零构建 agent 评估的实操路线图：区分能力评估与回归评估，按编码、对话、研究、计算机操作四类代理匹配确定性判定与 LLM 裁判，用 pass@k/pass^k 度量非确定性，并沉淀任务无歧义、正反例平衡、评分器防绕过、勤读转录、警惕评估饱和等实战经验——CORE-Bench 修复评分缺陷后 Opus 4.5 从 42% 跃升至 95%。
- [LLM Evaluation Framework: Trajectories vs. Outputs](https://www.langchain.com/resources/llm-evaluation-framework) - 2026-04 · 区分"评产出"与"评轨迹"的决策框架：单轮无工具、确定性流程或原型期可只评产出；步骤顺序影响正确性、"正确答案掩盖错误推理"、受监管需审计轨迹时才值得评路径；三维指标（接地与上下文、用户体验、安全合规）与 RAG 的检索/推理失败分离，配合结构化 rubric 与多次判卷校准 LLM-as-judge，并以"生产失败→标注→修正轨迹→回归测试"的改进飞轮闭环。

## Agent Security

代理安全。

- [How we contain Claude across products](https://www.anthropic.com/research/how-we-contain-claude) - 2026-05 · 复盘 claude.ai、Claude Code 与 Claude Cowork 三种遏制架构（临时容器、人审沙箱、本地 VM）与真实安全事件：审批疲劳（约 93% 的权限提示被批准）、信任对话框前的配置执行、用户成为注入向量、经白名单域名外泄，结论是环境层硬边界优先于概率性引导，而最弱的一层往往是自研组件。
- [Beyond permission prompts: making Claude Code more secure and autonomous](https://www.anthropic.com/research/claude-code-sandboxing) - 2025-10 · 详解 Claude Code 的 OS 级沙箱（bubblewrap/seatbelt）实现：文件系统与网络双重隔离缺一不可（缺网络隔离可外泄 SSH 密钥，缺文件隔离可逃逸上网），所有流量经沙箱外代理强制域名白名单，云端运行的 Git 凭据经作用域化代理、永不进入沙箱——权限提示减少 84% 且沙箱运行时已开源，可直接集成到自建 agent。
- [How we built Claude Code auto mode: a safer way to skip permissions](https://www.anthropic.com/research/claude-code-auto-mode) - 2026-03 · 剖析 Claude Code auto mode：以模型分类器替代人工审批来化解审批疲劳，双层防御——输入层提示注入探针 + 输出层两阶段转录分类器（reasoning-blind，只看用户消息与工具调用），误报率从 8.5% 降至 0.4%、真实过度积极行为漏报 17%，定位是给"全跳过权限"用户的实质安全改进，并非高风险场景人工评审的替代品。
- [Designing AI agents to resist prompt injection](https://openai.com/index/designing-agents-to-resist-prompt-injection/) - 2026-03 · 提出以"社会工程学"视角审视提示注入：攻击已从"忽略之前指令"进化为仿冒商务邮件式的诱导（实测 50% 得手），AI 防火墙式输入过滤难以胜任——识别操纵与识别谎言是同一难题；应转向 source-sink 分析并假设操纵终会成功：敏感信息外传前由 Safe Url 拦截确认，如同给客服坐席设退款额度，约束的是影响半径而非试图读懂恶意。
