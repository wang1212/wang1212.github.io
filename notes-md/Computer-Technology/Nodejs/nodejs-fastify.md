---

    {
        "title": "Fastify - 专注于性能和低内存消耗",
        "tags": ["Computer Technology", "Node.js", "JavaScript", "Web"],
        "keywords": ["Computer Technology", "Node.js", "JavaScript", "Web", "Fastify"],
        "summary": "Fastify 作为一个 Node.js Web 框架，是如何实现高性能和低内存消耗的呢？",
        "ctime": "2021-06-27 16:28:00",
        "mtime": "2021-07-01 02:11:00"
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

　　我们也可以通过以下示例代码来进行简单的测试：

```js
function a() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}


const code = [0, 1, 2].map(i => `console.log(${i})`);
// 函数体预编译后 b 等价于
// function b() {
//   console.log(0);
//   console.log(1);
//   console.log(2);
// }
const b = new Function(code);

console.time('a');
a();
console.timeEnd('a'); // a: 0.136962890625 ms

console.time('b');
b();
console.timeEnd('b'); // b: 0.05908203125 ms
```

　　第二个细节便是 *README.md* 文件中有提到可以和 `flatstr` 模块很好的配合使用，因为该模块会触发 V8 的优化机制，把字符串最终转换成了 `Buffer`。 其项目的 *README.md* 文件中 **How does it work** 段落详细解释了底层机制，简单的来说，V8 会在某些情况下针对 `String` 数据做特定优化，而该模块的主要作用就是主动去触发这种 V8 的优化机制以达到提高性能的目的。

> [GitHub: `flatstr`](https://github.com/davidmarkclements/flatstr)

### 路由（Routing）

　　Fastify 的路由是依赖 `find-my-way` 模块实现的，在公开的基准测试中相比于 `express` 和 `koa-router` 有数倍的性能优势。

　　根据 `find-my-way` 模块的 *README.md* 文件中所介绍，其 **底层采用了基数树（Radix tree，亦称 compact prefix tree）的数据结构，并非通常的路由数组和迭代正则匹配方案**。基数树是一种空间优化的前缀树（即紧凑前缀树），具有前缀树的搜索性能同时尽可能小的占用内存。前缀树的应用场景比较常见，常用于字符串检索，例如字典查找、字符统计、公共前缀匹配等等，要比遍历数组和正则匹配的查找性能好数倍。但前缀树的内存消耗比较大，所以通过将只有一个子节点的与其父节点合并从而减少内存消耗，形成了“基数树”数据结构。

> [GitHub: `find-my-way`](https://github.com/delvedor/find-my-way)
>
> [Radix tree](https://en.wikipedia.org/wiki/Radix_tree)

　　Koa 的官方路由 `@koa/router` 从源码中可以看到，是将每个路由的路径 `path` 转换成正则表达式存储在数组中，此后遍历该数组通过正则匹配来完成路由映射，这种方案实现起来相对简单，但性能要低得多。不过也有一个同样基于基数树结构实现的 `koa-tree-router` 模块，性能比前者高数倍，当然它的功能还是相当简单的。Express 的官方路由实现也大致相同，`@koa/router` 应该是参考了前者的实现。

### 闭包（Closure）

　　闭包是 JavaScript 一个很有用的语言特性，利用它可以实现很多东西，最常见的则是模块封装了，在没有类（Class）概念的情况下，要实现类似类的效果必然会用到闭包，很多第三方库就是这样做的，例如著名的 `jQuery`。但另一方面需要注意的是，闭包极易引起内存泄漏，同时造成不必要的内存消耗；而且，在闭包中如果嵌套太深，作用域递归解析也会有一定的开销。

```js
function process(bigData, cb) {
  remoteCall(bigData, function (err, something)) {
    storeSomething(something, function (err, res) {
      // 该函数是暂时的，但是难以被优化
      // bigData 一直驻留在作用域中，无法被 GC
      cb(null, res * 2)
    })
  }
}

// -------

function process(bigData, cb) {
  remoteCall(bigData, function (err, something)) {
    // bigData 在这里退出了作用域，可以被 GC
    callStoreSomething(something, cb)           
  }
}

function callStoreSomething(something, cb) {
  // 该函数可以被优化
  storeSomething(something, function (err, res) {
    cb(null, res * 2)
  })  
}
```

　　基于此，**Fastify 团队在框架内部基本上杜绝了利用闭包实现功能，从而保证了低内存消耗**。

> [JavaScript: Closures and the Call Stack](https://akaphenom.medium.com/javascript-closures-and-the-call-stack-722ef2c3b5a8)
>
> [Scope](https://en.wikipedia.org/wiki/Scope_(computer_science))

### 调用栈（Call stack）

　　Fastify 内部优化之后，调用栈也小很多，作者利用 `0x` 工具进行了分析，从生成的栈火焰图来看，Express 的图形中有两个高峰，说明调用栈特别大；相对的，Fastify 的图形总体较为平缓。**更小的调用栈也降低了内存消耗**，详细信息可以在下面的视频讲解中查看。

> [Take your http server to ludicrous speed](https://www.youtube.com/watch?v=5z46jJZNe8k)
>
> [GitHub: `0x`](https://github.com/davidmarkclements/0x)
>
> [Call stack](https://en.wikipedia.org/wiki/Call_stack)

### 服务器的生命周期（Server Lifecycle）

　　大多数 Web 框架的生命周期是相似的：服务器启动，路由处理程序注册，服务器侦听请求并调用适当的函数来处理它们。如下图所示，Fastify 做了特殊处理，在服务器启动之后执行预初始化阶段（preinitialisation ），该阶段做了一些优化工作，使用 `fast-json-stringify` 模块处理 JSON schemas，以及用 `reusify` 模块优化处理函数（handler functions）。

<div style="text-align:center"><img src="https://www.nearform.com/wp-content/uploads/jekyllsite/blog/2017/08/diagram_fastify_lifecycle.png" /></div>

　　这里提及的 `reusify` 模块是如何来优化处理函数的呢？首先，请求的处理函数属于频繁被执行的代码块，也就是所谓的"热代码路径（hot code paths）"。`reusify` 的源码非常简单，主要作用是 **将对象或者函数进行缓存，降低高并发场景下热代码路径上的 GC 压力**。

> [Reaching Ludicrous Speed with Fastify](https://www.nearform.com/blog/reaching-ludicrous-speed-with-fastify/)
>
> [GitHub: `reusify`](https://github.com/mcollina/reusify)
>
> [Avoid allocations in compiler hot paths” Roslyn Coding Conventions](https://stackoverflow.com/questions/22894877/avoid-allocations-in-compiler-hot-paths-roslyn-coding-conventions)

　　不过，在 `reusify` 模块给出的示例代码中有一个细节值得注意：

```js
// ...
function MyObject () {
  // you need to define this property
  // so V8 can compile MyObject into an
  // hidden class
  this.next = null
  // ...
```

　　作者注释到你要重用的对象内部第一个属性应该定义为 `next`，因为可以触发 V8 的优化机制 **“隐藏类（hidden class）”**。首先，**隐藏类是 V8 内部为了优化非整数索引属性（命名属性）的访问速度的机制，每一次对对象命名属性的增删操作都会导致新的隐藏类被创建，而具备同样的命名属性定义顺序的对象可以共享隐藏类，减少开销**。接下来，通过查看 `reusify` 模块的源码便可知道，模块内部为了实现缓存队列给被重用的对象添加了一个 `next` 属性，由此便可以明白作者的注释是告诉我们如何利用好 V8 的内部优化机制 —— 隐藏类。

> [Fast properties in V8](https://v8.dev/blog/fast-properties)
>
> [V8 Hidden class](https://engineering.linecorp.com/en/blog/v8-hidden-class/)
>
> [Clearing up the `hidden classes` concept of V8](https://stackoverflow.com/questions/17925726/clearing-up-the-hidden-classes-concept-of-v8)
>
> [Should I put default values of attributes on the prototype to save space?](https://codereview.stackexchange.com/questions/28344/should-i-put-default-values-of-attributes-on-the-prototype-to-save-space/28360#28360)

### 插件模型（Plugin Model）

　　Fastify 的灵活扩展主要依赖于其插件系统，同时也支持 Express 中间件（需要 `middie` 插件），可以说是 Express 与 Hapi 的组合。在探究 Fastify 的插件模型之前，先来看看 Koa 的中间件模型的源码实现：

```js
// https://github.com/koajs/compose/blob/25568a36509fefc58914bc2a7600f787b16aa0df/index.js#L42
function compose (middleware) {
  // ...
  return function (context, next) {
	// ...
    return dispatch(0)
    function dispatch (i) {
      // ...
      // 遍历嵌套迭代（类递归）的方式执行
      return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
    }
  }
}
```

　　我们可以看到 `koa-compose` 模块实现了 Koa 的中间件模型，是一种通过遍历嵌套迭代（类递归）的方式来逐个执行中间件函数，而且引入上下游（upstream / downstream）的概念，这种方式会导致调用栈会非常的大，性能很难优化。而查看 Express 的源码，发现其会把中间件函数当作路由函数来对待，存储在数组中，后续也会以类似的方式执行，同样也会有调用栈过大的问题。

　　Fastify 依赖于 `avvio` 模块 **建立了一种基于可重入（reentrant ）和有向无环图（directed acyclic graph）的插件模型**，可以正确处理异步代码，保证插件的加载顺序，避免了前面提到的调用栈过大的问题。建立一个有向无环图的插件系统可以保证不会创建交叉依赖，并且实现了可以在应用程序的不同部分使用相同插件的不同版本。

<div style="text-align:center"><img style="width: 30vw; height: 25vw" src="https://survivejs.com/9f7ecd003147aad41c8b8c236c703db4.png" />
    <p>
        有向无环图
    </p>
</div>

　　由于这种架构模式，带来的另外一个好处就是很容易将应用拆分为多个微服务。

<div style="text-align:center"><img style="width: 42vw; height: 25vw" src="https://survivejs.com/6758771bb4590b09ac0780ceb3c51da9.png" />
    <p>
        有向无环图服务
    </p>
</div>
　　那么，可重入带来了什么？可重入性是代码的一种属性，指其没有共享状态，可以安全的在多个线程中或者递归地调用执行；换句话说，代码因为具备某些状态，在多个线程或者递归调用时因为改变了该状态而导致逻辑出错，表明代码是不可重入的，不具备可重入性。常见的应用场景就是在遍历图形的算法中，可能会多次到达同一个节点，可重入性保证了遍历过程中是安全的。

　　具体实现，在 Fastify 官方文档的 **[Encapsulation](https://www.fastify.io/docs/latest/Encapsulation/)** 章节有关于其基本特性 "封装上下文（encapsulation context）" 的介绍，示例代码形象易懂，核心是围绕 `register` API 构建的自上而下继承的上下文模型，并可以通过 `fastify-plugin` 模块打破这种限制完成特定场景下的应用。在 Fastify 中一切皆插件，形成的这种插件系统，也正是上面提到的可以将应用方便的拆分为微服务的基础。

> [GitHub: `middie`](https://github.com/fastify/middie)
>
> [GitHub: `avvio`](https://github.com/fastify/avvio)
>
> [Directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
>
> [What is the Re-entrant lock and concept in general?](https://stackoverflow.com/questions/1312259/what-is-the-re-entrant-lock-and-concept-in-general)

### 其它方面

　　除了上面所介绍的 Fastify 特点外，还有其它一些方面值得关注。

　　第一个，`Decorators` API 提供了一个在整个应用的请求链路中共享数据的机制，此 API 也体现了 Fastify 对性能的关注，其与 V8 内部优化机制“隐藏类”和“内联缓存”相关。

> [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)

　　第二个，`Hooks` API 允许监听一些应用生命周期事件，提供了更高的灵活性，给特定场景下的应用提供了较好的实现机制。

　　第三个，内置了依赖于 `Pino` 模块实现的日志系统，日志作为后端应用针对错误分析、性能分析等的原始信息是相当重要的，可见 Fastify 团队关注点还是相当准确的。

　　最后，Fastify 的插件生态目前可能还不算很丰富，但官方提供的核心插件基本上也覆盖了常见的各种场景，例如消息队列、WebSocket、鉴权、缓存等。

## 结语

　　可以看得出来，Fastify 对性能的追求是极致的，涉及到很多 V8 内部对代码的优化机制，通过了解还是收获颇丰的。回过头来，Node.js Web 框架虽然层出不穷，但根据 NPM Trends 的下载量统计来看，Express 依然高居榜首，说明 Node.js Web 框架在重业务场景下的应用其实不多，更多的应该是作为一些小项目的后端或者类似 BFF 层这种轻量的场景下应用。从 Express 到 Koa 再到 Fastify，这是向更轻量更高性能的方向发展，技术的发展趋势也从侧面反映了该技术在业务场景中的价值体现。

## 其它参考资源

- [What if I told you that HTTP can be fast?](https://www.webexpo.net/prague2017/talk/what-if-i-told-you-that-http-can-be-fast/)
- [Fastify - Fast and low overhead web framework for Node.js - Interview with Tomas Della Vedova](https://survivejs.com/blog/fastify-interview/)

## 附：对比表

| 对比项(2021-06-01)                          | express                                            | koa                                                          | Fastify                                              | nestjs                         |
| ------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- | ------------------------------ |
| 当前版本                                    | v4.17.1(2019-05-26)                                | v2.13.1(2021-01-04)                                          | v3.17.0(2021-05-29)                                  | v7.6.17(2021-05-18)            |
| 设计理念/哲学                               | 小型、强大的 HTTP 服务器工具                       | 更轻量、高性能、“洋葱模型”                                   | 高性能、低开销，开发友好                             | 提供 Node Web 应用的”架构规范“ |
| 技术架构                                    | 核心简单，具备路由等常见功能，其它需依赖中间件扩展 | 核心极简，不包含任何额外功能，路由等其它功能需要依赖中间件扩展 | 核心简单，提供路由、日志等必要组件，其它依赖插件扩展 | 底层核心可替换，上层 MVC 模型  |
| 扩展机制                                    | 中间件                                             | 中间件                                                       | 插件                                                 | 插件                           |
| 项目活跃度（近一年平均每周 GitHub commits） | 0-2                                                | 0-2                                                          | 5-10                                                 | 20                             |
| 维护团队的 roadmap                          | 4.x -> 5.0（缓慢）                                 | 2.x -> 3.0（缓慢）                                           | 3.x -> 4.0（积极）                                   | v8.0 计划完成，待发布          |
| 是否支持 ts                                 | 社区维护 @types                                    | 社区维护 @types                                              | 官方维护 @types                                      | 官方内置支持                   |
| 公开的基准测试                              | QPS 最低                                           | QPS 高                                                       | QPS 最高                                             |                                |
| 技术生态（官方+社区）                       | 丰富                                               | 丰富                                                         | 较丰富                                               | 较丰富                         |
| 常见业务场景解决方案                        | 社区中间件                                         | 社区中间件                                                   | 官方插件                                             | 官方文档，内置适配器           |
| 商业案例                                    | 有                                                 | 有                                                           | 有                                                   | 有                             |
| 上手难易程度                                | 容易                                               | 容易                                                         | 容易                                                 | 中等                           |
| 可查阅的资料                                | 多                                                 | 较多                                                         | 较多                                                 | 较多                           |
| 官网文档（中文）                            | 有                                                 | 有                                                           | 有                                                   | 有                             |
| OpenJS 基金会项目                           | 是                                                 |                                                              | 是                                                   |                                |
