---
title: 解析基于 core-js 与 ESLint 的 Web 兼容方案
date: 2021-12-07 01:13:00
update: 2021-12-08 21:12:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - 工具
  - Web
  - Polyfill
keywords: *ref_0
description: Web 网页为了保证在多个平台和低中高端设备上的体验稳定性和一致性，通常会做 Polyfill 以保证兼容性，当下社区的主流方案则是基于 core-js，而 ESLint 则可作为自动检测的辅助工具。
---


Web 网页为了保证在多个平台和低中高端设备上的体验稳定性和一致性，通常会做 Polyfill 以保证兼容性。

然而，兼容性问题本身是个难题，Polyfill 也并非很好处理，所以在技术演变的过程中，社区达成了一致，有一个主流的方案，大家共同来使用和维护。当下社区的主流方案则是基于 `core-js`，另一方面， 利用 ESLint 插件则可以做到自动检测代码中需要添加 Polyfill 的 API。

`core-js` 只是解决了 JavaScript 的兼容性问题，Web 网页还有 CSS / HTML / Web API 的兼容性问题，处理这些问题的过程中，必然会存在大量相似的逻辑，比如目标设备的检测、目标设备的 API 支持情况统计。当然，社区也给出了非常好的方案，下面就来了解一下。

<!-- truncate -->

## 基于 `core-js` 的兼容方案

首先，来看看这两者如何进行配合以非常优雅的方式完成 Polyfill 任务的。

`core-js` 是实现了遵循 ECMAScript 标准的模块化标准库，也就是说，主要是实现 JavaScript 的 API，这并不包括浏览器平台的 Web API（例如一些 DOM API、`fetch` 等）。用起来也很简单，直接在项目中引入即可：

```javascript
// polyfill all `core-js` features:
import 'core-js';
// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
// polyfill only stable ES features:
import 'core-js/es';
```

上面是将所有 API 的 polyfills 引入项目，为了构建包尺寸更小，可以选择性的对特定 API 做兼容：

```javascript
import 'core-js/modules/es.array.unscopables.flat';
import 'core-js/modules/es.array.unscopables.flat-map';
import 'core-js/modules/es.object.from-entries';
import 'core-js/modules/web.immediate';
```

这些方式引入的 polyfill 会污染全局作用域，开发 Web 应用项目时也许不存在太大问题，但若是开发第三方工具库，为了避免这个问题，官方提供了 `core-js-pure` 包：

```javascript
import Set from 'core-js-pure/features/set';
```

虽然说 `core-js` 只是针对 JavaScript API 的兼容方案，但为了方便，也提供了一些非常常用的 Web API 的 polyfills，例如 `setTimeout`、`URLSearchParams` 等。

### API 兼容性

