"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6149],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>s});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),p=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},m=function(n){var e=p(n.components);return r.createElement(u.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,u=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),d=p(t),s=i,k=d["".concat(u,".").concat(s)]||d[s]||c[s]||l;return t?r.createElement(k,a(a({ref:e},m),{},{components:t})):r.createElement(k,a({ref:e},m))}));function s(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97809:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const l={title:"Linux-Vim \u7f16\u8f91\u5668",date:new Date("2016-10-28T21:02:00.000Z"),update:new Date("2016-10-28T21:02:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"},a=void 0,o={permalink:"/Computer-Technology/Linux/linux-cmd-vim",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Linux/linux-cmd-vim.md",source:"@site/blog/Computer-Technology/Linux/linux-cmd-vim.md",title:"Linux-Vim \u7f16\u8f91\u5668",description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002",date:"2016-10-28T21:02:00.000Z",formattedDate:"2016\u5e7410\u670828\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/tags/\u64cd\u4f5c\u7cfb\u7edf"},{label:"Linux",permalink:"/tags/linux"},{label:"Vim",permalink:"/tags/vim"}],readingTime:8.385,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",imageURL:"https://github.com/wang1212.png",key:"wang1212"}],frontMatter:{title:"Linux-Vim \u7f16\u8f91\u5668",date:"2016-10-28T21:02:00.000Z",update:"2016-10-28T21:02:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"},prevItem:{title:"Ruby-\u5143\u7f16\u7a0b\u4e4b\u4ee3\u7801\u5757",permalink:"/Computer-Technology/Ruby/ruby-meta-block"},nextItem:{title:"Linux-\u5e38\u7528 Shell \u547d\u4ee4",permalink:"/Computer-Technology/Linux/linux-cmd-shell"}},u={authorsImageUrls:[void 0]},p=[{value:"Vim",id:"vim",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u6a21\u5f0f\u5207\u6362",id:"\u6a21\u5f0f\u5207\u6362",level:3},{value:"\u547d\u4ee4\u6a21\u5f0f",id:"\u547d\u4ee4\u6a21\u5f0f",level:3},{value:"\u79fb\u52a8\u5149\u6807",id:"\u79fb\u52a8\u5149\u6807",level:4},{value:"\u590d\u5236\u3001\u7c98\u8d34\u3001\u526a\u5207/\u5220\u9664",id:"\u590d\u5236\u7c98\u8d34\u526a\u5207\u5220\u9664",level:4},{value:"\u64a4\u9500\u3001\u6062\u590d",id:"\u64a4\u9500\u6062\u590d",level:4},{value:"\u63d2\u5165\u6a21\u5f0f",id:"\u63d2\u5165\u6a21\u5f0f",level:3},{value:"EX \u6a21\u5f0f",id:"ex-\u6a21\u5f0f",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],m={toc:p};function c(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-10-28 21:02:00 "))),(0,i.kt)("p",null,"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"),(0,i.kt)("h2",{id:"vim"},"Vim"),(0,i.kt)("p",null,"Vim \u662f\u57fa\u4e8e Linux \u4e0b Vi \u7f16\u8f91\u5668\u7684\u5347\u7ea7\u7248\uff0c\u7ecf\u8fc7\u591a\u5e74\u6765\u7684\u4e0d\u65ad\u66f4\u65b0\uff0c\u529f\u80fd\u4e5f\u8d8a\u6765\u8d8a\u5f3a\u5927\uff0cVim \u9664\u8fc7\u5177\u5907\u5e38\u7528\u6587\u672c\u7f16\u8f91\u5668\u7684\u7f16\u8f91\u64cd\u4f5c\u4ee5\u53ca\u989c\u8272\u9ad8\u4eae\u7279\u6027\u5916\uff0c\u8fd8\u652f\u6301\u81ea\u52a8\u8865\u5168\u3001\u591a\u884c\u6279\u91cf\u64cd\u4f5c\u3001\u6307\u5b9a\u8df3\u8f6c\u7b49\u7b49\u529f\u80fd\uff0c\u5176\u4e2d\u4ee3\u7801\u989c\u8272\u9ad8\u4eae\u7279\u6027\u66f4\u5229\u4e8e\u6211\u4eec\u5728\u547d\u4ee4\u884c\u4e2d\u8fdb\u884c\u4fe1\u606f\u7684\u9605\u89c8\u548c\u67e5\u770b\u3002\u800c\u4e14\uff0cVim \u652f\u6301\u5927\u591a\u6570\u64cd\u4f5c\u7cfb\u7edf\uff0c\u53ea\u662f\u6211\u4eec\u7ecf\u5e38\u5728 Linux \u4e0b\u4f7f\u7528\u5b83\u800c\u5df2\u3002\u5f53\u7136\uff0c\u5728 Linux \u4e0b\u8fd8\u6709\u4e00\u6b3e\u5f88\u8457\u540d\u7684\u7f16\u8f91\u5668 Emacs \u3002"),(0,i.kt)("p",null,"Vim \u592a\u8fc7\u5f3a\u5927\uff0c\u5bfc\u81f4\u5b66\u4e60\u66f2\u7ebf\u4e5f\u662f\u975e\u5e38\u9661\u5ced\u7684\uff0c\u4e0d\u8fc7\u4f5c\u4e3a\u4e00\u4e2a\u5de5\u5177\uff0c\u6211\u4eec\u9996\u5148\u53ea\u8981\u638c\u63e1\u5b83\u7684\u57fa\u672c\u64cd\u4f5c\u5c31\u884c\u4e86\uff0c\u81f3\u4e8e\u5176\u4ed6\u529f\u80fd\u5f85\u6211\u4eec\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53bb\u53d1\u6398\u5c31\u884c\u4e86\u3002\u9996\u5148\uff0c\u6211\u4eec\u5e94\u8be5\u77e5\u9053 Vim \u6709\u4e09\u79cd\u6a21\u5f0f\uff0c\u5373",(0,i.kt)("strong",{parentName:"p"},"\u547d\u4ee4\u6a21\u5f0f"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6a21\u5f0f"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"EX \u6a21\u5f0f"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u547d\u4ee4\u6a21\u5f0f"),(0,i.kt)("p",{parentName:"li"},"\u6b64\u6a21\u5f0f\u662f Vim \u7684\u9ed8\u8ba4\u6a21\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u4e00\u4e9b\u975e\u8f93\u5165\u64cd\u4f5c\uff0c\u4f8b\u5982\u5220\u9664\u3001\u590d\u5236\u7b49\u7b49\uff0c\u5728\u6b64\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\u548c EX \u6a21\u5f0f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d2\u5165\u6a21\u5f0f"),(0,i.kt)("p",{parentName:"li"},"\u6b64\u6a21\u5f0f\u5c31\u662f\u7f16\u8f91\u6a21\u5f0f\uff0c\u6211\u4eec\u4e3b\u8981\u8fdb\u884c\u8f93\u5165\u64cd\u4f5c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"EX \u6a21\u5f0f"),(0,i.kt)("p",{parentName:"li"},"\u6b64\u6a21\u5f0f\u5219\u662f\u5f53\u6211\u4eec\u5b8c\u6210\u7f16\u8f91\u540e\uff0c\u53ef\u4ee5\u8fdb\u884c\u9000\u51fa\u3001\u4fdd\u5b58\u7b49\u64cd\u4f5c\u3002"))),(0,i.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c31\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u7684\u547d\u4ee4\uff0c\u901a\u8fc7\u8fd9\u4e9b\u547d\u4ee4\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5feb\u901f\u5b8c\u6210\u5927\u591a\u6570\u5e38\u7528\u64cd\u4f5c\u3002"),(0,i.kt)("h3",{id:"\u6a21\u5f0f\u5207\u6362"},"\u6a21\u5f0f\u5207\u6362"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u547d\u4ee4\u6a21\u5f0f\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\ni  // \u5728\u5f53\u524d\u5b57\u7b26\u524d\u5f00\u59cb\u7f16\u8f91\na  // \u5728\u5f53\u524d\u5b57\u7b26\u540e\u5f00\u59cb\u7f16\u8f91\nI  // \u5728\u5f53\u524d\u884c\u9996\u5f00\u59cb\u7f16\u8f91\uff08Shift + I \uff0c\u6216\u8005\u5f00\u542f\u5927\u5199\uff09\nA  // \u5728\u5f53\u524d\u884c\u5c3e\u5f00\u59cb\u7f16\u8f91\uff08Shift + A \uff0c\u6216\u8005\u5f00\u542f\u5927\u5199\uff09\no  // \u5728\u5f53\u524d\u884c\u4e0b\u6dfb\u52a0\u65b0\u884c\u5f00\u59cb\u7f16\u8f91\nO  // \u5728\u5f53\u524d\u884c\u4e0a\u6dfb\u52a0\u65b0\u884c\u5f00\u59cb\u7f16\u8f91\uff08Shift + O \uff0c\u6216\u8005\u5f00\u542f\u5927\u5199\uff09\n\n# \u547d\u4ee4\u6a21\u5f0f\u8fdb\u5165EX\u6a21\u5f0f\n:  // \uff08Shift + ;\uff09\n\n# \u63d2\u5165\u6a21\u5f0f\u6216EX\u6a21\u5f0f\u8fd4\u56de\u5230\u547d\u4ee4\u6a21\u5f0f\nEsc  // \u81f3\u5c11\u6309\u4e00\u6b21 Esc \u5373\u53ef\u8fd4\u56de\u547d\u4ee4\u6a21\u5f0f\n")),(0,i.kt)("h3",{id:"\u547d\u4ee4\u6a21\u5f0f"},"\u547d\u4ee4\u6a21\u5f0f"),(0,i.kt)("p",null,"\u547d\u4ee4\u6a21\u5f0f\u662f Vim \u7684\u6838\u5fc3\u6a21\u5f0f\uff0c\u5927\u591a\u6570\u5f3a\u5927\u7684\u529f\u80fd\u547d\u4ee4\u90fd\u9700\u8981\u5728\u6b64\u6a21\u5f0f\u4e0b\u5b8c\u6210\uff0c\u5e38\u7528\u7684\u547d\u4ee4\u5219\u6709\u590d\u5236\u3001\u5220\u9664\u3001\u7c98\u8d34\u3001\u79fb\u52a8\u7b49\u7b49\u3002",(0,i.kt)("strong",{parentName:"p"},"\u800c\u4e14\uff0c\u53ea\u6709\u5728\u547d\u4ee4\u6a21\u5f0f\u4e0b\u624d\u80fd\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\u6216\u8005 EX \u6a21\u5f0f\u3002")),(0,i.kt)("h4",{id:"\u79fb\u52a8\u5149\u6807"},"\u79fb\u52a8\u5149\u6807"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"h  // \u5149\u6807\u5de6\u79fb\nj  // \u5149\u6807\u4e0b\u79fb\nk  // \u5149\u6807\u4e0a\u79fb\nl  // \u5149\u6807\u53f3\u79fb\n\nfx  // \u79fb\u52a8\u5149\u6807\u5230\u5f53\u524d\u884c\u7684\u4e0b\u4e00\u4e2a x\uff08\u4efb\u610f\u5b57\u6bcd\uff09\u5904\uff08; \u91cd\u590d\u4e0a\u4e00\u4e2af\u547d\u4ee4\uff09\nFx  // \u79fb\u52a8\u5149\u6807\u5230\u5f53\u524d\u884c\u7684\u4e0a\u4e00\u4e2a x\uff08\u4efb\u610f\u5b57\u6bcd\uff09\u5904\uff08; \u91cd\u590d\u4e0a\u4e00\u4e2aF\u547d\u4ee4\uff09\ntx  // \u79fb\u52a8\u5149\u6807\u5230\u5f53\u524d\u884c\u7684\u4e0b\u4e00\u4e2a x\uff08\u4efb\u610f\u5b57\u6bcd\uff09\u5de6\u8fb9\uff08; \u91cd\u590d\u4e0a\u4e00\u4e2at\u547d\u4ee4\uff09\nTx  // \u79fb\u52a8\u5149\u6807\u5230\u5f53\u524d\u884c\u7684\u4e0a\u4e00\u4e2a x\uff08\u4efb\u610f\u5b57\u6bcd\uff09\u5de6\u8fb9\uff08; \u91cd\u590d\u4e0a\u4e00\u4e2aT\u547d\u4ee4\uff09\n\n\nw  // \u5149\u6807\u540e\u79fb\u4e00\u4e2a\u5355\u8bcd\u5230\u8bcd\u9996\uff08W \u4e5f\u884c\uff09\ne  // \u5149\u6807\u540e\u79fb\u4e00\u4e2a\u5355\u8bcd\u5230\u8bcd\u5c3e\uff08E \u4e5f\u884c\uff09\nb  // \u5149\u6807\u524d\u79fb\u4e00\u4e2a\u5355\u8bcd\u5230\u8bcd\u9996\uff08B \u4e5f\u884c\uff09\n\n*  // \u5411\u4e0b\u5339\u914d\u5f53\u524d\u5149\u6807\u6240\u5728\u5b57\u7b26\u4e32\n#  // \u5411\u4e0a\u5339\u914d\u5f53\u524d\u5149\u6807\u6240\u5728\u5b57\u7b26\u4e32\n\n^  // \u5149\u6807\u79fb\u52a8\u5230\u884c\u9996\uff08\u6570\u5b57 0 \u4e5f\u884c\uff09\n$  // \u5149\u6807\u79fb\u52a8\u5230\u884c\u5c3e\n\ngg  // \u5149\u6807\u79fb\u52a8\u5230\u6587\u4ef6\u9996\u884c\u884c\u9996\uff08ngg \u7b2cn\u884c\u884c\u9996\uff09\nG   // \u5149\u6807\u79fb\u52a8\u5230\u6587\u4ef6\u672b\u884c\u884c\u9996\uff08nG \u7b2cn\u884c\u884c\u9996\uff09\uff08Shift + G \uff0c\u6216\u8005\u5f00\u542f\u5927\u5199\uff09\n\n`.  // \u5149\u6807\u8fd4\u56de\u5230\u4e0a\u6b21\u7f16\u8f91\u7684\u4f4d\u7f6e\n`a  // \u5149\u6807\u79fb\u52a8\u5230\u4e66\u7b7ea\u5904\n\n%  // \u5149\u6807\u5728 ()\u3001[]\u3001{} \u7b49\u7b26\u53f7\u4e4b\u95f4\u5de6\u53f3\u79fb\u52a8\n\nH  // \u5149\u6807\u79fb\u52a8\u5230\u5f53\u524d\u5c4f\u9876\u7aef\u884c\u9996\nM  // \u5149\u6807\u79fb\u52a8\u5230\u5f53\u524d\u5c4f\u4e2d\u90e8\u884c\u9996\nL  // \u5149\u6807\u79fb\u52a8\u5230\u5f53\u524d\u5c4f\u5e95\u90e8\u884c\u9996\n\nCtrl + F  // \u5411\u4e0b\u79fb\u52a8\u4e00\u5c4f\nCtrl + D  // \u5411\u4e0b\u6eda\u52a8\u534a\u5c4f\nCtrl + B  // \u5411\u4e0a\u6eda\u52a8\u4e00\u5c4f\nCtrl + U  // \u5411\u4e0a\u6eda\u52a8\u534a\u5c4f\n")),(0,i.kt)("h4",{id:"\u590d\u5236\u7c98\u8d34\u526a\u5207\u5220\u9664"},"\u590d\u5236\u3001\u7c98\u8d34\u3001\u526a\u5207/\u5220\u9664"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u590d\u5236\nyy  // \u590d\u5236\u5149\u6807\u6240\u5728\u6574\u884c\nnyy // \u590d\u5236\u5149\u6807\u6240\u5728\u884c\u5f00\u59cb\u5411\u4e0b n \u884c\uff0c\u4f8b\u5982 2yy\n\n# \u7c98\u8d34\np   // \u5149\u6807\u6240\u5728\u884c\u4e0b\u65b9\u6dfb\u52a0\u4e00\u884c\u5e76\u7c98\u8d34\u526a\u8d34\u677f\u6216\u8be5\u884c\nnp  // \u5149\u6807\u6240\u5728\u884c\u4e0b\u65b9\u6dfb\u52a0 n \u884c\u5e76\u7c98\u8d34\u526a\u8d34\u677f\u6216\u8be5\u884c\uff0c\u4f8b\u5982 2p\nP   // \u5149\u6807\u6240\u5728\u884c\u4e0a\u65b9\u6dfb\u52a0\u4e00\u884c\u5e76\u7c98\u8d34\u526a\u8d34\u677f\u6216\u8be5\u884c\nnP  // \u5149\u6807\u6240\u5728\u884c\u4e0a\u65b9\u6dfb\u52a0 n \u884c\u5e76\u7c98\u8d34\u526a\u8d34\u677f\u6216\u8be5\u884c\uff0c\u4f8b\u5982 2P\n\n# \u5220\u9664/\u526a\u5207\ndd  // \u5220\u9664/\u526a\u5207\u5149\u6807\u6240\u5728\u6574\u884c\uff0cD \u4ea6\u53ef\nndd // \u5220\u9664/\u526a\u5207\u5149\u6807\u6240\u5728\u884c\u5f00\u59cb\u5411\u4e0b n \u884c\uff0cnD \u4ea6\u53ef\uff0c\u4f8b\u5982 2dd\n\ndgg // \u5149\u6807\u6240\u5728\u884c\u5230\u6587\u6863\u5f00\u5934\u4e4b\u95f4\u5168\u90e8\u5220\u9664/\u526a\u5207\ndG  // \u5149\u6807\u6240\u5728\u884c\u5230\u6587\u6863\u7ed3\u5c3e\u4e4b\u95f4\u5168\u90e8\u5220\u9664/\u526a\u5207\n\ndngg    // \u5149\u6807\u6240\u5728\u884c\u5230\u7b2c n \u884c\u4e4b\u95f4\u5168\u90e8\u5220\u9664/\u526a\u5207\uff0cdnG \u4ea6\u53ef\uff0c\u4f8b\u5982 d2gg\n\nd+^ // \u5149\u6807\u6240\u5728\u5b57\u7b26\u5230\u884c\u9996\u4e4b\u95f4\u5168\u90e8\u5220\u9664/\u526a\u5207\nd+$ // \u5149\u6807\u6240\u5728\u5b57\u7b26\u5230\u884c\u5c3e\u4e4b\u95f4\u5168\u90e8\u5220\u9664/\u526a\u5207\uff0cD \u4ea6\u53ef\n\ndw  // \u5220\u9664\u5149\u6807\u6240\u5728\u5904\u4e00\u4e2a\u5355\u8bcd\u3001\u7b26\u53f7\n\nx   // \u5220\u9664\u5149\u6807\u6240\u5728\u5b57\u7b26\nnx  // \u5220\u9664\u5149\u6807\u6240\u5728\u5b57\u7b26\u5f00\u59cb\u5411\u540e n \u4e2a\u5b57\u7b26\uff0c\u4f8b\u5982 2x\nnX  // \u5220\u9664\u5149\u6807\u6240\u5728\u5b57\u7b26\u5f00\u59cb\u5411\u524d n \u4e2a\u5b57\u7b26\uff0c\u4f8b\u5982 2X\n")),(0,i.kt)("h4",{id:"\u64a4\u9500\u6062\u590d"},"\u64a4\u9500\u3001\u6062\u590d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"u   // \u64a4\u9500\n\nCtrl+r   // \u6062\u590d\n")),(0,i.kt)("h3",{id:"\u63d2\u5165\u6a21\u5f0f"},"\u63d2\u5165\u6a21\u5f0f"),(0,i.kt)("p",null,"\u63d2\u5165\u6a21\u5f0f\u5176\u5b9e\u5c31\u662f\u6211\u4eec\u6240\u8bf4\u7684\u7f16\u8f91\u6a21\u5f0f\uff0c\u8f93\u5165\u6a21\u5f0f\uff0c\u8fdb\u884c\u5b57\u7b26\u8f93\u5165\u64cd\u4f5c\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u6309 ",(0,i.kt)("kbd",null,"Esc")," \u5373\u53ef\u9000\u56de\u5230\u547d\u4ee4\u6a21\u5f0f\u3002"),(0,i.kt)("h3",{id:"ex-\u6a21\u5f0f"},"EX \u6a21\u5f0f"),(0,i.kt)("p",null,"EX \u6a21\u5f0f\u53ef\u4ee5\u5728\u6211\u4eec\u7f16\u8f91\u5b8c\u4e4b\u540e\uff0c\u8fdb\u884c\u4e00\u4e9b\u4fdd\u5b58\u3001\u9000\u51fa\u64cd\u4f5c\uff1b\u4e5f\u53ef\u4ee5\u5728\u6211\u4eec\u7f16\u8f91\u4e2d\u9014\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":w  // \u4fdd\u5b58\u5f53\u524d\u4fee\u6539\n:q  // \u9000\u51fa\n:q!  // \u5f3a\u5236\u9000\u51fa\uff0c\u4e0d\u4fdd\u5b58\u4fee\u6539\n:x  // \u4fdd\u5b58\u5e76\u9000\u51fa\uff08\u7b49\u4ef7 :wq\uff09\n:set nu // \u663e\u793a\u884c\u53f7\uff08\u5168\u5199 :set_number\uff09\n:set nonu // \u9690\u85cf\u884c\u53f7\uff08\u5168\u5199 :set_nonumber\uff09\n:! [\u547d\u4ee4]  // \u6267\u884c\u4e00\u4e2a\u547d\u4ee4\u5e76\u663e\u793a\u7ed3\u679c\n:sh  // \u5207\u6362\u5230\u547d\u4ee4\u884c\uff0c\u4f7f\u7528 Ctrl+D \u5207\u6362\u56de vim\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"))}c.isMDXComponent=!0}}]);