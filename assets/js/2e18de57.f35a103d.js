"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[55705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,f=u["".concat(c,".").concat(g)]||u[g]||s[g]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u6865\u63a5\u6a21\u5f0f\uff1a\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1",date:new Date("2022-06-12T22:22:00.000Z"),update:new Date("2022-06-12T22:22:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],description:"\u6700\u8fd1\u5728\u505a\u56fe\u8868\u7ec4\u4ef6\u5e93\u7684\u6280\u672f\u8c03\u7814\u7684\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\uff0c\u53c2\u8003\u4e86\u5f88\u591a\u5f00\u6e90\u5e93\u7684\u6e90\u7801\uff0c\u53d1\u73b0\u5176\u4e2d\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1\u5f88\u503c\u5f97\u5b66\u4e60\uff0c\u5982\u679c\u8981\u7528\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u90a3\u5927\u6982\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u4e86\u3002"},i=void 0,l={permalink:"/Computer-Technology/Program-Architecture-Design/bridge-mode-design-of-cross-platform-event-mechanism",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Program-Architecture-Design/bridge-mode-design-of-cross-platform-event-mechanism.md",source:"@site/blog/Computer-Technology/Program-Architecture-Design/bridge-mode-design-of-cross-platform-event-mechanism.md",title:"\u6865\u63a5\u6a21\u5f0f\uff1a\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1",description:"\u6700\u8fd1\u5728\u505a\u56fe\u8868\u7ec4\u4ef6\u5e93\u7684\u6280\u672f\u8c03\u7814\u7684\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\uff0c\u53c2\u8003\u4e86\u5f88\u591a\u5f00\u6e90\u5e93\u7684\u6e90\u7801\uff0c\u53d1\u73b0\u5176\u4e2d\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1\u5f88\u503c\u5f97\u5b66\u4e60\uff0c\u5982\u679c\u8981\u7528\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u90a3\u5927\u6982\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u4e86\u3002",date:"2022-06-12T22:22:00.000Z",formattedDate:"2022\u5e746\u670812\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1",permalink:"/tags/\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"}],readingTime:4.17,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u6865\u63a5\u6a21\u5f0f\uff1a\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1",date:"2022-06-12T22:22:00.000Z",update:"2022-06-12T22:22:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"],description:"\u6700\u8fd1\u5728\u505a\u56fe\u8868\u7ec4\u4ef6\u5e93\u7684\u6280\u672f\u8c03\u7814\u7684\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\uff0c\u53c2\u8003\u4e86\u5f88\u591a\u5f00\u6e90\u5e93\u7684\u6e90\u7801\uff0c\u53d1\u73b0\u5176\u4e2d\u8de8\u5e73\u53f0\u7684\u4e8b\u4ef6\u673a\u5236\u8bbe\u8ba1\u5f88\u503c\u5f97\u5b66\u4e60\uff0c\u5982\u679c\u8981\u7528\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u90a3\u5927\u6982\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u4e86\u3002"},prevItem:{title:"\u524d\u7aef\u5de5\u7a0b\u5316\uff1a\u5bf9\u4e8e\u6784\u5efa\u5de5\u5177\u94fe\u7684\u7b80\u5355\u601d\u8003",permalink:"/Computer-Technology/Web/tools-web-fee-toolchain"},nextItem:{title:"\u4ece\u8d1d\u585e\u5c14\u66f2\u7ebf\u7684\u8ba1\u7b97\u611f\u53d7\u6570\u5b66\u5efa\u6a21\u7684\u9b45\u529b",permalink:"/Tools/tools-animation-math"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2022-06-12 22:22:00"))),(0,o.kt)("p",null,"\u5bf9\u4e8e Web \u7684\u56fe\u8868\u7ec4\u4ef6\u5e93\u6765\u8bf4\uff0c\u4e00\u4e9b\u529f\u80fd\u6bd4\u8f83\u5f3a\u5927\u7684\u5f00\u6e90\u5e93\uff0c\u6e32\u67d3\u5c42\u53ef\u4ee5\u652f\u6301 DOM\u3001SVG\u3001Canvas\u3001WebGL \u7b49\u591a\u4e2a\u5e73\u53f0\u7684\u73af\u5883\uff0c\u800c\u56fe\u8868\u5e93\u7684\u5f88\u591a\u529f\u80fd\u7684\u5b9e\u73b0\u90fd\u548c\u6e32\u67d3\u5c42\u7d27\u5bc6\u76f8\u5173\u3002"),(0,o.kt)("p",null,"\u6700\u8fd1\uff0c\u5728\u53c2\u8003\u5b66\u4e60\u4e00\u4e9b\u5f00\u6e90\u7684\u56fe\u8868\u7ec4\u4ef6\u5e93\u65f6\uff0c\u53d1\u73b0\u5728\u8de8\u5e73\u53f0\u8bbe\u8ba1\u4e2d\uff0c\u4e8b\u4ef6\u673a\u5236\u7684\u5b9e\u73b0\u5f88\u6709\u610f\u601d\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\u4ee5\u6700\u7b80\u5316\u7684\u4ee3\u7801\u6765\u89e3\u91ca\u548c\u8bb0\u5f55\u4e00\u4e0b\u8fd9\u4e2a\u65b9\u6848\u3002\u5982\u679c\u8981\u7528\u7ecf\u5178\u7684\u8f6f\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u6765\u89e3\u91ca\uff0c\u5927\u6982\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6865\u63a5\u6a21\u5f0f"),"\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6865\u63a5\u6a21\u5f0f\uff08Bridge Pattern\uff09")," \u5c06\u4e00\u4e2a\u529f\u80fd\u7684\u5b9e\u73b0\u62c6\u5206\u4e3a\u62bd\u8c61\uff08Abstraction\uff09\u548c\u5b9e\u73b0\uff08Implementor\uff09\uff0c\u8ba9\u5176\u76f8\u4e92\u72ec\u7acb\u7684\u6269\u5c55\u548c\u5b9a\u4e49\uff0c\u501f\u52a9\u8be5\u6a21\u5f0f\u53ef\u4ee5\u8bbe\u8ba1\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684\u8f6f\u4ef6\u67b6\u6784\u3002"))}s.isMDXComponent=!0}}]);