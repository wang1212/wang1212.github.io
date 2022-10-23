---
title: 监听器、过滤器、Servlet
date: 2017-08-31 11:52:00
update: 2017-08-31 11:52:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Web
  - Web 后端
  - Java
  - Listener
  - Filter
  - Servlet
keywords: *ref_0
description: 在 Java Web 开发过程中，监听器、过滤器、Servlet 这三大内容是很重要的组件，也是实现很多功能的根本所在。
---

> _最后更新于 2017-08-31 11:52:00 _

在 Java Web 开发过程中，监听器、过滤器、Servlet 这三大内容是很重要的组件，也是实现很多功能的根本所在。

<!-- truncate -->

## 监听器

Web 监听器（Listener）是由 Servlet 规范提供一种特殊类，用于监听 ServletContext、HttpSession 和 ServletRequest 等域对象的创建与销毁事件，以及监听这些域对象中属性的创建、销毁、修改事件。

监听器可以在事件的发生前、发生后做一些必要的处理，一般可以用来统计在线人数和在线用户、统计网站访问量、系统启动时初始化信息等。

### 分类

- 按监听对象划分
  - ServletContext ： Application 整个应用
  - HttpSession ： Session 一次会话
  - ServletRequest ： Request 一次请求
- 按监听事件划分
  - 域对象自身的创建和销毁事件
    - ServletContextListener
    - HttpSessionListener
    - ServletRequestListener
  - 域对象中属性的添加、删除、更改事件
    - ServletContextAttributeListener
    - HttpSessionAttributeListener
    - ServletRequestAttributeListener
  - 绑定到 HttpSession 中对象的状态的变化事件
    - HttpSessionBindingListener
    - HttpSessionActivationListener

域对象自身的创建和销毁事件分别由相应接口的实现类来处理，实现接口中 `Initialized()` 和 `Destroyed()` 方法则可以完成监听域对象的创建和销毁。

域对象中属性的添加、删除和更改事件分别由相应接口的实现类来处理，实现接口中的 `attributeAdded()`、`attributeRemoved()` 和 `attributeReplaced()` 方法则可以完成监听属性的添加、删除和更改。

绑定到 HttpSession 中对象的状态变化由相应接口的实现类来处理，`HttpSessionBindingListener` 接口中规范了 `valueBound()` 和 `valueUnbound()` 方法完成监听对象的绑定和解除绑定；而 `HttpSessionActivationListener` 接口中规范了 `sessionWillPassivate()` 和 `sessionDidActivate()` 方法来完成监听对象的钝化和活化。所谓的钝化就是将对象序列化到存储设备中去，而活化则是将对象从存储设备中反序列化到内存当中去。

### 注册

在创建好监听器类后，需要在项目中设置才能起作用，可以在**web.xml**中去设置，也可以使用 `@WebListener` 注解注册。

    package listener;

    @WebListener  // 此处使用了注解注册该监听器
    public class AppListener implements ServletContextListener {

    	@Override  // 销毁方法
    	public void contextDestroyed(ServletContextEvent arg0) { }

    	@Override  // 初始化方法
    	public void contextInitialized(ServletContextEvent arg0) { }
    }

---

    <!-- 也可以在 web.xml 文件中注册该监听器 -->
    <listener>
    	<listener-class>listener.AppListener</listener-class>
    </listener>

由上面的 AppListener 监听器类可以看出，实现了 ServletContextListener 接口中 `Initialized` 和 `Destroyed` 方法，分别在 application 创建也就是应用启动时执行和在应用关闭时执行。HttpSessionListener 和 ServletRequestListener 监听器接口中同样也规定了这两个方法。

### 启动顺序

如果是在 web.xml 中注册的多个监听器，则其启动顺序由注册顺序决定；如果使用的是注解注册，那么启动顺序将是不确定的。

如果 Web 项目中同时注册了监听器（Listener）、过滤器（Filter）和 Servlet，那么他们启动的优先级如下:

> **Listener > Filter > Servlet**

## 过滤器

Web 过滤器（Filter）也是一个服务器端的组件，可以截取客户端的请求与响应信息，并对这些信息过滤。过滤器一般用来实现登陆认证和编码转换等功能。

### 工作原理

在用户发出请求之后，过滤器会首先将用户请求截取进行简单的处理，然后再将请求发送至 Web 资源，等待 Web 资源响应之后又会发送给过滤器，然后再次进行简单处理后发送给用户。

> **用户（发送请求）--> 过滤器 --> Web 资源（响应）--> 过滤器 --> 用户（接受响应）**

### 生命周期

应用启动时，根据配置首先实例化过滤器，然后执行其 `init()` 方法初始化，随后在用户发送请求后执行 `doFilter()` 方法进行过滤处理，待应用关闭时则会执行 `destory()` 方法进行销毁。

### 分类

在 Servlet 2.5 中过滤器分为四类，Servlet 3.0 之后又加入一种异步处理的类型：

- Request ：用户直接访问和请求重定向时
- Forward ：服务器端转发时
- Include ：服务器端转发时
- Error ：跳转到异常或错误页面时
- Async ：异步处理时

Request 类型的过滤器将在用户直接访问页面或者发生请求重定向（sendRedirect）时会被调用；而 Forward 和 Include 类型的过滤器对应服务器端请求转发（getRequestDispatcher）的 `forward()` 和 `include()` 方法，前者会直接转发到另一个页面，而后者会将转发页面的内容与原页面融合。另外，Async 类型的过滤器需要过滤器和 Servlet 开启支持异步处理时才有效。

