---

    {
        "title": "文档对象模型（DOM）",
        "tags": ["Computer Technology", "Web", "前端", "DOM"],
        "keywords": ["Computer Technology", "Web", "前端", "DOM"],
        "summary": "在网页设计中，有一个很重要的角色需要我们了解，DOM 帮助我们对页面元素进行增、删、改等全方位的操作，而且让 JavaScript 在客户端修改 HTML 文档成为一个很简单的事情，可以说 DOM 为我们操作 HTML 文档提供了强大的编程接口。",
        "ctime": "2016-5-16 14:04:00",
        "mtime": "2016-5-16 14:04:00"
    }

---

## 文档对象模型

　　Document 对象是 BOM 中的核心对象，也是最为复杂的一个。Html 文档解析时，会创建一个 Document 对象，并将整个文档以树形结构展现，而这种结构被抽象为 DOM（Document Object Model），也就是文档对象模型。

　　DOM 最大的特点就是，它是一种树形/层次结构，由许多节点组成，而 DOM 中将这些节点抽象为一个对象，称为节点对象（Node Object）。DOM 中的所有操作都是通过访问这些节点对象来进行的，所以我们要了解DOM就要首先了解这些节点对象。

　　这里要说的一点就是，DOM 是遵循 W3C 标准的。而且 DOM 最初是为 XML 文档设计的应用编程接口，后来为了在 HTML 文档中使用而被扩展。

### 节点对象类型

　　HTML 文档中绝大部分常见的节点对象类型（Node Object Model）有以下几个：

- DOCUMENT_NODE（文档，如window.document）
- DOCUMENT_TYPE_NODE（文档类型，如 <!DOCTYPE html>）
- ELEMENT_NODE（元素，如&lt;html&gt;、&lt;body&gt;、&lt;a&gt;、&lt;p&gt;、&lt;script&gt;）
- ATTRIBUTE_NODE（属性，如 id="main"）
- TEXT_NODE（文本内容）
- COMMENT_NODE（注释，&lt;!-- --&gt;）
- DOCUMENT_FRAGMENT_NODE（文档片段，如 document.creatDocumentFragment()）

　　这些其实都是浏览器 javascript 环境下 Node 对象的常量属性，用来存储映射节点到某一特定节点对象类型的数值代号。我们可以通过以下代码获取 Node 对象的所有属性：

    <script>
        for(var key in Node){
            console.log(key,"=" + Node[key]);
        }
    </script>

    // 控制台输出
    ELEMENT_NODE =1
    ATTRIBUTE_NODE =2
    TEXT_NODE =3
    CDATA_SECTION_NODE =4
    ENTITY_REFERENCE_NODE =5
    ENTITY_NODE =6
    ···

　　每一种节点对象类型都对应着一种接口，并且都有其 JavaScript 构造函数。**`ATTRIBUTE_NODE` 并不是树的一部分，不参与构成 DOM 树结构。**

## 节点对象（Node Object）

　　如果知道关于面向对象编程知识的话，很容易去理解节点对象。DOM 树里面每个节点对象都从 Node 继承属性和方法。例如：

- Object&lt;Node&lt;Element&lt;HTMLElement&lt;(如HTML*Element)
- Object&lt;Node&lt;CharacterData&lt;Text
- Object&lt;Node&lt;Document&lt;HTMLDocument

　　其实，可以看出的是节点对象与 JavaScript 中的其他对象一样，都继承自 `Object.prototype`。我们可以遍历一个元素（Element）对象，查看其继承的所有属性和方法。如下所示：

    <body>
        <a href=""></a>
    </body>
    <script>
        var a_obj = document.querySelector("a");

        for (var key in a_obj){
            document.write(key+"<br />");
        }
    </script>

    // 输出
    target
    download
    ping
    ...

### 通用属性、方法

　　由于所有的节点对象都继承自 Node ，所以它们有一些共同的属性、方法用来操作、查看、遍历 DOM 的基础值与函数。

- 节点属性
    - parentNode
    - firstChild
    - lastChild
    - previousSibling
    - nextSibling
    - childNodes
    - nodeName
    - nodeType
    - nodeValue
- 节点方法
    - appendChild()
    - insertBefore()
    - removeChild()
    - replaceChild()
    - cloneNode()
    - compareDocumentPosition()
    - contains()
    - hasChildNodes()
    - isEqualNode()
- 文档方法
    - document.createElement()
    - document.createTextNode()
    - document.createComment()
- HTML*Element属性
    - innerHTML
    - outerHTML
    - textContent
    - innerText
    - outerText
    - firstElementChild
    - lastElementChild
    - nextElementSibling
    - previousElementSibling
    - childElementCount
    - children
- HTML元素方法
    - insertAdjacentHTML()
    - insertAdjacentText()

