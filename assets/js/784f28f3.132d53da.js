"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[52843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>b,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=i(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},b),{},{components:r})):n.createElement(f,l({ref:t},b))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},57357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",date:new Date("2021-07-19T00:51:00.000Z"),update:new Date("2021-07-24T21:56:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],description:"\u5728\u4e00\u4e9b\u8f83\u4e3a\u590d\u6742\u7684 Web \u5e94\u7528\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u74f6\u9888\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6025\u5267\u4e0b\u964d\uff0c\u505a\u4f18\u5316\u4e4b\u524d\u66f4\u5e94\u8be5\u4e86\u89e3\u4e00\u4e0b\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u4ece\u800c\u5728\u51fa\u95ee\u9898\u65f6\u786e\u5b9a\u4f18\u5316\u8def\u5f84\u3002"},l=void 0,p={permalink:"/Computer-Technology/Web/web-performance-core-concepts",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/web-performance-core-concepts.md",source:"@site/blog/Computer-Technology/Web/web-performance-core-concepts.md",title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",description:"\u5728\u4e00\u4e9b\u8f83\u4e3a\u590d\u6742\u7684 Web \u5e94\u7528\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u74f6\u9888\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6025\u5267\u4e0b\u964d\uff0c\u505a\u4f18\u5316\u4e4b\u524d\u66f4\u5e94\u8be5\u4e86\u89e3\u4e00\u4e0b\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u4ece\u800c\u5728\u51fa\u95ee\u9898\u65f6\u786e\u5b9a\u4f18\u5316\u8def\u5f84\u3002",date:"2021-07-19T00:51:00.000Z",formattedDate:"2021\u5e747\u670819\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"},{label:"\u6838\u5fc3\u6982\u5ff5",permalink:"/tags/\u6838\u5fc3\u6982\u5ff5"}],readingTime:14.39,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",date:"2021-07-19T00:51:00.000Z",update:"2021-07-24T21:56:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],description:"\u5728\u4e00\u4e9b\u8f83\u4e3a\u590d\u6742\u7684 Web \u5e94\u7528\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u74f6\u9888\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6025\u5267\u4e0b\u964d\uff0c\u505a\u4f18\u5316\u4e4b\u524d\u66f4\u5e94\u8be5\u4e86\u89e3\u4e00\u4e0b\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u4ece\u800c\u5728\u51fa\u95ee\u9898\u65f6\u786e\u5b9a\u4f18\u5316\u8def\u5f84\u3002"},prevItem:{title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",permalink:"/Computer-Technology/Web/tools-web-fee-test-with-jest-puppeteer"},nextItem:{title:"\u5bf9\u7b2c\u4e00\u4efd\u5de5\u4f5c\u751f\u6d3b\u7684\u56de\u987e",permalink:"/Life/2021-life-work-review"}},c={authorsImageUrls:[void 0]},i=[],b={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2021-07-24 21:56:00"))),(0,o.kt)("p",null,"\u8bf4\u5230 Web \u7684\u6027\u80fd\u4f18\u5316\uff0c\u53ef\u80fd\u5f88\u591a\u65f6\u5019\u6211\u4eec\u91c7\u53d6\u4e86\u4e00\u4e9b\u63aa\u65bd\uff0c\u770b\u5230\u4e86\u8089\u773c\u53ef\u89c1\u7684\u6539\u8fdb\uff0c\u5982\u679c\u6211\u4eec\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u6d4b\u91cf\uff0c\u786e\u5b9a\u6211\u4eec\u6539\u8fdb\u7684\u6548\u7387\uff08\u767e\u5206\u6bd4\uff09\u662f\u4e0d\u662f\u4f1a\u66f4\u6709\u610f\u4e49\uff1f\u6362\u53e5\u8bdd\u8bf4\uff0c\u5982\u679c\u6211\u4eec\u4e86\u89e3\u6027\u80fd\u74f6\u9888\u53ef\u80fd\u53d1\u751f\u7684\u4f4d\u7f6e\uff0c\u8861\u91cf\u7528\u6237\u4f53\u9a8c\u597d\u574f\u7684\u6307\u6807\uff0c\u505a\u5230\u5b9e\u65f6\u8ffd\u8e2a\u6027\u80fd\u53d8\u5316\uff0c\u6211\u4eec\u662f\u4e0d\u662f\u53ef\u4ee5\u66f4\u8fc5\u901f\u7684\u91c7\u53d6\u4f18\u5316\u63aa\u65bd\uff1f\u5728\u5e94\u7528\u4e0a\u7ebf\u524d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u505a\u4e00\u4e9b\u4f4e\u6210\u672c\u800c\u6709\u9ad8\u6536\u76ca\u7684\u4f18\u5316\u5de5\u4f5c\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4e00\u4e0b Web \u6027\u80fd\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\u548c\u76f8\u5173\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u8c37\u6b4c\u4f5c\u4e3a\u529b\u63a8 Web \u6280\u672f\u7684\u79d1\u6280\u5de8\u5934\uff0c\u4e0d\u4ec5\u63d0\u4f9b\u4e86\u51fa\u8272\u7684 Chrome DevTools\uff0c\u66f4\u662f\u8d21\u732e\u4e86\u9ad8\u8d28\u91cf\u7684\u5f00\u53d1\u6587\u6863\uff0c\u4e3a\u4e1a\u754c\u5f15\u8fdb\u4e86\u4f17\u591a\u5148\u8fdb\u7684\u7406\u5ff5\uff0c\u5148\u6765\u62dc\u8bfb\u4e00\u4e0b\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0\uff0c\u641e\u660e\u767d\u4e3a\u4f55\u6211\u4eec\u9700\u8981\u5bf9 Web \u7f51\u7ad9\u505a\u6781\u81f4\u7684\u4f18\u5316\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://web.dev/why-speed-matters/"},"Why does speed matter?"))))}u.isMDXComponent=!0}}]);