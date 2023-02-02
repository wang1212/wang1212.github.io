"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[22525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),b=c(r),s=o,g=b["".concat(p,".").concat(s)]||b[s]||u[s]||a;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},62232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09",date:new Date("2016-05-15T12:02:00.000Z"),update:new Date("2016-05-15T12:02:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","BOM"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","BOM"],description:"\u5728\u7f51\u9875\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4e13\u6ce8\u4e8e\u5185\u5bb9\u7684\u8bbe\u8ba1\uff0c\u800c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0d\u540c\u7a97\u53e3\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u5b66\u4e60\u5982\u4f55\u8fd0\u7528 BOM \u4e2d\u7684\u8bb8\u591a\u6838\u5fc3\u5bf9\u8c61\uff0c\u53ca\u5176\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"},l=void 0,i={permalink:"/Computer-Technology/Web/DOM/dom-bom",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/DOM/dom-bom.md",source:"@site/blog/Computer-Technology/Web/DOM/dom-bom.md",title:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09",description:"\u5728\u7f51\u9875\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4e13\u6ce8\u4e8e\u5185\u5bb9\u7684\u8bbe\u8ba1\uff0c\u800c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0d\u540c\u7a97\u53e3\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u5b66\u4e60\u5982\u4f55\u8fd0\u7528 BOM \u4e2d\u7684\u8bb8\u591a\u6838\u5fc3\u5bf9\u8c61\uff0c\u53ca\u5176\u5c5e\u6027\u3001\u65b9\u6cd5\u3002",date:"2016-05-15T12:02:00.000Z",formattedDate:"2016\u5e745\u670815\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"BOM",permalink:"/tags/bom"}],readingTime:8.695,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09",date:"2016-05-15T12:02:00.000Z",update:"2016-05-15T12:02:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","BOM"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","BOM"],description:"\u5728\u7f51\u9875\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4e13\u6ce8\u4e8e\u5185\u5bb9\u7684\u8bbe\u8ba1\uff0c\u800c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0d\u540c\u7a97\u53e3\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u5b66\u4e60\u5982\u4f55\u8fd0\u7528 BOM \u4e2d\u7684\u8bb8\u591a\u6838\u5fc3\u5bf9\u8c61\uff0c\u53ca\u5176\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"},prevItem:{title:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09",permalink:"/Computer-Technology/Web/DOM/dom"},nextItem:{title:"CPU \u7684\u4e03\u79cd\u5bfb\u5740\u65b9\u5f0f",permalink:"/Computer-Technology/Computer/computer-cpu-addressing-mode"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-15 12:02:00"))),(0,o.kt)("p",null,"\u5728\u7f51\u9875\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4e13\u6ce8\u4e8e\u5185\u5bb9\u7684\u8bbe\u8ba1\uff0c\u800c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0d\u540c\u7a97\u53e3\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u5b66\u4e60\u5982\u4f55\u8fd0\u7528 BOM \u4e2d\u7684\u8bb8\u591a\u6838\u5fc3\u5bf9\u8c61\uff0c\u53ca\u5176\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"))}u.isMDXComponent=!0}}]);