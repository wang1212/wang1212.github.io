---

    {
        "title": "DOM-加载 JavaScript",
        "tags": ["Computer Technology", "Web", "前端", "DOM", "JavaScript"],
        "keywords": ["Computer Technology", "Web", "前端", "DOM", "JavaScript"],
        "summary": "页面的动态交互离不开 Javascript，将 js 脚本引入页面时会阻塞页面加载，在某些时候我们则可以选择异步加载 js 脚本。",
        "ctime": "2016-5-24 22:49:00",
        "mtime": "2016-5-24 22:49:00"
    }

---

## 引入 js 代码

　　通常我们会将 JavaScript 代码写在一个单独的文件中，这样做的好处是页面整洁、结构更清晰，页面更小加载速度更快，同时也易维护。实际上在页面中引入 js 代码的方法有多种，我们按需选择即可。

### 外部脚本文件（允许跨域）

　　这种方式是最常用的，但要注意的是 `<script>` 标签内如果再写 js 代码会被直接忽略掉（不执行）。

    <script src="./js/main.js"></script>

### 内联脚本

　　该方式会生成一个文本节点，如果我们通过节点的 `innerHTML` 和 `textContent` 属性改变其文本内容（代码），并不会执行新的代码。此种方式也较常用。

    <script>
        alert(1);
    </script>

### 事件属性

　　我们可以在事件属性的值中写入一个方法引用，在事件触发时则会执行该方法。这种方法不推荐使用。

    <body>
        <div onclick="show()"></div>
        <script>
            function show() { ... }
            // 作用等价形式为下
            var obj = document.querySelector('div');
            obj.onclick = show;
        </script>
    </body>

### JavaScript 协议

　　我们可以在元素的属性值中使用 JavaScript 协议来执行相应代码，但这种方式是不推荐使用的。

    <a href="javascript: false">Link</a>

## 加载外部 js 文件

　　页面在加载过程中，默认是同步加载 js 的，如果遇到 `<script>` 标签则会停止页面的一切解析行为，开始（下载）执行相应的 JavaScript 代码，直至执行完毕。这会造成页面阻塞，页面的显示效果可能会因此受到影响。**所以说，我们应该尽可能将不需要立即执行的 js 脚本放在 `<body>` 标签的尾部加载，这时候所有的页面元素已加载完毕，并不会对页面产生过多影响。**

### 延迟加载

　　有时候我们的 js 文件可能很大，即便是放在 `<body>` 尾部也加载的很慢，或者要放的更靠前一点，这样页面的显示效果会被严重影响。此时，我们可以选择将一些不是很重要的 js 文件延迟到 `<html>` 标签关闭前再进行下载、执行。

- defer

exp：

    <!-- 一直延迟到 </html> 前才开始加载 -->
    <script defer src="./js/main.js"></script>

　　我们可以延迟多个脚本的加载，但并不是所有的浏览器最后都按顺序并且在 `DOMContentLoaded` 事件前加载它们。

### 异步加载

　　也许我们并不想将 js 文件延迟到 `</html>` 标签关闭前才进行加载，此时我们可以通过异步加载来更提前一些。

- async

exp：

    <!-- 开始加载，但不阻塞页面 -->
    <script async src="./js/main.js"></script>

　　异步加载会一开始就进行 js 文件的下载，但不会阻塞当前页面的解析，至于何时加载完我们也不知道，但是一加载完就会执行相应代码，此时也不会阻塞页面的解析。同样地，我们可以异步加载多个文件，但必定不会按顺序进行加载，这是我们要注意的。而且，IE10 才开始支持该属性。

    <!-- 测试加载完毕顺序 -->
    <script async onload="console.log('1 加载完毕')" src="./js/1.js"></script>
    <script async onload="console.log('2 加载完毕')" src="./js/2.js"></script>
    <script async onload="console.log('3 加载完毕')" src="./js/3.js"></script>

## 动态引入，异步加载

　　我们可以在不使用 `async` 属性的情况下，动态创建 `<script>` 标签并插入 DOM 树，此时引入的 js 文件也会进行异步加载。

    <script>
        // 动态引入，异步加载，可跨域
        var nScript = document.createElement('script');
        nScript.src = "http://.../js/1.js";
        document.body.appendChild(nScript);
    </script>

　　**该方法可以解决跨域访问资源的问题。**同样的，多个文件动态引入均会进行异步加载，但也不会按顺序加载。

## 获取所有 script 节点

　　我们可以通过预先设置的属性获取页面中所有 `<script>` 标签的节点集合，然后我们可以对其进行遍历打印一些信息。

- document.scripts

exp：

    <script>
        // 遍历并打印出 src
        Array.prototype.slice.call(document.scripts).forEach(function(e){
            console.log(e, e.src);
        })
    </script>

　　我们获取的并不是一个数组，而是一个节点集合，要使用数组的 `forEach()` 方法我们就先将其转换成一个数组。

## 结语

　　由于 `<script>` 标签的同步加载特性，若我们的代码中有进行 DOM 操作，那么放在 `<head>` 中将会执行失败，因为此时 `<body>` 中要操作的元素还未解析出来。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译