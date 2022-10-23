---
title: DOM-事件
date: 2016-05-23 12:18:00
update: 2016-05-23 12:18:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - DOM
  - Event
keywords: *ref_0
description: JavaScript 的作用就是让 html 静态页面具备动态效果，而这些基本都是利用 DOM 事件来实现的。
---

> _最后更新于 2016-05-23 12:18:00 _

JavaScript 的作用就是让 html 静态页面具备动态效果，而这些基本都是利用 DOM 事件来实现的。

<!-- truncate -->

## 注册 DOM 事件

事件就是给目标 DOM 节点提前注册一个相应类型的事件方法，在合适的时机进行回调执行该方法的过程。接下来就来看看如何给目标 DOM 节点注册事件：

    <style>
        div {
            background-color: #ccc;
            margin-bottom: 20px;
        }
    </style>
    <body>
        <!-- 第一种：内联（html）事件 -->
        <div onclick="alert(-1)">这是个内联事件</div>

        <div id="event0">这是个0级DOM事件</div>

        <div id="event2">这是个2级DOM事件</div>
    </body>
    <script>
        // 第二种：属性（0级DOM）事件
        var div_obj0 = document.querySelector("#event0");

        div_obj0.onclick = function(){
            alert(0);
        }

        // 第三种：2级DOM事件（addEventListener 方法）
        var div_obj2 = document.querySelector("#event2");

        div_obj2.addEventListener("click", function(){
            alert(1);
        }, false);
    </script>

以上示例可以看出，我们有三种定义事件的方式：**内联（html）事件**、**属性（0 级 DOM）事件**、**2 级 DOM 事件**。事实上，前两者的本质是一样的，都是内联属性事件；**我们通常都是通过第三种方式来（2 级 DOM 事件）定义事件的，它可以将同种事件定义多次而不会覆盖。**

我们在这里通过三种方式定义了三个事件，但它们都属于 `click` （鼠标左键点击）类型的事件，这只是其中一种事件类型，更多的事件类型我们不在这里进行一一列举。

## 事件流程

如果我们给一个元素节点和它的子节点均定义了相同类型（例如 click）的事件，当子节点的事件触发时，那么它的父元素事实上也满足了事件触发条件，但是它们的先后顺序是怎样的？这时候对于整个 HTML 文档（DOM 树）来说就有一个事件流程的概念。

    <style>
        div {
            height: 200px;
            background-color: #ccc;
        }
    <style>
    <body>
        <div>body是html的子节点，该div又是body的子节点</div>
    </body>
    <script>
        // 事件捕获阶段
        document.documentElement.addEventListener('click', function(){
            console.info("1：捕获目标中");
        }, true);
        document.body.addEventListener('click', function(){
            console.info("2：捕获目标中");
        }, true);

        // 目标div
        document.querySelector('div').addEventListener('click', function(){
            console.info("3：找到目标div");
        }, false);

        // 事件冒泡阶段
        document.body.addEventListener('click', function(){
            console.info("4：事件冒泡中");
        }, false);
        document.documentElement.addEventListener('click', function(){
            console.info("5：事件冒泡中");
        }, false);
    </script>

以上示例中，当我们用鼠标左键点击 DIV 时，控制台上会依次出现这五句话，而这正展示了 DOM 事件流程中的一部分，但足以说明事件流程这个概念。

当我们触发了某个 DOM 节点上的事件时，浏览器会从 DOM 树的根部开始遍历（捕获）到目标节点，待找到目标节点后触发事件，之后又反向遍历（冒泡）到 DOM 树的根节点。这也就是 DOM 事件流程：

> **捕获 -> 目标触发事件 -> 冒泡**

**在捕获与冒泡过程中，若路过（遍历）的节点上定义的事件与目标节点上触发的事件类型相同的话也会被触发。**

`addEventListener()` 方法的第三个参数是个布尔值：**true 则表示事件在捕获阶段触发，false 则表示事件在冒泡阶段触发。**我们通常让事件在冒泡阶段触发。

## 事件对象

每一个 DOM 事件都有一个对应的 `event` 对象，该对象拥有一些属性和方法可以帮助我们更好地控制事件。下面来看看该对象的一些常用属性：

- type

  事件类型（例如 click、mouseover）

- target

  事件触发节点对象

- currentTarget

  事件定义（注册）源节点对象

- eventPhase

  事件触发阶段（1：捕获，2：目标，3：冒泡）

