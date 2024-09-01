"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5330],{94610:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(85893),s=t(11151);const r={title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",date:new Date("2023-05-28T23:07:00.000Z"),update:new Date("2023-05-28T23:07:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"},a=void 0,l={permalink:"/2023/05/28/computer-technology/nodejs/nodejs-loader",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/nodejs/2023-05-28-nodejs-loader.md",source:"@site/blog/computer-technology/nodejs/2023-05-28-nodejs-loader.md",title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002",date:"2023-05-28T23:07:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"Node.js",permalink:"/tags/node-js"}],readingTime:4.285,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",date:"2023-05-28T23:07:00.000Z",update:"2023-05-28T23:07:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"},unlisted:!1,prevItem:{title:"\u7ed3\u5408 AI \u6280\u672f\u6784\u5efa\u53ef\u89c6\u5316\u77e5\u8bc6\u5e93\u7684\u5c1d\u8bd5",permalink:"/2023/06/19/computer-technology/ai/ai-knowledge-base"},nextItem:{title:"WebGPU \u2013 Web \u5e73\u53f0\u7684\u901a\u7528\u8ba1\u7b97 API",permalink:"/computer-technology/web-frontend/api/webgpu-gpgpu"}},i={authorsImageUrls:[void 0]},d=[];function c(e){const o={blockquote:"blockquote",code:"code",em:"em",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2023-05-28 23:07:00"})}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d ",(0,n.jsx)(o.code,{children:"--experimental-specifier-resolution"})," \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"]})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>a});var n=t(67294);const s={},r=n.createContext(s);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);