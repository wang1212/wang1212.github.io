"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),m=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,g=c["".concat(p,".").concat(s)]||c[s]||k[s]||a;return n?l.createElement(g,i(i({ref:t},u),{},{components:n})):l.createElement(g,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<a;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var l=n(87462),r=(n(67294),n(3905));const a={title:"\u7f16\u8f91\u5668\uff1aSublime Text - Vim \u63d2\u4ef6",date:new Date("2016-05-18T12:55:00.000Z"),update:new Date("2016-05-18T12:55:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u7f16\u8f91\u5668","Sublime Text","\u63d2\u4ef6","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u7f16\u8f91\u5668","Sublime Text","\u63d2\u4ef6","Vim"],description:"Sumblime Text \u662f\u4e00\u4e2a\u5177\u6709\u6f02\u4eae\u7684\u754c\u9762\u548c\u5f3a\u5927\u529f\u80fd\u7684\u6587\u672c\u7f16\u8f91\u5668\uff0c\u800c\u4e14\u4e5f\u652f\u6301\u8bb8\u591a\u4e30\u5bcc\u7684\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u6536\u8d39\u8f6f\u4ef6\uff0c\u4f46\u662f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u65e0\u9650\u671f\u7684\u514d\u8d39\u8bd5\u7528\u3002"},i=void 0,o={permalink:"/Computer-Technology/Tools/tools-sublime-vim",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Tools/tools-sublime-vim.md",source:"@site/blog/Computer-Technology/Tools/tools-sublime-vim.md",title:"\u7f16\u8f91\u5668\uff1aSublime Text - Vim \u63d2\u4ef6",description:"Sumblime Text \u662f\u4e00\u4e2a\u5177\u6709\u6f02\u4eae\u7684\u754c\u9762\u548c\u5f3a\u5927\u529f\u80fd\u7684\u6587\u672c\u7f16\u8f91\u5668\uff0c\u800c\u4e14\u4e5f\u652f\u6301\u8bb8\u591a\u4e30\u5bcc\u7684\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u6536\u8d39\u8f6f\u4ef6\uff0c\u4f46\u662f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u65e0\u9650\u671f\u7684\u514d\u8d39\u8bd5\u7528\u3002",date:"2016-05-18T12:55:00.000Z",formattedDate:"2016\u5e745\u670818\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"\u7f16\u8f91\u5668",permalink:"/tags/\u7f16\u8f91\u5668"},{label:"Sublime Text",permalink:"/tags/sublime-text"},{label:"\u63d2\u4ef6",permalink:"/tags/\u63d2\u4ef6"},{label:"Vim",permalink:"/tags/vim"}],readingTime:6.38,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u7f16\u8f91\u5668\uff1aSublime Text - Vim \u63d2\u4ef6",date:"2016-05-18T12:55:00.000Z",update:"2016-05-18T12:55:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u7f16\u8f91\u5668","Sublime Text","\u63d2\u4ef6","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u7f16\u8f91\u5668","Sublime Text","\u63d2\u4ef6","Vim"],description:"Sumblime Text \u662f\u4e00\u4e2a\u5177\u6709\u6f02\u4eae\u7684\u754c\u9762\u548c\u5f3a\u5927\u529f\u80fd\u7684\u6587\u672c\u7f16\u8f91\u5668\uff0c\u800c\u4e14\u4e5f\u652f\u6301\u8bb8\u591a\u4e30\u5bcc\u7684\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u6536\u8d39\u8f6f\u4ef6\uff0c\u4f46\u662f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u65e0\u9650\u671f\u7684\u514d\u8d39\u8bd5\u7528\u3002"},prevItem:{title:"\u7f16\u8f91\u5668\uff1aSublime Text \u5e38\u7528\u63d2\u4ef6",permalink:"/Computer-Technology/Tools/tools-sublime"},nextItem:{title:"DOM-\u8282\u70b9\u96c6\u5408",permalink:"/Computer-Technology/Web/DOM/dom-nodelist"}},p={authorsImageUrls:[void 0]},m=[{value:"Vim",id:"vim",level:2},{value:"Vim \u63d2\u4ef6\u5b89\u88c5",id:"vim-\u63d2\u4ef6\u5b89\u88c5",level:2},{value:"\u5728\u7ebf\u5b89\u88c5",id:"\u5728\u7ebf\u5b89\u88c5",level:3},{value:"\u672c\u5730\u5b89\u88c5",id:"\u672c\u5730\u5b89\u88c5",level:3},{value:"\u7528\u6237\u914d\u7f6e",id:"\u7528\u6237\u914d\u7f6e",level:3},{value:"Vim \u63d2\u4ef6\u4f7f\u7528",id:"vim-\u63d2\u4ef6\u4f7f\u7528",level:2},{value:"\u63d2\u5165\u6a21\u5f0f",id:"\u63d2\u5165\u6a21\u5f0f",level:3},{value:"\u547d\u4ee4\u6a21\u4ee4",id:"\u547d\u4ee4\u6a21\u4ee4",level:3},{value:"\u5e38\u7528\u5feb\u6377\u952e",id:"\u5e38\u7528\u5feb\u6377\u952e",level:4},{value:"\u884c\u672b\u6a21\u5f0f",id:"\u884c\u672b\u6a21\u5f0f",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],u={toc:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-18 12:55:00"))),(0,r.kt)("p",null,"Sumblime Text \u662f\u4e00\u4e2a\u5177\u6709\u6f02\u4eae\u7684\u754c\u9762\u548c\u5f3a\u5927\u529f\u80fd\u7684\u6587\u672c\u7f16\u8f91\u5668\uff0c\u800c\u4e14\u4e5f\u652f\u6301\u8bb8\u591a\u4e30\u5bcc\u7684\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u6536\u8d39\u8f6f\u4ef6\uff0c\u4f46\u662f\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u65e0\u9650\u671f\u7684\u514d\u8d39\u8bd5\u7528\u3002"),(0,r.kt)("h2",{id:"vim"},"Vim"),(0,r.kt)("p",null,"Vim \u662f Linux \u64cd\u4f5c\u7cfb\u7edf\u4e0b\u7c7b Vi \u7f16\u8f91\u5668\uff0c\u662f\u4e00\u6b3e\u88ab\u5f00\u53d1\u8005\u5e7f\u6cdb\u4f7f\u7528\uff0c\u5e76\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u6587\u672c\u7f16\u8f91\u5668\u3002\u800c Sublime Text \u6700\u521d\u7684\u8bbe\u8ba1\u521d\u8877\u4e5f\u662f\u57fa\u4e8e Vim \u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u88ab\u8bbe\u8ba1\u4e3a\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u5177\u6709\u4e30\u5bcc\u6269\u5c55\u529f\u80fd\u7684 Vim\u3002\u968f\u7740\u540e\u6765\u7684\u53d1\u5c55\uff0c\u5b83\u5df2\u7ecf\u4e0d\u4ec5\u4ec5\u662f\u5355\u7eaf\u7684\u6a21\u4eff Vim\uff0c\u800c\u662f\u652f\u6301\u8d8a\u6765\u8d8a\u591a\u7684\u63d2\u4ef6\u548c\u5f3a\u5927\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"Vim \u63d2\u4ef6\u5728\u76ee\u524d\u7684\u65b0\u7248\u672c\u4e2d\u90fd\u662f\u9ed8\u8ba4\u6ca1\u6709\u5b89\u88c5\u7684\uff0c\u4f46\u662f\u6709\u4e86 Vim \u63d2\u4ef6\u6211\u4eec\u53ef\u4ee5\u50cf\u5728 Linux \u64cd\u4f5c\u7cfb\u7edf\u4e0b\u4f7f\u7528 Vim \u4e00\u6837\u4f7f\u7528 Sublime Text\uff0c\u8fd9\u6837\u6211\u4eec\u7684\u5f00\u53d1\u6548\u7387\u4f1a\u5927\u5927\u63d0\u5347\u3002\u4e0b\u9762\u6211\u4eec\u5c31\u6765\u770b\u770b\u5982\u4f55\u5728 Sublime Text 3 \u4e2d\u5b89\u88c5 Vim \u63d2\u4ef6\uff0c\u5e76\u4e14\u4e86\u89e3\u4e00\u4e0b Vim \u63d2\u4ef6\u7684\u5e38\u7528\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"vim-\u63d2\u4ef6\u5b89\u88c5"},"Vim \u63d2\u4ef6\u5b89\u88c5"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u8981\u5b89\u88c5\u597d Sublime Text 3 \u548c Package Control \u63d2\u4ef6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Sublime Text\uff1a"),(0,r.kt)("a",{parentName:"p",href:"http://www.sublimetext.com/"},"http://www.sublimetext.com/")," ",(0,r.kt)("br",null)," > ",(0,r.kt)("strong",{parentName:"p"},"Package Control\uff1a"),(0,r.kt)("a",{parentName:"p",href:"https://packagecontrol.io/installation"},"https://packagecontrol.io/installation"))),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u5b89\u88c5 Vim \u63d2\u4ef6\uff0c\u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a\u5728\u7ebf\u5b89\u88c5\u548c\u672c\u5730\u5b89\u88c5\u3002"),(0,r.kt)("h3",{id:"\u5728\u7ebf\u5b89\u88c5"},"\u5728\u7ebf\u5b89\u88c5"),(0,r.kt)("p",null,"\u6253\u5f00 Sublime Text 3\uff0c",(0,r.kt)("kbd",null,"Ctrl+Shift+P"),"\u6253\u5f00\u547d\u4ee4\u884c\uff0c\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Install Package")," \u56de\u8f66\uff0c\u7b49\u4e00\u4f1a\u4e4b\u540e\u547d\u4ee4\u884c\u518d\u6b21\u51fa\u73b0\uff0c\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"vintageous")," \u56de\u8f66\u3002"),(0,r.kt)("h3",{id:"\u672c\u5730\u5b89\u88c5"},"\u672c\u5730\u5b89\u88c5"),(0,r.kt)("p",null,"\u5148\u4e0b\u8f7d Vim \u63d2\u4ef6\u6587\u4ef6\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Vintageous\uff1a"),(0,r.kt)("a",{parentName:"p",href:"https://packagecontrol.io/packages/Vintageous"},"https://packagecontrol.io/packages/Vintageous"))),(0,r.kt)("p",null,"\u6253\u5f00 Sublime Text 3\uff0c\u5728\u83dc\u5355\u4e2d\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Preferences->Browse Packages"),"\uff0c\u5c06\u4e0b\u8f7d\u597d\u7684 Vim \u63d2\u4ef6\u6587\u4ef6\u5939\u62f7\u8fdb\u6253\u5f00\u7684\u6587\u4ef6\u5939\uff0c\u5173\u95ed\u6587\u4ef6\u5939\u3002"),(0,r.kt)("h3",{id:"\u7528\u6237\u914d\u7f6e"},"\u7528\u6237\u914d\u7f6e"),(0,r.kt)("p",null,"\u6253\u5f00 Sublime Text 3\uff0c\u5728\u83dc\u5355 ",(0,r.kt)("strong",{parentName:"p"},"Preferences")," \u4e0b\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Settings-User"),"\uff0c\u4e5f\u5c31\u662f\u7528\u6237\u8bbe\u7f6e\u3002\u6211\u4eec\u53ef\u4ee5\u627e\u5230\u4ee5\u4e0b\u8fd9\u53e5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"ignored_packages": ["Vintage"]\n')),(0,r.kt)("p",null,"\u8fd9\u53e5\u4ee3\u7801\u7684\u610f\u601d\u5c31\u662f\uff0cSublime \u9ed8\u8ba4\u662f\u5173\u95ed Vim \u63d2\u4ef6\u7684\u3002\u6211\u4eec\u5c06\u5176\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"ignored_packages": []\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u4fdd\u5b58\u9000\u51fa\uff0c\u5173\u95ed Sublime Text 3 \u91cd\u542f\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"vim-\u63d2\u4ef6\u4f7f\u7528"},"Vim \u63d2\u4ef6\u4f7f\u7528"),(0,r.kt)("p",null,"Vim \u63d2\u4ef6\u4f1a\u6709\u4e09\u4e2a\u6a21\u5f0f\uff1a\u63d2\u5165\u6a21\u5f0f\uff08INSERT MODE\uff09\u3001\u547d\u4ee4\u6a21\u5f0f\uff08COMMAND MODE\uff09\u3001\u884c\u672b\u6a21\u5f0f\u3002"),(0,r.kt)("h3",{id:"\u63d2\u5165\u6a21\u5f0f"},"\u63d2\u5165\u6a21\u5f0f"),(0,r.kt)("p",null,"\u63d2\u5165\u6a21\u5f0f\u4e5f\u5c31\u662f\u7f16\u8f91\u6a21\u5f0f\uff0c\u6211\u4eec\u5199\u4ee3\u7801\u7684\u65f6\u5019\u7528\u7684\u6a21\u5f0f\u3002\u6b64\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u8f93\u5165\u4ee3\u7801\uff0c\u548c\u666e\u901a\u7684\u7f16\u8f91\u5668\u4e00\u6837\uff0c\u6309\u952e\u76d8\u5de6\u4e0a\u89d2",(0,r.kt)("kbd",null,"Esc"),"\u5373\u53ef\u8fdb\u5165\u547d\u4ee4\u6a21\u5f0f\u3002"),(0,r.kt)("h3",{id:"\u547d\u4ee4\u6a21\u4ee4"},"\u547d\u4ee4\u6a21\u4ee4"),(0,r.kt)("p",null,"\u547d\u4ee4\u6a21\u5f0f\u63d0\u4f9b\u4fbf\u6377\u5f3a\u5927\u7684\u5feb\u6377\u952e\uff0c\u662f Vim \u63d2\u4ef6\u7684\u6838\u5fc3\u6a21\u5f0f\u3002\u6b64\u6a21\u5f0f\u4e0b\uff0c\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\u6709\u516b\u79cd\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"i  // \u5149\u6807\u524d\u63d2\u5165\na  // \u5149\u6807\u540e\u63d2\u5165\ns  // \u66ff\u6362\u63d2\u5165\uff08\u5220\u9664\u5f53\u524d\u5149\u6807\u6240\u5728\u5b57\u7b26\uff09\nShitf+I  // \u884c\u9996\u63d2\u5165\uff08\u5149\u6807\u6240\u5728\u884c\uff09\nShift+A  // \u884c\u5c3e\u63d2\u5165\uff08\u5149\u6807\u6240\u5728\u884c\uff09\nShift+S  // \u884c\u66ff\u6362\u63d2\u5165\uff08\u5220\u9664\u5149\u6807\u6240\u5728\u884c\uff09\no  // \u4e0b\u4e00\u884c\u63d2\u5165\uff08\u5149\u6807\u6240\u5728\u884c\u4e0b\u6dfb\u52a0\u4e00\u884c\uff09\nShift+O  // \u4e0a\u4e00\u884c\u63d2\u5165\uff08\u5149\u6807\u6240\u5728\u884c\u4e0a\u6dfb\u52a0\u4e00\u884c\uff09\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u547d\u4ee4\u6a21\u5f0f\u4e0b\u8fdb\u5165\u884c\u672b\u6a21\u5f0f\u7684\u65b9\u5f0f\u662f\uff1a",(0,r.kt)("kbd",null,"Shift+;"),"\uff0c\u4e5f\u5c31\u662f\u5192\u53f7\u3002"),(0,r.kt)("h4",{id:"\u5e38\u7528\u5feb\u6377\u952e"},"\u5e38\u7528\u5feb\u6377\u952e"),(0,r.kt)("p",null,"\u547d\u4ee4\u6a21\u5f0f\u4e0b\u8fd8\u6709\u8bb8\u591a\u4fbf\u6377\u800c\u5f3a\u5927\u7684\u5feb\u6377\u952e\uff0c\u4e0b\u9762\u6765\u4e86\u89e3\u4e00\u4e0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5149\u6807\u79fb\u52a8"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  h  // \u5149\u6807\u5de6\u79fb\n  j  // \u5149\u6807\u4e0b\u79fb\n  k  // \u5149\u6807\u4e0a\u79fb\n  l  // \u5149\u6807\u53f3\u79fb\n\n  gg  // \u5149\u6807\u79fb\u52a8\u5230\u6587\u6863\u5f00\u5934\n  Shift+G  // \u5149\u6807\u79fb\u52a8\u5230\u6587\u6863\u7ed3\u5c3e\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u590d\u5236\u3001\u7c98\u8d34\u3001\u526a\u5207/\u5220\u9664\u3001\u64a4\u9500/\u6062\u590d\uff08\u6279\u91cf\u64cd\u4f5c\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  yy  // \u590d\u5236\u5149\u6807\u6240\u5728\u6574\u884c\n  2+yy // \u590d\u5236\u5149\u6807\u6240\u5728\u884c\u5f00\u59cb\u5411\u4e0b2\uff08n\uff09\u884c\n\n  p   // \u5149\u6807\u6240\u5728\u884c\u4e0b\u65b9\u6dfb\u52a0\u4e00\u884c\u5e76\u7c98\u8d34\n  2+p  // \u5149\u6807\u6240\u5728\u884c\u4e0b\u65b9\u6dfb\u52a02\uff08n\uff09\u884c\u5e76\u7c98\u8d34\n  Shitf+P  // \u5149\u6807\u6240\u5728\u884c\u4e0a\u65b9\u6dfb\u52a0\u4e00\u884c\u5e76\u7c98\u8d34\n\n  dd  // \u5220\u9664\u3001\u526a\u5207\u5149\u6807\u6240\u5728\u6574\u884c\n  2+dd  // \u5220\u9664\u3001\u526a\u5207\u5149\u6807\u6240\u5728\u884c\u5f00\u59cb\u5411\u4e0b2\uff08n\uff09\u884c\n\n  u  // \u64a4\u9500\n  Ctrl+Y  // \u6062\u590d\n\n  r  // \u66ff\u6362\u5149\u6807\u6240\u5728\u5b57\u7b26\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\u5220\u9664/\u526a\u5207\u65b9\u5f0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  d+gg  // \u5149\u6807\u6240\u5728\u884c\u5230\u6587\u6863\u5f00\u5934\u4e4b\u95f4\u5168\u90e8\u5220\u9664\u3001\u526a\u5207\n  d+Shift+G  // \u5149\u6807\u6240\u5728\u884c\u5230\u6587\u6863\u7ed3\u5c3e\u4e4b\u95f4\u5168\u90e8\u5220\u9664\u3001\u526a\u5207\n\n  d+2+gg  // \u5149\u6807\u6240\u5728\u884c\u5230\u7b2c2\uff08n\uff09\u884c\u4e4b\u95f4\u5168\u90e8\u5220\u9664\u3001\u526a\u5207\n  d+2+Shift+G  // \u540c\u4e0a\n\n  d+^  // \u5149\u6807\u6240\u5728\u5b57\u7b26\u5230\u884c\u9996\u4e4b\u95f4\u5168\u90e8\u5220\u9664\u3001\u526a\u5207\n  d+$  // \u5149\u6807\u6240\u5728\u5b57\u7b26\u5230\u884c\u5c3e\u4e4b\u95f4\u5168\u90e8\u5220\u9664\u3001\u526a\u5207\n  Shift+D  // \u540c\u4e0a\n\n  d+w  // \u5220\u9664\u5149\u6807\u6240\u5728\u5904\u4e00\u4e2a\u5355\u8bcd\u3001\u7b26\u53f7\n\n  x  // \u5220\u9664\u5149\u6807\u6240\u5728\u5b57\u7b26\n  2+x // \u5220\u9664\u5149\u6807\u6240\u5728\u5b57\u7b26\u5f00\u59cb\u5411\u540e2\uff08n\uff09\u4e2a\u5b57\u7b26\n")))),(0,r.kt)("h3",{id:"\u884c\u672b\u6a21\u5f0f"},"\u884c\u672b\u6a21\u5f0f"),(0,r.kt)("p",null,"\u884c\u672b\u6a21\u5f0f\u4e5f\u5c31\u662f\u901a\u5e38\u6211\u4eec\u6240\u8bf4\u7684\u83dc\u5355\u680f\uff0c\u63d0\u4f9b\u6587\u4ef6\u4fdd\u5b58\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"w  // \u4fdd\u5b58\u5f53\u524d\u6587\u6863\nx  // \u4fdd\u5b58\u6587\u6863\u5e76\u5173\u95ed\n")),(0,r.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,r.kt)("p",null,"Vim \u63d2\u4ef6\u6709\u4e09\u79cd\u6a21\u5f0f\uff0c\u4f46\u662f\u4e0d\u80fd\u4e92\u76f8\u5207\u6362\uff0c\u547d\u4ee4\u6a21\u5f0f\u662f\u5176\u5207\u6362\u67a2\u7ebd\u3002\u4e09\u8005\u5207\u6362\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6a21\u5f0f<---\x3e\u547d\u4ee4\u6a21\u5f0f<---\x3e\u884c\u672b\u6a21\u5f0f"))),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u3001\u5b89\u5168\uff0c\u6211\u4eec\u901a\u5e38\u5c06\u5176\u521d\u59cb\u5316\u6a21\u5f0f\u8bbe\u7f6e\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u547d\u4ee4\u6a21\u5f0f"),"\uff0c\u65b9\u5f0f\uff1a\u6253\u5f00 Sublime Text 3\uff0c\u5728\u83dc\u5355 ",(0,r.kt)("strong",{parentName:"p"},"Preferences")," \u4e0b\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Settings-User"),"\uff0c\u4e5f\u5c31\u662f\u7528\u6237\u8bbe\u7f6e\uff1b\u6dfb\u52a0\u4e0b\u9762\u8fd9\u53e5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"vintage_start_in_command_mode": true\n')))}k.isMDXComponent=!0}}]);