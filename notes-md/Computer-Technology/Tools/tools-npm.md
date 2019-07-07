---

    {
        "title": "使用 npm",
        "tags": ["Computer Technology", "Tools", "Web", "Node.js"],
        "keywords": ["Computer Technology", "Tools", "Web", "Node.js", "npm"],
        "summary": "npm 是 Node.js 的一个包管理器，Web 前端工程师也经常利用它来简化开发流程，来看看如何愉快的使用 npm。",
        "ctime": "2019-07-06 15:43:00",
        "mtime": "2019-07-06 15:43:00"
    }

---

## npm

　　npm 是 Node.js 的一个包管理器，Web 前端工程师也经常利用它来简化开发流程，看看如何愉快的使用 npm ，并且发布自己的包，让 npm 成为我们的开发利器。

> **Node.js：**https://www.npmjs.com/ <br />
> **npm：**https://www.npmjs.com/

　　npm 通常是伴随着 Node.js 一起安装的，只要安装了 Node.js，那么 npm 也就已经安装好了，可以在命令行运行以下命令查看版本：

    node -v
    npm -v

## 换源

　　这是作为墙内的开发者必须掌握的一项技能，将 npm 的官方源替换为国内源，这样下载 npm 包速度也会更快，更不容易出错。

　　运行以下命令查看 npm 配置，其中有仓库源 `registry` 一项：

    npm config list
    npm config get registry     // 只查看 registry 配置

　　更换仓库源：

    npm config set registry <source>

    npm config set registry https://registry.npmjs.org/         // 换回官方源
    npm config set registry https://registry.npm.taobao.org/    // 换到国内淘宝源

　　更换掉仓库源之后，再查看下是否更换成功。

　　**请勿使用 cnpm 等其它类似工具，用官方 npm 换到国内源即可。**

## 常用命令

　　通常来说，我们只会利用 npm 来安装、卸载依赖包，或者在项目启动时进行初始化。

    npm init [-y]   // 在当前文件夹初始化，生成一个 package.json 文件，-y 选项为全部默认

    npm install --global|-g <package_name>     // 在全局安装指定包
    npm uninstall --global|-g <package_name>   // 卸载安装在全局的指定包

    npm install [-P|--save] <package_name>     // 在当前项目本地安装生产环境依赖包，会列在 dependencies 中
    npm uninstall [-S|--save] <package_name>   // 卸载安装在项目本地的 dependencies 中指定包

    npm install -D|--save-dev <package_name>   // 在当前项目本地安装开发环境依赖包，会列在 devDependencies 中
    npm uninstall -D|--save-dev <package_name> // 卸载安装在项目本地的 devDependencies 中指定包

## Node 版本管理

　　作为一名 Node.js 开发，如何在自己的设备上管理多个 Node 版本是一个相当重要的技能，而 npm 库中的 `n` 模块就为我们提供了最佳解决方案，使用它可以在同一台设备上安装多个不同版本的 Node，并随时进行切换，同时也可以方便的升级、降级。

　　作为一个管理 Node 的工具，建议将其安装在全局：

    npm install -g n

　　安装完成后，执行以下命令安装相应版本的 Node：

    n <version> // eg: n 10.16.0
    n latest    // 安装最新版 node
    n lts       // 安装最新的 LTS 版本 node

　　查看已安装的所有版本的 Node：

    n   // 貌似只能查看通过 n 模块安装的 node

　　切换 node 版本来执行命令：

    n use <version> [args ...]    // 切换到已安装的另一个版本的 node 并执行命令

　　卸载 node：

    n rm <version>      // 卸载指定版本 node
    n prune             // 卸载所有已安装 node 版本，但当前正在使用的 node 版本不会被卸载

## npm 升级

　　虽然 npm 是随 Node 一起安装的，但在之后通过 `n` 模块升级 Node 的过程中，npm 不会也跟着升级，需要我们手动升级：

    npm install -g npm[@latest|<version>]

## 发布 npm 包