　　以上这些属性、方法就可以用来操作 HTML 文档，实现增、删、改等操作，要记住的一点就是：**DOM 操作通常都是通过访问节点对象来实现。**

### 识别节点对象类型与名称

　　我们可以看到所有的节点对象都具有 `nodeType` 和 `nodeName` 属性，继承自 Node。下面，我们来看看它们的返回值是什么。

    <body>
        <p>Hello World!</p><hr />
    </body>
    <script>
        // 查看p元素标签的nodeType和nodeName
        p_obj=document.querySelector("p");
        document.write(p_obj.nodeType+"<br />"); // 输出1
        document.write(p_obj.nodeName+"<br />"); // 输出P

        // 查看p标签内文本节点的nodeType和nodeName
        text_obj=document.querySelector("p").firstChild;
        document.write(text_obj.nodeType+"<br />"); // 输出3
        document.write(text_obj.nodeName+"<br />"); // 输出#text
    </script>

　　其实，我们可以看出来 `nodeType` 的返回值就是前面讲到的 Node 常量属性的值，这样我们就可以确定一个节点对象的类型了；而 `nodeName` 的返回值通常就是元素标签的名称大写。

### 获取节点的值

　　绝大多数节点类型（除了 Text 和 Comment）的 `nodeValue` 属性都返回 nil。它的作用就是获取 Text 与 Comment 节点的实际文本字符串。

    <body>
        <p>Hello World!</p><hr />
    </body>
    <script>
        // 查看p标签内文本节点的nodeValue
        text_obj=document.querySelector("p").firstChild;
        document.write(text_obj.nodeValue); // 输出Hello World!
    </script>

　　当然，我们也可以给 Text 或 Comment 节点的 `nodeValue` 赋值改变其字符串内容。

## 常用 DOM 操作

　　接下来我们来看看如何使用这些节点对象的通用属性、方法来进行 DOM 操作。遍历节点、创建节点、插入节点、移除节点、替换节点、复制节点等等都是最基础的 DOM 操作。

### 遍历节点对象

　　我们要使用 JavaScript 进行 DOM 操作，首先就要了解 DOM 树的结构，也就是节点的序列。这时候我们可以通过一个目标节点来实现遍历节点。

- parentNode
- firstChild
- lastChild
- previousSibling
- nextSibling

exp：

    <body>
        <ul>
            <li id="A"></li>
            <li id="B"></li><em></em>
        </ul>
    </body>
    <script>
        /*
        这里要注意的是，<ul>元素节点有4个直属子节点，包括：
            两个<li>元素节点，一个<em>元素节点，一个文本（Text）节点。
        这是因为第一个</li>后面的回车符也是文本字符。
        */

        // 先找到一个目标节点<ul>
        var ul_obj=document.querySelector("ul");

        // 获取它的父节点
        document.write(ul_obj.parentNode.nodeName+"<br />"); // 输出BODY
        // 获取它的第一个直属子节点
        document.write(ul_obj.firstChild.nodeName+"<br />"); // 输出LI
        // 获取它的最后一个直属子节点
        document.write(ul_obj.lastChild.nodeName+"<br />"); // 输出EM

        // 重新找一个目标节点<li id="B">
        var B_obj=document.querySelector("#B");

        // 获取它的上一个兄弟节点
        document.write(B_obj.previousSibling.nodeName+"<br />"); // 输出#text
        // 获取它的下一个兄弟节点
        document.write(B_obj.nextSibling.nodeName+"<br />"); // 输出EM
    </script>

　　上述示例可以分为两部分来看，先看 `parentNode` 、`firstChild`、`lastChild` 这三个属性，它们分别返回的是目标节点的**父节点**、**首个直属子节点**、**末尾直属子节点**。**直属子节点的意思就是一个节点的第一代子节点。**可以看出来这三个属性分别是跨越了 DOM 树的层结构，可以让某个节点获取到它的上层或者下层节点。

　　接下来的两个属性 `previousSibling` 和 `nextSibling`，分别返回的是目标节点的**上一个兄弟节点**和**下一个兄弟节点**。因为返回的是兄弟节点，所以说这两个属性并没有跨越 DOM 树的层结构，属于同级操作。

　　总的来说，我们可以通过这五个属性获取某个节点的上层节点、下层节点，同级节点，实现 DOM 树节点的遍历。

### 创建节点对象

　　在 HTML 文档解析完成后，所有节点都是基于文档内容创建的，形成 DOM 树结构。然而，我们还可以通过 JavaScript 来创建额外的节点对象。下面就以创建元素（Element）与文本（Text）节点为例：

- document.createElement()
- document.createTextNode()

exp：

    <script>
        // 创建一个元素节点div
        var new_div=document.createElement("div");
        document.write(new_div.nodeType+"<br />"); // 输出1
        // 创建一个文本节点
        var new_text=document.createTextNode("Hello World!");
        document.write(new_text.nodeType+"<br />"); // 输出3
    </script>

