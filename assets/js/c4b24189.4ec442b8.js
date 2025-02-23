"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8526],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(96540);const o={},r=a.createContext(o);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:t},e.children)}},75485:e=>{e.exports=JSON.parse('{"permalink":"/2024/03/22/computer-technology/ai/llm/agent","editUrl":"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/ai/llm/2024-03-22-agent/index.md","source":"@site/blog/computer-technology/ai/llm/2024-03-22-agent/index.md","title":"\u8c08\u8c08\u73b0\u9636\u6bb5\u5bf9 AI Agent \u7684\u7406\u89e3","description":"\u81ea OpenAI 2022 \u5e74\u5e95\u53d1\u5e03\u4e86 ChatGPT \u540e\u4e0d\u4e45\u5c31\u7206\u53d1\u4e86 AI \u9886\u57df\u7684\u6280\u672f\u70ed\u6f6e\uff0c\u7ecf\u8fc7\u4e00\u5e74\u591a\u7684\u8fc5\u901f\u53d1\u5c55\u548c\u8fed\u4ee3\uff0c\u5f53\u524d\uff082024\uff09 Agent \u5df2\u88ab\u8ba4\u4e3a\u662f\u672a\u6765 AI \u5e94\u7528\u7684\u4e3b\u6d41\u5f62\u6001\u3002","date":"2024-03-22T18:57:00.000Z","tags":[{"inline":true,"label":"\u8ba1\u7b97\u673a\u6280\u672f","permalink":"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{"inline":true,"label":"AI","permalink":"/tags/ai"},{"inline":true,"label":"LLMs","permalink":"/tags/ll-ms"},{"inline":true,"label":"Agent","permalink":"/tags/agent"}],"readingTime":16.94,"hasTruncateMarker":true,"authors":[{"name":"\u4e0d\u5982\u6000\u5ff5","title":"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)","url":"https://github.com/wang1212","email":"mrwang1212@126.com","imageURL":"/img/authors/wang1212.png","key":"wang1212","page":null}],"frontMatter":{"title":"\u8c08\u8c08\u73b0\u9636\u6bb5\u5bf9 AI Agent \u7684\u7406\u89e3","date":"2024-03-22T18:57:00.000Z","update":"2024-03-22T18:57:00.000Z","authors":"wang1212","tags":["\u8ba1\u7b97\u673a\u6280\u672f","AI","LLMs","Agent"],"keywords":["\u8ba1\u7b97\u673a\u6280\u672f","AI","LLMs","Agent"],"description":"\u81ea OpenAI 2022 \u5e74\u5e95\u53d1\u5e03\u4e86 ChatGPT \u540e\u4e0d\u4e45\u5c31\u7206\u53d1\u4e86 AI \u9886\u57df\u7684\u6280\u672f\u70ed\u6f6e\uff0c\u7ecf\u8fc7\u4e00\u5e74\u591a\u7684\u8fc5\u901f\u53d1\u5c55\u548c\u8fed\u4ee3\uff0c\u5f53\u524d\uff082024\uff09 Agent \u5df2\u88ab\u8ba4\u4e3a\u662f\u672a\u6765 AI \u5e94\u7528\u7684\u4e3b\u6d41\u5f62\u6001\u3002"},"unlisted":false,"prevItem":{"title":"\u89e3\u6790 Rough.js \u56fe\u5f62\u7ebf\u586b\u5145\u5b9e\u73b0\uff1a\u626b\u63cf\u7ebf\u7b97\u6cd5","permalink":"/2024/06/16/computer-technology/computer-graphics/scanline-algorithm"},"nextItem":{"title":"\u7cbe\u9009\u8d44\u6e90\uff1a\u5927\u8bed\u8a00\u6a21\u578b\uff08LLMs\uff09","permalink":"/2024/03/01/awesome/llm"}}')},93106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var a=n(75485),o=n(74848),r=n(28453);const l={title:"\u8c08\u8c08\u73b0\u9636\u6bb5\u5bf9 AI Agent \u7684\u7406\u89e3",date:new Date("2024-03-22T18:57:00.000Z"),update:new Date("2024-03-22T18:57:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","AI","LLMs","Agent"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","AI","LLMs","Agent"],description:"\u81ea OpenAI 2022 \u5e74\u5e95\u53d1\u5e03\u4e86 ChatGPT \u540e\u4e0d\u4e45\u5c31\u7206\u53d1\u4e86 AI \u9886\u57df\u7684\u6280\u672f\u70ed\u6f6e\uff0c\u7ecf\u8fc7\u4e00\u5e74\u591a\u7684\u8fc5\u901f\u53d1\u5c55\u548c\u8fed\u4ee3\uff0c\u5f53\u524d\uff082024\uff09 Agent \u5df2\u88ab\u8ba4\u4e3a\u662f\u672a\u6765 AI \u5e94\u7528\u7684\u4e3b\u6d41\u5f62\u6001\u3002"},s=void 0,i={authorsImageUrls:[void 0]},c=[];function g(e){const t={blockquote:"blockquote",em:"em",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2024-03-22 18:57:00"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u81ea OpenAI 2022 \u5e74\u5e95\u53d1\u5e03\u4e86 ChatGPT \u540e\u4e0d\u4e45\u5c31\u7206\u53d1\u4e86 AI \u9886\u57df\u7684\u6280\u672f\u70ed\u6f6e\uff0c\u7ecf\u8fc7\u4e00\u5e74\u591a\u7684\u8fc5\u901f\u53d1\u5c55\u548c\u8fed\u4ee3\uff0c\u5f53\u524d\uff082024\uff09 Agent \u5df2\u88ab\u8ba4\u4e3a\u662f\u672a\u6765 AI \u5e94\u7528\u7684\u4e3b\u6d41\u5f62\u6001\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}}}]);