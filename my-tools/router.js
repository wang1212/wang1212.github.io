// IE8 以下不支持的数组方法
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(callback, self){
		if (Object.prototype.toString.call(callback) != "[object Function]") {
			return this;
		}

		var length = this.length;

		for (var i = 0; i < length; i++) {
			callback.call(self, this[i], i);
		}

		return this;
	}
}

if (!Array.prototype.filter) {
	Array.prototype.filter = function(callback, self){
		if (Object.prototype.toString.call(callback) != "[object Function]") {
			return this;
		}

		for (var i = this.length - 1; i >= 0; i--) {
			!callback.call(self, this[i]) && this.splice(i, 1);
		}

		return this;
	}
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
!function(window){
	// 管理 root
	var routings = {},
		fuzzy_match = [];

	// 容器（ID）
	var content = document.getElementById('content');

	/* rooting 注册方法  */
	function router(url, callback){
		// 回调不存在
		if (!callback) { return }

		// url 是否是多个数组元素
		if (Object.prototype.toString.call(url) == "[object Array]") {
			return url.forEach(function(sub_url){
				// 递归
				router(sub_url, callback);
			});
		}

		// 获取数据
		var routing = routings[url];

		// 未注册的情况下
		if(!routing){
			routings[url] = callback ? [callback] : [];
			// 如果存在模糊匹配的话，例如 /index/*
			url.match("\\*") && fuzzy_match.push(url);
		} else {
			// 已注册
			callback && routings[url].push(callback);
		}	
	}

	/* 执行回调 */
	function apply_routing(url){

		var routing = [];

		// 先遍历模糊匹配（可配置过滤器）
		fuzzy_match.forEach(function(fuzzy_url){
			routing = routing.concat(url.indexOf(fuzzy_url.slice(0, -1)) == 0 ? routings[fuzzy_url] : []);
		});
		// 精确匹配 routing
		routing = routing.concat(routings[url] || []);

		// 回调
		routing && routing.forEach(function(callback){
			callback && callback(content);
		});		
	}

	/* 主动切换路由  */
	function switch_routing(url, callback){
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
	function get_hash_url(){
		var hash_url = location.hash.slice(1),
			query_index = hash_url.indexOf('?');

		// 查询字符串存在的话
		hash_url = query_index == -1 ? hash_url : hash_url.slice(0, query_index);

		return hash_url;		
	}

	/* 检测自动加载  */
	window.onhashchange = function(){
		// 执行回调
		apply_routing(get_hash_url());
	}

	// 将路由注册方法暴露给全局
	window.router = router;

	// 将路由切换方法暴露给全局
	window.switch_routing = switch_routing;

	// 将获取当前 hash_url 方法暴露给全局
	window.get_hash_url = get_hash_url;

	/* 获取 hash_url 数组 */
	function get_url_array(url){
		var url = url || get_hash_url();

		// 去掉空字符元素
		var url_array = url.split('/').filter(function(a){ return !!a });
			
		return url_array || [];
	}

	// 将获取当前 url 数组方法暴露给全局
	window.get_url_array = get_url_array;

}(window);