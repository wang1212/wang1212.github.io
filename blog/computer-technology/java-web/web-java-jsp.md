---
title: JSP 内置对象、指令与动作
date: 2017-08-11 11:07:00
update: 2017-08-11 11:07:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 后端
  - Java
  - JSP
keywords: *ref_0
description: JSP 全称为 Java Server Page，即 Java 服务器页面，基于简化的 Servlet 设计，是一种建立动态网页的技术标准。JSP 有九个内置对象，可以不加声明和创建就可以在 JSP 页面脚本中直接使用，同时还提供了动作与指令元素，为开发提供了极大地便利。
---

> _最后更新于 2017-08-11 11:07:00_

JSP 全称为 Java Server Page，即 Java 服务器页面，基于简化的 Servlet 设计，是一种建立动态网页的技术标准。JSP 有九个内置对象，可以不加声明和创建就可以在 JSP 页面脚本中直接使用，同时还提供了动作与指令元素，为开发提供了极大地便利。

<!-- truncate -->

## 内置对象

内置对象（built-in object）是 JSP 技术自有的，供开发者在 JSP 页面中直接使用，简化开发过程，提高效率。JSP 提供了九个内置对象：

- out

  javax.servlet.jsp.JspWriter，客户端输出。

- request

  javax.servlet.http.HttpServletRequest，请求信息。

- response

  javax.servlet.http.HttpServletResponse，响应信息。

- session

  javax.servlet.http.HttpSession，会话管理。

- application

  javax.servlet.ServletContext，全局应用管理。

- pageContext

  javax.servlet.jsp.PageContext，代表 JSP 上下文。

- config

  javax.servlet.ServletConfig，服务器配置信息。

- page

  java.lang.Object，代表 JSP 自身，类似 this。

- exception

  java.lang.Throwable，页面异常信息。

接下来，将对 JSP 的内置对象进行详细的了解，其中有五个较为常用，需着重理解。

### out

out 对象是 JspWriter 类的实例，常用来向客户端页面输出信息，并且管理应用服务器上的输出缓冲区。在使用 out 对象输出数据时，可以对数据缓冲区进行操作，及时清除缓冲区中的残余数据，为其他的输出让出缓冲空间。待数据输出完毕后，要及时关闭输出流。

- void println() 向客户端打印字符串
- void clear() 清除缓冲区内容，需在 flush() 之前调用
- void clearBuffer() 清除缓冲区内容
- void flush() 将缓冲区内容输出到客户端
- int getBufferSize() 返回缓冲区字节大小
- int getRemaining() 返回缓冲区剩余可用字节数
- boolean isAutoFlush() 返回缓冲区满时，自动清空还是抛出异常
- void close() 关闭输出流

> **缓冲区**：Buffer，一块用来保存临时数据的内存区域。

### request

request 对象是 HttpServletRequest 类的实例，封装了客户端的请求信息，主要用于接受通过 HTTP 协议传送到服务器的数据（包括头信息、系统信息、请求方式以及请求参数等）。其作用域为请求的全过程，在服务器完成响应该请求之前均有效。

- String getParameter(String name) 返回 name 指定参数的值
- String[] getParameterValues(String name) 返回包含参数 name 的所有值的数组
- void setAttribute(String key, Object value) 存储此请求中的属性
- object getAttribute(String key) 返回指定属性的属性值
- String getContentType() 得到请求的 MIME 类型
- String getProtocol() 返回请求用的协议类型及版本号
- String getServerName() 返回接受请求的服务器主机名
- void setCharacterEncoding(String name) 设置客户端的字符集编码

使用表单提交数据时，会发生中文乱码问题，如果使用的是 Post 提交方式，可以在请求页面使用 `setCharacterEncoding()` 将字符集编码设置为与提交页面一致即可，推荐 **utf-8**。如果使用的是 URL 传参，也就是 Get 提交方式时，需在服务器配置页面进行设置。

> **Get 与 Post** <br />
> 　　 Get 方法是以明文的方式通过 URL 提交数据，最多不超过 2KB，安全性较低，但效率高。而 Post 方法则是将提交的信息封装到 HTML Header 内，适合提交数据量大，且安全性较高的信息。

### response

response 对象是 HttpServletResponse 类的实例，包含了响应客户端请求的信息。其作用域为整个 Jsp 页面，其它页面无效。

- String getCharacterEncoding() 返回响应用的字符集编码
- void setContentType(String type) 设置响应的 MIME 类型
- PrintWriter getWriter() 返回可以向客户端输出字符的对象
- sendRedirect(String location) 重定向客户端的请求

