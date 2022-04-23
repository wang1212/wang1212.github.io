---
title: 扩展第三方库的 TypeScript 类型定义
tags:
  - 计算机技术
  - 工具
  - TypeScript
  - Web
keywords:
  - 计算机技术
  - 工具
  - TypeScript
  - Web
  - Type
summary: >-
  TypeScript 作为 JavaScript 的超集，为 Web
  开发带来了强类型语言和类似代码智能提示这种良好的开发体验，如何对第三方依赖库的类型定义进行扩展呢？
ctime: '2022-01-09 17:36:00'
mtime: '2022-01-09 17:36:00'
author: 不如怀念 ([@wang1212](https://github.com/wang1212))
---

　　TypeScript 作为 JavaScript 的超集，为 Web 开发带来了强类型语言和类似代码智能提示这种良好的开发体验，而代码提示依赖于类型定义文件。类型定义文件的发展也经历了一个逐步演变的过程，从最初基于 JavaScript 编写的 npm 包，通过[社区方案](https://github.com/DefinitelyTyped/DefinitelyTyped)来引入类型定义包，再到目前多数模块基于 TypeScript 编写并在发布时带上类型定义文件这种最佳方案，开发者体验得到进一步的提升。
  
　　不过，在使用类型定义文件的过程中我们通常需要和类型定义进行交互，大多数场景可以通过泛型来解决；而有一个典型场景就是需要我们扩展第三方库的类型定义，避免在多个文件中编码时都要引入类型定义的麻烦。可能不是很好理解，不过在这里通过一个实际的例子就可以解释清楚。
  
　　使用 `koa2` 框架进行 Node 应用开发时，为了利用 TypeScript 带来的优势，需要引入类型定义，而该框架本身是用 JavaScript 编写的，不过可以通过安装社区提供的 `@types/koa` 包来获得支持。`koa2` 框架可以通过扩展 `context` 对象来引入一些工具，最典型的就是日志管理，这里使用 `koa-log4`，在 `context` 上挂载一个 `logger` 属性引用日志打印器实例，可以通过泛型的方式扩展应用实例上下文对象的定义，但在多个文件中就显的比较麻烦了，**开发体验最好且最自然的方式就是直接一次扩展 `koa2` 的 `context` 类型定义，后续在多个文件中不用使用泛型即可自动获得代码提示。**
  
　　这里直接给出最终代码：
  
```ts
// src/@types/index.d.ts
import log4js from 'koa-log4';

declare module 'koa' { 
  interface DefaultContext { 
    logger: log4js.Logger; 
  } 
} 
```

　　起初，我认为 TypeScript 官方会对这种典型的场景给出明确的方案文档，但找了很久没找到，就去 Google，在 StackOverflow 上发现有人提及类似以上的方案，经过实验确实解决了问题。但是，我一般会找到明确的官方文档记录一下，以备后续参考，也是秉行尽量不 Hack 以官方且优雅的方式解决问题的原则，经过非常仔细的查找之后，确实在官方文档中找到了，但非常分散。
  
　　至此，就比较完美的解决了这个问题。而这个问题也是很久之前就解决的，回过头来发现记录下来会更好一些。

## 参考资源

- https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
- https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html#testing-your-types
- https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html