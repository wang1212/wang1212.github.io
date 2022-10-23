---
title: IDE：VS Code 配置同步
date: 2018-08-15 16:42:00
update: 2018-08-15 16:42:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - 工具
  - IDE
  - 编辑器
  - VS Code
  - 配置同步
keywords: *ref_0
description: 利用一款插件来同步 VS Code 的配置到 GitHub 的 gist 上，实现多个设备间共享一套配置。
---

> _最后更新于 2018-08-15 16:42:00 _

利用一款插件来同步 VS Code 的配置到 GitHub 的 gist 上，实现多个设备间共享一套配置。

<!-- truncate -->

## VS Code

Visual Studio Code 是由微软出品的一款轻量级编辑器，兼有部分 IDE 功能。在之前，Sublime Text 是最受欢迎的编辑器（开源），也为多数前端开发者所推崇，当然说到底它依然是个编辑器。随着时间的推移，GitHub 打造了自家的编辑器 Atom，微软的 VS Code 也横空出世，更有其它优秀的轻量级编辑器在市场上展开角逐。不过，到现在来看，VS Code 可能胜出了，已成为前端开发的利器。

前端开发的工作流向来是个令人头疼的问题，虽然说现在利用 gulp、grunt、webpack 可以解决大部分问题，但要换台电脑重新配置一遍那真的是令人不敢想象的事情。而且，开发过程中大量依赖了 VS Code 插件提高了开发效率，但要换台电脑重新配置一遍编辑器，装一遍插件那也是相当头疼，时间都浪费在了重复性工作上。

## Setting Sync

Setting Sync 插件恰好就是为了解决多个设备间编辑器和插件配置同步难题的。

> **Setting Sync** : <a href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync" target="_blank">https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync</a>

这个插件大概的原理就是将本地的 VS Code 的配置文件和插件配置同步到 GitHub 的 Gist 服务器上，然后在另一台设备上可以通过 Gist ID 和 Token ID 下载配置，即实现了多个设备间配置共享。

插件的使用步骤在它的说明页面很详细，大概就是以下几步：

- **在 GitHub 上新建一个 Personal access tokens，保存 token id**
- **在 VS Code 中安装 Setting Sync 插件，然后输入 token id，上传配置信息，得到 gist id**
- **在另一台设备上的 VS Code 中安装 Setting Sync 插件，然后输入 token id 和 gist id 即可同步配置**
