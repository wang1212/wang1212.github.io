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
	数据库、监视器（管理全局数据，数据改动触发相应事件）   wangyuan
		
		--- 使用方法   (注意：defineProperty IE8 不兼容)

			new Model() // 创建一个数据库

			new Model().add(attr, value) // 用创建的数据库实例来添加属性值，随后可以使用 . [] 访问，属性值可以为方法，第二个参数为初始化赋值

			--- attr : 支持单个 'attr1' ， 或者多个 ['attr1', 'attr2', 'attr3']

		--- 监视器

		    new Model().watch(attr, callback) // 用创建的数据库实例来添加某个属性的监视器，当属性值变化时则触发监视器

		    --- attr : 支持单个 'attr1' ， 或者多个 ['attr1', 'attr2', 'attr3']
		
*/
function Model(){
	// 数据库
	this._datas = {};
	// 监视器
	this._watches = {};
}
Model.prototype = {
	"constructor": Model,
	/*
		添加属性（必须先添加）--------------------------------------------------------------------------------------
	 */
	"add": function(attr, value){
	
		var _self = this;
	
		// attr 是否是多个数组元素
		if (Object.prototype.toString.call(attr) == "[object Array]") {
			return attr.forEach(function(sub_attr, index){
				// 递归
				Model.prototype.add.call(_self, sub_attr, value && value[index] || null);
			});
		}
	
		// 不能重复定义
		if (attr in _self) { return false }
	
		Object.defineProperty(_self, attr, {
			/* 
			 	取值
		     */
			get: function(){
				return _self._datas[attr];
			},
			/*
			  	更改值
			 */
			set: function(value){
				var origin = _self[attr];
	
				// 值发生变化
				if(origin != value){
					// 更新值
					_self._datas[attr] = value;
					// 调用监视器
					_self._watches[attr] && _self._watches[attr].forEach(function(watch, index){
						Object.prototype.toString.call(watch) == "[object Function]" && watch(value);
					});
				}
			}
		});

		// 赋初值
		_self._datas[attr] = value || null;
	
		return true;
	},
	/*
	  	监视器（某一属性值发生变化时执行）--------------------------------------------------------------------------------------
	 */
	"watch": function(attr, callback){
		// 回调不存在
		if (Object.prototype.toString.call(callback) != "[object Function]") { return }
	
		var _self = this;
	
		// attr 是否是多个数组元素
		if (Object.prototype.toString.call(attr) == "[object Array]") {
			return attr.forEach(function(sub_attr){
				// 递归
				Model.prototype.watch.call(_self, sub_attr, callback);
			});
		}

		// 监视的应该是添加过属性
		if (!(attr in _self)) { return false }

		var _watch = _self._watches[attr];
	
		// 未注册的情况下
		if (!_watch) {
			_self._watches[attr] = [callback];
		} else {
			// 已注册
			_self._watches[attr].push(callback);
		}
	
		return true;		
	}
}


/*  
	路由自动加载内容（单页面）   wangyuan

		---content : 将页面容器标签的 id 设置为 content

		---使用方法

			Router.routing(url, function(content){ }) : 注册对应 url 需要执行的回调方法，content 参数为页面中 ID 为 content 的元素，可重复注册

			-- url 

				单个模糊匹配 : "/*"  (可作为过滤器使用，回调执行顺序优先级 : 模糊匹配 > 精确匹配)

				单个精确匹配 : "/index"

				多个混合匹配 : ["/*", "/index", "/*\/index"]

		---工具方法

			Router.switch_routing(url, callback) : 手动切换 url 并执行回调

			Router.apply_routing(url) :            手动执行回调

			Router.get_hash_url() :                获取当前的 hash_url

			Router.get_url_array(url) :            获取当前 hash_url 或者传入参数的 url 数组，例如 "/index/index1/index2/index3" => ["index", "index1", "index2", "index3"]
		
 */
var Router = {
	// 管理 routing
	"_routings": {},
	// 模糊匹配 url
	"_fuzzy_match": [],
	// 容器
	"_content": document.getElementById('content'),

	/*
		routing 注册方法--------------------------------------------------------------------------------------
	 */
	"routing": function(url, callback){
		// 回调不存在
		if (Object.prototype.toString.call(callback) != "[object Function]") { return }

		// url 是否是多个数组元素
		if (Object.prototype.toString.call(url) == "[object Array]") {
			return url.forEach(function(sub_url){
				// 递归
				Router.routing(sub_url, callback);
			});
		}

		// 获取数据
		var _routing = Router._routings[url];

		// 未注册的情况下
		if(!_routing){
			Router._routings[url] = [callback];
			// 如果存在模糊匹配的话，例如 /index/*
			url.match("\\*") && Router._fuzzy_match.push(url);
		} else {
			// 已注册
			Router._routings[url].push(callback);
		}

		return true;
	},

	/* 
		执行回调--------------------------------------------------------------------------------------
	 */
	"apply_routing": function(url){
		url = url || Router.get_hash_url();

		var _routing = [];

		// 先遍历模糊匹配（可配置过滤器）
		Router._fuzzy_match.forEach(function(fuzzy_url){
			_routing = _routing.concat(url.match(fuzzy_url.replace(/\*/g, '.+') + '$') ? Router._routings[fuzzy_url] : []);
		});
		// 精确匹配 routing
		_routing = _routing.concat(Router._routings[url] || []);

		// 回调
		if (_routing.length) {
			for(var i in _routing){
				// url 发生变化时不再执行回调
				if (url != Router.get_hash_url()) {
					break;
				}
				Object.prototype.toString.call(_routing[i]) == "[object Function]" && _routing[i](Router._content);
			}
		}

		return true;	
	},

	/* 
		主动切换路由 （工具方法）--------------------------------------------------------------------------------------
	 */
	"switch_routing": function(url, callback){
		if (!url) { return }

		// 检测当前路由
		var now = location.hash.slice(1) == url;
		// 更改 hash
		location.hash = url;
		// 手动执行回调
		now && Router.apply_routing(url);
		// 回调
		Object.prototype.toString.call(callback) == "[object Function]" && callback(_content);

		return true;
	},

	/* 
		获取当前 hash_url （工具方法）--------------------------------------------------------------------------------------
	 */
	"get_hash_url": function(){
		var hash_url = location.hash.slice(1),
			query_index = hash_url.indexOf('?');

		// 查询字符串存在的话
		hash_url = query_index == -1 ? hash_url : hash_url.slice(0, query_index);

		return hash_url;		
	},

	/* 
		获取 hash_url 数组（工具方法）--------------------------------------------------------------------------------------
	 */
	"get_url_array": function(url){
		var url = url || Router.get_hash_url();

		// 去掉空字符元素
		var url_array = url.split('/').filter(function(a){ return !!a });
			
		return url_array || [];
	}
		
}

/* 
	检测自动加载--------------------------------------------------------------------------------------
 */
window.onhashchange = function(){
	// 执行回调
	Router.apply_routing(Router.get_hash_url());
}