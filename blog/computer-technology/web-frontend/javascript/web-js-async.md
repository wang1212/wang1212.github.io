---
title: JavaScript 异步编程
date: 2017-03-22 15:48:00
update: 2018-06-03 13:46:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - JavaScript
  - 异步编程
keywords: *ref_0
description: JavaScript 作为一门在 Web 开发中的主流语言，常常涉及到交互事件方面的应用，这不可避免的用到了异步编程的方法，而它本身则是单线程运行的。在以往的开发中，异步编程正变得越来越难管理，新的 Promise 标准 API 将使得异步编程更加方便、安全。
---


JavaScript 作为一门在 Web 开发中的主流语言，常常涉及到交互事件方面的应用，这不可避免的用到了异步编程的方法，而它本身则是单线程运行的。在以往的开发中，异步编程正变得越来越难管理，新的 Promise 标准 API 将使得异步编程更加方便、安全。

<!-- truncate -->

## 异步与并行

作为 Web 前端开发中的主流语言，JavaScript 需要实现诸多的交互动作，但是在宿主环境（例如 v8）中 JS 引擎只有一个主线程，所以多线程并行处理是不可能的。因此，异步编程显得尤为重要。

异步是时间顺序上的概念，代表着现在与未来某一时刻。最典型的就是发送 Ajax 请求：

    $.ajax('', function(){
     // do something
    });

通常我们现在发送一个异步的 Ajax 请求，然后使用函数回调在未来某一时刻执行一些事情。**而函数回调正是我们实现异步编程的一个重要途径。**

同时，并行又是一个重要的概念，它不同于异步，**并行的意义在于同一时间发生什么**。进程和线程独立运行，并可能同时运行，多个线程通常会共享单个进程的内存。这就意味着，具备多线程并发能力的话，同时也会带来诸多的问题。JS 的宿主环境浏览器仅提供了一个主线程，让 Web 开发的难度大大降低，不用考虑多线程并发所带来的诸多问题。

## 任务队列

虽然，JS 没有多线程并发能力，但是并发却是非常有用的。在一个优秀的前端应用中，交互是非常流畅的，这得益于良好的编程能力所模拟出来的并发效果。

JS 在浏览器中执行的模式是一种任务队列的形式，多个任务排成队等待主线程调用 JS 引擎执行自己的代码。这并不会出现多线程中的竞争状态，但这也意味着糟糕的编程方式可能会因为一个任务而导致整个任务链被阻塞。

    function response(data){
     // data 是一个大数组，并要进行遍历处理
     var temp = data;

     temp.map(function(val){
      return val * 2;
     });
    }

如果说 `data` 的大小在 1000 左右可以被瞬间处理完成，那么 `data` 的大小突然变成几十万呢？所以，这样的编程方式很容易因为单个任务导致其它任务被严重阻塞。

    function response(data){
     // 一次只处理 1000 个
     var temp = data.splice(0, 1000);

     temp.map(function(val){
      return val * 2;
     });

     // 剩余的稍后继续处理
     if(data.length > 0){
      setTimeout(function(){
       response(data);
      }, 0);
     }
    }

经过特殊处理之后的程序，一次只处理一部分数据，将一个大任务分割成多个小任务来完成，就会避免阻塞任务链的情况。

### JavaScript 事件轮询机制

在 JS 引擎中，基于单线程采用了事件轮询（event loop）机制来实现高并发，与单核 CPU 处理多任务进程是相似的。**主线程负责处理单个任务（macrotask）的所有流程（microtask），主线程会将同一个任务的所有流程处理完毕之后再去询问任务队列是否有新的任务需要执行，如果有则会将新的一个任务放到主线程去处理，如此往复循环。**

- macrotask

  我们可以将一个 `macrotask` 看作一个任务，多个任务存放在任务队列中，等待主线程处理。

- microtask

  而对于一个任务，我们可以有更细粒度的划分，即多个流程，我们可以将一个 `microtask` 看作任务的一个流程。

**在此基础上，我们可以理解为任务队列包含多个任务（macrotask），而单个任务又包含多个流程（microtask）。**这样我们对业务逻辑的处理可以有更细粒度的掌控，同样地有以下 API 来为我们提供一些解决方案：

- macrotask 系
  - `setTimeout`
  - `setInterval`
  - `setImmediate`
  - I/O
  - UI rendering
