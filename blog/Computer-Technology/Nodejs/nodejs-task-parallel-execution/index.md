---
title: NodeJS 中任务的并行处理
date: 2021-11-06 19:57:00
update: 2021-11-06 19:57:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Node.js
keywords: *ref_0
description: NodeJS 中任务的并行执行有多种解决方案，child_process.fork()、Cluster 模块以及 Worker threads 模块，简单的了解一下各个方案的技术细节和优劣。
draft: true
---

# NodeJS 中任务的并行处理

在常见的业务场景中为了解决一些耗时任务的运行时性能问题，需要具备任务并行处理的能力。NodeJS 中任务的并行执行有多种官方解决方案，[`child_process.fork()`](https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html#child_processforkmodulepath-args-options)、[Cluster 模块](https://nodejs.org/dist/latest-v18.x/docs/api/cluster.html)以及 [Worker threads 模块](https://nodejs.org/dist/latest-v18.x/docs/api/worker_threads.html#worker-threads)，这里主要是简单的了解一下各个方案的技术细节和优劣。

<!-- truncate -->

首先，简单的了解几个常用的概念。

## 并行和并发

并行（Parallelism ）和并发（Concurrency）是两个容易混淆的概念，在单核 CPU 以时间片轮转机制工作时，**一段时间内**多个任务进程可以轮流抢占 CPU 所有权执行自己的任务，达到同时开始、交替执行、同时结束的并发执行目的，而多核 CPU 环境中，在任务数量不超过 CPU 核心数的情况下，每个任务在**同一时刻**都可以获取单个 CPU 核心的所有权来执行自己的任务，达到并行执行的目的。

简单的来说，并发执行多个任务并不是真正意义上的同时刻执行，是一种软件优化的结果，并不是节省总耗时，而并行执行多个任务是真正同时刻执行，只有在多核 CPU 环境下才是可能的，是一种硬件优化的结果，可以节省总耗时。

## 进程和线程

参考不同编程语言中的并发编程技术，有两个基本的执行单元：进程（Process）和线程（Thread）。通常，我们所说的程序即对应一个或多个进程，比如 Web 浏览器程序启动后会有多个进程（浏览器进程、GPU 进程等）一起运行。同时，一个进程拥有自己独立的执行上下文，一套完整的基本运行时资源，例如堆栈、内存空间等，为了安全性进程之间是相互隔离的，但进程之间也可以相互通信。另一方面，每个进程都会创建一个线程，通常称为主线程。线程又被称为轻量级进程，线程存在于进程中，线程又可以创建其它线程，在多核 CPU 环境中多个线程可以并行完成任务。同样地，每个线程有自己独立的执行上下文、堆栈，但是可以共享内存空间，相互进行通信，这也就导致线程缺乏安全性。

简单的来说，**一个应用程序对应一个（或多个）进程，进程拥有运行应用程序所需的所有资源调度权，进程会创建一个主线程来执行具体的操作，即线程是执行进程活动的真正实体，多核 CPU 环境下可以创建多个线程并发执行来提高应用程序的运行时性能。**换句话说，创建进程的成本很高，但进程之间相互隔离保证了安全性，同时通信效率较低；创建线程的成本相对较低，线程之间可以共享数据，通信效率高但缺乏安全性。

## NodeJS 的单线程模型

## NodeJS 的并行编程

## 参考资源

- Parallelism && Concurrency
  - https://en.wikipedia.org/wiki/Parallel_computing
- Process && Thread
  - https://learn.microsoft.com/en-gb/windows/win32/procthread/about-processes-and-threads?redirectedfrom=MSDN
  - https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html
  - https://medium.com/@akhandmishra/operating-system-threads-and-concurrency-aec2036b90f8
  - https://www.backblaze.com/blog/whats-the-diff-programs-processes-and-threads/
- NodeJS
  - https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html#child_processforkmodulepath-args-options
  - https://nodejs.org/dist/latest-v18.x/docs/api/cluster.html
  - https://nodejs.org/dist/latest-v18.x/docs/api/worker_threads.html#worker-threads
  - https://nodesource.com/blog/worker-threads-nodejs/
  - https://yarin.dev/nodejs-cpu-bound-tasks-worker-threads/
  - https://alvinlal.netlify.app/blog/single-thread-vs-child-process-vs-worker-threads-vs-cluster-in-nodejs
  - https://stackoverflow.com/questions/56312692/what-is-the-difference-between-child-process-and-worker-threads
