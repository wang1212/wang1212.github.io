"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[81133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||a;return n?l.createElement(k,o(o({ref:t},d),{},{components:n})):l.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={title:"DOM-\u6587\u672c\u8282\u70b9",date:new Date("2016-05-24T21:50:00.000Z"),update:new Date("2016-05-24T21:50:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],description:"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"},o=void 0,i={permalink:"/Computer-Technology/web-frontend/dom/dom-textnode",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/web-frontend/dom/dom-textnode.md",source:"@site/blog/Computer-Technology/web-frontend/dom/dom-textnode.md",title:"DOM-\u6587\u672c\u8282\u70b9",description:"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002",date:"2016-05-24T21:50:00.000Z",formattedDate:"2016\u5e745\u670824\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"Text Node",permalink:"/tags/text-node"}],readingTime:5.435,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u6587\u672c\u8282\u70b9",date:"2016-05-24T21:50:00.000Z",update:"2016-05-24T21:50:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Text Node"],description:"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"},prevItem:{title:"DOM-\u52a0\u8f7d JavaScript",permalink:"/Computer-Technology/web-frontend/dom/dom-js"},nextItem:{title:"DOM-\u6587\u6863\u7247\u6bb5",permalink:"/Computer-Technology/web-frontend/dom/dom-fragment"}},p={authorsImageUrls:[void 0]},u=[{value:"\u6587\u672c\u8282\u70b9",id:"\u6587\u672c\u8282\u70b9",level:2},{value:"\u6587\u672c\u8282\u70b9\u7684 DOM \u64cd\u4f5c",id:"\u6587\u672c\u8282\u70b9\u7684-dom-\u64cd\u4f5c",level:2},{value:"\u521b\u5efa\u8282\u70b9\u5e76\u66f4\u65b0\u5230 DOM \u6811",id:"\u521b\u5efa\u8282\u70b9\u5e76\u66f4\u65b0\u5230-dom-\u6811",level:3},{value:"\u83b7\u53d6\u8282\u70b9\u7684\u6587\u672c\u503c",id:"\u83b7\u53d6\u8282\u70b9\u7684\u6587\u672c\u503c",level:3},{value:"\u8282\u70b9\u7684\u6587\u672c\u503c\u64cd\u4f5c",id:"\u8282\u70b9\u7684\u6587\u672c\u503c\u64cd\u4f5c",level:3},{value:"\u591a\u4e2a\u6587\u672c\u8282\u70b9\u7684\u60c5\u51b5",id:"\u591a\u4e2a\u6587\u672c\u8282\u70b9\u7684\u60c5\u51b5",level:3},{value:"\u5143\u7d20\u5185\u6240\u6709\u6587\u672c\u503c",id:"\u5143\u7d20\u5185\u6240\u6709\u6587\u672c\u503c",level:4},{value:"\u5408\u5e76\u591a\u4e2a\u6587\u672c\u8282\u70b9",id:"\u5408\u5e76\u591a\u4e2a\u6587\u672c\u8282\u70b9",level:4},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-24 21:50:00"))),(0,r.kt)("p",null,"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u867d\u7136\u5f88\u591a\u65f6\u5019\u6211\u4eec\u76f4\u63a5\u7528 innerHTML \u53bb\u8d4b\u503c\u66ff\u6362\uff0c\u4f46\u5f53\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u7ec6\u5fae\u7684\u4fee\u6539\u65f6\uff0c\u4e86\u89e3\u4e00\u4e0b DOM \u64cd\u4f5c\u8fd8\u662f\u975e\u5e38\u6709\u7528\u7684\u3002"),(0,r.kt)("h2",{id:"\u6587\u672c\u8282\u70b9"},"\u6587\u672c\u8282\u70b9"),(0,r.kt)("p",null,"\u6587\u672c\u8282\u70b9\u7684 DOM \u64cd\u4f5c\u662f\u4e0d\u5e38\u7528\u7684\uff0c\u6211\u4eec\u901a\u5e38\u76f4\u63a5\u7528\u5143\u7d20\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"innerHTML")," \u5c5e\u6027\u76f4\u63a5\u66ff\u6362\u5176\u6240\u6709\u6587\u672c\u8282\u70b9\uff0c\u4f46\u5f53\u6211\u4eec\u8981\u5bf9\u6587\u672c\u8282\u70b9\u8fdb\u884c\u5c40\u90e8\u64cd\u4f5c\u65f6 DOM \u64cd\u4f5c\u5374\u662f\u5f88\u6709\u7528\u7684\u3002\u4e0b\u9762\u5217\u4e3e\u4e00\u4e9b\u6587\u672c\u8282\u70b9\u5e38\u7528\u7684\u5c5e\u6027\u53ca\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"textContent"),(0,r.kt)("li",{parentName:"ul"},"appendData()"),(0,r.kt)("li",{parentName:"ul"},"deleteData()"),(0,r.kt)("li",{parentName:"ul"},"insertData()"),(0,r.kt)("li",{parentName:"ul"},"replaceData()"),(0,r.kt)("li",{parentName:"ul"},"subStringData()"),(0,r.kt)("li",{parentName:"ul"},"splitText()"),(0,r.kt)("li",{parentName:"ul"},"normalize"),(0,r.kt)("li",{parentName:"ul"},"Data")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u5728\u5143\u7d20\u8282\u70b9\u4e2d\u7559\u4e0b\u7684\u7a7a\u683c\u3001\u56de\u8f66\u7b26\u3001\u5236\u8868\u7b26\u7b49\u7a7a\u767d\u5b57\u7b26\u4e5f\u662f\u88ab\u89e3\u6790\u6210\u6587\u672c\u8282\u70b9\u7684\uff0c\u6240\u4ee5\u8bf4\u6211\u4eec\u4e0d\u538b\u7f29\u9875\u9762\u4ee3\u7801\u7684\u8bdd\uff0c\u4f1a\u6709\u8bb8\u591a\u65e0\u7528\u7684\u6587\u672c\u8282\u70b9\u5f71\u54cd\u6027\u80fd\u3002"),(0,r.kt)("h2",{id:"\u6587\u672c\u8282\u70b9\u7684-dom-\u64cd\u4f5c"},"\u6587\u672c\u8282\u70b9\u7684 DOM \u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e0b\u9762\u5c31\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e0b\u6587\u672c\u8282\u70b9\u5e38\u7528\u7684 DOM \u64cd\u4f5c\u7684\u8fc7\u7a0b\uff0c\u9996\u5148\u6765\u4e86\u89e3\u4e00\u4e0b\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u6587\u672c\u8282\u70b9\u5e76\u5c06\u5176\u63d2\u5165\u5230 DOM \u6811\u4e2d\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u8282\u70b9\u5e76\u66f4\u65b0\u5230-dom-\u6811"},"\u521b\u5efa\u8282\u70b9\u5e76\u66f4\u65b0\u5230 DOM \u6811"),(0,r.kt)("p",null,"\u6587\u672c\uff08Text\uff09\u8282\u70b9\u4e0d\u540c\u4e8e\u5143\u7d20\u8282\u70b9\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," \u5bf9\u8c61\u4e0a\u4e5f\u6709\u4e13\u95e8\u7528\u6765\u521b\u5efa\u6587\u672c\u8282\u70b9\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"createTextNode()")),(0,r.kt)("p",null,"exp\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<body>\n\u3000\u3000<h1></h1>\n</body>\n<script>\n\u3000\u3000var textO = document.createTextNode('Hello World!');\n    document.querySelector('h1').appendChild(textO);\n<\/script>\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u8282\u70b9\u7684\u6587\u672c\u503c"},"\u83b7\u53d6\u8282\u70b9\u7684\u6587\u672c\u503c"),(0,r.kt)("p",null,"\u6587\u672c\u8282\u70b9\u7684\u6587\u672c\u503c\u662f\u5448\u73b0\u51fa\u6765\u7ed9\u7528\u6237\u770b\u7684\uff0c\u4f46\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4e5f\u9700\u8981\u8ba9\u7a0b\u5e8f\u53bb\u83b7\u77e5\u88ab\u7528\u6237\u4fee\u6539\u540e\u7684\u6587\u672c\u503c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data"),(0,r.kt)("li",{parentName:"ul"},"nodeValue"),(0,r.kt)("li",{parentName:"ul"},"substringData()")),(0,r.kt)("p",null,"exp\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<body>\n    <h1>Hello World!</h1>\n</body>\n<script>\n    var textO = document.querySelector('h1').firstChild;\n    // \u83b7\u53d6\u6587\u672c\u503c\n    console.log(texto.data); // Hello World!\n    console.log(textO.nodeValue); // Hello World!\n    // \u83b7\u53d6\u6587\u672c\u503c\u7684\u957f\u5ea6\n    console.log(textO.length);\n    console.log(textO.data.length);\n    console.log(textO.nodeValue.length);\n    // \u83b7\u53d6\u90e8\u5206\u6587\u672c\u503c\uff08\u5f00\u59cb\u7d22\u5f15<\u4e0d\u5305\u62ec>\uff0c\u957f\u5ea6\uff09\n    console.log(textO.substringData(6,5)); // World\n<\/script>\n")),(0,r.kt)("h3",{id:"\u8282\u70b9\u7684\u6587\u672c\u503c\u64cd\u4f5c"},"\u8282\u70b9\u7684\u6587\u672c\u503c\u64cd\u4f5c"),(0,r.kt)("p",null,"\u6587\u672c\u8282\u70b9\u7684\u6587\u672c\u503c\u4e8b\u5b9e\u4e0a\u4e5f\u662f\u91cd\u8981\u7684\u6570\u636e\uff0c\u8fd9\u6d89\u53ca\u5230\u4e00\u4e9b\u67e5\u770b\u3001\u589e\u6dfb\u3001\u5220\u9664\u3001\u4fee\u6539\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"appendData()"),(0,r.kt)("li",{parentName:"ul"},"deleteData()"),(0,r.kt)("li",{parentName:"ul"},"insertData()"),(0,r.kt)("li",{parentName:"ul"},"replaceData()"),(0,r.kt)("li",{parentName:"ul"},"splitText()")),(0,r.kt)("p",null,"exp\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<body>\n    <h1>Hello World</h1>\n</body>\n<script>\n    var textO = document.querySelector('h1').firstChild;\n    // \u6dfb\u52a0\uff08\u5c3e\u90e8\u9644\u52a0\uff09\n    textO.appendData('!');\n    console.log(textO.data); // Hello World!\n    // \u5220\u9664\uff08\u5220\u9664\u4f4d\u7f6e\u7d22\u5f15<\u4e0d\u5305\u62ec>\uff0c\u5220\u9664\u957f\u5ea6\uff09\n    textO.deleteData(7,4);\n    console.log(textO.data); // Hello W!\n    // \u63d2\u5165\uff08\u63d2\u5165\u4f4d\u7f6e\u7d22\u5f15<\u5176\u540e\u63d2\u5165>\uff0c\u63d2\u5165\u503c\uff09\n    textO.insertData(7,'orld');\n    console.log(textO.data); // Hello World!\n    // \u66ff\u6362\uff08\u66ff\u6362\u4f4d\u7f6e\u7d22\u5f15<\u4e0d\u5305\u62ec>\uff0c\u66ff\u6362\u957f\u5ea6\uff0c\u66ff\u6362\u503c\uff09\n    textO.replaceData(6,5,'China')\n    console.log(textO.data); // Hello China!\n    // \u5206\u5272\uff08\u5206\u5272\u4f4d\u7f6e\u7d22\u5f15<\u4e0d\u5305\u62ec>\uff0c\u5206\u5272\u957f\u5ea6\uff09\n    var sText = textO.splitText(6,5);\n    console.log(sText.data); // China!\n<\/script>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"splitText()")," \u65b9\u6cd5\u4f1a\u6309\u8981\u6c42\u5c06\u4e00\u4e2a\u6587\u672c\u8282\u70b9\u5206\u5272\u6210\u591a\u4e2a\u6587\u672c\u8282\u70b9\uff0c\u540c\u65f6\u8fd8\u4f1a\u8fd4\u56de\u5305\u542b\u5206\u5272\u90e8\u5206\u7684\u6587\u672c\u8282\u70b9\u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"\u591a\u4e2a\u6587\u672c\u8282\u70b9\u7684\u60c5\u51b5"},"\u591a\u4e2a\u6587\u672c\u8282\u70b9\u7684\u60c5\u51b5"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\u5185\u5199\u4e86\u5f88\u591a\u6587\u672c\u503c\u65f6\uff0c\u53ea\u8981\u5b83\u4eec\u6ca1\u6709\u88ab\u5143\u7d20\u8282\u70b9\u5206\u5272\uff0c\u6240\u6709\u76f8\u90bb\u7684\u6587\u672c\u503c\u5c06\u88ab\u6d4f\u89c8\u5668\u89e3\u6790\u6210\u4e00\u4e2a\u6587\u672c\u8282\u70b9\u3002\u4f46\u662f\uff0c\u5f53\u6211\u4eec\u4e3b\u52a8\u521b\u5efa\u591a\u4e2a\u6587\u672c\u8282\u70b9\u5e76\u63d2\u5165\u5230 DOM \u6811\u4e2d\u65f6\uff0c\u6d4f\u89c8\u5668\u5374\u4e0d\u4f1a\u5408\u5e76\u8fd9\u4e9b\u76f8\u90bb\u7684\u6587\u672c\u8282\u70b9\u3002"),(0,r.kt)("h4",{id:"\u5143\u7d20\u5185\u6240\u6709\u6587\u672c\u503c"},"\u5143\u7d20\u5185\u6240\u6709\u6587\u672c\u503c"),(0,r.kt)("p",null,"\u5f53\u5143\u7d20\u8282\u70b9\u5185\u7684\u6587\u672c\u503c\u88ab\u591a\u4e2a\u5143\u7d20\u8282\u70b9\u5206\u5272\u65f6\uff0c\u8fd9\u4e9b\u6587\u672c\u503c\u4f1a\u88ab\u89e3\u6790\u6210\u591a\u4e2a\u6587\u672c\u8282\u70b9\u3002\u5143\u7d20\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"innerHTML")," \u5c5e\u6027\u83b7\u53d6\u7684\u662f\u8be5\u8282\u70b9\u5185\u7684\u6240\u6709\u540e\u4ee3\u8282\u70b9\uff08\u5305\u62ec\u6587\u672c\u8282\u70b9\u4e0e\u5143\u7d20\u8282\u70b9\uff09\uff0c\u800c\u6211\u4eec\u6709\u65f6\u5019\u5374\u53ea\u60f3\u67e5\u770b\u8be5\u8282\u70b9\u7684\u6240\u6709\u6587\u672c\u503c\uff08\u6240\u6709\u6587\u672c\u8282\u70b9\u5408\u5e76\u800c\u6210\uff09\uff0c\u4e0b\u9762\u5c31\u6765\u770b\u770b\u5982\u4f55\u67e5\u770b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"textContent")),(0,r.kt)("p",null,"exp\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<body>\n    <h1>Hello <i>World!</i></h1>\n</body>\n<script>\n    var eleO = document.querySelector('h1');\n    // \u83b7\u53d6\u6240\u6709\u6587\u672c\u503c\n    console.log(eleO.textContent); // Hello World!\n    // \u8bbe\u7f6e\u6240\u6709\u6587\u672c\u503c\n    eleO.textContent = 'Hello World!';\n    console.log(eleO.textContent); // Hello World!\n<\/script>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"textContent")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"strong"},"innerHTML")," \u83b7\u53d6\u7684\u503c\u4e0d\u540c\uff0c\u4f46\u662f\u5b83\u4eec\u5728\u8fdb\u884c\u8bbe\u7f6e\u65f6\u884c\u4e3a\u5374\u662f\u4e00\u6837\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f1a\u8986\u76d6\u6389\u76ee\u6807\u5143\u7d20\u8282\u70b9\u5185\u7684\u6240\u6709\u540e\u4ee3\u8282\u70b9\u3002")),(0,r.kt)("h4",{id:"\u5408\u5e76\u591a\u4e2a\u6587\u672c\u8282\u70b9"},"\u5408\u5e76\u591a\u4e2a\u6587\u672c\u8282\u70b9"),(0,r.kt)("p",null,"\u5f53\u6709\u591a\u4e2a\u76f8\u90bb\u7684\u6587\u672c\u8282\u70b9\u5b58\u5728\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba9\u5176\u5408\u5e76\u6210\u4e00\u4e2a\u6587\u672c\u8282\u70b9\uff0c\u53ea\u9700\u8981\u5728\u5b83\u4eec\u7684\u7236\u5143\u7d20\u8282\u70b9\u4e0a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"normalize()")," \u65b9\u6cd5\u5373\u53ef\uff0c\u8fd9\u91cc\u4e0d\u518d\u505a\u793a\u4f8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"normalize()")),(0,r.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,r.kt)("p",null,"\u6587\u672c\u8282\u70b9\u7684\u5c5e\u6027\u53ca\u65b9\u6cd5\u5927\u90e8\u5206\u90fd\u53ef\u4ee5\u7528\u5728\u6ce8\u91ca\u8282\u70b9\uff08Comment\uff09\u4e0a\u3002"),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300aDOM \u542f\u8499\u300b\uff0cCody Lindley\uff0c\u9648\u517b\u5251 \u8bd1")))}m.isMDXComponent=!0}}]);