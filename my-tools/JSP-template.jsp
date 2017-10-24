<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
	<!-- 将页面所有当前 url 位置设置为根路径 -->
    <base href="<%=basePath%>">
	<meta charset="UTF-8">
	<!-- 强制让 IE 使用最新内核渲染 -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<!-- 禁止用户缩放 -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no">
	<!-- 优先选择 chrome 内核渲染 -->
	<meta name="renderer" content="webkit">
	<!-- 禁止页面缓存 -->
	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="Cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<title>Insert title here</title>
	<!-- 页面关键字（搜索引擎抓取） -->
	<meta name="keywords" content="keyword1,keyword2" />
	<!-- 页面内容描述（搜索引擎抓取） -->
	<meta name="description" content="This is my page" />
	<!-- 页面 css 初始化（保证各浏览器页面默认样式统一，应最先引入，bootstrap 框架已内置该文件） -->
	<link rel="stylesheet" href="./source/css/normalize-7.0.0.min.css">
	<!-- IE6-8  兼容解决方案
		html5shiv ： 提供对 html5 新标签（例如 footer、nav）的支持;
		respond ： 用来提供对 CSS3 @media媒体查询机制（min-width/max-width）的支持。
		
		if lte IE 8 ： 其中 lte 代表小于等于。
	 -->
	<!--[if lte IE 8]>
		<script type="text/javascript" src="./source/js/html5shiv.min.js"></script>
		<script type="text/javascript" src="./source/js/respond.min.js"></script>
	<![endif]-->
	<style type="text/css">
		/* 公共样式表中  */
		html, body { 
			/* 适配移动设备  */
			font-size: 12px;
			/* 保证字体安全，盒子模型统一  */
			font-family: Helvetica, Tahoma, Arial, "Microsoft YaHei", "华文细黑", sans-serif; 	
			/* 统一行高  */
			line-height: 1.4;
			/* 页面占满  */
			width: 100%;
			height: 100%;
			/* 最小宽度  */
			min-width: 1280px;
			/* relative 才能让  absolute 子元素的百分比宽度生效  */
			position: relative;
			/* 字体居中 */
			text-align: center;	
			/* 字颜色  */
			color: black;
			/* 背景色  */
			background-color: white;		
		}
		* {
			/* 盒子模型统一
			 	border-box : 定义的元素 height，width 包含 content，padding，border 在内;
			 	content-box ： 定义的元素 height，width 仅包含 content，不包含 padding，border 在内。
			 */
			box-sizing: border-box;		
			/* 去除边距 */	
			padding: 0;
			margin: 0;
		}
        /* 清除浮动 */
        .clear-float:before, .clear-float:after {
		  	content:"";
			display:table;
		}
		.clear-float:after {
			clear:both;
		}
		.clear-float {
			zoom:1;
		}			
		/* 响应式工具 

			.responsive-container ： 自适应模块的包裹元素，提供一个自适应容器，全页面自适应应先加在 body html 上 
	
			.responsive-abs : 页面浮动上层元素，width、height 自己设置（例如导航，页头，页尾）

			.responsive-rel ：  页面主要内容元素，width、height 自动占满整个容器，可利用 padding 来将 .responsive-abs 元素覆盖的部分隔开

 		*/
		.responsive-abs {
			box-sizing: border-box;
			position: absolute;
			left: 0;
			top: 0;
		}
		.responsive-rel, .responsive-container {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			position: relative;
			left: 0;
			top: 0;
		}			
	</style>
</head>
<body>


	<!-- IE6-8  兼容解决方案
		selectivizr ：提供对 CSS3 新选择器（例如 :nth-child、:last-child）的支持，style 标签内样式不解析。（需要 jQuery、dojo 等库的支持）
		
		if lte IE 8 ： 其中 lte 代表小于等于。
	 -->
	<!--[if lte IE 8]>
		<script type="text/javascript" src="./source/js/selectivizr.min.js"></script>
	<![endif]-->
</body>
</html>