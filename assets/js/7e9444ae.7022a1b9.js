"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[65441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=i(r),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},31895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"Web \u5e94\u7528\uff1a\u8f7b\u91cf\u7ea7\u72b6\u6001\u7ba1\u7406\u5de5\u5177 zustand",date:new Date("2021-11-18T00:14:00.000Z"),update:new Date("2021-11-18T00:14:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5e94\u7528\u72b6\u6001\u7ba1\u7406","React.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5e94\u7528\u72b6\u6001\u7ba1\u7406","React.js"],description:"Web \u7f51\u9875\u5411 Web \u5e94\u7528\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u52bf\u5fc5\u4f1a\u51fa\u73b0 Web \u9879\u76ee\u7684\u590d\u6742\u5316\u95ee\u9898\uff0c\u800c\u5728\u79fb\u52a8\u7aef\u573a\u666f\uff0c\u57fa\u4e8e React.js \u7684\u5e94\u7528\u4e2d\u5982\u4f55\u7ba1\u7406\u72b6\u6001\uff1fzustand \u4e5f\u8bb8\u503c\u5f97\u4e00\u8bd5\u3002"},l=void 0,p={permalink:"/Computer-Technology/Web/web-app-model-zustand",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/web-app-model-zustand.md",source:"@site/blog/Computer-Technology/Web/web-app-model-zustand.md",title:"Web \u5e94\u7528\uff1a\u8f7b\u91cf\u7ea7\u72b6\u6001\u7ba1\u7406\u5de5\u5177 zustand",description:"Web \u7f51\u9875\u5411 Web \u5e94\u7528\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u52bf\u5fc5\u4f1a\u51fa\u73b0 Web \u9879\u76ee\u7684\u590d\u6742\u5316\u95ee\u9898\uff0c\u800c\u5728\u79fb\u52a8\u7aef\u573a\u666f\uff0c\u57fa\u4e8e React.js \u7684\u5e94\u7528\u4e2d\u5982\u4f55\u7ba1\u7406\u72b6\u6001\uff1fzustand \u4e5f\u8bb8\u503c\u5f97\u4e00\u8bd5\u3002",date:"2021-11-18T00:14:00.000Z",formattedDate:"2021\u5e7411\u670818\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"\u5e94\u7528\u72b6\u6001\u7ba1\u7406",permalink:"/tags/\u5e94\u7528\u72b6\u6001\u7ba1\u7406"},{label:"React.js",permalink:"/tags/react-js"}],readingTime:17.875,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u5e94\u7528\uff1a\u8f7b\u91cf\u7ea7\u72b6\u6001\u7ba1\u7406\u5de5\u5177 zustand",date:"2021-11-18T00:14:00.000Z",update:"2021-11-18T00:14:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5e94\u7528\u72b6\u6001\u7ba1\u7406","React.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5e94\u7528\u72b6\u6001\u7ba1\u7406","React.js"],description:"Web \u7f51\u9875\u5411 Web \u5e94\u7528\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u52bf\u5fc5\u4f1a\u51fa\u73b0 Web \u9879\u76ee\u7684\u590d\u6742\u5316\u95ee\u9898\uff0c\u800c\u5728\u79fb\u52a8\u7aef\u573a\u666f\uff0c\u57fa\u4e8e React.js \u7684\u5e94\u7528\u4e2d\u5982\u4f55\u7ba1\u7406\u72b6\u6001\uff1fzustand \u4e5f\u8bb8\u503c\u5f97\u4e00\u8bd5\u3002"},prevItem:{title:"Web \u524d\u7aef\u8c03\u8bd5\u5de5\u5177\uff1aSourceMap \u6587\u4ef6",permalink:"/Computer-Technology/Web/tools-web-fee-debug-with-source-map"},nextItem:{title:"\u53c8\u8bfb\u6751\u4e0a\u6625\u6811",permalink:"/2021/11/15/Life/reading/reading-"}},c={authorsImageUrls:[void 0]},i=[],s={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2021-11-18 00:14:00"))),(0,a.kt)("p",null,"\u57fa\u4e8e React.js \u7684 Web \u5e94\u7528\u5982\u4f55\u5b8c\u6210\u72b6\u6001\u7ba1\u7406\uff1f\u793e\u533a\u4e3b\u6d41\u65b9\u6848\u662f ",(0,a.kt)("strong",{parentName:"p"},"react-redux"),"\uff0c\u5176\u672c\u8d28\u4e0a\u57fa\u4e8e React \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u7279\u6027\u5b9e\u73b0\uff0c\u5982\u679c\u5e94\u7528\u8db3\u591f\u7b80\u5355\uff0c\u5b9e\u9645\u4e0a\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u624b\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u5012\u4e5f\u5e76\u4e0d\u96be\u3002\u4e0d\u8fc7\uff0c\u8003\u8651\u5230\u5de5\u5177\u7684\u5b8c\u5584\u6027\u3001\u9879\u76ee\u7684\u5065\u58ee\u6027\uff0c\u901a\u5e38\u91c7\u7528\u8f83\u597d\u7684\u3001\u6210\u719f\u7684\u793e\u533a\u65b9\u6848\u3002\u5728\u79fb\u52a8\u7aef\u573a\u666f\u4e0b\uff0c",(0,a.kt)("strong",{parentName:"p"},"react-redux")," \u7565\u663e\u81c3\u80bf\uff0c\u8f7b\u91cf\u7ea7\u72b6\u6001\u7ba1\u7406\u5de5\u5177 ",(0,a.kt)("strong",{parentName:"p"},"zustand")," \u5012\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u66ff\u4ee3\u65b9\u6848\u3002"))}u.isMDXComponent=!0}}]);