---
title: 桥接模式：跨平台的事件机制设计
date: 2022-06-12 22:22:00
update: 2022-06-12 22:22:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - 程序架构设计
keywords: *ref_0
description: 最近在做图表组件库的技术调研的架构方案设计，参考了很多开源库的源码，发现其中跨平台的事件机制设计很值得学习，如果要用软件设计模式来解释，那大概就是桥接模式了。
---


对于 Web 的图表组件库来说，一些功能比较强大的开源库，渲染层可以支持 DOM、SVG、Canvas、WebGL 等多个平台的环境，而图表库的很多功能的实现都和渲染层紧密相关。

最近，在参考学习一些开源的图表组件库时，发现在跨平台设计中，事件机制的实现很有意思，所以在这里以最简化的代码来解释和记录一下这个方案。如果要用经典的软件设计模式来解释，大概就是**桥接模式**了。

**桥接模式（Bridge Pattern）** 将一个功能的实现拆分为抽象（Abstraction）和实现（Implementor），让其相互独立的扩展和定义，借助该模式可以设计一种平台无关的软件架构。

<!-- truncate -->

## 事件机制

事件机制是软件设计中最基础、最为常见的一种设计，对于 Web 图表组件库来说要提供一些处理用户交互（例如点击、拖动、右键点击等）的机制。一个典型的事件模型类如下：

```js
class EventEmitter {
  _handlerMap = {};
  on(event, callback) {}
  off(event, callback) {}
  emit(event, ...args) {}
}
```

对于用户来说，对外暴露 `on()` 和 `off()` 方法来注册和取消事件，而图表库内部需要完成事件触发（`emit()`）的实现，而这里与渲染层耦合。以渲染层为 DOM 实现来举例，支持点击事件：

```js
class Chart {
  constructor() {
    // 渲染层为 DOM 实现
    this.__renderer = new DOMRenderer();
    this._handler = new EventEmitter();
  }

  on(...args) {
    this._handler.on(...args);
  }

  off(...args) {
    this._handler.off(...args);
  }

  __bindEvent() {
    // ! 事件触发（绑定）与渲染层耦合
    this.__renderer.domElem.addEventListener('click', (event) => {
      this._handler.emit('click', ...[event, ...otherArgs]);
    });
  }
}
```

### 跨平台实现

参考**桥接模式**，这里可以把图表类中的事件机制实现拆分为抽象（`Handler`）和实现（`HandlerProxy`），前者管理用户注册的事件池，后者负责特定平台的事件触发实现。示例代码如下：

```js
class Handler extends EventEmitter {
  constructor(handlerProxy) {
    super();

    this.__handlerProxy = handlerProxy;

    // 注册事件到代理类中
    this.__handlerProxy.on('click', (event, ...args) => {
      // ! 触发用户注册的事件
      this.emit(event, ...args);
    });
  }
}

class DOMHandlerProxy extends EventEmitter {
  constructor(renderer) {
    super();

    this.__renderer = renderer;
  }

  __bindEvent() {
    // 根据渲染层的平台实现事件绑定，以 DOM 实现为例
    this.renderer.domElem.on('click', (event, ...args) => {
      // ! 触发 Handler 注册的事件
      this.emit(event, ...args);
    });
  }
}
```

对于图表类来说，`Handler` 类提供了完整的事件机制，但其内部把具体平台相关的事件触发实现交给 `HandlerProxy` 类去实现。这样就完成了事件机制的实现与特定平台实现分离的目标，针对不同平台实现不同的`HandlerProxy` 类即可。现在图表类的代码应该如下：

```js
class Chart {
  constructor() {
    // 渲染层为 DOM 实现
    this.__renderer = new DOMRenderer();
    this._handler = new Handler(new DOMHandlerProxy(this.__renderer));
  }

  on(...args) {
    this._handler.on(...args);
  }

  off(...args) {
    this._handler.off(...args);
  }
}
```

现在来看，图表类中之前事件触发实现与平台相关的代码已经被独立出去，且可以根据不同的渲染层实现完成无缝衔接。

## 结语

以上就是利用桥接模式对跨平台的事件机制的简化设计，解决此类问题时，最重要的是划分**抽象**和**实现**两部分。

## 参考

- <https://en.wikipedia.org/wiki/Bridge_pattern>
- <https://refactoringguru.cn/design-patterns/bridge>
