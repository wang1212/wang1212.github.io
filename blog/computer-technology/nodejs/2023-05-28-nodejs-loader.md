---
title: 通过 Node.js 自定义加载器运行代码
date: 2023-05-28 23:07:00
update: 2023-05-28 23:07:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Node.js
keywords: *ref_0
description: 鉴于 Node.js 的诸多历史遗留原因，目前文件有多种扩展名，在文件引用时很多开发者习惯不写扩展名，这在 ES Modules 代码中需要额外的命令行 flag 才能实现。但在 Node.js v19 的版本发布后，其中 `--experimental-specifier-resolution` 命令行 flag 被删除，为了能继续运行无扩展名的 ES Modules 代码，就需要借助自定义加载器来实现。
---

> _最后更新于 2023-05-28 23:07:00_

鉴于 Node.js 的诸多历史遗留原因，目前文件有多种扩展名，在文件引用时很多开发者习惯不写扩展名，这在 ES Modules 代码中需要额外的命令行 flag 才能实现。但在 Node.js v19 的版本发布后，其中 `--experimental-specifier-resolution` 命令行 flag 被删除，为了能继续运行无扩展名的 ES Modules 代码，就需要借助自定义加载器来实现。

<!-- truncate -->

目前，Node.js 文件的扩展名就有数种，比如常见的 `.js`、`.mjs`、`.cjs`、`.node`，之所以有这些东西存在，是因为了 Node.js 从最初的版本发展到现在，已历经了数个大版本的更新，有很沉重的历史包袱。

### CommonJS：扩展名不是必须的

相信很多使用 Node.js 的开发者目前熟悉的应该是 CommonJS 风格，其中**不需要强制在代码中写文件的扩展名**，这实际上和其它后端语言体验一致。

```javascript
const foo = require('./foo.js'); // work!
const foo = require('./foo'); // work too!
```

### ES Modules：扩展名是必须的

在现如今 Node.js 已全面支持 ES Modules 的情况下，**使用 ES Modules 编写代码默认必须写文件的扩展名**，据官方文档说明，这与浏览器环境下的 `import` 行为一致。

```javascript
import * as foo from './foo.js'; // work!
import * as foo from './foo'; // error, not work!
```

### `--experimental-specifier-resolution=node`

为了实现用 ES Modules 编写代码，又不需要写文件扩展名，Node.js 在很久以前就给出了一个命令行的 flag 来应对这类问题。

```bash
$ node --experimental-specifier-resolution=node index.js
```

不过，近期在使用 Node.js v20 版本时，突然发现该 flag 失效了，导致写的没有扩展名的 ES Modules 代码无法运行。遂开始查阅官方文档，发现在 v18 的文档中该 flag 还可以索引，v20 的文档中已经无法索引了，在后续查阅资料的过程中终于从 [Node.js 的 v19 发布公告](https://nodejs.org/en/blog/announcements/v19-release-announce#custom-esm-resolution-adjustments)中发现了问题。

> Node.js has removed the --experimental-specifier-resolution flag. Its functionality can now be achieved via custom loaders.

Node.js v18 将是最后一个可以使用 `--experimental-specifier-resolution` 命令行 flag 的大版本。

### 自定义加载器

相信这一变化给很多人造成了困扰，对于我也是。官方给的方案是**自定义加载器**，但没有具体的文档说明，只能在 [v19 发布公告中提及的 Github Issue](https://github.com/nodejs/node/pull/44859) 中寻得蛛丝马迹。

最终，为了解决这个问题，需要安装一个官方提供的[自定义加载器包](https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader)：

```bash
$ npm i commonjs-extension-resolution-loader
```

然后改变运行文件的命令：

```bash
# 以前
$ node --experimental-specifier-resolution=node index.js

# 现在
$ node --experimental-loader=commonjs-extension-resolution-loader index.js
```

但需要注意的是，使用该自定义加载器运行代码，如果遇到第三方包是 ES Modules，且没有指定 `package.json` 文件中的 `main` 字段将会出现找不到模块的错误。这是因为 CommonJS 规范模块解析依赖 `main` 字段，而 ES Modules 规范则推荐使用 `exports` 字段指定模块入口文件，详见[官方文档](https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points)。

鉴于以上情况，如果是新项目，而且采用 ES Modules 编写代码，那还是带上文件扩展名遵循其规范比较好，放弃采用 flag 以及自定义加载器的方式运行代码，毕竟会带来一些额外的问题。

### 参考资料

- https://nodejs.org/en/blog/announcements/v19-release-announce
- https://nodejs.org/docs/latest-v18.x/api/cli.html#--experimental-specifier-resolutionmode
- https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader
- https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points
