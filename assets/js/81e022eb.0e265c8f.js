"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[27204],{6410:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var i=t(85893),o=t(11151);const r={title:"Nginx \u914d\u7f6e",date:new Date("2018-03-15T12:38:00.000Z"),update:new Date("2020-12-02T01:19:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u670d\u52a1\u5668","Nginx","\u914d\u7f6e"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u670d\u52a1\u5668","Nginx","\u914d\u7f6e"],description:"Nginx \u4f5c\u4e3a\u4e00\u4e2a\u8f7b\u91cf\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\uff0c\u8fd1\u5e74\u6765\u9887\u53d7\u6b22\u8fce\uff0c\u65e0\u8bba\u662f\u751f\u4ea7\u73af\u5883\u8fd8\u662f\u5f00\u53d1\u73af\u5883\u90fd\u6709\u5176\u53d1\u6325\u4f5c\u7528\u7684\u5730\u65b9\uff0c\u5176\u914d\u7f6e\u6587\u4ef6\u76f8\u5bf9\u6765\u8bf4\u8fd8\u662f\u8f83\u4e3a\u7b80\u5355\u7684\u3002\u800c\u4e14\uff0c\u73b0\u5728 nginx \u4e5f\u652f\u6301 Windows \u73af\u5883\u4e86\uff0c\u5229\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u4e0d\u540c\u7684\u9700\u6c42\u3002"},a=void 0,s={permalink:"/computer-technology/nginx/nginx-config",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/nginx/nginx-config.md",source:"@site/blog/computer-technology/nginx/nginx-config.md",title:"Nginx \u914d\u7f6e",description:"Nginx \u4f5c\u4e3a\u4e00\u4e2a\u8f7b\u91cf\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\uff0c\u8fd1\u5e74\u6765\u9887\u53d7\u6b22\u8fce\uff0c\u65e0\u8bba\u662f\u751f\u4ea7\u73af\u5883\u8fd8\u662f\u5f00\u53d1\u73af\u5883\u90fd\u6709\u5176\u53d1\u6325\u4f5c\u7528\u7684\u5730\u65b9\uff0c\u5176\u914d\u7f6e\u6587\u4ef6\u76f8\u5bf9\u6765\u8bf4\u8fd8\u662f\u8f83\u4e3a\u7b80\u5355\u7684\u3002\u800c\u4e14\uff0c\u73b0\u5728 nginx \u4e5f\u652f\u6301 Windows \u73af\u5883\u4e86\uff0c\u5229\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u4e0d\u540c\u7684\u9700\u6c42\u3002",date:"2018-03-15T12:38:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u670d\u52a1\u5668",permalink:"/tags/\u670d\u52a1\u5668"},{label:"Nginx",permalink:"/tags/nginx"},{label:"\u914d\u7f6e",permalink:"/tags/\u914d\u7f6e"}],readingTime:16.905,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Nginx \u914d\u7f6e",date:"2018-03-15T12:38:00.000Z",update:"2020-12-02T01:19:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u670d\u52a1\u5668","Nginx","\u914d\u7f6e"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u670d\u52a1\u5668","Nginx","\u914d\u7f6e"],description:"Nginx \u4f5c\u4e3a\u4e00\u4e2a\u8f7b\u91cf\u3001\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\uff0c\u8fd1\u5e74\u6765\u9887\u53d7\u6b22\u8fce\uff0c\u65e0\u8bba\u662f\u751f\u4ea7\u73af\u5883\u8fd8\u662f\u5f00\u53d1\u73af\u5883\u90fd\u6709\u5176\u53d1\u6325\u4f5c\u7528\u7684\u5730\u65b9\uff0c\u5176\u914d\u7f6e\u6587\u4ef6\u76f8\u5bf9\u6765\u8bf4\u8fd8\u662f\u8f83\u4e3a\u7b80\u5355\u7684\u3002\u800c\u4e14\uff0c\u73b0\u5728 nginx \u4e5f\u652f\u6301 Windows \u73af\u5883\u4e86\uff0c\u5229\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u4e0d\u540c\u7684\u9700\u6c42\u3002"},unlisted:!1,prevItem:{title:"Web \u524d\u7aef\u67b6\u6784\u8bbe\u8ba1",permalink:"/computer-technology/web-frontend/web-front-end-architecture"},nextItem:{title:"\u521d\u8bc6\u7ecf\u6d4e\u5b66",permalink:"/finance-economics/economics-preliminary-understanding"}},c={authorsImageUrls:[void 0]},g=[];function l(n){const e={a:"a",blockquote:"blockquote",em:"em",p:"p",strong:"strong",u:"u",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2020-12-02 01:19:00"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.u,{children:"\u5efa\u8bae\u4e3b\u8981\u53c2\u8003\u5b98\u7f51\u82f1\u6587\u6587\u6863\u3002"})})}),"\n",(0,i.jsx)(e.p,{children:"\u5177\u4f53\u6307\u4ee4\u76f4\u63a5\u53ef\u4ee5\u5728\u5b98\u7f51\u6587\u6863\u7684 Alphabetical index of directives\uff08\u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5217\u7684\u6307\u4ee4\u7d22\u5f15\uff09\u4e2d\u641c\u7d22\u5373\u53ef\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5b98\u65b9\u6587\u6863\uff1a",(0,i.jsx)(e.a,{href:"http://nginx.org/en/docs/",children:"http://nginx.org/en/docs/"})]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>a});var i=t(67294);const o={},r=i.createContext(o);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);