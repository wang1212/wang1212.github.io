/*
	Component 公共组件（全局） ------------------------------------------------------------------
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
				'init': null,          //（类型：方法）初始化时的操作
				'update': null,  	   //（类型：方法）更新时的操作
				'target': $('body')    //（类型：jQuery 对象）挂载的父级元素
			};

		(_self._id = options.id || _default_options.id) && (C._singleton[_self._id] = _self);

		_self.dom = options.dom && $(options.dom) || _default_options.dom;

		_self._props = options.props || _default_options.props;

		_self.datas = options.datas || _default_options.datas;

		_self._event = { 'events': options.events || _default_options.events };

		_self._init = options.init || _default_options.init;

		_self._update = options.update || _default_options.update;

		// 显示（重写）
		_self.show = options.show || _self.show;

		// 关闭（重写）
		_self.close = options.close || _self.close;

		// 销毁（重写）
		_self.destory = options.destory || _self.destory;

		// 自动渲染
		(options.render != false) && _self.render();

		// 挂载到目标元素上
		_self.dom && _self.dom.appendTo(options.target || _default_options.target);
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
							_$elem.attr(item[_type].key, item[_type].value || null);
							break;
						case 'data':
							_$elem.data(item[_type].key, item[_type].value || null);
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
		'_Component': Component,

		// 工具方法
		"_def_dom": function(obj, $dom){
			// 让组件创建时淡入效果(兼容判断)
			if (Object.defineProperty) {
				Object.defineProperty(obj, 'dom', {
					get: function(){
						// 淡入
						setTimeout(function(){
							$dom.fadeIn();
						}, 100);

						return $dom;
					}
				})
			} else {
				obj['dom'] = $dom;
			}
			// 关闭 , 触发浏览器后退
			$dom.find('.component-close')[0] && ($dom.find('.component-close')[0].onclick = function(e){  history.back();  })
		}		
	}

	window.Component = C;

}(window);

/*
	全局组件
 */
