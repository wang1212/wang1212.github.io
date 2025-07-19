---
title: 「每周回顾」EP2024W43：React Native 新架构、Next.js 缓存与 Facebook 负载均衡
date: 2024-10-22 18:00:00
update: 2024-10-22 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2024 年第 43 周的回顾，React Native 发布无桥接依赖的新架构，采用 JSI 实现 JS 与原生代码高效通信；Next.js 团队分享其应用缓存问题解决方案；Facebook 亿级用户流量背后的软件负载均衡架构设计；以及对将 JavaScript 工具重写为“更快”语言的质疑，认为 JS 自身性能潜力尚未充分挖掘。
---

:::note[AI 总结]

React Native 发布无桥接依赖的新架构，采用 JSI 实现 JS 与原生代码高效通信；Next.js 团队分享其应用缓存问题解决方案；Facebook 亿级用户流量背后的软件负载均衡架构设计；以及对将 JavaScript 工具重写为“更快”语言的质疑，认为 JS 自身性能潜力尚未充分挖掘。

:::

<!-- truncate -->

##### [New Architecture is here](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here)

React Native 现在发布了新架构的正式版本，比较感兴趣的是新架构中，完全消除了 React Native 对桥的依赖，取而代之的是使用 JSI 在 JavaScript 和本机代码之间进行直接、高效的通信。

`React Native` `架构设计`

##### [Our Journey with Caching](https://nextjs.org/blog/our-journey-with-caching)

一篇讲述在 Next.js 中解决应用缓存问题过程的博文，很有学习意义。

`Next.js` `缓存` `架构设计`

##### [How Facebook Was Able to Support a Billion Users via Software Load Balancer ⚡](https://newsletter.systemdesign.one/p/facebook-load-balancer)

Facebook 支撑数十亿用户流量的架构设计。

`架构设计`

##### [Why I’m skeptical of rewriting JavaScript tools in “faster” languages](https://nolanlawson.com/2024/10/20/why-im-skeptical-of-rewriting-javascript-tools-in-faster-languages/)

探讨了我们在提升前端性能时，总是喜欢用其它语言来编写新的工具，实际上我们对 Javascript 自身的性能还利用的不够充分。

`JavaScript` `性能`
