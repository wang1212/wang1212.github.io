"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[55267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(r),m=o,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},22013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",date:new Date("2021-08-15T14:54:00.000Z"),update:new Date("2021-08-15T14:54:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],description:"\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002"},p=void 0,l={permalink:"/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer/index.md",source:"@site/blog/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer/index.md",title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",description:"\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002",date:"2021-08-15T14:54:00.000Z",formattedDate:"2021\u5e748\u670815\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"\u6d4b\u8bd5",permalink:"/tags/\u6d4b\u8bd5"},{label:"Web",permalink:"/tags/web"},{label:"Jest",permalink:"/tags/jest"},{label:"Puppeteer",permalink:"/tags/puppeteer"},{label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:12.605,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",date:"2021-08-15T14:54:00.000Z",update:"2021-08-15T14:54:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],description:"\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002"},prevItem:{title:"\u9ed1\u5ba2\u4e0e\u753b\u5bb6",permalink:"/2021/08/22/life/reading/"},nextItem:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",permalink:"/computer-technology/web-frontend/web-performance-core-concepts"}},i={authorsImageUrls:[void 0]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2021-08-15 14:54:00"))),(0,o.kt)("p",null,"\u6d4b\u8bd5\u4e3a\u8f6f\u4ef6\u7684\u7a33\u5b9a\u548c\u5b8c\u5584\u63d0\u4f9b\u4e86\u5fc5\u8981\u7684\u652f\u6301\uff0cWeb \u524d\u7aef\u5f00\u53d1\u9886\u57df\u76f8\u6bd4\u4e8e\u505a\u5355\u5143\u6d4b\u8bd5\uff0c\u7aef\u5230\u7aef\u6d4b\u8bd5\u66f4\u6709\u610f\u4e49\u548c\u4ef7\u503c\u3002\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002"))}u.isMDXComponent=!0}}]);