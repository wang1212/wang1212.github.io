"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[31],{15734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(85893),a=n(11151);const r={title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6848\u4f8b\u5206\u6790 1",date:new Date("2021-09-24T00:51:00.000Z"),update:new Date("2022-03-06T23:28:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u5b9e\u8df5\u6848\u4f8b"],description:"Web \u6027\u80fd\u76f8\u5173\u7684\u6982\u5ff5\u5f88\u591a\uff0c\u4f46\u5982\u4f55\u843d\u5730\u5728\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u6bd4\u8f83\u96be\u7684\u4e8b\u60c5\uff0c\u6216\u8005\u8bf4\u673a\u4f1a\u9c9c\u6709\uff0c\u5728\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u771f\u5b9e\u4e1a\u52a1\u6848\u4f8b\u505a\u6027\u80fd\u4f18\u5316\u7684\u8fc7\u7a0b\u3002"},s=void 0,i={permalink:"/computer-technology/web-frontend/web-performance-case-1",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/web-performance-case-1.md",source:"@site/blog/computer-technology/web-frontend/web-performance-case-1.md",title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6848\u4f8b\u5206\u6790 1",description:"Web \u6027\u80fd\u76f8\u5173\u7684\u6982\u5ff5\u5f88\u591a\uff0c\u4f46\u5982\u4f55\u843d\u5730\u5728\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u6bd4\u8f83\u96be\u7684\u4e8b\u60c5\uff0c\u6216\u8005\u8bf4\u673a\u4f1a\u9c9c\u6709\uff0c\u5728\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u771f\u5b9e\u4e1a\u52a1\u6848\u4f8b\u505a\u6027\u80fd\u4f18\u5316\u7684\u8fc7\u7a0b\u3002",date:"2021-09-24T00:51:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{inline:!0,label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"},{inline:!0,label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:24.545,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6848\u4f8b\u5206\u6790 1",date:"2021-09-24T00:51:00.000Z",update:"2022-03-06T23:28:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u5b9e\u8df5\u6848\u4f8b"],description:"Web \u6027\u80fd\u76f8\u5173\u7684\u6982\u5ff5\u5f88\u591a\uff0c\u4f46\u5982\u4f55\u843d\u5730\u5728\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u6bd4\u8f83\u96be\u7684\u4e8b\u60c5\uff0c\u6216\u8005\u8bf4\u673a\u4f1a\u9c9c\u6709\uff0c\u5728\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u771f\u5b9e\u4e1a\u52a1\u6848\u4f8b\u505a\u6027\u80fd\u4f18\u5316\u7684\u8fc7\u7a0b\u3002"},unlisted:!1,prevItem:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6279\u91cf DOM \u64cd\u4f5c - FastDOM",permalink:"/2021/10/04/computer-technology/web-frontend/web-performance-fastdom"},nextItem:{title:"Child process API: spawn vs exec",permalink:"/2021/08/25/computer-technology/nodejs/nodejs-spawn-vs-exec"}},l={authorsImageUrls:[void 0]},c=[];function b(e){const t={blockquote:"blockquote",em:"em",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2022-03-06 23:28:00"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u80fd\u5728\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e2d\u843d\u5730 Web \u6027\u80fd\u4f18\u5316\u65b9\u6848\u7684\u673a\u4f1a\u9c9c\u6709\uff0c\u5927\u591a\u6570\u65f6\u5019\u4e1a\u52a1\u662f\u8f83\u4e3a\u7b80\u5355\u800c\u4e14\u8981\u6c42\u4e0d\u9ad8\u7684\uff0c\u524d\u6bb5\u65f6\u95f4\u6070\u597d\u6709\u4e00\u4e2a\u6bd4\u8f83\u6838\u5fc3\u7684\u4e1a\u52a1\uff0c\u5bf9\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u6709\u4e00\u5b9a\u7684\u8981\u6c42\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4e5f\u7b97\u662f\u505a\u4e86\u5f88\u591a\u5c1d\u8bd5\u548c\u5b9e\u8df5\uff0c\u5728\u6b64\u4f5c\u4e3a\u6848\u4f8b\u8bb0\u5f55\u4e00\u4e0b\u5206\u6790\u7684\u8fc7\u7a0b\u548c\u6700\u7ec8\u89e3\u51b3\u7684\u65b9\u6848\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(67294);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);