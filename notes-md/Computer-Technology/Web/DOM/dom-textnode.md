---

    {
        "title": "DOM-文本节点",
        "tags": ["Computer Technology", "Web", "Front End", "DOM"],
        "keywords": ["Computer Technology", "Web", "Front End", "DOM", "Text Node"],
        "summary": "文本（Text）节点虽然很多时候我们直接用 innerHTML 去赋值替换，但当我们进行一些细微的修改时，了解一下 DOM 操作还是非常有用的。",
        "ctime": "2016-5-24 21:50:00",
        "mtime": "2016-5-24 21:50:00"
    }

---

## 文本节点

　　文本节点的 DOM 操作是不常用的，我们通常直接用元素节点的 `innerHTML` 属性直接替换其所有文本节点，但当我们要对文本节点进行局部操作时 DOM 操作却是很有用的。下面列举一些文本节点常用的属性及方法：

- textContent
- appendData()
- deleteData()
- insertData()
- replaceData()
- subStringData()
- splitText()
- normalize
- Data

　　需要注意的是，我们在元素节点中留下的空格、回车符、制表符等空白字符也是被解析成文本节点的，所以说我们不压缩页面代码的话，会有许多无用的文本节点影响性能。

## 文本节点的 DOM 操作

　　下面就详细介绍一下文本节点常用的 DOM 操作的过程，首先来了解一下如何创建一个文本节点并将其插入到 DOM 树中。

### 创建节点并更新到 DOM 树

　　文本（Text）节点不同于元素节点，在 `document` 对象上也有专门用来创建文本节点的方法。

- createTextNode()

exp：

    <body>
    　　<h1></h1>
    </body>
    <script>
    　　var textO = document.createTextNode('Hello World!');
        document.querySelector('h1').appendChild(textO);
    </script>

### 获取节点的文本值

　　文本节点的文本值是呈现出来给用户看的，但有些时候我们也需要让程序去获知被用户修改后的文本值。

- data
- nodeValue
- substringData()

exp：

    <body>
        <h1>Hello World!</h1>
    </body>
    <script>
        var textO = document.querySelector('h1').firstChild;
        // 获取文本值
        console.log(texto.data); // Hello World!
        console.log(textO.nodeValue); // Hello World!
        // 获取文本值的长度
        console.log(textO.length);
        console.log(textO.data.length);
        console.log(textO.nodeValue.length);
        // 获取部分文本值（开始索引<不包括>，长度）
        console.log(textO.substringData(6,5)); // World
    </script>

### 节点的文本值操作

　　文本节点的文本值事实上也是重要的数据，这涉及到一些查看、增添、删除、修改等操作。

- appendData()
- deleteData()
- insertData()
- replaceData()
- splitText()

exp：

    <body>
        <h1>Hello World</h1>
    </body>
    <script>
        var textO = document.querySelector('h1').firstChild;
        // 添加（尾部附加）
        textO.appendData('!');
        console.log(textO.data); // Hello World!
        // 删除（删除位置索引<不包括>，删除长度）
        textO.deleteData(7,4);
        console.log(textO.data); // Hello W!
        // 插入（插入位置索引<其后插入>，插入值）
        textO.insertData(7,'orld');
        console.log(textO.data); // Hello World!
        // 替换（替换位置索引<不包括>，替换长度，替换值）
        textO.replaceData(6,5,'China')
        console.log(textO.data); // Hello China!
        // 分割（分割位置索引<不包括>，分割长度）
        var sText = textO.splitText(6,5);
        console.log(sText.data); // China!
    </script>

　　`splitText()` 方法会按要求将一个文本节点分割成多个文本节点，同时还会返回包含分割部分的文本节点对象。

### 多个文本节点的情况

　　当我们在一个元素节点内写了很多文本值时，只要它们没有被元素节点分割，所有相邻的文本值将被浏览器解析成一个文本节点。但是，当我们主动创建多个文本节点并插入到 DOM 树中时，浏览器却不会合并这些相邻的文本节点。

#### 元素内所有文本值

　　当元素节点内的文本值被多个元素节点分割时，这些文本值会被解析成多个文本节点。元素节点的 `innerHTML` 属性获取的是该节点内的所有后代节点（包括文本节点与元素节点），而我们有时候却只想查看该节点的所有文本值（所有文本节点合并而成），下面就来看看如何查看。

- textContent

exp：

    <body>
        <h1>Hello <i>World!</i></h1>
    </body>
    <script>
        var eleO = document.querySelector('h1');
        // 获取所有文本值
        console.log(eleO.textContent); // Hello World!
        // 设置所有文本值
        eleO.textContent = 'Hello World!';
        console.log(eleO.textContent); // Hello World!
    </script>

　　**我们会发现，`textContent` 与 `innerHTML` 获取的值不同，但是它们在进行设置时行为却是一样的，也就是说会覆盖掉目标元素节点内的所有后代节点。**

#### 合并多个文本节点

　　当有多个相邻的文本节点存在时，我们可以让其合并成一个文本节点，只需要在它们的父元素节点上使用 `normalize()` 方法即可，这里不再做示例。

- normalize()

## 结语

　　文本节点的属性及方法大部分都可以用在注释节点（Comment）上。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译