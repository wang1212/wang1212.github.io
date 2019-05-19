---

    {
        "title": "DOM-选取元素节点",
        "keywords": ["Web", "前端", "DOM", "Selector"],
        "summary": "DOM 操作都是通过对文档树中节点的访问来实现的，如何选取特定的元素节点是关键，进而才能访问该元素节点实现修改、查看、移除、替换等操作。",
        "ctime": "2016-5-17 22:10:00",
        "mtime": "2016-5-17 22:10:00"
    }

--- 

## 选取特定单一元素节点

　　取得某一特定单一元素节点的引用最常用的方式如下：

- querySelector()
- getElementById()

exp：

    <body>
        <ul id="animal">
            <li	id="Dog">Dog</li>
            <li id="Cat">Cat</li>
            <li id="Pig">Pig</li>
        </ul>
    </body>
    <script>
        // querySecletor()方法可通过多种途径获取第一个<li>
        console.log(document.querySelector("li"));
        console.log(document.querySelector("ul>li"));
        console.log(document.querySelector("#Dog"));
        console.log(document.querySelector("#animal>#Dog"));

        // getElementById()通过ID属性获取
        console.log(document.getElementById("Dog"));
    </script>

　　**`getElementById()` 方法仅能通过节点的 id 属性获取目标节点的引用；而 `querySelector()` 方法更强大，它可以接受一个 CSS 选择器语法格式（例如 ul > li）的参数，而且它只会返回第一个符合条件的节点的引用。**

## 选取特定元素节点集合

　　取得某一特定元素节点集合最常用的方式如下：

- querySelectorAll()
- getElementsByTagName()
- getElementsByClassName()
- getElementsByName()

exp：

    <body>
        <ul id="animals">
            <li class="animal">Dog</li>
            <li class="animal">Cat</li>
            <li class="animal">Pig</li>
        </ul>
    </body>
    <script>
        // querySecletorAll()方法可通过多种途径获取第三个<li>集合
        console.log(document.querySelectorAll("li"));
        console.log(document.querySelectorAll("ul>li"));
        console.log(document.querySelectorAll("#animals>.animal"));

        // getElementsByTagName()通过标签名称获取
        console.log(document.getElementsByTagName("li"));

        // getElementsByClassName()通过class属性获取
        console.log(document.getElementsByClassName("animal"));
    </script>

　　同样地，`querySelectorAll()` 方法更强大一些，它可以接受一个 CSS 选择器语法格式（例如 ul > li）的参数。`getElementsByName()` 方法可以通过节点的 `name` 属性获取特定节点集合的引用，但是它并不常用。

　　**`querySelectorAll()` 方法获取的节点集合是静态的，也就是说是非实时的，它只是创建该节点集合时文档的快照；而其他的方法获取的节点集合都是实时的，会及时反映文档的当前状态。**

## 选取所有的直属子元素节点

　　使用**元素节点**上的 `children` 属性，我们可以获取该元素节点的所有直属（第一代）子元素节点。

    <body>
        <ul>
            <li>Dog</li>
            <li>Cat</li>
            <li>Pig</li>
        </ul>
    </body>
    <script>
        // 获取<ul>元素内的所有<li>子元素
        console.log(document.querySelector("ul").children);
    </script>

　　**获取的该节点集合是实时的，文档中任何改动都将会动态反映到集合中。**

## 选取与上下文有关的元素节点

　　虽然 `querySelector()`、`querySelectorAll()`、`getElementsByTagName()`、`getElementsByClassName()` 这些方法一般都通过 `document` 对象访问，其实在元素节点上也有定义。这样我们可以将这些方法的查找范围缩小到文档树中某一特定分支（或者分支集）。

    <body>
        <ul id="fruits">
            <li>Apple</li>
            <li>Banana</li>
            <li>Pear</li>
        </ul>

        <ul id="animals">
            <li>Dog</li>
            <li>Cat</li>
            <li>Pig</li>
        </ul>
    </body>
    <script>
        // 获取第二个<ul>元素中的所有<li>子元素
        console.log(document.querySelectorAll("#animals>li"));

        // 这样也可以
        var li_animals=document.querySelector("#animals"); 
        console.log(li_animals.querySelectorAll("li"));
    </script>

## 预定义的元素节点选取

　　有一些很方便的预定义的元素集合，如下所示：

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

　　以上类数组列表中，`document.all` 构建自 HTMLAllCollection；`styleSheets` 构建自 StyleSheetList；其他的均构建自 HTMLCollection，并且都是实时的。

## 验证特定元素节点

　　使用 `matchesSelector()` 方法，我们可以判断一个元素是否匹配某个选择器字符串。但是该方法在不同内核的浏览器中实现不一样，分别加了前缀：

- mozMatchesSelector()
- webkitMatchesSelector()
- msMatchesSelector()
- oMatchesSelector()

exp：

    <body>
        <ul id="fruits">
            <li>Apple</li>
            <li>Banana</li>
            <li>Pear</li>
        </ul>

        <ul id="animals">
            <li id="Dog">Dog</li>
            <li>Cat</li>
            <li>Pig</li>
        </ul>
    </body>
    <script>
        // 验证id为Dog的<li>元素是否是第二个<ul>元素的子元素节点
        var a=document.querySelector("#Dog").webkitMatchesSelector("#animals>li");
        console.log(a);
        // 输出true
    </script>

## 结语

　　`querySelector()` 与 `querySelectorAll()` 方法相对来说要功能强大一些，但要特别注意的是后者获取的节点集合不是实时的。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译