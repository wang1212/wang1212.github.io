"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[63003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,b=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(b,l(l({ref:t},m),{},{components:r})):n.createElement(b,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"DOM-\u8282\u70b9\u96c6\u5408",date:new Date("2016-05-17T22:30:00.000Z"),update:new Date("2016-05-17T22:30:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","NodeList"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","NodeList"],description:"\u5f53\u4ece\u6587\u6863\u6811\u4e2d\u9009\u53d6\u6210\u7ec4\u7684\u8282\u70b9\u6216\u8005\u4f7f\u7528\u9884\u5b9a\u4e49\u7684\u8282\u70b9\u96c6\u5408\u65f6\uff0c\u8fd9\u4e9b\u8282\u70b9\u90fd\u662f\u653e\u5728 NodeList \u6216\u8005\u4e00\u4e2a HTMLCollecton \u4e4b\u4e2d\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff08Array\uff09\u4e2d\u3002"},l=void 0,i={permalink:"/Computer-Technology/web-frontend/dom/dom-nodelist",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/web-frontend/dom/dom-nodelist.md",source:"@site/blog/Computer-Technology/web-frontend/dom/dom-nodelist.md",title:"DOM-\u8282\u70b9\u96c6\u5408",description:"\u5f53\u4ece\u6587\u6863\u6811\u4e2d\u9009\u53d6\u6210\u7ec4\u7684\u8282\u70b9\u6216\u8005\u4f7f\u7528\u9884\u5b9a\u4e49\u7684\u8282\u70b9\u96c6\u5408\u65f6\uff0c\u8fd9\u4e9b\u8282\u70b9\u90fd\u662f\u653e\u5728 NodeList \u6216\u8005\u4e00\u4e2a HTMLCollecton \u4e4b\u4e2d\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff08Array\uff09\u4e2d\u3002",date:"2016-05-17T22:30:00.000Z",formattedDate:"2016\u5e745\u670817\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"NodeList",permalink:"/tags/node-list"}],readingTime:4.58,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u8282\u70b9\u96c6\u5408",date:"2016-05-17T22:30:00.000Z",update:"2016-05-17T22:30:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","NodeList"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","NodeList"],description:"\u5f53\u4ece\u6587\u6863\u6811\u4e2d\u9009\u53d6\u6210\u7ec4\u7684\u8282\u70b9\u6216\u8005\u4f7f\u7528\u9884\u5b9a\u4e49\u7684\u8282\u70b9\u96c6\u5408\u65f6\uff0c\u8fd9\u4e9b\u8282\u70b9\u90fd\u662f\u653e\u5728 NodeList \u6216\u8005\u4e00\u4e2a HTMLCollecton \u4e4b\u4e2d\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff08Array\uff09\u4e2d\u3002"},prevItem:{title:"\u7f16\u8f91\u5668\uff1aSublime Text - Vim \u63d2\u4ef6",permalink:"/Computer-Technology/Tools/tools-sublime-vim"},nextItem:{title:"DOM-\u9009\u53d6\u5143\u7d20\u8282\u70b9",permalink:"/Computer-Technology/web-frontend/dom/dom-select"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-17 22:30:00"))),(0,o.kt)("p",null,"\u5f53\u4ece\u6587\u6863\u6811\u4e2d\u9009\u53d6\u6210\u7ec4\u7684\u8282\u70b9\u6216\u8005\u4f7f\u7528\u9884\u5b9a\u4e49\u7684\u8282\u70b9\u96c6\u5408\u65f6\uff0c\u8fd9\u4e9b\u8282\u70b9\u90fd\u662f\u653e\u5728 NodeList \u6216\u8005\u4e00\u4e2a HTMLCollecton \u4e4b\u4e2d\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff08Array\uff09\u4e2d\u3002"))}s.isMDXComponent=!0}}]);