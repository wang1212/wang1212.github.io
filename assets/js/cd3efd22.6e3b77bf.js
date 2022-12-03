"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,g=u["".concat(c,".").concat(b)]||u[b]||s[b]||a;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Web \u524d\u7aef\u8de8\u57df\u8bbf\u95ee",date:new Date("2016-08-10T15:18:00.000Z"),update:new Date("2016-08-10T15:18:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],description:"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002"},l=void 0,i={permalink:"/Computer-Technology/Web/web-cross-domain",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/web-cross-domain.md",source:"@site/blog/Computer-Technology/Web/web-cross-domain.md",title:"Web \u524d\u7aef\u8de8\u57df\u8bbf\u95ee",description:"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002",date:"2016-08-10T15:18:00.000Z",formattedDate:"2016\u5e748\u670810\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"\u5b89\u5168",permalink:"/tags/\u5b89\u5168"},{label:"\u8de8\u57df",permalink:"/tags/\u8de8\u57df"}],readingTime:9.475,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u524d\u7aef\u8de8\u57df\u8bbf\u95ee",date:"2016-08-10T15:18:00.000Z",update:"2016-08-10T15:18:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],description:"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002"},prevItem:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u5de5\u5177\u4e0e\u6280\u5de7",permalink:"/Computer-Technology/Web/web-performance-optimize-skill"},nextItem:{title:"Ruby-\u5143\u7f16\u7a0b\u4e4b\u65b9\u6cd5",permalink:"/Computer-Technology/Ruby/ruby-meta-method"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-08-10 15:18:00 "))),(0,o.kt)("p",null,"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002"))}s.isMDXComponent=!0}}]);