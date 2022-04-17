/*! Router Plugin */

// @flow

/**
 *	路由自动加载内容（单页面）
 *
 * ---content: 将页面容器标签的 id 设置为 content
 *
 * ---使用方法
 *
 * Router.add(state, function(content){ }): 注册对应 state 需要执行的回调方法，content 参数为页面中 ID 为 content 的元素，可重复注册
 *
 * --- state
 *
 * 单个模糊匹配: /\/.+/RegExp 对象  (可作为过滤器使用，回调执行顺序优先级 : 模糊匹配 > 精确匹配)
 *
 * 单个精确匹配: "/index"
 *
 * 多个混合匹配: [\//*\/, "/index", /\/[^/]+\/index/]
 *
 * --- 工具方法
 *
 * Router.switch(state, callback): 手动切换 state 并执行回调
 *
 * Router._apply(state): 手动执行回调
 *
 * Router.get_state(): 获取当前的 hash_url
 *
 * Router.get_state_array(state): 获取当前 hash_url 或者传入参数的 state 数组，例如 "/index/index1/index2/index3" => ["index", "index1", "index2", "index3"]
 *
 * Router.have(state): 判断是否注册过
 *
 */
const Router = {
  // 回调开关
  callback_switch: true,
  // 模式  ['hash', 'in']
  _mode: 'hash',
  // 状态
  _state: '',
  // 管理 states
  _states: {},
  // 模糊匹配 states
  _fuzzy_states: [],
  // 记录历史状态
  _history_states: [],
  // 容器
  _content: document.getElementById('App'),

  /**
   * 设置模式
   *
   * @param {string} mode 模式，['hash', 'in']
   * @returns
   */
  set_mode(mode) {
    if (['hash', 'in'].indexOf(mode) === -1) {
      return false;
    }

    if (mode === 'hash') {
      window.onhashchange = function () {
        Router._apply(Router.get_state());
      };
    } else if (mode === 'in') {
      window.onhashchange = null;

      const _routers = [].slice.call(document.getElementsByClassName('router'));

      _routers.forEach(function (router) {
        router.onclick = function () {
          Router.switch(this.getAttribute('router'));
        };
      });
    }

    Router._mode = mode;
  },

  /**
   * 注册路由
   *
   * @param {string|Array<string>} state 状态
   * @param {Function} callback 回调
   * @returns
   */
  add(state, callback) {
    // 回调不存在
    if (Object.prototype.toString.call(callback) !== '[object Function]') {
      return;
    }

    // state 是否是多个数组元素
    if (Object.prototype.toString.call(state) === '[object Array]') {
      return state.forEach(function (sub_state) {
        // 递归
        Router.add(sub_state, callback);
      });
    }

    // 获取数据
    const _routing = Router._states[state];

    // 未注册的情况下
    if (!_routing) {
      Router._states[state] = [callback];
      // 如果存在模糊匹配的话，例如 /\/index\/*+/
      Object.prototype.toString.call(state) === '[object RegExp]' &&
        Router._fuzzy_states.push(state);
    } else {
      // 已注册
      Router._states[state].push(callback);
    }

    return true;
  },

  /**
   * 执行回调
   *
   * @param {string} state 状态
   * @returns
   */
  _apply(state) {
    // 回调开关
    if (!Router.callback_switch) {
      return (Router.callback_switch = true);
    }

    state = state || Router.get_state();

    let _routing = [];

    // 先遍历模糊匹配（可配置过滤器）
    Router._fuzzy_states.forEach(function (fuzzy_state) {
      _routing = _routing.concat(
        state.match(fuzzy_state) ? Router._states[fuzzy_state] : []
      );
    });
    // 精确匹配 routing
    _routing = _routing.concat(Router._states[state] || []);

    // 回调
    for (let i = 0; i < _routing.length; i++) {
      // state 发生变化时不再执行回调
      if (state !== Router.get_state()) {
        break;
      }
      Object.prototype.toString.call(_routing[i]) === '[object Function]' &&
        _routing[i](Router._content);
    }

    return true;
  },

  /**
   * 切换路由
   *
   * @param {string} state
   * @param {Function} callback
   * @returns
   */
  switch(state, callback) {
    if (!state) {
      return;
    }

    // 检测当前路由
    if (Router._mode === 'hash') {
      const now = location.hash.slice(1) === state;
      // 更改 hash
      location.hash = state;
      // 手动执行回调
      now && Router._apply(state);
    } else {
      const now = Router._state === state;
      // 缓存历史 state
      !now && Router._history_states.push(Router._state);
      // 更改 state
      Router._state = state;
      // 调用回调
      Router._apply(state);
    }

    // 回调
    Object.prototype.toString.call(callback) === '[object Function]' &&
      callback(Router._content);

    return true;
  },

  /**
   * 获取当前状态
   *
   * @returns
   */
  get_state() {
    let { _state } = Router;

    if (Router._mode === 'hash') {
      _state = location.hash.slice(1);

      const query_index = _state.indexOf('?');

      // 查询字符串存在的话
      _state = query_index === -1 ? _state : _state.slice(0, query_index);
    }

    return _state;
  },

  /**
   * 获取 url 分割数组
   *
   * @param {string} state
   * @returns
   */
  get_state_array(state) {
    state = state || Router.get_state();

    // 去掉空字符元素
    const url_array = state.split('/').filter(function (a) {
      return !!a;
    });

    return url_array || [];
  },

  have(state) {
    state = state || Router.get_state();

    let _routing = [];

    // 先遍历模糊匹配（可配置过滤器）
    Router._fuzzy_states.forEach(function (fuzzy_state) {
      _routing = _routing.concat(
        state.match(fuzzy_state) ? Router._states[fuzzy_state] : []
      );
    });
    // 精确匹配 routing
    _routing = _routing.concat(Router._states[state] || []);

    return !!_routing.length;
  },
};

/* 默认 hash 模式 */
window.onhashchange = function () {
  Router._apply(Router.get_state());
};

export default Router;
