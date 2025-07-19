---
title: 「每周回顾」EP2024W44：React Compiler Beta 发布与 Monorepo Git 优化
date: 2024-10-29 18:00:00
update: 2024-10-29 18:00:00
authors: wang1212
tags: &ref_0
  - 每周回顾
keywords: *ref_0
description: 2024 年第 44 周的回顾，React Compiler 发布 Beta 版本，Meta 团队已进行大量内部测试，显示出较低的迁移成本。此外，微软开发团队分享了如何将 Javascript monorepo 的 Git 仓库大小减少 94% 的经验，解决了大型 monorepo 项目中常见的 Git 操作缓慢问题。这两项进展分别聚焦于提升 React 应用性能和优化大型项目代码管理效率。
---

:::note[AI 总结]

React Compiler 发布 Beta 版本，Meta 团队已进行大量内部测试，显示出较低的迁移成本。此外，微软开发团队分享了如何将 Javascript monorepo 的 Git 仓库大小减少 94% 的经验，解决了大型 monorepo 项目中常见的 Git 操作缓慢问题。这两项进展分别聚焦于提升 React 应用性能和优化大型项目代码管理效率。

:::

<!-- truncate -->

##### [React Compiler Beta Release](https://react.dev/blog/2024/10/21/react-compiler-beta-release)

React Compiler 终于在上周发布了 Beta 版本，据官方说明来看 meta 已在内部大量项目进行了测试，迁移成本较低。

`React` `React Compiler`

##### [How we shrunk our Javascript monorepo git size by 94%](https://www.jonathancreamer.com/how-we-shrunk-our-git-repo-size-by-94-percent/)

记录了微软开发团队如何解决用 Git 管理 monorepo 时遇到项目越来越大导致 Git 操作变得缓慢的问题，而这应该是个比较普遍的问题。

`Git` `monorepo`
