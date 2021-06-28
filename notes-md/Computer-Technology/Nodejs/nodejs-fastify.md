---

    {
        "title": "Fastify - 专注于性能和低内存消耗",
        "tags": ["Computer Technology", "Node.js", "JavaScript", "Web"],
        "keywords": ["Computer Technology", "Node.js", "JavaScript", "Web", "Fastify"],
        "summary": "Fastify 作为一个 Node.js Web 框架，是如何实现高性能和低内存消耗的呢？",
        "ctime": "2021-06-27 16:28:00",
        "mtime": "2021-06-28 01:19:00"
    }

---

　　最近在做 Node.js 技术相关的调研，需要选定一个 Web 框架作为基础来构建业务。一般来说，首选开源方案，对于我来说，比较关注框架背后的开发团队情况、项目活跃度、是否有足够多的商业案例、文档是否完整可读、框架的设计理念、技术架构是否灵活可扩展、技术社区生态是否完整等方面。目前，我比较倾心的是 Fastify 这个新兴框架，根据官网介绍，其专注于高性能和低消耗，并且公开的基准测试表现相当不错，项目足够活跃，更重要的是属于 OpenJS 基金会的孵化项目。本文主要介绍 Fastify 的设计理念和探究其是如何提高性能和降低内存消耗的。

> Fastify 官网：https://www.fastify.io/

　　Fastify v1.0.0 发布是在 2018 年的 3 月份，相比于业内广为熟知的 Express / Koa 等框架还很年轻，其项目发起者和核心维护者之一 Matteo Collina 也在开源社区很有声望，是 Node.js TSC 成员，目前 Fastify 项目已经加入 OpenJS 基金会。

