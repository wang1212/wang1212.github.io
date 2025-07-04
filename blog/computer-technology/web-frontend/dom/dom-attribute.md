---
title: DOM-元素节点属性
date: 2016-05-21 21:00:00
update: 2016-05-21 21:00:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - DOM
  - Attribute
keywords: *ref_0
description: 元素节点上具有很多属性，这些属性我们通常可以很方便的获取，并进行简单的操作。
---


元素节点上具有很多属性，这些属性我们通常可以很方便的获取，并进行简单的操作。

<!-- truncate -->

## 节点属性常用操作

每个 HTML 元素都有很多属性，例如（id、class、name、url、src、href）等等，元素节点上定义了一些方法供我们使用，来对这些属性进行设置、获取、移除操作。

- setAttribute()
- getAttribute()
- removeAttribute()

exp:

    <body>
       <img style="width: 200px;height: 200px;" />
    <body>
    <script>
        var img_obj=document.querySelector("img");

        // 用方法设置单个属性
        img_obj.setAttribute("src","123.png");
        img_obj.setAttribute("title","img");
        img_obj.setAttribute("alt","img");

        // 用方法获取单个属性
        console.log(img_obj.getAttribute("src"));  // 输出 123.png
        console.log(img_obj.getAttribute("title"));  // 输出 img
        console.log(img_obj.getAttribute("alt"));  // 输出 img

        // 用方法移除单个属性
        img_obj.removeAttribute("src");
        img_obj.removeAttribute("title");
        img_obj.removeAttribute("alt");
    </script>

要注意的是，我们通常也可以直接获取、设置、移除某个元素节点上的属性，但是用方法获取比较好，并且获取的是原始值。例如，img 元素的 `src` 属性若直接获取得到的是计算后的绝对路径，而用 `getAttribute()` 方法获取得到的则是我们写在标签上的原始数据。

    <script>
        // 直接获取属性（绝对路径）
        console.log(img_obj.src);
        // 输出 file:///C:/Users/Administrator.USER-20141121ES/Desktop/html/123.png

        // 用方法获取（原始值）
        console.log(img_obj.getAttribute("src"));
        // 输出 123.png
    </script>

**所以，我们要获取元素的属性，务必用 `getAttribute()` 方法。**

## 内联 CSS 属性

每个 HTML 元素都有个 `style` 属性，可以用来插入针对该元素的内联 CSS 属性。

    <body>
        <div style="width: 200px;height: 200px;background-color: #ccc;border: 5px dotted blue;"></div>
    <body>
    <script>
        // 获取内联style属性
        console.log(document.querySelector("div").style);
        // 输出 CSSStyleDeclaration {0: "width", 1: "height", 2: "background-color"...}
    </script>

**元素节点的 style 内联属性返回一个 `CSSStyleDeclaration` 对象，该对象仅包含该元素节点的内联 CSS 属性（不包含内部样式表、外部样式表中的 CSS 属性）。**

### 单个 CSS 属性操作

元素节点的内联 CSS 属性都是该元素的 `style（CSSStyleDeclaration）` 对象上的一个个属性，所以我们可以通过 style（CSSStyleDeclaration）对象来设置、获取、移除单个内联 CSS 属性。

    <body>
        <div></div>
    <body>
    <script>
        var div_style=document.querySelector("div").style;

        // 直接设置单个内联CSS属性
        div_style.width="200px";
        div_style.height="200px";
        div_style.backgroundColor="red";

        // 直接获取单个内联CSS属性
        console.log(div_style.width); //输出200px
        console.log(div_style.height); //输出200px
        console.log(div_style.backgroundColor);  // 输出red

        // 直接移除单个内联CSS属性
        div_style.width="";
        div_style.height="";
        div_style.backgroundColor="";
    </script>

要注意的是，`style（CSSStyleDeclaration）` 对象的属性名并不包含 `-` 字符，比如 `background-color` 属性名是不存在的。这些包含横线的属性名需要转译，通常规则如下：

    // 写成驼峰体命名法
    background-color ---> backgroundColor
    font-size ---> fontSize
    border-bottom ---> borderBottom
    margin-top ---> marginTop

    // 简写属性也可以
    border ---> border
    margin ---> margin

    // 如果属性名为 javascript 关键字，则加前缀
    float ---> cssFloat

如果我们觉得属性名转译不太方便的话，我们还可以通过 `style（CSSStyleDeclaration）` 对象上定义的方法来进行设置、获取、移除单个内联 CSS 属性的操作。

- setProperty()
- getPropertyValue()
- removeProperty()

