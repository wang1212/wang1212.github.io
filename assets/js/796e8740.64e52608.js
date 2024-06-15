"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6575],{8156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var r=t(85893),s=t(11151);const p={title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",date:new Date("2021-08-15T14:54:00.000Z"),update:new Date("2021-08-15T14:54:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],description:"\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002"},i=void 0,o={permalink:"/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer/index.md",source:"@site/blog/computer-technology/web-frontend/tools-web-fee-test-with-jest-puppeteer/index.md",title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",description:"\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002",date:"2021-08-15T14:54:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{inline:!0,label:"\u6d4b\u8bd5",permalink:"/tags/\u6d4b\u8bd5"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Jest",permalink:"/tags/jest"},{inline:!0,label:"Puppeteer",permalink:"/tags/puppeteer"},{inline:!0,label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:12.605,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u4f7f\u7528 Jest \u548c Puppeteer \u6784\u5efa Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0",date:"2021-08-15T14:54:00.000Z",update:"2021-08-15T14:54:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","Web","Jest","Puppeteer","\u5b9e\u8df5\u6848\u4f8b"],description:"\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002"},unlisted:!1,prevItem:{title:"\u9ed1\u5ba2\u4e0e\u753b\u5bb6",permalink:"/2021/08/22/life/reading/"},nextItem:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6838\u5fc3\u6982\u5ff5\u4e0e\u6307\u6807",permalink:"/2021/07/19/computer-technology/web-frontend/web-performance-core-concepts"}},c={authorsImageUrls:[void 0]},d=[{value:"\u6280\u672f\u9884\u7814",id:"\u6280\u672f\u9884\u7814",level:2},{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",level:3},{value:"\u5e02\u573a\u8c03\u7814",id:"\u5e02\u573a\u8c03\u7814",level:3},{value:"\u6280\u672f\u67b6\u6784",id:"\u6280\u672f\u67b6\u6784",level:3},{value:"\u7cfb\u7edf\u5b9e\u73b0",id:"\u7cfb\u7edf\u5b9e\u73b0",level:2},{value:"\u5176\u5b83\u53c2\u8003\u8d44\u6e90",id:"\u5176\u5b83\u53c2\u8003\u8d44\u6e90",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2021-08-15 14:54:00"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6d4b\u8bd5\u4e3a\u8f6f\u4ef6\u7684\u7a33\u5b9a\u548c\u5b8c\u5584\u63d0\u4f9b\u4e86\u5fc5\u8981\u7684\u652f\u6301\uff0cWeb \u524d\u7aef\u5f00\u53d1\u9886\u57df\u76f8\u6bd4\u4e8e\u505a\u5355\u5143\u6d4b\u8bd5\uff0c\u7aef\u5230\u7aef\u6d4b\u8bd5\u66f4\u6709\u610f\u4e49\u548c\u4ef7\u503c\u3002\u8c37\u6b4c\u53d1\u5e03\u7684 Puppeteer \u5de5\u5177\u548c\u8138\u4e66\u53d1\u5e03\u7684 Jest \u6d4b\u8bd5\u5de5\u5177\u4e3a Web \u7aef\u5230\u7aef\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6784\u5efa\u4e00\u4e2a Web \u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6280\u672f\u9884\u7814",children:"\u6280\u672f\u9884\u7814"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u672c\u5730\u8dd1\u901a\u6d4b\u8bd5\u6d41\u7a0b\u662f\u9996\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u5728\u65e5\u5e38\u9879\u76ee\u7684\u811a\u624b\u67b6\u4e2d\u5df2\u7ecf\u505a\u4e86\u5f88\u591a\u8fd9\u65b9\u9762\u7684\u5de5\u4f5c\uff0c\u800c\u4e14\u4ece\u5934\u5f00\u59cb\u6765\u505a\u4e5f\u6ca1\u6709\u592a\u5927\u96be\u5ea6\uff0c\u57fa\u672c\u4e0a\u6309\u5b98\u65b9\u6587\u6863\u6b65\u9aa4\u6765\u505a\u5373\u53ef\u3002\u76f4\u63a5\u4f7f\u7528 Jest \u548c Puppeteer \u505a\u6d4b\u8bd5\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4e0d\u8fc7\u8981\u7e41\u7410\u5f88\u591a\uff0c\u501f\u52a9 ",(0,r.jsx)(n.code,{children:"jest-puppeteer"})," \u8fd9\u4e2a npm \u5305\u53ef\u4ee5\u7b80\u5316\u5f88\u591a\u6d41\u7a0b\uff0c\u6d4b\u8bd5\u4ee3\u7801\u4e5f\u8981\u7b80\u7565\u7684\u591a\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9700\u6c42\u5206\u6790",children:"\u9700\u6c42\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"Web \u7aef\u5230\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u8981\u6c42\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Web UI \u4e0a\u4f20\u6d4b\u8bd5\u811a\u672c\u4ee3\u7801\u5230\u670d\u52a1\u5668\uff0c\u800c\u670d\u52a1\u5668\u53ef\u4ee5\u5b9a\u65f6\u8fd0\u884c\u4e0a\u4f20\u7684\u6d4b\u8bd5\u811a\u672c\u83b7\u53d6\u7ed3\u679c\u65e5\u5fd7\u5e76\u5b58\u6863\uff0c\u901a\u8fc7\u5bf9\u6574\u4e2a\u6d41\u7a0b\u5206\u6790\u53ef\u4ee5\u786e\u5b9a\u6709\u4ee5\u4e0b\u51e0\u4e2a\u6280\u672f\u96be\u70b9\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Jest \u548c Puppeteer \u7684\u670d\u52a1\u7aef\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u6784\u5efa\uff08\u7248\u672c\u7ba1\u7406\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u6d4b\u8bd5\u811a\u672c\u4e0d\u53ef\u4fe1\uff0c\u9700\u8981\u6c99\u7bb1\u673a\u5236"}),"\n",(0,r.jsxs)(n.li,{children:["\u6570\u636e\u4f20\u8f93\u6d89\u53ca\u5230 ",(0,r.jsx)(n.code,{children:"Buffer"}),"\uff0c\u7528 HTTP \u8fd8\u662f WebSocket"]}),"\n",(0,r.jsx)(n.li,{children:"\u811a\u672c\u5b9a\u65f6\u8fd0\u884c\u7684\u4efb\u52a1\u8c03\u5ea6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u641e\u6e05\u695a\u9700\u6c42\u548c\u76f8\u5e94\u7684\u6280\u672f\u96be\u70b9\u540e\uff0c\u53ef\u4ee5\u5148\u770b\u770b\u4e1a\u5185\u6709\u6ca1\u6709\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u53c2\u8003\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Web \u7aef\u5230\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u529f\u80fd\u9700\u6c42.png",src:t(16518).Z+"",width:"1037",height:"774"}),"\nWeb \u7aef\u5230\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u529f\u80fd\u9700\u6c42"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5e02\u573a\u8c03\u7814",children:"\u5e02\u573a\u8c03\u7814"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e\u8c03\u7814\u7684\u60c5\u51b5\u6765\u770b\uff0c\u5728\u597d\u51e0\u5e74\u524d\u5df2\u7ecf\u6709\u5f88\u591a\u4eba\u5728\u505a\u7c7b\u4f3c\u7684\u65b9\u6848\uff0c\u4f46\u662f\u5f88\u5c11\u6709\u6210\u719f\u7684\u65b9\u6848\uff0c\u4ec5\u9650\u4e8e\u672c\u5730\u6d4b\u8bd5\uff08\u73a9\u5177\u9879\u76ee\uff09\uff0c\u5206\u6790\u4e00\u65b9\u9762\u539f\u56e0\u662f\u5f53\u65f6\u5404\u4e2a\u6280\u672f\u90fd\u4e0d\u592a\u6210\u719f\uff0c\u53e6\u4e00\u65b9\u9762\u5f53\u65f6\u7aef\u5230\u7aef\u6d4b\u8bd5\u613f\u610f\u5f00\u6e90\u7684\u4e5f\u4e0d\u591a\u3002\u4f46\u5728\u8c03\u7814\u8fc7\u7a0b\u4e2d\u6536\u83b7\u8fd8\u662f\u4e0d\u5c11\u7684\uff0c\u6709\u5f88\u591a\u65b9\u9762\u4e5f\u5370\u8bc1\u4e86\u6211\u5bf9\u6280\u672f\u67b6\u6784\u7684\u6784\u60f3\u3002\u4e0b\u9762\u6765\u7b80\u5355\u7684\u4ecb\u7ecd\u4e00\u4e0b\u4e1a\u5185\u53ef\u4f9b\u53c2\u8003\u7684\u65b9\u6848\uff0c\u6709\u4e9b\u662f\u5b8c\u6574\u7684\u65b9\u6848\uff0c\u6709\u4e9b\u5219\u4ec5\u6d89\u53ca\u67d0\u4e9b\u73af\u8282\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u89e3\u51b3\u5982\u4f55\u6784\u5efa Jest \u548c Puppeteer \u7684\u670d\u52a1\u7aef\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\uff08\u6211\u79f0\u4e4b\u4e3a Test Runner Server\uff09\u3002\u670d\u52a1\u5668\u7684\u73af\u5883\u5927\u591a\u90fd\u662f Linux \u7cfb\u7edf\uff0cPuppeteer \u5b98\u65b9\u6587\u6863\u4e5f\u63d0\u4f9b\u4e86\u5982\u4f55\u5728 Linux \u4e2d\u5b89\u88c5\u548c\u4f7f\u7528\uff0c\u4e8b\u5b9e\u662f\u8981\u6bd4\u5728\u672c\u5730\u7684 Windows \u73af\u5883\u4e2d\u9ebb\u70e6\u5f97\u591a\uff0c\u5f53\u7136\u8fd9\u4e2a\u9ebb\u70e6\u4e5f\u6e90\u4e8e\u53e6\u4e00\u4e2a\u4e8b\u5b9e\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/#q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",children:"Puppeteer \u7248\u672c\u548c Chromium \u7684\u7248\u672c\u4e25\u683c\u76f8\u5173"}),"\u3002\u90a3\u4e48\u95ee\u9898\u53c8\u53d8\u5f97\u590d\u6742\u4e86\u8d77\u6765\uff0c\u5982\u4f55\u6784\u5efa\u652f\u6301\u591a\u4e2a Puppeteer \u7248\u672c\u7684\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\uff1f\u9694\u79bb\u591a\u4e2a\u7248\u672c\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u4e4b\u95f4\u7684\u5f71\u54cd\u53ef\u4ee5\u5229\u7528\u865a\u62df\u673a\uff0c\u5728\u5982\u4eca\u4e91\u7684\u65f6\u4ee3\uff0cDocker \u5219\u6210\u4e86\u6700\u4f73\u9009\u62e9\uff0c\u5b98\u65b9\u6587\u6863\u4e5f\u6709\u63d0\u53ca\uff0c\u8c37\u6b4c\u5b98\u65b9\u4e5f\u7528 Docker \u6784\u5efa\u4e86 Puppeteer \u7684\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u4f5c\u4e3a CI/CD \u7684\u6d41\u7a0b\u3002\u5728\u793e\u533a\u4e5f\u627e\u5230\u4e86\u6709\u4eba\u7ef4\u62a4\u7684 Puppeteer \u7684 Docker \u955c\u50cf\uff1a"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/buildkite/docker-puppeteer",children:"https://github.com/buildkite/docker-puppeteer"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u6211\u4eec\u7528\u7684\u662f ",(0,r.jsx)(n.strong,{children:"node:lts-alpine"})," \u57fa\u7840\u955c\u50cf\uff0c\u6240\u4ee5\u6839\u636e ",(0,r.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine",children:"Puppeteer \u5b98\u65b9\u6587\u6863"}),"\u5b89\u88c5\u4e86\u76f8\u5e94\u4f9d\u8d56\uff0c\u4f46\u4f9d\u8d56\u5305\u5728\u56fd\u5916\u6240\u4ee5\u66f4\u6362\u4e86\u955c\u50cf\u6e90\uff0c\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\u521a\u5f00\u59cb\u6362\u7684\u662f HTTP \u6e90\uff0c\u53d1\u73b0\u5b89\u88c5\u603b\u662f\u5931\u8d25\uff0c\u6700\u7ec8\u6362\u4e86 HTTPS \u6e90\u540e\uff0c\u5b89\u88c5\u51e0\u79d2\u5b8c\u6210\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# https://mirrors.ustc.edu.cn/help/alpine.html\nRUN sed -i 's/http:\\/\\/dl-cdn.alpinelinux.org/https:\\/\\/mirrors.ustc.edu.cn/g' /etc/apk/repositories\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5b89\u88c5\u597d\u73af\u5883\u540e\uff0c\u8fd0\u884c\u6d4b\u8bd5\u53c8\u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine",children:"\u5b98\u65b9\u6587\u6863"}),"\u5728\u542f\u52a8\u53c2\u6570\u4e2d\u6dfb\u52a0\u4e86 ",(0,r.jsx)(n.code,{children:"--no-sandbox"})," \u53c2\u6570\u540e\u5728 ",(0,r.jsx)(n.strong,{children:"root"})," \u7528\u6237\u4e0b\u6d4b\u8bd5\u53ef\u4ee5\u8fd0\u884c\u6210\u529f\uff0c\u4f46\u56e0\u4e3a\u5b89\u5168\u539f\u56e0\uff0c\u5f88\u5c11\u4f1a\u5728 docker \u4e2d\u4f7f\u7528 root \u7528\u6237\u8fd0\u884c\u7a0b\u5e8f\uff0c\u6362\u6210\u975e root \u7528\u6237\u8fd0\u884c\u6d4b\u8bd5\u4e5f\u662f\u6210\u529f\u7684\u3002\u4f46\u662f\uff0c\u5b98\u65b9\u6587\u6863\u63d0\u5230\u5728 root \u7528\u6237\u73af\u5883\u4e0b \u5fc5\u987b\u4f7f\u7528",(0,r.jsx)(n.code,{children:"--no-sandbox"})," \u7981\u7528\u6c99\u7bb1\uff0c\u800c\u4e14\u662f\u6709\u5b89\u5168\u98ce\u9669\u7684\uff0c\u60f3\u7740\u5728\u975e root \u7528\u6237\u73af\u5883\u4e0b\u53bb\u6389\u8be5\u542f\u52a8\u53c2\u6570\u5e94\u8be5\u5c31\u884c\u4e86\uff0c\u53d1\u73b0\u6d4b\u8bd5\u4f1a\u8fd0\u884c\u5931\u8d25\uff0c\u6839\u636e\u5b98\u65b9\u6587\u6863\u7684\u89e3\u51b3\u65b9\u6848\u548c\u8c03\u7814\uff0c\u53d1\u73b0\u5f88\u591a\u4eba\u90fd\u9047\u5230\u8be5\u95ee\u9898\uff0c\u800c\u4e14\u6700\u7ec8\u6ca1\u6709\u5f88\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6682\u65f6\u5c31\u628a\u8fd9\u4e2a\u95ee\u9898\u6401\u7f6e\u4e86\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u7b2c\u4e8c\u4e2a\u6280\u672f\u96be\u70b9\u5728\u4e8e\u8fd0\u884c\u7528\u6237\u63d0\u4ea4\u7684\u6d4b\u8bd5\u811a\u672c\u662f\u6709\u98ce\u9669\u7684\uff0c\u6240\u4ee5\u5728\u8fd0\u884c\u6d4b\u8bd5\u811a\u672c\u4ee3\u7801\u65f6\u5fc5\u987b\u6709\u6c99\u7bb1\u673a\u5236\u4fdd\u8bc1\u4e00\u5b9a\u7684\u5b89\u5168\u3002\u521a\u5f00\u59cb\u53d1\u73b0\u793e\u533a\u6709\u4eba\u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"vm2"})," \u8fd9\u4e2a npm \u5305\u6765\u89e3\u51b3\u8fd0\u884c\u4e0d\u53ef\u4fe1\u4efb\u4ee3\u7801\u7684\u5b89\u5168\u95ee\u9898\uff0c\u800c\u4e14\u6070\u597d\u4e5f\u6709\u4eba\u7528\u8be5\u6a21\u5757\u6765\u5c1d\u8bd5\u7ed3\u5408 Docker \u5728\u4e91\u7aef\u8fd0\u884c puppeteer \u6d4b\u8bd5\uff1a"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ebidel/try-puppeteer",children:"https://github.com/ebidel/try-puppeteer"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u6700\u7ec8\u53d1\u73b0\u8fd9\u5e76\u975e\u6700\u4f73\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u4e14\u5728\u7f16\u7801\u4e0a\u7565\u663e\u590d\u6742\uff0c\u670d\u52a1\u7aef\u4ee3\u7801\u4e0e\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u5728\u540c\u4e00\u4e2a\u7cfb\u7edf\u73af\u5883\u4e0b\uff0c\u6709\u5b89\u5168\u98ce\u9669\uff0c\u4e5f\u8026\u5408\u4e25\u91cd\u3002\u6240\u4ee5\uff0c\u4e3a\u4e86\u5b9e\u73b0\u53ef\u4ee5\u5c06\u591a\u4e2a\u7248\u672c\u7684\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u9694\u79bb\uff0c\u540c\u65f6\u964d\u4f4e\u5b89\u5168\u98ce\u9669\uff0c\u91c7\u53d6\u5c06\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u4e0e\u540e\u7aef\u670d\u52a1\u62c6\u5206\uff0c\u91c7\u7528 Node Server + Test Runner Server \u7684\u6280\u672f\u67b6\u6784\u3002\u8fd9\u6837\u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u6d4b\u8bd5\u4efb\u52a1\u8f83\u591a\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u6a2a\u5411\u6269\u5c55 Test Runner Server \u8282\u70b9\uff0c\u4e0d\u540c\u7684\u8282\u70b9\u4e5f\u53ef\u4ee5\u90e8\u7f72\u4e0d\u540c\u7248\u672c\u7684 Puppeteer\uff0c\u65b9\u4fbf\u540e\u671f\u7ef4\u62a4\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u5347\u7ea7\u6d4b\u8bd5\u8fd0\u884c\u73af\u5883\u53c8\u4e0d\u5f71\u54cd\u5df2\u6709\u7684\u6d4b\u8bd5\u4efb\u52a1\u8fd0\u884c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4e5f\u4e86\u89e3\u4e86 Jest \u8fd0\u884c\u6d4b\u8bd5\u7684\u5e95\u5c42\u539f\u7406\uff0c\u5b9e\u9645\u4e0a Jest \u8fd0\u884c\u6d4b\u8bd5\u65f6\u4e3a\u4e86\u9694\u79bb\u4e0a\u4e0b\u6587\u73af\u5883\u4e5f\u5229\u7528\u4e86 Node.js \u7684\u6838\u5fc3\u6a21\u5757 ",(0,r.jsx)(n.code,{children:"vm"}),"\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://cpojer.net/posts/building-a-javascript-testing-framework",children:"https://cpojer.net/posts/building-a-javascript-testing-framework"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u5c31\u662f\u6570\u636e\u4f20\u8f93\u901a\u4fe1\u7684\u534f\u8bae\u9009\u62e9\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u7528 HTTP(S) \u7684\u5e38\u89c4\u65b9\u6848\uff0c\u4f46\u662f\u7ecf\u8fc7\u5206\u6790\uff0c\u6d4b\u8bd5\u4ee3\u7801\u7528\u6237\u53ef\u80fd\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\u63d0\u4ea4\uff0c\u540e\u7aef\u670d\u52a1\u9700\u8981\u5c06\u6d4b\u8bd5\u4ee3\u7801\u4fdd\u5b58\u6210\u6587\u4ef6\uff0c\u540e\u7eed\u53c8\u9700\u8981\u628a\u6d4b\u8bd5\u4ee3\u7801\u6587\u4ef6\u53d1\u9001\u5230 Test Runner Server \u8fd0\u884c\u6d4b\u8bd5\uff0c\u6700\u7ec8\u53c8\u9700\u8981\u628a\u8fd0\u884c\u65e5\u5fd7\u53d1\u9001\u5230\u540e\u7aef\u670d\u52a1\u4fdd\u5b58\u6210\u6587\u4ef6\uff0c\u6d89\u53ca\u5230 ",(0,r.jsx)(n.code,{children:"Buffer"})," \u6570\u636e\u7684\u4f20\u8f93\uff0c\u8fd8\u6709\u53ef\u80fd\u9700\u8981\u4f20\u8f93\u5b9e\u65f6\u7684\u65e5\u5fd7\u5230\u5ba2\u6237\u7aef\uff08Web UI\uff09\uff0c\u770b\u8d77\u6765\u9009\u7528 WebSocket \u662f\u518d\u5408\u9002\u4e0d\u8fc7\u4e86\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540e\u5c31\u662f\u5b9a\u65f6\u8fd0\u884c\u6d4b\u8bd5\u811a\u672c\u7684\u4efb\u52a1\u8c03\u5ea6\u4e86\uff0c\u7ecf\u8fc7\u8c03\u7814\u53d1\u73b0\u6210\u719f\u7684\u65b9\u6848\u4e5f\u6709\u5f88\u591a\uff0c\u5305\u62ec\u6301\u4e45\u5316\uff0c\u6700\u7ec8\u51b3\u5b9a\u91c7\u7528\u7c7b ",(0,r.jsx)(n.code,{children:"Cron"})," \u7684\u65b9\u6848\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8c03\u7814\u8fc7\u7a0b\u4e2d\uff0c\u8fd8\u53d1\u73b0\u4e00\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u5229\u7528 ",(0,r.jsx)(n.code,{children:"puppeteer-cluster"})," \u8fd9\u4e2a npm \u5305\u6765\u642d\u5efa\u6d4b\u8bd5\u96c6\u7fa4\u5b8c\u6210\u6027\u80fd\u4efb\u52a1\uff0c\u5bf9\u4e8e\u6211\u6765\u8bf4\u4e5f\u5f88\u6709\u53c2\u8003\u4ef7\u503c\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://stackchat.com/blog/puppeteer-cluster-performance-testing",children:"https://stackchat.com/blog/puppeteer-cluster-performance-testing"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6280\u672f\u67b6\u6784",children:"\u6280\u672f\u67b6\u6784"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7ecf\u8fc7\u8be6\u7ec6\u7684\u5e02\u573a\u8c03\u7814\u540e\uff0c\u6700\u7ec8\u786e\u5b9a\u4e86\u4e00\u4e2a\u6bd4\u8f83\u7406\u60f3\u548c\u5b8c\u6574\u7684\u7cfb\u7edf\u6280\u672f\u67b6\u6784\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Web \u7aef\u5230\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u7cfb\u7edf\u6280\u672f\u67b6\u6784.png",src:t(88567).Z+"",width:"1126",height:"841"}),"\nWeb \u7aef\u5230\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u5e73\u53f0\u7cfb\u7edf\u6280\u672f\u67b6\u6784"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7cfb\u7edf\u5b9e\u73b0",children:"\u7cfb\u7edf\u5b9e\u73b0"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b8c\u6210\u6280\u672f\u9884\u7814\u540e\uff0c\u5c31\u9700\u8981\u8fdb\u884c\u5b9e\u9645\u7684\u7f16\u7801\u5b9e\u73b0\u4e86\uff0c\u5728\u672c\u5730\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4e3a\u4e86\u65b9\u4fbf\u548c\u4e0d\u6c61\u67d3\u672c\u5730\u73af\u5883\uff0c\u4e5f\u662f\u76f4\u63a5\u5c06 Puppeteer \u5b89\u88c5\u5728 Docker \u5185\u8fd0\u884c\u4e00\u4e2a Runner Server \u6765\u8fdb\u884c\u5f00\u53d1\u3002\u76ee\u524d\uff0c\u4ec5\u4ec5\u662f\u5b8c\u6210\u4e86\u4e00\u4e2a\u6d4b\u8bd5 Demo\uff0c\u5177\u5907\u7528\u6237\u5728 Web UI \u53ef\u4ee5\u7f16\u8f91\u4ee3\u7801\u8fdb\u884c\u63d0\u4ea4\u76f4\u63a5\u8fd0\u884c\u548c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\u65e5\u5fd7\uff0c\u4ee5\u53ca\u63d0\u4ea4\u6d4b\u8bd5\u4ee3\u7801\u521b\u5efa\u4efb\u52a1\uff0cNode Server \u670d\u52a1\u8d1f\u8d23\u4efb\u52a1\u8c03\u5ea6\u5b9a\u65f6\u8fd0\u884c\u6d4b\u8bd5\u811a\u672c\uff0c\u5e76\u7ba1\u7406\u6d4b\u8bd5\u65e5\u5fd7\uff0cWeb UI \u6d4f\u89c8\u4efb\u52a1\u5217\u8868\u548c\u5386\u53f2\u6d4b\u8bd5\u65e5\u5fd7\u7684\u57fa\u672c\u529f\u80fd\u3002Web UI \u4e0e Node Serve \u7684 WebSocket \u901a\u4fe1\u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"socket.io"})," npm \u5305\uff0c\u56e0\u4e3a\u5176\u7ee7\u627f\u4e86 ",(0,r.jsx)(n.code,{children:"Event"})," \u6a21\u5757\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u7ba1\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\uff0c\u6bd4\u8d77\u5728 ",(0,r.jsx)(n.code,{children:"message"})," \u4e8b\u4ef6\u7684\u4f20\u8f93\u6570\u636e\u4e2d\u7ef4\u62a4\u989d\u5916\u901a\u4fe1\u7c7b\u578b\u8981\u65b9\u4fbf\u7684\u591a\uff0c\u800c\u4e14\u4e5f\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u9274\u6743\u529f\u80fd\uff1bNode Server \u4e0e Test Runner Server \u7684 WebSocket \u901a\u4fe1\u4f7f\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"ws"})," npm \u5305\uff0c\u56e0\u4e3a\u5176\u901a\u4fe1\u8f83\u4e3a\u7b80\u5355\uff0c\u800c\u8be5\u6a21\u5757\u4e5f\u8db3\u591f\u7b80\u5355\u8f7b\u91cf\uff1b\u4efb\u52a1\u8c03\u5ea6\u5219\u4f7f\u7528\u7684 ",(0,r.jsx)(n.code,{children:"node-schedule"})," npm \u5305\uff0c\u5176\u63d0\u4f9b\u4e86\u7c7b\u4f3c ",(0,r.jsx)(n.code,{children:"Cron"})," \u7684\u5b9a\u65f6\u4efb\u52a1\u673a\u5236\uff0c\u4f46\u662f\u5176\u65e0\u6cd5\u6301\u4e45\u5316\uff0c\u76ee\u524d\u4e5f\u662f\u4ec5\u4f5c\u4e3a\u6d4b\u8bd5 Demo \u7684\u65b9\u6848\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f Test Runner Server \u7684 ",(0,r.jsx)(n.strong,{children:"Dockerfile"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'# see docs: https://docs.docker.com/engine/reference/builder/\n\nFROM node:lts-alpine\n\n# https://mirrors.ustc.edu.cn/help/alpine.html\nRUN sed -i \'s/http:\\/\\/dl-cdn.alpinelinux.org/https:\\/\\/mirrors.ustc.edu.cn/g\' /etc/apk/repositories\n\n# install dependencies\nRUN apk update \\\n    && apk add --no-cache --virtual .build-deps curl \\\n    && curl -sf https://gobinaries.com/tj/node-prune | sh \\\n    && apk del .build-deps\n\n# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals\n# https://github.com/krallin/tini#using-tini\n# Add Tini\nRUN apk add --no-cache tini\nENTRYPOINT ["/sbin/tini", "--"]\n\n# puppeteer start --------------------------------\n\n# https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine\n# https://github.com/puppeteer/puppeteer#q-which-chromium-version-does-puppeteer-use\nRUN apk add --no-cache \\\n      chromium \\\n      nss \\\n      freetype \\\n      harfbuzz \\\n      ca-certificates \\\n      ttf-freefont\n\n# Tell Puppeteer to skip installing Chrome. We\'ll be using the installed package.\nENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \\\n    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser\n\n# # Puppeteer v6.0.0 works with Chromium 89.\n# RUN yarn add puppeteer@6.0.0\n\n# # Add user so we don\'t need --no-sandbox.\n# RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \\\n#     && mkdir -p /home/pptruser/Downloads /app \\\n#     && chown -R pptruser:pptruser /home/pptruser \\\n#     && chown -R pptruser:pptruser /app\n\n# # Run everything after as non-privileged user.\n# USER pptruser\n\n# puppeteer end --------------------------------\n\nENV NODE_ENV=production\nENV WS_RUNNER_PORT=8081\nEXPOSE 8081\n\nWORKDIR /home/node/app\n\nCOPY package.json package-lock.json ./\nRUN npm ci --production --registry=https://registry.npm.taobao.org/ && npm cache clean --force\n\nRUN node-prune\n\nCOPY . .\n\nRUN chown -R node:node /home/node/app/\n\n# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user\nUSER node\n\n# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd\nCMD [ "node", "index.js" ]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5728 Node \u9879\u76ee\u4e2d\u6211\u4eec\u91c7\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"ECMAScript modules"})," \u7f16\u5199\u6574\u4e2a\u9879\u76ee\u4ee3\u7801\uff0c\u800c ",(0,r.jsx)(n.code,{children:"jest-puppeteer"})," npm \u5305\u4e0d\u652f\u6301 ES Module\uff0c\u6700\u7ec8\u53d1\u73b0\u53ef\u4ee5\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u6765\u89e3\u51b3\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"JEST_PUPPETEER_CONFIG=jest-puppeteer.config.cjs\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u800c\u4e14\uff0c\u76ee\u524d Jest \u9ed8\u8ba4\u4e5f\u662f\u4ee5 CommonJS \u65b9\u5f0f\u8fd0\u884c\u7684\uff0c\u9700\u8981\u989d\u5916\u6307\u5b9a Node \u53c2\u6570\uff08flag\uff09\u624d\u884c\uff0c\u8fd9\u4e2a\u5b98\u65b9\u6587\u6863\u4e5f\u6709\u63d0\u53ca\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node --experimental-vm-modules node_modules/.bin/jest\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u6b21\u4e3a\u4e86\u65e5\u5fd7\u7ba1\u7406\u548c\u5904\u7406\u7684\u65b9\u4fbf\uff0c\u751f\u6210\u7ed3\u6784\u5316\u6570\u636e\u624d\u662f\u6bd4\u8f83\u7406\u60f3\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 Jest \u7684 ",(0,r.jsx)(n.code,{children:"--json"})," \u547d\u4ee4\u884c\u9009\u9879\u5c06\u5176\u8f93\u51fa\u7684\u65e5\u5fd7\u7531\u7eaf\u6587\u672c\u66f4\u6539\u4e3a JSON \u683c\u5f0f\uff1b\u52a0\u4e0a ",(0,r.jsx)(n.code,{children:"--passWithNoTests"})," \u9009\u9879\u53ef\u4ee5\u4fdd\u8bc1\u6ca1\u6709\u6d4b\u8bd5\u53ef\u8fd0\u884c\u65f6\u4e0d\u62a5\u9519\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5176\u5b83\u53c2\u8003\u8d44\u6e90",children:"\u5176\u5b83\u53c2\u8003\u8d44\u6e90"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jestjs.io/",children:"https://jestjs.io/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/web/tools/puppeteer/",children:"https://developers.google.com/web/tools/puppeteer/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"https://github.com/smooth-code/jest-puppeteer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cron",children:"https://en.wikipedia.org/wiki/Cron"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},88567:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/web-test-with-jest-puppeteer-architecture_2021-08-15_18-20-03-719b5aaa0409897f3633c5bab6fc1556.jpg"},16518:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/web-test-with-jest-puppeteer_2021-08-15_16-42-05-223294cfbeb6bbff82123a223edbb9b7.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const s={},p=r.createContext(s);function i(e){const n=r.useContext(p);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(p.Provider,{value:n},e.children)}}}]);