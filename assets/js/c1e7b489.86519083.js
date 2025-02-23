"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[476],{25180:e=>{e.exports=JSON.parse('{"permalink":"/2024/06/16/computer-technology/computer-graphics/scanline-algorithm","editUrl":"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/computer-graphics/2024-06-16-scanline-algorithm.md","source":"@site/blog/computer-technology/computer-graphics/2024-06-16-scanline-algorithm.md","title":"\u89e3\u6790 Rough.js \u56fe\u5f62\u7ebf\u586b\u5145\u5b9e\u73b0\uff1a\u626b\u63cf\u7ebf\u7b97\u6cd5","description":"\u7531\u4e8e\u6bd4\u8f83\u597d\u5947 Rough.js \u7684\u624b\u7ed8\u98ce\u683c\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u9042\u51c6\u5907\u770b\u770b\u5176\u6e90\u7801\u5b9e\u73b0\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u4f9d\u8d56\u9879\u5305 hachure-fill\uff0c\u7c7b\u4f3c\u94c5\u7b14\u7ebf\u7684\u56fe\u5f62\u586b\u5145\u4f9d\u8d56\u6b64\u5305\u5b9e\u73b0\uff0c\u5176\u6e90\u7801\u6bd4\u8f83\u7b80\u6d01\uff0c\u4ece\u5176\u5b9e\u73b0\u4e2d\u4e86\u89e3\u5230\u4e00\u4e2a\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u9886\u57df\u7684\u6982\u5ff5-\u201c\u626b\u63cf\u7ebf\u7b97\u6cd5\u201d\u3002","date":"2024-06-16T19:11:00.000Z","tags":[{"inline":true,"label":"\u8ba1\u7b97\u673a\u6280\u672f","permalink":"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{"inline":true,"label":"\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","permalink":"/tags/\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66"},{"inline":true,"label":"\u6570\u636e\u53ef\u89c6\u5316","permalink":"/tags/\u6570\u636e\u53ef\u89c6\u5316"},{"inline":true,"label":"\u626b\u63cf\u7ebf\u7b97\u6cd5","permalink":"/tags/\u626b\u63cf\u7ebf\u7b97\u6cd5"},{"inline":true,"label":"\u6e90\u7801\u89e3\u6790","permalink":"/tags/\u6e90\u7801\u89e3\u6790"}],"readingTime":9.76,"hasTruncateMarker":true,"authors":[{"name":"\u4e0d\u5982\u6000\u5ff5","title":"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)","url":"https://github.com/wang1212","email":"mrwang1212@126.com","imageURL":"/img/authors/wang1212.png","key":"wang1212","page":null}],"frontMatter":{"title":"\u89e3\u6790 Rough.js \u56fe\u5f62\u7ebf\u586b\u5145\u5b9e\u73b0\uff1a\u626b\u63cf\u7ebf\u7b97\u6cd5","date":"2024-06-16T19:11:00.000Z","update":"2024-06-16T19:11:00.000Z","authors":"wang1212","tags":["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","\u6570\u636e\u53ef\u89c6\u5316","\u626b\u63cf\u7ebf\u7b97\u6cd5","\u6e90\u7801\u89e3\u6790"],"keywords":["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","\u6570\u636e\u53ef\u89c6\u5316","\u626b\u63cf\u7ebf\u7b97\u6cd5","\u6e90\u7801\u89e3\u6790"],"description":"\u7531\u4e8e\u6bd4\u8f83\u597d\u5947 Rough.js \u7684\u624b\u7ed8\u98ce\u683c\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u9042\u51c6\u5907\u770b\u770b\u5176\u6e90\u7801\u5b9e\u73b0\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u4f9d\u8d56\u9879\u5305 hachure-fill\uff0c\u7c7b\u4f3c\u94c5\u7b14\u7ebf\u7684\u56fe\u5f62\u586b\u5145\u4f9d\u8d56\u6b64\u5305\u5b9e\u73b0\uff0c\u5176\u6e90\u7801\u6bd4\u8f83\u7b80\u6d01\uff0c\u4ece\u5176\u5b9e\u73b0\u4e2d\u4e86\u89e3\u5230\u4e00\u4e2a\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u9886\u57df\u7684\u6982\u5ff5-\u201c\u626b\u63cf\u7ebf\u7b97\u6cd5\u201d\u3002"},"unlisted":false,"prevItem":{"title":"\u4e00\u6b21\u6e56\u5317\u81ea\u9a7e\u6e38","permalink":"/2024/07/12/life/tourism/tourism-hubei-enshi"},"nextItem":{"title":"\u8c08\u8c08\u73b0\u9636\u6bb5\u5bf9 AI Agent \u7684\u7406\u89e3","permalink":"/2024/03/22/computer-technology/ai/llm/agent"}}')},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},56184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var r=n(25180),o=n(74848),a=n(28453);const i={title:"\u89e3\u6790 Rough.js \u56fe\u5f62\u7ebf\u586b\u5145\u5b9e\u73b0\uff1a\u626b\u63cf\u7ebf\u7b97\u6cd5",date:new Date("2024-06-16T19:11:00.000Z"),update:new Date("2024-06-16T19:11:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","\u6570\u636e\u53ef\u89c6\u5316","\u626b\u63cf\u7ebf\u7b97\u6cd5","\u6e90\u7801\u89e3\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","\u6570\u636e\u53ef\u89c6\u5316","\u626b\u63cf\u7ebf\u7b97\u6cd5","\u6e90\u7801\u89e3\u6790"],description:"\u7531\u4e8e\u6bd4\u8f83\u597d\u5947 Rough.js \u7684\u624b\u7ed8\u98ce\u683c\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u9042\u51c6\u5907\u770b\u770b\u5176\u6e90\u7801\u5b9e\u73b0\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u4f9d\u8d56\u9879\u5305 hachure-fill\uff0c\u7c7b\u4f3c\u94c5\u7b14\u7ebf\u7684\u56fe\u5f62\u586b\u5145\u4f9d\u8d56\u6b64\u5305\u5b9e\u73b0\uff0c\u5176\u6e90\u7801\u6bd4\u8f83\u7b80\u6d01\uff0c\u4ece\u5176\u5b9e\u73b0\u4e2d\u4e86\u89e3\u5230\u4e00\u4e2a\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u9886\u57df\u7684\u6982\u5ff5-\u201c\u626b\u63cf\u7ebf\u7b97\u6cd5\u201d\u3002"},s=void 0,l={authorsImageUrls:[void 0]},c=[];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2024-06-16 19:11:00"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["\u7531\u4e8e\u6bd4\u8f83\u597d\u5947 ",(0,o.jsx)(t.a,{href:"https://roughjs.com/",children:"Rough.js"})," \u7684\u624b\u7ed8\u98ce\u683c\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u9042\u51c6\u5907\u770b\u770b\u5176\u6e90\u7801\u5b9e\u73b0\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u4f9d\u8d56\u9879\u5305 ",(0,o.jsx)(t.a,{href:"https://github.com/pshihn/hachure-fill",children:(0,o.jsx)(t.code,{children:"hachure-fill"})}),"\uff0c\u7c7b\u4f3c\u94c5\u7b14\u7ebf\u7684\u56fe\u5f62\u586b\u5145\u4f9d\u8d56\u6b64\u5305\u5b9e\u73b0\uff0c\u5176\u6e90\u7801\u6bd4\u8f83\u7b80\u6d01\uff0c\u4ece\u5176\u5b9e\u73b0\u4e2d\u4e86\u89e3\u5230\u4e00\u4e2a\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u9886\u57df\u7684\u6982\u5ff5-\u201c\u626b\u63cf\u7ebf\u7b97\u6cd5\uff08Scanline Algorithm\uff09\u201d\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://roughjs.com/images/cap_demo.png",alt:"Rough.js sample"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);