"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[95893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"GIS-\u5750\u6807\u7cfb\u7edf",date:new Date("2018-06-06T02:53:00.000Z"),update:new Date("2019-07-12T03:20:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5750\u6807\u7cfb\u7edf"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5750\u6807\u7cfb\u7edf"],description:"GIS\uff0c\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08Geographic Information System\uff09\uff0c\u5b83\u662f\u4e00\u79cd\u7279\u5b9a\u7684\u5341\u5206\u91cd\u8981\u7684\u7a7a\u95f4\u4fe1\u606f\u7cfb\u7edf\uff0c\u5750\u6807\u7cfb\u7edf\u662f GIS \u7406\u8bba\u77e5\u8bc6\u4e2d\u6700\u57fa\u672c\u7684\u800c\u4e14\u6700\u5173\u952e\u7684\u4e00\u70b9\u3002"},i=void 0,c={permalink:"/computer-technology/gis/gis-coordinate-system",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/gis/gis-coordinate-system.md",source:"@site/blog/computer-technology/gis/gis-coordinate-system.md",title:"GIS-\u5750\u6807\u7cfb\u7edf",description:"GIS\uff0c\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08Geographic Information System\uff09\uff0c\u5b83\u662f\u4e00\u79cd\u7279\u5b9a\u7684\u5341\u5206\u91cd\u8981\u7684\u7a7a\u95f4\u4fe1\u606f\u7cfb\u7edf\uff0c\u5750\u6807\u7cfb\u7edf\u662f GIS \u7406\u8bba\u77e5\u8bc6\u4e2d\u6700\u57fa\u672c\u7684\u800c\u4e14\u6700\u5173\u952e\u7684\u4e00\u70b9\u3002",date:"2018-06-06T02:53:00.000Z",formattedDate:"2018\u5e746\u67086\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"GIS",permalink:"/tags/gis"},{label:"\u5750\u6807\u7cfb\u7edf",permalink:"/tags/\u5750\u6807\u7cfb\u7edf"}],readingTime:15.005,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"GIS-\u5750\u6807\u7cfb\u7edf",date:"2018-06-06T02:53:00.000Z",update:"2019-07-12T03:20:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5750\u6807\u7cfb\u7edf"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5750\u6807\u7cfb\u7edf"],description:"GIS\uff0c\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08Geographic Information System\uff09\uff0c\u5b83\u662f\u4e00\u79cd\u7279\u5b9a\u7684\u5341\u5206\u91cd\u8981\u7684\u7a7a\u95f4\u4fe1\u606f\u7cfb\u7edf\uff0c\u5750\u6807\u7cfb\u7edf\u662f GIS \u7406\u8bba\u77e5\u8bc6\u4e2d\u6700\u57fa\u672c\u7684\u800c\u4e14\u6700\u5173\u952e\u7684\u4e00\u70b9\u3002"},prevItem:{title:"GIS-\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b",permalink:"/computer-technology/gis/gis-map-data-type"},nextItem:{title:"\u591c\u722c\u897f\u5cb3\u534e\u5c71",permalink:"/2018/05/06/life/tourism/tourism-huashan"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2019-07-12 03:20:00"))),(0,o.kt)("p",null,"GIS\uff0c\u5730\u7406\u4fe1\u606f\u7cfb\u7edf\uff08Geographic Information System\uff09\uff0c\u5b83\u662f\u4e00\u79cd\u7279\u5b9a\u7684\u5341\u5206\u91cd\u8981\u7684\u7a7a\u95f4\u4fe1\u606f\u7cfb\u7edf\uff0c\u5750\u6807\u7cfb\u7edf\u662f GIS \u7406\u8bba\u77e5\u8bc6\u4e2d\u6700\u57fa\u672c\u7684\u800c\u4e14\u6700\u5173\u952e\u7684\u4e00\u70b9\u3002"))}m.isMDXComponent=!0}}]);