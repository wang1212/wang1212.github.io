"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7638],{74853:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(85893),s=r(11151);const i={title:"\u6865\u63a5\u6a21\u5f0f\uff1a\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1",date:new Date("2022-06-12T22:22:00.000Z"),update:new Date("2022-06-12T22:22:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],description:"\u6700\u8fd1\u5728\u505a\u56fe\u8868\u7ec4\u4ef6\u5e93\u7684\u6280\u672f\u8c03\u7814\u7684\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\uff0c\u53c2\u8003\u4e86\u5f88\u591a\u5f00\u6e90\u5e93\u7684\u6e90\u7801\uff0c\u53d1\u73b0\u5176\u4e2d\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1\u5f88\u503c\u5f97\u5b66\u4e60\uff0c\u5982\u679c\u8981\u7528\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u90a3\u5927\u6982\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u4e86\u3002"},a=void 0,o={permalink:"/computer-technology/program-architecture-design/bridge-mode-design-of-cross-platform-event-mechanism",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/program-architecture-design/bridge-mode-design-of-cross-platform-event-mechanism.md",source:"@site/blog/computer-technology/program-architecture-design/bridge-mode-design-of-cross-platform-event-mechanism.md",title:"\u6865\u63a5\u6a21\u5f0f\uff1a\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1",description:"\u6700\u8fd1\u5728\u505a\u56fe\u8868\u7ec4\u4ef6\u5e93\u7684\u6280\u672f\u8c03\u7814\u7684\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\uff0c\u53c2\u8003\u4e86\u5f88\u591a\u5f00\u6e90\u5e93\u7684\u6e90\u7801\uff0c\u53d1\u73b0\u5176\u4e2d\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1\u5f88\u503c\u5f97\u5b66\u4e60\uff0c\u5982\u679c\u8981\u7528\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u90a3\u5927\u6982\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u4e86\u3002",date:"2022-06-12T22:22:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1",permalink:"/tags/\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"}],readingTime:4.17,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u6865\u63a5\u6a21\u5f0f\uff1a\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1",date:"2022-06-12T22:22:00.000Z",update:"2022-06-12T22:22:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],description:"\u6700\u8fd1\u5728\u505a\u56fe\u8868\u7ec4\u4ef6\u5e93\u7684\u6280\u672f\u8c03\u7814\u7684\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\uff0c\u53c2\u8003\u4e86\u5f88\u591a\u5f00\u6e90\u5e93\u7684\u6e90\u7801\uff0c\u53d1\u73b0\u5176\u4e2d\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1\u5f88\u503c\u5f97\u5b66\u4e60\uff0c\u5982\u679c\u8981\u7528\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u90a3\u5927\u6982\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u4e86\u3002"},unlisted:!1,prevItem:{title:"\u524d\u7aef\u5de5\u7a0b\u5316\uff1a\u5bf9\u4e8e\u6784\u5efa\u5de5\u5177\u94fe\u7684\u7b80\u5355\u601d\u8003",permalink:"/computer-technology/web-frontend/tools-web-fee-toolchain"},nextItem:{title:"\u4ece\u8d1d\u585e\u5c14\u66f2\u7ebf\u7684\u8ba1\u7b97\u611f\u53d7\u6570\u5b66\u5efa\u6a21\u7684\u9b45\u529b",permalink:"/tools/tools-animation-math"}},l={authorsImageUrls:[void 0]},d=[{value:"\u4e8b\u4ef6\u673a\u5236",id:"\u4e8b\u4ef6\u673a\u5236",level:2},{value:"\u8de8\u5e73\u53f0\u5b9e\u73b0",id:"\u8de8\u5e73\u53f0\u5b9e\u73b0",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2022-06-12 22:22:00"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e Web \u7684\u56fe\u8868\u7ec4\u4ef6\u5e93\u6765\u8bf4\uff0c\u4e00\u4e9b\u529f\u80fd\u6bd4\u8f83\u5f3a\u5927\u7684\u5f00\u6e90\u5e93\uff0c\u6e32\u67d3\u5c42\u53ef\u4ee5\u652f\u6301 DOM\u3001SVG\u3001Canvas\u3001WebGL \u7b49\u591a\u4e2a\u5e73\u53f0\u7684\u73af\u5883\uff0c\u800c\u56fe\u8868\u5e93\u7684\u5f88\u591a\u529f\u80fd\u7684\u5b9e\u73b0\u90fd\u548c\u6e32\u67d3\u5c42\u7d27\u5bc6\u76f8\u5173\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u8fd1\uff0c\u5728\u53c2\u8003\u5b66\u4e60\u4e00\u4e9b\u5f00\u6e90\u7684\u56fe\u8868\u7ec4\u4ef6\u5e93\u65f6\uff0c\u53d1\u73b0\u5728\u8de8\u5e73\u53f0\u8bbe\u8ba1\u4e2d\uff0c\u4e8b\u4ef6\u673a\u5236\u7684\u5b9e\u73b0\u5f88\u6709\u610f\u601d\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\u4ee5\u6700\u7b80\u5316\u7684\u4ee3\u7801\u6765\u89e3\u91ca\u548c\u8bb0\u5f55\u4e00\u4e0b\u8fd9\u4e2a\u65b9\u6848\u3002\u5982\u679c\u8981\u7528\u7ecf\u5178\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u5927\u6982\u5c31\u662f",(0,t.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f"}),"\u4e86\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f\uff08Bridge Pattern\uff09"})," \u5c06\u4e00\u4e2a\u529f\u80fd\u7684\u5b9e\u73b0\u62c6\u5206\u4e3a\u62bd\u8c61\uff08Abstraction\uff09\u548c\u5b9e\u73b0\uff08Implementor\uff09\uff0c\u8ba9\u5176\u76f8\u4e92\u72ec\u7acb\u7684\u6269\u5c55\u548c\u5b9a\u4e49\uff0c\u501f\u52a9\u8be5\u6a21\u5f0f\u53ef\u4ee5\u8bbe\u8ba1\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684\u8f6f\u4ef6\u67b6\u6784\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8b\u4ef6\u673a\u5236",children:"\u4e8b\u4ef6\u673a\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u4e8b\u4ef6\u673a\u5236\u662f\u8f6f\u4ef6\u8bbe\u8ba1\u4e2d\u6700\u57fa\u7840\u3001\u6700\u4e3a\u5e38\u89c1\u7684\u4e00\u79cd\u8bbe\u8ba1\uff0c\u5bf9\u4e8e Web \u56fe\u8868\u7ec4\u4ef6\u5e93\u6765\u8bf4\u8981\u63d0\u4f9b\u4e00\u4e9b\u5904\u7406\u7528\u6237\u4ea4\u4e92\uff08\u4f8b\u5982\u70b9\u51fb\u3001\u62d6\u52a8\u3001\u53f3\u952e\u70b9\u51fb\u7b49\uff09\u7684\u673a\u5236\u3002\u4e00\u4e2a\u5178\u578b\u7684\u4e8b\u4ef6\u6a21\u578b\u7c7b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"class EventEmitter {\n  _handlerMap = {};\n  on(event, callback) {}\n  off(event, callback) {}\n  emit(event, ...args) {}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\uff0c\u5bf9\u5916\u66b4\u9732 ",(0,t.jsx)(n.code,{children:"on()"})," \u548c ",(0,t.jsx)(n.code,{children:"off()"})," \u65b9\u6cd5\u6765\u6ce8\u518c\u548c\u53d6\u6d88\u4e8b\u4ef6\uff0c\u800c\u56fe\u8868\u5e93\u5185\u90e8\u9700\u8981\u5b8c\u6210\u4e8b\u4ef6\u89e6\u53d1\uff08",(0,t.jsx)(n.code,{children:"emit()"}),"\uff09\u7684\u5b9e\u73b0\uff0c\u800c\u8fd9\u91cc\u4e0e\u6e32\u67d3\u5c42\u8026\u5408\u3002\u4ee5\u6e32\u67d3\u5c42\u4e3a DOM \u5b9e\u73b0\u6765\u4e3e\u4f8b\uff0c\u652f\u6301\u70b9\u51fb\u4e8b\u4ef6\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"class Chart {\n  constructor() {\n    // \u6e32\u67d3\u5c42\u4e3a DOM \u5b9e\u73b0\n    this.__renderer = new DOMRenderer();\n    this._handler = new EventEmitter();\n  }\n\n  on(...args) {\n    this._handler.on(...args);\n  }\n\n  off(...args) {\n    this._handler.off(...args);\n  }\n\n  __bindEvent() {\n    // ! \u4e8b\u4ef6\u89e6\u53d1\uff08\u7ed1\u5b9a\uff09\u4e0e\u6e32\u67d3\u5c42\u8026\u5408\n    this.__renderer.domElem.addEventListener('click', (event) => {\n      this._handler.emit('click', ...[event, ...otherArgs]);\n    });\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8de8\u5e73\u53f0\u5b9e\u73b0",children:"\u8de8\u5e73\u53f0\u5b9e\u73b0"}),"\n",(0,t.jsxs)(n.p,{children:["\u53c2\u8003",(0,t.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f"}),"\uff0c\u8fd9\u91cc\u53ef\u4ee5\u628a\u56fe\u8868\u7c7b\u4e2d\u7684\u4e8b\u4ef6\u673a\u5236\u5b9e\u73b0\u62c6\u5206\u4e3a\u62bd\u8c61\uff08",(0,t.jsx)(n.code,{children:"Handler"}),"\uff09\u548c\u5b9e\u73b0\uff08",(0,t.jsx)(n.code,{children:"HandlerProxy"}),"\uff09\uff0c\u524d\u8005\u7ba1\u7406\u7528\u6237\u6ce8\u518c\u7684\u4e8b\u4ef6\u6c60\uff0c\u540e\u8005\u8d1f\u8d23\u7279\u5b9a\u5e73\u53f0\u7684\u4e8b\u4ef6\u89e6\u53d1\u5b9e\u73b0\u3002\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"class Handler extends EventEmitter {\n  constructor(handlerProxy) {\n    super();\n\n    this.__handlerProxy = handlerProxy;\n\n    // \u6ce8\u518c\u4e8b\u4ef6\u5230\u4ee3\u7406\u7c7b\u4e2d\n    this.__handlerProxy.on('click', (event, ...args) => {\n      // ! \u89e6\u53d1\u7528\u6237\u6ce8\u518c\u7684\u4e8b\u4ef6\n      this.emit(event, ...args);\n    });\n  }\n}\n\nclass DOMHandlerProxy extends EventEmitter {\n  constructor(renderer) {\n    super();\n\n    this.__renderer = renderer;\n  }\n\n  __bindEvent() {\n    // \u6839\u636e\u6e32\u67d3\u5c42\u7684\u5e73\u53f0\u5b9e\u73b0\u4e8b\u4ef6\u7ed1\u5b9a\uff0c\u4ee5 DOM \u5b9e\u73b0\u4e3a\u4f8b\n    this.renderer.domElem.on('click', (event, ...args) => {\n      // ! \u89e6\u53d1 Handler \u6ce8\u518c\u7684\u4e8b\u4ef6\n      this.emit(event, ...args);\n    });\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u56fe\u8868\u7c7b\u6765\u8bf4\uff0c",(0,t.jsx)(n.code,{children:"Handler"})," \u7c7b\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u4e8b\u4ef6\u673a\u5236\uff0c\u4f46\u5176\u5185\u90e8\u628a\u5177\u4f53\u5e73\u53f0\u76f8\u5173\u7684\u4e8b\u4ef6\u89e6\u53d1\u5b9e\u73b0\u4ea4\u7ed9 ",(0,t.jsx)(n.code,{children:"HandlerProxy"})," \u7c7b\u53bb\u5b9e\u73b0\u3002\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86\u4e8b\u4ef6\u673a\u5236\u7684\u5b9e\u73b0\u4e0e\u7279\u5b9a\u5e73\u53f0\u5b9e\u73b0\u5206\u79bb\u7684\u76ee\u6807\uff0c\u9488\u5bf9\u4e0d\u540c\u5e73\u53f0\u5b9e\u73b0\u4e0d\u540c\u7684",(0,t.jsx)(n.code,{children:"HandlerProxy"})," \u7c7b\u5373\u53ef\u3002\u73b0\u5728\u56fe\u8868\u7c7b\u7684\u4ee3\u7801\u5e94\u8be5\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"class Chart {\n  constructor() {\n    // \u6e32\u67d3\u5c42\u4e3a DOM \u5b9e\u73b0\n    this.__renderer = new DOMRenderer();\n    this._handler = new Handler(new DOMHandlerProxy(this.__renderer));\n  }\n\n  on(...args) {\n    this._handler.on(...args);\n  }\n\n  off(...args) {\n    this._handler.off(...args);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u73b0\u5728\u6765\u770b\uff0c\u56fe\u8868\u7c7b\u4e2d\u4e4b\u524d\u4e8b\u4ef6\u89e6\u53d1\u5b9e\u73b0\u4e0e\u5e73\u53f0\u76f8\u5173\u7684\u4ee3\u7801\u5df2\u7ecf\u88ab\u72ec\u7acb\u51fa\u53bb\uff0c\u4e14\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u6e32\u67d3\u5c42\u5b9e\u73b0\u5b8c\u6210\u65e0\u7f1d\u8854\u63a5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0a\u5c31\u662f\u5229\u7528\u6865\u63a5\u6a21\u5f0f\u5bf9\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u7684\u7b80\u5316\u8bbe\u8ba1\uff0c\u89e3\u51b3\u6b64\u7c7b\u95ee\u9898\u65f6\uff0c\u6700\u91cd\u8981\u7684\u662f\u5212\u5206",(0,t.jsx)(n.strong,{children:"\u62bd\u8c61"}),"\u548c",(0,t.jsx)(n.strong,{children:"\u5b9e\u73b0"}),"\u4e24\u90e8\u5206\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bridge_pattern",children:"https://en.wikipedia.org/wiki/Bridge_pattern"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://refactoringguru.cn/design-patterns/bridge",children:"https://refactoringguru.cn/design-patterns/bridge"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(67294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);