"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,g=c["".concat(i,".").concat(s)]||c[s]||m[s]||a;return n?l.createElement(g,p(p({ref:t},k),{},{components:n})):l.createElement(g,p({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={title:"GIS-\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b",date:new Date("2018-06-12T02:12:00.000Z"),update:new Date("2019-06-08T07:18:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5730\u56fe","\u6570\u636e\u7c7b\u578b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5730\u56fe","\u6570\u636e\u7c7b\u578b"],description:"\u5728 GIS \u5f00\u53d1\u4e2d\uff0c\u76f4\u63a5\u63a5\u89e6\u7684\u5c31\u662f\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b\uff0c\u501f\u6b64\u603b\u7ed3\u4e00\u4e0b\u5e38\u89c1\u7684\u5730\u56fe\u7c7b\u578b\uff0c\u4ee5\u53ca\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u7684\u6570\u636e\u7c7b\u578b\u3002"},p=void 0,o={permalink:"/Computer-Technology/GIS/gis-map-data-type",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/GIS/gis-map-data-type.md",source:"@site/blog/Computer-Technology/GIS/gis-map-data-type.md",title:"GIS-\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b",description:"\u5728 GIS \u5f00\u53d1\u4e2d\uff0c\u76f4\u63a5\u63a5\u89e6\u7684\u5c31\u662f\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b\uff0c\u501f\u6b64\u603b\u7ed3\u4e00\u4e0b\u5e38\u89c1\u7684\u5730\u56fe\u7c7b\u578b\uff0c\u4ee5\u53ca\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u7684\u6570\u636e\u7c7b\u578b\u3002",date:"2018-06-12T02:12:00.000Z",formattedDate:"2018\u5e746\u670812\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"GIS",permalink:"/tags/gis"},{label:"\u5730\u56fe",permalink:"/tags/\u5730\u56fe"},{label:"\u6570\u636e\u7c7b\u578b",permalink:"/tags/\u6570\u636e\u7c7b\u578b"}],readingTime:12.27,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",imageURL:"https://github.com/wang1212.png",key:"wang1212"}],frontMatter:{title:"GIS-\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b",date:"2018-06-12T02:12:00.000Z",update:"2019-06-08T07:18:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5730\u56fe","\u6570\u636e\u7c7b\u578b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","GIS","\u5730\u56fe","\u6570\u636e\u7c7b\u578b"],description:"\u5728 GIS \u5f00\u53d1\u4e2d\uff0c\u76f4\u63a5\u63a5\u89e6\u7684\u5c31\u662f\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b\uff0c\u501f\u6b64\u603b\u7ed3\u4e00\u4e0b\u5e38\u89c1\u7684\u5730\u56fe\u7c7b\u578b\uff0c\u4ee5\u53ca\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u7684\u6570\u636e\u7c7b\u578b\u3002"},prevItem:{title:"\u5076\u8bfb\u670b\u53cb\u7684\u4e66",permalink:"/2018/7/30/Life/reading/reading-"},nextItem:{title:"GIS-\u5750\u6807\u7cfb\u7edf",permalink:"/Computer-Technology/GIS/gis-coordinate-system"}},i={authorsImageUrls:[void 0]},u=[{value:"\u5730\u56fe",id:"\u5730\u56fe",level:2},{value:"\u5f71\u50cf\u56fe",id:"\u5f71\u50cf\u56fe",level:3},{value:"\u9053\u8def\u56fe",id:"\u9053\u8def\u56fe",level:3},{value:"\u4e13\u9898\u56fe",id:"\u4e13\u9898\u56fe",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6805\u683c\u6570\u636e",id:"\u6805\u683c\u6570\u636e",level:3},{value:"\u77e2\u91cf\u6570\u636e",id:"\u77e2\u91cf\u6570\u636e",level:3},{value:"DTM \u4e0e DEM",id:"dtm-\u4e0e-dem",level:3},{value:"\u670d\u52a1\u7c7b\u578b",id:"\u670d\u52a1\u7c7b\u578b",level:2},{value:"\u52a8\u6001\u5730\u56fe\u670d\u52a1",id:"\u52a8\u6001\u5730\u56fe\u670d\u52a1",level:3},{value:"\u7f13\u5b58\u5730\u56fe\u670d\u52a1",id:"\u7f13\u5b58\u5730\u56fe\u670d\u52a1",level:3}],k={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2019-06-08 07:18:00 "))),(0,r.kt)("p",null,"\u5728 GIS \u5f00\u53d1\u4e2d\uff0c\u76f4\u63a5\u63a5\u89e6\u7684\u5c31\u662f\u5730\u56fe\u53ca\u5176\u6570\u636e\u7c7b\u578b\uff0c\u501f\u6b64\u603b\u7ed3\u4e00\u4e0b\u5e38\u89c1\u7684\u5730\u56fe\u7c7b\u578b\uff0c\u4ee5\u53ca\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"\u5730\u56fe"},"\u5730\u56fe"),(0,r.kt)("p",null,"GIS \u5f00\u53d1\u5747\u662f\u57fa\u4e8e\u5730\u56fe\u7ed3\u5408\u76f8\u5173\u7684\u7a7a\u95f4\u6570\u636e\u6765\u4e3a\u5ba2\u6237\u63d0\u4f9b\u4e00\u5b9a\u7684\u529f\u80fd\u9700\u6c42\uff0c\u6839\u636e\u5e38\u89c1\u7684\u5730\u56fe\u5448\u73b0\u7c7b\u578b\u53ef\u4ee5\u7b80\u5355\u7684\u5c06\u5176\u5206\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f71\u50cf\u56fe"),(0,r.kt)("li",{parentName:"ul"},"\u9053\u8def\u56fe"),(0,r.kt)("li",{parentName:"ul"},"\u4e13\u9898\u56fe")),(0,r.kt)("h3",{id:"\u5f71\u50cf\u56fe"},"\u5f71\u50cf\u56fe"),(0,r.kt)("p",null,"\u5f71\u50cf\u5730\u56fe\u662f\u6307\u4e00\u79cd\u5e26\u6709\u5730\u9762\u9065\u611f\u5f71\u50cf\u7684\u5730\u56fe\uff0c\u662f\u5229\u7528\u822a\u7a7a\u50cf\u7247\u6216\u536b\u661f\u9065\u611f\u5f71\u50cf\uff0c\u901a\u8fc7\u51e0\u4f55\u7ea0\u6b63\u3001\u6295\u5f71\u53d8\u6362\u548c\u6bd4\u4f8b\u5c3a\u5f52\u5316\uff0c\u8fd0\u7528\u4e00\u5b9a\u7684\u5730\u56fe\u7b26\u53f7\u3001\u6ce8\u8bb0\uff0c\u76f4\u63a5\u53cd\u6620\u5236\u56fe\u5bf9\u8c61\u5730\u7406\u7279\u5f81\u53ca\u7a7a\u95ee\u5206\u5e03\u7684\u5730\u56fe\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u4f7f\u7528\u7684\u767e\u5ea6\u5730\u56fe\u3001\u9ad8\u5fb7\u5730\u56fe\u3001\u8c37\u6b4c\u5730\u56fe\u7b49\u7b49\u8fd9\u4e9b\u8f6f\u4ef6\uff0c\u5728\u8fdb\u884c\u56fe\u5c42\u9009\u62e9\u65f6\u5c31\u6709\u4e00\u4e2a\u536b\u661f\u56fe\u7684\u9009\u9879\uff0c\u8fd9\u5c31\u662f\u536b\u661f\u5f71\u50cf\u56fe\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5f71\u50cf\u56fe\u662f\u5f88\u5bb9\u6613\u8fa8\u522b\u7684\uff0c\u5176\u5448\u73b0\u7684\u662f\u5730\u56fe\u4e0a\u7684\u5b9e\u4f53\uff0c\u53ef\u4ee5\u76f4\u89c2\u3001\u6709\u6548\u5730\u53cd\u6620\u5730\u7406\u7a7a\u95f4\u4fe1\u606f\uff0c\u4ee5\u4f9b\u7528\u6237\u5feb\u901f\u3001\u51c6\u786e\u5730\u8ba4\u8bc6\u3001\u4e86\u89e3\u5730\u7406\u73af\u5883\u548c\u5730\u7406\u73b0\u8c61\u7684\u7a7a\u95f4\u4f4d\u7f6e\u3001\u5f62\u6001\u3001\u5206\u5e03\u3001\u76f8\u4e92\u8054\u7cfb\u53ca\u53d1\u5c55\u53d8\u5316\u7684\u76f8\u5173\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u7531\u4e8e 3S\uff08GPS\u3001RS\u3001GIS\uff09\u6280\u672f\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u4f7f\u5f97\u5f71\u50cf\u56fe\u591a\u4e2a\u9886\u57df\u5f97\u5230\u4e86\u5e94\u7528\u3002\u5927\u8303\u56f4\u7684\u5f71\u50cf\u56fe\u901a\u5e38\u91c7\u7528\u7684\u662f\u536b\u661f\u9065\u611f\u56fe\u50cf\uff0c\u4e00\u822c\u5bf9\u5916\u53d1\u5e03\u7684\u5206\u8fa8\u7387\u7cbe\u5ea6\u8f83\u4f4e\uff1b\u800c\u5c0f\u8303\u56f4\u7684\u5f71\u50cf\u56fe\u4e3a\u4e86\u4fdd\u8bc1\u8d85\u9ad8\u7cbe\u5ea6\uff08\u5398\u7c73\u7ea7\uff09\u4ee5\u53ca\u9ad8\u5ea6\u8fd8\u539f\u5730\u5f62\u5730\u8c8c\u548c\u6781\u5927\u7684\u7075\u6d3b\u6027\uff0c\u901a\u5e38\u4f1a\u91c7\u7528\u65e0\u4eba\u673a\u822a\u62cd\u56fe\u50cf\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u5f71\u50cf\u56fe\u7ed3\u5408\u5730\u5f62\u6570\u636e\u540e\u53ef\u4ee5\u5b9e\u73b0\u4e09\u7ef4\u5730\u56fe\u7684\u6548\u679c\uff0c\u51c6\u786e\u5448\u73b0\u51fa\u4e30\u5bcc\u7684\u5730\u5f62\u5730\u8c8c\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"\u9053\u8def\u56fe"},"\u9053\u8def\u56fe"),(0,r.kt)("p",null,"\u9053\u8def\u56fe\u662f\u901a\u8fc7\u7535\u5b50\u6280\u672f\u7ed8\u5236\u77e2\u91cf\u56fe\u5f62\u8fdb\u800c\u5448\u73b0\u76f8\u5173\u7684\u5730\u7406\u7a7a\u95f4\u4fe1\u606f\u7684\u5730\u56fe\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4e0e\u5f71\u50cf\u56fe\u6700\u5927\u7684\u4e0d\u540c\u5c31\u662f\uff0c\u9053\u8def\u56fe\u662f\u5229\u7528\u7b80\u5355\u7684\u77e2\u91cf\u56fe\u50cf\u6765\u4ee3\u66ff\u5730\u56fe\u4e0a\u76ee\u6807\u5b9e\u4f53\uff0c\u66f4\u4fa7\u91cd\u4e8e\u76ee\u6807\u4f4d\u7f6e\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u65e5\u5e38\u751f\u6d3b\u4e2d\u4f7f\u7528\u7684\u9ad8\u5fb7\u5730\u56fe\u3001\u8c37\u6b4c\u5730\u56fe\u7b49\u7b49\u8fd9\u4e9b\u8f6f\u4ef6\uff0c\u4ec5\u4ec5\u662f\u4e3a\u4e86\u83b7\u53d6\u7b80\u5355\u7684\u4f4d\u7f6e\u670d\u52a1\uff0c\u56e0\u6b64\u8fd9\u4e9b\u8f6f\u4ef6\u9ed8\u8ba4\u7684\u56fe\u5c42\u52a0\u8f7d\u7684\u5c31\u662f\u9053\u8def\u56fe\uff0c\u5373\u4e00\u6253\u5f00\u8f6f\u4ef6\u6240\u770b\u5230\u7684\u5730\u56fe\u3002\u5bf9\u4e8e\u6211\u4eec\u666e\u901a\u4eba\u6765\u8bf4\uff0c\u66f4\u591a\u7684\u529f\u80fd\u9700\u6c42\u90fd\u662f\u57fa\u4e8e\u4f4d\u7f6e\u4fe1\u606f\uff0c\u800c\u5e76\u4e0d\u5173\u6ce8\u5730\u56fe\u4e0a\u76ee\u6807\u5b9e\u4f53\u7684\u4e00\u4e9b\u7279\u6027\uff0c\u4f8b\u5982\u5730\u5f62\u5730\u8c8c\u7b49\u7b49\u3002"),(0,r.kt)("h3",{id:"\u4e13\u9898\u56fe"},"\u4e13\u9898\u56fe"),(0,r.kt)("p",null,"\u4e13\u9898\u5730\u56fe\uff08thematic map\uff09\uff0c\u53c8\u79f0\u7279\u79cd\u5730\u56fe\uff0c\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5728\u5730\u7406\u5e95\u56fe\u4e0a\u6309\u7167\u5730\u56fe\u4e3b\u9898\u7684\u8981\u6c42\uff0c\u7a81\u51fa\u5e76\u5b8c\u5584\u5730\u8868\u793a\u4e0e\u4e3b\u9898\u76f8\u5173\u7684\u4e00\u79cd\u6216\u51e0\u79cd\u8981\u7d20\uff0c\u4f7f\u5730\u56fe\u5185\u5bb9\u4e13\u9898\u5316\u3001\u8868\u8fbe\u5f62\u5f0f\u5404\u5f02\u3001\u7528\u9014\u4e13\u95e8\u5316\u7684\u5730\u56fe\u3002")),(0,r.kt)("p",null,"\u4e13\u9898\u5730\u56fe\u5728\u751f\u6d3b\u4e2d\u662f\u975e\u5e38\u5e38\u89c1\u7684\uff0c\u4f8b\u5982\u5929\u6c14\u9884\u62a5\u4f7f\u7528\u7684\u9884\u6d4b\u5730\u56fe\uff0c\u4eba\u53e3\u53d8\u5316\u7684\u52a8\u6001\u5730\u56fe\uff0c\u65c5\u6e38\u666f\u533a\u7684\u5730\u56fe\u3002",(0,r.kt)("strong",{parentName:"p"},"\u666e\u901a\u5730\u56fe\u4fa7\u91cd\u5ba2\u89c2\u5730\u53cd\u6620\u5730\u8868\u73b0\u5b9e\uff0c\u800c\u4e13\u9898\u5730\u56fe\u53d6\u6750\u5b66\u79d1\u5e7f\u6cdb\uff0c\u8bb8\u591a\u7f16\u56fe\u8d44\u6599\u90fd\u7531\u76f8\u5173\u7684\u79d1\u7814\u6210\u679c\u3001\u8bba\u6587\u62a5\u544a\u3001\u7814\u7a76\u8d44\u6599\u3001\u9065\u611f\u56fe\u50cf\u7b49\u6784\u6210\uff0c\u80fd\u53cd\u6620\u5b66\u79d1\u524d\u6cbf\u4fe1\u606f\u53ca\u6210\u679c\u3002")),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"\u7531\u4e8e\u5730\u56fe\u6570\u636e\u901a\u5e38\u8f83\u4e3a\u5e9e\u5927\uff08GB \u7ea7\u522b\uff09\uff0c\u800c\u5728 Web \u6280\u672f\u53d1\u5c55\u8fc5\u901f\u7684\u4eca\u5929\uff0c\u5728\u7ebf\u5730\u56fe\u670d\u52a1\u662f GIS \u5f00\u53d1\u884c\u4e1a\u4e2d\u53d1\u5c55\u6700\u5feb\u7684\u4e1a\u52a1\uff0c\u4e3a\u4e86\u63d0\u9ad8\u5728\u7ebf\u5730\u56fe\u52a0\u8f7d\u6548\u7387\u50ac\u751f\u4e86\u73b0\u5728\u7684 WMS\u3001WTMS \u7b49\u6280\u672f\u3002"),(0,r.kt)("p",null,"\u5728\u7ebf\u5730\u56fe\u670d\u52a1\u901a\u8fc7\u5229\u7528\u5730\u56fe\u5207\u7247\uff0c\u52a0\u8f7d\u5730\u56fe\u74e6\u7247\u7684\u5f62\u5f0f\u89e3\u51b3\u4e86\u52a0\u8f7d\u6548\u7387\u7684\u95ee\u9898\uff0c\u74e6\u7247\u7c7b\u578b\u901a\u5e38\u53ef\u5c06\u5176\u5206\u4e3a\u4e00\u4e0b\u4e24\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6805\u683c\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u77e2\u91cf\u6570\u636e")),(0,r.kt)("h3",{id:"\u6805\u683c\u6570\u636e"},"\u6805\u683c\u6570\u636e"),(0,r.kt)("p",null,"\u6805\u683c\u5730\u56fe\u6570\u636e\uff0c\u662f\u9884\u5148\u5728 Server \u7aef\u7ed8\u5236\u597d\u7684\u56fa\u5b9a\u56fe\u7247\uff08PNG\u3001JPEG\u3001GIF\u3001TIFF\uff09\u96c6\u5408\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u79cd\u7c7b\u578b\u7684\u6570\u636e\u662f\u6ca1\u529e\u6cd5\u5728\u5ba2\u6237\u7aef\u5b9e\u73b0\u5728\u7ebf\u4ea4\u4e92\u6548\u679c\u7684\uff0c\u540c\u65f6\u6539\u52a8\u7684\u8bdd\u4e5f\u662f\u6bd4\u8f83\u9ebb\u70e6\u7684\uff0c\u8981\u91cd\u590d\u8fdb\u884c\u5236\u56fe\u3001\u6e32\u67d3\u3001\u5207\u7247\u3001\u66f4\u65b0 Service \u7b49\u3002")),(0,r.kt)("p",null,"\u6805\u683c\u6570\u636e\u4e3b\u8981\u4ee5\u5c55\u793a\u4e3a\u4e3b\uff0c\u800c\u4e14",(0,r.kt)("strong",{parentName:"p"},"\u5207\u7247\u7684\u6805\u683c\u56fe\u50cf\u672c\u8eab\u4e0d\u5177\u5907\u5b9a\u4f4d\u4fe1\u606f\uff0c\u662f\u901a\u8fc7\u5207\u7247\u7684\u7b97\u6cd5\u8ba1\u7b97\u51fa\u6765\u7684\u5177\u4f53\u4f4d\u7f6e\uff0c\u4ee5\u6b64\u6765\u8fbe\u5230\u5b9a\u4f4d\u7684\u529f\u80fd\u3002")),(0,r.kt)("h3",{id:"\u77e2\u91cf\u6570\u636e"},"\u77e2\u91cf\u6570\u636e"),(0,r.kt)("p",null,"\u77e2\u91cf\u5730\u56fe\u6570\u636e\uff0c\u662f\u5c06\u77e2\u91cf\u6570\u636e\uff08\u70b9\u3001\u7ebf\u3001\u9762\uff09\u901a\u8fc7\u4e0d\u540c\u7684\u63cf\u8ff0\u6587\u4ef6\u6765\u7ec4\u7ec7\u548c\u5b9a\u4e49\uff0c\u5728\u5ba2\u6237\u7aef\u5b9e\u65f6\u89e3\u6790\u548c\u5b8c\u6210\u7ed8\u5236\u3002\u5e38\u89c1\u7684\u6570\u636e\u683c\u5f0f\u6709 GeoJSON\u3001PBF\u3001MVT\u3001SHP\u3001KML\u3001DXF \u7b49\u3002SHP\uff08Shapefile\uff09\u662f\u76ee\u524d\u6700\u5e38\u89c1\u7684\u4e00\u79cd\u77e2\u91cf\u6570\u636e\u683c\u5f0f\u3002\u4f5c\u4e3a\u884c\u4e1a\u6807\u51c6\uff0c\u51e0\u4e4e\u6240\u6709\u7684\u5546\u4e1a\u548c\u5f00\u6e90 GIS \u8f6f\u4ef6\u90fd\u652f\u6301 Shapefile\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u77e2\u91cf\u6570\u636e\u8981\u6539\u52a8\u7684\u8bdd\u4e5f\u662f\u6bd4\u8f83\u65b9\u4fbf\u7684\uff0c\u4e0d\u518d\u50cf\u6805\u683c\u6570\u636e\u4e00\u6837\u8981\u91cd\u65b0\u8fdb\u884c\u5236\u56fe\u3001\u6e32\u67d3\u7b49\uff1b\u5728\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u5c4f\u5e55\u4e0a\u53ef\u4ee5\u83b7\u5f97\u4e00\u81f4\u6e05\u6670\u7684\u5448\u73b0\u6548\u679c\uff1b\u77e2\u91cf\u6570\u636e\u662f\u53ef\u4ee5\u5728\u7ebf\u4ea4\u4e92\u7684\uff1b\u77e2\u91cf\u74e6\u7247\u7684\u6e32\u67d3\u6548\u7387\u8981\u6bd4\u6805\u683c\u74e6\u7247\u9ad8\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u77e2\u91cf\u74e6\u7247\u5b58\u50a8\u7684\u6570\u636e\u662f\u76f8\u5bf9\u5750\u6807\uff0c\u5e76\u4e0d\u662f\u5730\u7406\u5750\u6807\uff0c\u8fd9\u4e48\u505a\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u51cf\u5c0f\u6570\u636e\u91cf\uff0c\u52a0\u5feb\u4f20\u8f93\u6548\u7387\u548c\u524d\u7aef\u6e32\u67d3\u6548\u7387\u3002")),(0,r.kt)("h3",{id:"dtm-\u4e0e-dem"},"DTM \u4e0e DEM"),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u5c31\u662f DTM\uff08Digital Terrain Model\uff0c\u6570\u5b57\u5730\u5f62\u6a21\u578b\uff09 \u4e0e DEM\uff08Digital Elevation Model\uff0c\u6570\u5b57\u9ad8\u7a0b\u6a21\u578b\uff09\u3002"),(0,r.kt)("p",null,"DTM \u662f\u5229\u7528\u4e00\u4e2a\u4efb\u610f\u5750\u6807\u7cfb\u4e2d\u5927\u91cf\u9009\u62e9\u7684\u5df2\u77e5 x\u3001y\u3001z \u7684\u5750\u6807\u70b9\u5bf9\u8fde\u7eed\u5730\u9762\u7684\u4e00\u79cd\u6a21\u62df\u8868\u793a\uff0c\u6216\u8005\u8bf4\uff0cDTM \u5c31\u662f\u5730\u5f62\u8868\u9762\u5f62\u6001\u5c5e\u6027\u4fe1\u606f\u7684\u6570\u5b57\u8868\u8fbe\uff0c\u662f\u5e26\u6709\u7a7a\u95f4\u4f4d\u7f6e\u7279\u5f81\u548c\u5730\u5f62\u5c5e\u6027\u7279\u5f81\u7684\u6570\u5b57\u63cf\u8ff0\u3002",(0,r.kt)("strong",{parentName:"p"},"x\u3001y \u8868\u793a\u8be5\u70b9\u7684\u5e73\u9762\u5750\u6807\uff0cz \u503c\u53ef\u4ee5\u8868\u793a\u9ad8\u7a0b\u3001\u5761\u5ea6\u3001\u6e29\u5ea6\u7b49\u4fe1\u606f\uff0c\u5f53 z \u8868\u793a\u9ad8\u7a0b\u65f6\uff0c\u5c31\u662f\u6570\u5b57\u9ad8\u7a0b\u6a21\u578b\uff0c\u5373 DEM\u3002"),"\u5730\u5f62\u8868\u9762\u5f62\u6001\u7684\u5c5e\u6027\u4fe1\u606f\u4e00\u822c\u5305\u62ec\u9ad8\u7a0b\u3001\u5761\u5ea6\u3001\u5761\u5411\u7b49\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u8ba4\u4e3a\uff0cDTM \u662f\u63cf\u8ff0\u5305\u62ec\u9ad8\u7a0b\u5728\u5185\u7684\u5404\u79cd\u5730\u8c8c\u56e0\u5b50\uff0c\u5982\u5761\u5ea6\u3001\u5761\u5411\u3001\u5761\u5ea6\u53d8\u5316\u7387\u7b49\u56e0\u5b50\u5728\u5185\u7684\u7ebf\u6027\u548c\u975e\u7ebf\u6027\u7ec4\u5408\u7684\u7a7a\u95f4\u5206\u5e03\uff0c\u5176\u4e2d DEM \u662f\u96f6\u9636\u5355\u7eaf\u7684\u5355\u9879\u6570\u5b57\u5730\u8c8c\u6a21\u578b\uff0c\u5176\u4ed6\u5982\u5761\u5ea6\u3001\u5761\u5411\u53ca\u5761\u5ea6\u53d8\u5316\u7387\u7b49\u5730\u8c8c\u7279\u6027\u53ef\u5728 DEM \u7684\u57fa\u7840\u4e0a\u6d3e\u751f\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u7c7b\u578b"},"\u670d\u52a1\u7c7b\u578b"),(0,r.kt)("p",null,"\u5728 GIS \u5f00\u53d1\u4e2d\uff0c\u4e3a\u4e86\u5206\u4eab\u5730\u56fe\u6570\u636e\u548c\u63d0\u9ad8\u6570\u636e\u6e90\u7684\u7075\u6d3b\u6027\uff0c\u8fd9\u65f6\u5019\u5c31\u4f1a\u9700\u8981\u90e8\u7f72/\u53d1\u5e03\u4e00\u4e2a\u7f51\u7edc\u5730\u56fe\u670d\u52a1\uff0c\u7528\u6765\u63d0\u4f9b\u5728\u7ebf\u7684\u5730\u56fe\u6570\u636e\u5206\u53d1\u529f\u80fd\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u7f51\u7edc\u5730\u56fe\u670d\u52a1\u5206\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u52a8\u6001\u5730\u56fe\u670d\u52a1")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58\uff08\u9759\u6001\uff09\u5730\u56fe\u670d\u52a1"),"\uff0c\u5927\u81f4\u6709 WMS\u3001WFS\u3001WCS\u3001TMS\u3001WMTS \u51e0\u79cd\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OGC - ",(0,r.kt)("a",{parentName:"p",href:"http://www.opengeospatial.org/"},"Open Geospatial Consortium"),"\uff0c\u5f00\u653e\u5730\u7406\u7a7a\u95f4\u4fe1\u606f\u8054\u76df\uff0c\u4e00\u4e2a\u975e\u76c8\u5229\u7684\u56fd\u9645\u6807\u51c6\u7ec4\u7ec7\uff0cGIS \u76f8\u5173\u5b98\u65b9\u6807\u51c6\u7684\u5236\u5b9a\u8005\u3002 ",(0,r.kt)("br",null),"\nOSGeo - ",(0,r.kt)("a",{parentName:"p",href:"https://www.osgeo.org/"},"Open Source Geospatial Foundation"),"\uff0c\u5f00\u6e90\u7a7a\u95f4\u4fe1\u606f\u57fa\u91d1\u4f1a\uff0c\u4e00\u4e2a\u5168\u7403\u6027\u975e\u8425\u5229\u6027\u7ec4\u7ec7\uff0c\u76ee\u6807\u662f\u652f\u6301\u5168\u7403\u6027\u7684\u5408\u4f5c\uff0c\u5efa\u7acb\u548c\u63a8\u5e7f\u9ad8\u54c1\u8d28\u7684\u7a7a\u95f4\u4fe1\u606f\u5f00\u6e90\u8f6f\u4ef6\u3002")),(0,r.kt)("h3",{id:"\u52a8\u6001\u5730\u56fe\u670d\u52a1"},"\u52a8\u6001\u5730\u56fe\u670d\u52a1"),(0,r.kt)("p",null,"\u52a8\u6001\u5730\u56fe\u670d\u52a1\u901a\u5e38\u662f\u57fa\u4e8e\u53ef\u5b9a\u5236\u5316\u7684\u5730\u56fe\u9700\u6c42\uff0c\u6765\u5b9e\u65f6\u52a8\u6001\u751f\u6210\u6240\u9700\u8981\u7684\u5730\u56fe\u6570\u636e\u4f9b\u5ba2\u6237\u7aef\u8bbf\u95ee\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u4e00\u4e9b\u53ef\u5bf9\u5730\u56fe\u8fdb\u884c\u7f16\u8f91\u7684\u64cd\u4f5c\u3002\u5176\u7279\u70b9\u5c31\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u65f6\u6e32\u67d3\u3001\u6548\u7387\u4f4e\u3001\u53ef\u7f16\u8f91\u3001\u4ea4\u4e92\u6027\u5f3a\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WMS"))),(0,r.kt)("p",null,"WMS\uff08Web Map Service\uff0c\u7f51\u7edc\u5730\u56fe\u670d\u52a1\uff09\u901a\u8fc7\u5177\u6709\u5730\u7406\u7a7a\u95f4\u4fe1\u606f\u7684\u6570\u636e\u6765\u5b9e\u65f6\u6e32\u67d3\u5730\u56fe\uff08\u5730\u7406\u6570\u636e\u7684\u53ef\u89c6\u5316\u8868\u73b0\uff09\u6570\u636e\uff0c\u5b83\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u7684\u662f\u5730\u56fe\u56fe\u50cf\uff0c\u683c\u5f0f\u7c7b\u578b\u591a\u4e3a PNG\u3001GIF\u3001JPEG\u3001SVG\u3001WebCGM \u7b49\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WFS"))),(0,r.kt)("p",null,"WFS\uff08Web Feature Service\uff0c\u7f51\u7edc\u8981\u7d20\u670d\u52a1\uff09\u901a\u8fc7 \xa0GML\uff08Geography\xa0Markup\xa0Language\uff0c\u5730\u7406\u6807\u8bb0\u8bed\u8a00\uff09\u4f20\u9012\u5730\u7406\u7a7a\u95f4\u6570\u636e\uff0c\u5b83\u652f\u6301\u5728\u57fa\u4e8e \xa0HTTP\xa0 \u534f\u8bae\u7684\u5206\u5e03\u5f0f\u8ba1\u7b97\u5e73\u53f0\u4e0a\u5bf9\u5730\u7406\u8981\u7d20\u8fdb\u884c\u63d2\u5165\uff08INSERT\uff09\u3001\u66f4\u65b0\uff08UPDATE\uff09\u3001\u5220\u9664\uff08DELETE\uff09\u548c\u53d1\u73b0\uff08DISCOVERY\uff09\u7b49\u64cd\u4f5c\uff0c\u5e76\u4e14\u5728\u8fd9\u4e9b\u64cd\u4f5c\u7684\u8fc7\u7a0b\u4e2d\u4fdd\u8bc1\u4e86\u5730\u7406\u6570\u636e\u53d8\u5316\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,"\u57fa\u4e8e WFS\uff0c\u6211\u4eec\u901a\u5e38\u5728 GIS \u5ba2\u6237\u7aef\u63d0\u4f9b\u5730\u56fe\u7684\u5c5e\u6027\u67e5\u8be2\u3001\u7a7a\u95f4\u67e5\u8be2\u7b49\u5ba2\u6237\u9700\u6c42\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WCS"))),(0,r.kt)("p",null,"WCS\uff08Web Coverage Service\uff0c\u7f51\u7edc\u8986\u76d6\u670d\u52a1\uff09\u662f OGC \u5b9a\u4e49\u7684\u5728 Web \u4e0a\u4ee5 \u201cCoverage\u201d \u7684\u5f62\u5f0f\u5171\u4eab\u5730\u7406\u7a7a\u95f4\u6570\u636e\u7684\u89c4\u8303\u3002\u6240\u8c13 \u201cCoverage\u201d \u662f\u6307\u80fd\u591f\u8fd4\u56de\u5176\u65f6\u7a7a\u57df\u4e2d\u4efb\u610f\u6307\u5b9a\u70b9\u7684\u503c\u7684\u6570\u636e\uff0c\u5176\u5f62\u5f0f\u6613\u4e8e\u8f93\u5165\u5230\u6a21\u578b\u4e2d\u4f7f\u7528\u3002WCS \u670d\u52a1\u662f\u4ee5 \u201cCoverage\u201d \u7684\u5f62\u5f0f\u5b9e\u73b0\u4e86\u6805\u683c\u5f71\u50cf\u6570\u636e\u96c6\u7684\u5171\u4eab\uff0c\u5982\u536b\u661f\u5f71\u50cf\u3001\u6570\u5b57\u9ad8\u7a0b\u6570\u636e\u7b49\u6805\u683c\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u7f13\u5b58\u5730\u56fe\u670d\u52a1"},"\u7f13\u5b58\u5730\u56fe\u670d\u52a1"),(0,r.kt)("p",null,"\u7f13\u5b58\uff08\u9759\u6001\uff09\u5730\u56fe\u670d\u52a1\u662f\u5728\u52a8\u6001\u5730\u56fe\u670d\u52a1\u8fd9\u79cd\u5b9e\u65f6\u6e32\u67d3\u6548\u7387\u4f4e\u7684\u60c5\u51b5\u4e0b\u63d0\u51fa\u7684\u4e00\u79cd\u4ee5\u7075\u6d3b\u6027\u6362\u53d6\u6027\u80fd\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u66f4\u9002\u5408\u63d0\u4f9b\u5168\u7403\u6027\u5927\u8303\u56f4\u7684\u5730\u56fe\u6570\u636e\u5728\u7ebf\u670d\u52a1\u3002\u5176\u7279\u70b9\u5c31\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u6570\u636e\u3001\u6548\u7387\u9ad8\u3001\u8303\u56f4\u5e7f\u3001\u4e0d\u53ef\u7f16\u8f91\u3001\u4ea4\u4e92\u6027\u5f31\u3002")),(0,r.kt)("p",null,"\u7f13\u5b58\u5730\u56fe\u670d\u52a1\u901a\u5e38\u4e0d\u9700\u8981\u7279\u6b8a\u7684\u5730\u56fe\u670d\u52a1\u5668\uff0c\u5c06\u751f\u6210\u7684\u5730\u56fe\u6570\u636e\u6587\u4ef6\u653e\u5728\u4e00\u4e2a Web \u670d\u52a1\u5668\u4e2d\u5373\u53ef\u5b9e\u73b0\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TMS"))),(0,r.kt)("p",null,"TMS\uff08Tile Map Service\uff0c\u5207\u7247\u5730\u56fe\u670d\u52a1\uff09\u662f OSGeo \u63d0\u51fa\u7684\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u5141\u8bb8\u5ba2\u6237\u7aef\u8bbf\u95ee\u5207\u7247\u5730\u56fe\u6570\u636e\uff0c\u4ec5\u652f\u6301 RESTful \u5f62\u5f0f\u8bbf\u95ee\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WMTS"))),(0,r.kt)("p",null,"WMTS\uff08Web Map Tile Service\uff0c\u7f51\u7edc\u5730\u56fe\u5207\u7247\u670d\u52a1\uff09\u662f OGC \u57fa\u4e8e TMS \u7684\u7279\u70b9\u548c\u4f18\u52bf\uff0c\u9644\u52a0\u4e86\u66f4\u591a\u529f\u80fd\u7684\u4e00\u79cd\u65b0\u7684\u5730\u56fe\u670d\u52a1\u5b98\u65b9\u6807\u51c6\uff0c\u652f\u6301 RESTful\u3001SOAP\u3001KVP \u5f62\u5f0f\u8bbf\u95ee\uff0c\u4e5f\u662f OGC \u9996\u4e2a\u652f\u6301 RESTful \u8bbf\u95ee\u7684\u670d\u52a1\u6807\u51c6\u3002"))}m.isMDXComponent=!0}}]);