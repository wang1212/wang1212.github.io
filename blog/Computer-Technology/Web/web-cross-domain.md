---
title: Web 前端跨域访问
date: 2016-08-10 15:18:00
update: 2016-08-10 15:18:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 前端
  - 安全
  - 跨域
keywords: *ref_0
description: 为了用户的安全，浏览器通常都会限制跨域（Cross-domain）访问，也就是默认不允许不同域名下页面之间进行资源的传递和信息交互，但很多时候我们又有跨域请求资源的需求。
---

> _最后更新于 2016-08-10 15:18:00_

为了用户的安全，浏览器通常都会限制跨域（Cross-domain）访问，也就是默认不允许不同域名下页面之间进行资源的传递和信息交互，但很多时候我们又有跨域请求资源的需求。

<!-- truncate -->

## 同源策略

我们要在地址栏中正确输入“协议”、“域名”、“端口”、“文件路径”才能访问一个页面，其中任意一个不正确就不会达到我们期望的结果。所谓的跨域就是当**协议**、**域名**、**端口**这三者有一个不同时即称为跨域访问，这时候浏览器为了用户安全就会限制 JavaScript 的跨域行为，这也叫做同源策略（由网景公司提出）。

通常一个公司（组织、团队）会申请一个主域名，然后根据服务类型分出多个二级域名，在某些涉及到敏感信息的页面又会采用 HTTPS 协议加密，或许还有更多的类似需求，这些需求大多都需要跨域共享资源才能实现用户的定制服务。所以，跨域访问不是个能避免的问题，在不破坏浏览器安全性的前提下我们需要去解决它。

## 实现跨域访问

我们的跨域访问需求是多样化的，因此解决方法也是多样化的，下面就介绍一些常用的方法。

### 响应头标识

随着 Ajax 技术的大量使用，Ajax 跨域请求的需求日益增多，我们可以在服务器端很简单的解决这个问题，即在相应文件中添加响应头标识。

    // 在服务器端的文件中加上以下响应头（允许所有域名跨域访问该资源）
    header('Access-Control-Allow-Origin: *');

    // 只允许指定的域名跨域访问该资源
    header('Access-Control-Allow-Origin: http://www.163.com');

如果要指定多个域名，相互之间用逗号隔开就可以了。

### jsonp

json 是一种很简单的数据格式，鉴于它的简单性以及 script 标签可跨域的特性，我们采用 jsonp 的方式跨域访问资源。

#### 客户端代码

    <script>
    	// 在全局创建一个回调函数（result 参数为跨域访问到的资源）
    	function callback(result){
    		...
    		// 在这里处理跨域访问到的资源（也可以保存在全局变量中）
    		...
    		// 最后销毁全局的回调函数
    		window.callback = null;
    		// 移除动态创建的 script
    		document.body.removeChild(document.getElementById('nScript'));
    	}
    	// 自执行，避免污染全局空间
    	(function(){
    		// 动态创建 script 插入DOM树，实现跨域访问资源
    		var nScript = document.createElement('script');
    		nScript.id = "nScript";
    		nScript.src = "http://www.163.com/info.php?call=callback";
    		document.body.appendChild(nScript);
    	})(window);
    </script>

**注意这个回调函数必须在全局空间内，否则无法被新创建的 `<script>` 标签调用，该回调函数是在新创建的 script 标签的 `src` 属性值中以参数方式发送给服务器端的。**该函数执行完毕后，我们也可以自己销毁它，避免污染全局空间；当然，如果我们给动态创建的 script 标签指定一个 id 的话，我们也可以移除该 `script` 元素。

#### 服务器端代码

    <?php
    	header('Content-type: application/json');
    	// 获取回调方法名(注意与客户端参数名对应)
    	$call = htmlspecialchars($_GET['call']);
    	// 要返回的 json 格式数据
    	$data = "['Name','Sex','Age']";

    	echo $call."({$data})";
     ?>

事实上，所谓的 jsonp 就是通过客户端将回调函数名发送给服务器端，服务器端再把要返回的 json 数据当作参数与方法名拼接成一段 JavaScript 代码返回给客户端，客户端执行得到的 js 代码表达式（调用回调方法）就实现了跨域访问资源。

### window.name

