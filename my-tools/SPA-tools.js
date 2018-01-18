
'use strict';

/*
	IE8 以下不支持的数组方法
 */
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
	数组（Array）扩展类方法 -ex 前缀（extend）
 */
/*  多个数组相互重合的元素（类方法）  */
Array._ex_arrays_overlap = function(arrays){
	if (!arrays || arrays.length < 2) {
		return [];
	}
	// 找出最短数组
	var _min_index = 0;

	for (var i = 1; i < arrays.length; i++) {
		_min_index = arrays[_min_index].length < arrays[i].length ? _min_index : i;
	}

	// 找出数组之间重合的元素
	var _overlaps = [];

	var _min_array = arrays.splice(_min_index, 1)[0];

	_min_array.forEach(function(item, index){
		var _flag = true;

		for (var i = 0; i < arrays.length; i++) {
			if (arrays[i].indexOf(item) == -1) {
				_flag = false;
				break;
			}
		}

		if (_flag) {
			_overlaps.push(item);
		}
	});
	// 以数组形式返回
	return _overlaps._ex_delete_repeat();
}

/*
	数组（Array）扩展实例方法 -ex 前缀（extend）
 */
/* 删除数组中的值（实例方法） */
Array.prototype._ex_delete = function(value){
	var _self = this;

	if (Object.prototype.toString.call(value) == "[object Array]") {
		return value.forEach(function(item, index){
			_self._ex_delete(item)
		});
	}

	var _index = -1;

	// 判断在数组中则删除（重复删除）
	while(_self.indexOf(value) != -1){
		_index = _self.indexOf(value);

		_self.splice(_index, 1);
	}

	// 返回索引
	return _index;
}
/* 删除数组中重复的值（实例方法） */
Array.prototype._ex_delete_repeat = function(){
	var _no_repeat = [];

	this.forEach(function(item, index){
		if (_no_repeat.indexOf(item) == -1) {
			_no_repeat.push(item);
		}
	});

	return _no_repeat;
}
/*   */

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
	Component 组件系统 ------------------------------------------------------------------
 */
!function(window){

	// 构造器
	function Component(options){
		var _self = this,
			_default_options = {
				'id': null,            //（类型：字符串）单例引用，有此属性值时组件使用单例模式
				'dom': null,           //（类型：字符串）DOM 结构
				'props': null,		   //（类型：数组）属性，以 prop-id 形式在元素类名中声明，渲染时改变对应元素的属性 [{'id'： 1, text': 'hello', class': 'factor'}]
				'datas': null,         //（类型：任意）数据，挂载到组件上
				'events': null,        //（类型：方法）绑定事件的操作
				'before': null,		   //（类型：方法）DOM 挂载在 target 之前的操作
				'init': null,          //（类型：方法）初始化时的操作
				'update': null,  	   //（类型：方法）更新时的操作
				'target': $('body')    //（类型：jQuery 对象）挂载的父级元素
			};

		(_self._id = options.id || _default_options.id) && (C._singleton[_self._id] = _self);

		_self.dom = options.dom && $(options.dom) || _default_options.dom;

		// 单例模式标记
		_self._id && _self.dom && _self.dom.addClass('component-single');

		_self._props = options.props || _default_options.props;

		_self.datas = options.datas || _default_options.datas;

		_self._event = { 'events': options.events || _default_options.events };
		
		_self._before = options.before || _default_options.before;

		_self._init = options.init || _default_options.init;

		_self._update = options.update || _default_options.update;

		// 显示（重写）
		_self.show = options.show || _self.show;

		// 关闭（重写）
		_self.close = options.close || _self.close;

		// 销毁（重写）
		_self.destory = options.destory || _self.destory;

		// 挂载前操作
		_self.before();

		// 挂载到目标元素上
		_self.dom && _self.dom.appendTo(options.target || _default_options.target);

		// 自动渲染
		(options.render != false) && _self.render();
	}
	Component.prototype = {
		'constructor': Component,

		'show': function(callback){

			var _self = this;

			_self.dom && _self.dom.fadeIn(function(){
				if (callback && Object.prototype.toString.call(callback) == "[object Function]") {
					callback();
				}
			});

			return _self;
		},

		'close': function(callback){

			var _self = this;

			_self.dom && _self.dom.fadeOut(function(){
				if (callback && Object.prototype.toString.call(callback) == "[object Function]") {
					callback();
				}
			});

			return _self;	
		},

		'destory': function(callback){

			var _self = this;

			_self.close(function(){
				_self.dom.remove();
				if (callback && Object.prototype.toString.call(callback) == "[object Function]") {
					callback();
				}
				// 单例模式下销毁实例
				_self._id && (delete C._singleton[_self._id]);
			});
		},

		'before': function(){

			var _self = this;

			if (_self._before && Object.prototype.toString.call(_self._before) == "[object Function]") {
				_self._before.apply(_self, [].slice.call(arguments));

				delete _self._before;  // 下次不再重复
			}	
		},

		// 渲染
		'render': function(){

			var _self = this;

			// 渲染属性
			_self.dom && _self._props && _self._props.forEach(function(item, index){
				var _class = '.prop-' + item.id,
					_$elem = _self.dom.is(_class) && _self.dom || _self.dom.find(_class);

				for(var _type in item){
					switch(_type){
						case 'text':
							_$elem.text(item[_type] || '');
							break;
						case 'html':
							_$elem.html(item[_type] || '');
							break;
						case 'class':
							_$elem.addClass(item[_type] || '');
							break;
						case 'attr':
							if (Object.prototype.toString.call(item[_type]) == "[object Array]") {
								item[_type].forEach(function(attr, index){
									_$elem.attr(attr.k, attr.v || null);
								});
							} else {
								_$elem.attr(item[_type].k, item[_type].v || null);
							}
							break;
						case 'data':
							if (Object.prototype.toString.call(item[_type]) == "[object Array]") {
								item[_type].forEach(function(data, index){
									_$elem.data(data.k, data.v || null);
								});
							} else {
								_$elem.data(item[_type].k, item[_type].v || null);
							}		
					}
				}	
			});

			/*
				事件绑定（只绑定一次）
			 */
			if (_self._event) {
				// 事件绑定
				if (_self._event.events && Object.prototype.toString.call(_self._event.events) == "[object Function]") {
					_self._event.events.apply(_self, [].slice.call(arguments));
				}			
				// 组件关闭按钮事件
				_self.dom.find('.component-close').bind('click', function(){
					_self.close()
				});

				// 组件销毁按钮事件
				_self.dom.find('.component-destory').bind('click', function(){
					_self.destory();
				});

				delete _self._event;  // 下次渲染不再重复绑定事件
			}

			// 初始化（只执行一次）
			if (_self._init && Object.prototype.toString.call(_self._init) == "[object Function]") {
				_self._init.apply(_self, [].slice.call(arguments));

				delete _self._init;  // 下次渲染不再重复初始化
			}

			return _self;
		},

		// 更新
		'update': function(){

			var _self = this;
			
			if (_self._update && Object.prototype.toString.call(_self._update) == "[object Function]") {
				_self._update.apply(_self, [].slice.call(arguments));
			}

			return _self;
		}
	}

	var C = {
		// 单例容器
		"_singleton": {},
		// 构造器
		'_Component': Component
	}

	window.Component = C;

}(window);


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