"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[59089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=m(r),s=o,b=g["".concat(i,".").concat(s)]||g[s]||u[s]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var m=2;m<a;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},40598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={title:"DOM-\u6587\u6863\u7247\u6bb5",date:new Date("2016-05-23T13:10:00.000Z"),update:new Date("2016-05-23T13:10:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],description:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002"},l=void 0,c={permalink:"/computer-technology/web-frontend/dom/dom-fragment",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/dom/dom-fragment.md",source:"@site/blog/computer-technology/web-frontend/dom/dom-fragment.md",title:"DOM-\u6587\u6863\u7247\u6bb5",description:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002",date:"2016-05-23T13:10:00.000Z",formattedDate:"2016\u5e745\u670823\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"Fragment",permalink:"/tags/fragment"}],readingTime:3.79,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u6587\u6863\u7247\u6bb5",date:"2016-05-23T13:10:00.000Z",update:"2016-05-23T13:10:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Fragment"],description:"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002"},prevItem:{title:"DOM-\u6587\u672c\u8282\u70b9",permalink:"/computer-technology/web-frontend/dom/dom-textnode"},nextItem:{title:"DOM-\u4e8b\u4ef6",permalink:"/computer-technology/web-frontend/dom/dom-event"}},i={authorsImageUrls:[void 0]},m=[],p={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-23 13:10:00"))),(0,o.kt)("p",null,"DOM \u64cd\u4f5c\u662f\u975e\u5e38\u6d88\u8017\u6027\u80fd\u7684\uff0c\u5982\u679c\u8981\u8fdb\u884c\u5927\u91cf\u7684 DOM \u64cd\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u5185\u5b58\u4e2d\u5148\u6784\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\u7136\u540e\u4e00\u6b21\u6027\u63d2\u5165 DOM \u6811\u3002"))}u.isMDXComponent=!0}}]);