"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(r),m=o,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},51530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Web \u5b57\u4f53\u52a0\u8f7d\u5bf9 DOM \u4f4d\u7f6e\u7684\u5f71\u54cd",date:new Date("2022-10-16T23:49:00.000Z"),update:new Date("2022-10-16T23:49:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b9e\u8df5\u6848\u4f8b"],description:"\u7531\u4e8e\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9 Web \u5b57\u4f53\uff0c\u4ea7\u751f\u4e86\u4e00\u4e2a\u6f5c\u5728\u7684\u7ebf\u4e0a\u95ee\u9898\uff0c\u82e6\u4e8e\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u4e00\u76f4\u6ca1\u6709\u8003\u8651\u5b57\u4f53\u52a0\u8f7d\u4f1a\u5bf9 DOM \u4f4d\u7f6e\u4ea7\u751f\u5f71\u54cd\uff0c\u6d6a\u8d39\u4e86\u5927\u91cf\u65f6\u95f4\u548c\u7cbe\u529b\u3002"},l=void 0,i={permalink:"/Computer-Technology/Web/web-tips-fonts",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/web-tips-fonts.md",source:"@site/blog/Computer-Technology/Web/web-tips-fonts.md",title:"Web \u5b57\u4f53\u52a0\u8f7d\u5bf9 DOM \u4f4d\u7f6e\u7684\u5f71\u54cd",description:"\u7531\u4e8e\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9 Web \u5b57\u4f53\uff0c\u4ea7\u751f\u4e86\u4e00\u4e2a\u6f5c\u5728\u7684\u7ebf\u4e0a\u95ee\u9898\uff0c\u82e6\u4e8e\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u4e00\u76f4\u6ca1\u6709\u8003\u8651\u5b57\u4f53\u52a0\u8f7d\u4f1a\u5bf9 DOM \u4f4d\u7f6e\u4ea7\u751f\u5f71\u54cd\uff0c\u6d6a\u8d39\u4e86\u5927\u91cf\u65f6\u95f4\u548c\u7cbe\u529b\u3002",date:"2022-10-16T23:49:00.000Z",formattedDate:"2022\u5e7410\u670816\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u5b57\u4f53\u52a0\u8f7d\u5bf9 DOM \u4f4d\u7f6e\u7684\u5f71\u54cd",date:"2022-10-16T23:49:00.000Z",update:"2022-10-16T23:49:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b9e\u8df5\u6848\u4f8b"],description:"\u7531\u4e8e\u4f7f\u7528\u4e86\u7b2c\u4e09\u65b9 Web \u5b57\u4f53\uff0c\u4ea7\u751f\u4e86\u4e00\u4e2a\u6f5c\u5728\u7684\u7ebf\u4e0a\u95ee\u9898\uff0c\u82e6\u4e8e\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u4e00\u76f4\u6ca1\u6709\u8003\u8651\u5b57\u4f53\u52a0\u8f7d\u4f1a\u5bf9 DOM \u4f4d\u7f6e\u4ea7\u751f\u5f71\u54cd\uff0c\u6d6a\u8d39\u4e86\u5927\u91cf\u65f6\u95f4\u548c\u7cbe\u529b\u3002"},prevItem:{title:"\u63a2\u7d22 Docusaurus \u7684\u8def\u7531\u5b9e\u73b0",permalink:"/Computer-Technology/Tools/tools-docusaurus"},nextItem:{title:"Web 3D \u5f00\u53d1\u5b9e\u8df5\uff1a3D \u6708\u7403\u7ec4\u4ef6",permalink:"/Computer-Technology/3D/web-3d-practical-case-1"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2022-10-16 23:49:00 "))),(0,o.kt)("p",null,"\u7531\u4e8e\u516c\u53f8\u7684\u4e1a\u52a1\u4f1a\u7528\u5230\u81ea\u5df1\u8bbe\u8ba1\u5e08\u5b9a\u5236\u7684 Web \u5b57\u4f53\uff0c\u6240\u4ee5\u4e00\u822c\u5728\u7ec4\u4ef6\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4f1a\u5229\u7528 CSS \u5f15\u7528\u8be5\u5b57\u4f53\uff08",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"},"@font-face"),"\uff09\uff0c\u524d\u6bb5\u65f6\u95f4\u53d1\u73b0\u4e00\u4e2a\u7ebf\u4e0a\u95ee\u9898\uff1a\u5728\u90e8\u5206 iOS \u673a\u578b\u4e0a\uff0cDOM \u5143\u7d20\u7684\u4f4d\u7f6e\u53d1\u751f\u4e86\u9519\u4f4d\u3002"))}s.isMDXComponent=!0}}]);