所有类型的过滤器均是 `Filter` 接口的实现类。

### 注册

在创建好过滤器类后，需要在项目中设置才能起作用，可以在**web.xml**中去设置，也可以使用 `@WebFilter` 注解注册。

    package filter;

    // 使用注解注册
    @WebFilter(filterName="firstFilter", urlPatterns={"/servlet/GetAndPost"},
    		dispatcherTypes={DispatcherType.REQUEST})
    public class firstFilter implements Filter {

    	@Override  // 销毁方法
    	public void destroy() { }

    	@Override  // 过滤方法
    	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain arg2) {
    		// 放行（必须）
    		arg2.doFilter(arg0, arg1);
    	}

    	@Override  // 初始化方法
    	public void init(FilterConfig arg0) { }
    }

---

    <!-- 也可以在 web.xml 文件中注册该过滤器 -->
    <filter>
    	<filter-name>firstFilter</filter-name>
    	<filter-class>filter.firstFilter</filter-class>
    </filter>
    <filter-mapping>
    	<filter-name>firstFilter</filter-name>
    	<url-pattern>/servlet/GetAndPost</url-pattern>
    	<dispatcher>REQUEST</dispatcher>
    </filter-mapping>

一个过滤器是可以映射多个路径的，只需在注解中多配置几个 `urlPatterns` 数组的元素或者在 web.xml 中多添加几组 `filter-mapping` 标签即可。

`init()` 方法完成过滤器的初始化，可以用来读取 web.xml 文件中过滤器的参数；`doFilter()` 完成实际的过滤操作，当用户请求与过滤器相关联的 URL 时，Web 容器将先调用过滤器的该方法，其中 `FilterChain` 参数可以调用 `chain.doFilter()` 方法，将请求传递给下一个过滤器或目标资源；`destory()` 方法可以释放过滤器所占用的资源。

### 过滤器链

当多个过滤器映射同一个路径的话就会形成过滤器链，其执行的顺序对应于在 web.xml 文件中注册顺序，如果使用注解注册则顺序是不确定的。

过滤器链中 `doFilter()` 代码的执行顺序遵循：依次执行 `chain.doFilter()` 前的代码，最后传递给 Web 资源，待响应后又反向依次执行 `chain.doFilter()` 之后的代码。

    // 第一个 doFilter
    public void doFilter(request, response, chain) {
    	... // 执行顺序：1
    	chain.doFilter(request, response);
    	... // 执行顺序：4
    }

    // 第二个 doFilter
    public void doFilter(request, response, chain) {
    	... // 执行顺序：2
    	chain.doFilter(request, response);
    	... // 执行顺序：3
    }

## Servlet

Servlet 是在服务器上运行的小程序，并且可以通过“请求-响应”编程模型来访问这个驻留在服务器内存中的 Servlet 小程序，其主要的功能在于可以动态的生成 Web 内容。

我们通常继承实现了 Http 协议的 `HttpServlet` 抽象类，通过重写 `doGet()` 与 `doPost()` 方法来处理用户的请求。

### 生命周期

用户发送请求后，相应的 Servlet 开始实例化，并执行 `init()` 方法，完成初始化后开始执行`service()` 方法响应请求，待到服务器关闭时，将执行 `destory()` 方法销毁。

需要注意的是同一个 Servlet 只会在服务器内存中存在一份实例，当第二次请求发出后，不再实例化一个新的 Servlet，而是由第一次请求所得到的 Servlet 实例处理随后的请求。

另外，Servlet 不一定是在用户首次请求后才进行实例化，可以在注册时进行配置，当应用启动时就进行实例化。而且，当 Servlet 类文件被更改后，服务器会重新装载 Servlet，此时也会销毁原来的实例，重新实例化新的 Servlet 并初始化。

### 注册

在创建好过 Servlet 类后，需要在项目中设置才能起作用，可以在 **web.xml** 中去设置，也可以使用 `@WebServlet` 注解注册。

    package servlet;

    // 使用注解注册
    @WebServlet(name="ServletLife", loadOnStartup=1, urlPatterns={"/servlet/ServletLife"},
    			initParams={
    	@WebInitParam(name="username",value="MrWang"),
    	@WebInitParam(name="password",value="1314")
    })
    public class ServletLife extends HttpServlet {

    	@Override  // 初始化方法
    	public void init() { }

    	@Override  // 销毁方法
    	public void destroy() { }

    	@Override
    	protected void doGet(request, response) { }

    	@Override
    	protected void doPost(request, response) { }
    }

---

    <!-- 也可以在 web.xml 文件中注册该 Servlet -->
    <servlet>
    	<servlet-name>ServletLife</servlet-name>
    	<servlet-class>servlet.ServletLife</servlet-class>
    	<load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
    	<servlet-name>ServletLife</servlet-name>
    	<url-pattern>/servlet/GetAndPost</url-pattern>
    </servlet-mapping>

`doGet()` 与 `doPost()` 方法由 service 方法自动调用，具体调用哪个取决于用户提交请求的方式。`load-on-startup` 标签或者注解中的 `loadOnStartup` 属性可以设置 Servlet 在应用启动时就加载，数字越小代表优先级越高。