exp:

    <body>
        <div></div>
    <body>
    <script>
        var div_style=document.querySelector("div").style;

        // 用方法设置单个内联CSS属性
        div_style.setProperty("width","200px");
        div_style.setProperty("height","200px");
        div_style.setProperty("background-color","red");

        // 用方法获取单个内联CSS属性
        console.log(div_style.getPropertyValue("width"));  // 输出200px
        console.log(div_style.getPropertyValue("height"));  // 输出200px
        console.log(div_style.getPropertyValue("background-color"));  // 输出red

        // 用方法移除单个内联CSS属性
        div_style.removeProperty("width");
        div_style.removeProperty("height");
        div_style.removeProperty("backgroundColor");
    </script>

### 批量 CSS 属性操作

当我们需要批量操作内联 CSS 属性的时候，一个一个的进行未免太过麻烦，这里我们可以一次性改变所有内联 CSS 属性。

- cssText

exp:

    <body>
        <div></div>
    <body>
    <script>
        var div_obj=document.querySelector("div");

        // 用内联style属性对象上的方法
        // 设置所有内联CSS属性
        div_obj.style.cssText="width: 200px;height: 200px;background-color: #ccc";
        // 获取所有内联CSS属性
        console.log(div_obj.style.cssText);
        // 输出 width: 200px; height: 200px; background-color: rgb(204, 204, 204);
        // 移除所有内联CSS属性
        div_obj.style.cssText="";

        // 用元素自身的方法
        // 设置所有内联CSS属性
        div_obj.setAttribute("style","width: 200px;height: 200px;background-color: #ccc");
        // 获取所有内联CSS属性
        console.log(div_obj.getAttribute("style"));
        // 输出 width: 200px;height: 200px;background-color: #ccc;
        // 移除所有内联CSS属性
        div_obj.removeAttribute("style");
    </script>

## 计算后的 CSS 属性

我们其实最想得到的是元素内联 CSS 样式以及级联（内部样式表、外部样式表）CSS 样式计算后得到的最终样式，而不仅仅是未计算的内联样式。

- getComputedStyle()

exp:

    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: #ccc;
        }
    </style>
    <body>
        <div style="background-color: red;border: 1px solid blue;"></div>
    </body>
    <script>
        var div_obj=document.querySelector("div");

        // 此为内部样式表中的CSS属性
        console.log(window.getComputedStyle(div_obj).width);
        // 输出 200px
        console.log(window.getComputedStyle(div_obj).height);
        // 输出 200px

        // 内联CSS属性覆盖了内部样式表中的CSS属性
        console.log(window.getComputedStyle(div_obj).backgroundColor);
        // 输出 rgb(255, 0, 0)

        // 此为内联CSS属性
        console.log(window.getComputedStyle(div_obj).border);
        // 输出 1px solid rgb(0, 0, 255)
    </script>

**`getComputedStyle()` 方法获取的是计算后的最终样式（包括内联样式、内部样式表、外部样式表），CSS 属性名注意要进行转译（例如，background-color => backgroundColor）。**

## 利用 id 和 class 改变 CSS 样式

更多的时候，我们都是将 CSS 样式写在内部样式表或者外部样式表中的，这样做便于维护和替换。我们可以通过改变元素节点的内联 `id` 或 `class` 属性来批量替换 CSS 样式。

    <style>
        #a{
            background-color: red;
        }
        .b1{
            border:1px solid blue;
        }
        .b2{
            width: 200px;
            height: 200px;
            background-color: yellow;
            margin: 0 auto;
        }
    </style>
    <body>
        <div class="b1"></div>
    </body>
    <script>
        var div_obj=document.querySelector("div");
        // 添加ID，改变背景颜色
        div_obj.setAttribute("id","a");
        // 获取ID
        console.log(div_obj.getAttribute("id"));  // 输出 a
        // 去掉ID
        div_obj.removeAttribute("id");

        // 添加class,让DIV居中
        div_obj.classList.add("b2");
        // 获取class
        console.log(div_obj.getAttribute("class"));  // 输出 b1 b2
        console.log(div_obj.classList); //输出 DOMTokenList ["b1","b2"]
        // 删减class的一部分，去掉边框
        div_obj.classList.remove("b1");
        // 再次获取class
        console.log(div_obj.getAttribute("class"));   // 输出 b2
        console.log(div_obj.classList); //输出 DOMTokenList ["b2"]
    </script>

**要特别注意的是，通过改变 `id` 或 `class` 属性值更改的是内部样式表、外部样式表中的 CSS 样式属性，要比内联 CSS 样式属性的优先级低。**

## 结语

其实要进行批量的改变 CSS 样式，我们完全可以替换元素的 `id` 和 `class` 属性（CSS 选择器），这样既方便还可以重复利用样式，这也是我们常用的方式。

## 参考

- 《DOM 启蒙》，Cody Lindley，陈养剑 译
