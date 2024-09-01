"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4364],{62355:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(85893),t=s(11151);const r={title:"Web 3D \u5f00\u53d1\u5b9e\u8df5\uff1a\u8ba1\u7b97\u7269\u4f53\u5728 2D \u5e73\u9762\u4e0a\u7684\u50cf\u7d20\u5c3a\u5bf8",date:new Date("2022-12-20T00:09:00.000Z"),update:new Date("2022-12-20T00:09:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js","\u5b9e\u8df5\u6848\u4f8b"],description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u57fa\u4e8e 3D \u5730\u7403\u7ec4\u4ef6\u7684\u5f00\u53d1\u5b9e\u8df5\uff0c\u8bb0\u5f55\u4e86\u5c06 3D \u7a7a\u95f4\u4e2d\u7684\u7269\u4f53\u6295\u5f71\u5230 2D \u5e73\u9762\u4e2d\u65f6\u5982\u4f55\u6362\u7b97\u50cf\u7d20\u5c3a\u5bf8\u7684\u89e3\u51b3\u65b9\u6848\u3002"},c=void 0,a={permalink:"/computer-technology/3d/web-3d-practical-case-2",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/3d/web-3d-practical-case-2/index.md",source:"@site/blog/computer-technology/3d/web-3d-practical-case-2/index.md",title:"Web 3D \u5f00\u53d1\u5b9e\u8df5\uff1a\u8ba1\u7b97\u7269\u4f53\u5728 2D \u5e73\u9762\u4e0a\u7684\u50cf\u7d20\u5c3a\u5bf8",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u57fa\u4e8e 3D \u5730\u7403\u7ec4\u4ef6\u7684\u5f00\u53d1\u5b9e\u8df5\uff0c\u8bb0\u5f55\u4e86\u5c06 3D \u7a7a\u95f4\u4e2d\u7684\u7269\u4f53\u6295\u5f71\u5230 2D \u5e73\u9762\u4e2d\u65f6\u5982\u4f55\u6362\u7b97\u50cf\u7d20\u5c3a\u5bf8\u7684\u89e3\u51b3\u65b9\u6848\u3002",date:"2022-12-20T00:09:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{inline:!0,label:"3D",permalink:"/tags/3-d"},{inline:!0,label:"WebGL",permalink:"/tags/web-gl"},{inline:!0,label:"Three.js",permalink:"/tags/three-js"},{inline:!0,label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:12.36,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"Web 3D \u5f00\u53d1\u5b9e\u8df5\uff1a\u8ba1\u7b97\u7269\u4f53\u5728 2D \u5e73\u9762\u4e0a\u7684\u50cf\u7d20\u5c3a\u5bf8",date:"2022-12-20T00:09:00.000Z",update:"2022-12-20T00:09:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","3D","WebGL","Three.js","\u5b9e\u8df5\u6848\u4f8b"],description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u57fa\u4e8e 3D \u5730\u7403\u7ec4\u4ef6\u7684\u5f00\u53d1\u5b9e\u8df5\uff0c\u8bb0\u5f55\u4e86\u5c06 3D \u7a7a\u95f4\u4e2d\u7684\u7269\u4f53\u6295\u5f71\u5230 2D \u5e73\u9762\u4e2d\u65f6\u5982\u4f55\u6362\u7b97\u50cf\u7d20\u5c3a\u5bf8\u7684\u89e3\u51b3\u65b9\u6848\u3002"},unlisted:!1,prevItem:{title:"\u89e3\u6790 ECharts \u8bbe\u8ba1\uff1a\u4ea4\u4e92\u72b6\u6001\u7cfb\u7edf",permalink:"/2023/01/09/computer-technology/web-frontend/echarts-zrender/interactive-state-design"},nextItem:{title:"\u63a2\u7d22 Docusaurus \u7684\u8def\u7531\u5b9e\u73b0",permalink:"/computer-technology/tools/tools-docusaurus"}},l={authorsImageUrls:[void 0]},d=[{value:"\u900f\u89c6\u76f8\u673a\u4e0e\u6b63\u4ea4\u76f8\u673a",id:"\u900f\u89c6\u76f8\u673a\u4e0e\u6b63\u4ea4\u76f8\u673a",level:2},{value:"\u9700\u6c42\u4e0e\u95ee\u9898",id:"\u9700\u6c42\u4e0e\u95ee\u9898",level:2},{value:"3D \u7a7a\u95f4\u5c3a\u5bf8\u4e0e\u50cf\u7d20\u5c3a\u5bf8\u7684\u5bf9\u5e94\u5173\u7cfb",id:"3d-\u7a7a\u95f4\u5c3a\u5bf8\u4e0e\u50cf\u7d20\u5c3a\u5bf8\u7684\u5bf9\u5e94\u5173\u7cfb",level:2},{value:"\u8ba1\u7b97\u7403\u4f53\u5728\u5c4f\u5e55\u4e0a\u6295\u5f71\u7684\u5305\u56f4\u76d2\u4f4d\u7f6e",id:"\u8ba1\u7b97\u7403\u4f53\u5728\u5c4f\u5e55\u4e0a\u6295\u5f71\u7684\u5305\u56f4\u76d2\u4f4d\u7f6e",level:3},{value:"\u7403\u4f53\u7684\u7279\u70b9",id:"\u7403\u4f53\u7684\u7279\u70b9",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2022-12-20 00:09:00"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u6b21\u662f\u57fa\u4e8e\u4e2d\u79cb\u8282\u6d3b\u52a8\u65f6\u5f00\u53d1 3D \u6708\u7403\u7ec4\u4ef6\u7684\u7ecf\u9a8c\u6765\u5f00\u53d1 3D \u5730\u7403\u7ec4\u4ef6\uff0c\u76f8\u6bd4\u4e8e\u4e0a\u4e00\u6b21\uff0c\u8fd9\u4e00\u6b21\u5f88\u591a\u6280\u672f\u96be\u70b9\u90fd\u6709\u4e86\u73b0\u6210\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u8bf4\u5f00\u53d1\u6210\u672c\u964d\u4f4e\u4e86\u4e09\u5206\u4e4b\u4e8c\u4e4b\u591a\uff0c\u800c\u8fd9\u4e9b\u989d\u5916\u7684\u5f00\u53d1\u6210\u672c\u5219\u82b1\u8d39\u5728\u9690\u85cf\u5728\u9700\u6c42\u7ec6\u8282\u4e2d\u7684\u6280\u672f\u96be\u70b9\u3002\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u7528\u6765\u8bb0\u5f55\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u6bd4\u8f83\u6709\u610f\u4e49\u7684\u6280\u672f\u96be\u70b9\uff0c\u5373 3D \u7a7a\u95f4\u4e2d\u7684\u7269\u4f53\u6295\u5f71\u5230 2D \u5e73\u9762\u4e2d\u65f6\u5982\u4f55\u6362\u7b97\u50cf\u7d20\u5c3a\u5bf8\uff0c\u5728\u63a2\u7d22\u89e3\u51b3\u8be5\u96be\u70b9\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5bf9 3D \u4e0e 2D \u7a7a\u95f4\u4e4b\u95f4\u7684\u5173\u7cfb\u6709\u4e86\u4e00\u4e2a\u66f4\u6df1\u523b\u7684\u8ba4\u8bc6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u900f\u89c6\u76f8\u673a\u4e0e\u6b63\u4ea4\u76f8\u673a",children:"\u900f\u89c6\u76f8\u673a\u4e0e\u6b63\u4ea4\u76f8\u673a"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6709\u5fc5\u8981\u4ecb\u7ecd\u4e00\u4e0b\u76f8\u673a\u76f8\u5173\u7684\u77e5\u8bc6\uff0c\u56e0\u4e3a\u6b63\u5728\u8ba8\u8bba\u7684\u95ee\u9898\u662f\u5728\u4f7f\u7528\u900f\u89c6\u76f8\u673a\uff08",(0,i.jsx)(n.a,{href:"https://threejs.org/docs/#api/en/cameras/PerspectiveCamera",children:(0,i.jsx)(n.code,{children:"PerspectiveCamera"})}),"\uff09\u65f6\u9047\u5230\u7684\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e 3D \u5f00\u53d1\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u90fd\u4f1a\u4f7f\u7528\u900f\u89c6\u76f8\u673a\uff0c\u8fd9\u662f\u56e0\u4e3a\u900f\u89c6\u76f8\u673a\uff08\u6295\u5f71\uff09\u7b26\u5408\u6211\u4eec\u4eba\u773c\u89c2\u5bdf\u4e16\u754c\u7684\u65b9\u5f0f\uff0c\u4f1a\u4ea7\u751f\u4e00\u79cd\u7269\u4f53\u201c\u8fd1\u5927\u8fdc\u5c0f\u201d\u7684\u89c6\u89c9\u6548\u679c\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u6b63\u4ea4\u76f8\u673a\uff08",(0,i.jsx)(n.a,{href:"https://threejs.org/docs/#api/en/cameras/OrthographicCamera",children:(0,i.jsx)(n.code,{children:"OrthographicCamera"})}),"\uff09\u4e5f\u5f88\u5e38\u7528\uff0c\u7ed8\u5236 2D \u89c6\u56fe\u5c31\u4f1a\u7528\u5230\uff0c\u50cf\u6211\u4eec\u751f\u6d3b\u4e2d\u5e38\u89c1\u7684\u5de5\u7a0b\u5236\u56fe\u4e00\u822c\u5e94\u7528\u7684\u5c31\u662f\u6b63\u4ea4\u6295\u5f71\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"perspective-and-orthographic-projection",src:s(84857).Z+"",width:"602",height:"290"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f 3D \u5efa\u6a21\u8fc7\u7a0b\u4e2d\u900f\u89c6\u6295\u5f71\u548c\u6b63\u4ea4\u6295\u5f71\u7684\u5e94\u7528\uff0c\u5176\u4e2d 3 \u5f20\u56fe\u7247\u662f\u5e94\u7528\u6b63\u4ea4\u6295\u5f71\u5206\u522b\u4ea7\u751f\u7684\u8f66\u8eab 3 \u4e2a\u4e0d\u540c\u89c6\u89d2\u7684\u89c6\u56fe\uff0c\u800c\u53f3\u4e0a\u89d2\u5219\u662f\u5e94\u7528\u900f\u89c6\u6295\u5f71\u540e\u548c\u6211\u4eec\u4eba\u773c\u6240\u89c2\u5bdf\u5230\u7684\u89c6\u89c9\u6548\u679c\u76f8\u4e00\u81f4\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"quad-viewport",src:s(62140).Z+"",width:"1148",height:"918"})}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u8fd9\u91cc\u8981\u8ba8\u8bba\u7684\u95ee\u9898\u5373\u5c31\u662f\u5728\u900f\u89c6\u76f8\u673a\uff08\u6295\u5f71\uff09\u6240\u89c2\u5bdf\u5230\u7684 3D \u7a7a\u95f4\u4e2d\u67d0\u4e2a\u7269\u4f53\u5728 2D \u5e73\u9762\u4e0a\u7684\u50cf\u7d20\u5c3a\u5bf8\u548c\u5750\u6807\uff0c\u662f\u4e0d\u662f\u53c8\u6709\u70b9\u50cf\u6b63\u4ea4\u6295\u5f71\u5462\uff1f"}),"\n",(0,i.jsx)(n.h2,{id:"\u9700\u6c42\u4e0e\u95ee\u9898",children:"\u9700\u6c42\u4e0e\u95ee\u9898"}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\u6765\u8bf4\u8bf4\u5177\u4f53\u7684\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5730\u7403\u8868\u9762\u6709\u5927\u91cf\u7684\u70b9\u6807\u8bb0\uff0c\u70b9\u6807\u8bb0\u53c8\u4f1a\u901a\u8fc7\u4e00\u6839\u7ad6\u7ebf\u548c\u77e9\u5f62\u6587\u672c\u6846\u7684\u6807\u7b7e\u8fde\u63a5\u8d77\u6765\uff0c\u4e5f\u5c31\u662f\u8bf4\u6807\u7b7e\u7684\u4f4d\u7f6e\u53d6\u51b3\u4e8e\u70b9\u6807\u8bb0\u5728\u5730\u7403\u8868\u9762\u7684\u7ecf\u7eac\u5ea6\u5750\u6807\u3002\u5728\u8f6c\u52a8\u5730\u7403\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u70b9\u6807\u8bb0\u6240\u5728\u7684\u4f4d\u7f6e\u5df2\u7ecf\u88ab\u8f6c\u5230\u5f53\u524d\u89c6\u89d2\u7684\u80cc\u9762\uff0c\u70b9\u6807\u8bb0\u3001\u7ad6\u7ebf\u3001\u6807\u7b7e\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u90fd\u4f1a\u9690\u85cf\u6389\uff0c\u8fd9\u7b26\u5408\u6211\u4eec\u5bf9\u4e09\u7ef4\u7a7a\u95f4\u7269\u4f53\u7684\u611f\u77e5\u3002\u4f46\u4e8b\u60c5\u5e76\u975e\u60f3\u8c61\u7684\u8fd9\u4e48\u7b80\u5355\uff0c\u7531\u4e8e\u5728\u79fb\u52a8\u7aef\u5e94\u7528\uff0c\u5982\u679c\u67d0\u4e2a\u6807\u7b7e\u7684\u6587\u672c\u957f\u5ea6\u591f\u957f\u4f1a\u51fa\u73b0\u6807\u7b7e\u5df2\u51fa\u73b0\u5728\u5c4f\u5e55\u4e4b\u5916\u800c\u70b9\u6807\u8bb0\u7684\u4f4d\u7f6e\u8fd8\u5728\u5f53\u524d\u89c6\u89d2\u7684\u53ef\u89c6\u8303\u56f4\u5185\uff0c\u90a3\u4e48\u6807\u7b7e\u5c31\u4e0d\u4f1a\u9690\u85cf\uff0c\u800c\u4ea7\u54c1\u548c\u4ea4\u4e92\u66f4\u503e\u5411\u4e8e\u5c06\u6807\u7b7e\u4f5c\u4e3a\u53c2\u7167\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u70b9\u6807\u8bb0\uff0c",(0,i.jsx)(n.strong,{children:"\u5f53\u6807\u7b7e\u7684\u8fb9\u7f18\u8d85\u51fa\u56fe\u4e2d\u7ea2\u8272\u7684\u77e9\u5f62\u6846\u65f6\uff0c\u6807\u8bb0\u70b9\u3001\u7ad6\u7ebf\u3001\u6807\u7b7e\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u540c\u65f6\u9690\u85cf\u4e0d\u53ef\u89c1"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"screenshot",src:s(72667).Z+"",width:"551",height:"674"})}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u70b9\u6807\u8bb0\u3001\u7ad6\u7ebf\u3001\u6807\u7b7e\u5747\u662f\u7528 DOM \u7ed8\u5236\u7684\uff0c\u5229\u7528 3D \u573a\u666f\u4e2d\u7684\u70b9\u5750\u6807\u548c 2D \u5e73\u9762\u7684\u50cf\u7d20\u5750\u6807\u6295\u5f71\u8f6c\u6362\u5373\u53ef\u5f97\u5230\u70b9\u6807\u8bb0\u7684\u5c4f\u5e55\u5750\u6807\u3002\u8fd9\u4e2a\u5e94\u7528\u573a\u666f\u4e4b\u4e00\u662f\u5728\u5904\u7406\u9f20\u6807\u4ea4\u4e92\u65f6\uff0c\u53ef\u4ee5\u5c06\u9f20\u6807\u70b9\u51fb\u7684\u5c4f\u5e55\u50cf\u7d20\u5750\u6807\u8f6c\u6362\u4e3a 3D \u7a7a\u95f4\u4e2d\u7684\u5750\u6807\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\uff0c\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u601d\u8def\u5b9e\u9645\u4e0a\u4e5f\u6bd4\u8f83\u7b80\u5355\uff0c\u6807\u8bb0\u70b9\u3001\u6807\u7b7e\u7684\u5c4f\u5e55\u50cf\u7d20\u5750\u6807\u77e5\u9053\uff0c\u5173\u952e\u5728\u4e8e\u56fe\u4e2d\u7ea2\u8272\u77e9\u5f62\u6846\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\uff0c\u5176\u57fa\u51c6\u662f 3D \u7a7a\u95f4\u4e2d\u5730\u7403\u5728 2D \u5e73\u9762\u4e0a\u6295\u5f71\u7684\u77e9\u5f62\u5305\u56f4\u76d2\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\uff0c\u800c\u6839\u636e\u5730\u7403\u7684\u7403\u5fc3\u5750\u6807\u53ef\u4ee5\u5f88\u5bb9\u6613\u6362\u7b97\u51fa\u5c4f\u5e55\u7684\u50cf\u7d20\u5750\u6807\uff0c\u4f46\u96be\u70b9\u5728\u4e8e\u77e5\u9053 3D \u7a7a\u95f4\u4e2d\u5730\u7403\u7684\u534a\u5f84\u5374\u4e0d\u77e5\u5982\u4f55\u6362\u7b97\u4e3a 2D \u5e73\u9762\u4e2d\u7684\u50cf\u7d20\u5c3a\u5bf8\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"3d-\u7a7a\u95f4\u5c3a\u5bf8\u4e0e\u50cf\u7d20\u5c3a\u5bf8\u7684\u5bf9\u5e94\u5173\u7cfb",children:"3D \u7a7a\u95f4\u5c3a\u5bf8\u4e0e\u50cf\u7d20\u5c3a\u5bf8\u7684\u5bf9\u5e94\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u95ee\u9898\u4e4b\u6240\u4ee5\u68d8\u624b\uff0c\u5c31\u662f\u56e0\u4e3a\u5728\u900f\u89c6\u76f8\u673a\uff08\u6295\u5f71\uff09\u6240\u89c2\u5bdf\u5230\u7684 3D \u7a7a\u95f4\u4e2d\u6bcf\u4e2a\u7269\u4f53\u90fd\u4f1a\u5448\u73b0\u51fa\u201c\u8fd1\u5927\u8fdc\u5c0f\u201d\u7684\u89c6\u89c9\u6548\u679c\uff0c\u6240\u4ee5\u867d\u7136\u5728\u540c\u4e00\u4e2a 2D \u5e73\u9762\uff08\u5c4f\u5e55\uff09\u4e0a\u7ed8\u5236\u7269\u4f53\uff0c\u4f46\u5728 3D \u7a7a\u95f4\u4e2d\u8ddd\u79bb\u76f8\u673a\u8fdc\u8fd1\u4e0d\u540c\uff0c\u540c\u6837\u7684 3D \u7a7a\u95f4\u5c3a\u5bf8\u6295\u5f71\u5230 2D \u5e73\u9762\uff08\u5c4f\u5e55\uff09\u4e0a\u65f6\u50cf\u7d20\u5c3a\u5bf8\u5927\u5c0f\u662f\u4e0d\u4e00\u6837\u7684\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5c06\u95ee\u9898\u5177\u4f53\u5316\u4e3a\uff1a",(0,i.jsx)(n.strong,{children:"\u5728\u7279\u5b9a\u7684\u76f8\u673a\u8ddd\u79bb\u4e0b\uff0c3D \u7a7a\u95f4\u4e2d\u7684\u5c3a\u5bf8\u4e0e 2D \u6295\u5f71\u5e73\u9762\u7684\u50cf\u7d20\u5c3a\u5bf8\u6362\u7b97\u5173\u7cfb"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5230\u4e86\u8fd9\u91cc\uff0c\u5bf9\u4e8e 3D \u5f00\u53d1\u7ecf\u9a8c\u5e76\u4e0d\u4e30\u5bcc\u7684\u6211\u6765\u8bf4\uff0c\u6280\u672f\u5c42\u9762\u5b9e\u9645\u4e0a\u6ca1\u6709\u592a\u591a\u601d\u8def\uff0c\u4e8e\u662f\u53ea\u80fd\u641c\u7d22\u662f\u5426\u6709\u89e3\u51b3\u65b9\u6848\u3002\u4e8b\u5b9e\u4e0a\uff0c\u67e5\u627e\u8d44\u6599\u7684\u8fc7\u7a0b\u5e76\u4e0d\u987a\u5229\uff0c\u9996\u5148\u662f\u641c\u7d22\u5173\u952e\u5b57\u7684\u95ee\u9898\uff0c\u65e0\u6cd5\u786e\u5b9a\u6709\u6548\u7684\u5173\u952e\u5b57\uff0c\u5bfc\u81f4\u4e00\u76f4\u5f97\u4e0d\u5230\u671f\u671b\u7684\u7ed3\u679c\uff1b\u5176\u6b21\uff0c\u4e5f\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u7684\u4e00\u70b9\uff0c\u6709\u5f88\u591a\u4e0d\u76f4\u63a5\u76f8\u5173\u7684\u95ee\u9898\u5e76\u6709\u76f8\u5e94\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f46\u5982\u679c\u4e0d\u82b1\u8d39\u65f6\u95f4\u7406\u89e3\u5219\u5f88\u5bb9\u6613\u9519\u8fc7\u4e00\u4e9b\u5f88\u6709\u7528\u7684\u201c\u7ec6\u8282\u201d\u3002\u6700\u7ec8\uff0c\u4ece",(0,i.jsx)(n.a,{href:"https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269",children:"\u5982\u4f55\u8ba1\u7b97\u7ed9\u5b9a Z \u6df1\u5ea6\u5904\u7684\u53ef\u89c1\u5bbd\u5ea6/\u9ad8\u5ea6"}),"\u8fd9\u4e2a\u8ba8\u8bba\u4e2d\u627e\u5230\u4e86\u89e3\u51b3\u95ee\u9898\u7684\u7ebf\u7d22\uff0c\u8fd9\u4e2a\u8ba8\u8bba\u4e2d\u8bd5\u56fe\u5b9e\u73b0\u65e0\u8bba\u76f8\u673a\u5982\u4f55\u7f29\u653e\uff0c\u90fd\u53ef\u4ee5\u8ba9 3D \u7a7a\u95f4\u4e2d\u7684\u67d0\u4e2a\u7269\u4f53\u5360\u6ee1\u5168\u5c4f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u53d1\u73b0\uff0c3D \u5f00\u53d1\u4e2d\u901a\u5e38\u90fd\u662f\u5229\u7528\u4e00\u4e9b\u6570\u5b66\u77e5\u8bc6\u6765\u89e3\u51b3\u95ee\u9898\u7684\u3002\u5bf9\u4e8e\u6587\u521d\u7684\u793a\u610f\u56fe\u4e2d\u900f\u89c6\u76f8\u673a\uff08\u6295\u5f71\uff09\u7684\u6a21\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u753b\u51fa\u4e00\u4e2a\u4fa7\u89c6\u56fe\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"example",src:s(30104).Z+"",width:"893",height:"477"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5047\u8bbe ",(0,i.jsx)(n.code,{children:"z0"})," \u6df1\u5ea6\u5904\u53ef\u89c1\u9ad8\u5ea6\uff08\u84dd\u8272\u7ad6\u7ebf\uff09\u4e3a ",(0,i.jsx)(n.code,{children:"h"})," \u4ee5\u53ca\u8ddd\u79bb\u76f8\u673a ",(0,i.jsx)(n.code,{children:"d"}),"\uff0c\u77e5\u9053\u76f8\u673a\u7684 ",(0,i.jsx)(n.code,{children:"fov"})," \u89d2\u5ea6\uff0c\u6839\u636e\u4e09\u89d2\u51fd\u6570\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"tan(fov / 2) = (h / 2) / d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u4e48\u53ef\u89c1\u9ad8\u5ea6 ",(0,i.jsx)(n.code,{children:"h"})," \u5c31\u53ef\u4ee5\u5f97\u5230\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"h = 2 * tan(fov / 2) * d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6839\u636e\u76f8\u673a\u7684\u89c6\u91ce\u6bd4\u4f8b ",(0,i.jsx)(n.code,{children:"camera.aspect"})," \u5f88\u5bb9\u6613\u5c31\u80fd\u5f97\u5230\u53ef\u89c1\u5bbd\u5ea6\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"w = h * camera.aspect\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6839\u636e ",(0,i.jsx)(n.code,{children:"z0"})," \u4e0e\u76f8\u673a\u4f4d\u7f6e\u5f97\u5230\u7684 ",(0,i.jsx)(n.code,{children:"d"}),"\uff0c\u4ee5\u53ca\u8ba1\u7b97\u51fa\u7684 ",(0,i.jsx)(n.code,{children:"h"})," \u548c ",(0,i.jsx)(n.code,{children:"w"})," \u90fd\u662f 3D \u7a7a\u95f4\u4e2d\u7684\u5c3a\u5bf8\uff08\u5750\u6807\u5c3a\u5ea6\uff09\u3002\u5047\u8bbe 3D \u573a\u666f\u4e2d\u6709\u4e00\u4e2a\u9762\u5411\u76f8\u673a\u7684\u77e9\u5f62\u5e73\u9762\uff0c\u5728\u76f8\u673a\u4e0d\u65ad\u7f29\u653e\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8ba1\u7b97\u51fa ",(0,i.jsx)(n.code,{children:"h"})," \u548c ",(0,i.jsx)(n.code,{children:"w"})," \u5e76\u8bbe\u7f6e\u4e3a\u8be5\u77e9\u5f62\u5e73\u9762\u7684\u9ad8\u4e0e\u5bbd\uff0c\u5c31\u80fd\u8fbe\u5230\u4efb\u610f\u7f29\u653e\u6bd4\u4f8b\u4e0b\uff0c\u8be5\u77e9\u5f62\u5e73\u9762\u90fd\u80fd\u5360\u6ee1\u6574\u4e2a\u573a\u666f\u7684\u53ef\u89c6\u8303\u56f4\uff08\u5373\u753b\u5e03\u6574\u4e2a\u533a\u57df\uff09\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u65e2\u7136\u5982\u6b64\uff0c\u90a3\u6211\u4eec\u5f88\u5bb9\u6613\u5c31\u80fd\u5f97\u5230\u50cf\u7d20\u5c3a\u5bf8\u548c 3D \u5c3a\u5bf8\u7684\u6362\u7b97\u5173\u7cfb\uff08\u5047\u8bbe\u7269\u4f53\u5728 3D \u7a7a\u95f4\u4e2d\u7684\u9ad8\u5ea6\u4e3a ",(0,i.jsx)(n.code,{children:"H"}),"\uff0c\u5c4f\u5e55\u6295\u5f71\u7684\u50cf\u7d20\u9ad8\u5ea6\u4e3a ",(0,i.jsx)(n.code,{children:"pixelH"}),"\uff09\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"pixelH / canvas.clientHeight = H / h\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u8ba1\u7b97\u7403\u4f53\u5728\u5c4f\u5e55\u4e0a\u6295\u5f71\u7684\u5305\u56f4\u76d2\u4f4d\u7f6e",children:"\u8ba1\u7b97\u7403\u4f53\u5728\u5c4f\u5e55\u4e0a\u6295\u5f71\u7684\u5305\u56f4\u76d2\u4f4d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u81f3\u6b64\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5229\u7528\u4ee5\u4e0a\u7684\u7ed3\u8bba\u5f88\u65b9\u4fbf\u7684\u8ba1\u7b97\u51fa\uff1a\u6307\u5b9a\u4f4d\u7f6e\uff08",(0,i.jsx)(n.code,{children:"z"})," \u6df1\u5ea6\u5904\uff09\u548c\u6307\u5b9a\u7403\u4f53\u534a\u5f84 ",(0,i.jsx)(n.code,{children:"radius"})," \u7684\u5730\u7403\u5728\u5c4f\u5e55\u4e0a\u6295\u5f71\u7684\u77e9\u5f62\u5305\u56f4\u76d2\u50cf\u7d20\u5bbd\u9ad8\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"rectPixelH = (radius / (2 * tan(fov / 2) * d)) * canvas.clientHeight\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u53ef\u4ee5\u5229\u7528\u7a0b\u5e8f\u5b9e\u73b0\u5728 canvas \u4e0a\u53e0\u52a0\u4e00\u4e2a div \u5728\u76f8\u673a\u7f29\u653e\u8fc7\u7a0b\u4e2d\u540c\u6b65 div \u7684\u5bbd\u9ad8\u4e0e\u5730\u7403\u7403\u4f53\u6295\u5f71\u77e9\u5f62\u5305\u56f4\u76d2\u7684\u5bbd\u9ad8\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"screenshot1",src:s(16005).Z+"",width:"550",height:"551"})}),"\n",(0,i.jsx)(n.p,{children:"\u77e5\u9053\u7403\u4f53\u7684\u77e9\u5f62\u5305\u56f4\u76d2\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u540e\uff0c\u53ea\u9700\u8981\u7ed9\u56db\u5468\u52a0\u4e0a\u4e00\u5b9a\u7684\u504f\u79fb\u5373\u53ef\u52a8\u6001\u786e\u5b9a\u6807\u7b7e\u663e\u9690\u68c0\u6d4b\u7684\u77e9\u5f62\u8303\u56f4\uff0c\u5c31\u987a\u5229\u7684\u89e3\u51b3\u4e86\u9700\u6c42\u96be\u9898\u3002\u4e0d\u8fc7\uff0c\u5bf9\u4e8e\u7403\u4f53\u6765\u8bf4\uff0c\u6709\u5176\u7279\u6b8a\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\uff0c\u8ba9\u5305\u56f4\u76d2\u7684\u8303\u56f4\u66f4\u7cbe\u786e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7403\u4f53\u7684\u7279\u70b9",children:"\u7403\u4f53\u7684\u7279\u70b9"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u770b 3D \u7a7a\u95f4\u4e2d\u5730\u7403\u7684\u4fef\u89c6\u56fe\u6295\u5f71\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"example1",src:s(24092).Z+"",width:"724",height:"714"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4ece\u76f8\u673a\u4f4d\u7f6e\u4e3a\u8d77\u70b9\u7684\u4e24\u6761\u84dd\u8272\u76f4\u7ebf\u662f\u7403\u4f53\u4fef\u89c6\u6295\u5f71\u5706\u7684\u5207\u7ebf\uff08\u5207\u7ebf\u4e0e\u5207\u70b9\u5230\u5706\u5fc3\u8fde\u7ebf\u5f62\u6210\u7684\u5939\u89d2\u4e3a 90\xb0 \u76f4\u89d2\uff09\uff0c\u6839\u636e\u6570\u5b66\u77e5\u8bc6\u6211\u4eec\u77e5\u9053\uff0c\u56db\u8fb9\u5f62\uff08\u84dd\u8272\u5b9e\u7ebf\uff09\u5185\u89d2\u548c\u4e3a 360\xb0\uff0c\u4e24\u6761\u5207\u7ebf\u7684\u5939\u89d2\u6c38\u8fdc\u5927\u4e8e 0\xb0\uff0c\u5bf9\u89d2\u5c06\u6c38\u8fdc\u5c0f\u4e8e 180\xb0\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u4e24\u4e2a\u5207\u70b9\u8fde\u7ebf\uff08\u9ec4\u8272\u5b9e\u7ebf\uff09\u7684\u957f\u5ea6\u4f1a\u65e0\u9650\u63a5\u8fd1\u76f4\u5f84\uff08\u7ea2\u8272\u5b9e\u7ebf\uff09\u957f\u5ea6\u4f46\u6c38\u8fdc\u5c0f\u4e8e\u76f4\u5f84\u957f\u5ea6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u9762\u6211\u4eec\u90fd\u662f\u5047\u8bbe\u76f8\u673a\u6240\u80fd\u770b\u5230\u7684\u6700\u5927\u8303\u56f4\u662f\u76f4\u5f84\uff08\u56fe\u4e2d\u7ea2\u8272\u5b9e\u7ebf\uff09\u957f\u5ea6\uff0c\u4f46\u7ecf\u8fc7\u4ee5\u4e0a\u5206\u6790\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\uff0c\u5bf9\u4e8e\u7403\u4f53\u6765\u8bf4\uff0c\u89c6\u91ce\u7684\u6700\u5927\u8303\u56f4\u662f\u4e24\u4e2a\u5207\u70b9\u8fde\u7ebf\uff08\u56fe\u4e2d\u9ec4\u8272\u5b9e\u7ebf\uff09\u7684\u957f\u5ea6\u3002\u6240\u4ee5\uff0c\u5bf9\u4e8e\u7403\u5fc3\u5728 ",(0,i.jsx)(n.code,{children:"z0"})," \u6df1\u5ea6\u5904\u7684\u7403\u4f53\uff0c\u76f8\u673a\u6240\u80fd\u89c2\u5bdf\u5230\u7684\u7403\u4f53\u6295\u5f71\u8303\u56f4\u7684\u77e9\u5f62\u5305\u56f4\u76d2\u7684\u5bbd\u9ad8\u5c0f\u4e8e\u534a\u5f84\u7684\u4e24\u500d\uff08\u5373\u76f8\u5f53\u4e8e\u5706\u5fc3\u5728 ",(0,i.jsx)(n.code,{children:"z1"})," \u6df1\u5ea6\u5904\u7684\u5c0f\u5706\uff09\u3002\u6839\u636e\u793a\u610f\u56fe\u6240\u793a\uff0c\u8fd0\u7528\u6570\u5b66\u77e5\u8bc6\u5c31\u80fd\u5f88\u5feb\u8ba1\u7b97\u51fa\u9ec4\u8272\u5b9e\u7ebf\u5bf9\u5e94\u7684 3D \u7a7a\u95f4\u4e2d\u7684\u957f\u5ea6\u53ca\u5176\u548c\u76f4\u5f84\u957f\u5ea6\u7684\u6bd4\u4f8b\u5173\u7cfb\uff0c\u518d\u5c06\u5176\u6309\u7167\u524d\u6587\u6240\u8ff0\u7684\u6362\u7b97\u539f\u7406\u8fdb\u884c\u8ba1\u7b97\u5373\u53ef\u5f97\u5230\u5bf9\u5e94\u7684\u50cf\u7d20\u957f\u5ea6\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Web 3D \u5f00\u53d1\u4e2d\uff0c\u5f88\u591a\u6280\u672f\u96be\u70b9\u5b9e\u9645\u4e0a\u90fd\u662f\u56e0\u4e3a\u6211\u4eec\u5bf9\u4e8e\u6570\u5b66\u77e5\u8bc6\u7684\u8fd0\u7528\u548c\u5b9e\u8df5\u7ecf\u9a8c\u4e0d\u8db3\uff0c\u8fd9\u7bc7\u6587\u7ae0\u7528\u4e00\u4e2a\u5b9e\u9645\u6848\u4f8b\u6765\u8bf4\u660e\u5229\u7528\u6570\u5b66\u77e5\u8bc6\u89e3\u51b3 3D \u573a\u666f\u4e2d\u7269\u4f53\u5728 2D \u5e73\u9762\uff08\u5c4f\u5e55\uff09\u6295\u5f71\u7684\u50cf\u7d20\u5c3a\u5bf8\u8ba1\u7b97\u95ee\u9898\uff0c\u4e5f\u7b80\u5355\u4e86\u89e3\u4e86\u900f\u89c6\u76f8\u673a\uff08\u6295\u5f71\uff09\u548c\u6b63\u4ea4\u76f8\u673a\uff08\u6295\u5f71\uff09\u7684\u5e94\u7528\u573a\u666f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://threejs.org/manual/#en/cameras",children:"https://threejs.org/manual/#en/cameras"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/3D_projection#Perspective_projection",children:"https://en.wikipedia.org/wiki/3D_projection#Perspective_projection"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Orthographic_projection",children:"https://en.wikipedia.org/wiki/Orthographic_projection"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://people.computing.clemson.edu/~dhouse/courses/405/notes/projections.pdf",children:"https://people.computing.clemson.edu/~dhouse/courses/405/notes/projections.pdf"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269/18",children:"https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269/18"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gist.github.com/ayamflow/462190f13eeef04f01cb",children:"https://gist.github.com/ayamflow/462190f13eeef04f01cb"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/13350875/three-js-width-of-view/13351534#13351534",children:"https://stackoverflow.com/questions/13350875/three-js-width-of-view/13351534#13351534"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},30104:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/example-68e1ec4e6b78bae72547a0f2d2dc8a0c.jpg"},24092:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/example1-481eb02dd8cdd5651f67608846d06d61.jpg"},84857:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/perspective-and-orthographic-projection-bd14dd87133af90a7875c2e07e043404.webp"},62140:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/quad-viewport-4b3b445fa4d08b90b2baee1dcb234521.jpg"},72667:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/screenshot-5c01f40559825d465d41c89a8fcdf537.jpg"},16005:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/screenshot1-b2de1048e289e07197b33d68c3fd6413.jpg"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var i=s(67294);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);