怎么为 API 做兼容的问题解决掉之后，需要考虑的一个问题是怎么判断 API 的兼容性，首先在 [MDN Web Docs](https://developer.mozilla.org/) 特定 API 文档页面最下方会有一个兼容性统计表格，这个是比较准确和全面的。当然，如果要最准确的结果，可以去特定浏览器厂商的标准状态页面查询，例如 [Chrome Platform Status](https://www.chromestatus.com/features) 等。

除此之外，为了让社区各种工具链自动化去检测 API 兼容情况，有非常著名的 [Can I use](https://caniuse.com/) 站点。该站点方便开发者查询各种 JavaScript / CSS / HTML / Web API 的设备兼容情况，同时维护了一个数据库，供社区其它工具开发者使用。

### 兼容目标

有了检测 API 兼容情况和添加 polyfill 的工具后，还有一个很关键的问题：为了加载性能的优化，如果我们不引入全量的 polyfills，怎么针对特定平台去拣选相应的 polyfills？API 兼容检测工具的目标平台是什么？特定 API 是否需要添加 polyfills？

当然，为了保证社区各种工具链的通用性，也有一个很著名的项目 `Browserslist`，它可以帮助我们配置代码兼容的目标平台，相应的工具链将会以该目标处理我们所写的代码。

### ESLint

有了以上工具后，我们需要一个解析代码并运行这些工具的工具，ESLint 恰好适合这个角色。`eslint-plugin-compat` 插件可以根据 browserslist 的配置去查询所写代码中需要兼容的 API 并提示出来：

> eslint-plugin-compat（解析代码）-> 用解析的代码和 browserslist 配置根据标准查询（MDN/Can I use 等）代码中的兼容情况 -> 开发者手动引入 polyfills

我们可以注意到，该插件仅仅是帮我们检测出来代码中需要引入 polyfills 的 API，最终还是需要开发者手动引入 polyfills，这是比较麻烦的。当然，ESLint 干了自己该干的，剩下的事情交给 Babel 即可。

### Babel

说到 Polyfill，还得再提一下社区主流的 JavaScript 编译方案 Babel，为什么呢？因为一开始，Babel 团队同时非常贴心的提供了 Polyfill 方案 `@babel/polyfill`。

#### `@babel/polyfill`

如果看过源码，或者看过目前的文档，其实 @babel/polyfill 做的事情等价于：

```javascript
// see docs: https://babeljs.io/docs/en/babel-polyfill/
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

当然，现在（Babel 7.4.0+）这个方案已经被官方弃用了，这又是为什么呢？其实看上面的代码也能猜出个大概，这种方案不够灵活，把需要和不需要的 polyfills 全部添加到项目代码中，不利于加载性能优化；其次，对于开发者来说是个黑盒子，开发者不清楚干了哪些事，干到了什么程度，不受开发者控制。文档中也有所提及：

> Note: Depending on what ES2015 methods you actually use, you may not need to use `@babel/polyfill` or the runtime plugin. You may want to only [load the specific polyfills you are using](https://github.com/zloirock/core-js#commonjs-api) (like `Object.assign`) or just document that the environment the library is being loaded in should include certain polyfills.

其实意思很简单，就是把 polyfill 的控制权交给了开发者。与此同时，Babel 又给出了另一个方案 `@babel/preset-env`。

#### `@babel/preset-env`

该方案主要解决了 @babel/polyfill 方案不够灵活的问题，提供了两种选择：即 `useBuiltIns` 配置项的 `usage` 和 `entry`。

- `entry` 模式

> This option enables a new plugin that replaces the `import "core-js/stable";` and `import "regenerator-runtime/runtime"` statements (or `require("core-js")` and `require("regenerator-runtime/runtime")`) with individual requires to different `core-js` entry points based on environment.

该模式需要开发者在入口文件显式引入 `core-js`，然后 Babel 会根据配置的兼容目标环境精细化拣选需要的 polyfills 引入，达到减小最终构建包体积的目的。这里是以所有的 polyfills 和兼容目标环境为基础进行过滤，过滤掉目标环境已支持 API 的 polyfills，也就是说最终还是会引入项目代码没有用到的 API 的 polyfills。

- `usage` 模式

> Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.

而这种模式就解决了上面的问题，在以上模式过滤掉的结果中，再以项目代码为基础，过滤掉没有用到的 API 的 polyfills，这样最终的构建包体积会进一步减小。

## 结语

至此，我们了解到基于 `core-js` 的兼容方案是通过一系列优秀的社区开源项目共同配合完成的，借助 Babel 的工具可以自动化完成大部分的兼容工作，而借助 ESLint 的插件工具可以显式知道哪些 API 需要引入 Polyfill 来做兼容。

## 参考资源

- <https://github.com/zloirock/core-js>
- <https://developer.mozilla.org/>
- <https://caniuse.com/>
- <https://github.com/browserslist/browserslist>
- <https://browserslist.dev/>
- <https://eslint.org/>
- <https://github.com/amilajack/eslint-plugin-compat>
- <https://babeljs.io/>
- <https://babeljs.io/docs/en/babel-polyfill/>
