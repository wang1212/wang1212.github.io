"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[26572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,f=s["".concat(u,".").concat(g)]||s[g]||m[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Linux-\u57fa\u7840",date:new Date("2016-05-29T15:34:00.000Z"),update:new Date("2018-10-13T14:11:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux"],description:"Linux \u662f\u5728\u505a\u4e00\u4e9b\u8f83\u4e3a\u5e95\u5c42\u7684\u5f00\u53d1\u5de5\u4f5c\u65f6\u7684\u5fc5\u8981\u5f00\u53d1\u73af\u5883\uff0c\u4e86\u89e3 Linux \u4e5f\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\u7684\u7406\u89e3\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u8fd9\u7bc7\u6587\u7ae0\u662f\u5bf9 Linux \u7684\u4e00\u4e9b\u57fa\u7840\u6982\u5ff5\u7684\u9610\u8ff0\u3002"},i=void 0,l={permalink:"/computer-technology/linux/linux-base",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/linux/linux-base.md",source:"@site/blog/computer-technology/linux/linux-base.md",title:"Linux-\u57fa\u7840",description:"Linux \u662f\u5728\u505a\u4e00\u4e9b\u8f83\u4e3a\u5e95\u5c42\u7684\u5f00\u53d1\u5de5\u4f5c\u65f6\u7684\u5fc5\u8981\u5f00\u53d1\u73af\u5883\uff0c\u4e86\u89e3 Linux \u4e5f\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\u7684\u7406\u89e3\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u8fd9\u7bc7\u6587\u7ae0\u662f\u5bf9 Linux \u7684\u4e00\u4e9b\u57fa\u7840\u6982\u5ff5\u7684\u9610\u8ff0\u3002",date:"2016-05-29T15:34:00.000Z",formattedDate:"2016\u5e745\u670829\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/tags/\u64cd\u4f5c\u7cfb\u7edf"},{label:"Linux",permalink:"/tags/linux"}],readingTime:24.92,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Linux-\u57fa\u7840",date:"2016-05-29T15:34:00.000Z",update:"2018-10-13T14:11:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux"],description:"Linux \u662f\u5728\u505a\u4e00\u4e9b\u8f83\u4e3a\u5e95\u5c42\u7684\u5f00\u53d1\u5de5\u4f5c\u65f6\u7684\u5fc5\u8981\u5f00\u53d1\u73af\u5883\uff0c\u4e86\u89e3 Linux \u4e5f\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\u7684\u7406\u89e3\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u8fd9\u7bc7\u6587\u7ae0\u662f\u5bf9 Linux \u7684\u4e00\u4e9b\u57fa\u7840\u6982\u5ff5\u7684\u9610\u8ff0\u3002"},prevItem:{title:"Web \u672c\u5730\u5b58\u50a8",permalink:"/computer-technology/web-frontend/web-local-storage"},nextItem:{title:"DOM-\u52a0\u8f7d JavaScript",permalink:"/computer-technology/web-frontend/dom/dom-js"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2018-10-13 14:11:00"))),(0,o.kt)("p",null,"Linux \u662f\u5728\u505a\u4e00\u4e9b\u8f83\u4e3a\u5e95\u5c42\u7684\u5f00\u53d1\u5de5\u4f5c\u65f6\u7684\u5fc5\u8981\u5f00\u53d1\u73af\u5883\uff0c\u4e86\u89e3 Linux \u4e5f\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\u7684\u7406\u89e3\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u8fd9\u7bc7\u6587\u7ae0\u662f\u5bf9 Linux \u7684\u4e00\u4e9b\u57fa\u7840\u6982\u5ff5\u7684\u9610\u8ff0\u3002"))}m.isMDXComponent=!0}}]);