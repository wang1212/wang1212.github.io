---
title: DOM-元素节点几何量
tags:
  - 计算机技术
  - Web
  - Web 前端
  - DOM
keywords:
  - 计算机技术
  - Web
  - Web 前端
  - DOM
  - Rule
summary: 当我们在查看 HTML 文档时，每个元素节点被解析后，都画成了可视形状。我们可以获取每个元素节点的几何量（宽、高、偏移量）以及页面滚动距离。
ctime: '2016-05-19 14:54:00'
mtime: '2016-05-19 14:54:00'
author: 不如怀念 ([@wang1212](https://github.com/wang1212))
---

## 元素节点几何量

　　通常我们将一个元素抽象成一个盒子模型，具有 content（内容）、padding（填充、内边距）、border（边框）、margin（外边距）这些尺寸属性。

### 定位偏移量

　　使用元素节点的 `offsetTop` 与 `offsetLeft` 属性，我们可以分别获取该元素节点**顶部与左侧外边框**相对于 `offsetParent` 的**顶部与左侧内边框**的偏移像素量。

- offsetParent
- offsetTop
- offsetLeft

　　一个元素节点的 `offsetParent` 判定依据为查找**距离该元素节点最近的 CSS 定位（position）值不为 static（默认值）的祖先元素，**直至 `body` 元素为止。如果在查询过程中，找到 `td`、`th`、`table` 元素之一，且它的定位值为 `static`，则将它作为 `offsetParent`。

    <style>
        #out{
            width: 200px;
            height: 200px;
            background-color: #ccc;
            border: 5px solid yellow;
            padding: 10px;
            margin: 15px;
            position: relative;
        }
        #in{
            width: 100px;
            height: 100px;
            background-color: red;
            border: 3px solid blue;
            padding: 6px;
            margin: 9px;
        }
    </style>
    <body>
        <div id="out">
            <div id="in"></div>
        </div>
    </body>
    <script>
        // 查看内部DIV的offsetParent
        console.log(document.querySelector("#in").offsetParent);
        // 输出<div id="out">...</div>
        // 这是因为外部DIV的position="relative/absolute"
    
        // 验证内部DIV的offsetTop与offsetParent的值
        console.log(document.querySelector("#in").offsetTop);  // 输出19
        console.log(document.querySelector("#in").offsetLeft);  // 输出19
    </script>

　　上述示例可以看出，符合**外边框到 `offsetParent` 内边框**的计算方式。通俗的说就是，我们将一个小盒子放到一个大盒子中，小盒子外侧到大盒子内侧的距离就是我们要计算的值。

### 盒子属性

　　在可视区（浏览器 HTML 文档显示区，不包含浏览器导航、地址栏等）内，我们可以通过 `getBoundingClientRect()` 方法获取某个元素的矩形盒子基本属性。

- getBoundingClientRect()

exp：

    <style>
        body{
            border: 0px;
            padding: 0px;
            margin: 0px;
        }
        div{
            width: 200px;
            height: 200px;
            background-color: #ccc;
            border: 10px solid yellow;
            padding: 30px;
            margin: 50px;
        }
    </style>
    <body>
        <div></div>
    </body>
    <script>
        // 获取DIV的矩形盒子基本属性
        console.log(document.querySelector("div").getBoundingClientRect());
        // 输出ClientRect{top: 50, right: 330, bottom: 330, left: 50, width: 280, height: 280}
    
        // 可以单独获得某项基本属性
        console.log(document.querySelector("div").getBoundingClientRect().top);
        // 输出50
    </script>

　　上述示例可以看出，`top`、`bottom`、`left`、`right` 属性表示该元素矩形的**上、下、左、右外边框**相对于浏览器**可视区上、下、左、右边沿**的偏移像素量。通俗的说就是，在存放快递盒子的仓库中，每个盒子四周外侧到仓库四周墙壁的距离就是我们要计算的值。

　　`width` 与 `height` 属性表示该元素矩形的可视尺寸（宽、高），不包括 `margin`（外边距）。

### 盒子尺寸

　　我们可以通过一些属性获取可视区（浏览器HTML文档显示区，不包含浏览器导航、地址栏等）内元素矩形的尺寸。

- offsetWidth
- offsetHeight
- clientWidth
- clientHeight

