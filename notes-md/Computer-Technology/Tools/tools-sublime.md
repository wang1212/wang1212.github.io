---

    {
        "title": "Sublime Text-常用插件",
        "tags": ["计算机技术", "工具"],
        "keywords": ["计算机技术", "工具", "Sublime Text", "插件"],
        "summary": "Sumblime Text 是一个具有漂亮的界面和强大功能的文本编辑器，而且也支持许多丰富的插件。它是一个收费软件，但是允许开发人员无限期的免费试用。这篇文章介绍一下常用的插件。",
        "ctime": "2016-5-19 13:38:00",
        "mtime": "2016-5-19 13:38:00"
    }

---

## 安装 Sublime Text

　　Sublime Text 编辑器，我们直接去官网下载相应版本安装即可，2 或 3 版本官网均有链接。

> **Sublime Text：**http://www.sublimetext.com/

## 必备插件 Package Control

　　Package Control 插件是一个方便 Sublime Text 管理插件的插件，所以要安装其他插件之前，应该先安装它。

> **Package Control：**https://packagecontrol.io/installation

　　进入以上网站，按照其说明的两种方法即可安装该插件。在这里说一下最简单的方法：**打开 Sublime Text 按<kbd>Ctrl + ~</kbd>键进入控制台，然后复制网站中相应版本的代码到控制台，按回车执行即可，看左下角状态栏显示安装成功信息，重启 Sublime Text。**

　　注意该插件网站上有许多其他插件的详细介绍和安装方法哟。

## 插件安装方法

　　以后我们通过该插件来管理其他插件的安装，其他插件的安装方式也有两种：在线安装、本地安装。我们通常采用简单快捷的方式，即在线安装。

### 在线安装

　　打开 Sublime Text 按<kbd>Ctrl + Shift + P</kbd>键出现输入框后输入 `install package` 命令按回车，等待一会之后输入框又会出现，此时即可输入相应插件名字，选择好后按回车，查看左下角状态栏信息，即可安装成功。

### 本地安装

　　我们事先从网站上将插件的源文件下载到本地，然后打开 Sublime Text 选择工具栏中 **Preferences -> Browse Packages** 会自动打开一个文件夹，我们将下载的插件源文件拷进该文件夹中，重启 Sublime Text 即可。

## 常用插件

　　下面，将会介绍一些在 Sublime Text 使用过程中比较常用的简单插件，安装方法不再重复，查看前面即可。

### IMESupport

　　让人郁闷的是，在 Sublime Text 中输入法的输入框不能跟随光标，总是在屏幕的某个角上，这样打字的时候感觉很不习惯。IMESupport 这个小插件就是为了解决这个问题而诞生，它的作者是一位日本人。

> **IMESupport：**https://github.com/chikatoike/IMESupport

　　该插件安装成功后，不用重启 Sublime Text 即可看到效果。

### Emmet

　　该插件的前身为 Zen coding ，改名为 Emmet 后也带来了许多新特性，对于从事前端开发的朋友来说是很强大的。该插件可以实现代码自动完成、语法提示、支持 CSS 语法选择器代码生成、批量操作等等。

> **Emmet：**http://docs.emmet.io/

　　需要注意的是，该插件体积比较大，在进行安装的时候要注意左下角状态栏信息，等待 PyV8（必备，自动下载） 成功安装之后该插件方可生效。

> **PyV8：**https://github.com/emmetio/pyv8-binaries

### Color Highlighter

　　这款插件可以让我们设置的 CSS 样式颜色可视化，从而帮助我们更好的掌握页面颜色的布局。

> **Color Highlighter：**https://packagecontrol.io/packages/Color%20Highlighter

### SyncedSideBarBg

　　该插件可以让 Sublime Text 的侧边栏，也就是文件夹目录的背景色与主题同步，默认是灰白色的不太好看。侧边栏可以按<kbd>Ctrl + K + B</kbd>键唤出。

> **SyncedSideBarBg：**https://packagecontrol.io/packages/SyncedSideBar

### JsFormat

　　JsFormat 插件可以一键格式化对齐我们的 JavaScript 代码，让凌乱的代码瞬间变得整齐起来，可读性大大提高。

> **JsFormat：**https://packagecontrol.io/packages/JsFormat

　　安装好之后，任意打开一个 js 文件，按<kbd>Ctrl + Alt + F</kbd>即可格式化代码看到效果。

### A File Icon

　　A File Icon 插件可以美化侧边栏文件的图表，文件分类的视觉效果更加直观。

> **A File Icon：**https://packagecontrol.io/packages/A%20File%20Icon