!function(window){

	var C = window.Component;

	/*
		响应式表格-组件   Responsive-table  (wangyuan)  ---------------------------------------------------------------------------------

			--- 使用
				new Responsive_table($table, table_data, th_to_td, config);

			--- 参数
				$table :          表格容器元素，会自动将 this 绑定到该元素的 data('responsive-table') 属性中
				table_data :      表格数据 [{},{}]
				th_to_td :        表头与数据对应字段的名称 [{"name": "用户名", "field": "username"}, {"name": "性别", "field": "sex"}]

				--- config        额外配置
					'extend':     扩展表格，与 th_to_td 参数格式一致，[{"name": "查看", "text": "详细信息"}]
					'rows':       每页显示的行数（默认 10 行）
	
			--- 实例方法
				load_data(table_data) :           用来加载额外的数据，替换当前表格所使用的源数据
				get_data() :                      获取表中所有数据
				get_checked_rows_datas() :        获取已选行的数据	
				delete_checked_rows_datas() :     删除已选行数据（从源数据中删除）
				modify_checked_row_data(modify) : 修改已选行的数据（ modify 为该行数据的要修改部分字段和值，为 json 对象，与该行数据格式保持一致）
	
			--- 数据绑定在每一个（".table-body .tr"）行元素上
	
			--- 样式
				.table-head .tr .th, .table-body .tr .td :    修改 width 为计算好的百分比，或者使用 display: none 隐藏某一行
				.table-body .tr :                             修改 height 为计算好的百分比
	
	 */
	C.responsive_table = function($table, table_data, th_to_td, config){
		// 构造方法
		function _Responsive_table($table, table_data, th_to_td, config) {
			if (!$table) { return null; }

			var _self = this;

			// 绑定 this 
			$table.data('responsive-table', _self);

			// 表格数据
			var data = table_data || [];

			/* 
				实例方法：获取表中所有数据---------------------------------------------------
			 */
			_self.get_data = function(){
				return data;
			}

			// 收集表信息		
			var th_text = [],
				td_text = [],
				td_extend_text = [];

			th_to_td.forEach(function(item){
				th_text.push(item['name']);
				td_text.push(item['field']);
			});

			// 每页显示行数（默认 10 行）
			var rows = 10;

			/* 
				额外配置---------------------------------------------------
			 */
			if (config) {
				// 扩展表信息 
				config['extend'] && config['extend'].forEach(function(item){
					th_text.push(item["name"]);
					td_extend_text.push(item["text"]);
				});

				// 自定义每页显示行数
				rows = config['rows'] || rows;
			}

			// 创建表元素
			var $table_head = $('<header class="table-head"></header>'),
				$table_body = $('<main class="table-body"></main>'),
				$table_footer = $('<footer class="table-footer"></footer>');


			/* 
				表格初始化---------------------------------------------------
			 */
			function _table_init(){
				var tr_th = '<div class="tr">',
					tr_td = '<div class="tr">';

				// 复选框与序号
				tr_th += '<div class="th"><div class="text-center-middle"><input type="checkbox" /></div></div>'
						 + '<div class="th"><div class="text-center-middle"><span class="text-content">序号</span></div></div>';

				tr_td += '<div class="td"><div class="text-center-middle"><input type="checkbox" /></div></div>'
						 + '<div class="td"><div class="text-center-middle"><span class="text-content"></span></div></div>';

				th_text.forEach(function(item){
					tr_th += '<div class="th"><div class="text-center-middle"><span class="text-content">' + item + '</span></div></div>';
					tr_td += '<div class="td"><div class="text-center-middle"><span class="text-content"></span></div></div>';
				});

				/* 添加表头 */
				$table_head.html(tr_th + '</div>');

				/* 添加表体 */
				$table_body.html('');

				for(var i = 0; i < rows; i++){
					$table_body.append($(tr_td + '</div>'));
				}

				/* 添加表尾 */
				var footer = '<div class="text-center-middle">'
							 + '<div class="table-page-paging clear-float">'
							 	+ '<div class="page-paging-left"><span class="page-first">&lt;&lt;</span><span class="page-up">&lt;</span></div>'
							 	+ '<div class="page-paging-center"><select class="page-index" value="0"></select><span class="page-message">共 0 页</span></div>'
							 	+ '<div class="page-paging-right"><span class="page-down">&gt;</span><span class="page-last">&gt;&gt;</span></div>'
							 + '</div>'
							 + '<span class="table-data-message">0 - 0&nbsp;&nbsp;&nbsp;共 0 条</span>'
						   + '</div>';

				$table_footer.html(footer);		

				/* 渲染到页面 */
				$table.html('').append($table_head, $table_body, $table_footer);
			}
			// 初始化表格
			_table_init();

			/*
				清空表数据---------------------------------------------------
			 */
			function _table_clear(){
				// 清空表头数据
				$table_head.find('input').prop('checked', false);
				// 清空表中数据
				$table_body.find('input').prop('checked', false).end()
					.find('.tr').removeClass('select').removeData('row-data').removeData('row-index').end()
					.find('.text-content').html('').removeAttr('title');
				// 清空表尾数据
				$table_footer.find('.page-index').html('').val(0).end()
					.find('.page-message').html('共 0 页').end()
					.find('.table-data-message').html('0 - 0&nbsp;&nbsp;&nbsp;共 0 条');
			}


			// 记录表页面
			var page = 0,
				page_nums = Math.ceil(data.length / rows);

			/* 
				实例方法：加载数据，覆盖源数据----------------------------------------
			 */
			_self.load_data = function(table_data){
				if(table_data){
					data = table_data;
					page = 0;
					page_nums = Math.ceil(data.length / rows);
				}

				// 清空表数据
				_table_clear();

				if(!data.length) {
					page = 0;
					return;
				} 

				// 开始索引
				page = page || 1;
				var start_index = (page - 1) * rows;

				var page_data_index = 0;

				// 缓存表元素
				var $tr_s = $table_body.find('.tr');

				// 遍历读取数据
				data.slice(start_index, start_index + rows).forEach(function(item){
					// 缓存表元素
					var $tr = $tr_s.eq(page_data_index),
						$th_text_s = $tr.find('.text-content');

					// 序号
					$th_text_s.eq(0).html(start_index + page_data_index + 1); 

					// 表格数据
					td_text.forEach(function(field, index){
						// 0 填充了序号，+1
						$th_text_s.eq(index + 1).html(item[field]).attr('title', item[field] || '');
					});

					// 扩展数据
					td_extend_text.forEach(function(text, index){
						// + td_text.length
						$th_text_s.eq(index + 1 + td_text.length).html(text).attr('title', text || '');
					});

					// 绑定数据（重要）
					$tr.data('row-data', item).data('row-index', start_index + page_data_index);

					page_data_index += 1;
				});

				// 刷新表尾数据
				_refresh_footer(start_index, page_data_index);
			}
			// 加载数据
			_self.load_data(data);

			/*
				刷新表尾信息---------------------------------------------------
			 */
			function _refresh_footer(start_index, page_data_index){
				var options = '';

				for (var i = 1; i <= page_nums; i++) {
					options += '<option value="' + i + '" ' + (page == i ? 'selected' : '') + '>' + i + '</option>';
				}

				$table_footer.find('.page-index').html(options).val(page).end()
					.find('.page-message').html('共 ' + page_nums + ' 页').end()
					.find('.table-data-message').html((start_index + 1) + ' - ' + (start_index + page_data_index) + '&nbsp;&nbsp;&nbsp;共 ' + data.length + ' 条');
			}


			/* 
				表格事件 (事件委托)---------------------------------------------------
			 */

			/* 全选 */
			$table_head.delegate('.th:first-child input', 'click', function(){
				var checked = $(this).prop('checked');
				if(checked) {
					$table_body.find('input').prop('checked', true).end()
						.find('.tr').addClass('select');
				} else {
					$table_body.find('input').prop('checked', false).end()
						.find('.tr').removeClass('select');
				}
			});

			/* 点击一行选中 */
			$table_body.delegate('.tr', 'click', function(){
				var checked = $(this).find('input:first-child').prop('checked');
				$(this).toggleClass('select').find('input').prop('checked', !checked);
			});	
			$table_body.delegate('.tr input:first-child', 'click', function(event){
				$(this).prop('checked') ? $(this).closest('.tr').addClass('select') : $(this).closest('.tr').removeClass('select');
				// 阻止事件冒泡
				event.stopPropagation();
			});	

			/* 选择页面  */
			$table_footer.delegate('.page-index', 'change', function(event){
				page = Math.max(0, Math.min(+this.value, page_nums));
				load_data();
			});

			/* 翻到首页  */
			$table_footer.delegate('.page-first', 'click', function(){
				page != 1 && $table_footer.find('.page-index').val(1).change();
			});

			/* 翻到尾页  */
			$table_footer.delegate('.page-last', 'click', function(){
				page != page_nums && $table_footer.find('.page-index').val(page_nums).change();
			});

			/* 翻到上页  */
			$table_footer.delegate('.page-up', 'click', function(){
				page > 1 && $table_footer.find('.page-index').val(page-1).change();
			});

			/* 翻到下页  */
			$table_footer.delegate('.page-down', 'click', function(){
				page < page_nums && $table_footer.find('.page-index').val(page+1).change();
			});


			/* 
				渲染到目标元素
			*/
			$table.append($table_head, $table_body, $table_footer);

			/*
				实例方法：获取已选行元素上的数据（".tr"）---------------------------------------------------
			*/
			_self.get_checked_rows_datas = function(){
				var datas = [];

				$table_body.find('.tr input:first-child:checked').closest('.tr').each(function(index, row){
					$(row).data('row-data') ? datas.push($(row).data('row-data')) : '';
				});
				
				return datas;
			}

			/*
				实例方法：删除已选行数据（会从源数据中删除数据）---------------------------------------------------
			*/
			_self.delete_checked_rows_datas = function(){
				var indexs = [];

				$table_body.find('.tr input:first-child:checked').closest('.tr').each(function(index, row){
					$(row).data('row-data') ? indexs.push($(row).data('row-index')) : '';
				});

				// 逆序删除（防止索引出错）
				indexs.sort(function(a, b){ return a < b }).forEach(function(row_index){
					data.splice(row_index, 1);
				});

				// 判断如果当前页没有数据了，就显示首页数据
				page_nums != Math.ceil(data.length / rows) ? _self.load_data(data) : _self.load_data();
			}

			/*
				实例方法：修改已选行数据
			 */
			_self.modify_checked_row_data = function(modify){
				var row_index = $table_body.find('.tr input:first-child:checked').closest('.tr').data('row-index');

				for(var key in modify){
					data[row_index][key] && (data[row_index][key] = modify[key]);
				}

				// 刷新表中数据
				_self.load_data();
			}
		}
		
		return new _Responsive_table($table, table_data, th_to_td, config);
	}

}(window);