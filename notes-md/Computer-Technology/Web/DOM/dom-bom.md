---

    {
        "title": "浏览器对象模型（BOM）",
        "tags": ["Computer Technology", "Web", "前端", "DOM"],
        "keywords": ["Computer Technology", "Web", "前端", "DOM", "BOM"],
        "summary": "在网页开发中，我们通常专注于内容的设计，而有些时候我们需要进行不同窗口之间的交互，这时候我们就需要学习如何运用 BOM 中的许多核心对象，及其属性、方法。",
        "ctime": "2016-5-15 12:02:00",
        "mtime": "2016-5-15 12:02:00"
    }

---

## 浏览器对象模型

　　BOM（Browser Object Model）即浏览器对象模型，我们熟知的另一个对象模型为 DOM（Document Object Model），也就是文档对象模型。这两个都是网页设计中非常重要的概念，我们可以简单的理解为 BOM 注重的是不同网页（框架、窗口）之间的交互（浏览器层面），而 DOM 注重的是同一网页下的内容设计（网页层面）。

### BOM 中的对象

　　我们首先要了解的就是 BOM 中的对象，然后再对各个对象中的属性、方法进行探究。BOM 中有以下几个对象：

- Window
- Navigator
- Screen
- History
- Location
- Document（DOM）

　　其中最核心就是 `Document` 对象，也就是我们所说的 DOM，它本身很复杂，在此我们对它不做过多讨论。剩下的几个对象中，我们常用的并且比较重要的就是 `Window` 和 `Location` 对象了，后面将会详细讨论。

## Window

　　Window 对象表示的就是我们的浏览器窗口。如果 html 文档中包含框架（frame/iframe标签），那么每一个框架也都对应一个 Window 对象，`frames[]` 数组存放不同窗口的 `Window` 对象。Window 对象是我们很常用也很重要的 BOM 对象。

### 常用属性

    frames[]      // 窗口数组
    length        // 获取frame个数
    name          // 获取/设置窗口名称
    opener        // 获取窗口的打开/创建者
    parent        // 获取窗口的父窗口
    top           // 获取顶级窗口
    closed        // 测试窗口是否已关闭

　　上面这些属性大多都是与框架有关的，并且也是比较常用的，主要作用就如注释所写都简单易懂。**除此之外，我们还需要知道的是，其他的 BOM 对象的引用均需要 `window` 才能获取，所以 Window 对象的属性中包括其他 BOM 对象的引用属性。**如下所示：

    navigator   // Navigator对象引用
    screen      // Screen对象引用
    history     // History对象引用
    location    // Location对象引用
    document    // Document对象引用

    // 例如
    window.document.title;
    window.location;

### 常用方法

　　Window 对象有很多常用的内建方法，下面我们来分类介绍。首先介绍两个方法：

    open();    // 打开一个窗口
    close();   // 关闭一个窗口

　　需要说明的是，目前这两个方法基本不会用到，而且各个浏览器对 `open()` 方法的支持是越来越差了，打开新的网页我们通常用 `<a>` 去完成。

    alert()    // 警告对话框
    prompt()   // 输入对话框
    confirm()  // 确认对话框

    // 例如
    window.alert(location);
    window.prompt("验证码","默认文本");
    window.confirm("要关闭当前页面吗？");

　　以上三个方法均实现的是弹出式的对话框。

    setInterval()    // 创建计时器
    clearInterval()  // 清除计时器
    setTimeout()     // 创建超时器
    clearTimeout()    // 清除计时器

    // 例如
    setInterval("update()",1000);

　　以上方法通常用来实现一些特效，均接受两个参数：执行代码（回调函数）和时间(ms)。计时器就是按指定时间间隔反复执行代码，超时器则是按指定时间到时后执行一次代码即可完成。

    moveBy()      // 相对于浏览器原左上角坐标的移动坐标
    moveTo()      // 直接设置浏览器左上角坐标
    resizeBy()    // 相对于浏览器原窗口大小的调整像素
    resizeTo()    // 直接设置浏览器窗口大小
    scrollBy()    // 相对于浏览器原窗口滚动位置的滚动距离
    scrollTo()    // 直接设置窗口滚动距离

　　以上方法，都是对浏览器窗口进行的一些操作，`By()` 方法设置的都是相对参数，而 `To()` 方法设置的是绝对参数。

　　**最后，我们需要知道的是 Window 对象在 javascript 中是全局对象（浏览器环境），所以在使用的时候我们通常可以不写 `window`。**如下所示：

    // 下面三种用法等价
    window.document.title;
    self.document.title;
    document.title;

## Navigator

　　Navigator 对象包含浏览器有关的信息，如浏览器版本号、内核等等。这个对象我们通常用来精准（直接）判断浏览器为 IE、FireFox、Chrome 等等。

### 常用属性

　　Navigator 对象中我们需要注意的属性有三个。

    appName    // 浏览器名称
    appVersion // 使用浏览器的平台系统和版本信息
    userAgent  // 浏览器客户端代理

　　这里需要注意的是 `appName` 属性返回的并不是真正的浏览器名称，FireFox、Chrome 等非 IE 浏览器返回的均是 Netscape(网景)，网景浏览器是第一代浏览器。我们想要获知浏览器的真正名称则需要用到 `userAgent` 属性。

    // 直接（精准）判断浏览器名称
    var ua = window.navigator.userAgent;

    if (ua.search(/msie/i) >= 0){
        alert("你使用的是IE浏览器！");
    } else {
        if (ua.search(/chrome/i) >= 0){
            alert("你使用的是谷歌浏览器！");
        } else {
            if (ua.search(/firefox/i) >= 0){
                alert("你使用的是火狐浏览器！");
            }
        }
    }

## Screen

　　Screen 对象包含客户端显示器屏幕的一些信息，例如分辨率、颜色深度、刷新率等等。

### 常用属性

　　我们通常关心的是分辨率和浏览器窗口大小的问题，与之有关的 Screen 对象属性有四个。

    width       // 显示器分辨率的宽
    height      // 显示器分辨率的高
    availWidth  // 显示屏幕除任务栏以外的有效宽
    availHeight // 显示屏幕除任务栏以外的有效高

## History

　　History 对象包含浏览器的访问历史信息。

### 属性

    length      // 访问历史记录列表的URL数量

### 方法

　　History 对象有三个方法，是用来控制页面前进、后退、跳转的。

    back()     // 后退一个网页
    forward()  // 前进一个网页
    go()       // 按参数进行跳转

    // 下面两个等价
    back();
    go(-1);

　　这些我们通常不会用到，浏览器自身已经具备这些能力。

## Location

　　Location 对象包含有关页面URL的信息。

### 常用属性

    hash       // 页面的锚(#)
    href       // 设置/获取完整URL
    search     // 设置/获取？后的URL部分

    // 下面两个等价
    location.href = "http://wang1212.github.io/";
    location = "http://wang1212.github.io/";

### 方法

　　Location对象也仅仅只有三个方法，但很重要。

    assign()     // 加载新页面
    reload()     // 页面重载/刷新
    replace()    // 替换当前页面，但不留历史记录

    // 例如，导航栏没有历史记录
    location.replace("http://wang1212.github.io/");

## 结语

　　至此，我们对 BOM 对象有了一个简单全面的认识，了解了各个对象中一些常用的属性、方法。在这里我们没有探讨 `Document` 对象，这是因为它其实就是 DOM，是一个比 BOM 还庞大的体系，需要单独去讨论。