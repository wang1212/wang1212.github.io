"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[90361],{32147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var i=t(85893),o=t(11151);const r={title:"Linux-Vim \u7f16\u8f91\u5668",date:new Date("2016-10-28T21:02:00.000Z"),update:new Date("2016-10-28T21:02:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"},u=void 0,a={permalink:"/computer-technology/linux/linux-cmd-vim",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/linux/linux-cmd-vim.md",source:"@site/blog/computer-technology/linux/linux-cmd-vim.md",title:"Linux-Vim \u7f16\u8f91\u5668",description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002",date:"2016-10-28T21:02:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/tags/\u64cd\u4f5c\u7cfb\u7edf"},{label:"Linux",permalink:"/tags/linux"},{label:"Vim",permalink:"/tags/vim"}],readingTime:8.38,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Linux-Vim \u7f16\u8f91\u5668",date:"2016-10-28T21:02:00.000Z",update:"2016-10-28T21:02:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u64cd\u4f5c\u7cfb\u7edf","Linux","Vim"],description:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"},unlisted:!1,prevItem:{title:"Ruby-\u5143\u7f16\u7a0b\u4e4b\u4ee3\u7801\u5757",permalink:"/computer-technology/ruby/ruby-meta-block"},nextItem:{title:"Linux-\u5e38\u7528 Shell \u547d\u4ee4",permalink:"/computer-technology/linux/linux-cmd-shell"}},l={authorsImageUrls:[void 0]},m=[];function c(e){const n={blockquote:"blockquote",em:"em",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-10-28 21:02:00"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Linux \u8fd9\u6837\u7684\u547d\u4ee4\u884c\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5fc5\u987b\u6709\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7f16\u8f91\u5668\u652f\u6301\u6211\u4eec\u5feb\u901f\u5b8c\u6210\u6587\u672c\u7f16\u8f91\uff0c\u8fd9\u5c31\u662f Vi \u7f16\u8f91\u5668\uff1b\u901a\u8fc7\u5bf9\u5176\u52a0\u5f3a\u548c\u5347\u7ea7\uff0cVim \u7f16\u8f91\u5668\u6bd4\u524d\u8005\u66f4\u4e3a\u5f3a\u5927\uff0c\u62e5\u6709\u66f4\u591a\u7684\u529f\u80fd\u548c\u989c\u8272\u9ad8\u4eae\u7684\u7279\u6027\uff0c\u662f\u7a0b\u5e8f\u5458\u5728 Linux \u4e0b\u7f16\u7801\u7684\u5229\u5668\u3002"})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>u});var i=t(67294);const o={},r=i.createContext(o);function u(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);