"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[88469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,f=m["".concat(i,".").concat(g)]||m[g]||s[g]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"OSI \u4e0e TCP/IP \u53c2\u8003\u6a21\u578b",date:new Date("2016-06-17T17:39:00.000Z"),update:new Date("2016-06-17T17:39:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","OSI","TCP/IP"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","OSI","TCP/IP"],description:"\u76ee\u524d\u6d41\u884c\u7684\u4e24\u5927\u7f51\u7edc\u4f53\u7cfb\u7ed3\u6784\u662f OSI/RM \u548c TCP/IP \u53c2\u8003\u6a21\u578b\uff0c\u4ed6\u4eec\u5747\u662f\u5206\u5c42\u7ed3\u6784\u3002\u5206\u5c42\u662f\u4e3a\u4e86\u7b80\u5316\u95ee\u9898\uff0c\u964d\u4f4e\u7f51\u7edc\u8bbe\u8ba1\u590d\u6742\u6027\uff0c\u800c\u4e14\u5404\u5c42\u6b21\u7ed3\u6784\u76f8\u4e92\u72ec\u7acb\uff0c\u5b9e\u73b0\u7684\u529f\u80fd\u4e5f\u76f8\u5bf9\u72ec\u7acb\u3002\u5c42\u4e0e\u5c42\u4e4b\u95f4\u53ea\u5728\u5c42\u95f4\u63a5\u53e3\u5904\u5173\u8054\uff0c\u5c42\u95f4\u8026\u5408\u6700\u5c0f\u3002"},l=void 0,c={permalink:"/Computer-Technology/Protocol/protocol-osi",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Protocol/protocol-osi.md",source:"@site/blog/Computer-Technology/Protocol/protocol-osi.md",title:"OSI \u4e0e TCP/IP \u53c2\u8003\u6a21\u578b",description:"\u76ee\u524d\u6d41\u884c\u7684\u4e24\u5927\u7f51\u7edc\u4f53\u7cfb\u7ed3\u6784\u662f OSI/RM \u548c TCP/IP \u53c2\u8003\u6a21\u578b\uff0c\u4ed6\u4eec\u5747\u662f\u5206\u5c42\u7ed3\u6784\u3002\u5206\u5c42\u662f\u4e3a\u4e86\u7b80\u5316\u95ee\u9898\uff0c\u964d\u4f4e\u7f51\u7edc\u8bbe\u8ba1\u590d\u6742\u6027\uff0c\u800c\u4e14\u5404\u5c42\u6b21\u7ed3\u6784\u76f8\u4e92\u72ec\u7acb\uff0c\u5b9e\u73b0\u7684\u529f\u80fd\u4e5f\u76f8\u5bf9\u72ec\u7acb\u3002\u5c42\u4e0e\u5c42\u4e4b\u95f4\u53ea\u5728\u5c42\u95f4\u63a5\u53e3\u5904\u5173\u8054\uff0c\u5c42\u95f4\u8026\u5408\u6700\u5c0f\u3002",date:"2016-06-17T17:39:00.000Z",formattedDate:"2016\u5e746\u670817\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u534f\u8bae",permalink:"/tags/\u534f\u8bae"},{label:"OSI",permalink:"/tags/osi"},{label:"TCP/IP",permalink:"/tags/tcp-ip"}],readingTime:12.625,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"OSI \u4e0e TCP/IP \u53c2\u8003\u6a21\u578b",date:"2016-06-17T17:39:00.000Z",update:"2016-06-17T17:39:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","OSI","TCP/IP"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","OSI","TCP/IP"],description:"\u76ee\u524d\u6d41\u884c\u7684\u4e24\u5927\u7f51\u7edc\u4f53\u7cfb\u7ed3\u6784\u662f OSI/RM \u548c TCP/IP \u53c2\u8003\u6a21\u578b\uff0c\u4ed6\u4eec\u5747\u662f\u5206\u5c42\u7ed3\u6784\u3002\u5206\u5c42\u662f\u4e3a\u4e86\u7b80\u5316\u95ee\u9898\uff0c\u964d\u4f4e\u7f51\u7edc\u8bbe\u8ba1\u590d\u6742\u6027\uff0c\u800c\u4e14\u5404\u5c42\u6b21\u7ed3\u6784\u76f8\u4e92\u72ec\u7acb\uff0c\u5b9e\u73b0\u7684\u529f\u80fd\u4e5f\u76f8\u5bf9\u72ec\u7acb\u3002\u5c42\u4e0e\u5c42\u4e4b\u95f4\u53ea\u5728\u5c42\u95f4\u63a5\u53e3\u5904\u5173\u8054\uff0c\u5c42\u95f4\u8026\u5408\u6700\u5c0f\u3002"},prevItem:{title:"\u7f51\u7edc\u901a\u4fe1\u5173\u952e\u6982\u5ff5",permalink:"/Computer-Technology/Protocol/protocol-base"},nextItem:{title:"Web \u672c\u5730\u5b58\u50a8",permalink:"/Computer-Technology/Web/web-local-storage"}},i={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-06-17 17:39:00"))),(0,o.kt)("p",null,"\u76ee\u524d\u6d41\u884c\u7684\u4e24\u5927\u7f51\u7edc\u4f53\u7cfb\u7ed3\u6784\u662f OSI/RM \u548c TCP/IP \u53c2\u8003\u6a21\u578b\uff0c\u4ed6\u4eec\u5747\u662f\u5206\u5c42\u7ed3\u6784\u3002\u5206\u5c42\u662f\u4e3a\u4e86\u7b80\u5316\u95ee\u9898\uff0c\u964d\u4f4e\u7f51\u7edc\u8bbe\u8ba1\u590d\u6742\u6027\uff0c\u800c\u4e14\u5404\u5c42\u6b21\u7ed3\u6784\u76f8\u4e92\u72ec\u7acb\uff0c\u5b9e\u73b0\u7684\u529f\u80fd\u4e5f\u76f8\u5bf9\u72ec\u7acb\u3002\u5c42\u4e0e\u5c42\u4e4b\u95f4\u53ea\u5728\u5c42\u95f4\u63a5\u53e3\u5904\u5173\u8054\uff0c\u5c42\u95f4\u8026\u5408\u6700\u5c0f\u3002"))}s.isMDXComponent=!0}}]);