### 插入节点对象

　　创建好节点对象后，我们就可以将其插入到 DOM 树中，让其成为 HTML 文档的一部分。

- appendChild()
- insertBefore()

exp：

    <body>
        <p>Hello,</p>
    </body>
    <script>
        var new_text=document.createTextNode("World!");
        // 添加新文本节点到P元素节点的子节点序列的末尾
        var p_obj=document.querySelector("p");
        p_obj.appendChild(new_text);
    </script>

　　上述示例可以看到，`<p>` 标签内的字符串变为 "Hello,World!"，新创建的文本（Text）节点对象被添加在了 p 元素节点的子节点（Child Nodes）序列末尾。**所以 `appendChild()` 方法的作用就是将新节点对象插入到目标节点的子节点序列末尾。**如果目标节点没有子节点，新的节点则作为其首个子节点插入。

    <body>
        <p>World!</p>
    </body>
    <script>
        var new_text=document.createTextNode("Hello,");
        // 添加新文本节点到目标节点的前面
        var p_obj=document.querySelector("p");
        p_obj.insertBefore(new_text,p_obj.firstChild);
    </script>

　　上述示例可以看到，`<p>` 标签内的字符串变为 "Hello,World!"，新创建的文本（Text）节点对象被添加在了p 元素节点的首个子节点前面。**所以 `insertBefore()` 方法的作用就是将新节点对象插入到目标节点的某个子节点位置前面。**如果没有给定第二个参数（插入子节点位置），则和 `appendChild()` 效果是一样的。

### 移除与替换节点对象

　　有时候我们需要去改变原来的 HTML 文档内容，而不是插入新节点，因此我们要在 DOM 树中某一节点上进行移除、替换操作。

- removeChild()
- replaceChild()

exp：

    <body>
        <p id="p1">Welcome to China!</p>
        <p id="p2">Hello,World!</p>
    </body>
    <script>
        // 先找到要移除的子节点
        var p1_obj=document.getElementById("p1");
        // 在父节点上删除该子节点
        p1_obj.parentNode.removeChild(p1_obj);
    </script>

　　上述示例可以看到，第一个 `<p>` 标签不见了。**从 DOM 树中要移除一个节点，我们通常先找到要移除的节点，然后通过它的 `parentNode` 属性获取父节点，在父节点上利用 `removeChild()` 移除该子节点。**

    <body>
        <p><strong>Hello,World!</strong></p>
    </body>
    <script>
        // 创建新的文本节点
        var new_text=document.createTextNode("Welcome to China!");
        // 先找到要替换的节点
        var strong_obj=document.querySelector("strong");
        // 在父节点上替换该子节点
        strong_obj.parentNode.replaceChild(new_text,strong_obj);
    </script>

　　上述示例可以看到，`<p>` 标签内的字符串变为了 "Welcome to China!"，并且没有加粗。**从 DOM 树中要替换一个节点，我们通常先创建一个新节点，接下来找到要替换的节点，然后通过它的 `parentNode` 属性获取父节点，在父节点上利用 `replaceChild()` 替换该子节点。**该方法的第一个参数为新节点，第二个参数为被替换节点。

　　**要值得注意的是，`removeChild()` 与 `replaceChild()` 这两个方法会分别返回被替换和被移除的相应节点。这些节点只是从 DOM 树中移出，而并没有消失，在内存中仍然持有它的引用。**

### 复制节点对象

　　当然，我们有时候要创建一个 DOM 树中存在的节点时，最方便的办法就是直接复制一份。

- cloneNode()

exp：

    <body>
        <p><strong>Hello,World!</strong></p>
    </body>
    <script>
        // 复制节点
        var p_obj=document.querySelector("p").cloneNode(true);
        // 插入到<Body>的子节点序列末尾
        document.body.appendChild(p_obj);
    </script>

　　上述示例可以看到，不仅复制了 p 元素节点，而且其子节点也被全部复制了。**`cloneNode()` 有一个参数，为布尔值，`false` 代表仅仅复制节点自身，`true` 代表复制节点及其所有子节点。**

## 元素（Element）节点的 DOM 操作

　　上面了解的是所有节点类型的 DOM 操作，由于我们通常打交道的都是元素（Element）节点，所以有必要了解一些 HTML 元素节点特有的属性、方法，如何利用它们进行 DOM 操作，完成一些重要的功能。

### 获取元素节点内容

　　其实我们可以通过 JavaScript 获取某个元素节点的内容，也就是所谓的源代码。

- innerHTML
- outerHTML
- textContent
- innerText
- outerText

