"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9318],{14378:(e,A,r)=>{r.r(A),r.d(A,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var n=r(85893),i=r(11151);const s={title:"3D \u5f00\u53d1\uff1a\u6b63\u5411\u6e32\u67d3\u4e0e\u5ef6\u8fdf\u6e32\u67d3",date:new Date("2023-03-18T14:30:00.000Z"),update:new Date("2023-03-18T14:30:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],description:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"},l=void 0,t={permalink:"/computer-technology/3d/forward-rendering-and-deferred-rendering",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/3d/forward-rendering-and-deferred-rendering/index.md",source:"@site/blog/computer-technology/3d/forward-rendering-and-deferred-rendering/index.md",title:"3D \u5f00\u53d1\uff1a\u6b63\u5411\u6e32\u67d3\u4e0e\u5ef6\u8fdf\u6e32\u67d3",description:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002",date:"2023-03-18T14:30:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66",permalink:"/tags/\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66"},{inline:!0,label:"Web",permalink:"/tags/web"},{inline:!0,label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{inline:!0,label:"3D",permalink:"/tags/3-d"},{inline:!0,label:"WebGL",permalink:"/tags/web-gl"},{inline:!0,label:"Three.js",permalink:"/tags/three-js"}],readingTime:11.755,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"3D \u5f00\u53d1\uff1a\u6b63\u5411\u6e32\u67d3\u4e0e\u5ef6\u8fdf\u6e32\u67d3",date:"2023-03-18T14:30:00.000Z",update:"2023-03-18T14:30:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66","Web","Web \u524d\u7aef","3D","WebGL","Three.js"],description:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"},unlisted:!1,prevItem:{title:"WebGPU \u2013 Web \u5e73\u53f0\u7684\u901a\u7528\u8ba1\u7b97 API",permalink:"/computer-technology/web-frontend/api/webgpu-gpgpu"},nextItem:{title:"\u9ec4\u5c71\u4e4b\u884c",permalink:"/2023/03/12/life/tourism/tourism-huangshan"}},d={authorsImageUrls:[void 0]},a=[{value:"\u6e32\u67d3\u7ba1\u7ebf",id:"\u6e32\u67d3\u7ba1\u7ebf",level:2},{value:"\u7740\u8272\u5668",id:"\u7740\u8272\u5668",level:3},{value:"\u6e32\u67d3\u6280\u672f",id:"\u6e32\u67d3\u6280\u672f",level:2},{value:"\u6b63\u5411\u6e32\u67d3",id:"\u6b63\u5411\u6e32\u67d3",level:3},{value:"\u5ef6\u8fdf\u6e32\u67d3",id:"\u5ef6\u8fdf\u6e32\u67d3",level:3},{value:"\u7279\u70b9\u5bf9\u6bd4",id:"\u7279\u70b9\u5bf9\u6bd4",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function c(e){const A={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A.blockquote,{children:["\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2023-03-18 14:30:00"})}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:"\u76f8\u5bf9\u4e8e 2D \u5f00\u53d1\uff0c3D \u5f00\u53d1\u7531\u4e8e\u6709\u5927\u91cf\u7684\u6982\u5ff5\u9700\u8981\u8fdb\u884c\u5b66\u4e60\u4e86\u89e3\u56e0\u6b64\u95e8\u69db\u8f83\u9ad8\uff0c\u8fd1\u671f\u521a\u597d\u9488\u5bf9 3D \u56fe\u5f62\u6e32\u67d3\u6280\u672f\u4e2d\u7684\u4e24\u79cd\u5e38\u89c1\u6280\u672f\u6b63\u5411\u6e32\u67d3\u548c\u5ef6\u8fdf\u6e32\u67d3\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4e86\u89e3\uff0c\u5728\u6b64\u505a\u4e2a\u7b80\u5355\u7684\u8bb0\u5f55\uff0c\u53e6\u5916\u901a\u8fc7\u4e86\u89e3\u8fd9\u4e9b\u6982\u5ff5\u7684\u540c\u65f6\u4e5f\u5bf9\u5149\u7167\u76f8\u5173\u7684\u77e5\u8bc6\u6709\u4e86\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u5728\u6b64\u4e4b\u524d\uff0c\u867d\u7136\u5df2\u7ecf\u8fdb\u884c\u4e86\u76f8\u5f53\u591a\u7684\u5f00\u53d1\u5b9e\u8df5\uff0c\u4f46\u7531\u4e8e\u573a\u666f\u53d7\u9650\uff0c\u4e00\u76f4\u5bf9\u4e8e 3D \u5f00\u53d1\u4e2d\u7684\u5149\u7167\u6280\u672f\u5e94\u7528\u7684\u504f\u5c11\uff0c\u4e0d\u8fc7\u6070\u597d\u8fd1\u671f\u5728\u5b66\u4e60\u4e86\u89e3\u6027\u80fd\u76f8\u5173\u7684\u77e5\u8bc6\uff0c\u5728\u4e86\u89e3\u5230\u6e32\u67d3\u8fd9\u65b9\u9762\u7684\u77e5\u8bc6\u6982\u5ff5\u65f6\uff0c\u624d\u610f\u8bc6\u5230\u5149\u7167\u5728 3D \u5f00\u53d1\u4e2d\u7684\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6280\u672f\u3002"}),"\n",(0,n.jsx)(A.h2,{id:"\u6e32\u67d3\u7ba1\u7ebf",children:"\u6e32\u67d3\u7ba1\u7ebf"}),"\n",(0,n.jsxs)(A.p,{children:["\u65e0\u8bba\u662f\u505a\u666e\u901a\u7684\u524d\u7aef\u4e1a\u52a1\u5f00\u53d1\uff0c\u8fd8\u662f\u6570\u636e\u53ef\u89c6\u5316\u5f00\u53d1\uff0c\u4e86\u89e3\u7a0b\u5e8f\u6027\u80fd\u74f6\u9888\u7684\u4e00\u4e2a\u5173\u952e\u65b9\u9762\u662f\u77e5\u9053",(0,n.jsx)(A.strong,{children:"\u7a0b\u5e8f\u4ee3\u7801\u5230 UI \u89c6\u89c9\u6548\u679c\u662f\u5982\u4f55\u5b9e\u73b0\uff08\u6620\u5c04\uff09\u7684"}),"\uff0c\u4e5f\u5373",(0,n.jsx)(A.strong,{children:"\u6e32\u67d3\u7ba1\u7ebf\uff08Rendering Pipeline\uff09"}),"\u3002"]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"graphics-pipeline-0",src:r(77128).Z+"",width:"825",height:"144"})}),"\n",(0,n.jsxs)(A.p,{children:["\u4e0a\u56fe\u6982\u62ec\u4e86 3D \u5f00\u53d1\u6e32\u67d3\u7ba1\u7ebf\u7684\u5927\u4f53\u6d41\u7a0b\uff0c\u5373\uff1a\u5e94\u7528\u7a0b\u5e8f\u3001\u51e0\u4f55\u56fe\u5f62\u548c\u5149\u6805\u5316\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5e94\u7528\u7a0b\u5e8f\u7684\u4ee3\u7801\u662f\u4e00\u7cfb\u5217\u7ed8\u56fe\u903b\u8f91\u7684\u9ad8\u5ea6\u62bd\u8c61\uff0c\u800c\u8fd9\u4e9b\u903b\u8f91\u4ee3\u7801\u88ab\u7f16\u8bd1\u4e3a\u5e95\u5c42\u7684\u51e0\u4f55\u56fe\u5143\u7ed8\u5236\u6307\u4ee4\uff0c\u7ecf\u8fc7\u4e00\u7cfb\u5217\u8fd0\u7b97\u540e\u4ea4\u7ed9\u56fe\u5f62\u5904\u7406\u5668\u5b8c\u6210\u5149\u6805\u5316\uff0c\u6700\u7ec8\u5448\u73b0\u5728\u7ec8\u7aef\u663e\u793a\u5668\u4e0a\uff0c\u5177\u4f53\u5185\u5bb9\u53c2\u8003",(0,n.jsx)(A.a,{href:"https://en.wikipedia.org/wiki/Graphics_pipeline",children:"\u7ef4\u57fa\u767e\u79d1"}),"\u7b49\u8d44\u6599\u5373\u53ef\uff0c\u8fd9\u91cc\u4e0d\u505a\u8d58\u8ff0\u3002"]}),"\n",(0,n.jsx)(A.p,{children:"\u63a5\u4e0b\u6765\u4e3b\u8981\u662f\u8981\u4e86\u89e3\u4e00\u4e9b\u5e38\u7528\u6982\u5ff5\uff0c\u76ee\u7684\u662f\u5bf9\u540e\u7eed\u4e24\u79cd\u4e0d\u540c\u6e32\u67d3\u6280\u672f\u8fdb\u884c\u5206\u6790\u8bf4\u660e\u65f6\u66f4\u5bb9\u6613\u7406\u89e3\u3002"}),"\n",(0,n.jsx)(A.h3,{id:"\u7740\u8272\u5668",children:"\u7740\u8272\u5668"}),"\n",(0,n.jsxs)(A.p,{children:["\u8fd9\u91cc\u9996\u5148\u9700\u8981\u4e86\u89e3\u7684\u4fbf\u662f\u7740\u8272\u5668\u7684\u6982\u5ff5\uff0c\u5728\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66\u4e2d\uff0c",(0,n.jsx)(A.strong,{children:"\u7740\u8272\u5668\u662f\u4e00\u79cd\u8ba1\u7b97\u673a\u7a0b\u5e8f"}),"\uff0c\u8d1f\u8d23\u5728 3D \u573a\u666f\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u8ba1\u7b97\u9002\u5f53\u7684\u4eae\u5ea6\u3001\u6697\u5ea6\u548c\u989c\u8272\u7ea7\u522b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e5f\u88ab\u79f0\u4e4b\u4e3a\u7740\u8272\u3002"]}),"\n",(0,n.jsx)(A.p,{children:"\u5728\u63a2\u8ba8 3D \u5f00\u53d1\u4e2d\u7684\u6e32\u67d3\u7ba1\u7ebf\u65f6\uff0c\u4e00\u5b9a\u8981\u7ed3\u5408\u8f6f\u786c\u4ef6\u6765\u601d\u8003\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u56fe\u5f62\u5904\u7406\u5668\uff08GPU\uff09\u88ab\u8bbe\u8ba1\u4e3a\u6d41\u6c34\u7ebf\u67b6\u6784\uff0c\u5206\u6210\u591a\u4e2a\u9636\u6bb5\uff0c\u5176\u4e2d\u67d0\u4e9b\u9636\u6bb5\u7531\u5e95\u5c42\u786c\u4ef6\u66b4\u9732\u7ed9\u4e0a\u5c42\u8f6f\u4ef6\u53ef\u7f16\u7a0b\u63a5\u53e3\uff0c\u7740\u8272\u5668\u5219\u4e3a\u8fd9\u4e9b\u53ef\u7f16\u7a0b\u7684\u9636\u6bb5\u63d0\u4f9b\u4e86\u8fd0\u884c\u7684\u7a0b\u5e8f\u3002\u6240\u4ee5\uff0c\u53ef\u7075\u6d3b\u7f16\u7a0b\u7684\u7740\u8272\u5668\u7a0b\u5e8f\uff0c\u4e3a 3D \u5f00\u53d1\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56fe\u5f62\u5904\u7406\u80fd\u529b\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"graphics-pipeline-1",src:r(61546).Z+"",width:"1500",height:"338"})}),"\n",(0,n.jsx)(A.p,{children:"\u4e0a\u56fe\u662f\u56fe\u5f62\u5904\u7406\u5668\u7684\u6d41\u6c34\u7ebf\u67b6\u6784\u8bbe\u8ba1\u7684\u4e00\u4e2a\u5927\u4f53\u793a\u610f\u56fe\uff0c\u4e5f\u53ef\u770b\u4f5c\u662f\u6e32\u67d3\u7ba1\u7ebf\u7684\u786c\u4ef6\u5b9e\u73b0\uff0c\u5176\u4e2d\u7eff\u8272\u90e8\u5206\u662f\u53ef\u7f16\u7a0b\u7684\u9636\u6bb5\uff0c\u800c\u5404\u79cd\u4e0d\u540c\u9636\u6bb5\u7684\u7a0b\u5e8f\u5bf9\u5e94\u4e0d\u540c\u7c7b\u578b\u7684\u7740\u8272\u5668\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u5176\u4e2d\uff0c\u9876\u70b9\u7740\u8272\u5668\uff08Vertex shaders\uff09\u662f\u6700\u6210\u719f\u548c\u6700\u5e38\u89c1\u7684 3D \u7740\u8272\u5668\u7c7b\u578b\uff0c\u5e76\u4e14\u4e3a\u63d0\u4f9b\u7ed9\u56fe\u5f62\u5904\u7406\u5668\u7684\u6bcf\u4e2a\u9876\u70b9\u8fd0\u884c\u4e00\u6b21\u3002\u76ee\u7684\u662f\u5c06\u6bcf\u4e2a\u9876\u70b9\u5728\u865a\u62df\u7a7a\u95f4\u4e2d\u7684 3D \u4f4d\u7f6e\u8f6c\u6362\u4e3a\u5b83\u51fa\u73b0\u5728\u5c4f\u5e55\u4e0a\u7684 2D \u5750\u6807\uff08\u4ee5\u53ca Z \u7f13\u51b2\u533a\u7684\u6df1\u5ea6\u503c\uff09\u3002\u9876\u70b9\u7740\u8272\u5668\u53ef\u4ee5\u64cd\u7eb5\u4f4d\u7f6e\u3001\u989c\u8272\u548c\u7eb9\u7406\u5750\u6807\u7b49\u5c5e\u6027\uff0c\u4f46\u4e0d\u80fd\u521b\u5efa\u65b0\u7684\u9876\u70b9\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u51e0\u4f55\u7740\u8272\u5668\uff08Geometry shaders\uff09\u7a0b\u5e8f\u5728\u9876\u70b9\u7740\u8272\u5668\u4e4b\u540e\u6267\u884c\u3002\u5b83\u4eec\u5c06\u6574\u4e2a\u539f\u8bed\u4f5c\u4e3a\u8f93\u5165\uff0c\u53ef\u80fd\u5e26\u6709\u90bb\u63a5\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u5728\u4e09\u89d2\u5f62\u4e0a\u64cd\u4f5c\u65f6\uff0c\u4e09\u4e2a\u9876\u70b9\u662f\u51e0\u4f55\u7740\u8272\u5668\u7684\u8f93\u5165\u3002\u7136\u540e\u7740\u8272\u5668\u53ef\u4ee5\u8f93\u51fa\u96f6\u4e2a\u6216\u591a\u4e2a\u56fe\u5143\uff0c\u8fd9\u4e9b\u56fe\u5143\u88ab\u5149\u6805\u5316\u5e76\u4e14\u5b83\u4eec\u7684\u7247\u6bb5\u6700\u7ec8\u4f20\u9012\u7ed9\u50cf\u7d20\u7740\u8272\u5668\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u6765\u81ea\u5149\u6805\u5316\u9636\u6bb5\u7684\u6bcf\u4e2a\u7247\u6bb5\u7684\u6570\u636e\u7531\u7247\u6bb5\u7740\u8272\u5668\uff08\u50cf\u7d20\u7740\u8272\u5668\uff0cPixel shaders\uff09\u5904\u7406\u3002\u7247\u6bb5\u7740\u8272\u5668\u7684\u8f93\u51fa\u662f\u6bcf\u4e2a\u8981\u5199\u5165\u7684\u989c\u8272\u7f13\u51b2\u533a\u7684\u989c\u8272\u5217\u8868\u3001\u6df1\u5ea6\u503c\u548c\u6a21\u677f\u503c\u3002\u7247\u6bb5\u7740\u8272\u5668\u65e0\u6cd5\u4e3a\u7247\u6bb5\u8bbe\u7f6e\u6a21\u677f\u6570\u636e\uff0c\u4f46\u5b83\u4eec\u53ef\u4ee5\u63a7\u5236\u989c\u8272\u548c\u6df1\u5ea6\u503c\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u4ee5\u4e0a\u4e09\u7c7b\u5e38\u89c1\u7740\u8272\u5668\u4e2d\u7247\u6bb5\u7740\u8272\u5668\u662f\u7740\u8272\u5668\u7f16\u7a0b\u4e2d\u63a5\u89e6\u6700\u591a\u7684\uff0c\u4e5f\u7b97\u662f\u6700\u6838\u5fc3\u7684\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u6700\u540e\uff0c\u7ed9\u51fa\u4e00\u5f20 Vulkan \uff08\u65b0\u4e00\u4ee3\u73b0\u4ee3\u56fe\u5f62\u5361\u62bd\u8c61\u8bbe\u8ba1 API\uff09\u6587\u6863\u4e2d\u5bf9\u4e8e\u6e32\u67d3\u7ba1\u7ebf\u7684\u793a\u610f\u56fe\uff0c\u76f8\u4fe1\u8fd9\u5e45\u56fe\u80fd\u4ee5\u66f4\u76f4\u89c2\u7684\u65b9\u5f0f\u5e2e\u52a9\u6211\u4eec\u7406\u89e3\u6e32\u67d3\u7ba1\u7ebf\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"graphics-pipeline-2",src:r(53319).Z+"",width:"403",height:"643"})}),"\n",(0,n.jsx)(A.h2,{id:"\u6e32\u67d3\u6280\u672f",children:"\u6e32\u67d3\u6280\u672f"}),"\n",(0,n.jsx)(A.p,{children:"\u5728\u5bf9\u524d\u7f6e\u6982\u5ff5\u6e32\u67d3\u7ba1\u7ebf\u505a\u4e86\u7b80\u5355\u7684\u4e86\u89e3\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u4fbf\u662f\u672c\u6587\u7684\u6838\u5fc3\u5185\u5bb9\uff0c\u4e24\u79cd\u4e0d\u540c\u7684\u6e32\u67d3\u6280\u672f\u3002"}),"\n",(0,n.jsx)(A.h3,{id:"\u6b63\u5411\u6e32\u67d3",children:"\u6b63\u5411\u6e32\u67d3"}),"\n",(0,n.jsx)(A.p,{children:"\u6b63\uff08\u524d\uff09\u5411\u6e32\u67d3\uff08Forward Rendering\uff09\u53c8\u79f0\u6b63\u5411\u7740\u8272\uff0c\u662f\u5927\u591a\u6570 3D \u6e32\u67d3\u5f15\u64ce\u7684\u9ed8\u8ba4\u6e32\u67d3\u6280\u672f\u5b9e\u73b0\u3002"}),"\n",(0,n.jsx)(A.p,{children:"**\u8fd9\u662f\u4e00\u79cd\u76f4\u63a5\u7684\u65b9\u5f0f\uff0c\u6e32\u67d3\u4e00\u4e2a\u5bf9\u8c61\u5e76\u7528\u573a\u666f\u4e2d\u6240\u6709\u7684\u5149\u6e90\u7167\u4eae\u5b83\u3002\u5982\u679c\u573a\u666f\u4e2d\u6709\u5927\u91cf\u7684\u5bf9\u8c61\uff0c\u5219\u4e3a\u573a\u666f\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u5206\u522b\u6267\u884c\u6b64\u64cd\u4f5c\u3002**\u8fd9\u53e5\u8bdd\u603b\u7ed3\u4e86\u6b63\u5411\u6e32\u67d3\u6280\u672f\u7684\u5b9e\u73b0\u601d\u8def\u548c\u6280\u672f\u539f\u7406\uff0c\u5176\u975e\u5e38\u7b26\u5408\u6211\u4eec\u4eba\u7c7b\u601d\u8003\u7684\u65b9\u5f0f\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u867d\u7136\u5f88\u5bb9\u6613\u7406\u89e3\u548c\u5b9e\u73b0\uff0c\u4f46\u5b83\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u4e5f\u5f88\u5927\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u6e32\u67d3\u5bf9\u8c61\u90fd\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u6e32\u67d3\u7247\u6bb5\u8fed\u4ee3\u6bcf\u4e2a\u5149\u6e90\uff0c\u7531\u4e8e\u7247\u6bb5\u7740\u8272\u5668\u8f93\u51fa\u88ab\u8986\u76d6\uff0c\u6b63\u5411\u6e32\u67d3\u4e5f\u5f80\u5f80\u4f1a\u5728\u6df1\u5ea6\u590d\u6742\u5ea6\u9ad8\u7684\u573a\u666f\uff08\u591a\u4e2a\u5bf9\u8c61\u8986\u76d6\u540c\u4e00\u5c4f\u5e55\u50cf\u7d20\uff09\u4e2d\u6d6a\u8d39\u5927\u91cf\u7247\u6bb5\u7740\u8272\u5668\u8fd0\u884c\u7ed3\u679c\uff0c\u5bfc\u81f4\u5927\u91cf\u7684\u65e0\u6548\u6e32\u67d3\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"forward-rendering",src:r(71062).Z+"",width:"600",height:"400"})}),"\n",(0,n.jsx)(A.p,{children:"\u5728\u4e0a\u56fe\u4e2d\uff0c\u6bcf\u4e2a\u51e0\u4f55\u56fe\u5f62\u88ab\u4e00\u6b21\u4e00\u4e2a\u4f20\u9012\u7ed9\u6e32\u67d3\u7ba1\u7ebf\uff0c\u7ecf\u8fc7\u9876\u70b9\u7740\u8272\u5668\u3001\u51e0\u4f55\u7740\u8272\u5668\u3001\u7247\u6bb5\u7740\u8272\u5668\u7b49\u591a\u4e2a\u9636\u6bb5\u540e\u6700\u7ec8\u6e32\u67d3\u5230\u6e32\u67d3\u76ee\u6807\uff08\u663e\u793a\u5668\uff09\uff0c\u8fd9\u4e5f\u6b63\u662f\u6b63\u5411\u6e32\u67d3\u6280\u672f\u5904\u7406\u6e32\u67d3\u5bf9\u8c61\u7684\u6d41\u7a0b\u3002"}),"\n",(0,n.jsx)(A.h3,{id:"\u5ef6\u8fdf\u6e32\u67d3",children:"\u5ef6\u8fdf\u6e32\u67d3"}),"\n",(0,n.jsx)(A.p,{children:"\u5ef6\u8fdf\u6e32\u67d3\uff08Deferred Rendering\uff09\u6280\u672f\u4f3c\u4e4e\u5e76\u4e0d\u5e38\u89c1\uff0c\u4f46\u88ab\u5e02\u9762\u4e0a\u5927\u591a\u6570 3D \u6e32\u67d3\u5f15\u64ce\u6240\u652f\u6301\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"deferred-rendering",src:r(51533).Z+"",width:"640",height:"353"})}),"\n",(0,n.jsxs)(A.p,{children:["\u4e0a\u56fe\u662f\u4e00\u4e2a\u6709\u5927\u91cf\u52a8\u6001\u5149\u6e90\u7684\u573a\u666f\uff0c\u800c\u8fd9\u4e5f\u6b63\u662f\u5ef6\u8fdf\u6e32\u67d3\u6280\u672f\u7684\u5178\u578b\u5e94\u7528\u573a\u666f\u3002",(0,n.jsx)(A.strong,{children:"\u5ef6\u8fdf\u6e32\u67d3\uff08\u7740\u8272\uff09\u57fa\u4e8e\u8fd9\u6837\u7684\u60f3\u6cd5\uff0c\u5373\u6211\u4eec\u5c06\u5927\u90e8\u5206\u7e41\u91cd\u7684\u6e32\u67d3\uff08\u5982\u7167\u660e\uff09\u63a8\u8fdf\u6216\u63a8\u8fdf\u5230\u540e\u671f\u3002"})]}),"\n",(0,n.jsx)(A.p,{children:"\u5ef6\u8fdf\u7740\u8272\u7531\u4e24\u4e2a\u8fc7\u7a0b\u7ec4\u6210\uff1a\u5728\u7b2c\u4e00\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u79f0\u4e3a\u51e0\u4f55\u901a\u9053\uff0c\u6211\u4eec\u6e32\u67d3\u4e00\u6b21\u573a\u666f\u5e76\u4ece\u6211\u4eec\u5b58\u50a8\u5728\u7eb9\u7406\u96c6\u5408\u4e2d\u7684\u5bf9\u8c61\u4e2d\u68c0\u7d22\u5404\u79cd\u51e0\u4f55\u4fe1\u606f\uff0c\u79f0\u4e3a G \u7f13\u51b2\u533a; \u8003\u8651\u4f4d\u7f6e\u5411\u91cf\u3001\u989c\u8272\u5411\u91cf\u3001\u6cd5\u7ebf\u5411\u91cf\u548c/\u6216\u955c\u9762\u53cd\u5c04\u503c\u3002\u573a\u666f\u7684\u51e0\u4f55\u4fe1\u606f\u5b58\u50a8\u5728 G \u7f13\u51b2\u533a\u7136\u540e\u7528\u4e8e\uff08\u66f4\u590d\u6742\u7684\uff09\u5149\u7167\u8ba1\u7b97\uff1b\u6211\u4eec\u5728\u79f0\u4e3a\u7167\u660e\u901a\u9053\u7684\u7b2c\u4e8c\u4e2a\u901a\u9053\u4e2d\u4f7f\u7528 G \u7f13\u51b2\u533a\u4e2d\u7684\u7eb9\u7406\uff0c\u5728\u8be5\u901a\u9053\u4e2d\u6211\u4eec\u6e32\u67d3\u4e00\u4e2a\u5c4f\u5e55\u586b\u5145\u7684\u56db\u8fb9\u5f62\uff0c\u5e76\u4f7f\u7528\u5b58\u50a8\u5728 G \u7f13\u51b2\u533a\u4e2d\u7684\u51e0\u4f55\u4fe1\u606f\u8ba1\u7b97\u6bcf\u4e2a\u7247\u6bb5\u7684\u573a\u666f\u7167\u660e\uff1b\u6211\u4eec\u9010\u4e2a\u50cf\u7d20\u5730\u8fed\u4ee3 G \u7f13\u51b2\u533a\u3002\u6211\u4eec\u4e0d\u662f\u5c06\u6bcf\u4e2a\u5bf9\u8c61\u4ece\u9876\u70b9\u7740\u8272\u5668\u4e00\u76f4\u8fed\u4ee3\u5230\u7247\u6bb5\u7740\u8272\u5668\uff0c\u800c\u662f\u5c06\u5176\u9ad8\u7ea7\u7247\u6bb5\u5904\u7406\u5206\u79bb\u5230\u540e\u9762\u7684\u9636\u6bb5\u3002\u5149\u7167\u8ba1\u7b97\u5b8c\u5168\u76f8\u540c\uff0c\u4f46\u8fd9\u6b21\u6211\u4eec\u4ece\u76f8\u5e94\u7684 G \u7f13\u51b2\u533a\u7eb9\u7406\u4e2d\u83b7\u53d6\u6240\u6709\u5fc5\u9700\u7684\u8f93\u5165\u53d8\u91cf\uff0c\u800c\u4e0d\u662f\u9876\u70b9\u7740\u8272\u5668\uff08\u52a0\u4e0a\u4e00\u4e9b\u7edf\u4e00\u53d8\u91cf\uff09\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"deferred-rendering-1",src:r(43006).Z+"",width:"600",height:"400"})}),"\n",(0,n.jsx)(A.p,{children:"\u6240\u4ee5\uff0c\u5ef6\u8fdf\u6e32\u67d3\u5f88\u5173\u952e\u7684\u4e00\u70b9\u662f\u5c06\u5149\u7167\u8ba1\u7b97\u8fd9\u79cd\u975e\u5e38\u8017\u6027\u80fd\u7684\u6d41\u7a0b\u63a8\u8fdf\u5230\u540e\u671f\u7edf\u4e00\u5b8c\u6210\uff0c\u907f\u514d\u4e86\u6b63\u5411\u6e32\u67d3\u6280\u672f\u4e2d\u4ea7\u751f\u7684\u5927\u91cf\u65e0\u6548\u6e32\u67d3\u3002"}),"\n",(0,n.jsx)(A.h3,{id:"\u7279\u70b9\u5bf9\u6bd4",children:"\u7279\u70b9\u5bf9\u6bd4"}),"\n",(0,n.jsxs)(A.p,{children:["\u76ee\u524d\uff0c\u5927\u90e8\u5206\u7684 3D \u6e32\u67d3\u5f15\u64ce\u9ed8\u8ba4\u91c7\u7528\u5c31\u662f\u6b63\u5411\u6e32\u67d3\u6280\u672f\uff0c\u4f8b\u5982 Three.js\u3001Babylon.js\u3001Unity 3D\uff1b\u5c06\u5ef6\u8fdf\u6e32\u67d3\u6280\u672f\u4f5c\u4e3a\u9ed8\u8ba4\u65b9\u6848\u7684\u5f88\u5c11\uff0c\u4f8b\u5982 Unreal Engine 4\u3002\u53e6\u4e00\u65b9\u9762\uff0cThree.js \u4e5f",(0,n.jsx)(A.a,{href:"https://threejs.org/docs/#api/en/renderers/WebGLMultipleRenderTargets",children:"\u652f\u6301\u5ef6\u8fdf\u6e32\u67d3\u6280\u672f"}),"\uff0c\u800c Unity 3D \u652f\u6301\u7684\u6e32\u67d3\u6280\u672f",(0,n.jsx)(A.a,{href:"https://docs.unity3d.com/Manual/RenderingPaths.html",children:"\u66f4\u591a"}),"\uff0cUnreal Engine 4 \u4e5f\u63d0\u4f9b\u4e86",(0,n.jsx)(A.a,{href:"https://docs.unrealengine.com/4.26/en-US/TestingAndOptimization/PerformanceAndProfiling/ForwardRenderer/",children:"\u6b63\u5411\u6e32\u67d3\u7684\u652f\u6301"}),"\u3002"]}),"\n",(0,n.jsx)(A.p,{children:"\u6b63\u5411\u6e32\u67d3\u5bb9\u6613\u7406\u89e3\uff0c\u5b9e\u73b0\u6210\u672c\u4f4e\uff0c\u7075\u6d3b\u5ea6\u9ad8\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u5904\u7406\u900f\u660e\u5ea6\u3001Z \u7f13\u51b2\u533a\u3001\u6297\u952f\u9f7f\u7b49\u573a\u666f\uff1b\u4f46\u5728\u591a\u5149\u6e90\u7684\u573a\u666f\u4e0b\uff0c\u5149\u7167\u8ba1\u7b97\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927\uff0c\u4f1a\u5bfc\u81f4\u5927\u91cf\u7684\u65e0\u6548\u6e32\u67d3\uff0c\u5728\u7b80\u5355\u573a\u666f\u4e0b\u53ef\u4ee5\u8003\u8651\u7528\u5149\u7167\u8d34\u56fe\u66ff\u4ee3\u771f\u5b9e\u5149\u6e90\u3002\u7528\u7c7b\u4f3c\u5927 O \u8868\u793a\u6cd5\u6765\u8868\u793a\u6b63\u5411\u6e32\u67d3\u6280\u672f\u7684\u6e32\u67d3\u590d\u6742\u5ea6\uff1a"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-plain",children:"\u6b63\u5411\u6e32\u67d3\u590d\u6742\u5ea6\uff1aO(num_geometry_fragments * num_lights)\n"})}),"\n",(0,n.jsx)(A.p,{children:"\u76f8\u5bf9\u6765\u8bf4\uff0c\u5ef6\u8fdf\u6e32\u67d3\u5b9e\u73b0\u6210\u672c\u8f83\u9ad8\uff0c\u5bf9\u7740\u8272\u5668\u7684\u652f\u6301\u6709\u9650\uff0c\u9002\u5408\u5e94\u7528\u5728\u5927\u91cf\u52a8\u6001\u5149\u7684\u573a\u666f\uff0c\u4f1a\u6781\u5927\u7684\u63d0\u5347\u6e32\u67d3\u6027\u80fd\uff0c\u4f46\u9700\u8981\u652f\u6301\u591a\u4e2a\u6e32\u67d3\u76ee\u6807\u7684\u663e\u5361\uff0c\u9ad8\u5e26\u5bbd\u4ee5\u652f\u6301\u5927\u91cf\u7684\u7f13\u51b2\u533a\u4f20\u8f93\uff0c\u5185\u5b58\u6d88\u8017\u9ad8\uff0c\u9ed8\u8ba4\u4e0d\u652f\u6301\u900f\u660e\u5ea6\u3001\u6297\u952f\u9f7f\u7b49\uff0c\u4e0d\u8fc7\u4e1a\u5185\u6709\u76f8\u5e94\u7684\u89e3\u51b3\u65b9\u6848\u3002\u90a3\u4e48\uff0c\u5ef6\u8fdf\u6e32\u67d3\u6280\u672f\u7684\u6e32\u67d3\u590d\u6742\u5ea6\u5219\u53ef\u8868\u793a\u4e3a\uff1a"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-plain",children:"\u5ef6\u8fdf\u6e32\u67d3\u590d\u6742\u5ea6\uff1aO(screen_resolution * num_lights)\n"})}),"\n",(0,n.jsx)(A.p,{children:"\u5bf9\u6bd4\u4e24\u8005\u7684\u6e32\u67d3\u590d\u6742\u5ea6\uff0c\u5177\u4f53\u9009\u7528\u54ea\u79cd\u6e32\u67d3\u6280\u672f\uff0c\u53d6\u51b3\u4e8e\u573a\u666f\u4e2d\u7684\u5149\u6e90\u6570\u91cf\u4ee5\u53ca\u51e0\u4f55\u56fe\u5f62\u7684\u91cf\u7ea7\u7b49\u56e0\u7d20\u3002"}),"\n",(0,n.jsx)(A.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://en.wikipedia.org/wiki/Graphics_pipeline",children:"https://en.wikipedia.org/wiki/Graphics_pipeline"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://www.khronos.org/opengl/wiki/Shader",children:"https://www.khronos.org/opengl/wiki/Shader"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://en.wikipedia.org/wiki/Shader#Pixel_shaders",children:"https://en.wikipedia.org/wiki/Shader#Pixel_shaders"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://vulkan-tutorial.com/Drawing_a_triangle/Graphics_pipeline_basics/Introduction",children:"https://vulkan-tutorial.com/Drawing_a_triangle/Graphics_pipeline_basics/Introduction"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://gamedevelopment.tutsplus.com/articles/forward-rendering-vs-deferred-rendering--gamedev-12342",children:"https://gamedevelopment.tutsplus.com/articles/forward-rendering-vs-deferred-rendering--gamedev-12342"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://learnopengl.com/Advanced-Lighting/Deferred-Shading",children:"https://learnopengl.com/Advanced-Lighting/Deferred-Shading"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://www.klab.com/jp/blog/tech/2021/unitydeferredrendering.html",children:"https://www.klab.com/jp/blog/tech/2021/unitydeferredrendering.html"})}),"\n",(0,n.jsx)(A.li,{children:(0,n.jsx)(A.a,{href:"https://en.wikipedia.org/wiki/Deferred_shading",children:"https://en.wikipedia.org/wiki/Deferred_shading"})}),"\n"]})]})}function g(e={}){const{wrapper:A}={...(0,i.a)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},43006:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/deferred-rendering-1-f33344303d90f0eface11d3ef5838965.webp"},51533:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/deferred-rendering-fc3a7552fc4454b0bd5aa8b543313756.webp"},71062:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/forward-rendering-28604d660822eb1b075e009404a38ca7.webp"},77128:(e,A,r)=>{r.d(A,{Z:()=>n});const n="data:image/jpeg;base64,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"},61546:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/graphics-pipeline-1-0d9bc622037e675f36f6f41cae4320af.webp"},53319:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/graphics-pipeline-2-5beeac64796c5b122aed507361479500.webp"},11151:(e,A,r)=>{r.d(A,{Z:()=>t,a:()=>l});var n=r(67294);const i={},s=n.createContext(i);function l(e){const A=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function t(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:A},e.children)}}}]);