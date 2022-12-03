"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=l.createContext({}),d=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(n),s=o,k=m["".concat(a,".").concat(s)]||m[s]||c[s]||r;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var l=n(87462),o=(n(67294),n(3905));const r={title:"DOM-\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf",date:new Date("2016-05-19T14:54:00.000Z"),update:new Date("2016-05-19T14:54:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Rule"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Rule"],description:"\u5f53\u6211\u4eec\u5728\u67e5\u770b HTML \u6587\u6863\u65f6\uff0c\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u88ab\u89e3\u6790\u540e\uff0c\u90fd\u753b\u6210\u4e86\u53ef\u89c6\u5f62\u72b6\u3002\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u7684\u51e0\u4f55\u91cf\uff08\u5bbd\u3001\u9ad8\u3001\u504f\u79fb\u91cf\uff09\u4ee5\u53ca\u9875\u9762\u6eda\u52a8\u8ddd\u79bb\u3002"},i=void 0,p={permalink:"/Computer-Technology/Web/DOM/dom-rule",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/DOM/dom-rule.md",source:"@site/blog/Computer-Technology/Web/DOM/dom-rule.md",title:"DOM-\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf",description:"\u5f53\u6211\u4eec\u5728\u67e5\u770b HTML \u6587\u6863\u65f6\uff0c\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u88ab\u89e3\u6790\u540e\uff0c\u90fd\u753b\u6210\u4e86\u53ef\u89c6\u5f62\u72b6\u3002\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u7684\u51e0\u4f55\u91cf\uff08\u5bbd\u3001\u9ad8\u3001\u504f\u79fb\u91cf\uff09\u4ee5\u53ca\u9875\u9762\u6eda\u52a8\u8ddd\u79bb\u3002",date:"2016-05-19T14:54:00.000Z",formattedDate:"2016\u5e745\u670819\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"Rule",permalink:"/tags/rule"}],readingTime:7.795,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf",date:"2016-05-19T14:54:00.000Z",update:"2016-05-19T14:54:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Rule"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","Rule"],description:"\u5f53\u6211\u4eec\u5728\u67e5\u770b HTML \u6587\u6863\u65f6\uff0c\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u88ab\u89e3\u6790\u540e\uff0c\u90fd\u753b\u6210\u4e86\u53ef\u89c6\u5f62\u72b6\u3002\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u7684\u51e0\u4f55\u91cf\uff08\u5bbd\u3001\u9ad8\u3001\u504f\u79fb\u91cf\uff09\u4ee5\u53ca\u9875\u9762\u6eda\u52a8\u8ddd\u79bb\u3002"},prevItem:{title:"CSS \u6e05\u9664\u6d6e\u52a8",permalink:"/Computer-Technology/Web/CSS/css-clear-float"},nextItem:{title:"\u7f16\u8f91\u5668\uff1aSublime Text \u5e38\u7528\u63d2\u4ef6",permalink:"/Computer-Technology/Tools/tools-sublime"}},a={authorsImageUrls:[void 0]},d=[{value:"\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf",id:"\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf",level:2},{value:"\u5b9a\u4f4d\u504f\u79fb\u91cf",id:"\u5b9a\u4f4d\u504f\u79fb\u91cf",level:3},{value:"\u76d2\u5b50\u5c5e\u6027",id:"\u76d2\u5b50\u5c5e\u6027",level:3},{value:"\u76d2\u5b50\u5c3a\u5bf8",id:"\u76d2\u5b50\u5c3a\u5bf8",level:3},{value:"\u83b7\u53d6\u7279\u5b9a\u70b9\u4e0a\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9",id:"\u83b7\u53d6\u7279\u5b9a\u70b9\u4e0a\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9",level:3},{value:"\u6eda\u52a8\u51e0\u4f55\u91cf",id:"\u6eda\u52a8\u51e0\u4f55\u91cf",level:2},{value:"\u6eda\u52a8\u5c3a\u5bf8",id:"\u6eda\u52a8\u5c3a\u5bf8",level:3},{value:"\u6eda\u52a8\u8ddd\u79bb",id:"\u6eda\u52a8\u8ddd\u79bb",level:3},{value:"\u6eda\u52a8\u5143\u7d20\u8282\u70b9\u5230\u89c6\u533a\u5185",id:"\u6eda\u52a8\u5143\u7d20\u8282\u70b9\u5230\u89c6\u533a\u5185",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-19 14:54:00 "))),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u5728\u67e5\u770b HTML \u6587\u6863\u65f6\uff0c\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u88ab\u89e3\u6790\u540e\uff0c\u90fd\u753b\u6210\u4e86\u53ef\u89c6\u5f62\u72b6\u3002\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u6bcf\u4e2a\u5143\u7d20\u8282\u70b9\u7684\u51e0\u4f55\u91cf\uff08\u5bbd\u3001\u9ad8\u3001\u504f\u79fb\u91cf\uff09\u4ee5\u53ca\u9875\u9762\u6eda\u52a8\u8ddd\u79bb\u3002"),(0,o.kt)("h2",{id:"\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf"},"\u5143\u7d20\u8282\u70b9\u51e0\u4f55\u91cf"),(0,o.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u5c06\u4e00\u4e2a\u5143\u7d20\u62bd\u8c61\u6210\u4e00\u4e2a\u76d2\u5b50\u6a21\u578b\uff0c\u5177\u6709 content\uff08\u5185\u5bb9\uff09\u3001padding\uff08\u586b\u5145\u3001\u5185\u8fb9\u8ddd\uff09\u3001border\uff08\u8fb9\u6846\uff09\u3001margin\uff08\u5916\u8fb9\u8ddd\uff09\u8fd9\u4e9b\u5c3a\u5bf8\u5c5e\u6027\u3002"),(0,o.kt)("h3",{id:"\u5b9a\u4f4d\u504f\u79fb\u91cf"},"\u5b9a\u4f4d\u504f\u79fb\u91cf"),(0,o.kt)("p",null,"\u4f7f\u7528\u5143\u7d20\u8282\u70b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetTop")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetLeft")," \u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u5206\u522b\u83b7\u53d6\u8be5\u5143\u7d20\u8282\u70b9",(0,o.kt)("strong",{parentName:"p"},"\u9876\u90e8\u4e0e\u5de6\u4fa7\u5916\u8fb9\u6846"),"\u76f8\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetParent")," \u7684",(0,o.kt)("strong",{parentName:"p"},"\u9876\u90e8\u4e0e\u5de6\u4fa7\u5185\u8fb9\u6846"),"\u7684\u504f\u79fb\u50cf\u7d20\u91cf\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"offsetParent"),(0,o.kt)("li",{parentName:"ul"},"offsetTop"),(0,o.kt)("li",{parentName:"ul"},"offsetLeft")),(0,o.kt)("p",null,"\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetParent")," \u5224\u5b9a\u4f9d\u636e\u4e3a\u67e5\u627e",(0,o.kt)("strong",{parentName:"p"},"\u8ddd\u79bb\u8be5\u5143\u7d20\u8282\u70b9\u6700\u8fd1\u7684 CSS \u5b9a\u4f4d\uff08position\uff09\u503c\u4e0d\u4e3a static\uff08\u9ed8\u8ba4\u503c\uff09\u7684\u7956\u5148\u5143\u7d20\uff0c"),"\u76f4\u81f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," \u5143\u7d20\u4e3a\u6b62\u3002\u5982\u679c\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\uff0c\u627e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"td"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"th"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"table")," \u5143\u7d20\u4e4b\u4e00\uff0c\u4e14\u5b83\u7684\u5b9a\u4f4d\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"static"),"\uff0c\u5219\u5c06\u5b83\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetParent"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<style>\n    #out{\n        width: 200px;\n        height: 200px;\n        background-color: #ccc;\n        border: 5px solid yellow;\n        padding: 10px;\n        margin: 15px;\n        position: relative;\n    }\n    #in{\n        width: 100px;\n        height: 100px;\n        background-color: red;\n        border: 3px solid blue;\n        padding: 6px;\n        margin: 9px;\n    }\n</style>\n<body>\n    <div id="out">\n        <div id="in"></div>\n    </div>\n</body>\n<script>\n    // \u67e5\u770b\u5185\u90e8DIV\u7684offsetParent\n    console.log(document.querySelector("#in").offsetParent);\n    // \u8f93\u51fa<div id="out">...</div>\n    // \u8fd9\u662f\u56e0\u4e3a\u5916\u90e8DIV\u7684position="relative/absolute"\n\n    // \u9a8c\u8bc1\u5185\u90e8DIV\u7684offsetTop\u4e0eoffsetParent\u7684\u503c\n    console.log(document.querySelector("#in").offsetTop);  // \u8f93\u51fa19\n    console.log(document.querySelector("#in").offsetLeft);  // \u8f93\u51fa19\n<\/script>\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u53ef\u4ee5\u770b\u51fa\uff0c\u7b26\u5408",(0,o.kt)("strong",{parentName:"p"},"\u5916\u8fb9\u6846\u5230 ",(0,o.kt)("inlineCode",{parentName:"strong"},"offsetParent")," \u5185\u8fb9\u6846"),"\u7684\u8ba1\u7b97\u65b9\u5f0f\u3002\u901a\u4fd7\u7684\u8bf4\u5c31\u662f\uff0c\u6211\u4eec\u5c06\u4e00\u4e2a\u5c0f\u76d2\u5b50\u653e\u5230\u4e00\u4e2a\u5927\u76d2\u5b50\u4e2d\uff0c\u5c0f\u76d2\u5b50\u5916\u4fa7\u5230\u5927\u76d2\u5b50\u5185\u4fa7\u7684\u8ddd\u79bb\u5c31\u662f\u6211\u4eec\u8981\u8ba1\u7b97\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"\u76d2\u5b50\u5c5e\u6027"},"\u76d2\u5b50\u5c5e\u6027"),(0,o.kt)("p",null,"\u5728\u53ef\u89c6\u533a\uff08\u6d4f\u89c8\u5668 HTML \u6587\u6863\u663e\u793a\u533a\uff0c\u4e0d\u5305\u542b\u6d4f\u89c8\u5668\u5bfc\u822a\u3001\u5730\u5740\u680f\u7b49\uff09\u5185\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"getBoundingClientRect()")," \u65b9\u6cd5\u83b7\u53d6\u67d0\u4e2a\u5143\u7d20\u7684\u77e9\u5f62\u76d2\u5b50\u57fa\u672c\u5c5e\u6027\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"getBoundingClientRect()")),(0,o.kt)("p",null,"exp\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<style>\n    body{\n        border: 0px;\n        padding: 0px;\n        margin: 0px;\n    }\n    div{\n        width: 200px;\n        height: 200px;\n        background-color: #ccc;\n        border: 10px solid yellow;\n        padding: 30px;\n        margin: 50px;\n    }\n</style>\n<body>\n    <div></div>\n</body>\n<script>\n    // \u83b7\u53d6DIV\u7684\u77e9\u5f62\u76d2\u5b50\u57fa\u672c\u5c5e\u6027\n    console.log(document.querySelector("div").getBoundingClientRect());\n    // \u8f93\u51faClientRect{top: 50, right: 330, bottom: 330, left: 50, width: 280, height: 280}\n\n    // \u53ef\u4ee5\u5355\u72ec\u83b7\u5f97\u67d0\u9879\u57fa\u672c\u5c5e\u6027\n    console.log(document.querySelector("div").getBoundingClientRect().top);\n    // \u8f93\u51fa50\n<\/script>\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u53ef\u4ee5\u770b\u51fa\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"top"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"bottom"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"left"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"right")," \u5c5e\u6027\u8868\u793a\u8be5\u5143\u7d20\u77e9\u5f62\u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3\u5916\u8fb9\u6846"),"\u76f8\u5bf9\u4e8e\u6d4f\u89c8\u5668",(0,o.kt)("strong",{parentName:"p"},"\u53ef\u89c6\u533a\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3\u8fb9\u6cbf"),"\u7684\u504f\u79fb\u50cf\u7d20\u91cf\u3002\u901a\u4fd7\u7684\u8bf4\u5c31\u662f\uff0c\u5728\u5b58\u653e\u5feb\u9012\u76d2\u5b50\u7684\u4ed3\u5e93\u4e2d\uff0c\u6bcf\u4e2a\u76d2\u5b50\u56db\u5468\u5916\u4fa7\u5230\u4ed3\u5e93\u56db\u5468\u5899\u58c1\u7684\u8ddd\u79bb\u5c31\u662f\u6211\u4eec\u8981\u8ba1\u7b97\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"width")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," \u5c5e\u6027\u8868\u793a\u8be5\u5143\u7d20\u77e9\u5f62\u7684\u53ef\u89c6\u5c3a\u5bf8\uff08\u5bbd\u3001\u9ad8\uff09\uff0c\u4e0d\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"margin"),"\uff08\u5916\u8fb9\u8ddd\uff09\u3002"),(0,o.kt)("h3",{id:"\u76d2\u5b50\u5c3a\u5bf8"},"\u76d2\u5b50\u5c3a\u5bf8"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u5c5e\u6027\u83b7\u53d6\u53ef\u89c6\u533a\uff08\u6d4f\u89c8\u5668 HTML \u6587\u6863\u663e\u793a\u533a\uff0c\u4e0d\u5305\u542b\u6d4f\u89c8\u5668\u5bfc\u822a\u3001\u5730\u5740\u680f\u7b49\uff09\u5185\u5143\u7d20\u77e9\u5f62\u7684\u5c3a\u5bf8\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"offsetWidth"),(0,o.kt)("li",{parentName:"ul"},"offsetHeight"),(0,o.kt)("li",{parentName:"ul"},"clientWidth"),(0,o.kt)("li",{parentName:"ul"},"clientHeight")),(0,o.kt)("p",null,"exp\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<style>\n    div{\n        width: 200px;\n        height: 200px;\n        background-color: #ccc;\n        border: 10px solid yellow;\n        padding: 30px;\n        margin: 50px;\n    }\n</style>\n<body>\n    <div></div>\n</body>\n<script>\n    // \u83b7\u53d6DIV\u7684\u77e9\u5f62\u76d2\u5b50\u5c3a\u5bf8\n    console.log(document.querySelector("div").offsetWidth);  // \u8f93\u51fa280\n    console.log(document.querySelector("div").offsetHeight);  // \u8f93\u51fa280\n\n    console.log(document.querySelector("div").clientWidth);  // \u8f93\u51fa260\n    console.log(document.querySelector("div").clientHeight);  // \u8f93\u51fa260\n<\/script>\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u53ef\u4ee5\u770b\u51fa\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"offsetWidth")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"offsetHeight")," \u5c5e\u6027\u8868\u793a\u7684\u662f\u5143\u7d20\u77e9\u5f62\u7684\u53ef\u89c6\u5c3a\u5bf8\uff08\u5bbd\u3001\u9ad8\uff09\uff0c\u4e0d\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"margin"),"\uff08\u5916\u8fb9\u8ddd\uff09\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"clientWidth")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"clientHeight")," \u5c5e\u6027\u8868\u793a\u7684\u662f\u5143\u7d20\u77e9\u5f62\u7684\u6709\u6548\u5c3a\u5bf8\uff08\u5bbd\u3001\u9ad8\uff09\uff0c\u4e0d\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"margin"),"\uff08\u5916\u8fb9\u8ddd\uff09\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"border"),"\uff08\u8fb9\u6846\uff09\u3002"),(0,o.kt)("h3",{id:"\u83b7\u53d6\u7279\u5b9a\u70b9\u4e0a\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9"},"\u83b7\u53d6\u7279\u5b9a\u70b9\u4e0a\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"elementFromPoint()")," \u65b9\u6cd5\u83b7\u53d6\u53ef\u89c6\u533a\uff08\u6d4f\u89c8\u5668 HTML \u6587\u6863\u663e\u793a\u533a\uff0c\u4e0d\u5305\u542b\u6d4f\u89c8\u5668\u5bfc\u822a\u3001\u5730\u5740\u680f\u7b49\uff09\u5185\uff0c\u7279\u5b9a\u70b9\u4e0a\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9\u7684\u5f15\u7528\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"elementFromPoint()")),(0,o.kt)("p",null,"exp\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<script>\n    // \u83b7\u53d6\u6587\u6863\u53ef\u89c6\u533a\u5185left=50\uff0ctop=50\u5904\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9\n    console.log(document.elementFromPoint(50,50));\n<\/script>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e z \u8f74\u7d22\u5f15\u503c ",(0,o.kt)("inlineCode",{parentName:"strong"},"z-index"),"\uff0c\u5219\u6700\u9876\u5c42\u5143\u7d20\u8282\u70b9\u5c31\u662f HTML \u6587\u6863\u4e2d\u8be5\u70b9\u4e0a\u6700\u540e\u88ab\u89e3\u6790\u7684\u5143\u7d20\u8282\u70b9\u3002")),(0,o.kt)("h2",{id:"\u6eda\u52a8\u51e0\u4f55\u91cf"},"\u6eda\u52a8\u51e0\u4f55\u91cf"),(0,o.kt)("p",null,"\u5f53 HTML \u6587\u6863\u592a\u5927\uff08\u9875\u9762\u5143\u7d20\u592a\u591a\uff09\u65f6\uff0c\u6216\u8005\u5f53\u67d0\u4e2a\u5143\u7d20\u8282\u70b9\u5185\u5185\u5bb9\u592a\u591a\u65f6\uff0c\u4f1a\u51fa\u73b0\u5de6\u53f3\u6eda\u52a8\u6761\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u77e5\u9053\u8be5\u5143\u7d20\u8282\u70b9\u7684\u6eda\u52a8\u533a\u57df\u3001\u6eda\u52a8\u8ddd\u79bb\u7b49\u7b49\u3002"),(0,o.kt)("h3",{id:"\u6eda\u52a8\u5c3a\u5bf8"},"\u6eda\u52a8\u5c3a\u5bf8"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5c5e\u6027\u6765\u83b7\u53d6 HTML \u9875\u9762\u6216\u8005\u67d0\u4e2a\u5143\u7d20\u8282\u70b9\u7684\u6eda\u52a8\u5c3a\u5bf8\uff08\u603b\u9ad8\u3001\u603b\u5bbd\uff09\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scrollWidth"),(0,o.kt)("li",{parentName:"ul"},"scrollHeight")),(0,o.kt)("p",null,"exp\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<style>\n    div{\n        width: 200px;\n        height: 200px;\n        background-color: #ccc;\n        overflow: auto;\n    }\n    p{\n        width: 1000px;\n        height: 10000px;\n        margin: 0px;\n    }\n</style>\n<body>\n    <div>\n        <p></p>\n    </div>\n</body>\n<script>\n    // \u83b7\u53d6DIV\u7684\u6eda\u52a8\u5c3a\u5bf8\n    console.log(document.querySelector("div").scrollWidth);  // \u8f93\u51fa1000\n    console.log(document.querySelector("div").scrollHeight);  // \u8f93\u51fa1000\n<\/script>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5f53\u6eda\u52a8\u6761\u672a\u51fa\u73b0\uff08\u6eda\u52a8\u533a\u57df<\u5143\u7d20\u5c3a\u5bf8\uff09\u65f6\uff0c\u8fd9\u4e24\u4e2a\u5c5e\u6027\u5c06\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"strong"},"clientWidth")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"strong"},"clientHeight")," \u5c5e\u6027\u7684\u503c\uff0c\u4e5f\u5c31\u662f\u6709\u6548\u5c3a\u5bf8\u3002")),(0,o.kt)("h3",{id:"\u6eda\u52a8\u8ddd\u79bb"},"\u6eda\u52a8\u8ddd\u79bb"),(0,o.kt)("p",null,"\u901a\u5e38\u9875\u5185\u5bfc\u822a\u53ef\u4ee5\u5c06\u89c6\u533a\u8df3\u8f6c\u5230\u9875\u5185\u67d0\u4e2a\u533a\u57df\u5185\uff0c\u6216\u8005\u5f53\u9875\u9762\u5411\u4e0b\u6eda\u52a8\u65f6\u624d\u7ee7\u7eed\u52a0\u8f7d\u56fe\u7247\u7b49\u7b49\u3002\u8fd9\u4e9b\u529f\u80fd\u7684\u5b9e\u73b0\u90fd\u8981\u83b7\u53d6\uff08\u8bbe\u7f6e\uff09\u6240\u6eda\u52a8\u7684\u8ddd\u79bb\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scrollLeft"),(0,o.kt)("li",{parentName:"ul"},"scrollTop")),(0,o.kt)("p",null,"exp\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<style>\n    p{\n        width: 10000px;\n        height: 10000px;\n    }\n</style>\n<body>\n<p></p>\n</body>\n<script>\n    // \u5229\u7528\u4e8b\u4ef6\u5c06\u7a97\u53e3\u6eda\u52a8\u8ddd\u79bb\u663e\u793a\u5728\u6807\u9898\u4e0a\n    window.onscroll=function(){\n        scroll_left=document.body.scrollLeft || document.documentElement.scrollLeft;\n        scroll_top=document.body.scrollTop || document.documentElement.scrollTop;\n        document.title=scroll_left+","+scroll_top;\n    }\n<\/script>\n')),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8ba9\u9875\u9762\u6eda\u52a8\u5230\u67d0\u4e00\u5904\uff0c\u76f4\u63a5\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollLeft")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollTop")," \u5c5e\u6027\u8d4b\u503c\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"\u6eda\u52a8\u5143\u7d20\u8282\u70b9\u5230\u89c6\u533a\u5185"},"\u6eda\u52a8\u5143\u7d20\u8282\u70b9\u5230\u89c6\u533a\u5185"),(0,o.kt)("p",null,"\u9875\u5185\u5bfc\u822a\u901a\u5e38\u4e5f\u53ef\u4ee5\u6839\u636e\u9009\u53d6\u7279\u5b9a\u5143\u7d20\uff0c\u5c06\u89c6\u533a\u8df3\u8f6c\u5230\u8be5\u5143\u7d20\u8282\u70b9\u4e0a\u6765\u5b9e\u73b0\uff0c\u8fd9\u6837\u5b9e\u73b0\u7684\u65b9\u5f0f\u662f\u6700\u79d1\u5b66\u7684\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scrollIntoView()")),(0,o.kt)("p",null,"exp\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<style>\n    button{\n        margin: 10px;\n    }\n    p{\n        height: 1000px;\n        background-color: #ccc;\n    }\n</style>\n<body>\n    <button>\u8df3\u8f6c\u5230\u7b2c\u4e00\u6bb5</button>\n    <button>\u8df3\u8f6c\u5230\u7b2c\u4e8c\u6bb5</button>\n    <button>\u8df3\u8f6c\u5230\u7b2c\u4e09\u6bb5</button>\n    <button>\u8df3\u8f6c\u5230\u7b2c\u56db\u6bb5</button>\n    <button>\u8df3\u8f6c\u5230\u7b2c\u4e94\u6bb5</button>\n    <p id="p1">\u7b2c\u4e00\u6bb5</p>\n    <p id="p2">\u7b2c\u4e8c\u6bb5</p>\n    <p id="p3">\u7b2c\u4e09\u6bb5</p>\n    <p id="p4">\u7b2c\u56db\u6bb5</p>\n    <p id="p5">\u7b2c\u4e94\u6bb5</p>\n</body>\n<script>\n    // \u83b7\u53d6\u6309\u94ae\u96c6\u5408\u5e76\u8f6c\u6362\u4e3a\u6570\u7ec4\n    var buttons=document.getElementsByTagName("button");\n    buttons=Array.prototype.slice.call(buttons);\n    // \u5229\u7528\u4e8b\u4ef6\u5b9e\u73b0\u6309\u94ae\u8df3\u8f6c\n    for (var i = buttons.length - 1; i >= 0; i--) {\n        buttons[i].onclick=function(){\n            var index=buttons.indexOf(this)+1;\n            document.querySelector("#p"+index).scrollIntoView();\n        }\n    }\n<\/script>\n')),(0,o.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",null,"\u5143\u7d20\u8282\u70b9\u7684\u51e0\u4f55\u91cf\uff08\u5c3a\u5bf8\u3001\u5b9a\u4f4d\u504f\u79fb\u91cf\uff09\uff0c\u9875\u9762\u5143\u7d20\u7684\u6eda\u52a8\u8ddd\u79bb\u7b49\u7b49\u90fd\u662f\u6211\u4eec\u7ecf\u5e38\u4f7f\u7528\u7684\u503c\uff0c\u6240\u4ee5\u6e05\u695a\u7684\u4e86\u89e3\u4ec0\u4e48\u5c5e\u6027\u3001\u65b9\u6cd5\u83b7\u53d6\u4ec0\u4e48\u503c\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u300aDOM \u542f\u8499\u300b\uff0cCody Lindley\uff0c\u9648\u517b\u5251 \u8bd1")))}c.isMDXComponent=!0}}]);