"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3061],{71244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=n(85893),l=n(11151);const i={title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",date:new Date("2021-12-07T01:13:00.000Z"),update:new Date("2021-12-08T21:12:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],description:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e core-js\uff0c\u800c ESLint \u5219\u53ef\u4f5c\u4e3a\u81ea\u52a8\u68c0\u6d4b\u7684\u8f85\u52a9\u5de5\u5177\u3002"},r=void 0,s={permalink:"/computer-technology/web-frontend/tools-web-fee-polyfill-corejs-eslint",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/tools-web-fee-polyfill-corejs-eslint.md",source:"@site/blog/computer-technology/web-frontend/tools-web-fee-polyfill-corejs-eslint.md",title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",description:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e core-js\uff0c\u800c ESLint \u5219\u53ef\u4f5c\u4e3a\u81ea\u52a8\u68c0\u6d4b\u7684\u8f85\u52a9\u5de5\u5177\u3002",date:"2021-12-07T01:13:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Polyfill",permalink:"/tags/polyfill"}],readingTime:8.71,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",date:"2021-12-07T01:13:00.000Z",update:"2021-12-08T21:12:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","Web","Polyfill"],description:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e core-js\uff0c\u800c ESLint \u5219\u53ef\u4f5c\u4e3a\u81ea\u52a8\u68c0\u6d4b\u7684\u8f85\u52a9\u5de5\u5177\u3002"},unlisted:!1,prevItem:{title:"TypeScript\uff1a\u6269\u5c55\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49",permalink:"/computer-technology/typescript/tools-typescript-type-extend"},nextItem:{title:"UNIX\u4f20\u5947\uff1a\u5386\u53f2\u4e0e\u56de\u5fc6",permalink:"/2021/12/05/life/reading/"}},c={authorsImageUrls:[void 0]},a=[];function p(e){const t={blockquote:"blockquote",code:"code",em:"em",p:"p",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2021-12-08 21:12:00"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Web \u7f51\u9875\u4e3a\u4e86\u4fdd\u8bc1\u5728\u591a\u4e2a\u5e73\u53f0\u548c\u4f4e\u4e2d\u9ad8\u7aef\u8bbe\u5907\u4e0a\u7684\u4f53\u9a8c\u7a33\u5b9a\u6027\u548c\u4e00\u81f4\u6027\uff0c\u901a\u5e38\u4f1a\u505a Polyfill \u4ee5\u4fdd\u8bc1\u517c\u5bb9\u6027\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u7136\u800c\uff0c\u517c\u5bb9\u6027\u95ee\u9898\u672c\u8eab\u662f\u4e2a\u96be\u9898\uff0cPolyfill \u4e5f\u5e76\u975e\u5f88\u597d\u5904\u7406\uff0c\u6240\u4ee5\u5728\u6280\u672f\u6f14\u53d8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u793e\u533a\u8fbe\u6210\u4e86\u4e00\u81f4\uff0c\u6709\u4e00\u4e2a\u4e3b\u6d41\u7684\u65b9\u6848\uff0c\u5927\u5bb6\u5171\u540c\u6765\u4f7f\u7528\u548c\u7ef4\u62a4\u3002\u5f53\u4e0b\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u6848\u5219\u662f\u57fa\u4e8e ",(0,o.jsx)(t.code,{children:"core-js"}),"\uff0c\u53e6\u4e00\u65b9\u9762\uff0c \u5229\u7528 ESLint \u63d2\u4ef6\u5219\u53ef\u4ee5\u505a\u5230\u81ea\u52a8\u68c0\u6d4b\u4ee3\u7801\u4e2d\u9700\u8981\u6dfb\u52a0 Polyfill \u7684 API\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"core-js"})," \u53ea\u662f\u89e3\u51b3\u4e86 JavaScript \u7684\u517c\u5bb9\u6027\u95ee\u9898\uff0cWeb \u7f51\u9875\u8fd8\u6709 CSS / HTML / Web API \u7684\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5904\u7406\u8fd9\u4e9b\u95ee\u9898\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5fc5\u7136\u4f1a\u5b58\u5728\u5927\u91cf\u76f8\u4f3c\u7684\u903b\u8f91\uff0c\u6bd4\u5982\u76ee\u6807\u8bbe\u5907\u7684\u68c0\u6d4b\u3001\u76ee\u6807\u8bbe\u5907\u7684 API \u652f\u6301\u60c5\u51b5\u7edf\u8ba1\u3002\u5f53\u7136\uff0c\u793e\u533a\u4e5f\u7ed9\u51fa\u4e86\u975e\u5e38\u597d\u7684\u65b9\u6848\uff0c\u4e0b\u9762\u5c31\u6765\u4e86\u89e3\u4e00\u4e0b\u3002"]})]})}function d(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(67294);const l={},i=o.createContext(l);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);