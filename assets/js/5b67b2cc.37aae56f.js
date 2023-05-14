"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[24471],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>b});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(l),b=a,k=m["".concat(p,".").concat(b)]||m[b]||u[b]||r;return l?n.createElement(k,o(o({ref:t},c),{},{components:l})):n.createElement(k,o({ref:t},c))}));function b(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},19471:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=l(87462),a=(l(67294),l(3905));const r={title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",date:new Date("2021-12-07T01:13:00.000Z"),update:new Date("2021-12-08T21:12:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],description:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e core-js\uff0c\u800c ESLint \u5219\u53ef\u4f5c\u4e3a\u81ea\u52a8\u68c0\u6d4b\u7684\u8f85\u52a9\u5de5\u5177\u3002"},o=void 0,i={permalink:"/Computer-Technology/web-frontend/tools-web-fee-polyfill-corejs-eslint",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/web-frontend/tools-web-fee-polyfill-corejs-eslint.md",source:"@site/blog/Computer-Technology/web-frontend/tools-web-fee-polyfill-corejs-eslint.md",title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",description:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e core-js\uff0c\u800c ESLint \u5219\u53ef\u4f5c\u4e3a\u81ea\u52a8\u68c0\u6d4b\u7684\u8f85\u52a9\u5de5\u5177\u3002",date:"2021-12-07T01:13:00.000Z",formattedDate:"2021\u5e7412\u67087\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"Web",permalink:"/tags/web"},{label:"Polyfill",permalink:"/tags/polyfill"}],readingTime:8.71,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",date:"2021-12-07T01:13:00.000Z",update:"2021-12-08T21:12:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],description:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e core-js\uff0c\u800c ESLint \u5219\u53ef\u4f5c\u4e3a\u81ea\u52a8\u68c0\u6d4b\u7684\u8f85\u52a9\u5de5\u5177\u3002"},prevItem:{title:"TypeScript\uff1a\u6269\u5c55\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49",permalink:"/Computer-Technology/TypeScript/tools-typescript-type-extend"},nextItem:{title:"UNIX\u4f20\u5947\uff1a\u5386\u53f2\u4e0e\u56de\u5fc6",permalink:"/2021/12/05/Life/reading/reading-"}},p={authorsImageUrls:[void 0]},s=[{value:"\u57fa\u4e8e <code>core-js</code> \u7684\u517c\u5bb9\u65b9\u6848",id:"\u57fa\u4e8e-core-js-\u7684\u517c\u5bb9\u65b9\u6848",level:2},{value:"API \u517c\u5bb9\u6027",id:"api-\u517c\u5bb9\u6027",level:3},{value:"\u517c\u5bb9\u76ee\u6807",id:"\u517c\u5bb9\u76ee\u6807",level:3},{value:"ESLint",id:"eslint",level:3},{value:"Babel",id:"babel",level:3},{value:"<code>@babel/polyfill</code>",id:"babelpolyfill",level:4},{value:"<code>@babel/preset-env</code>",id:"babelpreset-env",level:4},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003\u8d44\u6e90",id:"\u53c2\u8003\u8d44\u6e90",level:2}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2021-12-08 21:12:00"))),(0,a.kt)("p",null,"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u517c\u5bb9\u6027\u95ee\u9898\u672c\u8eab\u662f\u4e2a\u96be\u9898\uff0cPolyfill \u4e5f\u5e76\u975e\u5f88\u597d\u5904\u7406\uff0c\u6240\u4ee5\u5728\u6280\u672f\u6f14\u53d8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u793e\u533a\u8fbe\u6210\u4e86\u4e00\u81f4\uff0c\u6709\u4e00\u4e2a\u4e3b\u6d41\u7684\u65b9\u6848\uff0c\u5927\u5bb6\u5171\u540c\u6765\u4f7f\u7528\u548c\u7ef4\u62a4\u3002\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js"),"\uff0c\u53e6\u4e00\u65b9\u9762\uff0c \u5229\u7528 ESLint \u63d2\u4ef6\u5219\u53ef\u4ee5\u505a\u5230\u81ea\u52a8\u68c0\u6d4b\u4ee3\u7801\u4e2d\u9700\u8981\u6dfb\u52a0 Polyfill \u7684 API\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," \u53ea\u662f\u89e3\u51b3\u4e86 JavaScript \u7684\u517c\u5bb9\u6027\u95ee\u9898\uff0cWeb \u7f51\u9875\u8fd8\u6709 CSS / HTML / Web API \u7684\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5904\u7406\u8fd9\u4e9b\u95ee\u9898\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5fc5\u7136\u4f1a\u5b58\u5728\u5927\u91cf\u76f8\u4f3c\u7684\u903b\u8f91\uff0c\u6bd4\u5982\u76ee\u6807\u8bbe\u5907\u7684\u68c0\u6d4b\u3001\u76ee\u6807\u8bbe\u5907\u7684 API \u652f\u6301\u60c5\u51b5\u7edf\u8ba1\u3002\u5f53\u7136\uff0c\u793e\u533a\u4e5f\u7ed9\u51fa\u4e86\u975e\u5e38\u597d\u7684\u65b9\u6848\uff0c\u4e0b\u9762\u5c31\u6765\u4e86\u89e3\u4e00\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u57fa\u4e8e-core-js-\u7684\u517c\u5bb9\u65b9\u6848"},"\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h2"},"core-js")," \u7684\u517c\u5bb9\u65b9\u6848"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6765\u770b\u770b\u8fd9\u4e24\u8005\u5982\u4f55\u8fdb\u884c\u914d\u5408\u4ee5\u975e\u5e38\u4f18\u96c5\u7684\u65b9\u5f0f\u5b8c\u6210 Polyfill \u4efb\u52a1\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," \u662f\u5b9e\u73b0\u4e86\u9075\u5faa ECMAScript \u6807\u51c6\u7684\u6a21\u5757\u5316\u6807\u51c6\u5e93\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e3b\u8981\u662f\u5b9e\u73b0 JavaScript \u7684 API\uff0c\u8fd9\u5e76\u4e0d\u5305\u62ec\u6d4f\u89c8\u5668\u5e73\u53f0\u7684 Web API\uff08\u4f8b\u5982\u4e00\u4e9b DOM API\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u7b49\uff09\u3002\u7528\u8d77\u6765\u4e5f\u5f88\u7b80\u5355\uff0c\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// polyfill all `core-js` features:\nimport 'core-js';\n// polyfill only stable `core-js` features - ES and web standards:\nimport 'core-js/stable';\n// polyfill only stable ES features:\nimport 'core-js/es';\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u662f\u5c06\u6240\u6709 API \u7684 polyfills \u5f15\u5165\u9879\u76ee\uff0c\u4e3a\u4e86\u6784\u5efa\u5305\u5c3a\u5bf8\u66f4\u5c0f\uff0c\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u5bf9\u7279\u5b9a API \u505a\u517c\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import 'core-js/modules/es.array.unscopables.flat';\nimport 'core-js/modules/es.array.unscopables.flat-map';\nimport 'core-js/modules/es.object.from-entries';\nimport 'core-js/modules/web.immediate';\n")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u65b9\u5f0f\u5f15\u5165\u7684 polyfill \u4f1a\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u5f00\u53d1 Web \u5e94\u7528\u9879\u76ee\u65f6\u4e5f\u8bb8\u4e0d\u5b58\u5728\u592a\u5927\u95ee\u9898\uff0c\u4f46\u82e5\u662f\u5f00\u53d1\u7b2c\u4e09\u65b9\u5de5\u5177\u5e93\uff0c\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b98\u65b9\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js-pure")," \u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Set from 'core-js-pure/features/set';\n")),(0,a.kt)("p",null,"\u867d\u7136\u8bf4 ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," \u53ea\u662f\u9488\u5bf9 JavaScript API \u7684\u517c\u5bb9\u65b9\u6848\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\uff0c\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u975e\u5e38\u5e38\u7528\u7684 Web API \u7684 polyfills\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," \u7b49\u3002"),(0,a.kt)("h3",{id:"api-\u517c\u5bb9\u6027"},"API \u517c\u5bb9\u6027"),(0,a.kt)("p",null,"\u600e\u4e48\u4e3a API \u505a\u517c\u5bb9\u7684\u95ee\u9898\u89e3\u51b3\u6389\u4e4b\u540e\uff0c\u9700\u8981\u8003\u8651\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u600e\u4e48\u5224\u65ad API \u7684\u517c\u5bb9\u6027\uff0c\u9996\u5148\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/"},"MDN Web Docs")," \u7279\u5b9a API \u6587\u6863\u9875\u9762\u6700\u4e0b\u65b9\u4f1a\u6709\u4e00\u4e2a\u517c\u5bb9\u6027\u7edf\u8ba1\u8868\u683c\uff0c\u8fd9\u4e2a\u662f\u6bd4\u8f83\u51c6\u786e\u548c\u5168\u9762\u7684\u3002\u5f53\u7136\uff0c\u5982\u679c\u8981\u6700\u51c6\u786e\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u53bb\u7279\u5b9a\u6d4f\u89c8\u5668\u5382\u5546\u7684\u6807\u51c6\u72b6\u6001\u9875\u9762\u67e5\u8be2\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://www.chromestatus.com/features"},"Chrome Platform Status")," \u7b49\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4e3a\u4e86\u8ba9\u793e\u533a\u5404\u79cd\u5de5\u5177\u94fe\u81ea\u52a8\u5316\u53bb\u68c0\u6d4b API \u517c\u5bb9\u60c5\u51b5\uff0c\u6709\u975e\u5e38\u8457\u540d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/"},"Can I use")," \u7ad9\u70b9\u3002\u8be5\u7ad9\u70b9\u65b9\u4fbf\u5f00\u53d1\u8005\u67e5\u8be2\u5404\u79cd JavaScript / CSS / HTML / Web API \u7684\u8bbe\u5907\u517c\u5bb9\u60c5\u51b5\uff0c\u540c\u65f6\u7ef4\u62a4\u4e86\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u4f9b\u793e\u533a\u5176\u5b83\u5de5\u5177\u5f00\u53d1\u8005\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u517c\u5bb9\u76ee\u6807"},"\u517c\u5bb9\u76ee\u6807"),(0,a.kt)("p",null,"\u6709\u4e86\u68c0\u6d4b API \u517c\u5bb9\u60c5\u51b5\u548c\u6dfb\u52a0 polyfill \u7684\u5de5\u5177\u540e\uff0c\u8fd8\u6709\u4e00\u4e2a\u5f88\u5173\u952e\u7684\u95ee\u9898\uff1a\u4e3a\u4e86\u52a0\u8f7d\u6027\u80fd\u7684\u4f18\u5316\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u5f15\u5165\u5168\u91cf\u7684 polyfills\uff0c\u600e\u4e48\u9488\u5bf9\u7279\u5b9a\u5e73\u53f0\u53bb\u62e3\u9009\u76f8\u5e94\u7684 polyfills\uff1fAPI \u517c\u5bb9\u68c0\u6d4b\u5de5\u5177\u7684\u76ee\u6807\u5e73\u53f0\u662f\u4ec0\u4e48\uff1f\u7279\u5b9a API \u662f\u5426\u9700\u8981\u6dfb\u52a0 polyfills\uff1f"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u793e\u533a\u5404\u79cd\u5de5\u5177\u94fe\u7684\u901a\u7528\u6027\uff0c\u4e5f\u6709\u4e00\u4e2a\u5f88\u8457\u540d\u7684\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Browserslist"),"\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u914d\u7f6e\u4ee3\u7801\u517c\u5bb9\u7684\u76ee\u6807\u5e73\u53f0\uff0c\u76f8\u5e94\u7684\u5de5\u5177\u94fe\u5c06\u4f1a\u4ee5\u8be5\u76ee\u6807\u5904\u7406\u6211\u4eec\u6240\u5199\u7684\u4ee3\u7801\u3002"),(0,a.kt)("h3",{id:"eslint"},"ESLint"),(0,a.kt)("p",null,"\u6709\u4e86\u4ee5\u4e0a\u5de5\u5177\u540e\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u89e3\u6790\u4ee3\u7801\u5e76\u8fd0\u884c\u8fd9\u4e9b\u5de5\u5177\u7684\u5de5\u5177\uff0cESLint \u6070\u597d\u9002\u5408\u8fd9\u4e2a\u89d2\u8272\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-plugin-compat")," \u63d2\u4ef6\u53ef\u4ee5\u6839\u636e browserslist \u7684\u914d\u7f6e\u53bb\u67e5\u8be2\u6240\u5199\u4ee3\u7801\u4e2d\u9700\u8981\u517c\u5bb9\u7684 API \u5e76\u63d0\u793a\u51fa\u6765\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"eslint-plugin-compat\uff08\u89e3\u6790\u4ee3\u7801\uff09-> \u7528\u89e3\u6790\u7684\u4ee3\u7801\u548c browserslist \u914d\u7f6e\u6839\u636e\u6807\u51c6\u67e5\u8be2\uff08MDN/Can I use \u7b49\uff09\u4ee3\u7801\u4e2d\u7684\u517c\u5bb9\u60c5\u51b5 -> \u5f00\u53d1\u8005\u624b\u52a8\u5f15\u5165 polyfills")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6ce8\u610f\u5230\uff0c\u8be5\u63d2\u4ef6\u4ec5\u4ec5\u662f\u5e2e\u6211\u4eec\u68c0\u6d4b\u51fa\u6765\u4ee3\u7801\u4e2d\u9700\u8981\u5f15\u5165 polyfills \u7684 API\uff0c\u6700\u7ec8\u8fd8\u662f\u9700\u8981\u5f00\u53d1\u8005\u624b\u52a8\u5f15\u5165 polyfills\uff0c\u8fd9\u662f\u6bd4\u8f83\u9ebb\u70e6\u7684\u3002\u5f53\u7136\uff0cESLint \u5e72\u4e86\u81ea\u5df1\u8be5\u5e72\u7684\uff0c\u5269\u4e0b\u7684\u4e8b\u60c5\u4ea4\u7ed9 Babel \u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"babel"},"Babel"),(0,a.kt)("p",null,"\u8bf4\u5230 Polyfill\uff0c\u8fd8\u5f97\u518d\u63d0\u4e00\u4e0b\u793e\u533a\u4e3b\u6d41\u7684 JavaScript \u7f16\u8bd1\u65b9\u6848 Babel\uff0c\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u4e00\u5f00\u59cb\uff0cBabel \u56e2\u961f\u540c\u65f6\u975e\u5e38\u8d34\u5fc3\u7684\u63d0\u4f9b\u4e86 Polyfill \u65b9\u6848 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/polyfill"),"\u3002"),(0,a.kt)("h4",{id:"babelpolyfill"},(0,a.kt)("inlineCode",{parentName:"h4"},"@babel/polyfill")),(0,a.kt)("p",null,"\u5982\u679c\u770b\u8fc7\u6e90\u7801\uff0c\u6216\u8005\u770b\u8fc7\u76ee\u524d\u7684\u6587\u6863\uff0c\u5176\u5b9e @babel/polyfill \u505a\u7684\u4e8b\u60c5\u7b49\u4ef7\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// see docs: https://babeljs.io/docs/en/babel-polyfill/\nimport 'core-js/stable';\nimport 'regenerator-runtime/runtime';\n")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u73b0\u5728\uff08Babel 7.4.0+\uff09\u8fd9\u4e2a\u65b9\u6848\u5df2\u7ecf\u88ab\u5b98\u65b9\u5f03\u7528\u4e86\uff0c\u8fd9\u53c8\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\u5176\u5b9e\u770b\u4e0a\u9762\u7684\u4ee3\u7801\u4e5f\u80fd\u731c\u51fa\u4e2a\u5927\u6982\uff0c\u8fd9\u79cd\u65b9\u6848\u4e0d\u591f\u7075\u6d3b\uff0c\u628a\u9700\u8981\u548c\u4e0d\u9700\u8981\u7684 polyfills \u5168\u90e8\u6dfb\u52a0\u5230\u9879\u76ee\u4ee3\u7801\u4e2d\uff0c\u4e0d\u5229\u4e8e\u52a0\u8f7d\u6027\u80fd\u4f18\u5316\uff1b\u5176\u6b21\uff0c\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u662f\u4e2a\u9ed1\u76d2\u5b50\uff0c\u5f00\u53d1\u8005\u4e0d\u6e05\u695a\u5e72\u4e86\u54ea\u4e9b\u4e8b\uff0c\u5e72\u5230\u4e86\u4ec0\u4e48\u7a0b\u5ea6\uff0c\u4e0d\u53d7\u5f00\u53d1\u8005\u63a7\u5236\u3002\u6587\u6863\u4e2d\u4e5f\u6709\u6240\u63d0\u53ca\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Depending on what ES2015 methods you actually use, you may not need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/polyfill")," or the runtime plugin. You may want to only ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#commonjs-api"},"load the specific polyfills you are using")," (like ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign"),") or just document that the environment the library is being loaded in should include certain polyfills.")),(0,a.kt)("p",null,"\u5176\u5b9e\u610f\u601d\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u628a polyfill \u7684\u63a7\u5236\u6743\u4ea4\u7ed9\u4e86\u5f00\u53d1\u8005\u3002\u4e0e\u6b64\u540c\u65f6\uff0cBabel \u53c8\u7ed9\u51fa\u4e86\u53e6\u4e00\u4e2a\u65b9\u6848 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env"),"\u3002"),(0,a.kt)("h4",{id:"babelpreset-env"},(0,a.kt)("inlineCode",{parentName:"h4"},"@babel/preset-env")),(0,a.kt)("p",null,"\u8be5\u65b9\u6848\u4e3b\u8981\u89e3\u51b3\u4e86 @babel/polyfill \u65b9\u6848\u4e0d\u591f\u7075\u6d3b\u7684\u95ee\u9898\uff0c\u63d0\u4f9b\u4e86\u4e24\u79cd\u9009\u62e9\uff1a\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"useBuiltIns")," \u914d\u7f6e\u9879\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"usage")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"entry"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entry")," \u6a21\u5f0f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option enables a new plugin that replaces the ",(0,a.kt)("inlineCode",{parentName:"p"},'import "core-js/stable";')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'import "regenerator-runtime/runtime"')," statements (or ",(0,a.kt)("inlineCode",{parentName:"p"},'require("core-js")')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'require("regenerator-runtime/runtime")'),") with individual requires to different ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," entry points based on environment.")),(0,a.kt)("p",null,"\u8be5\u6a21\u5f0f\u9700\u8981\u5f00\u53d1\u8005\u5728\u5165\u53e3\u6587\u4ef6\u663e\u5f0f\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js"),"\uff0c\u7136\u540e Babel \u4f1a\u6839\u636e\u914d\u7f6e\u7684\u517c\u5bb9\u76ee\u6807\u73af\u5883\u7cbe\u7ec6\u5316\u62e3\u9009\u9700\u8981\u7684 polyfills \u5f15\u5165\uff0c\u8fbe\u5230\u51cf\u5c0f\u6700\u7ec8\u6784\u5efa\u5305\u4f53\u79ef\u7684\u76ee\u7684\u3002\u8fd9\u91cc\u662f\u4ee5\u6240\u6709\u7684 polyfills \u548c\u517c\u5bb9\u76ee\u6807\u73af\u5883\u4e3a\u57fa\u7840\u8fdb\u884c\u8fc7\u6ee4\uff0c\u8fc7\u6ee4\u6389\u76ee\u6807\u73af\u5883\u5df2\u652f\u6301 API \u7684 polyfills\uff0c\u4e5f\u5c31\u662f\u8bf4\u6700\u7ec8\u8fd8\u662f\u4f1a\u5f15\u5165\u9879\u76ee\u4ee3\u7801\u6ca1\u6709\u7528\u5230\u7684 API \u7684 polyfills\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"usage")," \u6a21\u5f0f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.")),(0,a.kt)("p",null,"\u800c\u8fd9\u79cd\u6a21\u5f0f\u5c31\u89e3\u51b3\u4e86\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u5728\u4ee5\u4e0a\u6a21\u5f0f\u8fc7\u6ee4\u6389\u7684\u7ed3\u679c\u4e2d\uff0c\u518d\u4ee5\u9879\u76ee\u4ee3\u7801\u4e3a\u57fa\u7840\uff0c\u8fc7\u6ee4\u6389\u6ca1\u6709\u7528\u5230\u7684 API \u7684 polyfills\uff0c\u8fd9\u6837\u6700\u7ec8\u7684\u6784\u5efa\u5305\u4f53\u79ef\u4f1a\u8fdb\u4e00\u6b65\u51cf\u5c0f\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u4e86\u89e3\u5230\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," \u7684\u517c\u5bb9\u65b9\u6848\u662f\u901a\u8fc7\u4e00\u7cfb\u5217\u4f18\u79c0\u7684\u793e\u533a\u5f00\u6e90\u9879\u76ee\u5171\u540c\u914d\u5408\u5b8c\u6210\u7684\uff0c\u501f\u52a9 Babel \u7684\u5de5\u5177\u53ef\u4ee5\u81ea\u52a8\u5316\u5b8c\u6210\u5927\u90e8\u5206\u7684\u517c\u5bb9\u5de5\u4f5c\uff0c\u800c\u501f\u52a9 ESLint \u7684\u63d2\u4ef6\u5de5\u5177\u53ef\u4ee5\u663e\u5f0f\u77e5\u9053\u54ea\u4e9b API \u9700\u8981\u5f15\u5165 Polyfill \u6765\u505a\u517c\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6e90"},"\u53c2\u8003\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zloirock/core-js"},"https://github.com/zloirock/core-js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/"},"https://developer.mozilla.org/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/"},"https://caniuse.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/browserslist/browserslist"},"https://github.com/browserslist/browserslist")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://browserslist.dev/"},"https://browserslist.dev/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eslint.org/"},"https://eslint.org/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/amilajack/eslint-plugin-compat"},"https://github.com/amilajack/eslint-plugin-compat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://babeljs.io/"},"https://babeljs.io/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-polyfill/"},"https://babeljs.io/docs/en/babel-polyfill/"))))}u.isMDXComponent=!0}}]);