- microtask 系
  - `process.nextTick`
  - `Promise`
  - `MutationObserver`

举个简单的例子：

    setTimeout(() => console.log(1));

    Promise.resolve(true)
     .then(() => console.log(2))
     .then(() => console.log(3))
     .then(() => console.log(4));

    setTimeout(() => console.log(5));

    // console
    2 3 4 1 5

之所以输出顺序是 `2 3 4 1 5`，就是因为 `Promise` 属于 microtask 系，也就是说无论有多少个 `then` 回调，它们都属于同一个任务的不同流程，只有这些流程全部处理完，主线程才会处理下一个任务。

因此，明白 JS 的事件轮询机制以及任务队列模型，并保持良好的编程习惯会让 Web 应用更流畅。

## 函数回调

函数回调是实现 JS 异步编程的重要途径，基本上绝大多数异步代码都使用了函数回调。当然，事件监听也是我们用来进行异步编程的一种方式，只不过前者更广泛一些。

    // 最典型的函数回调依然是 ajax 请求
    ajax('', function(){
     // do something
    });

    // 事件也是一种异步编程的方式
    $('#id').onclick = function(){
     // do something
    }

### 嵌套回调

但是，在较为复杂的应用中，非常有可能出现嵌套回调的情形，这时候代码维护会变的困难起来。

    // 嵌套回调
    $('#id').addEventListener('click', function(){
     $.ajax('', function(){
      setTimeout(function(){
       // do something
      }, 1000);
     });
    });

也许，在我们当时写的时候会很顺畅，但以后回过头来看，代码维护的工作量会骤升。这里的程序可能还不够复杂，一旦变得更复杂一些，应用的安全将变的脆弱。

因此，嵌套的函数回调是非常严重的问题，我们期望有一种新的方式去改变这种现状，后面将会讲到 Promise API。

### 信任问题

除此之外，函数回调还有一个非常隐秘的安全问题---信任问题。在这之前，我们假设所有的回调函数最终都会被调用，但事实真是如此吗？

还是以 jQuery 中 Ajax API 为例，我们都确信传入的回调函数最终会被调用，但这依然是作为 jQuery 团队的第三方来决定的。

    // 这是一个金融系统
    function deal(userData, function(){
     // 执行交易
    });

我们很难确保第三方提供的 `deal()` 方法会在将 `userData` 进行验证之后执行交易，也就是调用回调函数。万一回调函数被执行了多次，或者一次都没执行，这些都是我们不可预料的问题，但却是极易发生的。

也许我们每次都能去合理地解决它，但为何不寻找一种一劳永逸又安全的方式呢，新的 Promise API 正是为此而来。

## Promise

我们可以通过以下方式创建一个 Promise :

    new Promise(function(resolve, reject){
     if (操作成功){
      return resolve(value);
     }
     // 操作失败
     reject(error);
    });

Promise 构造器接受一个方法，该方法有两个参数，一个为 `resolve` 表示完成，另一个为 `reject` 表示拒绝，在异步操作完成之后将会根据结果调用其中一个。

一个 Promise 对象通常会处于三个状态之中的一种：等待（Pending）、完成（Resolved）、拒绝（Rejected）。而且这种状态的改变取决于异步操作，**一旦改变将无法再次被改变**，所以是不可逆的。同样地，**如果 Promise 一旦创建，异步操作就会开始，并且我们是无法中途去中断的**。

Promise 本质上是一种异步编程的形式，运用的还是回调函数，只不过这种新的形式解决了单纯使用回调函数所存在的信任问题。将函数的调用权不再给予第三方，而是由我们自己来决定何时调用。

### 基本 API

Promise 有几个基本的 API 用来简化我们的异步编程操作，而不需要每次都去使用构造函数创建新的 Promise 对象。

#### resolve() 和 reject()

如果仅仅是需要一个拒绝状态的 Promise，以下方式是等价的：

    var p1 = new Promise(function(resolve, reject){
     reject('error');
    });

    var p2 = Promise.reject('error');

`Promise.resolve()` 通常用来创建一个已完成的 Promise，可能失败也可能成功，根据传入的值来决定。

    var p3 = Promise.resolve(value);

