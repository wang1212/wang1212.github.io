"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[46676],{45942:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=o(85893),r=o(11151);const a={title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",date:new Date("2016-06-18T16:17:00.000Z"),update:new Date("2016-06-18T16:17:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],description:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002"},c=void 0,l={permalink:"/computer-technology/protocol/protocol-base",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/protocol/protocol-base.md",source:"@site/blog/computer-technology/protocol/protocol-base.md",title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",description:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002",date:"2016-06-18T16:17:00.000Z",formattedDate:"2016\u5e746\u670818\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u534f\u8bae",permalink:"/tags/\u534f\u8bae"},{label:"\u5173\u952e\u6982\u5ff5",permalink:"/tags/\u5173\u952e\u6982\u5ff5"}],readingTime:11.445,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",date:"2016-06-18T16:17:00.000Z",update:"2016-06-18T16:17:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],description:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002"},unlisted:!1,prevItem:{title:"\u5c40\u57df\u7f51\uff08LAN\uff09\u4e0e\u5e7f\u57df\u7f51\uff08WAN\uff09",permalink:"/computer-technology/protocol/protocol-lan-wan"},nextItem:{title:"OSI \u4e0e TCP/IP \u53c2\u8003\u6a21\u578b",permalink:"/computer-technology/protocol/protocol-osi"}},s={authorsImageUrls:[void 0]},i=[];function p(t){const e={blockquote:"blockquote",em:"em",p:"p",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-06-18 16:17:00"})}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002"})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},11151:(t,e,o)=>{o.d(e,{Z:()=>l,a:()=>c});var n=o(67294);const r={},a=n.createContext(r);function c(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);