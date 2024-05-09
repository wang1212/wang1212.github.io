"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1456],{12450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(85893),o=n(11151);const r={title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u89e3\u6790\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u7684\u5b9e\u73b0",date:new Date("2021-04-25T22:56:00.000Z"),update:new Date("2021-04-26T22:48:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],description:"\u524d\u7aef\u5f00\u53d1\u4e2d\u5e7f\u6cdb\u91c7\u7528\u7684\u4f18\u5316\u6280\u5de7\uff0c\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u3002"},i=void 0,s={permalink:"/computer-technology/web-frontend/javascript/debouncing-and-throttling",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/javascript/debouncing-and-throttling.md",source:"@site/blog/computer-technology/web-frontend/javascript/debouncing-and-throttling.md",title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u89e3\u6790\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u7684\u5b9e\u73b0",description:"\u524d\u7aef\u5f00\u53d1\u4e2d\u5e7f\u6cdb\u91c7\u7528\u7684\u4f18\u5316\u6280\u5de7\uff0c\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u3002",date:"2021-04-25T22:56:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"},{label:"\u8282\u6d41\u4e0e\u9632\u6296",permalink:"/tags/\u8282\u6d41\u4e0e\u9632\u6296"}],readingTime:16.385,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u89e3\u6790\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u7684\u5b9e\u73b0",date:"2021-04-25T22:56:00.000Z",update:"2021-04-26T22:48:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],description:"\u524d\u7aef\u5f00\u53d1\u4e2d\u5e7f\u6cdb\u91c7\u7528\u7684\u4f18\u5316\u6280\u5de7\uff0c\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u3002"},unlisted:!1,prevItem:{title:"\u7406\u89e3\u7f16\u7a0b\u8bed\u8a00\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",permalink:"/computer-technology/tools/tools-programming-language"},nextItem:{title:"\u5357\u4e94\u53f0\u89c1\u4e91\u6d77",permalink:"/2021/04/08/life/tourism/tourism-nanwutai"}},c={authorsImageUrls:[void 0]},l=[];function p(e){const t={blockquote:"blockquote",code:"code",em:"em",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2021-04-26 22:48:00"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["\u524d\u7aef\u5f00\u53d1\u4e2d\uff0c\u6709\u4e00\u4e2a\u4f7f\u7528\u8f83\u4e3a\u666e\u904d\u7684\u6027\u80fd\u4f18\u5316\u6280\u5de7\uff0c\u5373\u51fd\u6570\u8282\u6d41\uff08Throttle\uff09\u548c\u9632\u6296\uff08Debounce\uff09\uff0c\u5176\u4e3b\u8981\u4f5c\u7528\u662f\u6839\u636e\u65f6\u95f4\u5bf9\u51fd\u6570\u8c03\u7528\u505a\u4ee5\u9650\u5236\u3002\u6700\u5e38\u89c1\u7684\u4e1a\u52a1\u573a\u666f\u662f\u76d1\u542c\u9875\u9762\u7684 ",(0,a.jsx)(t.code,{children:"scroll"})," \u4e8b\u4ef6\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u5728 1s \u5185\u89e6\u53d1\u8be5\u4e8b\u4ef6\u6570\u6b21\uff08\u751a\u81f3\u8fbe\u6570\u5341\u6b21\uff09\uff0c\u5982\u679c\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5728\u8fd9 1s \u5185\u591a\u6b21\u6267\u884c\uff0c\u5fc5\u7136\u4f1a\u9020\u6210\u4e00\u5b9a\u7684\u6027\u80fd\u95ee\u9898\uff0c\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);