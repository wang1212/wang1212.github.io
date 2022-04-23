---
title: 使用 npm
tags:
  - 计算机技术
  - 工具
  - Web
  - Node.js
keywords:
  - 计算机技术
  - 工具
  - Web
  - Node.js
  - npm
summary: npm 是 Node.js 的一个包管理器，Web 前端工程师也经常利用它构建前端工作流，来看看如何愉快的使用 npm。
ctime: '2019-07-06 15:43:00'
mtime: '2022-04-17 18:01:00'
author: 不如怀念 ([@wang1212](https://github.com/wang1212))
---

## npm

　　npm 是 Node.js 的一个包管理器，Web 前端工程师也经常利用它来简化开发流程，看看如何愉快的使用 npm ，并且发布自己的包，让 npm 成为我们的开发利器。

> **Node.js：**https://www.npmjs.com/ <br />
> **npm：**https://www.npmjs.com/

　　npm 通常是伴随着 Node.js 一起安装的，只要安装了 Node.js，那么 npm 也就已经安装好了，可以在命令行运行以下命令查看版本：

```bash
node -v
npm -v
```

## 换源

　　这是作为墙内的开发者必须掌握的一项技能，将 npm 的官方源替换为国内源，这样下载 npm 包速度也会更快，更不容易出错。

　　运行以下命令查看 npm 配置，其中有仓库源 `registry` 一项：

```bash
npm config list
npm config get registry     // 只查看 registry 配置
```

　　更换仓库源：

```bash
npm config set registry <source>

npm config set registry https://registry.npmjs.org/         // 换回官方源
npm config set registry https://registry.npm.taobao.org/    // 换到国内淘宝源
```

　　更换掉仓库源之后，再查看下是否更换成功。

　　**请勿使用 cnpm 等其它类似工具，用官方 npm 换到国内源即可。**
  
  > 常用源切换工具 [nrm](https://www.npmjs.com/package/nrm)

## 常用命令

　　通常来说，我们只会利用 npm 来安装、卸载依赖包，或者在项目启动时进行初始化。

```bash
npm init [-y]   // 在当前文件夹初始化，生成一个 package.json 文件，-y 选项为全部默认

# https://docs.npmjs.com/cli/v6/commands/npm-install
npm install --global|-g <package_name>     // 在全局安装指定包
npm uninstall --global|-g <package_name>   // 卸载安装在全局的指定包

npm install [-P|--save] <package_name>     // 在当前项目本地安装生产环境依赖包，会列在 dependencies 中
npm uninstall [-S|--save] <package_name>   // 卸载安装在项目本地的 dependencies 中指定包

npm install -D|--save-dev <package_name>   // 在当前项目本地安装开发环境依赖包，会列在 devDependencies 中
npm uninstall -D|--save-dev <package_name> // 卸载安装在项目本地的 devDependencies 中指定包
```

　　这里值得一提的是，在 npm 5.2+ 之后，附带了一个 `npx` 命令，作用是**执行包的二进制文件**：

```bash
# https://www.npmjs.com/package/npx
npx [options] [-p|--package <pkg>]... <command> [command-arg]...

npx create-react-app my-app     // 执行 create-react-app 包的主命令
```

　　通过 `npx` 命令执行包的二进制文件有一个优点：**不需要安装包，即可执行包的命令，对本地环境无污染。**

　　而且，在 npm 6.0+ 之后，`init` 命令可以接收一个新的选项：

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-init
npm init <initializer>

npm init react-app my-app       // same as : npx create-react-app my-app
```

　　其中 `<initializer>` 是一个以 `create-` 开头命名的包，算是对这种特殊命名的包的 `npx` 命令的简写方式。

## Node 版本管理

　　作为一名 Node.js 开发，如何在自己的设备上管理多个 Node 版本是一个相当重要的技能，而 npm 库中的 [`n`](https://www.npmjs.com/package/n) 模块就为我们提供了最佳解决方案，使用它可以在同一台设备上安装多个不同版本的 Node，并随时进行切换，同时也可以方便的升级、降级。

　　作为一个管理 Node 的工具，建议将其安装在全局：

```bash
npm install -g n
```

　　安装完成后，执行以下命令安装相应版本的 Node：

```bash
n <version> // eg: n 10.16.0
n latest    // 安装最新版 node
n lts       // 安装最新的 LTS 版本 node
```

　　查看已安装的所有版本的 Node：

```bash
n   // 貌似只能查看通过 n 模块安装的 node
```

　　切换 node 版本来执行命令：

```bash
n use <version> [args ...]    // 切换到已安装的另一个版本的 node 并执行命令
```

　　卸载 node：

```bash
n rm <version>      // 卸载指定版本 node
n prune             // 卸载所有已安装 node 版本，但当前正在使用的 node 版本不会被卸载
```

> Windows 平台用户可以使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)

## npm 升级

　　虽然 npm 是随 Node 一起安装的，但在之后通过 `n` 模块升级 Node 的过程中，npm 不会也跟着升级，需要我们手动升级：

```bash
npm install -g npm[@latest|<version>]
```

## 发布 npm 包

　　通常，我们只是下载安装 npm 库中的包来使用，辅助我们进行开发，但去了解如何利用 npm 发布包也是有必要的，这样我们也可以写一些自己的模块并进行发布供自己和他人使用。

### 注册

　　首先需要去 npm 官网注册一个账号（无需翻墙）。如果想更换头像的话，还要去注册一个 **Gravatar** 并上传一张照片，才可以将这张照片作为头像。

> **npm：**https://www.npmjs.com/

### 初始化

　　在本地新建一个文件夹，并初始化：

```bash
npm init [-y]
```

　　然后，修改生成的 `package.json` 中的必要字段，例如 `name`、`author`、`homepage` 等等，具体的字段以及含义可以去查 npm 的官方文档。

　　**这里需要注意的是，如果你将要发布的包，是别人通过 `require('package_name')` 来使用的话，请指定 `package.json` 中的 `main` 字段为该包的入口文件。或者，也可能你将要发布的包只是一个命令行工具，那么删除掉 `main` 字段，指定 `bin` 字段即可。当然 `main` 与 `bin` 是可以共存的。**

### 编码

　　初始化完成后，就主要是我们编码了，建议将入口文件放在项目根目录下，其余代码文件都放在相应文件夹下：

```
Package/
  - build/   // 编译后用于生产环境的文件
  - config/  // 项目开发环境配置文件
  - bin/     // 项目命令行脚本文件
  - scripts/ // 项目 npm 脚本文件
  - src/     // 项目源码文件
  - index.js // 项目入口文件
```

　　**这里需要注意，`bin/` 中的命令行脚本文件，必须在每个文件的第一行指定 `#!/usr/bin/env node`，表明这是一个 node 脚本，以及执行该脚本的二进制文件系统路径。**

### 发布前本地测试

　　在编码完成并完善 `package.json` 文件后，我们可能需要测试才能确保最终发布后能被自己或者他人通过 npm 安装正常使用。

　　我们不需要反复进行**发布--测试--修复--撤销发布--重新发布**这个过程，npm 官方为我们提供了便捷的本地测试工具，也就是 `link` 命令。

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-link
npm link    // 在你将要发布的包根目录下执行该命令，如同将其安装到全局一样，更改文件及时生效，不需要重新 link
    
npm link <package_name>     // 在另外一个测试目录中执行该命令，如同 install
    
npm unlink  // 测试完成后，在你将要发布的包根目录下执行该命令，unlink 会将其从全局卸载
```

　　本地测试还是相当简单和方便的，也是无污染的。

#### 小技巧

　　这里有个小技巧可以不使用 `npm link` 命令就能在本地测试，而且是真的无污染：

```json
"dependencies": {
  "my-dev-module": "file:../my-dev-module/index.min.js"
}
```

### 登录

　　发布前需要在命令行登录 npm **官方仓库**：

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-adduser
npm login [--registry=url] [--scope=@orgname]
```

　　**注意：如果替换了官方源，一定要指定 `--registry=https://registry.npmjs.org/`，这样才能登录到官方仓库进行发布。**`--scope`则是命名空间，例如 `@babel`。

　　登录成功后，可以查看已登录用户：

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-whoami
npm whoami [--registry <registry>]
```

### 发布

　　登录后，即可通过 `publish` 命令发布包：
  
```bash
# https://docs.npmjs.com/cli/v6/commands/npm-publish
npm publish [--access public]   // 在将要发布的包根目录执行
```

　　**需要注意，如果发布的包带有命名空间，例如 `@babel/core`，需要指定发布限制范围 `--access`，默认为 `restricted`（受限制），如你的 npm 帐户不是付费帐户，必须指定为 `public`。**

### 撤销发布

　　通常，是在本地测试无误后进行发布，如果真的在发布后发现问题，导致不能正常使用，可以撤销发布：

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-unpublish
npm unpublish [<@scope>/]<package_name>[@<version>]
```
　　**事实上，npm 官方不建议开发者使用 `unpublish` 命令来撤销发布，因为如果其它用户已经安装了该包作为依赖，并能正常使用的情况下该包被撤销，会导致其它用户无法再次安装该包。**所以，尽可能用 `deprecate` 命令来表明该包已被弃用，即便用户安装成功，也会有醒目的提示告知用户已被弃用，用户则会及时寻找替代包。

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-deprecate
npm deprecate <package_name>[@<version>] <message>
```

### 退出登录

　　如果不是在自己的机器上工作，建议完成发布后退出登录，保证数据安全。退出登录与登录一样简单，同样需要指定 `--registry` 与 `--scope` 参数。

```bash
# https://docs.npmjs.com/cli/v6/commands/npm-logout
npm logout [--registry=url] [--scope=@orgname]
```

## 更好的开发一个模块并发布

　　以上，是使用 npm 工具本身的过程，但 npm 工具本质上是为维护和发布 Node 模块/包服务的，开发 Node 模块/包有一些很好的社区实践，将一些优秀的文章资料补充在这里，方便后续查阅和参考学习。
  
　　这里也大致记录一下开发 Node 模块/包过程中一些注意的关键点。
  
### 模块/包的类型

　　根据用途，模块/包的类型大致可以分为以下几种，不同的类型需要做对应的处理。
  
  - Node 包
  - Web 包

　　Node 包一般来说发布时是不需要压缩的，JavaScript 代码也不需要编译，但需要标记一些特殊字段（如 `engines`）表明包所依赖的 Node 版本限制。
  
```json
// https://docs.npmjs.com/cli/v6/configuring-npm/package-json#engines
{   
  "engines": { "node": ">=0.10.3 <0.12" }
}
```

　　而用于 Web 的包在发布前通常需要进行编译和压缩，目的是解决兼容性问题和资源加载优化，而这些工作一般借助 **Babel**、**Rollup** 等工具配合使用即可。另一方面，用于 Web 的包在开发过程中为了便于调试，所以引入的应该是未经编译和压缩的源码版本，而打包时再引入经过编译和压缩的版本，实现这个目的社区有一个比较通用的做法就是在入口文件使用 `NODE_ENV` 进行判断并导出相应版本文件，以下是 React 的入口文件示例：
  

```js
if (process.env.NODE_ENV === 'production') { 
  module.exports = require('./cjs/react.production.min.js'); 
} else { 
  module.exports = require('./cjs/react.development.js'); 
} 
```

　　通过下面这篇文章即可了解实现细节。

> https://overreacted.io/how-does-the-development-mode-work/
  
### 让模块/包支持多个环境

　　纵观 Node.js 的发展历史，其生态中出现过多种模式，例如 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)、[CommonJS](http://www.commonjs.org/)、ESM(ECMAScript modules)，以及 [UMD](https://github.com/umdjs/umd)，这种情况给包的开发带来一定困难，不过经过多年的发展社区已经形成一个约定（共识），可以很方便的解决该问题从而同时支持所有环境。
  
　　主要是通过对应字段导出不同的入口文件来实现，下面是一个示例：
  

```json
{
  "main": "index.js", 
  "module": "index.esm.js", 
  "browser": "index.umd.js"
}
```
  
　　具体实现可以通过下面这篇文章进行了解。
  
  > https://2ality.com/2017/04/setting-up-multi-platform-packages.html
  
### 参考资料

- https://github.com/sarbbottam/write-an-open-source-js-lib