传入的 `value` 如果是一个 Promise 对象，则它什么也不会做，只是简单的返回该 Promise 的状态值；但是，如果 `value` 是一个值，它会自动创建一个 Promise 对象并根据值做出决议，然后返回决议值。

#### then() 和 catch()

前面我们说过，回调函数的嵌套是不利于代码维护的，那么 `Promise.then()` 则提供了链式的异步操作方式。

    var p4 = new Promise(function(resolve, reject){
     // do something
    });

    p4.then(fulfilled, rejected).then(fulfilled, rejected);

`then()` 方法的两个参数类似于构造器中回调方法的两个参数，代表着完成和拒绝操作。我们之所以可以进行链式操作，是因为每一个 Promise 的 API 都会最终返回一个 Promise 对象，这样我们就可以更灵活的进行编码。

有时候，我们只希望单纯的进行错误处理，则可以使用以下的等价方式：

    p4.then(null, rejected);

    p4.catch(rejected);

这样并非是没有接收完成状态的决议值，而是将其传入下层的 Promise 对象中。

#### all() 和 race()

这两个 API 都是辅助性方法，它们都接受一个 Promise 对象数组作为参数。

`Promise.all()` 则会在所有传入的 Promise 都处于完成（resolved）状态时，返回完成状态的 Promise，否则返回拒绝状态的 Promise。

    var p1 = Promise.resolve(42),
     p2 = Promise.resolve('Hello World'),
     p3 = Promise.reject('Error');

    Promise.all([p1, p2, p3])
     .catch(function(err){
      console.log(err);  // 'Error'
     });

    Promise.all([p1, p2])
     .then(function(msgs){
      console.log(msgs);  // [42, 'Hello World']
     });

`Promise.race()` 会在传入的所有 Promise 中第一个决议完成时，就返回该 Promise。

    Promise.race([p1, p2, p3])
     .then(function(msg){
      console.log(msg);  // 42
     });

**前者若传入一个空数组，它会立即决议完成，而后者会永远处于等待状态。**

### 局限性

首先，Promise 链的决议结果是顺序传递地，也就是说如果其中发生错误或变为拒绝状态，直到遇到第一个 `rejected` 方法，该错误才会被捕获。同时，因为第一个 `rejected` 方法已将该错误捕获并处理，此时后续的 Promise 链将失去作用，这在某些情况下不是我们想要的结果。

    var p = new Promise(function(resolve, reject){
     // do something
    })
     .then(step1)
     .then(step2)
     .then(step3)

这个 Promise 链中没有 `rejected` 方法，因此一旦发生错误或转变为拒绝状态，决议值将永远得不到处理。

每一个 Promise 只会产生一个决议值，所以我们应该遵循该规则，在需要返回多个值的程序中，我们尽可能的返回多个 Promise ，将其数组传入 `Promise.all()` 辅助方法会更好一些。

    function getY(x){
     return new Promise(function(resolve, reject){
      setTimeout(function(){
       resolve(3 * x - 1);
      }, 100);
     });
    }

    // 在此返回多个 Promise
    function foo(bar, baz){
     var x = bar * baz;

     return [
      Promise.resolve(x),
      getY(x)
     ];
    }

    // 进行处理
    Promise.all(
     foo(10, 20)
    )
     .then(function([x, y]){
      console.log(x, y);  // 200 599
     });

这里，在最后使用了一个 ES6 中数组解构赋值的特性，使得程序更为简洁。

在前面我们说过，一旦 Promise 的状态改变，就无法再进行改变了，Promise 是单决议的。这在很多时候有利于程序的安全，但在某些时候却是非常尴尬的，比如交互事件。`click` 事件每次触发都会进行响应，但 Promise 在第一次触发后就已经决议过，此后再也无法改变状态，这并不是我们想要的效果。

其次，Promise 一旦创建就无法被终止，我们通过外部来终止一个 Promise 是非常不安全的，因为这会影响其它 Promise 的决议结果。在某些情况下，比如一旦请求超时，我们希望能立即终止 Promise，但目前还没有更安全的方法来解决这个问题。

Promise 虽然相对于回调函数更方便、简单。安全一些，但其本质还是基于回调函数的，并且比回调函数要做的事情更多。这也就意味着 Promise 的性能可能并不比 回调函数高，但回过头来说，微小的性能损失与极大的便利和安全来说，相信后者是我们选择 Promise 的理由。

