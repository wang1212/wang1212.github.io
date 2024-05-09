"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[245],{50891:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=e(85893),r=e(11151);const a={title:"TCP \u4e0e UDP \u534f\u8bae",date:new Date("2016-06-20T17:21:00.000Z"),update:new Date("2016-06-20T17:21:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","TCP","UDP"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","TCP","UDP"],description:"\u4f20\u8f93\u5c42\u662f\u7f51\u7edc\u5206\u5c42\u6a21\u578b\u4e2d\u4e3e\u8db3\u8f7b\u91cd\u7684\u5c42\uff0c\u5b83\u662f\u5e95\u5c42\u901a\u4fe1\u5b50\u7f51\u4e0e\u9ad8\u5c42\u8d44\u6e90\u5b50\u7f51\u7684\u63a5\u53e3\u4e0e\u6865\u6881\uff0c\u63d0\u4f9b\u4e86\u9762\u5411\u8fde\u63a5\u7684\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff08Transmission Control Protocol\uff0cTCP\uff09\u548c\u65e0\u8fde\u63a5\u7684\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae\uff08User Datagram Protocol\uff0cUDP\uff09\uff0c\u8d1f\u8d23\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u6570\u636e\u4f20\u8f93\u670d\u52a1\u3002"},l=void 0,c={permalink:"/computer-technology/protocol/protocol-tcp-udp",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/protocol/protocol-tcp-udp.md",source:"@site/blog/computer-technology/protocol/protocol-tcp-udp.md",title:"TCP \u4e0e UDP \u534f\u8bae",description:"\u4f20\u8f93\u5c42\u662f\u7f51\u7edc\u5206\u5c42\u6a21\u578b\u4e2d\u4e3e\u8db3\u8f7b\u91cd\u7684\u5c42\uff0c\u5b83\u662f\u5e95\u5c42\u901a\u4fe1\u5b50\u7f51\u4e0e\u9ad8\u5c42\u8d44\u6e90\u5b50\u7f51\u7684\u63a5\u53e3\u4e0e\u6865\u6881\uff0c\u63d0\u4f9b\u4e86\u9762\u5411\u8fde\u63a5\u7684\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff08Transmission Control Protocol\uff0cTCP\uff09\u548c\u65e0\u8fde\u63a5\u7684\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae\uff08User Datagram Protocol\uff0cUDP\uff09\uff0c\u8d1f\u8d23\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u6570\u636e\u4f20\u8f93\u670d\u52a1\u3002",date:"2016-06-20T17:21:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u534f\u8bae",permalink:"/tags/\u534f\u8bae"},{label:"TCP",permalink:"/tags/tcp"},{label:"UDP",permalink:"/tags/udp"}],readingTime:14.14,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"TCP \u4e0e UDP \u534f\u8bae",date:"2016-06-20T17:21:00.000Z",update:"2016-06-20T17:21:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","TCP","UDP"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","TCP","UDP"],description:"\u4f20\u8f93\u5c42\u662f\u7f51\u7edc\u5206\u5c42\u6a21\u578b\u4e2d\u4e3e\u8db3\u8f7b\u91cd\u7684\u5c42\uff0c\u5b83\u662f\u5e95\u5c42\u901a\u4fe1\u5b50\u7f51\u4e0e\u9ad8\u5c42\u8d44\u6e90\u5b50\u7f51\u7684\u63a5\u53e3\u4e0e\u6865\u6881\uff0c\u63d0\u4f9b\u4e86\u9762\u5411\u8fde\u63a5\u7684\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff08Transmission Control Protocol\uff0cTCP\uff09\u548c\u65e0\u8fde\u63a5\u7684\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae\uff08User Datagram Protocol\uff0cUDP\uff09\uff0c\u8d1f\u8d23\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u6570\u636e\u4f20\u8f93\u670d\u52a1\u3002"},unlisted:!1,prevItem:{title:"IP \u534f\u8bae",permalink:"/computer-technology/protocol/protocol-ip"},nextItem:{title:"\u5c40\u57df\u7f51\uff08LAN\uff09\u4e0e\u5e7f\u57df\u7f51\uff08WAN\uff09",permalink:"/computer-technology/protocol/protocol-lan-wan"}},s={authorsImageUrls:[void 0]},i=[];function p(t){const o={blockquote:"blockquote",em:"em",p:"p",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-06-20 17:21:00"})}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"\u4f20\u8f93\u5c42\u662f\u7f51\u7edc\u5206\u5c42\u6a21\u578b\u4e2d\u4e3e\u8db3\u8f7b\u91cd\u7684\u5c42\uff0c\u5b83\u662f\u5e95\u5c42\u901a\u4fe1\u5b50\u7f51\u4e0e\u9ad8\u5c42\u8d44\u6e90\u5b50\u7f51\u7684\u63a5\u53e3\u4e0e\u6865\u6881\uff0c\u63d0\u4f9b\u4e86\u9762\u5411\u8fde\u63a5\u7684\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff08Transmission Control Protocol\uff0cTCP\uff09\u548c\u65e0\u8fde\u63a5\u7684\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae\uff08User Datagram Protocol\uff0cUDP\uff09\uff0c\u8d1f\u8d23\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u6570\u636e\u4f20\u8f93\u670d\u52a1\u3002"})]})}function m(t={}){const{wrapper:o}={...(0,r.a)(),...t.components};return o?(0,n.jsx)(o,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},11151:(t,o,e)=>{e.d(o,{Z:()=>c,a:()=>l});var n=e(67294);const r={},a=n.createContext(r);function l(t){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function c(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),n.createElement(a.Provider,{value:o},t.children)}}}]);