需要注意的是，通过 `getWriter()` 得到的 `PrintWriter` 对象与内置 `out` 对象均可以向客户端输出字符，但前者总是早于后者输出；这其实是因为 out 对象会将内容先暂存在缓冲区，使用 `flush()` 方法则可以将其提前输出到客户端。

> **请求重定向与请求转发** <br />
> 　　请求重定向，由 `response.sendRedirect()` 实现，从本质上讲等同于客户端发送了两次请求，第一次的请求信息会丢失，地址栏 URL 会改变，属于客户端行为。请求转发，由 `request.getRequestDispatcher().forward(req, resp)` 实现，从本质上讲客户端只发送了一次请求，请求信息会保存，地址栏的 URL 不会改变，属于服务器端行为。

### session

session 对象是 HttpSession 类的实例，代表客户端与服务器的一次会话，是由服务器自动创建的与用户请求相关的对象。服务器为每个用户都生成一个 session 对象，用于保存该用户的信息，跟踪用户的操作状态。

- long getCreationTime() 返回 session 创建的时间
- public String getId() 返回 session 的 ID
- public Object setAttribute(String name, Object value) 使用指定名称将对象绑定到此会话
- public Object getAttribute(String name) 返回绑定到此会话的特定对象，没有则为 null
- String[] getValueNames() 返回一个包含次 session 所有可用属性的数组
- int getMaxInactiveInterval() 返回此 session 两次请求之间的超时时限
- void setMaxInactiveInterval() 设置此 session 两次请求之间的超时时限

从一个客户打开浏览器并连接到服务器开始，到客户关闭浏览器离开这个服务器结束，被称为一个会话。只要当前所有的页面没有全部关闭，此会话在未超时前仍然是有效的；如果当前所有页面全都关闭之后，此会话将会失效。

### application

application 对象是 ServletContext 类的实例，实现了用户间的数据共享，可存放全局变量。在服务启动时，该对象实例化，直到服务器关闭之前该对象均是有效可用的。

- public void setAttribute(String name, Object value) 设置保存一个属性
- public Object getAttribute(String name) 获取指定属性的值
- Enumeration getAttributeNames() 返回所有属性名的枚举
- String getServerInfo() 返回 JSP(Servlet)引擎名及版本号

### page

page 对象是 java.lang.Object 类的实例，指向当前 JSP 页面，类似于 this 指针。

- class getClass() 返回此 Object 的类
- int hashCode() 返回此 Object 的 hash 码
- boolean equals(Object obj) 判断此 Object 与指定的对象是否相等
- void copy(Object obj) 把此 Object 拷贝到指定对象中
- Object clone() 克隆此 Object 对象
- String toString() 把此 Object 转换成 String 类的对象
- void notify() 唤醒一个等待的线程
- void notifyAll() 唤醒所有等待的线程
- void wait(int timeout) 使一个线程处于等待直到 timeout 结束或被唤醒
- void wait() 使一个线程处于等待直到被唤醒

### pageContext

pageContext 对象是 pageContext 类的实例，提供了对 JSP 页面内所有的对象及名字空间的访问。

- JspWriter getOut() 返回当前客户端响应被使用的 JspWriter 流(out)
- ServletRequest getRequest() 返回当前页的 ServletRequest 对象(request)
- ServletResponse getResponse() 返回当前页的 ServletResponse 对象(response)
- HttpSession getSession() 返回当前页中的 HttpSession 对象(session)
- ServletContext getServletContext() 返回当前页的 ServletContext 对象(application)
- Object getPage() 返回当前页的 Object 对象(page)
- ServletConfig getServletConfig() 返回当前页的 ServletConfig 对象(config)
- Exception getException() 返回当前页的 Exception 对象(exception)
- void setAttribute(String name, Object obj, int scope) 在指定范围内设置属性及属性值
- public Object getAttribute(String name) 取得指定属性的值
- Object getAttribute(String name, int scope) 在指定范围内取属性的值
- int getAttributeScope(String name) 返回某属性的作用范围
- void forward(String relativeUrlPath) 使当前页面重导到另一页面
- void include(String relativeUrlPath) 在当前位置包含另一文件

### config

config 对象是 ServletConfig 类的实例，是在一个 Servlet 初始化时，JSP 引擎向它传递信息用的。

- ServletContext getServletContext() 返回含有服务器相关信息的 ServletContext 对象
- String getInitParameter(String name) 返回初始化参数的值
- Enumeration getInitParameterNames() 返回 Servlet 初始化所需所有参数的枚举