> [Fastify 到达 1.0.0  LTS！](https://medium.com/the-node-js-collection/fastify-goes-lts-with-1-0-0-911112c64752)
>
> [Fastify 作为孵化项目加入 OpenJS 基金会](https://openjsf.org/blog/2019/11/20/web-framework-fastify-joins-openjs-foundation-as-an-incubating-project/)
>
> [Fastify：毕业、性能和未来](https://openjsf.org/blog/2020/08/27/fastify-graduation-performance-and-the-future/)

## 设计理念

　　一般来说，一个开源项目会在文档中阐述自己的设计理念和技术架构等理论层面的思考，以帮助开发者更快的了解项目的核心思想和目标人群，或者说解决的关键性问题。官网首页首先给出了标题为 Why 的一段话，然后列举了核心功能点（Core features），文档中没有找到具体阐述设计理念之类的东西。不过，在看了官方博客文章以及相关的资料之后，Fastify 的设计理念大体可以总结：

- 高性能
- 灵活可扩展
- 开发人员友好（例如内置日志系统、TS 支持等等）

　　纵观众多 Node.js Web 开源框架，大多都做到了后两点，例如 Express 项目利用中间件提供了足够的灵活性，内置了开箱即用的功能；而 Koa 为了改进开发人员的体验，引入 `async/await` 替代回调函数，以及所谓的 “洋葱模型” 提供了更高的灵活性，精简了框架核心，只提供必要的功能，从而有了比 Express 更好的性能。而 Fastify 除此之外，对性能有极致的追求，同时也提出了很多不一样的思想，值得学习。

　　其实，Web 开发框架还有一个较为严峻的问题就是项目的工程化标准，最著名的就是 MVC 模型，而对应的也有解决此类问题的 Node.js 框架，近年来发展前景比较好的应该就是 nest.js 了。

> [Introducing Fastify, a Speedy Node.js Web Framework](https://thenewstack.io/introducing-fastify-speedy-node-js-web-framework/)

## Fastify 的实现细节 

　　了解了 Fastify 的设计理念之后，接下来要看看开发团队是如何实施的，探索其技术细节。

### JSON 序列化

　　Fastify 项目的历史故事背后是 `fast-json-stringify` 模块的诞生，该模块比 `JSON.stringify()` 这种原生 JavaScript 方法快很多，可以达到 2 到 3 倍的性能优势。其背后的原理主要是 **依赖 JSON Schema 对 JSON 数据进行校验，避免了类型判断的过程，从而提高了性能**。根据其公开的基准测试，其优势主要体现在处理的目标数据为复杂对象时，可以达到 4 倍的性能优势。

> [GitHub: `fast-json-stringify`](https://github.com/fastify/fast-json-stringify)
>
> [JSON Schema](https://json-schema.org/)

　　其中有两个细节我们值得注意。第一个便是项目 *README.md* 文件中提到的安全方面需要注意的问题，是由于 **在初始化时利用 `Function` 构造函数预编译了函数体，以此达到优化性能的目的**。

```js
result = (new Function('schema', code))(root)
```

　　而这个原理其实也是比较好理解的，通过把一个函数体内包含循环迭代的代码预先“编译”成字符串再交给函数来执行，在函数的“运行时”就不需要再做额外的“解释翻译”以及迭代工作，从而提高性能。下面有一篇相关的比较有趣的文章可以看看：

> [Faster than C? Parsing binary data in JavaScript.](https://github.com/felixge/faster-than-c)

　　第二个细节便是 *README.md* 文件中有提到可以和 `flatstr` 模块很好的配合使用，因为该模块会触发 V8 的优化机制，把字符串最终转换成了 `Buffer`。 其项目的 *README.md* 文件中 **How does it work** 段落详细解释了底层机制，简单的来说，v8 会在某些情况下针对 `String` 数据做特定优化，而该模块的主要作用就是主动去触发这种 v8 的优化机制以达到提高性能的目的。

> [GitHub: `flatstr`](https://github.com/davidmarkclements/flatstr)

### 路由（Routing）

　　Fastify 的路由是依赖 `find-my-way` 模块实现的，在公开的基准测试中相比于 `express` 和 `koa-router` 有数倍的性能优势。

　　根据 `find-my-way` 模块的 *README.md* 文件中所介绍，其 **底层采用了基数树（Radix tree，亦称 compact prefix tree）的数据结构，并非通常的路由数组和迭代正则匹配方案**。基数树是一种空间优化的前缀树（即紧凑前缀树），具有前缀树的搜索性能同时尽可能小的占用内存。前缀树的应用场景比较常见，常用于字符串检索，例如字典查找、字符统计、公共前缀匹配等等，要比遍历数组和正则匹配的查找性能好数倍。但前缀树的内存消耗比较大，所以通过将只有一个子节点的与其父节点合并从而减少内存消耗，形成了“基数树”数据结构。

> [GitHub: `find-my-way`](https://github.com/delvedor/find-my-way)
>
> [Radix tree](https://en.wikipedia.org/wiki/Radix_tree)

　　Koa 的官方路由 `@koa/router` 从源码中可以看到，是将每个路由的路径 `path` 转换成正则表达式存储在数组中，此后遍历该数组通过正则匹配来完成路由映射，这种方案实现起来相对简单，但性能要低得多。不过也有一个同样基于基数树结构实现的 `koa-tree-router` 模块，性能比前者高数倍，当然它的功能还是相当简单的。Express 的官方路由实现也大致相同，`@koa/router` 应该是参考了前者的实现。

### 闭包（Closure）

　　闭包是 JavaScript 一个很有用的语言特性，利用它可以实现很多东西，最常见的则是模块封装了，在没有类（Class）概念的情况下，要实现类似类的效果必然会用到闭包，很多第三方库就是这样做的，例如著名的 `jQuery`。但另一方面需要注意的是，闭包极易引起内存泄漏，同时造成不必要的内存消耗。

```js
// bar 函数因为闭包的原因，对外部函数的参数 bigData 保持引用，
// 导致 bigData 无法被 GC，驻留在内存中，浪费了内存
function foo(bigData) {
    function bar() {}
    bar()
}

// 不用闭包即可
function foo(bigData) {
    bar()
}

function bar() {}
```

　　基于此，**Fastify 团队在框架内部基本上杜绝了利用闭包实现功能，从而保证了低内存消耗**。

