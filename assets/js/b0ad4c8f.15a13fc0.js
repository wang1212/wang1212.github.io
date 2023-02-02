"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[78139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),b=o,d=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"DOM-\u6587\u672c\u8282\u70b9",date:new Date("2016-05-24T21:50:00.000Z"),update:new Date("2016-05-24T21:50:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],description:"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"},l=void 0,i={permalink:"/Computer-Technology/Web/DOM/dom-textnode",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/DOM/dom-textnode.md",source:"@site/blog/Computer-Technology/Web/DOM/dom-textnode.md",title:"DOM-\u6587\u672c\u8282\u70b9",description:"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002",date:"2016-05-24T21:50:00.000Z",formattedDate:"2016\u5e745\u670824\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"Text Node",permalink:"/tags/text-node"}],readingTime:5.435,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u6587\u672c\u8282\u70b9",date:"2016-05-24T21:50:00.000Z",update:"2016-05-24T21:50:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],description:"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"},prevItem:{title:"DOM-\u52a0\u8f7d JavaScript",permalink:"/Computer-Technology/Web/DOM/dom-js"},nextItem:{title:"DOM-\u6587\u6863\u7247\u6bb5",permalink:"/Computer-Technology/Web/DOM/dom-fragment"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-24 21:50:00"))),(0,o.kt)("p",null,"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"))}u.isMDXComponent=!0}}]);