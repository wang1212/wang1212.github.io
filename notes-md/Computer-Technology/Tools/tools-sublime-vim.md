---

    {
        "title": "Sublime Text-Vim 插件",
        "keywords": ["Sublime Text", "Vim"],
        "summary": "Sumblime Text 是一个具有漂亮的界面和强大功能的文本编辑器，而且也支持许多丰富的插件。它是一个收费软件，但是允许开发人员无限期的免费试用。",
        "ctime": "2016-5-18 12:55:00",
        "mtime": "2016-5-18 12:55:00"
    }

--- 

## Vim

　　Vim 是 Linux 操作系统下类 Vi 编辑器，是一款被开发者广泛使用，并且功能强大的文本编辑器。而 Sublime Text 最初的设计初衷也是基于 Vim 的设计思想，被设计为一个跨平台的具有丰富扩展功能的 Vim。随着后来的发展，它已经不仅仅是单纯的模仿 Vim，而是支持越来越多的插件和强大的功能。

　　Vim 插件在目前的新版本中都是默认没有安装的，但是有了 Vim 插件我们可以像在 Linux 操作系统下使用 Vim 一样使用 Sublime Text，这样我们的开发效率会大大提升。下面我们就来看看如何在 Sublime Text 3 中安装 Vim 插件，并且了解一下 Vim 插件的常用功能。

## Vim 插件安装

　　首先，我们要安装好 Sublime Text 3 和 Package Control 插件。

> **Sublime Text：**http://www.sublimetext.com/ <br>
> **Package Control：**https://packagecontrol.io/installation

　　然后，我们安装 Vim 插件，这里有两种方法：在线安装和本地安装。

### 在线安装

　　打开 Sublime Text 3，<kbd>Ctrl+Shift+P</kbd>打开命令行，输入 `Install Package` 回车，等一会之后命令行再次出现，输入 `vintageous` 回车。

### 本地安装

　　先下载 Vim 插件文件：

> **Vintageous：**https://packagecontrol.io/packages/Vintageous

　　打开 Sublime Text 3，在菜单中选择 **Preferences->Browse Packages**，将下载好的 Vim 插件文件夹拷进打开的文件夹，关闭文件夹。

### 用户配置

　　打开 Sublime Text 3，在菜单 **Preferences** 下选择 **Settings-User**，也就是用户设置。我们可以找到以下这句：

    "ignored_packages": ["Vintage"]

　　这句代码的意思就是，Sublime 默认是关闭 Vim 插件的。我们将其改为：

    "ignored_packages": []

　　然后，保存退出，关闭 Sublime Text 3重启即可。

## Vim 插件使用

　　Vim 插件会有三个模式：插入模式（INSERT MODE）、命令模式（COMMAND MODE）、行末模式。

### 插入模式

　　插入模式也就是编辑模式，我们写代码的时候用的模式。此模式下可以输入代码，和普通的编辑器一样，按键盘左上角<kbd>Esc</kbd>即可进入命令模式。

### 命令模令

　　命令模式提供便捷强大的快捷键，是 Vim 插件的核心模式。此模式下，进入插入模式有八种方式：

    i  // 光标前插入
    a  // 光标后插入
    s  // 替换插入（删除当前光标所在字符）
    Shitf+I  // 行首插入（光标所在行）
    Shift+A  // 行尾插入（光标所在行）
    Shift+S  // 行替换插入（删除光标所在行）
    o  // 下一行插入（光标所在行下添加一行）
    Shift+O  // 上一行插入（光标所在行上添加一行）

　　然后，命令模式下进入行末模式的方式是：<kbd>Shift+;</kbd>，也就是冒号。

#### 常用快捷键

　　命令模式下还有许多便捷而强大的快捷键，下面来了解一下。

- 光标移动

        h  // 光标左移
        j  // 光标下移
        k  // 光标上移
        l  // 光标右移

        gg  // 光标移动到文档开头
        Shift+G  // 光标移动到文档结尾

- 复制、粘贴、剪切/删除、撤销/恢复（批量操作）

        yy  // 复制光标所在整行
        2+yy // 复制光标所在行开始向下2（n）行

        p   // 光标所在行下方添加一行并粘贴
        2+p  // 光标所在行下方添加2（n）行并粘贴
        Shitf+P  // 光标所在行上方添加一行并粘贴

        dd  // 删除、剪切光标所在整行
        2+dd  // 删除、剪切光标所在行开始向下2（n）行

        u  // 撤销
        Ctrl+Y  // 恢复

        r  // 替换光标所在字符

- 其他删除/剪切方式

        d+gg  // 光标所在行到文档开头之间全部删除、剪切
        d+Shift+G  // 光标所在行到文档结尾之间全部删除、剪切

        d+2+gg  // 光标所在行到第2（n）行之间全部删除、剪切
        d+2+Shift+G  // 同上

        d+^  // 光标所在字符到行首之间全部删除、剪切
        d+$  // 光标所在字符到行尾之间全部删除、剪切
        Shift+D  // 同上

        d+w  // 删除光标所在处一个单词、符号

        x  // 删除光标所在字符
        2+x // 删除光标所在字符开始向后2（n）个字符

### 行末模式

　　行末模式也就是通常我们所说的菜单栏，提供文件保存等操作。

    w  // 保存当前文档
    x  // 保存文档并关闭

## 结语

　　Vim插件有三种模式，但是不能互相切换，命令模式是其切换枢纽。三者切换关系如下：

> **插入模式<--->命令模式<--->行末模式**

　　为了方便、安全，我们通常将其初始化模式设置为 **命令模式**，方式：打开 Sublime Text 3，在菜单 **Preferences** 下选择 **Settings-User**，也就是用户设置；添加下面这句：

    "vintage_start_in_command_mode": true