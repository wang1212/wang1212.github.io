"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9089],{77870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(85893),r=n(11151);const a={title:"DOM-\u6587\u6863\u7247\u6bb5",date:new Date("2016-05-23T13:10:00.000Z"),update:new Date("2016-05-23T13:10:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],description:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002"},m=void 0,s={permalink:"/computer-technology/web-frontend/dom/dom-fragment",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/dom/dom-fragment.md",source:"@site/blog/computer-technology/web-frontend/dom/dom-fragment.md",title:"DOM-\u6587\u6863\u7247\u6bb5",description:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002",date:"2016-05-23T13:10:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"Fragment",permalink:"/tags/fragment"}],readingTime:3.79,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u6587\u6863\u7247\u6bb5",date:"2016-05-23T13:10:00.000Z",update:"2016-05-23T13:10:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],description:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002"},unlisted:!1,prevItem:{title:"DOM-\u6587\u672c\u8282\u70b9",permalink:"/computer-technology/web-frontend/dom/dom-textnode"},nextItem:{title:"DOM-\u4e8b\u4ef6",permalink:"/computer-technology/web-frontend/dom/dom-event"}},l={authorsImageUrls:[void 0]},c=[];function i(e){const t={blockquote:"blockquote",em:"em",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-23 13:10:00"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>m});var o=n(67294);const r={},a=o.createContext(r);function m(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:m(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);