　　通常，我们只是下载安装 npm 库中的包来使用，辅助我们进行开发，但去了解如何利用 npm 发布包也是有必要的，这样我们也可以写一些自己的模块并进行发布供自己和他人使用。

### 注册

　　首先需要去 npm 官网注册一个账号（无需翻墙）。如果想更换头像的话，还要去注册一个 **Gravatar** 并上传一张照片，才可以将这张照片作为头像。

> **npm：**https://www.npmjs.com/

### 初始化

　　在本地新建一个文件夹，并初始化：

    npm init [-y]

　　然后，修改生成的 `package.json` 中的必要字段，例如 `name`、`author`、`homepage` 等等，具体的字段以及含义可以去查 npm 的官方文档。

　　**这里需要注意的是，如果你将要发布的包，是别人通过 `require('package_name')` 来使用的话，请指定 `package.json` 中的 `main` 字段为该包的入口文件。或者，也可能你将要发布的包只是一个命令行工具，那么删除掉 `main` 字段，指定 `bin` 字段即可。当然 `main` 与 `bin` 是可以共存的。**

### 编码

　　初始化完成后，就主要是我们编码了，建议将入口文件放在项目根目录下，其余代码文件都放在相应文件夹下：

    Package/
     - build/   // 编译后用于生产环境的文件
     - config/  // 项目开发环境配置文件
     - bin/     // 项目命令行脚本文件
     - scripts/ // 项目 npm 脚本文件
     - src/     // 项目源码文件
     - index.js // 项目入口文件

　　**这里需要注意，`bin/` 中的命令行脚本文件，必须在每个文件的第一行指定 `#!/usr/bin/env node`，表明这是一个 node 脚本，以及执行该脚本的二进制文件系统路径。**

### 发布前本地测试

　　在编码完成并完善 `package.json` 文件后，我们可能需要测试才能确保最终发布后能被自己或者他人通过 npm 安装正常使用。

　　我们不需要反复进行**发布--测试--修复--撤销发布--重新发布**这个过程，npm 官方为我们提供了便捷的本地测试工具，也就是 `link` 命令。

    npm link    // 在你将要发布的包根目录下执行该命令，如同将其安装到全局一样，更改文件及时生效，不需要重新 link

    npm link <package_name>     // 在另外一个测试目录中执行该命令，如同 install

    npm unlink  // 测试完成后，在你将要发布的包根目录下执行该命令，unlink 会将其从全局卸载

　　本地测试还是相当简单和方便的，也是无污染的。

### 登录

　　发布前需要在命令行登录 npm **官方仓库**：

    npm login [--registry=url] [--scope=@orgname]

　　**注意：如果替换了官方源，一定要指定 `--registry=https://registry.npmjs.org/`，这样才能登录到官方仓库进行发布。**`--scope`则是命名空间，例如 `@babel`。

　　登录成功后，可以查看已登录用户：

    npm whoami [--registry <registry>]

### 发布

　　登录后，即可通过 `publish` 命令发布包：

    npm publish [--access public]   // 在将要发布的包根目录执行

　　**需要注意，如果发布的包带有命名空间，例如 `@babel/core`，需要指定发布限制范围 `--access`，默认为 `restricted`（受限制），如你的 npm 帐户不是付费帐户，必须指定为 `public`。**

### 撤销发布

　　通常，是在本地测试无误后进行发布，如果真的在发布后发现问题，导致不能正常使用，可以撤销发布：

    npm unpublish [<@scope>/]<package_name>[@<version>]

　　**事实上，npm 官方不建议开发者使用 `unpublish` 命令来撤销发布，因为如果其它用户已经安装了该包作为依赖，并能正常使用的情况下该包被撤销，会导致其它用户无法再次安装该包。**所以，尽可能用 `deprecate` 命令来表明该包已被弃用，即便用户安装成功，也会有醒目的提示告知用户已被弃用，用户则会及时寻找替代包。

    npm deprecate <package_name>[@<version>] <message>