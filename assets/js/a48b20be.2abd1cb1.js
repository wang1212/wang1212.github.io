"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[93448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(i,".").concat(c)]||u[c]||m[c]||a;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",date:new Date("2023-05-28T23:07:00.000Z"),update:new Date("2023-05-28T23:07:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"},l=void 0,s={permalink:"/2023/05/28/computer-technology/nodejs/nodejs-loader",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/nodejs/2023-05-28-nodejs-loader.md",source:"@site/blog/computer-technology/nodejs/2023-05-28-nodejs-loader.md",title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002",date:"2023-05-28T23:07:00.000Z",formattedDate:"2023\u5e745\u670828\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Node.js",permalink:"/tags/node-js"}],readingTime:4.285,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",date:"2023-05-28T23:07:00.000Z",update:"2023-05-28T23:07:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"},nextItem:{title:"WebGPU \u2013 Web \u5e73\u53f0\u7684\u901a\u7528\u8ba1\u7b97 API",permalink:"/computer-technology/web-frontend/api/webgpu-gpgpu"}},i={authorsImageUrls:[void 0]},p=[{value:"CommonJS\uff1a\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684",id:"commonjs\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684",level:3},{value:"ES Modules\uff1a\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684",id:"es-modules\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684",level:3},{value:"<code>--experimental-specifier-resolution=node</code>",id:"--experimental-specifier-resolutionnode",level:3},{value:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668",id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2023-05-28 23:07:00"))),(0,r.kt)("p",null,"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental-specifier-resolution")," \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0cNode.js \u6587\u4ef6\u7684\u6269\u5c55\u540d\u5c31\u6709\u6570\u79cd\uff0c\u6bd4\u5982\u5e38\u89c1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".js"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".mjs"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".cjs"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".node"),"\uff0c\u4e4b\u6240\u4ee5\u6709\u8fd9\u4e9b\u4e1c\u897f\u5b58\u5728\uff0c\u662f\u56e0\u4e3a\u4e86 Node.js \u4ece\u6700\u521d\u7684\u7248\u672c\u53d1\u5c55\u5230\u73b0\u5728\uff0c\u5df2\u5386\u7ecf\u4e86\u6570\u4e2a\u5927\u7248\u672c\u7684\u66f4\u65b0\uff0c\u6709\u5f88\u6c89\u91cd\u7684\u5386\u53f2\u5305\u88b1\u3002"),(0,r.kt)("h3",{id:"commonjs\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684"},"CommonJS\uff1a\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684"),(0,r.kt)("p",null,"\u76f8\u4fe1\u5f88\u591a\u4f7f\u7528 Node.js \u7684\u5f00\u53d1\u8005\u76ee\u524d\u719f\u6089\u7684\u5e94\u8be5\u662f CommonJS \u98ce\u683c\uff0c\u5176\u4e2d",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u9700\u8981\u5f3a\u5236\u5728\u4ee3\u7801\u4e2d\u5199\u6587\u4ef6\u7684\u6269\u5c55\u540d"),"\uff0c\u8fd9\u5b9e\u9645\u4e0a\u548c\u5176\u5b83\u540e\u7aef\u8bed\u8a00\u4f53\u9a8c\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const foo = require('./foo.js'); // work!\nconst foo = require('./foo'); // work too!\n")),(0,r.kt)("h3",{id:"es-modules\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684"},"ES Modules\uff1a\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684"),(0,r.kt)("p",null,"\u5728\u73b0\u5982\u4eca Node.js \u5df2\u5168\u9762\u652f\u6301 ES Modules \u7684\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 ES Modules \u7f16\u5199\u4ee3\u7801\u9ed8\u8ba4\u5fc5\u987b\u5199\u6587\u4ef6\u7684\u6269\u5c55\u540d"),"\uff0c\u636e\u5b98\u65b9\u6587\u6863\u8bf4\u660e\uff0c\u8fd9\u4e0e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u884c\u4e3a\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as foo from './foo.js'; // work!\nimport * as foo from './foo'; // error, not work!\n")),(0,r.kt)("h3",{id:"--experimental-specifier-resolutionnode"},(0,r.kt)("inlineCode",{parentName:"h3"},"--experimental-specifier-resolution=node")),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u7528 ES Modules \u7f16\u5199\u4ee3\u7801\uff0c\u53c8\u4e0d\u9700\u8981\u5199\u6587\u4ef6\u6269\u5c55\u540d\uff0cNode.js \u5728\u5f88\u4e45\u4ee5\u524d\u5c31\u7ed9\u51fa\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u7684 flag \u6765\u5e94\u5bf9\u8fd9\u7c7b\u95ee\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ node --experimental-specifier-resolution=node index.js\n")),(0,r.kt)("p",null,"\u4e0d\u8fc7\uff0c\u8fd1\u671f\u5728\u4f7f\u7528 Node.js v20 \u7248\u672c\u65f6\uff0c\u7a81\u7136\u53d1\u73b0\u8be5 flag \u5931\u6548\u4e86\uff0c\u5bfc\u81f4\u5199\u7684\u6ca1\u6709\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\u65e0\u6cd5\u8fd0\u884c\u3002\u9042\u5f00\u59cb\u67e5\u9605\u5b98\u65b9\u6587\u6863\uff0c\u53d1\u73b0\u5728 v18 \u7684\u6587\u6863\u4e2d\u8be5 flag \u8fd8\u53ef\u4ee5\u7d22\u5f15\uff0cv20 \u7684\u6587\u6863\u4e2d\u5df2\u7ecf\u65e0\u6cd5\u7d22\u5f15\u4e86\uff0c\u5728\u540e\u7eed\u67e5\u9605\u8d44\u6599\u7684\u8fc7\u7a0b\u4e2d\u7ec8\u4e8e\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/announcements/v19-release-announce#custom-esm-resolution-adjustments"},"Node.js \u7684 v19 \u53d1\u5e03\u516c\u544a"),"\u4e2d\u53d1\u73b0\u4e86\u95ee\u9898\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Node.js has removed the --experimental-specifier-resolution flag. Its functionality can now be achieved via custom loaders.")),(0,r.kt)("p",null,"Node.js v18 \u5c06\u662f\u6700\u540e\u4e00\u4e2a\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental-specifier-resolution")," \u547d\u4ee4\u884c flag \u7684\u5927\u7248\u672c\u3002"),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668"},"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668"),(0,r.kt)("p",null,"\u76f8\u4fe1\u8fd9\u4e00\u53d8\u5316\u7ed9\u5f88\u591a\u4eba\u9020\u6210\u4e86\u56f0\u6270\uff0c\u5bf9\u4e8e\u6211\u4e5f\u662f\u3002\u5b98\u65b9\u7ed9\u7684\u65b9\u6848\u662f",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668"),"\uff0c\u4f46\u6ca1\u6709\u5177\u4f53\u7684\u6587\u6863\u8bf4\u660e\uff0c\u53ea\u80fd\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/pull/44859"},"v19 \u53d1\u5e03\u516c\u544a\u4e2d\u63d0\u53ca\u7684 Github Issue")," \u4e2d\u5bfb\u5f97\u86db\u4e1d\u9a6c\u8ff9\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9700\u8981\u5b89\u88c5\u4e00\u4e2a\u5b98\u65b9\u63d0\u4f9b\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader"},"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u5305"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i commonjs-extension-resolution-loader\n")),(0,r.kt)("p",null,"\u7136\u540e\u6539\u53d8\u8fd0\u884c\u6587\u4ef6\u7684\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u524d\n$ node --experimental-specifier-resolution=node index.js\n\n# \u73b0\u5728\n$ node --experimental-loader=commonjs-extension-resolution-loader index.js\n")),(0,r.kt)("p",null,"\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u8be5\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801\uff0c\u5982\u679c\u9047\u5230\u7b2c\u4e09\u65b9\u5305\u662f ES Modules\uff0c\u4e14\u6ca1\u6709\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u5b57\u6bb5\u5c06\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230\u6a21\u5757\u7684\u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a CommonJS \u89c4\u8303\u6a21\u5757\u89e3\u6790\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u5b57\u6bb5\uff0c\u800c ES Modules \u89c4\u8303\u5219\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," \u5b57\u6bb5\u6307\u5b9a\u6a21\u5757\u5165\u53e3\u6587\u4ef6\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u9274\u4e8e\u4ee5\u4e0a\u60c5\u51b5\uff0c\u5982\u679c\u662f\u65b0\u9879\u76ee\uff0c\u800c\u4e14\u91c7\u7528 ES Modules \u7f16\u5199\u4ee3\u7801\uff0c\u90a3\u8fd8\u662f\u5e26\u4e0a\u6587\u4ef6\u6269\u5c55\u540d\u9075\u5faa\u5176\u89c4\u8303\u6bd4\u8f83\u597d\uff0c\u653e\u5f03\u91c7\u7528 flag \u4ee5\u53ca\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u7684\u65b9\u5f0f\u8fd0\u884c\u4ee3\u7801\uff0c\u6bd5\u7adf\u4f1a\u5e26\u6765\u4e00\u4e9b\u989d\u5916\u7684\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/blog/announcements/v19-release-announce"},"https://nodejs.org/en/blog/announcements/v19-release-announce")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/docs/latest-v18.x/api/cli.html#--experimental-specifier-resolutionmode"},"https://nodejs.org/docs/latest-v18.x/api/cli.html#--experimental-specifier-resolutionmode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader"},"https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points"},"https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points"))))}m.isMDXComponent=!0}}]);