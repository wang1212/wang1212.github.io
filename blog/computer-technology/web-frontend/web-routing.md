---
title: Web 应用：单页面应用与路由
date: 2017-10-25 00:51:00
update: 2017-10-25 21:56:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - SPA
  - 路由
  - 实践案例
keywords: *ref_0
description: 现在，Web 技术不仅仅是局限于页面的开发技术，在应用的开发方面也是一种潮流，B/S 架构的技术是一种趋势。而像一般的管理型 Web 应用，不注重 SEO，非常适合单页面应用（SPA）的实现方式，而路由功能则是单页面应用的核心技术。
---


现在，Web 技术不仅仅是局限于页面的开发技术，在应用的开发方面也是一种潮流，B/S 架构的技术是一种趋势。而像一般的管理型 Web 应用，不注重 SEO，非常适合单页面应用（SPA）的实现方式，而路由功能则是单页面应用的核心技术。

<!-- truncate -->

## SPA

单页面应用（Single page application, SPA）已经是目前实现 Web 应用的主流技术了，尤其是移动端的 Web 应用。SPA 使用 Ajax 技术异步加载页面内容，使用户能够在同一个页面流畅的进行交互，并将多个页面的内容根据需要在同一个页面在适当的时候进行展示。当然，SPA 技术采用动态加载 DOM 的方法，随之而来的就是 SEO 优化问题，搜索引擎不执行 JS 代码，页面内容无法被引擎检索到，也就不利于页面的排名和检索量提升。

当然，SPA 技术主要应用于比较重的管理型 Web 应用等等，它们对 SEO 的优化需求不那么强，或者说根本就没有。在门户类网站，页面内容是非常重要的，SEO 优化的需求很强，使用 SPA 技术来动态生成 DOM 结构并不合适。但是，我们可以将多个相似模块的 DOM 结构写在同一个页面上，仅仅利用路由功能来将他们与用户的交互操作联系起来适时的进行展示即可，这也是不错的方法。

单页面应用的业务逻辑要复杂得多，所以划分模块是很重要的，利于维护和管理。但如何来划分模块呢？我们通常实现单页面应用的方法是利用"锚点"，也就是 URL 后面的`#index`这一串字符。锚点的作用是将视角跳到当前页面中`name`值与锚点值相同的元素处，常见应用方式的就是点击导航跳转到页面某处。**然而，更重要的是改变页面的锚点，页面并不会刷新，也就是说不会向服务器发送新的请求。**而这正与我们实现单页面应用的需求相契合，锚点的信息则我们决定要展示什么内容。路由的功能则是帮助我们将某一模块的业务与锚点信息联系起来，进而实现交互。

事实上，实现单页面应用的方法不仅可以利用锚点`#`，还可以使用 html5 的新 API，`popState()`与`pushState()`，但锚点兼容性更好一些。

## 路由

路由（Router）功能是实现单页面应用的核心技术，也是我们进行业务划分的基础。常见的前端框架基本都提供了路由功能，但我们通常使用框架的机会不多，而路由功能又是实现单页面应用的核心，所以在这里自己写了一个简单的路由功能帮助我们简单实现单页面应用的业务管理。

锚点值发生变化时，不会向服务器发送新的请求，但会触发`window.onhashchange()`事件，利用这个事件我们来将用户的交互操作与业务挂钩，路由则封装了这个事件，增加了一些工具方法，帮助我们管理代码，业务进行模块化划分。

其实，根据在写这个路由功能的过程中，可以明显的感受到我们只不过在前端做了类似 Tomcat 的 Filter、Servlet、Listener 等等要做的事情，然后使用 Ajax 异步的加载页面，这也许就是单页面应用的核心。而这个路由功能提供了基本的业务模块划分功能同时，还增加了`hash_url`模糊匹配功能，目的是让我们可以实现过滤器的功能，从而帮助我们将业务逻辑划分的更清晰一些；也提供了手动切换路由的功能。

### 使用路由

将 js 文件引入页面后就可以使用路由来进行业务逻辑的模块化开发了。

```js
// 引入 Router.js 后
/*  路由注册（过滤）  */
!function(){
 // 根过滤
 router('/*', function(content){
  ...
 });
}();

/*  路由注册（业务）  */
!function(){
 // 首页
 router('/index', function(content){
  ...
 });

 // 默认加载首页
 switch_routing('/index');
}();
```