exp：

    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: #ccc;
            border: 10px solid yellow;
            padding: 30px;
            margin: 50px;
        }
    </style>
    <body>
        <div></div>
    </body>
    <script>
        // 获取DIV的矩形盒子尺寸
        console.log(document.querySelector("div").offsetWidth);  // 输出280
        console.log(document.querySelector("div").offsetHeight);  // 输出280
    
        console.log(document.querySelector("div").clientWidth);  // 输出260
        console.log(document.querySelector("div").clientHeight);  // 输出260
    </script>

　　上述示例可以看出，`offsetWidth` 与 `offsetHeight` 属性表示的是元素矩形的可视尺寸（宽、高），不包括 `margin`（外边距）。

　　但是，`clientWidth` 与 `clientHeight` 属性表示的是元素矩形的有效尺寸（宽、高），不包括 `margin`（外边距）、`border`（边框）。

### 获取特定点上最顶层元素节点

　　我们可以使用 `elementFromPoint()` 方法获取可视区（浏览器 HTML 文档显示区，不包含浏览器导航、地址栏等）内，特定点上最顶层元素节点的引用。

- elementFromPoint()

exp：

    <script>
        // 获取文档可视区内left=50，top=50处最顶层元素节点
        console.log(document.elementFromPoint(50,50));
    </script>

　　**如果没有设置 z 轴索引值 `z-index`，则最顶层元素节点就是 HTML 文档中该点上最后被解析的元素节点。**

## 滚动几何量

　　当HTML文档太大（页面元素太多）时，或者当某个元素节点内内容太多时，会出现左右滚动条。此时，我们可能需要知道该元素节点的滚动区域、滚动距离等等。

### 滚动尺寸

　　我们可以通过以下属性来获取 HTML 页面或者某个元素节点的滚动尺寸（总高、总宽）。

- scrollWidth
- scrollHeight

exp：

    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: #ccc;
            overflow: auto;
        }
        p{
            width: 1000px;
            height: 10000px;
            margin: 0px;
        }
    </style>
    <body>
        <div>
            <p></p>
        </div>
    </body>
    <script>
        // 获取DIV的滚动尺寸
        console.log(document.querySelector("div").scrollWidth);  // 输出1000
        console.log(document.querySelector("div").scrollHeight);  // 输出1000
    </script>

　　**当滚动条未出现（滚动区域<元素尺寸）时，这两个属性将返回 `clientWidth` 与 `clientHeight` 属性的值，也就是有效尺寸。**

### 滚动距离

　　通常页内导航可以将视区跳转到页内某个区域内，或者当页面向下滚动时才继续加载图片等等。这些功能的实现都要获取（设置）所滚动的距离。

- scrollLeft
- scrollTop

exp：

    <style>
        p{
            width: 10000px;
            height: 10000px;
        }
    </style>
    <body>
    <p></p>
    </body>
    <script>
        // 利用事件将窗口滚动距离显示在标题上
        window.onscroll=function(){
            scroll_left=document.body.scrollLeft || document.documentElement.scrollLeft;
            scroll_top=document.body.scrollTop || document.documentElement.scrollTop;
            document.title=scroll_left+","+scroll_top;
        }
    </script>

　　如果我们想让页面滚动到某一处，直接给 `scrollLeft` 和 `scrollTop` 属性赋值即可。

### 滚动元素节点到视区内

　　页内导航通常也可以根据选取特定元素，将视区跳转到该元素节点上来实现，这样实现的方式是最科学的。

- scrollIntoView()

exp：

    <style>
        button{
            margin: 10px;
        }
        p{
            height: 1000px;
            background-color: #ccc;
        }
    </style>
    <body>
        <button>跳转到第一段</button>
        <button>跳转到第二段</button>
        <button>跳转到第三段</button>
        <button>跳转到第四段</button>
        <button>跳转到第五段</button>
        <p id="p1">第一段</p>
        <p id="p2">第二段</p>
        <p id="p3">第三段</p>
        <p id="p4">第四段</p>
        <p id="p5">第五段</p>
    </body>
    <script>
        // 获取按钮集合并转换为数组
        var buttons=document.getElementsByTagName("button");
        buttons=Array.prototype.slice.call(buttons);
        // 利用事件实现按钮跳转
        for (var i = buttons.length - 1; i >= 0; i--) {
            buttons[i].onclick=function(){
                var index=buttons.indexOf(this)+1;
                document.querySelector("#p"+index).scrollIntoView();
            }
        }
    </script>

## 结语

　　元素节点的几何量（尺寸、定位偏移量），页面元素的滚动距离等等都是我们经常使用的值，所以清楚的了解什么属性、方法获取什么值是非常有必要的。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译