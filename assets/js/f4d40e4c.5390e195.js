"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[90361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=i,y=s["".concat(u,".").concat(g)]||s[g]||p[g]||o;return n?r.createElement(y,a(a({ref:t},m),{},{components:n})):r.createElement(y,a({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Linux-Vim \u7f16\u8f91\u5668",date:new Date("2016-10-28T21:02:00.000Z"),update:new Date("2016-10-28T21:02:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"},a=void 0,l={permalink:"/computer-technology/linux/linux-cmd-vim",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/linux/linux-cmd-vim.md",source:"@site/blog/computer-technology/linux/linux-cmd-vim.md",title:"Linux-Vim \u7f16\u8f91\u5668",description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002",date:"2016-10-28T21:02:00.000Z",formattedDate:"2016\u5e7410\u670828\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/tags/\u64cd\u4f5c\u7cfb\u7edf"},{label:"Linux",permalink:"/tags/linux"},{label:"Vim",permalink:"/tags/vim"}],readingTime:8.38,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Linux-Vim \u7f16\u8f91\u5668",date:"2016-10-28T21:02:00.000Z",update:"2016-10-28T21:02:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"},prevItem:{title:"Ruby-\u5143\u7f16\u7a0b\u4e4b\u4ee3\u7801\u5757",permalink:"/computer-technology/ruby/ruby-meta-block"},nextItem:{title:"Linux-\u5e38\u7528 Shell \u547d\u4ee4",permalink:"/computer-technology/linux/linux-cmd-shell"}},u={authorsImageUrls:[void 0]},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-10-28 21:02:00"))),(0,i.kt)("p",null,"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"))}p.isMDXComponent=!0}}]);