"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5970],{54163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(85893),r=n(11151);const a={title:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09",date:new Date("2016-05-16T14:04:00.000Z"),update:new Date("2016-05-16T14:04:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM"],description:"\u5728\u7f51\u9875\u8bbe\u8ba1\u4e2d\uff0c\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u89d2\u8272\u9700\u8981\u6211\u4eec\u4e86\u89e3\uff0cDOM \u5e2e\u52a9\u6211\u4eec\u5bf9\u9875\u9762\u5143\u7d20\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7b49\u5168\u65b9\u4f4d\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u8ba9 JavaScript \u5728\u5ba2\u6237\u7aef\u4fee\u6539 HTML \u6587\u6863\u6210\u4e3a\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u53ef\u4ee5\u8bf4 DOM \u4e3a\u6211\u4eec\u64cd\u4f5c HTML \u6587\u6863\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7f16\u7a0b\u63a5\u53e3\u3002"},i=void 0,l={permalink:"/computer-technology/web-frontend/dom/dom",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/dom/dom.md",source:"@site/blog/computer-technology/web-frontend/dom/dom.md",title:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09",description:"\u5728\u7f51\u9875\u8bbe\u8ba1\u4e2d\uff0c\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u89d2\u8272\u9700\u8981\u6211\u4eec\u4e86\u89e3\uff0cDOM \u5e2e\u52a9\u6211\u4eec\u5bf9\u9875\u9762\u5143\u7d20\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7b49\u5168\u65b9\u4f4d\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u8ba9 JavaScript \u5728\u5ba2\u6237\u7aef\u4fee\u6539 HTML \u6587\u6863\u6210\u4e3a\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u53ef\u4ee5\u8bf4 DOM \u4e3a\u6211\u4eec\u64cd\u4f5c HTML \u6587\u6863\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7f16\u7a0b\u63a5\u53e3\u3002",date:"2016-05-16T14:04:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{inline:!0,label:"DOM",permalink:"/tags/dom"}],readingTime:19.56,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09",date:"2016-05-16T14:04:00.000Z",update:"2016-05-16T14:04:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM"],description:"\u5728\u7f51\u9875\u8bbe\u8ba1\u4e2d\uff0c\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u89d2\u8272\u9700\u8981\u6211\u4eec\u4e86\u89e3\uff0cDOM \u5e2e\u52a9\u6211\u4eec\u5bf9\u9875\u9762\u5143\u7d20\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7b49\u5168\u65b9\u4f4d\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u8ba9 JavaScript \u5728\u5ba2\u6237\u7aef\u4fee\u6539 HTML \u6587\u6863\u6210\u4e3a\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u53ef\u4ee5\u8bf4 DOM \u4e3a\u6211\u4eec\u64cd\u4f5c HTML \u6587\u6863\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7f16\u7a0b\u63a5\u53e3\u3002"},unlisted:!1,prevItem:{title:"DOM-\u5143\u7d20\u8282\u70b9",permalink:"/computer-technology/web-frontend/dom/dom-elementnode"},nextItem:{title:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09",permalink:"/computer-technology/web-frontend/dom/dom-bom"}},c={authorsImageUrls:[void 0]},s=[];function m(e){const t={blockquote:"blockquote",em:"em",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-16 14:04:00"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u7f51\u9875\u8bbe\u8ba1\u4e2d\uff0c\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u89d2\u8272\u9700\u8981\u6211\u4eec\u4e86\u89e3\uff0cDOM \u5e2e\u52a9\u6211\u4eec\u5bf9\u9875\u9762\u5143\u7d20\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\u7b49\u5168\u65b9\u4f4d\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u8ba9 JavaScript \u5728\u5ba2\u6237\u7aef\u4fee\u6539 HTML \u6587\u6863\u6210\u4e3a\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u53ef\u4ee5\u8bf4 DOM \u4e3a\u6211\u4eec\u64cd\u4f5c HTML \u6587\u6863\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u7f16\u7a0b\u63a5\u53e3\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var o=n(67294);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);