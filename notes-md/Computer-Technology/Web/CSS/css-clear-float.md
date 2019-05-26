---

    {
		"title": "CSS 清除浮动",
		"tags": ["Computer Technology", "Web", "前端", "CSS"],
        "keywords": ["Computer Technology", "Web", "前端", "CSS", "Float"],
        "summary": "在浮动布局中，有时候会因为父元素没有设置高度而子元素浮动导致父元素坍塌，我们就需要清除浮动撑起父元素的高度，在这里总结一下常用方法。",
        "ctime": "2016-5-21 18:25:00",
        "mtime": "2016-5-21 18:25:00"
    }

---

## 浮动

　　我们通常为了将块级（block）子元素水平排列，就将其浮动（`float: left|right`）起来而达到我们的目的，当然这会带来一些问题。所以，我们应尽可能清除浮动所带来的副作用，以免影响其它元素的布局。

	<style>
		#container{
			background-color: grey;
		}
		.inner {
			margin: 15px;
			width: 200px;
			height: 200px;
			background-color: blue;
			float: left;
		}
	</style>
	<body>
		<div id="container">
			<div class="inner">1</div>
			<div class="inner">2</div>
			<div class="inner">3</div>
		</div>
	</body>

　　此时，我们并看不到外层 div 的灰色背景，打开调试工具会发现外层 div 的 `height: 0`。当我们没有设置父元素高度，恰巧所有子元素浮动时，父元素的高度会成为 `0`，而没有被子元素撑起来。这是因为，子元素浮动之后脱离了文档流。

## 清除浮动

　　清除浮动的方法很多，灵活性很大，通常我们只用一两种，但是都了解一下还是应该的。

### 添加块级子元素

　　我们知道，当所有子元素浮动之后，我们继续在后面添加一个不浮动的块级（block）子元素，浮动的子元素会漂浮在该元素上方。

	<div id="container">
			...
		<div class="inner">3</div>
		<div style="clear:both;"></div>
	</div>

　　在所有浮动子元素尾部添加一个**块级元素**并**清除浮动**，我们会发现父元素被撑高了，而且此元素也没有影响页面布局的副作用。</b>该方法的原理是：该元素由于设置了清除浮动，不允许有浮动元素漂浮在自己上方，所以该元素自然就排在了所有浮动元素之后，而该元素高为 0 相当于隐藏，因此也不会产生影响其它元素。

　　但是，该方法是不推荐的，因为添加一个没有表现内容的标签会显得页面代码复杂化，所以我们应该选择更好的方法。

### 父元素 overflow: auto

　　我们也可以从父元素着手来解决浮动问题，当然这也不是个最佳方法。

	<style>
		#container {
			overflow: auto;
			zoom: 1;  /* IE兼容 */
		}
	</style>

　　**我们可以通过给父元素设置 `overflow: atuo;zoom: 1;` 来达到清除浮动的目的。**后者是为了低版本的IE兼容性而设置的。

　　此方法实际上也是不推荐的，简单的来说我们并不能确保父元素不会产生滚动条从而影响页面美观性。

### 伪元素 :after

　　接下来要说的就是一种推荐的做法了，这个方法被大多数人采用。

	<style>
		#container {
			zoom: 1;  /* IE兼容 */
		}
		#container:after {
			clear: both;  /* 清除浮动 */
			content: '';  /* 伪元素默认属性 */
			height: 0;  /* 保证不显示 */
			display: block;  /* 确保为块元素 */
			visibility: hidden;  /* 确保渲染但不显示 */
		}
	</style>

　　该方法事实上是对上面两个方法的综合，伪元素不是实际的 DOM 元素，这是其优势。**该方法是最为优雅的清除浮动的方法，我们应该尽可能的采用该方法来清除浮动，不过还是应该视情况而定。**

### 双伪元素

　　随着浏览器的更新，标准的统一和兼容，可以使用更简洁的双伪元素法清除浮动，它与上面的原理相同。

	<style>
		#container:before, #container:after {
			content:"";
			display:table;
		}
		#container:after {
			clear:both;
		}
		#container {
			zoom:1;
		}
	</style>

　　这里的 `:before` 伪元素并不是用来清除浮动的，而是解决垂直方向上 `margin` 重叠问题。

### 其他方法

　　在实际开发过程中，我们发现并不是只有以上三种方法会产生清除浮动的效果，而其他某些时候也会产生该效果，下面就简单的列举一下。

- 父元素也浮动时；
- 父元素为 `position: absolute` 时；
- 父元素为 `display: table` 时。

　　以上这些均是一些副作用产生了清除浮动的效果，不应该作为清除浮动的目的来使用，因为这样会产生一些其他问题。

## 结语

　　也许，CSS 清除浮动的方法不止这些，不过我们只是单纯的为了清除浮动，采取最优雅的方法即可。其实，直接定义父元素的高度也相当于清除了浮动的副作用。