### exception

exception 对象是 java.lang.Throwable 类的实例，是页面中异常对象。如果 JSP 页面要使用此对象，就必须设置 `isErrorPage="true"`，否则无法编译。如果在 JSP 页面中出现没有捕获到的异常，就会生成 exception 对象，并把 exception 对象传送到在 page 指令中设定的错误页面中，然后在错误页面中处理相应的 exception 对象。

- String getMessage() 返回描述异常的信息
- String toString() 返回关于异常的简短描述消息
- void printStackTrace() 显示异常及其栈轨迹
- Throwable fillInStackTrace() 重写异常的执行栈轨迹

## 指令

JSP 指令用来设置整个页面相关的属性，如网页的编码方式和所使用的脚本语言。JSP 内置了三大指令，下面就来一一介绍：

### Page

Page 指令为容器提供当前页面的使用说明，如使用的脚本语言和所需要引入的类等，一个 JSP 页面可以包含多个 page 指令。其语法格式如下：

    <%@ page attribute="" %>

page 指令的常用属性有以下：

- language

  指定页面所使用的脚本语言，默认为 Java

- contentType

  指定页面的 MIME 类型和字符编码

- import

  导入要使用的 Java 类

- isErrorPage

  指定当前页面是否可以作为另一个页面的错误处理页

### Include

Include 指令用来在当前 JSP 页面包含其它文件，JSP、HTML、文本文件均可以。被包含的文件会在当前 JSP 页面编译期间执行，最终只转换成一个 Servlet，编译效率较低，但执行很快，可以称之为静态包含。语法格式如下：

    <%@ include file="文件的相对 url 地址" %>

### Taglib

Taglib 指令是为了让用户可以引入自定义的标签库，其语法格式如下：

    <%@ taglib uri="库文件的 uri 地址" prefix="标签库前缀" %>

## 动作

JSP 动作元素是在请求阶段执行的，利用其可以动态的插入文件、重用 JavaBean 组件、页面重定向等。JSP 提供了多个动作元素，且每个动作元素都两个常用的属性，下面来看看：

- 动作元素常见的共有属性

  - id

    动作元素的唯一标识，可以在 JSP 页面中通过 PageContext 来引用。

  - scope

    用于定义动作元素的作用域范围，其取值可能为：page、request、session、application。

### include

include 动作元素的作用与 Include 指令一样，可以将 JSP、HTML、文本文件包含到当前页面中，不同的是后者在页面编译期间就将文件包含进去，生成一个 Servlet，而 include 动作则是在请求阶段才将文件包含到当前页面中，最终将会生成两个 Servlet，编译效率高，但执行较慢，可以称之为动态包含。其语法格式如下：

    <jsp:include page="文件相对 url 地址" flush="是否刷新缓冲区" />

### useBean

useBean 动作用来加载一个将在 JSP 页面中使用的 JavaBean，它使得我们可以发挥 Java 组件复用的优势。其语法格式为：

    <jsp:useBean id="对象name" class="包含包名的完整类路径" />

其等价为：

    Object obj = new Object();

### setProperty

setProperty 动作用来设置已经实例化的 Bean 对象的属性，其语法格式如下：

    <!-- 手动指定属性值 -->
    <jsp:setProperty name="对象name" property="属性名" value="属性值" />
    <!-- 与请求参数匹配 -->
    <jsp:setProperty name="对象name" property="属性名" param="参数名" />

需要注意的是，以上两种方式只能选择一种，不能同时出现 `value` 和 `param` 属性。如果 setProperty 动作作为 useBean 动作元素的子元素，只有在实例化一个新的 Bean 时才有效，引用已存在的 Bean 实例是无效的。

### getProperty

getProperty 动作用来获取已经实例化的 Bean 对象的属性，其语法格式如下：

    <jsp:getProperty name="对象name" property="属性名" />

### forward

forward 动作用来将请求转发到另一个页面，其本质为请求转发，而不是请求重定向。其语法格式为：

    <jsp:forward page="相对URL" />

其等价为：

    request.getRequestDispatcher("URL").forward(request, response);

### param

param 动作元素是用来传递属性的，常作为 forward 动作元素的子元素存在。示例如下：

    <jsp:forward page="相对URL">
    	<jsp:param value="属性值" name="属性名" />
    </jsp:forward>

传递的参数值可以使用 `request.getParameter(name)` 获取，也可以覆盖掉已有参数的值。