## Fetch

基于 Promise API，现在为我们提供了简单、方便的 Fetch API 作为一种异步获取数据的备选方案。Fetch 并不能完全替代 Ajax，Fetch 只是简单的提供了异步获取数据的功能，而 Ajax 则提供了一系列的事件机制来帮助我们更细粒度的掌控数据获取过程的情况。

### Ajax（XMLHttpRequest）

大多时候我们使用的 Ajax API 都是其它辅助库（例如 jQuery）为我们封装好的，而原生的 Ajax 使用是这样的：

    var xmlhttp;
    if (window.XMLHttpRequest){
     //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
     xmlhttp = new XMLHttpRequest();
    } else {
     // IE6, IE5 浏览器执行代码
     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function(){
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
     }
    }

    xmlhttp.open("GET", "/api/getData", true);
    xmlhttp.send();

可以看出来，原生的 Ajax 使用起来是比较麻烦的，但同样地，`XMLHttpRequest` 对象提供了许多事件来为我们提供一些实际需求的解决方案，例如进度显示。

### Fetch 更简洁的备选方案

然而，更多的场景下我们只是需要异步获取数据即可，不需要那么细粒度的控制，这时候使用 Ajax 反而显得非常麻烦了，于是出现了 Fetch 这种使用起来更简洁的备选方案。

Fetch 是基于 Promise 的，所以编码风格与其一致。来看看如何使用原生的 Fetch API 获取数据：

    fetch('/api/getData', { method: 'GET' })
     .then(response => response.json() )
     .then(json => console.log(json) )
     .catch(err => alert(err.message) );

看起来，`fetch` 使用起来要简单不少，它是在客户端构造一个 `Request` 对象发送给服务器，然后服务器返回一个 `Response` 对象返回给客户端；而且也基于 Promise 解决了回调嵌套的问题。

在使用 Fetch API 的过程中仍然要注意一些问题。

#### 默认不携带 Cookie

**fetch 发送请求默认是不携带 Cookie 信息的，不管是同域还是跨域请求；因此，在需要使用 Session-Cookie 机制进行权限验证的场景下，务必配置 `credentials` 项**：

- `omit`：默认值，请求不携带 Cookie 信息；
- `same-origin`：允许同域请求携带 Cookie 信息，跨域请求则不允许；
- `include`：同域或跨域请求皆携带 Cookie 信息

exp：

    fetch('/api/getData', { method: 'GET', credentials: 'same-origin' })
     .then(response => response.json() )
     .then(json => console.log(json) )
     .catch(err => alert(err.message) );

#### 仅在请求不能完成时 reject

**因为 fetch 是基于 Promise 的，而服务器响应的 `Response` 对象中封装的信息（例如响应状态码 200、403 等）不会作为 reject 的条件，而是仅在客户端与服务器端发生网络错误不能顺利完成请求时才会 `reject`。**

所以，这就需要在服务器返回 `Response` 对象时我们做一些简单的检验工作。

    fetch('/api/getData', { method: 'GET' })
     .then(response => {
      // check status
      if(response.status === 200){
       return response.json();
      } else {
       throw new Error(response.statusText);
      }
     })
     .then(json => console.log(json) )
     .catch(err => alert(err.message) );

#### GET 请求

在发送 Get 请求时，参数一般就携带在 `url` 中。

    fetch('/api/getData?t=' + new Date().getTime(), { method: 'GET' })
     .then(response => response.json() )
     .then(json => console.log(json) )
     .catch(err => alert(err.message) );

#### POST 请求

**在发送 Post 请求时，参数只能携带在 `body` 中，而且即便没有参数，`body` 也不能为空。**参数通常使用 `FormData` 对象来构建。

    let formData = new FormData();
    formData.append('username', 'mrwang');
    formData.append('password', '123456');

    fetch('/api/postData', {
     method: 'POST',
     body: formData
    })
     .then(response => response.json() )
     .then(json => console.log(json) )
     .catch(err => alert(err.message) );

更重要的是，现在（2018 年），`Fetch API` 已经在主流浏览器中获得了广泛的支持，所以不用太担心兼容问题。

## 参考

- 《你不知道的 JavaScript》（中卷），[美] Kyle Simpson，单业 姜南 译