exp：

    <style>
        div {
            height: 200px;
            background-color: #ccc;
            margin: 20px;
        }
    <style>
    <body>
        <div>分别点击该DIV和body试试看</div>
        <div>分别点击该DIV和body试试看</div>
    </body>
    <script>
        // body上定义事件
        document.body.addEventListener('click', function(event){
            console.info("this：", this);
            console.info("currentTarget：", event.currentTarget);
            console.info("target：", event.target);
        }, true);
    </script>

**以上示例可以看出，当我们分别点击 body 与 div 时，`target` 是变化的，它表示的是事件触发的节点对象；而 `currentTarget` 是不变的，它表示的是定义事件的节点对象（也就是节点自身），与 `this` 关键字相等。**

### 阻止事件默认行为

当我们验证表单时，如表单中用户输入的值不满足要求时是不能提交的，这时候就需要阻止表单的默认行为（提交）。所以说，在某些场景下，我们需要阻止事件的默认行为来达到我们的一些目的。

- preventDefault()

exp：

    <body>
        <a href="http://www.163.com">网易</a>
    </body>
    <script>
        document.querySelector("a").onclick = function(event){
            // 阻止超链接的默认跳转行为
            event.preventDefault();
            // return false; 也可以
        }
    </script>

以上示例中，我们会发现点击该超链接是没有任何反应的，它不会跳转到目标页面。**需要注意的是，`preventDefault()` 方法并不会阻止事件的捕获和冒泡行为。**

### 终止事件流程

通常我们都是让事件在冒泡阶段触发，在这种情况下当我们要很精确的控制事件触发条件时，也就是要确保 `event` 对象的 `target` 与 `currentTarget` 属性相同时，我们就要终止事件流程，防止触发其他节点的事件。

- stopPropagation()

exp：

    <body>
        <input type="text" value="请输入信息" />
    <body>
    <script>
        // 定义body上的事件（冒泡阶段触发）
        document.body.addEventListener('click', function(){
            alert("我是body");
        }, false);

        // 定义input上的事件
        document.querySelector("input").addEventListener('click', function(event){
            this.value = "";
            // 终止事件流程
            event.stopPropagation();
        }, false);
    </script>

以上示例中，当我们点击输入框时，触发了 `input` 上的事件却没有紧接着触发 `body` 上的事件，这是因为我们终止了事件流程（冒泡）。

## 移除 DOM 事件

既然能定义（添加）事件，当然也能移除事件了，而我们有时候的确需要这么做。

    <body>
        <inout type="text" value="请输入信息" />
    </body>
    <script>
        // 定义事件方法
        function show(){
            alert(this.value);
            this.value="";
        }

        // 定义input上的0级DOM事件
        document.querySelector("input").onclick = show;
        // 移除0级DOM事件（内联事件也一样）
        document.querySelector("input").onclick = "";

        // 定义input上的2级DOM事件
        document.querySelector("input").addEventListener('click', show, false);
        // 移除2级DOM事件
        document.querySelector("input").removeEventListener('click', show, false);
    </script>

内联事件与 0 级 DOM 事件只需要给目标节点的相应内联属性赋值为空即可移除事件；**而 `removeEventListener()` 可以移除事件方法为引用类型的 2 级 DOM 事件，它不能移除事件方法为匿名方法的事件。**

## 事件委托

有时候我们需要提前给未加入 DOM 树中的节点定义（添加）事件，这时我们可以将该事件委托（定义）给该节点的父节点，利用事件流程就可以实现我们的目的。

    <body>
        <form action="">
            <input type="text" value="请输入用户名" />
            <input type="password" />
        </form>
    </body>
    <script>
        // 将input(text)上的事件委托给父节点form
        document.querySelector("form").addEventListener('click',function(event){
            // 判断事件触发目标
            if(event.target.nodeName == "INPUT" && event.target.type == "text"){
                alert(event.target.value);
                event.target.value="";
            ｝
        }, false);
    </script>

事件委托的原理就是，我们将目标节点的事件定义（委托）在其父节点上，当我们在目标节点触发了事件时，在向上冒泡的过程中碰到其父节点然后触发事件。

## 结语

灵活运用事件，可以让我们的 html 页面用户交互体验效果更好，同时事件委托也为我们提供了更改 html 文档后同类元素节点依然可以拥有相同事件的可能。

## 参考

- 《DOM 启蒙》，Cody Lindley，陈养剑 译