exp：


    // 我们随便打开一个页面，在控制台进行下列操作

    // 下面这句会弹出&lt;html&gt;元素内的源代码，但不包括&lt;html&gt;标签
    alert(document.documentElement.innerHTML);

    // 下面这句会弹出&lt;html&gt;元素内的源代码，包括&lt;html&gt;标签
    alert(document.documentElement.outerHTML);

    // 下面两句会弹出&lt;html&gt;元素内的所有文本节点的字符串
    alert(document.documentElement.innerText);
    alert(document.documentElement.outerText);

    // 下面这句也会弹出&lt;html&gt;元素内的所有文本节点的字符串，但稍不一样
    alert(document.documentElement.textContent);

　　上述示例可以看出，`innerHTML` 与 `outerHTML` 这两个属性都可以获取一个元素节点的内容（源代码）；**不同的是前者不包括该节点的标签，而后者包括该节点的标签。**

　　其次，`innerText`、`outerText` 与 `textContent` 这三个属性均可以获取一个元素节点内的所有文本节点；**不同的是前者只会获取所有<u>样式设置为显示</u>的文本节点；而后者不仅会获取<u>样式设置为隐藏</u>的文本节点，还会获取该节点内 `style` 与 `script` 标签内的全部内容（源代码）。**

### 用字符串创建节点并插入 DOM 树

　　在常用 DOM 操作的学习过程中，我们学会了如何创建一个节点，并将该节点插入到 DOM 树中。但对于元素（Element）节点来说，我们其实可以一步完成创建与插入操作。

- innerHTML
- textContent
- innerText
- insertAdjacentHTML()
- insertAdjacentText()

exp：

    <body>
        <h1></h1>
        <p></p>
    </body>
    <script>
        // 创建<strong>元素节点和文本节点并插入DOM树
        document.querySelector("p").innerHTML="<strong>Hello</strong> World!";

        // 创建文本节点并插入DOM树,下面两句效果一样
        document.querySelector("h1").textContent="China";
        document.querySelector("h1").innerText="China";
    </script>

　　上述示例可以看到，通过给 `innerHTML` 与 `textContent`、`innerText` 属性赋值，可以替换掉一个元素节点内的节点结构（源代码），也就是创建新节点并插入到 DOM 树中，覆盖掉该元素节点原来的所有子节点。

　　不过，`innerHTML` 属性会检测字符串中的元素标签，并将其转换成实际的 DOM 节点插入到 DOM 树中；而 `textContent`、`innerText` 属性会将整个字符串当作一个文本节点直接插入到 DOM 树中，字符串中的元素标签将会失效。

    <body>
        <p>World!</p>
    </body>
    <script>
        // insertAdjacentHTML()与insertAdjacentText()方法均有两个参数
        // 第一个参数可选项为：
        // "beforebegin"   （开始标签前）
        // "afterbegin"    （开始标签后）
        // "beforeend"     （关闭标签前）
        // "afterend"      （关闭标签后）

        // 创建<strong>元素节点和文本节点并插入到p节点开始标签后面
        document.querySelector("p").insertAdjacentHTML("afterbegin","<strong>Hello</strong>");
    </script>

　　`insertAdjacentHTML()` 方法与 `innerHTML` 属性功能一样，而 `insertAdjacentText()` 方法与 `textContent`、`innerText` 属性功能一样。上述示例可以看出，这两个方法根据第一个参数可以实现精准插入。**需要注意的是，这两个方法并不会覆盖掉节点内原来的所有子节点，而是将新的节点插入到子节点序列中的相应位置。**

### 移除与替换元素节点

　　当然，我们也可以一步完成元素（Element）节点的移除与替换。

- outerHTML

exp：

    <body>
        <p>Hello,World!</p>
        <span>你好!</span>
    </body>
    <script>
        // 移除<span>元素节点
        document.querySelector("span").outerHTML="";

        // 替换<p>元素为<h1>元素,并替换文本节点
        document.querySelector("p").outerHTML="<h1>Hello,China!</h1>";
    </script>

### 遍历元素节点对象

　　在进行常用 DOM 操作学习时，我们遍历节点对象时会包含所有节点对象（元素节点、文本节点、注释节点等），但是我们通常只关心元素（Element）节点。

- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling

　　以上这些属性与前面所介绍的属性相类似，只不过这些属性会忽略掉其他类型的节点对象，只返回元素节点对象。当然，利用这些属性完成 DOM 树的元素节点遍历也是类似的，我们不再详细举例讨论。

　　**利用 `childElementCount` 可以获取目标节点直属子元素节点的数目。**

## 结语

　　DOM 是一个很复杂的体系，要理解的就是它是一个树形结构，HTML 文档解析时创建了许多节点，而我们所有的 DOM 操作都是依靠访问这些节点对象实现的。DOM 树中的节点其实就是一个个接口，提供了我们使用 JavaScript 操作 HTML 文档的编程接口。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译