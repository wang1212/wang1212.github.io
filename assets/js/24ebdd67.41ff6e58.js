"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[58316],{97870:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var l=r(85893),s=r(11151);const i={title:"CPU \u7684\u4e03\u79cd\u5bfb\u5740\u65b9\u5f0f",date:new Date("2016-05-05T01:53:00.000Z"),update:new Date("2016-05-05T01:53:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a","CPU"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a","CPU"],description:"CPU \u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u4e0d\u4ec5\u4ec5\u4e00\u79cd\uff0c\u591a\u79cd\u65b9\u5f0f\u4e5f\u4e3a\u4e0d\u540c\u6570\u636e\u7684\u83b7\u53d6\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u6548\u7387\u8003\u91cf\uff0c\u4fdd\u8bc1\u4e86\u5bfb\u5740\u6548\u7387\u4e0e\u6307\u4ee4\u7684\u7075\u6d3b\u6027\u3002"},c=void 0,d={permalink:"/computer-technology/computer/computer-cpu-addressing-mode",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/computer/computer-cpu-addressing-mode.md",source:"@site/blog/computer-technology/computer/computer-cpu-addressing-mode.md",title:"CPU \u7684\u4e03\u79cd\u5bfb\u5740\u65b9\u5f0f",description:"CPU \u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u4e0d\u4ec5\u4ec5\u4e00\u79cd\uff0c\u591a\u79cd\u65b9\u5f0f\u4e5f\u4e3a\u4e0d\u540c\u6570\u636e\u7684\u83b7\u53d6\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u6548\u7387\u8003\u91cf\uff0c\u4fdd\u8bc1\u4e86\u5bfb\u5740\u6548\u7387\u4e0e\u6307\u4ee4\u7684\u7075\u6d3b\u6027\u3002",date:"2016-05-05T01:53:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u8ba1\u7b97\u673a",permalink:"/tags/\u8ba1\u7b97\u673a"},{label:"CPU",permalink:"/tags/cpu"}],readingTime:8.015,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"CPU \u7684\u4e03\u79cd\u5bfb\u5740\u65b9\u5f0f",date:"2016-05-05T01:53:00.000Z",update:"2016-05-05T01:53:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a","CPU"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u8ba1\u7b97\u673a","CPU"],description:"CPU \u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u4e0d\u4ec5\u4ec5\u4e00\u79cd\uff0c\u591a\u79cd\u65b9\u5f0f\u4e5f\u4e3a\u4e0d\u540c\u6570\u636e\u7684\u83b7\u53d6\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u6548\u7387\u8003\u91cf\uff0c\u4fdd\u8bc1\u4e86\u5bfb\u5740\u6548\u7387\u4e0e\u6307\u4ee4\u7684\u7075\u6d3b\u6027\u3002"},unlisted:!1,prevItem:{title:"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09",permalink:"/computer-technology/web-frontend/dom/dom-bom"},nextItem:{title:"\u5185\u5b58\u7684 3 \u79cd\u5237\u65b0\u65b9\u5f0f",permalink:"/computer-technology/computer/computer-memory-refresh"}},t={authorsImageUrls:[void 0]},h=[{value:"CPU \u5bfb\u5740\u65b9\u5f0f",id:"cpu-\u5bfb\u5740\u65b9\u5f0f",level:2},{value:"\u7acb\u5373(\u6570)\u5bfb\u5740",id:"\u7acb\u5373\u6570\u5bfb\u5740",level:3},{value:"(\u5b58\u50a8\u5668)\u76f4\u63a5\u5bfb\u5740",id:"\u5b58\u50a8\u5668\u76f4\u63a5\u5bfb\u5740",level:3},{value:"\u5bc4\u5b58\u5668(\u76f4\u63a5)\u5bfb\u5740",id:"\u5bc4\u5b58\u5668\u76f4\u63a5\u5bfb\u5740",level:3},{value:"\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740",id:"\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740",level:3},{value:"\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740",id:"\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740",level:3},{value:"\u57fa\u5740\u3001\u53d8\u5740\u5bfb\u5740",id:"\u57fa\u5740\u53d8\u5740\u5bfb\u5740",level:3},{value:"\u57fa\u5740\u3001\u53d8\u5740\u3001\u76f8\u5bf9\u5bfb\u5740",id:"\u57fa\u5740\u53d8\u5740\u76f8\u5bf9\u5bfb\u5740",level:3},{value:"\u5bfb\u5740\u7c7b\u522b",id:"\u5bfb\u5740\u7c7b\u522b",level:2},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}];function o(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-05 01:53:00"})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"CPU \u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u4e0d\u4ec5\u4ec5\u4e00\u79cd\uff0c\u591a\u79cd\u65b9\u5f0f\u4e5f\u4e3a\u4e0d\u540c\u6570\u636e\u7684\u83b7\u53d6\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u6548\u7387\u8003\u91cf\uff0c\u4fdd\u8bc1\u4e86\u5bfb\u5740\u6548\u7387\u4e0e\u6307\u4ee4\u7684\u7075\u6d3b\u6027\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"cpu-\u5bfb\u5740\u65b9\u5f0f",children:"CPU \u5bfb\u5740\u65b9\u5f0f"}),"\n",(0,l.jsx)(e.p,{children:"\u6570\u636e\u4e00\u822c\u5747\u5b58\u50a8\u5728\u5916\u5b58(\u786c\u76d8)\u4e2d\uff0c\u5728\u9700\u8981\u7684\u65f6\u5019\uff0c\u4f1a\u5c06\u6570\u636e\u5148\u4ece\u5916\u5b58\u8bfb\u5165\u5185\u5b58(\u5b58\u50a8\u5668)\u4e2d\uff0c\u7136\u540e CPU \u518d\u76f4\u63a5\u4ece\u5185\u5b58(\u7f13\u5b58)\u4e2d\u83b7\u53d6\u3002\u83b7\u53d6\u7684\u6570\u636e\u6709\u65f6\u5019\u4f1a\u76f4\u63a5\u4f7f\u7528\uff1b\u800c\u6709\u65f6\u5019\u4f1a\u5148\u5b58\u5165 CPU \u5185\u90e8\u5bc4\u5b58\u5668\uff0c\u7a0d\u540e\u518d\u4ece\u5bc4\u5b58\u5668\u4e2d\u83b7\u53d6\u3002\u6240\u4ee5\uff0cCPU \u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u662f\u591a\u6837\u5316\u7684\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u4e3a\u4e86\u4fdd\u8bc1",(0,l.jsx)(e.strong,{children:"\u5bfb\u5740\u6548\u7387"}),"\u548c",(0,l.jsx)(e.strong,{children:"\u6307\u4ee4\u7075\u6d3b\u6027"}),"\u7684\u57fa\u7840\u4e0a\uff0c\u8bbe\u8ba1\u6709 7 \u79cd\u5bfb\u5740\u65b9\u5f0f\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7acb\u5373(\u6570)\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"(\u5b58\u50a8\u5668)\u76f4\u63a5\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u5bc4\u5b58\u5668\uff08\u76f4\u63a5\uff09\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u57fa\u5740\u3001\u53d8\u5740\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u57fa\u5740\u3001\u53d8\u5740\u3001\u76f8\u5bf9\u5bfb\u5740"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u9762\u7ed3\u5408\u65e9\u671f Inter \u7684\u5fae\u5904\u7406\u5668 8088(8086) \u4ee5\u53ca\u6c47\u7f16\u6307\u4ee4\u6765\u4e3e\u4f8b\u8bf4\u660e\u8fd9\u4e03\u79cd\u5bfb\u5740\u65b9\u5f0f\u7684\u5224\u65ad\u65b9\u6cd5\u548c\u539f\u7406\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u7acb\u5373\u6570\u5bfb\u5740",children:"\u7acb\u5373(\u6570)\u5bfb\u5740"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6e90\u64cd\u4f5c\u6570"}),"\u76f4\u63a5\u5305\u542b\u5728\u6307\u4ee4\u4e2d\uff0c\u4e0e\u64cd\u4f5c\u7801\u4e00\u8d77\u653e\u5728\u4ee3\u7801\u6bb5\u533a\u57df\u4e2d\u3002CPU \u8bfb\u51fa\u6307\u4ee4\u64cd\u4f5c\u7801\u540e\uff0c\u5728\u5176\u4e0b\u9762\u7684\u5730\u5740\u4e2d\u53ef\u7acb\u5373\u8bfb\u51fa\u6e90\u64cd\u4f5c\u6570\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u7acb\u5373\u5bfb\u5740\u65b9\u5f0f\u7684\u64cd\u4f5c\u4e5f\u79f0\u4e3a",(0,l.jsx)(e.strong,{children:"\u7acb\u5373\u6570"}),"\u3002\u7acb\u5373\u6570\u53ef\u4ee5\u662f 8 \u4f4d\uff0c\u4e5f\u53ef\u4ee5\u662f 16 \u4f4d\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AL, 05H     \uff088\u4f4d\u7acb\u5373\u6570\uff09\nMOV DX, 8000H   \uff0816\u4f4d\u7acb\u5373\u6570\uff09\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a",(0,l.jsx)(e.strong,{children:"\u6e90\u64cd\u4f5c\u6570"}),"\u624d\u53ef\u4ee5\u662f\u7acb\u5373\u6570\uff0c",(0,l.jsx)(e.strong,{children:"\u76ee\u7684\u64cd\u4f5c\u6570"}),"\u4e3a\u7acb\u5373\u6570\u662f\u8fdd\u6cd5\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV 05H, AL     \uff08\u8fdd\u6cd5\u6307\u4ee4\uff09\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u539f\u56e0\uff1a\u8fd9\u5c31\u548c\u9ad8\u7ea7\u8bed\u8a00\u4e2d\u53d8\u91cf\u8d4b\u503c\u4e00\u6837\uff0c=\u53f7\u5de6\u8fb9\u5fc5\u987b\u662f\u53d8\u91cf\u540d\uff0c\u800c\u4e0d\u80fd\u662f\u5e38\u6570\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7acb\u5373\u6570\u5bfb\u5740\u65b9\u5f0f\u901a\u5e38\u7528\u6765\u7ed9\u5bc4\u5b58\u5668\u8d4b\u521d\u503c\u3002"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5b58\u50a8\u5668\u76f4\u63a5\u5bfb\u5740",children:"(\u5b58\u50a8\u5668)\u76f4\u63a5\u5bfb\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u64cd\u4f5c\u6570\u5b58\u653e\u5728\u5b58\u50a8\u5668(\u5185\u5b58)\u4e2d\uff0c\u5728\u6307\u4ee4\u7ed9\u51fa\u7684\u662f\u8be5\u64cd\u4f5c\u6570\u7684\u6709\u6548\u5730\u5740(\u6bb5\u5185\u504f\u79fb\u5730\u5740)\u3002\u64cd\u4f5c\u6570\u901a\u5e38\u5b58\u653e\u5728\u6570\u636e\u6bb5\u4e2d\uff0c\u9ed8\u8ba4\u7684\u6bb5\u5730\u5740\u5b58\u653e\u5728 D \u6bb5\u5bc4\u5b58\u5668\u4e2d\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u64cd\u4f5c\u6570\u7684\u5185\u5b58\u5730\u5740\uff1a",(0,l.jsx)(e.strong,{children:"DS \u6bb5\u5730\u5740 \xd716(\u5de6\u79fb 4 \u4f4d)+16 \u4f4d\u504f\u79fb\u5730\u5740=20 \u4f4d\u5185\u5b58\u5730\u5740"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV BX, [2000H]    (\u5047\u8bbe\u6bb5\u5730\u5740 DS=1000H)\n\u5185\u5b58\u5730\u5740\uff1a1000H\xd716+2000H=12000H\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u6bb5\u5730\u5740\u4e5f\u6709\u53ef\u80fd\u4e0d\u5728 DS \u4e2d\uff0c\u6b64\u65f6\u6307\u4ee4\u4e2d\u4f1a\u7ed9\u51fa\u5b58\u653e\u6bb5\u5730\u5740\u7684\u5bc4\u5b58\u5668\u53f7(\u6bb5\u8d85\u8d8a\u524d\u7f00\u4e0d\u53ef\u7701\u7565)\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV ES:[2000H], AX  \uff08\u6bb5\u5730\u5740\u5b58\u653e\u5728ES\u5bc4\u5b58\u5668\u4e2d\uff09\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5bc4\u5b58\u5668\u76f4\u63a5\u5bfb\u5740",children:"\u5bc4\u5b58\u5668(\u76f4\u63a5)\u5bfb\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u64cd\u4f5c\u6570\u5b58\u653e\u5728 CPU \u5185\u90e8\u5bc4\u5b58\u5668\u4e2d\uff0c\u4f8b\u5982 AX\u3001BX\u3001CX\u3001DX \u7b49\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV DS, AX\nMOV AL, BL\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u7531\u4e8e AX \u662f\u7d2f\u52a0\u5668\uff0c\u5982\u679c\u5c06\u7ed3\u679c\u5b58\u653e\u5728 AX \u4e2d\uff0c\u5373\u5c06 AX \u4f5c\u4e3a\u76ee\u7684\u64cd\u4f5c\u6570\u5b58\u653e\u4f4d\u7f6e\uff0c\u901a\u5e38\u6307\u4ee4\u7684\u6267\u884c\u65f6\u95f4\u8981\u77ed\u4e00\u4e9b\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5bc4\u5b58\u5668\u5bfb\u5740\u65b9\u5f0f\uff0c\u51cf\u5c11\u4e86\u8bfb/\u5199\u5b58\u50a8\u5668\u5355\u5143\u7684\u6b21\u6570\uff0c\u6240\u4ee5\uff0c",(0,l.jsx)(e.strong,{children:"\u4f7f\u7528\u5bc4\u5b58\u5668\u5bfb\u5740\u65b9\u5f0f\u7684\u6307\u4ee4\u4e00\u822c\u6267\u884c\u901f\u5ea6\u6bd4\u8f83\u5feb\u3002"})]}),"\n",(0,l.jsx)(e.h3,{id:"\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740",children:"\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u64cd\u4f5c\u6570\u5b58\u653e\u5728\u5b58\u50a8\u5668(\u5185\u5b58)\u4e2d\uff0c\u6709\u6548\u5730\u5740(\u6bb5\u5185\u504f\u79fb\u5730\u5740)\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 SI\u3001DI\u3001BX\u3001BP \u4e4b\u4e00\u4e2d\uff0c\u7531\u4e8e\u6bb5\u5730\u5740\u53ef\u5b58\u653e\u5728 DS \u548c SS \u4e2d\u53c8\u5206\u4e3a\u4e24\u79cd\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u82e5\u6bb5\u5185\u504f\u79fb\u5730\u5740\u5b58\u653e\u4e8e SI\u3001DI\u3001BX \u4e4b\u4e00\u4e2d\uff0c\u9ed8\u8ba4\u6bb5\u5730\u5740\u5b58\u653e\u5728 DS \u5bc4\u5b58\u5668\u4e2d\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"exp\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AX, [SI]\nMOV AX, [DI]\nMOV AX, [BX]\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u64cd\u4f5c\u6570\u7684\u5185\u5b58\u5730\u5740\uff1a",(0,l.jsx)(e.strong,{children:"DS \u6bb5\u5730\u5740 \xd716(\u5de6\u79fb 4 \u4f4d)+[SI][di][BX]\u504f\u79fb\u5730\u5740=20 \u4f4d\u5185\u5b58\u5730\u5740\u3002"})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u82e5\u6bb5\u5185\u504f\u79fb\u5730\u5740\u5b58\u653e\u4e8e BP \u4e2d\uff0c\u9ed8\u8ba4\u6bb5\u5730\u5740\u5b58\u653e\u5728\u5bc4\u5b58\u5668 SS(\u5806\u6808\u6bb5)\u4e2d\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"exp\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV BX, [BP]\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u64cd\u4f5c\u6570\u7684\u5185\u5b58\u5730\u5740\uff1a",(0,l.jsx)(e.strong,{children:"SS \u6bb5\u5730\u5740 \xd716(\u5de6\u79fb 4 \u4f4d)+[BP]\u504f\u79fb\u5730\u5740=20 \u4f4d\u5185\u5b58\u5730\u5740\u3002"})]}),"\n",(0,l.jsx)(e.h3,{id:"\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740",children:"\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u64cd\u4f5c\u6570\u5b58\u653e\u5728\u5b58\u50a8\u5668(\u5185\u5b58)\u4e2d\uff0c\u6709\u6548\u5730\u5740(\u6bb5\u5185\u504f\u79fb\u5730\u5740)\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 SI\u3001DI\u3001BX\u3001BP \u4e4b\u4e00\u4e2d\uff0c\u7531\u4e8e\u6bb5\u5730\u5740\u5b58\u653e\u5728 DS\u3001SS \u4e4b\u4e00\u4e2d\uff0c\u6240\u4ee5\u4e5f\u53ef\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e0d\u518d\u7ec6\u8bf4\uff0c\u7c7b\u6bd4\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740\u65b9\u5f0f\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76f8\u6bd4\u4e8e\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740\u65b9\u5f0f\uff0c\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u591a\u4e86\u4e00\u4e2a 8 \u4f4d\u6216 16 \u4f4d\u7684\u5e26\u7b26\u53f7\u5e38\u6570\u504f\u79fb\u91cf\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AL, [SI-200H]\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u64cd\u4f5c\u6570\u7684\u5185\u5b58\u5730\u5740\uff1a",(0,l.jsx)(e.strong,{children:"SS \u6216 DS \u6bb5\u5730\u5740 \xd716(\u5de6\u79fb 4 \u4f4d)+[BP]\u6216[SI][di][BX]\u504f\u79fb\u5730\u5740+\u5e38\u6570\u504f\u79fb\u91cf=20 \u4f4d\u5185\u5b58\u5730\u5740\u3002"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AL, [SI-2]    (\u5047\u8bbe DS=3000H,SI=1000H)\n\u5185\u5b58\u5730\u5740\uff1a3000H\xd716+1000H-2=30FFEH\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u57fa\u5740\u53d8\u5740\u5bfb\u5740",children:"\u57fa\u5740\u3001\u53d8\u5740\u5bfb\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u64cd\u4f5c\u6570\u5b58\u653e\u5728\u5b58\u50a8\u5668(\u5185\u5b58)\u4e2d\uff0c\u57fa\u5740\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 BX\u3001BP \u4e4b\u4e00\u4e2d\uff0c\u53d8\u5740\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 SI\u3001DI \u4e4b\u4e00\u4e2d\uff0c\u7531\u4e8e\u6bb5\u5730\u5740\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 SS\u3001DS \u4e4b\u4e00\u4e2d\uff0c\u6240\u4ee5\u4e5f\u53ef\u5206\u4e3a\u4e24\u7c7b\uff0c\u7c7b\u6bd4\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740\u65b9\u5f0f\u5373\u53ef\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u64cd\u4f5c\u6570\u5185\u5b58\u5730\u5740\uff1a",(0,l.jsx)(e.strong,{children:"SS \u6216 DS \u6bb5\u5730\u5740 \xd716(\u5de6\u79fb 4 \u4f4d)+[BP]\u6216[BX]\u57fa\u5740+[SI][di]\u53d8\u5740=20 \u4f4d\u5185\u5b58\u5730\u5740"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AL, [BP][DI]    (\u5047\u8bbe SS=8000H,BP=1000H,DI=0500H)\n\u5185\u5b58\u5730\u5740\uff1a8000H\xd716+1000H+0500H=81500H\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u57fa\u5740\u53d8\u5740\u76f8\u5bf9\u5bfb\u5740",children:"\u57fa\u5740\u3001\u53d8\u5740\u3001\u76f8\u5bf9\u5bfb\u5740"}),"\n",(0,l.jsx)(e.p,{children:"\u64cd\u4f5c\u6570\u5b58\u653e\u5728\u5b58\u50a8\u5668(\u5185\u5b58)\u4e2d\uff0c\u57fa\u5740\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 BX\u3001BP \u4e4b\u4e00\u4e2d\uff0c\u53d8\u5740\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 SI\u3001DI \u4e4b\u4e00\u4e2d\uff0c\u7531\u4e8e\u6bb5\u5730\u5740\u5b58\u653e\u5728\u5185\u90e8\u5bc4\u5b58\u5668 SS\u3001DS \u4e4b\u4e00\u4e2d\uff0c\u6240\u4ee5\u4e5f\u53ef\u5206\u4e3a\u4e24\u7c7b\uff0c\u7c7b\u6bd4\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740\u65b9\u5f0f\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76f8\u6bd4\u4e8e\u57fa\u5740\u3001\u53d8\u5740\u5bfb\u5740\u65b9\u5f0f\uff0c\u57fa\u5740\u3001\u53d8\u5740\u3001\u76f8\u5bf9\u5bfb\u5740\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u591a\u4e86\u4e00\u4e2a 8 \u4f4d\u6216 16 \u4f4d\u7684\u5e26\u7b26\u53f7\u5e38\u6570\u504f\u79fb\u91cf\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AL, 1000H[BP][DI]\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u64cd\u4f5c\u6570\u5185\u5b58\u5730\u5740\uff1a",(0,l.jsx)(e.strong,{children:"SS \u6216 DS \u6bb5\u5730\u5740 \xd716(\u5de6\u79fb 4 \u4f4d)+[BP]\u6216[BX]\u57fa\u5740+[SI][di]\u53d8\u5740+\u5e38\u6570\u504f\u79fb\u91cf=20 \u4f4d\u5185\u5b58\u5730\u5740"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MOV AL, 0010H[BX][SI]  (\u5047\u8bbe DS=6000H,BX=5000H,SI=0300H)\n\u5185\u5b58\u5730\u5740\uff1a6000H\xd716+5000H+0300H+0010H=65310H\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5bfb\u5740\u7c7b\u522b",children:"\u5bfb\u5740\u7c7b\u522b"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u4e03\u79cd CPU \u5bfb\u5740\u65b9\u5f0f\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e\u64cd\u4f5c\u6570\u662f\u5426\u5728\u5b58\u50a8\u5668(\u5185\u5b58)\u4e2d\u5206\u4e3a\u4e24\u7c7b\uff1a",(0,l.jsx)(e.strong,{children:"\u5185\u5b58\u5bfb\u5740\u65b9\u5f0f"}),"\u548c",(0,l.jsx)(e.strong,{children:"\u975e\u5185\u5b58\u5bfb\u5740\u65b9\u5f0f"}),"\u3002\u5176\u4e2d\u5185\u5b58\u5bfb\u5740\u65b9\u5f0f\u5305\u542b\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"(\u5b58\u50a8\u5668)\u76f4\u63a5\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u5bc4\u5b58\u5668\u95f4\u63a5\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u5bc4\u5b58\u5668\u76f8\u5bf9\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u57fa\u5740\u3001\u53d8\u5740\u5bfb\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u57fa\u5740\u3001\u53d8\u5740\u3001\u76f8\u5bf9\u5bfb\u5740"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u5e38\u6765\u8bf4\uff0c\u8981\u6839\u636e\u6c47\u7f16\u6307\u4ee4\u5224\u65ad\u5bfb\u5740\u65b9\u5f0f\uff0c\u9700\u8981\u77e5\u9053\u76ee\u6807 CPU \u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca CPU \u5185\u90e8\u5bc4\u5b58\u5668\u7684\u8bbe\u8ba1\u5e03\u5c40\u662f\u4ec0\u4e48\uff0c\u8fd9\u6837\u624d\u80fd\u6b63\u786e\u5224\u65ad\u51fa\u5bfb\u5740\u65b9\u5f0f\u3002\u4ee5\u4e0a\u7684\u4e03\u79cd\u5bfb\u5740\u65b9\u5f0f\u8bf4\u660e\u5168\u90e8\u662f\u57fa\u4e8e Inter \u7684 8086(8088)\u5904\u7406\u5668\u7684\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>c});var l=r(67294);const s={},i=l.createContext(s);function c(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);