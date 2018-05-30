---

    {
        "title": "DOM-文档片段",
        "keywords": ["Web", "前端", "DOM", "Fragment"],
        "summary": "DOM 操作是非常消耗性能的，如果要进行大量的 DOM 操作，我们可以选择在内存中先构建一个文档片段然后一次性插入 DOM 树。",
        "ctime": "2016-5-23 13:10:00",
        "mtime": "2016-5-23 13:10:00"
    }

--- 

## 文档片段

　　文档片段（DocumentFragment）也就是 DOM 树的部分节点组合而成的局部。频繁的 DOM 操作对性能的影响是显著的，如果我们要进行大量的相似的 DOM 操作，建议在内存中创建一个文档片段并对其修饰，然后一次性插入 DOM 树。这么做的对性能的影响是最小的，同时也更灵活一些。

### 创建文档片段

　　创建的文档片段是存放在内存中的，我们要谨慎操作，以防丢失引用或者内存泄漏，集中处理完毕后要及时更新到 DOM 树上。

- createDocumentFragment()

exp：

    <script>
        var docFrag = document.createDocumentFragment();

        ['blue','green','red','pink'].forEach(function(e){
            var li = document.createElement('li');
            li.textContent = e;
            li.style.backgroundColor = e;
            docFrag.appendChild(li);
        });
    </script>

　　这样，我们就创建好了一个文档片段，其中包含了四个 `li` 元素，我们并把它们各自的背景色设置为了其文本内容。

### 更新到 DOM 树

　　在内存中对文档片段处理完毕后，我们就应该将其更新到 DOM 树上，采用的方法前面已经介绍过了。

- appendChild()
- insertBefore()

exp：

    <body>
        <ul id="container"></ul>
        <script>
            document.getElementById('container').appendChild(docFrag);
        </script>
    </body>

　　这样我们就将刚才创建的文档片段插入到了 DOM 树中，在页面上的效果也是我们预期的。**要清楚的是，文档片段被插入 DOM 树中时，自身会被选中的 DOM 元素替代，也就是文档片段内的元素全都作为选中元素的子元素插入；而且，在插入 DOM 树后，文档片段自身也不再存在，不会发生内存泄漏的问题。**

### 更灵活的做法

　　为了让创建文档片段结构更加灵活一点，我们可以使用节点的属性来快速创建 DOM 结构。

- innerHTML

exp：

    <body>
        <script>
            var docFrag = document.createDocumentFragment();
            var divO = document.createElement('div');

            docFrag.appendChild(divO);
            docFrag.querySelector('div').innerHTML = "<ul><li>1</li><li>2</li><li>3</li></ul>";

            document.getElementById('container').appendChild(docFrag); 
        </script>
    </body>

　　该方法用来创建更复杂的 DOM 结构的代码量是很少的，所以说创建文档片段可以混合不同的方法来提高效率，当然该方法可能更耗性能一些。

### 重复利用

　　我们前面说过，文档片段在更新到 DOM 树中时会自动消失，如果我们想重复利用文档片段的话，在插入 DOM 树时将其副本插入就可以了。

- cloneNode()

    <script>
        document.getElementById('container').appendChild(docFrag.cloneNode(true));
    </script>

　　注意，`cloneNode()` 方法有一个布尔型参数，false 代表只复制节点自身，true 代表复制节点自身及其所有子节点。

## 结语

　　文档片段为我们提供了一个在内存中进行 DOM 预处理的机制，这要比我们重复进行真实 DOM 操作性能要高得多，我们应该合理利用这个机制。

## 参考

- 《DOM启蒙》，Cody Lindley，陈养剑 译