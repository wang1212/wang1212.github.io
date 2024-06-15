"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4793],{96714:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var l=r(85893),s=r(11151);const i={title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",date:new Date("2021-07-19T00:51:00.000Z"),update:new Date("2024-04-15T11:03:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],description:"\u5728\u4e00\u4e9b\u8f83\u4e3a\u590d\u6742\u7684 Web \u5e94\u7528\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u74f6\u9888\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6025\u5267\u4e0b\u964d\uff0c\u505a\u4f18\u5316\u4e4b\u524d\u66f4\u5e94\u8be5\u4e86\u89e3\u4e00\u4e0b\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u4ece\u800c\u5728\u51fa\u95ee\u9898\u65f6\u786e\u5b9a\u4f18\u5316\u8def\u5f84\u3002"},t=void 0,o={permalink:"/2021/07/19/computer-technology/web-frontend/web-performance-core-concepts",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/2021-07-19-web-performance-core-concepts.md",source:"@site/blog/computer-technology/web-frontend/2021-07-19-web-performance-core-concepts.md",title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",description:"\u5728\u4e00\u4e9b\u8f83\u4e3a\u590d\u6742\u7684 Web \u5e94\u7528\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u74f6\u9888\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6025\u5267\u4e0b\u964d\uff0c\u505a\u4f18\u5316\u4e4b\u524d\u66f4\u5e94\u8be5\u4e86\u89e3\u4e00\u4e0b\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u4ece\u800c\u5728\u51fa\u95ee\u9898\u65f6\u786e\u5b9a\u4f18\u5316\u8def\u5f84\u3002",date:"2021-07-19T00:51:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{inline:!0,label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"},{inline:!0,label:"\u6838\u5fc3\u6982\u5ff5",permalink:"/tags/\u6838\u5fc3\u6982\u5ff5"}],readingTime:14.4,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",date:"2021-07-19T00:51:00.000Z",update:"2024-04-15T11:03:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u6027\u80fd\u4f18\u5316","\u6838\u5fc3\u6982\u5ff5"],description:"\u5728\u4e00\u4e9b\u8f83\u4e3a\u590d\u6742\u7684 Web \u5e94\u7528\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u74f6\u9888\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6025\u5267\u4e0b\u964d\uff0c\u505a\u4f18\u5316\u4e4b\u524d\u66f4\u5e94\u8be5\u4e86\u89e3\u4e00\u4e0b\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u4ece\u800c\u5728\u51fa\u95ee\u9898\u65f6\u786e\u5b9a\u4f18\u5316\u8def\u5f84\u3002"},unlisted:!1,prevItem:{title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",permalink:"/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer"},nextItem:{title:"\u5bf9\u7b2c\u4e00\u4efd\u5de5\u4f5c\u751f\u6d3b\u7684\u56de\u987e",permalink:"/life/2021-life-work-review"}},c={authorsImageUrls:[void 0]},d=[{value:"RAIL \u6027\u80fd\u6a21\u578b",id:"rail-\u6027\u80fd\u6a21\u578b",level:2},{value:"\u5173\u952e\u6e32\u67d3\u8def\u5f84",id:"\u5173\u952e\u6e32\u67d3\u8def\u5f84",level:2},{value:"pixel pipeline",id:"pixel-pipeline",level:2},{value:"\u52a8\u753b\u6027\u80fd",id:"\u52a8\u753b\u6027\u80fd",level:3},{value:"Web Vitals",id:"web-vitals",level:2},{value:"\u5e03\u5c40\u504f\u79fb\uff08LS\uff09",id:"\u5e03\u5c40\u504f\u79fbls",level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:2},{value:"\u6e10\u8fdb\u5f0f Web \u5e94\u7528",id:"\u6e10\u8fdb\u5f0f-web-\u5e94\u7528",level:2},{value:"PRPL \u6a21\u578b",id:"prpl-\u6a21\u578b",level:2},{value:"\u53c2\u8003\u8d44\u6e90",id:"\u53c2\u8003\u8d44\u6e90",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2024-04-15 11:03:00"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8bf4\u5230 Web \u7684\u6027\u80fd\u4f18\u5316\uff0c\u53ef\u80fd\u5f88\u591a\u65f6\u5019\u6211\u4eec\u91c7\u53d6\u4e86\u4e00\u4e9b\u63aa\u65bd\uff0c\u770b\u5230\u4e86\u8089\u773c\u53ef\u89c1\u7684\u6539\u8fdb\uff0c\u5982\u679c\u6211\u4eec\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u6d4b\u91cf\uff0c\u786e\u5b9a\u6211\u4eec\u6539\u8fdb\u7684\u6548\u7387\uff08\u767e\u5206\u6bd4\uff09\u662f\u4e0d\u662f\u4f1a\u66f4\u6709\u610f\u4e49\uff1f\u6362\u53e5\u8bdd\u8bf4\uff0c\u5982\u679c\u6211\u4eec\u4e86\u89e3\u6027\u80fd\u74f6\u9888\u53ef\u80fd\u53d1\u751f\u7684\u4f4d\u7f6e\uff0c\u8861\u91cf\u7528\u6237\u4f53\u9a8c\u597d\u574f\u7684\u6307\u6807\uff0c\u505a\u5230\u5b9e\u65f6\u8ffd\u8e2a\u6027\u80fd\u53d8\u5316\uff0c\u6211\u4eec\u662f\u4e0d\u662f\u53ef\u4ee5\u66f4\u8fc5\u901f\u7684\u91c7\u53d6\u4f18\u5316\u63aa\u65bd\uff1f\u5728\u5e94\u7528\u4e0a\u7ebf\u524d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u505a\u4e00\u4e9b\u4f4e\u6210\u672c\u800c\u6709\u9ad8\u6536\u76ca\u7684\u4f18\u5316\u5de5\u4f5c\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4e00\u4e0b Web \u6027\u80fd\u76f8\u5173\u7684\u6838\u5fc3\u6982\u5ff5\u548c\u76f8\u5173\u6307\u6807\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8c37\u6b4c\u4f5c\u4e3a\u529b\u63a8 Web \u6280\u672f\u7684\u79d1\u6280\u5de8\u5934\uff0c\u4e0d\u4ec5\u63d0\u4f9b\u4e86\u51fa\u8272\u7684 Chrome DevTools\uff0c\u66f4\u662f\u8d21\u732e\u4e86\u9ad8\u8d28\u91cf\u7684\u5f00\u53d1\u6587\u6863\uff0c\u4e3a\u4e1a\u754c\u5f15\u8fdb\u4e86\u4f17\u591a\u5148\u8fdb\u7684\u7406\u5ff5\uff0c\u5148\u6765\u62dc\u8bfb\u4e00\u4e0b\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0\uff0c\u641e\u660e\u767d\u4e3a\u4f55\u6211\u4eec\u9700\u8981\u5bf9 Web \u7f51\u7ad9\u505a\u6781\u81f4\u7684\u4f18\u5316\uff1f"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://web.dev/why-speed-matters/",children:"Why does speed matter?"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"rail-\u6027\u80fd\u6a21\u578b",children:"RAIL \u6027\u80fd\u6a21\u578b"}),"\n",(0,l.jsx)(n.p,{children:"RAIL \u662f\u4e00\u4e2a\u7531\u8c37\u6b4c\u63d0\u51fa\u7684\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u6027\u80fd\u6a21\u578b\uff0c\u5c06\u7528\u6237\u4f53\u9a8c\u5206\u89e3\u4e3a\u5173\u952e\u64cd\u4f5c\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u4e3a\u6bcf\u4e2a\u64cd\u4f5c\u5b9a\u4e49\u6027\u80fd\u76ee\u6807\u3002RAIL \u4ee3\u8868"}),"\n",(0,l.jsx)(n.p,{children:"Web \u5e94\u7528\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u7684\u56db\u4e2a\u65b9\u9762\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Response\uff0850 \u6beb\u79d2\u5185\u5904\u7406\u4e8b\u4ef6\uff09"}),"\n",(0,l.jsx)(n.li,{children:"Animation\uff0810 \u6beb\u79d2\u5185\u751f\u6210\u4e00\u5e27\uff09"}),"\n",(0,l.jsx)(n.li,{children:"Idle\uff08\u6700\u5927\u5316\u7a7a\u95f2\u65f6\u95f4\uff09"}),"\n",(0,l.jsx)(n.li,{children:"Load\uff08\u4ea4\u4ed8\u5185\u5bb9\u5e76\u5728 5 \u79d2\u5185\u53ef\u4ea4\u4e92\uff09"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u62ec\u53f7\u4e2d\u8868\u793a\u63a8\u8350\u7684\u6027\u80fd\u76ee\u6807\uff0c\u662f\u6211\u4eec\u5728\u5f00\u53d1 Web \u5e94\u7528\u65f6\u52a1\u5fc5\u8981\u6ee1\u8db3\u7684\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1\u826f\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002",(0,l.jsx)(n.strong,{children:"RAIL \u6027\u80fd\u6a21\u578b\u672c\u8d28\u4e0a\u662f\u63d0\u51fa\u4e86\u4e00\u4e2a\u7b80\u5355\u800c\u6709\u6548\u7684\u8861\u91cf\u6027\u80fd\u7684\u65b9\u6cd5\uff0c\u5e76\u7ed9\u51fa\u4e00\u4e2a\u63a8\u8350\u7684\u76ee\u6807\uff0c\u81f3\u4e8e\u53ef\u80fd\u53d1\u751f\u6027\u80fd\u74f6\u9888\u7684\u5173\u952e\u70b9\u548c\u5982\u4f55\u53bb\u8fbe\u5230\u4f18\u5316\u76ee\u6807\u5219\u6ca1\u6709\u63d0\u53ca\u592a\u591a\u3002"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://web.dev/rail/",children:"https://web.dev/rail/"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952e\u6e32\u67d3\u8def\u5f84",children:"\u5173\u952e\u6e32\u67d3\u8def\u5f84"}),"\n",(0,l.jsxs)(n.p,{children:["\u5173\u952e\u6e32\u67d3\u8def\u5f84\uff08Critical rendering path\uff09\u662f\u4e00\u4e2a\u6838\u5fc3\u4e14\u57fa\u7840\u7684\u6982\u5ff5\uff0c\u63cf\u8ff0\u4e86\u6d4f\u89c8\u5668\u5c06 HTML\u3001CSS \u548c JavaScript \u8f6c\u6362\u4e3a\u5c4f\u5e55\u4e0a\u7684\u50cf\u7d20\u6240\u7ecf\u5386\u7684\u4e00\u7cfb\u5217\u6b65\u9aa4\u3002",(0,l.jsx)(n.strong,{children:"\u5176\u5f71\u54cd\u6700\u5927\u7684\u662f\u9875\u9762\u9996\u6b21\u52a0\u8f7d\u7684\u6e32\u67d3\u6027\u80fd\uff0c\u5176\u6b21\u662f\u9875\u9762\u590d\u6742\u4ea4\u4e92\u7684\u6e32\u67d3\u6027\u80fd\u3002"})]}),"\n",(0,l.jsx)(n.p,{children:"\u7b80\u5355\u7684\u6765\u8bf4\uff0c\u5173\u952e\u6e32\u67d3\u8def\u5f84\u4e3b\u8981\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4e0b\u8f7d\u5b8c HTML \u6587\u4ef6\u5f00\u59cb\u89e3\u6790\uff0c",(0,l.jsx)(n.strong,{children:"\u6784\u5efa\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09\u548c CSS \u5bf9\u8c61\u6a21\u578b\uff08CSSOM\uff09"}),"\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06 DOM \u548c CSSOM \u6811",(0,l.jsx)(n.strong,{children:"\u5408\u6210\u6e32\u67d3\u6811\uff08Render tree\uff09"}),"\uff0cDOM \u4ee3\u8868\u5185\u5bb9\uff0cCSSOM \u4ee3\u8868\u6837\u5f0f\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6784\u5efa\u597d\u6e32\u67d3\u6811\uff0c\u5f00\u59cb",(0,l.jsx)(n.strong,{children:"\u5e03\u5c40\uff08Layout \uff09\u8ba1\u7b97"}),"\uff0c\u786e\u5b9a\u5143\u7d20\u5728\u9875\u9762\u4e0a\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8\uff0c\u4ee5\u53ca\u5143\u7d20\u4e4b\u95f4\u7684\u4f4d\u7f6e\uff0c\u8f93\u51fa\u201c\u76d2\u6a21\u578b\u201d\uff1b"]}),"\n",(0,l.jsx)(n.li,{children:"\u5b8c\u6210\u5e03\u5c40\u8ba1\u7b97\u540e\uff0c\u5c31\u53ef\u4ee5\u5c06\u6e32\u67d3\u6811\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u8f6c\u6362\u6210\u5c4f\u5e55\u4e0a\u7684\u5b9e\u9645\u50cf\u7d20\uff0c\u5373**\u201c\u7ed8\u5236\uff08Paint\uff09\u201d\u6216\u8005\u201c\u5149\u6805\u5316\uff08Rasterization\uff09\u201d**\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u7406\u89e3\u4e86\u6709\u54ea\u51e0\u4e2a\u6b65\u9aa4\u4e4b\u540e\u5c31\u53ef\u4ee5\u56f4\u7ed5\u8fd9\u4e9b\u6765\u505a\u4f18\u5316\u4e86\uff0c\u5404\u4e2a\u6b65\u9aa4\u5177\u4f53\u7684\u5185\u5bb9\u4ee5\u53ca\u53ef\u80fd\u5e26\u6765\u7684\u6027\u80fd\u74f6\u9888\u770b\u4e0b\u65b9\u6587\u6863\u66f4\u80fd\u5bb9\u6613\u7406\u89e3\u4e00\u4e9b\uff0c\u5728\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path",children:"https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path",children:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://angularindepth.com/posts/1498/101-javascript-critical-rendering-path",children:"https://angularindepth.com/posts/1498/101-javascript-critical-rendering-path"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u80fd\u6df1\u523b\u7406\u89e3\u5173\u952e\u6e32\u67d3\u8def\u5f84\u7684\u6982\u5ff5\uff0c\u5c31\u4f1a\u5bf9 Web \u6027\u80fd\u4f18\u5316\u6709\u4e86\u4e00\u4e2a\u6bd4\u8f83\u6e05\u6670\u7684\u8ba4\u8bc6\uff0c\u56e0\u4e3a\u9875\u9762\u5b8c\u6210\u521d\u59cb\u5316\u540e\uff0c\u540e\u7eed\u7528\u6237\u4ea4\u4e92\u9020\u6210\u7684\u9875\u9762\u7ed3\u6784\u5e03\u5c40\u53d1\u751f\u7684\u53d8\u5316\u4e3b\u8981\u5c31\u4f53\u73b0\u5728",(0,l.jsx)(n.strong,{children:"\u5e03\u5c40\uff08Layout \uff09\u8ba1\u7b97"}),"\u4e0e**\u91cd\u7ed8\uff08Repaint\uff09**\u8fd9\u4e24\u4e2a\u65b9\u9762\uff0c\u6027\u80fd\u74f6\u9888\u4e5f\u7531\u6b64\u4ea7\u751f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"pixel-pipeline",children:"pixel pipeline"}),"\n",(0,l.jsxs)(n.p,{children:["\u73b0\u4ee3 Web \u7f51\u7ad9\u6216\u8005\u5e94\u7528\u5177\u5907\u4e30\u5bcc\u7684\u52a8\u6001\u4ea4\u4e92\u80fd\u529b\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u9875\u9762\u662f\u968f\u65f6\u95f4\u548c\u7528\u6237\u4ea4\u4e92\u89e6\u53d1\u5728\u52a8\u6001\u53d8\u5316\uff0c\u5176\u4e2d\u67d0\u4e00\u65f6\u523b\u7684\u72b6\u6001\u6211\u4eec\u79f0\u4e4b\u4e3a\u5e27\uff08frame\uff09\uff0c\u591a\u4e2a\u8fde\u7eed\u7684\u5e27\u72b6\u6001\u7ec4\u5408\u5728\u4e00\u8d77\u5c31\u5b9e\u73b0\u4e86\u52a8\u6001\u6548\u679c\uff08\u52a8\u753b\uff09\u3002\u800c\u8981\u4fdd\u8bc1\u4ea4\u4e92\u7684\u6d41\u7545\u6027\uff0c\u6211\u4eec\u5c31\u5f97\u4e86\u89e3\u5e27\u7387\uff08frame rate\uff09\u8fd9\u4e2a\u6982\u5ff5\uff0c\u5b83\u8868\u793a\u8fde\u7eed\u5e27\u7684\u53d8\u5316\u901f\u7387\uff0c\u5c3d\u53ef\u80fd\u4e0e\u663e\u793a\u8bbe\u5907\u7684\u5237\u65b0\u7387\uff08\u901a\u5e38\u4e3a 60 \u6b21/\u79d2\uff09\u4fdd\u6301\u4e00\u81f4\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\u6bcf\u4e00\u5e27\u82b1\u8d39\u7684\u65f6\u95f4\u4e3a 16 \u6beb\u79d2\u5de6\u53f3\uff081 \u79d2 / 60 = 16.66 \u6beb\u79d2\uff09\uff0c\u5b9e\u9645\u4e0a\u7531\u4e8e\u7cfb\u7edf\u6709\u989d\u5916\u7684\u5de5\u4f5c\u8981\u505a\uff0c\u65f6\u95f4\u4f1a\u66f4\u77ed\u3002",(0,l.jsx)(n.strong,{children:"\u4e3a\u4e86\u4f18\u5316\u5e27\u7387\u8fbe\u5230\u7406\u60f3\u72b6\u6001\uff0c\u6211\u4eec\u9700\u8981\u4e86\u89e3\u6d4f\u89c8\u5668\u5728\u6bcf\u4e00\u5e27\u90fd\u6d89\u53ca\u54ea\u4e9b\u5de5\u4f5c\uff0c\u5373\u50cf\u7d20\u7ba1\u9053\uff08pixel pipeline\uff09"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6267\u884c JavaScript"}),"\n",(0,l.jsx)(n.li,{children:"\u6837\u5f0f\u8ba1\u7b97\uff08Style\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u5e03\u5c40\uff08Layout\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u7ed8\u5236\uff08Paint\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u5408\u6210\uff08Composite\uff09"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0a\u6b65\u9aa4\u5c31\u662f\u6bcf\u4e00\u5e27\u6240\u8981\u505a\u7684\u5de5\u4f5c\uff0c\u4f18\u5316\u7684\u624b\u6bb5\u5c31\u662f\u964d\u4f4e\u6bcf\u4e2a\u6b65\u9aa4\u7684\u8017\u65f6\u3002\u53ef\u4ee5\u770b\u51fa\uff0c\u5b9e\u9645\u4e0a\u8fd9\u662f\u5173\u952e\u6e32\u67d3\u8def\u5f84\u4e2d\u63d0\u5230\u7684\u5e03\u5c40\u4e0e\u91cd\u7ed8\u66f4\u7ec6\u5316\u7684\u8868\u793a\u3002\u4e0d\u8fc7\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c",(0,l.jsx)(n.strong,{children:"\u5e76\u4e0d\u662f\u6bcf\u4e00\u5e27\u90fd\u8981\u5386\u7ecf\u4ee5\u4e0a\u6240\u6709\u7684\u6b65\u9aa4\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8df3\u8fc7\u67d0\u4e9b\u6b65\u9aa4"}),"\uff0c\u8fd9\u5c31\u7ed9\u4e86\u6211\u4eec\u4f18\u5316\u5e27\u7387\u7684\u4e00\u4e2a\u7a81\u7834\u53e3\u3002\u8be6\u7ec6\u7684\u5185\u5bb9\u67e5\u770b\u4e0b\u9762\u8c37\u6b4c\u5f00\u53d1\u8005\u6587\u6863\uff0c\u56fe\u6587\u4ecb\u7ecd\u76f4\u89c2\u6613\u61c2\uff0c\u8fd8\u6709\u53c2\u8003\u6587\u6863\u4e5f\u503c\u5f97\u6536\u85cf\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/rendering#the_pixel_pipeline",children:"https://developers.google.com/web/fundamentals/performance/rendering#the_pixel_pipeline"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://csstriggers.com/",children:"https://csstriggers.com/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a",children:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u52a8\u753b\u6027\u80fd",children:"\u52a8\u753b\u6027\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u8c08\u5230\u5e27\u7387\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5f88\u5bb9\u6613\u4f1a\u60f3\u5230\u52a8\u753b\uff0c60 FPS\uff08frame per second\uff09\u662f\u5b9e\u73b0\u52a8\u753b\u7684\u4e00\u4e2a\u6838\u5fc3\u6027\u80fd\u76ee\u6807\u3002\u5b9e\u73b0\u52a8\u753b\u6709\u4e24\u79cd\u65b9\u5f0f\uff1aCSS \u548c JavaScript\u3002"}),"\n",(0,l.jsx)(n.p,{children:"CSS \u5b9e\u73b0\u52a8\u753b\u8f83\u4e3a\u7b80\u5355\uff0c\u4e00\u822c\u6765\u8bf4\u6027\u80fd\u4e5f\u6700\u4f73\uff0c\u6709\u51e0\u4e2a\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5c3d\u91cf\u7528 ",(0,l.jsx)(n.code,{children:"transform"}),"\uff083d\uff09\u548c ",(0,l.jsx)(n.code,{children:"opacity"})," \u5b9e\u73b0\u52a8\u753b\uff0c\u5728\u5927\u591a\u6570\u6e32\u67d3\u5f15\u64ce\u4e2d\u5b83\u4eec",(0,l.jsx)(n.strong,{children:"\u4e0d\u4f1a\u89e6\u53d1\u5e03\u5c40\u548c\u7ed8\u5236"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u53ef\u4ee5\u5229\u7528 ",(0,l.jsx)(n.code,{children:"will-change"}),"\uff08\u6216\u8005 ",(0,l.jsx)(n.code,{children:"translateZ"}),"\uff09CSS \u5c5e\u6027\u6765",(0,l.jsx)(n.strong,{children:"\u89e6\u53d1\u521b\u5efa\u65b0\u7684 GPU \u5c42\uff0c\u4f18\u5316\u6027\u80fd\uff0c\u4f46\u4e0d\u8981\u6ee5\u7528"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u51cf\u5c11\u7ed8\u5236\u533a\u57df"}),"\u548c",(0,l.jsx)(n.strong,{children:"\u964d\u4f4e\u7ed8\u5236\u7684\u590d\u6742\u6027"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u800c\u5229\u7528 JavaScript \u5b9e\u73b0\u52a8\u753b\u7075\u6d3b\u6027\u66f4\u5927\uff0c\u4e5f\u80fd\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u52a8\u753b\u6548\u679c\uff0c\u4e5f\u6709\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u7528 ",(0,l.jsx)(n.code,{children:"requestAnimationFrame"})," \u5b9e\u73b0\u52a8\u753b\uff0c\u907f\u514d\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"setTimeout"})," \u6216 ",(0,l.jsx)(n.code,{children:"setInterval"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u907f\u514d\u53d1\u751f",(0,l.jsx)(n.strong,{children:"\u5f3a\u5236\u540c\u6b65\u5e03\u5c40"}),"\u548c",(0,l.jsx)(n.strong,{children:"\u5e03\u5c40\u6296\u52a8"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5bf9 JS \u5904\u7406\u51fd\u6570\u8fdb\u884c",(0,l.jsx)(n.strong,{children:"\u53bb\u6296\u52a8"}),"\u548c",(0,l.jsx)(n.strong,{children:"\u8282\u6d41"}),"\u4f18\u5316"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53ef\u4ee5\u628a\u590d\u6742\u7684 JS \u8ba1\u7b97\u653e\u5165 ",(0,l.jsx)(n.code,{children:"Web Worker"})," \u7ebf\u7a0b\u6267\u884c"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0a\u53ea\u662f\u5bf9\u4e00\u4e9b\u6838\u5fc3\u8981\u70b9\u7684\u603b\u7ed3\uff0c\u5177\u4f53\u7684\u5185\u5bb9\u67e5\u770b\u4e0b\u5217\u6587\u7ae0\u8fdb\u884c\u4e86\u89e3\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/Animation_performance_and_frame_rate",children:"https://developer.mozilla.org/en-US/docs/Web/Performance/Animation_performance_and_frame_rate"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas",children:"https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance",children:"https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution",children:"https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing",children:"https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers",children:"https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"web-vitals",children:"Web Vitals"}),"\n",(0,l.jsxs)(n.p,{children:["Web Vitals \u662f\u8c37\u6b4c\u63d0\u51fa\u7684\u4e00\u9879\u8ba1\u5212\uff0c\u7528\u6765\u91cf\u5316\u73b0\u4ee3\u7f51\u7ad9\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u662f\u5bf9\u7f51\u7ad9\u6027\u80fd\u7684\u4e00\u79cd\u4fa7\u9762\u4f46\u53c8\u76f4\u63a5\u6709\u6548\u7684\u53cd\u6620\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u8c37\u6b4c\u5bf9\u7eb7\u7e41\u590d\u6742\u7684\u6027\u80fd\u6307\u6807\u8fdb\u884c\u4e86\u7efc\u5408\u5206\u6790\uff0c\u6700\u7ec8\u62bd\u8c61\u51fa\u4e86 Web Vitals \u6240\u5305\u542b\u7684\u591a\u4e2a\u7b80\u5316\u6307\u6807\u3002\u5176\u4e2d\u6700\u88ab\u91cd\u89c6\u7684\u6709\u4e09\u4e2a\u6307\u6807\uff0c\u79f0\u4e3a ",(0,l.jsx)(n.strong,{children:"Core Web Vitals"}),"\uff0c\u4e5f\u5c31\u662f\u6838\u5fc3\u6307\u6807\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Largest Contentful Paint (LCP)\uff1a\u6d4b\u91cf\u52a0\u8f7d\u6027\u80fd\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"First Input Delay (FID)\uff1a\u6d4b\u91cf\u4ea4\u4e92\u6027\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"Cumulative Layout Shift (CLS)\uff1a\u6d4b\u91cf\u89c6\u89c9\u7a33\u5b9a\u6027\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"**\u6838\u5fc3\u6307\u6807\u66f4\u591a\u7684\u53cd\u6620\u7684\u662f\u7f51\u7ad9\u521d\u59cb\u5316\u52a0\u8f7d\u8fc7\u7a0b\u7684\u7528\u6237\u4f53\u9a8c\uff08\u6027\u80fd\uff09\uff0c**\u8c37\u6b4c\u4f5c\u4e3a\u641c\u7d22\u5de8\u5934\uff0c\u5176\u63d0\u51fa\u7684 Web Vitals \u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u641c\u7d22\u4e1a\u52a1\u670d\u52a1\u3002\u5176\u4f59\u6307\u6807\u4e5f\u4e3b\u8981\u4ee5\u6d4b\u91cf\u52a0\u8f7d\u6027\u80fd\u4e3a\u4e3b\uff0c\u7b97\u662f\u4f5c\u4e3a\u6838\u5fc3\u6307\u6807\u7684\u4e00\u79cd\u8f85\u52a9\u51b3\u7b56\u5de5\u5177\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u8c37\u6b4c\u4e0d\u4ec5\u63d0\u51fa\u4e86\u5206\u6790\u6307\u6807\uff0c\u8fd8\u63d0\u51fa\u4e86\u4f18\u5316\u65b9\u6848\uff0c\u4ee5\u53ca\u63d0\u4f9b\u4e86\u4f17\u591a\u5de5\u5177\uff0c\u8be6\u7ec6\u5185\u5bb9\u67e5\u770b\u4e0b\u65b9\u5b98\u65b9\u6587\u6863\u5373\u53ef\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://web.dev/vitals/",children:"https://web.dev/vitals/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/GoogleChrome/web-vitals",children:"https://github.com/GoogleChrome/web-vitals"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5e03\u5c40\u504f\u79fbls",children:"\u5e03\u5c40\u504f\u79fb\uff08LS\uff09"}),"\n",(0,l.jsxs)(n.p,{children:["\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb\uff08Cumulative Layout Shift\uff0cCLS\uff09\u4f5c\u4e3a\u6838\u5fc3\u6307\u6807\u4e4b\u4e00\uff0c\u5176\u7279\u6b8a\u7684\u662f\u5728\u9875\u9762\u521d\u59cb\u5316\u5b8c\u6210\u540e\u4e5f\u53ef\u4ee5\u7ee7\u7eed",(0,l.jsx)(n.strong,{children:"\u8ffd\u8e2a\u7528\u6237\u4ea4\u4e92\u8fc7\u7a0b\u4e2d\u7684\u5e03\u5c40\u504f\u79fb\uff08Layout Shift\uff0cLS\uff09\u73b0\u8c61"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u4f55\u7406\u89e3\u5e03\u5c40\u504f\u79fb\u73b0\u8c61\uff1f\u6700\u5178\u578b\u7684\u4f8b\u5b50\u5c31\u662f\uff0c\u5f53\u7528\u6237\u6253\u5f00\u4e00\u4e2a\u9875\u9762\u5411\u4e0b\u6eda\u52a8\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e00\u4e2a\u8fd8\u672a\u52a0\u8f7d\u5b8c\u6210\u7684\u56fe\u7247\u8d44\u6e90\uff08\u6b64\u65f6\u56fe\u7247\u6ca1\u6709\u9ad8\u5ea6\uff09\uff0c\u7ee7\u7eed\u5411\u4e0b\u6eda\u52a8\u65f6\u56fe\u7247\u52a0\u8f7d\u5b8c\u6210\u7684\u77ac\u95f4\u9875\u9762\u9ad8\u5ea6\u88ab\u6491\u5f00\uff0c\u7528\u6237\u5c31\u4f1a\u6709\u77ac\u95f4\u7684\u9875\u9762\u4e0b\u5760\u611f\uff0c\u800c\u8fd9\u79cd\u611f\u89c9\u4f1a\u968f\u7740\u56fe\u7247\u9ad8\u5ea6\u7684\u5927\u5c0f\u6210\u6b63\u6bd4\u589e\u957f\u3002\u6709\u65f6\u5019\u6211\u4eec\u4e5f\u79f0\u4e4b\u4e3a\u201c\u9875\u9762\u6296\u52a8\u201d\uff0c\u5176\u5bf9\u7528\u6237\u4f53\u9a8c\u5e26\u6765\u5de8\u5927\u7684\u4f24\u5bb3\uff0c\u5fc5\u987b\u88ab\u91cd\u89c6\u3002"}),"\n",(0,l.jsx)(n.p,{children:"CLS \u76f8\u5173\u7684\u8be6\u7ec6\u5185\u5bb9\u9605\u8bfb\u4e0b\u9762\u7684\u6587\u7ae0\u4e86\u89e3\u5373\u53ef\uff0c\u6587\u672b\u4e5f\u5bf9\u5982\u4f55\u6539\u8fdb CLS \u95ee\u9898\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5efa\u8bae\u3002\u867d\u7136\u76ee\u524d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u4ee5\u7528\u6765\u6d4b\u91cf LS \u7684 API\uff0c\u4f46\u7ec8\u7a76\u8fd8\u662f\u8c03\u8bd5\u8d77\u6765\u4e0d\u65b9\u4fbf\uff0c\u597d\u6d88\u606f\u662f Chrome 88 \u7248\u672c\u5728 DevTools \u4e2d\u52a0\u5165\u4e86\u5bf9 LS \u73b0\u8c61\u7684\u6d4b\u91cf\u529f\u80fd\uff0c\u67e5\u770b\u4e0b\u9762\u7b2c\u4e8c\u7bc7\u6587\u7ae0\u4e86\u89e3\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://web.dev/cls/",children:"https://web.dev/cls/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.chrome.com/blog/new-in-devtools-88/#web-vitals",children:"https://developer.chrome.com/blog/new-in-devtools-88/#web-vitals"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7f13\u5b58",children:"\u7f13\u5b58"}),"\n",(0,l.jsx)(n.p,{children:"\u7f13\u5b58\uff08Cache\uff09\u5bf9 Web \u5e94\u7528\u662f\u81f3\u5173\u91cd\u8981\u7684\uff0c\u56e0\u4e3a Web \u5e94\u7528\u5bf9\u7f51\u7edc\u72b6\u51b5\u7684\u597d\u574f\u5f02\u5e38\u654f\u611f\uff0c\u5229\u7528\u7f13\u5b58\u53ef\u4ee5\u964d\u4f4e\u7f51\u7edc\u6ce2\u52a8\u5e26\u6765\u7684\u7528\u6237\u4f53\u9a8c\u4e0b\u964d\u7684\u5f71\u54cd\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Web \u5e94\u7528\u4e0d\u50cf\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u90a3\u6837\uff0c\u7528\u6237\u5b89\u88c5\u5230\u672c\u5730\u540e\uff0c\u540e\u7eed\u4f7f\u7528\u5927\u90e8\u5206\u8d44\u6e90\u5c06\u76f4\u63a5\u4ece\u672c\u5730\u52a0\u8f7d\uff0c\u4e0d\u53d7\u7f51\u7edc\u72b6\u51b5\u7684\u5f71\u54cd\uff1b\u800c Web \u5e94\u7528\u5728\u7528\u6237\u6bcf\u4e00\u6b21\u4f7f\u7528\u65f6\u6240\u6709\u7684\u8d44\u6e90\u90fd\u5fc5\u987b\u91cd\u65b0\u4ece\u7f51\u7edc\u83b7\u53d6\uff0c\u8fd9\u5c31\u5bfc\u81f4\u8fc7\u4e8e\u4f9d\u8d56\u7f51\u7edc\u72b6\u51b5\uff0c\u4e0d\u8fc7\u5229\u7528\u7f13\u5b58\u6211\u4eec\u53ef\u4ee5\u505a\u5927\u91cf\u7684\u4f18\u5316\u5de5\u4f5c\uff0c\u6839\u636e Web \u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u6765\u5212\u5206\uff0c\u7f13\u5b58\u4e5f\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["HTTP \u7f13\u5b58\uff1a\u8bf7\u6c42\u7f13\u5b58\uff0c\u4e3b\u8981\u4f9d\u8d56\u4e8e\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\uff08",(0,l.jsx)(n.code,{children:"Cache-Control"})," \u548c ",(0,l.jsx)(n.code,{children:"Expires"}),"\uff09"]}),"\n",(0,l.jsx)(n.li,{children:"\u7248\u672c\u7f13\u5b58\uff1a\u5229\u7528 webpack \u7b49\u6253\u5305\u5de5\u5177\u5bf9\u7279\u5b9a\u7248\u672c\u7684\u9759\u6001\u8d44\u6e90\u505a\u957f\u671f\u7f13\u5b58\u7b56\u7565"}),"\n",(0,l.jsxs)(n.li,{children:["\u6570\u636e\u7f13\u5b58\uff1a\u6709\u4e00\u7cfb\u5217 API \u63d0\u4f9b\u4e86\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u4e34\u65f6\u6216\u8005\u6301\u4e45\u5316\u7684\u6570\u636e\u7f13\u5b58\uff08\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"localStorage"}),"\u3001",(0,l.jsx)(n.code,{children:"sessionStorage"}),"\u3001",(0,l.jsx)(n.code,{children:"indexedDB"})," \u7b49\uff09"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4ee5\u4e0a\u5217\u4e3e\u7684\u53ea\u662f\u4e00\u4e9b\u5178\u578b\u7684\u7f13\u5b58\u624b\u6bb5\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\u53ef\u4ee5\u7075\u6d3b\u8fd0\u7528\u591a\u79cd\u7f13\u5b58\u7b56\u7565\u505a\u4f18\u5316\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/get-started/httpcaching-6",children:"https://developers.google.com/web/fundamentals/performance/get-started/httpcaching-6"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://web.dev/http-cache/",children:"https://web.dev/http-cache/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching",children:"https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals/instant-and-offline/web-storage",children:"https://developers.google.com/web/fundamentals/instant-and-offline/web-storage"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6e10\u8fdb\u5f0f-web-\u5e94\u7528",children:"\u6e10\u8fdb\u5f0f Web \u5e94\u7528"}),"\n",(0,l.jsxs)(n.p,{children:["\u6e10\u8fdb\u5f0f Web \u5e94\u7528\uff08Progressive Web Apps\uff0cPWAs\uff09 \u7684\u76ee\u6807\u662f\u4e3a\u8de8\u5e73\u53f0\u7684 Web \u7f51\u7edc\u5e94\u7528\u5e26\u6765\u7c7b\u4f3c\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u662f\u4e00\u79cd\u5e94\u7528\u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002\u5176\u4e3b\u8981\u4f9d\u8d56\u4e8e ",(0,l.jsx)(n.code,{children:"Service Worker"})," API \u5b9e\u73b0\u8d44\u6e90\u7f13\u5b58\uff0c\u5728\u79bb\u7ebf\u7684\u7f51\u7edc\u72b6\u51b5\u4e0b\u4e5f\u80fd\u6b63\u5e38\u4e3a\u7528\u6237\u63d0\u4f9b\u90e8\u5206\u529f\u80fd\uff0c\u4e14\u80fd\u5c06 Web \u5e94\u7528\u4ee5\u7c7b\u4f3c\u539f\u751f\u5e94\u7528\u7684\u65b9\u5f0f\u5b89\u88c5\u5230\u7528\u6237\u684c\u9762\u3002\u4e00\u4e2a\u590d\u6742\u7684 PWA \u7684\u8d44\u6e90\u7f13\u5b58\u5e76\u4e0d\u597d\u5904\u7406\uff0c\u9274\u4e8e\u6b64 Chrome \u56e2\u961f\u5f00\u53d1\u4e86 Workbox \u5de5\u5177\u6765\u7b80\u5316\u8fd9\u90e8\u5206\u5de5\u4f5c\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u5bb9\u6613\u7684\u6784\u5efa\u548c\u7ba1\u7406 PWA\u3002\u5177\u4f53\u8be6\u7ec6\u5185\u5bb9\u67e5\u770b\u4e0b\u65b9\u6587\u6863\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",children:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://web.dev/progressive-web-apps/",children:"https://web.dev/progressive-web-apps/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/tools/workbox",children:"https://developers.google.com/web/tools/workbox"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Workbox \u5de5\u5177\u7684\u7f13\u5b58\u7b56\u7565\u503c\u5f97\u63a2\u7a76\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u5b9e\u73b0\u5176\u5b83\u7f13\u5b58\u65b9\u6848\u7684\u601d\u60f3\u501f\u9274\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"prpl-\u6a21\u578b",children:"PRPL \u6a21\u578b"}),"\n",(0,l.jsx)(n.p,{children:"PRPL \u6a21\u578b\u662f\u4e00\u79cd\u4ea4\u4e92\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u76ee\u6807\u662f\u8ba9\u7f51\u9875\u52a0\u8f7d\u7684\u66f4\u5feb\uff0c\u5176\u5efa\u8bae\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\uff08",(0,l.jsx)(n.strong,{children:"Push"}),"\uff09\u9884\u52a0\u8f7d\u6216\u8005\u63a8\u9001\u6700\u91cd\u8981\u7684\u8d44\u6e90"]}),"\n",(0,l.jsxs)(n.li,{children:["\uff08",(0,l.jsx)(n.strong,{children:"Render"}),"\uff09\u521d\u59cb\u7684\u8def\u7531\u9875\u9762\u6e32\u67d3\u5e94\u8be5\u5c3d\u53ef\u80fd\u5feb"]}),"\n",(0,l.jsxs)(n.li,{children:["\uff08",(0,l.jsx)(n.strong,{children:"Pre-cache"}),"\uff09\u9884\u7f13\u5b58\u540e\u7eed\u5c06\u8981\u52a0\u8f7d\u7684\u8d44\u6e90"]}),"\n",(0,l.jsxs)(n.li,{children:["\uff08",(0,l.jsx)(n.strong,{children:"Lazy load"}),"\uff09\u5ef6\u8fdf\u52a0\u8f7d\u5176\u5b83\u8def\u7531\u9875\u9762\u548c\u975e\u5173\u952e\u6027\u8d44\u6e90"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u8bf4\uff0cPRPL \u6a21\u578b\u662f\u5bf9\u6574\u4e2a Web \u7ad9\u70b9\u751f\u547d\u5468\u671f\u4e2d\u6838\u5fc3\u8def\u5f84\u4e0a\u6240\u505a\u4f18\u5316\u7684\u603b\u7ed3\uff0c\u5bf9\u8bbe\u8ba1\u4f18\u5316\u7684 Web \u7ad9\u70b9\u5177\u6709\u6307\u5bfc\u610f\u4e49\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://web.dev/apply-instant-loading-with-prpl/",children:"https://web.dev/apply-instant-loading-with-prpl/"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6e90",children:"\u53c2\u8003\u8d44\u6e90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance",children:"https://developer.mozilla.org/en-US/docs/Web/Performance"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developers.google.com/web/fundamentals",children:"https://developers.google.com/web/fundamentals"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://web.dev/user-centric-performance-metrics/",children:"https://web.dev/user-centric-performance-metrics/"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var l=r(67294);const s={},i=l.createContext(s);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);