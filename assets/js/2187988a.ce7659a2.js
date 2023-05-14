"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[11420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,d=m["".concat(c,".").concat(b)]||m[b]||s[b]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"3D \u5f00\u53d1\uff1a\u6b63\u5411\u6e32\u67d3\u4e0e\u5ef6\u8fdf\u6e32\u67d3",date:new Date("2023-03-18T14:30:00.000Z"),update:new Date("2023-03-18T14:30:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],description:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"},l=void 0,i={permalink:"/Computer-Technology/3D/forward-rendering-and-deferred-rendering",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/3D/forward-rendering-and-deferred-rendering/index.md",source:"@site/blog/Computer-Technology/3D/forward-rendering-and-deferred-rendering/index.md",title:"3D \u5f00\u53d1\uff1a\u6b63\u5411\u6e32\u67d3\u4e0e\u5ef6\u8fdf\u6e32\u67d3",description:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002",date:"2023-03-18T14:30:00.000Z",formattedDate:"2023\u5e743\u670818\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"3D",permalink:"/tags/3-d"},{label:"WebGL",permalink:"/tags/web-gl"},{label:"Three.js",permalink:"/tags/three-js"}],readingTime:11.755,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"3D \u5f00\u53d1\uff1a\u6b63\u5411\u6e32\u67d3\u4e0e\u5ef6\u8fdf\u6e32\u67d3",date:"2023-03-18T14:30:00.000Z",update:"2023-03-18T14:30:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],description:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"},nextItem:{title:"\u9ec4\u5c71\u4e4b\u884c",permalink:"/2023/03/12/Life/tourism/tourism-huangshan"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2023-03-18 14:30:00"))),(0,a.kt)("p",null,"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\u4e4b\u524d\uff0c\u867d\u7136\u5df2\u7ecf\u8fdb\u884c\u4e86\u76f8\u5f53\u591a\u7684\u5f00\u53d1\u5b9e\u8df5\uff0c\u4f46\u7531\u4e8e\u573a\u666f\u53d7\u9650\uff0c\u4e00\u76f4\u5bf9\u4e8e 3D \u5f00\u53d1\u4e2d\u7684\u5149\u7167\u6280\u672f\u5e94\u7528\u7684\u504f\u5c11\uff0c\u4e0d\u8fc7\u6070\u597d\u8fd1\u671f\u5728\u5b66\u4e60\u4e86\u89e3\u6027\u80fd\u76f8\u5173\u7684\u77e5\u8bc6\uff0c\u5728\u4e86\u89e3\u5230\u6e32\u67d3\u8fd9\u65b9\u9762\u7684\u77e5\u8bc6\u6982\u5ff5\u65f6\uff0c\u624d\u610f\u8bc6\u5230\u5149\u7167\u5728 3D \u5f00\u53d1\u4e2d\u7684\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6280\u672f\u3002"))}s.isMDXComponent=!0}}]);