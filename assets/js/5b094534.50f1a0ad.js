"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6257],{68342:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var i=l(85893),s=l(11151);const r={title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",date:new Date("2016-06-18T16:17:00.000Z"),update:new Date("2016-06-18T16:17:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],description:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002"},c=void 0,t={permalink:"/computer-technology/protocol/protocol-base",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/protocol/protocol-base.md",source:"@site/blog/computer-technology/protocol/protocol-base.md",title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",description:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002",date:"2016-06-18T16:17:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"\u534f\u8bae",permalink:"/tags/\u534f\u8bae"},{inline:!0,label:"\u5173\u952e\u6982\u5ff5",permalink:"/tags/\u5173\u952e\u6982\u5ff5"}],readingTime:11.445,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",date:"2016-06-18T16:17:00.000Z",update:"2016-06-18T16:17:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","\u5173\u952e\u6982\u5ff5"],description:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002"},unlisted:!1,prevItem:{title:"\u5c40\u57df\u7f51\uff08LAN\uff09\u4e0e\u5e7f\u57df\u7f51\uff08WAN\uff09",permalink:"/computer-technology/protocol/protocol-lan-wan"},nextItem:{title:"OSI \u4e0e TCP/IP \u53c2\u8003\u6a21\u578b",permalink:"/computer-technology/protocol/protocol-osi"}},d={authorsImageUrls:[void 0]},o=[{value:"\u7f51\u7edc\u901a\u4fe1\u534f\u8bae",id:"\u7f51\u7edc\u901a\u4fe1\u534f\u8bae",level:2},{value:"\u70b9-\u70b9\u4f20\u8f93 &amp; \u7aef-\u7aef\u4f20\u8f93",id:"\u70b9-\u70b9\u4f20\u8f93--\u7aef-\u7aef\u4f20\u8f93",level:2},{value:"\u70b9-\u70b9\u4f20\u8f93",id:"\u70b9-\u70b9\u4f20\u8f93",level:3},{value:"\u7aef-\u7aef\u4f20\u8f93",id:"\u7aef-\u7aef\u4f20\u8f93",level:3},{value:"\u9762\u5411\u8fde\u63a5\u534f\u8bae &amp; \u65e0\u8fde\u63a5\u534f\u8bae",id:"\u9762\u5411\u8fde\u63a5\u534f\u8bae--\u65e0\u8fde\u63a5\u534f\u8bae",level:2},{value:"\u9762\u5411\u8fde\u63a5\u534f\u8bae",id:"\u9762\u5411\u8fde\u63a5\u534f\u8bae",level:3},{value:"\u65e0\u8fde\u63a5\u534f\u8bae",id:"\u65e0\u8fde\u63a5\u534f\u8bae",level:3},{value:"\u7535\u8def\u4ea4\u6362 &amp; \u62a5\u6587\u4ea4\u6362 &amp; \u5206\u7ec4\u4ea4\u6362",id:"\u7535\u8def\u4ea4\u6362--\u62a5\u6587\u4ea4\u6362--\u5206\u7ec4\u4ea4\u6362",level:2},{value:"\u7535\u8def\u4ea4\u6362",id:"\u7535\u8def\u4ea4\u6362",level:3},{value:"\u62a5\u6587\u4ea4\u6362",id:"\u62a5\u6587\u4ea4\u6362",level:3},{value:"\u5206\u7ec4\u4ea4\u6362",id:"\u5206\u7ec4\u4ea4\u6362",level:3}];function h(n){const e={blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-06-18 16:17:00"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8ba1\u7b97\u673a\u7f51\u7edc\u662f\u901a\u8fc7\u901a\u4fe1\u8bbe\u5907\u4e0e\u7ebf\u8def\u5c06\u5730\u7406\u4e0a\u5206\u6563\u5e76\u4e14\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5e76\u7531\u529f\u80fd\u5b8c\u5584\u7684\u8f6f\u4ef6\u6765\u63a7\u5236\uff0c\u8fdb\u800c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u7684\u7cfb\u7edf\u3002\u4ece\u7269\u7406\u7ec4\u6210\u4e0a\u6765\u770b\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u5305\u62ec\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u534f\u8bae\u4e09\u5927\u90e8\u5206\u3002\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u7ed3\u70b9\u95f4\u76f8\u4e92\u901a\u4fe1\u662f\u7531\u63a7\u5236\u4fe1\u606f\u4f20\u9001\u7684\u7f51\u7edc\u534f\u8bae\u53ca\u5176\u4ed6\u76f8\u5e94\u7684\u7f51\u7edc\u8f6f\u4ef6\u5171\u540c\u5b9e\u73b0\u7684\u3002\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u901a\u4fe1\u4e2d\uff0c\u6709\u90e8\u5206\u5173\u952e\u6027\u6982\u5ff5\u9700\u8981\u7406\u89e3\u900f\u5f7b\uff0c\u5728\u6b64\u505a\u4e00\u603b\u7ed3\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7f51\u7edc\u901a\u4fe1\u534f\u8bae",children:"\u7f51\u7edc\u901a\u4fe1\u534f\u8bae"}),"\n",(0,i.jsx)(e.p,{children:"**\u7f51\u7edc\u901a\u4fe1\u534f\u8bae\u7b80\u79f0\u7f51\u7edc\u534f\u8bae\uff08Poctocol\uff09\uff0c\u662f\u6307\u4e3a\u4e86\u80fd\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\u8fdb\u884c\u6570\u636e\u4ea4\u6362\uff0c\u5b9e\u73b0\u8d44\u6e90\u5171\u4eab\u800c\u5efa\u7acb\u7684\u901a\u4fe1\u89c4\u5219\u3001\u6807\u51c6\u6216\u7ea6\u5b9a\u7684\u96c6\u5408\u3002**\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u4e2d\uff0c\u53ea\u6709\u91c7\u7528\u76f8\u540c\u7f51\u7edc\u534f\u8bae\u7684\u8ba1\u7b97\u673a\u624d\u80fd\u8fdb\u884c\u4fe1\u606f\u7684\u4ea4\u6d41\u4e0e\u6c9f\u901a\u3002\u7f51\u7edc\u534f\u8bae\u6709\u4ee5\u4e0b\u4e09\u4e2a\u57fa\u672c\u8981\u7d20\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bed\u4e49\uff08Semantics\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u89c4\u5b9a\u53cc\u65b9\u5b8c\u6210\u901a\u4fe1\u9700\u8981\u7684\u63a7\u5236\u4fe1\u606f\u53ca\u5e94\u6267\u884c\u7684\u52a8\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bed\u6cd5\uff08Syntax\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u89c4\u5b9a\u901a\u4fe1\u53cc\u65b9\u4ea4\u6362\u7684\u6570\u636e\u6216\u63a7\u5236\u4fe1\u606f\u7684\u683c\u5f0f\u548c\u7ed3\u6784\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u65f6\u5e8f\uff08Timing\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u89c4\u5b9a\u901a\u4fe1\u53cc\u65b9\u5f7c\u6b64\u7684\u5e94\u7b54\u5173\u7cfb\uff0c\u5305\u62ec\u901f\u5ea6\u7684\u5339\u914d\u548c\u987a\u5e8f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u70b9-\u70b9\u4f20\u8f93--\u7aef-\u7aef\u4f20\u8f93",children:"\u70b9-\u70b9\u4f20\u8f93 & \u7aef-\u7aef\u4f20\u8f93"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u7f51\u7edc\u901a\u4fe1\u8fc7\u7a0b\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e24\u79cd\u6570\u636e\u4f20\u8f93\u65b9\u5f0f\uff1a",(0,i.jsx)(e.strong,{children:"\u70b9\u5230\u70b9\u4f20\u8f93"}),"\u548c",(0,i.jsx)(e.strong,{children:"\u7aef\u5230\u7aef\u4f20\u8f93"}),"\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u70b9-\u70b9\u4f20\u8f93",children:"\u70b9-\u70b9\u4f20\u8f93"}),"\n",(0,i.jsx)(e.p,{children:"**\u70b9\u5230\u70b9\uff08Point-To-Point\uff0cPTP\uff09\u4f20\u8f93\u65b9\u5f0f\u5bf9\u5e94\u4e8e\u7269\u7406\u62d3\u6251\uff0c\u662f\u4e00\u79cd\u66f4\u6ce8\u91cd\u8fc7\u7a0b\u7684\u4f20\u8f93\u65b9\u5f0f\u3002**\u70b9\u5230\u70b9\u4f20\u8f93\u4e0d\u9700\u8981\u5efa\u7acb\u8fde\u63a5\uff0c\u5728\u7f51\u7edc\u4e2d\u7684\u4e24\u4e2a\u76f4\u63a5\u76f8\u8fde\u76f8\u90bb\u8282\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u4f20\u8f93\u65b9\u5f0f\u5c31\u662f\u70b9\u5230\u70b9\u4f20\u8f93\uff0c\u5373\u76f8\u90bb\u8bbe\u5907\u4e4b\u95f4\u4e0d\u5b58\u5728\u5176\u4ed6\u8bbe\u5907\u3002\u5728 OSI \u4f53\u7cfb\u7ed3\u6784\u4e2d\uff0c\u5e95\u4e09\u5c42\u901a\u4fe1\u5b50\u7f51\uff08\u7269\u7406\u5c42\u3001\u94fe\u8def\u5c42\u3001\u7f51\u7edc\u5c42\uff09\u91c7\u7528\u7684\u5c31\u662f\u70b9\u5230\u70b9\u4f20\u8f93\u65b9\u5f0f\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u9001\u7aef\u8bbe\u5907\u9001\u51fa\u6570\u636e\u540e\uff0c\u5b83\u7684\u4efb\u52a1\u5df2\u7ecf\u5b8c\u6210\uff0c\u4e0d\u9700\u8981\u53c2\u4e0e\u6574\u4e2a\u4f20\u8f93\u8fc7\u7a0b\uff0c\u8fd9\u6837\u4e0d\u4f1a\u6d6a\u8d39\u53d1\u9001\u7aef\u8bbe\u5907\u7684\u8d44\u6e90\u3002\u53e6\u5916\uff0c\u5373\u4f7f\u63a5\u6536\u7aef\u8bbe\u5907\u5173\u673a\u6216\u6545\u969c\uff0c\u70b9\u5230\u70b9\u4f20\u8f93\u4e5f\u53ef\u4ee5\u91c7\u7528\u5b58\u50a8\u8f6c\u53d1\u6280\u672f\u8fdb\u884c\u7f13\u51b2\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u9001\u7aef\u53d1\u51fa\u6570\u636e\u540e\uff0c\u4e0d\u77e5\u9053\u63a5\u6536\u7aef\u80fd\u5426\u6536\u5230\u6216\u4f55\u65f6\u80fd\u6536\u5230\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7aef-\u7aef\u4f20\u8f93",children:"\u7aef-\u7aef\u4f20\u8f93"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7aef\u5230\u7aef\uff08End-To-End\uff0cETE\uff09\u4f20\u8f93\u65b9\u5f0f\u5bf9\u5e94\u4e8e\u903b\u8f91\u62d3\u6251\uff0c\u662f\u4e00\u79cd\u66f4\u6ce8\u91cd\u7ed3\u679c\u7684\u4f20\u8f93\u65b9\u5f0f\u3002"}),"\n\u7aef\u5230\u7aef\u4f20\u8f93\u662f\u4f9d\u8d56\u4e8e\u7f51\u7edc\u8fde\u63a5\u7684\uff0c\u7f51\u7edc\u8981\u901a\u4fe1\u5fc5\u987b\u5efa\u7acb\u8fde\u63a5\uff0c\u65e0\u8bba\uff08\u6e90\u548c\u76ee\u7684\uff09\u4e4b\u95f4\u7ecf\u8fc7\u591a\u5c11\u4e2a\u7f51\u7edc\u8282\u70b9\uff0c\u53ea\u8981\u5efa\u7acb\u8fde\u63a5\u5c31\u5c5e\u4e8e\u7aef\u5230\u7aef\u4f20\u8f93\uff0c\u5373\u8fd9\u79cd\u8fde\u63a5\u662f\u4e00\u79cd\u903b\u8f91\u94fe\u8def\u3002\u5728 OSI \u4f53\u7cfb\u7ed3\u6784\u4e2d\uff0c\u9ad8\u56db\u5c42\uff08\u4f20\u8f93\u5c42\u3001\u4f1a\u8bdd\u5c42\u3001\u8868\u793a\u5c42\u3001\u5e94\u7528\u5c42\uff09\u91c7\u7528\u7684\u5c31\u662f\u7aef\u5230\u7aef\u4f20\u8f93\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u903b\u8f91\u94fe\u8def\u5efa\u7acb\u540e\uff0c\u53d1\u9001\u7aef\u77e5\u9053\u63a5\u6536\u8bbe\u5907\u4e00\u5b9a\u80fd\u6536\u5230\uff0c\u800c\u4e14\u7ecf\u8fc7\u4e2d\u95f4\u4ea4\u6362\u8bbe\u5907\u65f6\u4e0d\u9700\u8981\u8fdb\u884c\u5b58\u50a8\u8f6c\u53d1\uff0c\u56e0\u6b64\u4f20\u8f93\u5ef6\u8fdf\u5c0f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u76f4\u5230\u63a5\u6536\u7aef\u6536\u5230\u6570\u636e\u4e3a\u6b62\uff0c\u53d1\u9001\u7aef\u7684\u8bbe\u5907\u4e00\u76f4\u8981\u53c2\u4e0e\u4f20\u8f93\u3002\u5982\u679c\u6574\u4e2a\u4f20\u8f93\u7684\u5ef6\u8fdf\u5f88\u957f\uff0c\u90a3\u4e48\u5bf9\u53d1\u9001\u7aef\u7684\u8bbe\u5907\u9020\u6210\u5f88\u5927\u7684\u6d6a\u8d39\uff1b\u800c\u4e14\u5982\u679c\u63a5\u6536\u8bbe\u5907\u5173\u673a\u6216\u6545\u969c\uff0c\u90a3\u4e48\u7aef\u5230\u7aef\u4f20\u8f93\u4e0d\u53ef\u80fd\u5b9e\u73b0\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9762\u5411\u8fde\u63a5\u534f\u8bae--\u65e0\u8fde\u63a5\u534f\u8bae",children:"\u9762\u5411\u8fde\u63a5\u534f\u8bae & \u65e0\u8fde\u63a5\u534f\u8bae"}),"\n",(0,i.jsxs)(e.p,{children:["\u7f51\u7edc\u901a\u4fe1\u534f\u8bae\u53ef\u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a",(0,i.jsx)(e.strong,{children:"\u9762\u5411\u8fde\u63a5\u534f\u8bae"}),"\u548c",(0,i.jsx)(e.strong,{children:"\u65e0\u8fde\u63a5\u534f\u8bae"}),"\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u9762\u5411\u8fde\u63a5\u534f\u8bae",children:"\u9762\u5411\u8fde\u63a5\u534f\u8bae"}),"\n",(0,i.jsx)(e.p,{children:"**\u91c7\u7528\u9762\u5411\u8fde\u63a5\u534f\u8bae\uff08Connection-oriented Protocol\uff09\u8fdb\u884c\u901a\u4fe1\u65f6\uff0c\u53d1\u9001\u7aef\u4e0e\u63a5\u6536\u7aef\u5fc5\u987b\u8981\u5efa\u7acb\u8fde\u63a5\uff0c\u5373\u4e24\u4e2a\u7aef\u70b9\u4e4b\u95f4\u5efa\u7acb\u6570\u636e\u901a\u4fe1\u4fe1\u9053\uff08\u865a\u7535\u8def\uff09\u3002**\u9762\u5411\u8fde\u63a5\u7684\u65b9\u5f0f\u901a\u5e38\u63d0\u4f9b\u7684\u662f\u53ef\u9760\u7684\u4f20\u8f93\u670d\u52a1\uff0c\u5b83\u80fd\u4fdd\u8bc1\u6570\u636e\u4e00\u5b9a\u80fd\u591f\u4f20\u9001\u5230\u76ee\u7684\u5730\uff0c\u800c\u4e14\u6570\u636e\u5185\u5bb9\u4e0d\u53d1\u751f\u53d8\u5316\u3002 TCP \u534f\u8bae\u5c31\u662f\u4e00\u79cd\u9762\u5411\u8fde\u63a5\u7684\u534f\u8bae\uff0c\u5b83\u63d0\u4f9b\u4e86\u9762\u5411\u8fde\u63a5\u3001\u53ef\u9760\u7684\u5b57\u8282\u6d41\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u65e0\u8fde\u63a5\u534f\u8bae",children:"\u65e0\u8fde\u63a5\u534f\u8bae"}),"\n",(0,i.jsx)(e.p,{children:"**\u91c7\u7528\u65e0\u8fde\u63a5\u534f\u8bae\uff08Connectionless Protocol\uff09\u8fdb\u884c\u901a\u4fe1\u65f6\uff0c\u53d1\u9001\u7aef\u4e0e\u63a5\u6536\u7aef\u4e0d\u9700\u8981\u5efa\u7acb\u8fde\u63a5\uff0c\u53ea\u9700\u8981\u77e5\u9053\u63a5\u6536\u7aef\u5730\u5740\u5373\u53ef\u3002**\u65e0\u8fde\u63a5\u7684\u65b9\u5f0f\u901a\u5e38\u63d0\u4f9b\u7684\u662f\u4e0d\u53ef\u9760\u7684\u4f20\u8f93\u670d\u52a1\uff0c\u5b83\u4e0d\u80fd\u4fdd\u8bc1\u6570\u636e\u4e00\u5b9a\u80fd\u591f\u5230\u8fbe\u76ee\u7684\u5730\uff0c\u4f46\u5b83\u53ef\u4ee5\u68c0\u9a8c\u51fa\u5230\u8fbe\u76ee\u7684\u5730\u7684\u6570\u636e\u662f\u5426\u5b8c\u6574\uff1b\u53e6\u4e00\u65b9\u9762\uff0c\u7531\u4e8e\u4e0d\u9700\u8981\u5efa\u7acb\u8fde\u63a5\uff0c\u8fd9\u79cd\u65b9\u5f0f\u66f4\u5feb\u4e00\u4e9b\u3002IP\u3001UDP \u534f\u8bae\u5c31\u662f\u65e0\u8fde\u63a5\u7684\u534f\u8bae\uff0c\u5b83\u4eec\u4e5f\u662f\u6570\u636e\u62a5\u534f\u8bae\uff0c\u4e0d\u662f\u901a\u8fc7\u5b57\u8282\u6d41\u800c\u662f\u5206\u7ec4\u7684\u6570\u636e\u62a5\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7535\u8def\u4ea4\u6362--\u62a5\u6587\u4ea4\u6362--\u5206\u7ec4\u4ea4\u6362",children:"\u7535\u8def\u4ea4\u6362 & \u62a5\u6587\u4ea4\u6362 & \u5206\u7ec4\u4ea4\u6362"}),"\n",(0,i.jsxs)(e.p,{children:["\u7f51\u7edc\u6570\u636e\u4ea4\u6362\u6280\u672f\u4e3b\u8981\u6709\u4e09\u79cd\uff1a",(0,i.jsx)(e.strong,{children:"\u7535\u8def\u4ea4\u6362"}),"\u3001",(0,i.jsx)(e.strong,{children:"\u62a5\u6587\u4ea4\u6362"}),"\u3001",(0,i.jsx)(e.strong,{children:"\u5206\u7ec4\u4ea4\u6362"}),"\u3002\u73b0\u5728\u4e3b\u8981\u4f7f\u7528\u7535\u8def\u4ea4\u6362\u548c\u5206\u7ec4\u4ea4\u6362\u6280\u672f\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7535\u8def\u4ea4\u6362",children:"\u7535\u8def\u4ea4\u6362"}),"\n",(0,i.jsx)(e.p,{children:"**\u7535\u8def\u4ea4\u6362\uff08Circuit Switching\uff0c\u4e5f\u79f0\u7ebf\u8def\u4ea4\u6362\uff09\u662f\u4e00\u79cd\u9762\u5411\u8fde\u63a5\u7684\u670d\u52a1\uff0c\u5373\u4e24\u53f0\u8ba1\u7b97\u673a\u901a\u8fc7\u901a\u4fe1\u5b50\u7f51\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u4e4b\u524d\uff0c\u9996\u5148\u8981\u5728\u901a\u4fe1\u5b50\u7f51\u4e2d\u5efa\u7acb\u4e00\u6761\u5b9e\u9645\u7684\u3001\u4e13\u7528\u7684\uff08\u72ec\u5360\u7684\uff09\u7269\u7406\u7ebf\u8def\u8fde\u63a5\u3002**\u6700\u5178\u578b\u7684\u4f8b\u5b50\u5c31\u662f\u7535\u8bdd\u901a\u4fe1\u7cfb\u7edf\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u4fe1\u7ebf\u8def\u4e3a\u901a\u4fe1\u53cc\u65b9\u4e13\u7528\uff0c\u6570\u636e\u76f4\u8fbe\uff0c\u6240\u4ee5\u4f20\u8f93\u6570\u636e\u7684\u65f6\u5ef6\u975e\u5e38\u5c0f\uff1b\u901a\u4fe1\u53cc\u65b9\u4e4b\u95f4\u7684\u7269\u7406\u901a\u8def\u4e00\u65e6\u5efa\u7acb\uff0c\u53cc\u65b9\u53ef\u4ee5\u968f\u65f6\u901a\u4fe1\uff0c\u5b9e\u65f6\u6027\u5f3a\uff1b\u53cc\u65b9\u901a\u4fe1\u65f6\u6309\u53d1\u9001\u987a\u5e8f\u4f20\u9001\u6570\u636e\uff0c\u4e0d\u5b58\u5728\u5931\u5e8f\u95ee\u9898\uff1b\u7535\u8def\u4ea4\u6362\u65e2\u9002\u7528\u4e8e\u4f20\u8f93\u6a21\u62df\u4fe1\u53f7\uff0c\u4e5f\u9002\u7528\u4e8e\u4f20\u8f93\u6570\u5b57\u4fe1\u53f7\uff1b\u7535\u8def\u4ea4\u6362\u7684\u4ea4\u6362\u8bbe\u5907\uff08\u4ea4\u6362\u673a\u7b49\uff09\u53ca\u63a7\u5236\u5747\u8f83\u7b80\u5355\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u5e73\u5747\u8fde\u63a5\u5efa\u7acb\u65f6\u95f4\u5bf9\u8ba1\u7b97\u673a\u901a\u4fe1\u6765\u8bf4\u663e\u5f97\u8f83\u957f\uff1b\u7535\u8def\u4ea4\u6362\u8fde\u63a5\u5efa\u7acb\u540e\uff0c\u7269\u7406\u901a\u8def\u88ab\u901a\u4fe1\u53cc\u65b9\u72ec\u5360\uff0c\u5373\u4f7f\u901a\u4fe1\u7ebf\u8def\u7a7a\u95f2\uff0c\u4e5f\u4e0d\u80fd\u4f9b\u5176\u4ed6\u7528\u6237\u4f7f\u7528\uff0c\u56e0\u800c\u4fe1\u9053\u5229\u7528\u7387\u4f4e\uff1b\u7535\u8def\u4ea4\u6362\u65f6\uff0c\u6570\u636e\u76f4\u8fbe\uff0c\u4e0d\u540c\u7c7b\u578b\u3001\u4e0d\u540c\u89c4\u683c\u3001\u4e0d\u540c\u901f\u7387\u7684\u7ec8\u7aef\u5f88\u96be\u76f8\u4e92\u8fdb\u884c\u901a\u4fe1\uff0c\u4e5f\u96be\u4ee5\u5728\u901a\u4fe1\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u5dee\u9519\u63a7\u5236\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u62a5\u6587\u4ea4\u6362",children:"\u62a5\u6587\u4ea4\u6362"}),"\n",(0,i.jsx)(e.p,{children:"**\u62a5\u6587\u4ea4\u6362\uff08Message Switching\uff09\u91c7\u7528\u5b58\u50a8-\u8f6c\u53d1\u6280\u672f\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u3002**\u9996\u5148\u5c06\u4e00\u4e2a\u5b8c\u6574\u7684\u62a5\u6587\u4f20\u9001\u7ed9\u4ea4\u6362\u673a\u7684\u7f13\u51b2\u533a\uff0c\u5f85\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u4ea4\u6362\u673a\u7a7a\u95f2\u65f6\u5c06\u62a5\u6587\u8f6c\u53d1\u7ed9\u5b83\uff0c\u4e00\u7ea7\u4e00\u7ea7\u7684\u6700\u7ec8\u9001\u5230\u76ee\u7684\u4e3b\u673a\u3002\u7535\u5b50\u90ae\u4ef6\u7cfb\u7edf\uff08E-mail\uff09\u9002\u5408\u91c7\u7528\u62a5\u6587\u4ea4\u6362\u65b9\u5f0f\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u62a5\u6587\u4ea4\u6362\u4e0d\u9700\u8981\u4e3a\u901a\u4fe1\u53cc\u65b9\u9884\u5148\u5efa\u7acb\u4e00\u6761\u4e13\u7528\u7684\u901a\u4fe1\u7ebf\u8def\uff0c\u4e0d\u5b58\u5728\u8fde\u63a5\u5efa\u7acb\u65f6\u5ef6\uff0c\u7528\u6237\u53ef\u968f\u65f6\u53d1\u9001\u62a5\u6587\uff1b\u91c7\u7528\u5b58\u50a8-\u8f6c\u53d1\u6280\u672f\uff0c\u53ef\u901a\u8fc7\u4e0d\u540c\u7684\u903b\u8f91\u94fe\u8def\u5c06\u6570\u636e\u9001\u8fbe\u76ee\u7684\u4e3b\u673a\uff0c\u63d0\u9ad8\u4e86\u53ef\u9760\u6027\uff1b\u800c\u4e14\u53ef\u5b9e\u73b0\u4e0d\u540c\u7c7b\u578b\u3001\u4e0d\u540c\u89c4\u683c\u3001\u4e0d\u540c\u901f\u7387\u7684\u7ec8\u7aef\u4e4b\u95f4\u76f8\u4e92\u901a\u4fe1\uff1b\u63d0\u4f9b\u591a\u76ee\u6807\u670d\u52a1\uff0c\u5373\u4e00\u4e2a\u62a5\u6587\u53ef\u4ee5\u540c\u65f6\u53d1\u9001\u5230\u591a\u4e2a\u76ee\u7684\u5730\u5740\uff1b\u5141\u8bb8\u5efa\u7acb\u6570\u636e\u4f20\u8f93\u7684\u4f18\u5148\u7ea7\uff0c\u4f7f\u4f18\u5148\u7ea7\u9ad8\u7684\u62a5\u6587\u4f18\u5148\u8f6c\u6362\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u4e8e\u6570\u636e\u8fdb\u5165\u4ea4\u6362\u7ed3\u70b9\u540e\u8981\u7ecf\u5386\u5b58\u50a8\u3001\u8f6c\u53d1\u8fd9\u4e00\u8fc7\u7a0b\uff0c\u4ece\u800c\u5f15\u8d77\u8f6c\u53d1\u65f6\u5ef6\uff0c\u540c\u65f6\u4e5f\u9020\u6210\u670d\u52a1\u5b9e\u65f6\u6027\u5dee\uff1b\u62a5\u6587\u4ea4\u6362\u53ea\u9002\u7528\u4e8e\u6570\u5b57\u4fe1\u53f7\uff1b\u6bcf\u4e2a\u7f51\u7edc\u8282\u70b9\u9700\u8981\u4e00\u5b9a\u5bb9\u91cf\u7684\u7f13\u51b2\u533a\uff0c\u6210\u672c\u9ad8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5206\u7ec4\u4ea4\u6362",children:"\u5206\u7ec4\u4ea4\u6362"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:["\u5206\u7ec4\u4ea4\u6362\uff08Packet Switching\uff0c\u4e5f\u79f0\u5305\u4ea4\u6362\uff09\u4ecd\u91c7\u7528\u5b58\u50a8-\u8f6c\u53d1\u4f20\u8f93\u65b9\u5f0f\uff0c\u4f46\u5c06\u4e00\u4e2a\u957f\u62a5\u6587\u5148\u5206\u5272\u4e3a\u82e5\u5e72\u4e2a\u8f83\u77ed\u7684\u5206\u7ec4\uff0c\u7136\u540e\u628a\u8fd9\u4e9b\u5206\u7ec4\u9010\u4e2a\u5730\u53d1\u9001\u51fa\u53bb\u3002",(0,i.jsxs)(e.strong,{children:["\u5206\u7ec4\u4ea4\u6362\u539f\u7406\u4e0e\u62a5\u6587\u4ea4\u6362\u7c7b\u4f3c\uff0c\u662f\u76ee\u524d\u5e94\u7528\u6700\u5e7f\u7684\u4ea4\u6362\u6280\u672f\uff0c\u5b83\u7ed3\u5408\u4e86\u7535\u8def\u4ea4\u6362\u548c\u62a5\u6587\u4ea4\u6362\u4e24\u8005\u7684\u4f18\u70b9\uff0c\u4f7f\u5176\u6027\u80fd\u8fbe\u5230\u6700\u4f18\u3002\u5206\u7ec4\u4ea4\u6362\u7684\u5b9e\u73b0\u65b9\u5f0f\u53c8\u5206\u4e3a\u4e24\u79cd\uff1a",(0,i.jsx)(e.strong,{children:"\u6570\u636e\u62a5\u5206\u7ec4\u4ea4\u6362"}),"\u548c"]}),"\u865a\u7535\u8def\u5206\u7ec4\u4ea4\u6362"]}),"\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6570\u636e\u62a5\uff08Datagram\uff09\u5206\u7ec4\u4ea4\u6362"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u4fe1\u524d\u4e0d\u9700\u8981\u5efa\u7acb\u903b\u8f91\u8fde\u63a5\uff0c\u6570\u636e\u5305\u53ef\u901a\u8fc7\u4e0d\u540c\u7684\u903b\u8f91\u94fe\u8def\u9001\u8fbe\u76ee\u7684\u4e3b\u673a\uff0c\u800c\u4e14\u4e0d\u540c\u6570\u636e\u5305\u5230\u8fbe\u987a\u5e8f\u662f\u65e0\u5e8f\u7684\uff0c\u5c5e\u4e8e\u65e0\u8fde\u63a5\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u865a\u7535\u8def\uff08Virtual Circuit\uff09\u5206\u7ec4\u4ea4"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u4fe1\u524d\u9700\u8981\u5efa\u7acb\u4e00\u6761\u903b\u8f91\u8fde\u63a5\uff0c\u6570\u636e\u5305\u901a\u8fc7\u4e00\u6761\u76f8\u540c\u7684\u903b\u8f91\u94fe\u8def\uff0c\u4fdd\u8bc1\u4e86\u6570\u636e\u4f20\u8f93\u7684\u987a\u5e8f\uff0c\u63d0\u4f9b\u4e86\u53ef\u9760\u7684\u670d\u52a1\uff0c\u5c5e\u4e8e\u9762\u5411\u8fde\u63a5\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u8fc7\u62a5\u6587\u4ea4\u6362\u7684\u4f18\u7f3a\u70b9\u5916\uff0c\u5206\u7ec4\u4ea4\u6362\u5728\u6b64\u57fa\u7840\u4e0a\u7684\u4f18\u7f3a\u70b9\u4e3a\u4ee5\u4e0b\u90e8\u5206\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u52a0\u901f\u4e86\u6570\u636e\u5728\u7f51\u7edc\u4e2d\u7684\u4f20\u8f93\uff1b\u7b80\u5316\u4e86\u5b58\u50a8\u7ba1\u7406\uff1b\u51cf\u5c11\u4e86\u51fa\u9519\u51e0\u7387\u548c\u91cd\u53d1\u6570\u636e\u91cf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e2a\u5206\u7ec4\u90fd\u8981\u6dfb\u52a0\u6e90\u3001\u76ee\u7684\u5730\u5740\u548c\u5206\u7ec4\u7f16\u53f7\u7b49\uff0c\u5f00\u9500\u5927\uff1b\u91c7\u7528\u6570\u636e\u62a5\u5206\u7ec4\u4ea4\u6362\u670d\u52a1\u65f6\uff0c\u53ef\u80fd\u51fa\u73b0\u5931\u5e8f\u3001\u4e22\u5931\u6216\u91cd\u65b0\u5206\u7ec4\u3002"}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},11151:(n,e,l)=>{l.d(e,{Z:()=>t,a:()=>c});var i=l(67294);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);