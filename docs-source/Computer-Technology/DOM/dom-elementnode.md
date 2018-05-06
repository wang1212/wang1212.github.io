---

    {
        "title": "DOM-元素节点",
        "keywords": ["Web", "前端", "DOM", "ElementNode"],
        "summary": "可以说，元素节点是 DOM 树中的核心部分，我们进行文档的操作通常都是建立在元素节点上的。",
        "ctime": "2016-5-17 13:19:00",
        "mtime": "2016-5-17 13:19:00"
    }

--- 

## 元素节点

　　>元素节点（Element Node）是我们最常用的 DOM 节点，不同类型的节点都有其自己的构造方法，并且它们身上还有许多属性和方法（包括继承的）来帮助我们完成 DOM 操作。

    <body>
        <div></div>
    </body>
    <script>
        console.log(document.querySelector('div').constructor);
        // 输出 function HTMLDivElement() { [native code] }
    </script>

　　DOM中每一个元素节点都是从唯一的 Javascript 接口/构造器构建的。**对于任何节点（不仅是元素节点），我们可以通过 `constructor` 属性来获知它们的构造方法。**

## 元素节点 DOM 操作

　　前面在介绍 DOM 时元素节点（Element Node）的部分属性与方法已做过示例，在此仅简单的提及。

### 创建节点

- document.createElement()

exp：

    <script>
        // 创建一个DIV节点
        var new_div=document.createElement('div');
    </script>

### 获取标签名

- tagName
- nodeName

exp：

    <script>
        // 获取DIV元素的标签名
        console.log(document.querySelector('div').tagName);  // 输出 "DIV"
        console.log(document.querySelector('div').nodeName);  // 输出 "DIV"  
    </script>

### 获取属性列表/集合

　　每个元素节点身上都有很多属性（包括继承自 Node），我们可以取得一个由当前元素定义的 Attr（属性）节点组成的集合。

- attributes

exp：

    <body>
        <input type="text" id="id" class="class" title="input" data-foo="dataFoo" value="123"/>
    </body>
    <script>
        // 获取属性列表/集合
        var attr=document.querySelector('input').attributes;
        console.log(attr);  // 输出 NamedNodeMap{...}
        
        // 遍历取得属性名与值
        for (var i in attr) {
            console.log(attr[i].nodeName+':'+attr[i].nodeValue);
        }
    </script>

　　我们使用元素节点的 `attributes` 属性获取的是一个包含其所有属性与相应值的属性节点对象集合（NamedNodeMap），因为每一个属性事实上也是一个属性节点对象（Attr 节点）。**我们要知道的是，`NamedNodeMap` 是一个实时数组，会随元素节点属性的变化而变化。**

### 属性操作

- setAttribute()
- getAttribute()
- removeAttribute()

exp：

    <script>
        // 设置属性
        document.querySelector('img').setAttribute('src','123.png');
        // 获取属性
        console.log(document.querySelector('img').getAttribute('src'));  // 输出 123.png  
        // 移除属性
        document.querySelector('img').removeAttribute('src');
    </script>

### 属性检测

　　有时候，我们可能想知道一个元素节点身上是否有某个特定属性时，我们也可以通过下面的方法获知。

- hasAttributes

exp：

    <body>
        <input type="text" title="" checked>
    <body>
    <script>
        // 查看input元素是否有title属性
        console.log(document.querySelector('input').hasAttribute('title'));  // 输出 true
        // 查看input元素是否有checked属性
        console.log(document.querySelector('input').hasAttribute('checked'));  // 输出 true
    <script>

　　**从上述示例可以看出，当元素节点具有该属性，即使该属性值为空也是存在的。**

### class 属性

　　一个元素节点可以包含多个定义的类样式，这些 `className` 均被放在 `class` 属性中用空格分割，而我们可以对它们进行单独操作。

#### 获取 class 列表

- classList

exp：

    <body>
        <div class="a b c"></div>
    </body>
    <script>
        // 获取div元素的class属性列表
        console.log(document.querySelector('div').classList);  // 输出 ['a','b','c']
        // 获取div元素的class属性值
        console.log(document.querySelector('div').className);  // 输出 a b c
    </script>

　　**因为 `class` 是 JavaScript 的关键字，所以获取 class 属性的值时使用 `className` 代替。**

#### class 值操作

　　我们可以对 `class` 属性列表中的值进行单独修改，添加或者移除某一个 class 值。

- add()
- remove()

exp：

    <body>
        <div class="a b"></div>
    </body>
    <script>
        // 给class属性列表中添加c
        document.querySelector('div').classList.add('c');
        console.log(document.querySelector('div').className);  // 输出 a b c

        // 从class属性列表中移除b
        document.querySelector('div').classList.remove('b');
        console.log(document.querySelector('div').className);  // 输出 a c
    </script>

#### class 值检测

　　当然，我们也可以检测 `classList` 中是否包含某一特定的 class 值。

    <body>
        <div class="a b"></div>
    </body>
    <script>
        // 查看class属性列表中是否包含b
        console.log(document.querySelector('div').classList.contains('b'));  // 输出 true
        // 查看class属性列表中是否包含c
        console.log(document.querySelector('div').classList.contains('c'));  // 输出 false
    </script>

#### toggle 自动化

　　当我们要实现特效时，可能要经历查看某个 `class` 样式是否存在，不存在时添加，存在时移除这个过程。然而，我们可以自动地一步来完成这三个过程。

- toggle()

exp：

    <body>
        <div class="a b"></div>
    </body>
    <script>
        document.querySelector('div').classList.toggle('b');
        document.querySelector('div').classList.toggle('c');
        // 查看class属性值
        console.log(document.querySelector('div').className);  // 输出 a c  
    </script>

### data-*属性

　　元素节点上经常会出现一些类似 `data-*` 形式的属性，这些属性是为了让我们实现某些目的而进行数据保存的属性。

- dataset

exp：

    <body>
        <div data-foo-foo="foo" data-bar-bar="bar"></div>
    </body>
    <script>
        // 获取DIV元素上的数据集合
        console.log(document.querySelector('div').dataset);  // 输出 DOMStringMap {...}
        // 获取一个数据
        console.log(document.querySelector('div').dataset.fooFoo);  // 输出foo
        // 设置一个数据
        document.querySelector('div').dataset.gooGoo = 'goo';
        // 删除一个数据
        delete document.querySelector('div').dataset.barBar
    </script>

　　**要注意的是，对单个数据引用时不需要加 `data` 前缀，并且当属性名中有 `-` 时应采用驼峰式命名方式书写（例如 foo-foo ==> fooFoo）。**

## 结语

　　除此之外，元素节点的插入、替换、遍历等等我们在 DOM 介绍时均已经说过，它们适用于任何类型的节点对象，我们不在此赘述。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译