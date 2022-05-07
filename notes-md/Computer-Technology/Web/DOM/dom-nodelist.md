---
title: DOM-节点集合
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
  - NodeList
summary: >-
  当从文档树中选取成组的节点或者使用预定义的节点集合时，这些节点都是放在 NodeList 或者一个 HTMLCollecton
  之中，而不是一个数组（Array）中。
ctime: '2016-05-17 22:30:00'
mtime: '2016-05-17 22:30:00'
author: 不如怀念 ([@wang1212](https://github.com/wang1212))
---

## 节点集合

　　我们将一个 `NodeList` 或者 `HTMLCollecton` 称为节点集合，也就是类数组的节点对象集合。节点集合一般有以下特征：

- 实时或静态

    　　这意味着在集合中包含的节点对象们或是实时文档树的某一部分，或是某一实时文档树的快照。

- 顺序一致性

    　　默认情况下，集合中的节点对象以其所在DOM树中的顺序排序，这就意味着这个顺序与从树到分支的线性路径吻合。

- length 属性

    　　我们可以通过其 `length` 属性获取该节点集合中的节点数目。

　　**注意，`NodeList` 与 `HTMLCollection` 都是实时列表。**

## 获取所有直属子节点

　　利用节点对象身上的 `childNodes` 属性会获取一个类数组的包含直属（第一代）子节点的列表，也就是 `NodeList`。

    <body>
        <p>Hello,World!</p>
    </body>
    <script>
        // 输出<body>元素节点的所有直属子节点集合
        console.log(document.body.childNodes);
        // 输出为 [text, p, text, script]
    </script>

　　要注意的是，它并不是一个纯数组，而是类数组的集合。为什么有两个子节点是文本（Text）节点，是因为 `<p>` 标签前后都有回车符和空格。

　　`childNodes` 属性返回的 `NodeList` 仅包含直属子节点；而且不仅包含元素（Element）节点，还包含其他所有类型节点，例如文本（Text）节点、注释（Comment）节点。

## 获取所有元素节点集合

　　对于一个**元素节点对象**，我们可以利用其 `children` 属性获取其所有的 **直属子元素节点**。而且还有以下几个文档对象属性可以获取预定义的元素节点集合：

- document.all

    获取HTML文档中所有元素节点的集合。

- document.forms

    获取HTML文档中所有（from）元素。

- document.images

    获取HTML文档中所有（img）元素。

- document.links

    获取HTML文档中所有（a）元素。

- document.scripts

    获取HTML文档中所有（script）元素。

- document.styleSheets

    获取HTML文档中所有（link、style）元素。

　　以上类数组列表中，`document.all` 构建自 `HTMLAllCollection`；`styleSheets` 构建自 `StyleSheetList`；其他的均构建自 `HTMLCollection`。

## 将节点集合转换成数组

　　节点集合（NodeList 与 HTMLCollection）都是类数组，但并不是真正的数组，后者继承数组的方法。我们做以验证：

    <body>
        <a href=""></a>
    <body>
    <script>
        // 验证 NodeList
        console.log(Array.isArray(document.body.childNodes)); // 输出false
    
        // 验证 HTMLCollection
        console.log(Array.isArray(document.links)); // 输出false
    </script>

　　如何将一个类数组列表转换成真正的 javascript 数组？

　　我们只需要将类数组列表传给 `call()` 或者 `apply()`，在它们中调用一个数组方法，它们就会返回一个未经修改的真正的 javascript 数组。

    <body>
        <a href=""></a>
    <body>
    <script>
        // NodeList 转换成数组并验证
        console.log(Array.isArray(Array.prototype.slice.call(document.body.childNodes)));
        // 输出true
    
        // HTMLCollection 转换成数组并验证
        console.log(Array.isArray(Array.prototype.slice.call(document.links)));
        // 输出true
    </script>

　　将其转换为真正的 javascript 数组有以下好处：

- 获取快照

    　　NodeList、HTMLCollection 都是实时列表，这么做使我们能够获取该列表的快照，不与实时 DOM 绑定。

- 方便操作

    　　转换成数组之后，我们可以使用数组的方法，例如 forEach、pop、map、reduce 等。

## 结语

　　其实节点集合我们通常可能不太关注，我们大多数时候关注的都是单个节点。但是，在某些需要批量操作的场景，这时候节点集合倒是不错的选择。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译