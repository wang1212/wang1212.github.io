"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9664],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}},54359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var i=n(57923),s=n(74848),o=n(28453);const l={title:"IDE\uff1aVS Code \u914d\u7f6e\u540c\u6b65",date:new Date("2018-08-15T16:42:00.000Z"),update:new Date("2018-08-15T16:42:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","IDE","\u7f16\u8f91\u5668","VS Code","\u914d\u7f6e\u540c\u6b65"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","IDE","\u7f16\u8f91\u5668","VS Code","\u914d\u7f6e\u540c\u6b65"],description:"\u5229\u7528\u4e00\u6b3e\u63d2\u4ef6\u6765\u540c\u6b65 VS Code \u7684\u914d\u7f6e\u5230 GitHub \u7684 gist \u4e0a\uff0c\u5b9e\u73b0\u591a\u4e2a\u8bbe\u5907\u95f4\u5171\u4eab\u4e00\u5957\u914d\u7f6e\u3002"},r=void 0,a={authorsImageUrls:[void 0]},c=[{value:"VS Code",id:"vs-code",level:2},{value:"Setting Sync",id:"setting-sync",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2018-08-15 16:42:00"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u5229\u7528\u4e00\u6b3e\u63d2\u4ef6\u6765\u540c\u6b65 VS Code \u7684\u914d\u7f6e\u5230 GitHub \u7684 gist \u4e0a\uff0c\u5b9e\u73b0\u591a\u4e2a\u8bbe\u5907\u95f4\u5171\u4eab\u4e00\u5957\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"vs-code",children:"VS Code"}),"\n",(0,s.jsx)(t.p,{children:"Visual Studio Code \u662f\u7531\u5fae\u8f6f\u51fa\u54c1\u7684\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u7f16\u8f91\u5668\uff0c\u517c\u6709\u90e8\u5206 IDE \u529f\u80fd\u3002\u5728\u4e4b\u524d\uff0cSublime Text \u662f\u6700\u53d7\u6b22\u8fce\u7684\u7f16\u8f91\u5668\uff08\u5f00\u6e90\uff09\uff0c\u4e5f\u4e3a\u591a\u6570\u524d\u7aef\u5f00\u53d1\u8005\u6240\u63a8\u5d07\uff0c\u5f53\u7136\u8bf4\u5230\u5e95\u5b83\u4f9d\u7136\u662f\u4e2a\u7f16\u8f91\u5668\u3002\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0cGitHub \u6253\u9020\u4e86\u81ea\u5bb6\u7684\u7f16\u8f91\u5668 Atom\uff0c\u5fae\u8f6f\u7684 VS Code \u4e5f\u6a2a\u7a7a\u51fa\u4e16\uff0c\u66f4\u6709\u5176\u5b83\u4f18\u79c0\u7684\u8f7b\u91cf\u7ea7\u7f16\u8f91\u5668\u5728\u5e02\u573a\u4e0a\u5c55\u5f00\u89d2\u9010\u3002\u4e0d\u8fc7\uff0c\u5230\u73b0\u5728\u6765\u770b\uff0cVS Code \u53ef\u80fd\u80dc\u51fa\u4e86\uff0c\u5df2\u6210\u4e3a\u524d\u7aef\u5f00\u53d1\u7684\u5229\u5668\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u524d\u7aef\u5f00\u53d1\u7684\u5de5\u4f5c\u6d41\u5411\u6765\u662f\u4e2a\u4ee4\u4eba\u5934\u75bc\u7684\u95ee\u9898\uff0c\u867d\u7136\u8bf4\u73b0\u5728\u5229\u7528 gulp\u3001grunt\u3001webpack \u53ef\u4ee5\u89e3\u51b3\u5927\u90e8\u5206\u95ee\u9898\uff0c\u4f46\u8981\u6362\u53f0\u7535\u8111\u91cd\u65b0\u914d\u7f6e\u4e00\u904d\u90a3\u771f\u7684\u662f\u4ee4\u4eba\u4e0d\u6562\u60f3\u8c61\u7684\u4e8b\u60c5\u3002\u800c\u4e14\uff0c\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5927\u91cf\u4f9d\u8d56\u4e86 VS Code \u63d2\u4ef6\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\uff0c\u4f46\u8981\u6362\u53f0\u7535\u8111\u91cd\u65b0\u914d\u7f6e\u4e00\u904d\u7f16\u8f91\u5668\uff0c\u88c5\u4e00\u904d\u63d2\u4ef6\u90a3\u4e5f\u662f\u76f8\u5f53\u5934\u75bc\uff0c\u65f6\u95f4\u90fd\u6d6a\u8d39\u5728\u4e86\u91cd\u590d\u6027\u5de5\u4f5c\u4e0a\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"setting-sync",children:"Setting Sync"}),"\n",(0,s.jsx)(t.p,{children:"Setting Sync \u63d2\u4ef6\u6070\u597d\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u591a\u4e2a\u8bbe\u5907\u95f4\u7f16\u8f91\u5668\u548c\u63d2\u4ef6\u914d\u7f6e\u540c\u6b65\u96be\u9898\u7684\u3002"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Setting Sync"})," : ",(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank"}),(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",children:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u5927\u6982\u7684\u539f\u7406\u5c31\u662f\u5c06\u672c\u5730\u7684 VS Code \u7684\u914d\u7f6e\u6587\u4ef6\u548c\u63d2\u4ef6\u914d\u7f6e\u540c\u6b65\u5230 GitHub \u7684 Gist \u670d\u52a1\u5668\u4e0a\uff0c\u7136\u540e\u5728\u53e6\u4e00\u53f0\u8bbe\u5907\u4e0a\u53ef\u4ee5\u901a\u8fc7 Gist ID \u548c Token ID \u4e0b\u8f7d\u914d\u7f6e\uff0c\u5373\u5b9e\u73b0\u4e86\u591a\u4e2a\u8bbe\u5907\u95f4\u914d\u7f6e\u5171\u4eab\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u63d2\u4ef6\u7684\u4f7f\u7528\u6b65\u9aa4\u5728\u5b83\u7684\u8bf4\u660e\u9875\u9762\u5f88\u8be6\u7ec6\uff0c\u5927\u6982\u5c31\u662f\u4ee5\u4e0b\u51e0\u6b65\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"\u5728 GitHub \u4e0a\u65b0\u5efa\u4e00\u4e2a Personal access tokens\uff0c\u4fdd\u5b58 token id"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"\u5728 VS Code \u4e2d\u5b89\u88c5 Setting Sync \u63d2\u4ef6\uff0c\u7136\u540e\u8f93\u5165 token id\uff0c\u4e0a\u4f20\u914d\u7f6e\u4fe1\u606f\uff0c\u5f97\u5230 gist id"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"\u5728\u53e6\u4e00\u53f0\u8bbe\u5907\u4e0a\u7684 VS Code \u4e2d\u5b89\u88c5 Setting Sync \u63d2\u4ef6\uff0c\u7136\u540e\u8f93\u5165 token id \u548c gist id \u5373\u53ef\u540c\u6b65\u914d\u7f6e"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},57923:e=>{e.exports=JSON.parse('{"permalink":"/computer-technology/tools/tools-vscode-sync","editUrl":"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/tools/tools-vscode-sync.md","source":"@site/blog/computer-technology/tools/tools-vscode-sync.md","title":"IDE\uff1aVS Code \u914d\u7f6e\u540c\u6b65","description":"\u5229\u7528\u4e00\u6b3e\u63d2\u4ef6\u6765\u540c\u6b65 VS Code \u7684\u914d\u7f6e\u5230 GitHub \u7684 gist \u4e0a\uff0c\u5b9e\u73b0\u591a\u4e2a\u8bbe\u5907\u95f4\u5171\u4eab\u4e00\u5957\u914d\u7f6e\u3002","date":"2018-08-15T16:42:00.000Z","tags":[{"inline":true,"label":"\u8ba1\u7b97\u673a\u6280\u672f","permalink":"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{"inline":true,"label":"\u5de5\u5177","permalink":"/tags/\u5de5\u5177"},{"inline":true,"label":"IDE","permalink":"/tags/ide"},{"inline":true,"label":"\u7f16\u8f91\u5668","permalink":"/tags/\u7f16\u8f91\u5668"},{"inline":true,"label":"VS Code","permalink":"/tags/vs-code"},{"inline":true,"label":"\u914d\u7f6e\u540c\u6b65","permalink":"/tags/\u914d\u7f6e\u540c\u6b65"}],"readingTime":2.6,"hasTruncateMarker":true,"authors":[{"name":"\u4e0d\u5982\u6000\u5ff5","title":"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)","url":"https://github.com/wang1212","email":"mrwang1212@126.com","imageURL":"/img/authors/wang1212.png","key":"wang1212","page":null}],"frontMatter":{"title":"IDE\uff1aVS Code \u914d\u7f6e\u540c\u6b65","date":"2018-08-15T16:42:00.000Z","update":"2018-08-15T16:42:00.000Z","authors":"wang1212","tags":["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","IDE","\u7f16\u8f91\u5668","VS Code","\u914d\u7f6e\u540c\u6b65"],"keywords":["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","IDE","\u7f16\u8f91\u5668","VS Code","\u914d\u7f6e\u540c\u6b65"],"description":"\u5229\u7528\u4e00\u6b3e\u63d2\u4ef6\u6765\u540c\u6b65 VS Code \u7684\u914d\u7f6e\u5230 GitHub \u7684 gist \u4e0a\uff0c\u5b9e\u73b0\u591a\u4e2a\u8bbe\u5907\u95f4\u5171\u4eab\u4e00\u5957\u914d\u7f6e\u3002"},"unlisted":false,"prevItem":{"title":"2018 \u5e74\u5de5\u4f5c\u8bb0\u5f55","permalink":"/life/2018-work-record"},"nextItem":{"title":"\u518d\u89c1\uff0c\u5c11\u5e74","permalink":"/2018/08/12/life/reading/"}}')}}]);