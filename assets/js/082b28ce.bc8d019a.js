"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[12728],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),s=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(r),g=n,k=c["".concat(i,".").concat(g)]||c[g]||u[g]||o;return r?a.createElement(k,p(p({ref:e},m),{},{components:r})):a.createElement(k,p({ref:e},m))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,p=new Array(o);p[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},78987:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u8c08\u8c08\u7b14\u8bb0\u8bb0\u5f55\u548c\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177",date:new Date("2023-07-22T23:00:00.000Z"),update:new Date("2023-07-22T23:00:00.000Z"),authors:"wang1212",tags:["\u5de5\u5177","\u7b14\u8bb0","\u77e5\u8bc6\u7ba1\u7406","\u968f\u7b14\u6742\u8c08"],keywords:["\u5de5\u5177","\u7b14\u8bb0","\u77e5\u8bc6\u7ba1\u7406","\u968f\u7b14\u6742\u8c08"],description:"\u5bf9\u4e8e\u5927\u90e8\u5206\u4eba\u6765\u8bf4\uff0c\u6709\u4e00\u4e2a\u9002\u5408\u81ea\u5df1\u9700\u6c42\uff0c\u540c\u65f6\u514d\u8d39\u53c8\u597d\u7528\u7684\u7b14\u8bb0\u5e94\u7528\u6216\u8005\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177\u662f\u5f88\u96be\u5f97\u7684\u3002"},p=void 0,l={permalink:"/2023/07/22/tools/notes-app",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/tools/2023-07-22-notes-app.md",source:"@site/blog/tools/2023-07-22-notes-app.md",title:"\u8c08\u8c08\u7b14\u8bb0\u8bb0\u5f55\u548c\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177",description:"\u5bf9\u4e8e\u5927\u90e8\u5206\u4eba\u6765\u8bf4\uff0c\u6709\u4e00\u4e2a\u9002\u5408\u81ea\u5df1\u9700\u6c42\uff0c\u540c\u65f6\u514d\u8d39\u53c8\u597d\u7528\u7684\u7b14\u8bb0\u5e94\u7528\u6216\u8005\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177\u662f\u5f88\u96be\u5f97\u7684\u3002",date:"2023-07-22T23:00:00.000Z",formattedDate:"2023\u5e747\u670822\u65e5",tags:[{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"\u7b14\u8bb0",permalink:"/tags/\u7b14\u8bb0"},{label:"\u77e5\u8bc6\u7ba1\u7406",permalink:"/tags/\u77e5\u8bc6\u7ba1\u7406"},{label:"\u968f\u7b14\u6742\u8c08",permalink:"/tags/\u968f\u7b14\u6742\u8c08"}],readingTime:6.98,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u8c08\u8c08\u7b14\u8bb0\u8bb0\u5f55\u548c\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177",date:"2023-07-22T23:00:00.000Z",update:"2023-07-22T23:00:00.000Z",authors:"wang1212",tags:["\u5de5\u5177","\u7b14\u8bb0","\u77e5\u8bc6\u7ba1\u7406","\u968f\u7b14\u6742\u8c08"],keywords:["\u5de5\u5177","\u7b14\u8bb0","\u77e5\u8bc6\u7ba1\u7406","\u968f\u7b14\u6742\u8c08"],description:"\u5bf9\u4e8e\u5927\u90e8\u5206\u4eba\u6765\u8bf4\uff0c\u6709\u4e00\u4e2a\u9002\u5408\u81ea\u5df1\u9700\u6c42\uff0c\u540c\u65f6\u514d\u8d39\u53c8\u597d\u7528\u7684\u7b14\u8bb0\u5e94\u7528\u6216\u8005\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177\u662f\u5f88\u96be\u5f97\u7684\u3002"},nextItem:{title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",permalink:"/2023/05/28/computer-technology/nodejs/nodejs-loader"}},i={authorsImageUrls:[void 0]},s=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:s};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2023-07-22 23:00:00"))),(0,n.kt)("p",null,"\u4e0d\u7ba1\u662f\u5728\u5b66\u6821\u8fd8\u662f\u5de5\u4f5c\u540e\uff0c\u8bb0\u5f55\u4e00\u76f4\u662f\u4e2a\u5f88\u597d\u7684\u4e60\u60ef\uff0c\u65b9\u4fbf\u79ef\u7d2f\u7ecf\u9a8c\u5e76\u9636\u6bb5\u6027\u8fdb\u884c\u56de\u987e\u603b\u7ed3\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5927\u90e8\u5206\u4eba\u6765\u8bf4\uff0c\u6709\u4e00\u4e2a\u9002\u5408\u81ea\u5df1\u9700\u6c42\uff0c\u540c\u65f6\u514d\u8d39\u53c8\u597d\u7528\u7684\u7b14\u8bb0\u5e94\u7528\u6216\u8005\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177\u662f\u5f88\u96be\u5f97\u7684\u3002"),(0,n.kt)("p",null,"\u4ece\u5927\u5b66\u5f00\u59cb\u5c31\u4e00\u76f4\u5728\u575a\u6301\u66f4\u65b0\u535a\u5ba2\uff0c\u671f\u95f4\u6709\u76f8\u5f53\u957f\u4e00\u6bb5\u65f6\u95f4\u535a\u5ba2\u51e0\u4e4e\u6ca1\u600e\u4e48\u66f4\u65b0\u8fc7\uff0c\u4e0d\u8fc7\u7ec8\u5f52\u8fd8\u662f\u575a\u6301\u4e0b\u6765\u4e86\u3002\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u53d1\u73b0\u8ba4\u771f\u5199\u4e00\u7bc7\u535a\u6587\u8017\u8d39\u7684\u65f6\u95f4\u6210\u672c\u592a\u9ad8\uff0c\u8981\u4e48\u53ea\u80fd\u5728\u5468\u672b\u62bd\u7a7a\uff0c\u8981\u4e48\u5c31\u65ad\u65ad\u7eed\u7eed\u51e0\u5929\u624d\u80fd\u5199\u5b8c\uff0c\u8fd9\u4e5f\u76f4\u63a5\u5bfc\u81f4\u575a\u6301\u66f4\u65b0\u535a\u5ba2\u7684\u96be\u5ea6\u52a0\u5927\u3002\u5176\u5b9e\u8fd9\u4ef6\u4e8b\u60c5\u7684\u672c\u8d28\u4e0d\u662f\u5bf9\u4e8e\u8bb0\u5f55\u8fd9\u4e2a\u884c\u4e3a\u672c\u8eab\u4ea7\u751f\u4e86\u61c8\u6020\uff0c\u800c\u662f\u6709\u5f88\u591a\u53ef\u4ee5\u7528\u6765\u8bb0\u5f55\u7684\u5c0f\u4e8b\uff0c\u4f46\u8981\u5c06\u5176\u53d1\u5e03\u6210\u4e00\u7bc7\u7bc7\u535a\u6587\u7684\u4ee3\u4ef7\u592a\u5927\uff0c\u8ffd\u6c42\u6548\u7387\u5c31\u5bb9\u6613\u5728\u8d28\u91cf\u4e0a\u5927\u6253\u6298\u6263\uff0c\u8fd8\u4e0d\u5982\u4e0d\u5199\u3002\u4ee5\u81f3\u4e8e\u73b0\u5728\u6bcf\u6bcf\u56de\u8fc7\u5934\u6765\u770b\uff0c\u79ef\u6512\u4e86\u5927\u91cf\u7684\u5f85\u5b8c\u6210\u7684\u5c0f\u4efb\u52a1\uff0c\u800c\u6574\u7406\u8fd9\u4e9b\u5c0f\u4efb\u52a1\u4e5f\u4e0d\u662f\u90a3\u4e48\u5bb9\u6613\u3002"),(0,n.kt)("p",null,"\u8bf4\u4e86\u8fd9\u4e48\u591a\uff0c\u95ee\u9898\u7684\u672c\u8d28\u5728\u4e8e\u5e73\u65f6\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u8bb0\u5f55\u7f3a\u4e4f\u4e00\u4e2a\u6bd4\u8f83\u6709\u6548\u7684\u7ba1\u7406\u5de5\u5177\u5e94\u7528\uff0c\u56e0\u4e3a\u4ee5\u524d\u90fd\u662f\u76f4\u63a5\u7528 Markdown \u7f16\u8f91\u5668\u548c\u6587\u4ef6\u5939\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u540c\u6b65\uff0c\u8fd8\u4f1a\u7528\u7f51\u6613\u6709\u9053\u4e91\u7b14\u8bb0\u8fd9\u7c7b\u8f6f\u4ef6\u8fdb\u884c\u8bb0\u5f55\uff0c\u4f46\u4e00\u76f4\u89c9\u5f97\u4e0d\u600e\u4e48\u597d\u7528\u3002"),(0,n.kt)("p",null,"\u6700\u5f00\u59cb\u4f7f\u7528\u7684\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://www.typora.io/"},"typora")," \u7684\u6d4b\u8bd5\u7248\uff0c\u56e0\u4e3a\u5176\u53ef\u4ee5\u514d\u8d39\u4f7f\u7528\uff0c\u540e\u6765\u5176\u6b63\u5f0f\u7248\u53d1\u5e03\u540e\u6536\u8d39\u4e86\u5c31\u5f03\u7528\u4e86\u3002\u6709\u5f88\u591a\u4eba\u8bf4\u53ef\u4ee5\u7528\u7834\u89e3\u7248\uff0c\u6211\u5012\u89c9\u5f97\u6ca1\u6709\u5fc5\u8981\uff0c\u5982\u6b64\u826f\u5fc3\u7684\u8f6f\u4ef6\uff0c\u4ed8\u4e0d\u8d77\u94b1\u5c31\u6362\u4e2a\u514d\u8d39\u7684\u5427\u3002\u540e\u6765\u6362\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://www.zettlr.com/"},"Zettlr"),"\uff0c\u7528\u4e86\u76f8\u5f53\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c\u5176\u529f\u80fd\u548c UI \u4ea4\u4e92\u4f53\u9a8c\u4e00\u76f4\u89c9\u5f97\u5f88\u522b\u626d\uff0c\u6709\u65f6\u5019\u89c9\u5f97\u751a\u81f3\u4e0d\u5982\u5728 VSCode \u91cc\u9762\u76f4\u63a5\u5199 Markdown \u6765\u5f97\u65b9\u4fbf\u3002\u540e\u6765\u53c8\u6539\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/marktext/marktext"},"MarkText"),"\uff0c\u4f53\u9a8c\u8981\u597d\u5f88\u591a\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u597d\u50cf\u7ef4\u62a4\u7684\u9891\u7387\u5f88\u4f4e\u4e86\u3002\u4ee5\u4e0a\u90fd\u53ea\u662f Markdown \u6587\u4ef6\u7f16\u8f91\u5668\uff0c\u540e\u6765\u5c31\u5f00\u59cb\u6162\u6162\u4e86\u89e3\u4e00\u4e9b\u7b14\u8bb0\u5e94\u7528\u4e86\u3002"),(0,n.kt)("p",null,"Notable\u3001VNote\u3001Anki \u8fd9\u4e9b\u7b80\u5355\u7684\u7b14\u8bb0\u5e94\u7528\u90fd\u4e86\u89e3\u8fc7\uff0c\u4f46\u59cb\u7ec8\u89c9\u5f97\u4e0d\u662f\u81ea\u5df1\u60f3\u8981\u7684\u4e1c\u897f\u3002\u540e\u6765\u4e86\u89e3\u5230\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://joplinapp.org/"},"Joplin"),"\uff0c\u53d1\u73b0\u5176\u6bd4\u8f83\u5951\u5408\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u7b80\u5355\u4f7f\u7528\u4e86\u4e4b\u540e\uff0c\u53d1\u73b0\u5176\u540c\u6b65\u529f\u80fd\u4f7f\u7528\u8d77\u6765\u592a\u9ebb\u70e6\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u5b83\u7ec6\u8282\u4e0a\u7684\u95ee\u9898\u4e0d\u662f\u5f88\u5408\u610f\uff0c\u5c31\u653e\u5f03\u957f\u671f\u4f7f\u7528\u4e86\u3002\u5728\u8fd9\u671f\u95f4\uff0c\u8fd8\u4e86\u89e3\u8fc7\u4e00\u4e2a\u5f00\u6e90\u7684\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zadam/trilium"},"Trilium Notes"),"\uff0c\u5176\u529f\u80fd\u5f02\u5e38\u5f3a\u5927\uff0c\u4f46\u4e5f\u76f8\u5f53\u590d\u6742\uff0c\u4e0a\u624b\u6210\u672c\u592a\u9ad8\uff0c\u4e00\u76f4\u6ca1\u600e\u4e48\u6709\u65f6\u95f4\u53bb\u4ed4\u7ec6\u7814\u7a76\uff0c\u800c\u4e14\u4e5f\u4e0d\u652f\u6301\u4e2d\u6587\uff0c\u770b\u4f5c\u8005\u7684\u610f\u601d\u77ed\u671f\u5185\u4e5f\u4e0d\u6253\u7b97\u652f\u6301\u3002\u6298\u817e\u4e86\u4e00\u5708\u540e\uff0c\u8fd8\u662f\u6682\u65f6\u56de\u5230 Markdown \u7f16\u8f91\u5668\u4e86\u3002"),(0,n.kt)("p",null,"\u76f4\u5230\u8fd1\u671f\uff0c\u5728\u770b ThoughtWorks Technology Radar \u65f6\uff0c\u4e0d\u7ecf\u610f\u770b\u5230\u535a\u6587\u91cc\u63d0\u5230\u4e86\u56e2\u961f\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177\uff0c\u5176\u4e2d\u7b80\u5355\u5bf9\u6bd4\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://obsidian.md/"},"Obsidian")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://logseq.com/"},"Logseq")," \u8fd9\u4e24\u4e2a\u5de5\u5177\uff0c\u4e00\u65f6\u95f4\u7adf\u5f15\u8d77\u4e86\u6211\u7684\u5174\u8da3\u3002\u77e5\u8bc6\u56fe\u8c31\u8fd9\u4e2a\u6982\u5ff5\u8fd9\u51e0\u5e74\u542c\u7684\u6bd4\u8f83\u591a\uff0c\u4f46\u4ece\u6ca1\u60f3\u8fc7\u4e2a\u4eba\u7b14\u8bb0\u8bb0\u5f55\u548c\u8fd9\u4e2a\u4f1a\u4ea7\u751f\u4ec0\u4e48\u5173\u8054\u3002\u5728\u7b80\u5355\u7684\u4e86\u89e3\u4e86\u8fd9\u4e24\u6b3e\u5de5\u5177\u5e94\u7528\u540e\uff0c\u5c31\u8054\u60f3\u5230\u4e86 Trilium Notes\uff0c\u4e0d\u540c\u7684\u662f\uff0c\u524d\u4e24\u8005\u53ef\u80fd\u4e0a\u624b\u6210\u672c\u4f4e\u4e00\u4e9b\uff0c\u7528\u6237\u4f53\u9a8c\u5e94\u8be5\u4e5f\u4f1a\u66f4\u597d\u4e00\u4e9b\u3002\u9042\u6253\u7b97\u4e0b\u8f7d\u5b89\u88c5\u8bd5\u7528\u4e00\u4e0b\uff0c\u5728\u7b80\u5355\u7684\u8bd5\u7528\u8fc7\u540e\uff0c\u53d1\u73b0 Logseq \u8fd9\u4e2a\u5e94\u7528\u6bd4\u8f83\u597d\u7528\uff0c\u800c\u4e14\u4e5f\u662f\u4e2a\u5f00\u6e90\u793e\u533a\u7ef4\u62a4\u7684\u8f6f\u4ef6\uff0c\u5bf9\u4e8e\u4e00\u76f4\u504f\u7231\u4e8e\u5f00\u6e90\u8f6f\u4ef6\u7684\u6211\u6765\u8bf4\u6700\u5408\u9002\u4e0d\u8fc7\u4e86\u3002"),(0,n.kt)("p",null,"Obsidian \u662f\u4e00\u4e2a\u5546\u4e1a\u8f6f\u4ef6\uff0c\u4f46\u5bf9\u4e2a\u4eba\u7528\u6237\u514d\u8d39\uff0c\u4e5f\u63d0\u4f9b\u4e00\u4e9b\u6536\u8d39\u7684\u589e\u503c\u670d\u52a1\uff0c\u7b80\u5355\u8c03\u7814\u8fc7\u540e\u53d1\u73b0\u7528\u6237\u7fa4\u5e94\u8be5\u4e5f\u4e0d\u5c11\uff0c\u800c\u4e14\u53e3\u7891\u4e5f\u5f88\u597d\uff0c\u4f46\u6211\u5012\u4e0d\u600e\u4e48\u559c\u6b22\u5728\u4e2a\u4eba\u7684\u4e8b\u60c5\u4e0a\u7528\u4e00\u4e9b\u5546\u4e1a\u8f6f\u4ef6\u3002",(0,n.kt)("strong",{parentName:"p"},"Obsidian \u4e0e Logseq \u6709\u4e00\u4e2a\u5f88\u5927\u7684\u4e0d\u540c\u70b9\u5728\u4e8e\uff0c\u524d\u8005\u662f\u4ee5\u5927\u5bb6\u719f\u6089\u7684\u6587\u4ef6\u5939\u5f62\u5f0f\u7ba1\u7406\u7b14\u8bb0\u7684\uff0c\u4f46\u540e\u8005\u5374\u662f\u4ee5\u5757\u7684\u5f62\u5f0f\u548c\u94fe\u63a5\u5f15\u7528\u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u7b14\u8bb0\uff0c\u867d\u7136\u5b83\u4eec\u90fd\u662f\u57fa\u4e8e\u56fe\u6570\u636e\u5e93\u7684\u3002"),"\u5728\u4e00\u76f4\u5199\u535a\u5ba2\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u8fc7\u57fa\u4e8e\u6587\u4ef6\u5939\u7ba1\u7406\u7684\u6587\u7ae0\uff0c\u6709\u65f6\u5019\u5f88\u96be\u505a\u6587\u4ef6\u5939\u5206\u7c7b\uff0c\u800c Logseq \u8fd9\u79cd\u6a21\u5f0f\u5c31\u611f\u89c9\u5f88\u9002\u5408\uff0c\u5c24\u5176\u662f\u8bb0\u5f55\u5e73\u65f6\u4e00\u4e9b\u96f6\u788e\u7684\u4e8b\u60c5\u7684\u65f6\u5019\u3002\u5728\u4f7f\u7528\u4e86\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u4e5f\u4e86\u89e3\u4e86\u4e00\u4e9b\u5176\u5b83\u4eba\u4f7f\u7528\u540e\u7684\u5bf9\u6bd4\u4f53\u9a8c\u548c\u603b\u7ed3\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u53d1\u73b0\u50cf Logseq \u8fd9\u79cd\u57fa\u4e8e\u5757\u7684\u6a21\u5f0f\uff0c\u5199\u4ee5\u524d\u90a3\u79cd\u5177\u6709\u4e0a\u4e0b\u6587\u7684\u5b8c\u6574\u7684\u4e00\u7bc7\u6587\u7ae0\u5012\u4e0d\u662f\u90a3\u4e48\u5bb9\u6613\u3002")),(0,n.kt)("p",null,"\u6700\u7ec8\uff0c\u5728\u6df1\u5ea6\u4f7f\u7528\u540e\uff0c\u53d1\u73b0 Logseq \u53ef\u4ee5\u89e3\u51b3\u4ee5\u524d\u96f6\u6563\u7684\u77e5\u8bc6\u8bb0\u5f55\u4e0d\u597d\u7ba1\u7406\u7684\u95ee\u9898\uff0c\u535a\u5ba2\u53ef\u4ee5\u7ee7\u7eed\u575a\u6301\u66f4\u65b0\uff0c\u535a\u6587\u50cf\u662f\u5bf9\u5e73\u65f6\u8bb0\u5f55\u7684\u4e00\u4e9b\u77e5\u8bc6\u7684\u4e00\u4e2a\u5168\u65b9\u4f4d\u7684\u603b\u7ed3\uff0c\u66f4\u5177\u6709\u610f\u4e49\u3002\u53e6\u4e00\u65b9\u9762\uff0cLogseq \u81ea\u8eab\u7684\u529f\u80fd\u4ee5\u53ca\u63d2\u4ef6\u63d0\u4f9b\u7684\u4e00\u4e9b\u529f\u80fd\u5f88\u65b9\u4fbf\uff0c\u4f8b\u5982\u7ed8\u56fe\u3001\u4efb\u52a1\u7ba1\u7406\u7b49\u7b49\uff0c\u8fd9\u4e9b\u90fd\u662f\u5e73\u65f6\u8bb0\u5f55\u4e1c\u897f\u6216\u8005\u505a\u89c4\u5212\u5f88\u5e38\u7528\u7684\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.typora.io/"},"https://www.typora.io/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zettlr.com/"},"https://www.zettlr.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/marktext/marktext"},"https://github.com/marktext/marktext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://joplinapp.org/"},"https://joplinapp.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://obsidian.md/"},"https://obsidian.md/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://logseq.com/"},"https://logseq.com/"))))}u.isMDXComponent=!0}}]);