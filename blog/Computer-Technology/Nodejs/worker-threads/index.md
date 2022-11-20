---
title: NodeJS 的并行执行能力：Worker threads 模块
date: 2021-11-06 19:57:00
update: 2021-11-06 19:57:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Node.js
keywords: *ref_0
description: 测试
draft: true
---

# NodeJS 的并行执行能力：Worker threads 模块

<!-- truncate -->

nodejs 的任务队列源代码

> https://github.com/nodejs/node/blob/main/lib/internal/process/task_queues.js

nodejs libuv 事件循环源代码

> https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c#L384

## 参考资源

- https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
- https://developer.chrome.com/blog/requestanimationframe-api-now-with-sub-millisecond-precision/
- http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- https://2ality.com/2022/09/nodejs-overview.html
- https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask
- http://docs.libuv.org/en/v1.x/index.html
- https://github.com/enki/libev
- https://github.com/libevent/libevent
- https://web.dev/howbrowserswork/