`content`参数是页面中`id`为`content`的 DOM 元素，用来提供加载页面内容的容器，可在源码中修改其`id`值。

## Router.js

```js
// Router
// IE8 以下不支持的数组方法
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, self) {
    if (Object.prototype.toString.call(callback) != '[object Function]') {
      return this;
    }

    var length = this.length;

    for (var i = 0; i < length; i++) {
      callback.call(self, this[i], i);
    }

    return this;
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, self) {
    if (Object.prototype.toString.call(callback) != '[object Function]') {
      return this;
    }

    for (var i = this.length - 1; i >= 0; i--) {
      !callback.call(self, this[i]) && this.splice(i, 1);
    }

    return this;
  };
}

/*
 路由自动加载内容（单页面）

  ---content : 将页面容器标签的 id 设置为 content

  ---使用方法

   router(url, function(content){ }) : 注册对应 url 需要执行的回调方法，content 参数为页面中 ID 为 content 的元素，可重复注册

   -- url

    单个模糊匹配 : "/*"  (可作为过滤器使用，回调执行顺序优先级 : 模糊匹配 > 精确匹配)

    单个精确匹配 : "/index"

    多个混合匹配 : ["/*", "/index"]

  ---工具方法

   switch_routing(url, callback) : 手动切换 url 并执行回调

   get_hash_url() : 获取当前的 hash_url

   get_url_array(url) : 获取当前 hash_url 或者传入参数的 url 数组，例如 "/index/index1/index2/index3" => ["index", "index1", "index2", "index3"]

 */
!(function (window) {
  // 管理 root
  var routings = {},
    fuzzy_match = [];

  // 容器（ID）
  var content = document.getElementById('content');

  /* rooting 注册方法  */
  function router(url, callback) {
    // 回调不存在
    if (!callback) {
      return;
    }

    // url 是否是多个数组元素
    if (Object.prototype.toString.call(url) == '[object Array]') {
      return url.forEach(function (sub_url) {
        // 递归
        router(sub_url, callback);
      });
    }

    // 获取数据
    var routing = routings[url];

    // 未注册的情况下
    if (!routing) {
      routings[url] = callback ? [callback] : [];
      // 如果存在模糊匹配的话，例如 /index/*
      url.match('\\*') && fuzzy_match.push(url);
    } else {
      // 已注册
      callback && routings[url].push(callback);
    }
  }

  /* 执行回调 */
  function apply_routing(url) {
    var routing = [];

    // 先遍历模糊匹配（可配置过滤器）
    fuzzy_match.forEach(function (fuzzy_url) {
      routing = routing.concat(
        url.indexOf(fuzzy_url.slice(0, -1)) == 0 ? routings[fuzzy_url] : []
      );
    });
    // 精确匹配 routing
    routing = routing.concat(routings[url] || []);

    // 回调
    routing &&
      routing.forEach(function (callback) {
        callback && callback(content);
      });
  }

  /* 主动切换路由  */
  function switch_routing(url, callback) {
    // 检测当前路由
    var now = location.hash.slice(1) == url;
    // 更改 hash
    location.hash = url;
    // 手动执行回调
    now && apply_routing(url);
    // 回调
    callback && callback(content);
  }

  /* 获取当前 hash_url  */
  function get_hash_url() {
    var hash_url = location.hash.slice(1),
      query_index = hash_url.indexOf('?');

    // 查询字符串存在的话
    hash_url = query_index == -1 ? hash_url : hash_url.slice(0, query_index);

    return hash_url;
  }

  /* 检测自动加载  */
  window.onhashchange = function () {
    // 执行回调
    apply_routing(get_hash_url());
  };

  // 将路由注册方法暴露给全局
  window.router = router;

  // 将路由切换方法暴露给全局
  window.switch_routing = switch_routing;

  // 将获取当前 hash_url 方法暴露给全局
  window.get_hash_url = get_hash_url;

  /* 获取 hash_url 数组 */
  function get_url_array(url) {
    var url = url || get_hash_url();

    // 去掉空字符元素
    var url_array = url.split('/').filter(function (a) {
      return !!a;
    });

    return url_array || [];
  }

  // 将获取当前 url 数组方法暴露给全局
  window.get_url_array = get_url_array;
})(window);
```
