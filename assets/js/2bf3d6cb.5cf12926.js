"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[72545],{61744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(85893),o=n(11151);const r={title:"\u7ed3\u5408 AI \u6280\u672f\u6784\u5efa\u53ef\u89c6\u5316\u77e5\u8bc6\u5e93\u7684\u5c1d\u8bd5",date:new Date("2023-06-19T22:30:00.000Z"),update:new Date("2024-01-27T20:37:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","AI","\u5411\u91cf\u641c\u7d22","LangChain","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","AI","\u5411\u91cf\u641c\u7d22","LangChain","\u5b9e\u8df5\u6848\u4f8b"],description:"\u5728 OpenAI \u5f15\u9886 AI \u6280\u672f\u6f6e\u6d41\u7684\u5f53\u4e0b\uff0cLLM \u6210\u4e3a\u5f88\u591a\u4f01\u4e1a\u8dc3\u8dc3\u6b32\u8bd5\u5e76\u5c1d\u8bd5\u8fdb\u884c\u5546\u4e1a\u5316\u7684\u4e00\u4e2a\u91cd\u8981\u6280\u672f\u9886\u57df\uff0c\u5176\u4e2d\u7ed3\u5408 AI \u6280\u672f\u8fdb\u884c\u77e5\u8bc6\u5e93\u6784\u5efa\u6210\u4e3a\u4e86\u5f00\u6e90\u793e\u533a\u5728\u8be5\u9886\u57df\u6700\u6210\u529f\u7684\u7ecf\u5178\u6848\u4f8b\uff0c\u6070\u597d\u56e2\u961f\u4e5f\u6709\u673a\u4f1a\u57fa\u4e8e\u6b64\u8fdb\u884c\u63a2\u7d22\u5c1d\u8bd5\u3002"},i=void 0,s={permalink:"/2023/06/19/computer-technology/ai/ai-knowledge-base",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/ai/2023-06-19-ai-knowledge-base.md",source:"@site/blog/computer-technology/ai/2023-06-19-ai-knowledge-base.md",title:"\u7ed3\u5408 AI \u6280\u672f\u6784\u5efa\u53ef\u89c6\u5316\u77e5\u8bc6\u5e93\u7684\u5c1d\u8bd5",description:"\u5728 OpenAI \u5f15\u9886 AI \u6280\u672f\u6f6e\u6d41\u7684\u5f53\u4e0b\uff0cLLM \u6210\u4e3a\u5f88\u591a\u4f01\u4e1a\u8dc3\u8dc3\u6b32\u8bd5\u5e76\u5c1d\u8bd5\u8fdb\u884c\u5546\u4e1a\u5316\u7684\u4e00\u4e2a\u91cd\u8981\u6280\u672f\u9886\u57df\uff0c\u5176\u4e2d\u7ed3\u5408 AI \u6280\u672f\u8fdb\u884c\u77e5\u8bc6\u5e93\u6784\u5efa\u6210\u4e3a\u4e86\u5f00\u6e90\u793e\u533a\u5728\u8be5\u9886\u57df\u6700\u6210\u529f\u7684\u7ecf\u5178\u6848\u4f8b\uff0c\u6070\u597d\u56e2\u961f\u4e5f\u6709\u673a\u4f1a\u57fa\u4e8e\u6b64\u8fdb\u884c\u63a2\u7d22\u5c1d\u8bd5\u3002",date:"2023-06-19T22:30:00.000Z",formattedDate:"2023\u5e746\u670819\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"AI",permalink:"/tags/ai"},{label:"\u5411\u91cf\u641c\u7d22",permalink:"/tags/\u5411\u91cf\u641c\u7d22"},{label:"LangChain",permalink:"/tags/lang-chain"},{label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:12.29,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u7ed3\u5408 AI \u6280\u672f\u6784\u5efa\u53ef\u89c6\u5316\u77e5\u8bc6\u5e93\u7684\u5c1d\u8bd5",date:"2023-06-19T22:30:00.000Z",update:"2024-01-27T20:37:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","AI","\u5411\u91cf\u641c\u7d22","LangChain","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","AI","\u5411\u91cf\u641c\u7d22","LangChain","\u5b9e\u8df5\u6848\u4f8b"],description:"\u5728 OpenAI \u5f15\u9886 AI \u6280\u672f\u6f6e\u6d41\u7684\u5f53\u4e0b\uff0cLLM \u6210\u4e3a\u5f88\u591a\u4f01\u4e1a\u8dc3\u8dc3\u6b32\u8bd5\u5e76\u5c1d\u8bd5\u8fdb\u884c\u5546\u4e1a\u5316\u7684\u4e00\u4e2a\u91cd\u8981\u6280\u672f\u9886\u57df\uff0c\u5176\u4e2d\u7ed3\u5408 AI \u6280\u672f\u8fdb\u884c\u77e5\u8bc6\u5e93\u6784\u5efa\u6210\u4e3a\u4e86\u5f00\u6e90\u793e\u533a\u5728\u8be5\u9886\u57df\u6700\u6210\u529f\u7684\u7ecf\u5178\u6848\u4f8b\uff0c\u6070\u597d\u56e2\u961f\u4e5f\u6709\u673a\u4f1a\u57fa\u4e8e\u6b64\u8fdb\u884c\u63a2\u7d22\u5c1d\u8bd5\u3002"},unlisted:!1,prevItem:{title:"\u8c08\u8c08\u7b14\u8bb0\u8bb0\u5f55\u548c\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177",permalink:"/2023/07/22/tools/notes-app"},nextItem:{title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",permalink:"/2023/05/28/computer-technology/nodejs/nodejs-loader"}},l={authorsImageUrls:[void 0]},c=[];function p(e){const t={blockquote:"blockquote",em:"em",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2024-01-27 20:37:00"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"\u5728 OpenAI \u5f15\u9886 AI \u6280\u672f\u6f6e\u6d41\u7684\u5f53\u4e0b\uff0cLLM \u6210\u4e3a\u5f88\u591a\u4f01\u4e1a\u8dc3\u8dc3\u6b32\u8bd5\u5e76\u5c1d\u8bd5\u8fdb\u884c\u5546\u4e1a\u5316\u7684\u4e00\u4e2a\u91cd\u8981\u6280\u672f\u9886\u57df\uff0c\u5176\u4e2d\u7ed3\u5408 AI \u6280\u672f\u8fdb\u884c\u77e5\u8bc6\u5e93\u6784\u5efa\u6210\u4e3a\u4e86\u5f00\u6e90\u793e\u533a\u5728\u8be5\u9886\u57df\u6700\u6210\u529f\u7684\u7ecf\u5178\u6848\u4f8b\uff0c\u6070\u597d\u56e2\u961f\u4e5f\u6709\u673a\u4f1a\u57fa\u4e8e\u6b64\u8fdb\u884c\u63a2\u7d22\u5c1d\u8bd5\u3002"})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);