**在浏览器中只要处于同一个窗口下，无论页面如何跳转，所有在该窗口下的页面都共享（同步）<code>window.name</code>属性（包括获取、修改操作）。**所以，我们可以将需要跨域访问的资源保存在该属性中共享即可。

#### 客户端代码

    <sctipt>
    	// 自执行，避免污染全局空间
    	(function(){
    		// 动态创建 iframe 插入DOM树，实现跨域访问资源
    		var nIframe = document.createElement('iframe');
    		nIframe.style.cssText = 'display: none';
    		nIframe.src = 'http://www.163.com/info2.html';
    		nIframe.onload = function(){
    			// 修改 src 到同源域名下（空白页）
    			this.src = 'about:blank';
    			this.onload = function() {
    				// 取得跨域访问资源，移除该 iframe
    				var data = JSON.parse(this.contentWindow.name);
    				document.body.removeChild(this);
    				// 接下来就可以处理得到的资源了
    				...
    			}
    		}
    		document.body.appendChild(nIframe);
    	})(window);
    </script>

**我们只是使用了一个 `<iframe>` 作为代理获取到跨域资源，但是 `<iframe>` 之间也是不允许跨域访问的，所以我们再次把它的 `src` 修改为同源页面或者空白页就可以获取到 `window.name` 的属性了，也就是我们需要的资源。**同样地，我们也可以在最后移除创建的 `iframe` 元素。

#### 资源页面代码

    <script>
    	window.name = '["Name","Sex","Age"]';
    </script>

由于资源页面仅仅是为了传递数据，我们通常在动态创建 `iframe` 时设置 CSS 样式为 `display：none`，避免它影响客户端页面的布局。

### document.domain

**即便是同一个页面的 `<iframe>` 也是有跨域限制的，若多个 `<iframe>` 载入的页面恰好是跨子域的话（主域名相同），我们可以将它们各自的 `document.domain` 设置为它们共有的主域名即可实现跨域访问。**下面举个例子，简单的说明一下：

    // iframe1 ： www.163.com
    <script>
    	document.domain = "163.com";
    </script>
    // iframe2 ： study.163.com
    <script>
    	document.domain = "163.com";
    </script>

这样设置好之后，我们则可以在全局范围内完成两个 `iframe` 跨子域的数据访问。

同理，我们依然可以动态创建一个 `iframe` 去完成跨子域的数据访问，具体实现我们可以参考上面共享 `window.name` 时动态创建 `iframe` 的方法。**需要注意的是，资源页面的 `document.domain` 属性要提前设置好，否则在客户端页面是无法跨域去修改资源页面的属性的。**

### HTML5 postMessage API

**在 HTML5 中，实现了一个安全便捷的跨域消息传递方案，也就是 `postMessage()` 方法，它有两个参数：第一个参数为发送的数据，绑定到 `event` 事件对象的 `data` 属性上；第二个参数为数据接受者限制域。在接受者页面还需要一个 `message` 事件供我们监听是否有数据发送过来配合使用。**

#### 客户端代码

    <script>
    	// 注册 message 事件准备接受数据
    	window.onmessage = function(e){
    		// 可以先判断发送源再处理，保证安全
    		// if e.origin == "http://study.163.com"
    		// 获取跨域访问的数据
    		var data = JSON.parse(e.data);
    		// 处理数据
    		...
    		// 销毁该事件
    		this.onmessage = null;
    		// 移除该 iframe
    		document.body.removeChild(nIframe);
    	}

    	var nIframe = document.createElement('iframe');

    	nIframe.style.cssText = "display: none";
    	nIframe.src = "http://domain1.com:8081/info2.html";

    	document.body.appendChild(nIframe);
    </script>

在进行数据接收和处理之前，我们可以使用 `event.origin` 来判断发送源是否已知，保证页面安全。

#### 资源页面代码

    <script>
    	window.top.postMessage('["Name","Sex","Age"]', 'http://www.163.com');
    </script>

第二个参数规定了数据接受者的域限制，这个也是为了保证敏感数据不会发送给未知页面，确保数据安全。

## 结语

事实上，跨域访问是个很常用的需求，而许多解决方法也都异曲同工，也不只有这些方法才能实现跨域访问，采用什么方法都是按实际需求来选择的。而我们使用跨域访问技术，是违背了浏览器默认行为的，所以更应该确保安全性。
