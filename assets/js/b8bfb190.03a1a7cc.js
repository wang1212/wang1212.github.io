"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[72675],{45055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var c=s(85893),r=s(11151);const i={title:"DOM-\u52a0\u8f7d JavaScript",date:new Date("2016-05-24T22:49:00.000Z"),update:new Date("2016-05-24T22:49:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","JavaScript"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","JavaScript"],description:"\u9875\u9762\u7684\u52a8\u6001\u4ea4\u4e92\u79bb\u4e0d\u5f00 Javascript\uff0c\u5c06 js \u811a\u672c\u5f15\u5165\u9875\u9762\u65f6\u4f1a\u963b\u585e\u9875\u9762\u52a0\u8f7d\uff0c\u5728\u67d0\u4e9b\u65f6\u5019\u6211\u4eec\u5219\u53ef\u4ee5\u9009\u62e9\u5f02\u6b65\u52a0\u8f7d js \u811a\u672c\u3002"},t=void 0,l={permalink:"/computer-technology/web-frontend/dom/dom-js",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/dom/dom-js.md",source:"@site/blog/computer-technology/web-frontend/dom/dom-js.md",title:"DOM-\u52a0\u8f7d JavaScript",description:"\u9875\u9762\u7684\u52a8\u6001\u4ea4\u4e92\u79bb\u4e0d\u5f00 Javascript\uff0c\u5c06 js \u811a\u672c\u5f15\u5165\u9875\u9762\u65f6\u4f1a\u963b\u585e\u9875\u9762\u52a0\u8f7d\uff0c\u5728\u67d0\u4e9b\u65f6\u5019\u6211\u4eec\u5219\u53ef\u4ee5\u9009\u62e9\u5f02\u6b65\u52a0\u8f7d js \u811a\u672c\u3002",date:"2016-05-24T22:49:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"DOM",permalink:"/tags/dom"},{label:"JavaScript",permalink:"/tags/java-script"}],readingTime:5.84,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"DOM-\u52a0\u8f7d JavaScript",date:"2016-05-24T22:49:00.000Z",update:"2016-05-24T22:49:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","JavaScript"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","DOM","JavaScript"],description:"\u9875\u9762\u7684\u52a8\u6001\u4ea4\u4e92\u79bb\u4e0d\u5f00 Javascript\uff0c\u5c06 js \u811a\u672c\u5f15\u5165\u9875\u9762\u65f6\u4f1a\u963b\u585e\u9875\u9762\u52a0\u8f7d\uff0c\u5728\u67d0\u4e9b\u65f6\u5019\u6211\u4eec\u5219\u53ef\u4ee5\u9009\u62e9\u5f02\u6b65\u52a0\u8f7d js \u811a\u672c\u3002"},unlisted:!1,prevItem:{title:"Linux-\u57fa\u7840",permalink:"/computer-technology/linux/linux-base"},nextItem:{title:"DOM-\u6587\u672c\u8282\u70b9",permalink:"/computer-technology/web-frontend/dom/dom-textnode"}},d={authorsImageUrls:[void 0]},o=[{value:"\u5f15\u5165 js \u4ee3\u7801",id:"\u5f15\u5165-js-\u4ee3\u7801",level:2},{value:"\u5916\u90e8\u811a\u672c\u6587\u4ef6\uff08\u5141\u8bb8\u8de8\u57df\uff09",id:"\u5916\u90e8\u811a\u672c\u6587\u4ef6\u5141\u8bb8\u8de8\u57df",level:3},{value:"\u5185\u8054\u811a\u672c",id:"\u5185\u8054\u811a\u672c",level:3},{value:"\u4e8b\u4ef6\u5c5e\u6027",id:"\u4e8b\u4ef6\u5c5e\u6027",level:3},{value:"JavaScript \u534f\u8bae",id:"javascript-\u534f\u8bae",level:3},{value:"\u52a0\u8f7d\u5916\u90e8 js \u6587\u4ef6",id:"\u52a0\u8f7d\u5916\u90e8-js-\u6587\u4ef6",level:2},{value:"\u5ef6\u8fdf\u52a0\u8f7d",id:"\u5ef6\u8fdf\u52a0\u8f7d",level:3},{value:"\u5f02\u6b65\u52a0\u8f7d",id:"\u5f02\u6b65\u52a0\u8f7d",level:3},{value:"\u52a8\u6001\u5f15\u5165\uff0c\u5f02\u6b65\u52a0\u8f7d",id:"\u52a8\u6001\u5f15\u5165\u5f02\u6b65\u52a0\u8f7d",level:2},{value:"\u83b7\u53d6\u6240\u6709 script \u8282\u70b9",id:"\u83b7\u53d6\u6240\u6709-script-\u8282\u70b9",level:2},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2016-05-24 22:49:00"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u9875\u9762\u7684\u52a8\u6001\u4ea4\u4e92\u79bb\u4e0d\u5f00 Javascript\uff0c\u5c06 js \u811a\u672c\u5f15\u5165\u9875\u9762\u65f6\u4f1a\u963b\u585e\u9875\u9762\u52a0\u8f7d\uff0c\u5728\u67d0\u4e9b\u65f6\u5019\u6211\u4eec\u5219\u53ef\u4ee5\u9009\u62e9\u5f02\u6b65\u52a0\u8f7d js \u811a\u672c\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u5f15\u5165-js-\u4ee3\u7801",children:"\u5f15\u5165 js \u4ee3\u7801"}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u5e38\u6211\u4eec\u4f1a\u5c06 JavaScript \u4ee3\u7801\u5199\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u9875\u9762\u6574\u6d01\u3001\u7ed3\u6784\u66f4\u6e05\u6670\uff0c\u9875\u9762\u66f4\u5c0f\u52a0\u8f7d\u901f\u5ea6\u66f4\u5feb\uff0c\u540c\u65f6\u4e5f\u6613\u7ef4\u62a4\u3002\u5b9e\u9645\u4e0a\u5728\u9875\u9762\u4e2d\u5f15\u5165 js \u4ee3\u7801\u7684\u65b9\u6cd5\u6709\u591a\u79cd\uff0c\u6211\u4eec\u6309\u9700\u9009\u62e9\u5373\u53ef\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u5916\u90e8\u811a\u672c\u6587\u4ef6\u5141\u8bb8\u8de8\u57df",children:"\u5916\u90e8\u811a\u672c\u6587\u4ef6\uff08\u5141\u8bb8\u8de8\u57df\uff09"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u79cd\u65b9\u5f0f\u662f\u6700\u5e38\u7528\u7684\uff0c\u4f46\u8981\u6ce8\u610f\u7684\u662f ",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u5185\u5982\u679c\u518d\u5199 js \u4ee3\u7801\u4f1a\u88ab\u76f4\u63a5\u5ffd\u7565\u6389\uff08\u4e0d\u6267\u884c\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'<script src="./js/main.js"><\/script>\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u5185\u8054\u811a\u672c",children:"\u5185\u8054\u811a\u672c"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u65b9\u5f0f\u4f1a\u751f\u6210\u4e00\u4e2a\u6587\u672c\u8282\u70b9\uff0c\u5982\u679c\u6211\u4eec\u901a\u8fc7\u8282\u70b9\u7684 ",(0,c.jsx)(n.code,{children:"innerHTML"})," \u548c ",(0,c.jsx)(n.code,{children:"textContent"})," \u5c5e\u6027\u6539\u53d8\u5176\u6587\u672c\u5185\u5bb9\uff08\u4ee3\u7801\uff09\uff0c\u5e76\u4e0d\u4f1a\u6267\u884c\u65b0\u7684\u4ee3\u7801\u3002\u6b64\u79cd\u65b9\u5f0f\u4e5f\u8f83\u5e38\u7528\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"<script>\n    alert(1);\n<\/script>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u4e8b\u4ef6\u5c5e\u6027",children:"\u4e8b\u4ef6\u5c5e\u6027"}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728\u4e8b\u4ef6\u5c5e\u6027\u7684\u503c\u4e2d\u5199\u5165\u4e00\u4e2a\u65b9\u6cd5\u5f15\u7528\uff0c\u5728\u4e8b\u4ef6\u89e6\u53d1\u65f6\u5219\u4f1a\u6267\u884c\u8be5\u65b9\u6cd5\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u63a8\u8350\u4f7f\u7528\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"<body>\n    <div onclick=\"show()\"></div>\n    <script>\n        function show() { ... }\n        // \u4f5c\u7528\u7b49\u4ef7\u5f62\u5f0f\u4e3a\u4e0b\n        var obj = document.querySelector('div');\n        obj.onclick = show;\n    <\/script>\n</body>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"javascript-\u534f\u8bae",children:"JavaScript \u534f\u8bae"}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728\u5143\u7d20\u7684\u5c5e\u6027\u503c\u4e2d\u4f7f\u7528 JavaScript \u534f\u8bae\u6765\u6267\u884c\u76f8\u5e94\u4ee3\u7801\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u662f\u4e0d\u63a8\u8350\u4f7f\u7528\u7684\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'<a href="javascript: false">Link</a>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u52a0\u8f7d\u5916\u90e8-js-\u6587\u4ef6",children:"\u52a0\u8f7d\u5916\u90e8 js \u6587\u4ef6"}),"\n",(0,c.jsxs)(n.p,{children:["\u9875\u9762\u5728\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\uff0c\u9ed8\u8ba4\u662f\u540c\u6b65\u52a0\u8f7d js \u7684\uff0c\u5982\u679c\u9047\u5230 ",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u5219\u4f1a\u505c\u6b62\u9875\u9762\u7684\u4e00\u5207\u89e3\u6790\u884c\u4e3a\uff0c\u5f00\u59cb\uff08\u4e0b\u8f7d\uff09\u6267\u884c\u76f8\u5e94\u7684 JavaScript \u4ee3\u7801\uff0c\u76f4\u81f3\u6267\u884c\u5b8c\u6bd5\u3002\u8fd9\u4f1a\u9020\u6210\u9875\u9762\u963b\u585e\uff0c\u9875\u9762\u7684\u663e\u793a\u6548\u679c\u53ef\u80fd\u4f1a\u56e0\u6b64\u53d7\u5230\u5f71\u54cd\u3002",(0,c.jsxs)(n.strong,{children:["\u6240\u4ee5\u8bf4\uff0c\u6211\u4eec\u5e94\u8be5\u5c3d\u53ef\u80fd\u5c06\u4e0d\u9700\u8981\u7acb\u5373\u6267\u884c\u7684 js \u811a\u672c\u653e\u5728 ",(0,c.jsx)(n.code,{children:"<body>"})," \u6807\u7b7e\u7684\u5c3e\u90e8\u52a0\u8f7d\uff0c\u8fd9\u65f6\u5019\u6240\u6709\u7684\u9875\u9762\u5143\u7d20\u5df2\u52a0\u8f7d\u5b8c\u6bd5\uff0c\u5e76\u4e0d\u4f1a\u5bf9\u9875\u9762\u4ea7\u751f\u8fc7\u591a\u5f71\u54cd\u3002"]})]}),"\n",(0,c.jsx)(n.h3,{id:"\u5ef6\u8fdf\u52a0\u8f7d",children:"\u5ef6\u8fdf\u52a0\u8f7d"}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u6211\u4eec\u7684 js \u6587\u4ef6\u53ef\u80fd\u5f88\u5927\uff0c\u5373\u4fbf\u662f\u653e\u5728 ",(0,c.jsx)(n.code,{children:"<body>"})," \u5c3e\u90e8\u4e5f\u52a0\u8f7d\u7684\u5f88\u6162\uff0c\u6216\u8005\u8981\u653e\u7684\u66f4\u9760\u524d\u4e00\u70b9\uff0c\u8fd9\u6837\u9875\u9762\u7684\u663e\u793a\u6548\u679c\u4f1a\u88ab\u4e25\u91cd\u5f71\u54cd\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5c06\u4e00\u4e9b\u4e0d\u662f\u5f88\u91cd\u8981\u7684 js \u6587\u4ef6\u5ef6\u8fdf\u5230 ",(0,c.jsx)(n.code,{children:"<html>"})," \u6807\u7b7e\u5173\u95ed\u524d\u518d\u8fdb\u884c\u4e0b\u8f7d\u3001\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"defer"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"exp\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'\x3c!-- \u4e00\u76f4\u5ef6\u8fdf\u5230 </html> \u524d\u624d\u5f00\u59cb\u52a0\u8f7d --\x3e\n<script defer src="./js/main.js"><\/script>\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5ef6\u8fdf\u591a\u4e2a\u811a\u672c\u7684\u52a0\u8f7d\uff0c\u4f46\u5e76\u4e0d\u662f\u6240\u6709\u7684\u6d4f\u89c8\u5668\u6700\u540e\u90fd\u6309\u987a\u5e8f\u5e76\u4e14\u5728 ",(0,c.jsx)(n.code,{children:"DOMContentLoaded"})," \u4e8b\u4ef6\u524d\u52a0\u8f7d\u5b83\u4eec\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5f02\u6b65\u52a0\u8f7d",children:"\u5f02\u6b65\u52a0\u8f7d"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e5f\u8bb8\u6211\u4eec\u5e76\u4e0d\u60f3\u5c06 js \u6587\u4ef6\u5ef6\u8fdf\u5230 ",(0,c.jsx)(n.code,{children:"</html>"})," \u6807\u7b7e\u5173\u95ed\u524d\u624d\u8fdb\u884c\u52a0\u8f7d\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5f02\u6b65\u52a0\u8f7d\u6765\u66f4\u63d0\u524d\u4e00\u4e9b\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"async"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"exp\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'\x3c!-- \u5f00\u59cb\u52a0\u8f7d\uff0c\u4f46\u4e0d\u963b\u585e\u9875\u9762 --\x3e\n<script async src="./js/main.js"><\/script>\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5f02\u6b65\u52a0\u8f7d\u4f1a\u4e00\u5f00\u59cb\u5c31\u8fdb\u884c js \u6587\u4ef6\u7684\u4e0b\u8f7d\uff0c\u4f46\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u9875\u9762\u7684\u89e3\u6790\uff0c\u81f3\u4e8e\u4f55\u65f6\u52a0\u8f7d\u5b8c\u6211\u4eec\u4e5f\u4e0d\u77e5\u9053\uff0c\u4f46\u662f\u4e00\u52a0\u8f7d\u5b8c\u5c31\u4f1a\u6267\u884c\u76f8\u5e94\u4ee3\u7801\uff0c\u6b64\u65f6\u4e5f\u4e0d\u4f1a\u963b\u585e\u9875\u9762\u7684\u89e3\u6790\u3002\u540c\u6837\u5730\uff0c\u6211\u4eec\u53ef\u4ee5\u5f02\u6b65\u52a0\u8f7d\u591a\u4e2a\u6587\u4ef6\uff0c\u4f46\u5fc5\u5b9a\u4e0d\u4f1a\u6309\u987a\u5e8f\u8fdb\u884c\u52a0\u8f7d\uff0c\u8fd9\u662f\u6211\u4eec\u8981\u6ce8\u610f\u7684\u3002\u800c\u4e14\uff0cIE10 \u624d\u5f00\u59cb\u652f\u6301\u8be5\u5c5e\u6027\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'\x3c!-- \u6d4b\u8bd5\u52a0\u8f7d\u5b8c\u6bd5\u987a\u5e8f --\x3e\n<script async onload="console.log(\'1 \u52a0\u8f7d\u5b8c\u6bd5\')" src="./js/1.js"><\/script>\n<script async onload="console.log(\'2 \u52a0\u8f7d\u5b8c\u6bd5\')" src="./js/2.js"><\/script>\n<script async onload="console.log(\'3 \u52a0\u8f7d\u5b8c\u6bd5\')" src="./js/3.js"><\/script>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u52a8\u6001\u5f15\u5165\u5f02\u6b65\u52a0\u8f7d",children:"\u52a8\u6001\u5f15\u5165\uff0c\u5f02\u6b65\u52a0\u8f7d"}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"async"})," \u5c5e\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u52a8\u6001\u521b\u5efa ",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u5e76\u63d2\u5165 DOM \u6811\uff0c\u6b64\u65f6\u5f15\u5165\u7684 js \u6587\u4ef6\u4e5f\u4f1a\u8fdb\u884c\u5f02\u6b65\u52a0\u8f7d\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"<script>\n    // \u52a8\u6001\u5f15\u5165\uff0c\u5f02\u6b65\u52a0\u8f7d\uff0c\u53ef\u8de8\u57df\n    var nScript = document.createElement('script');\n    nScript.src = \"http://.../js/1.js\";\n    document.body.appendChild(nScript);\n<\/script>\n"})}),"\n",(0,c.jsx)(n.p,{children:"**\u8be5\u65b9\u6cd5\u53ef\u4ee5\u89e3\u51b3\u8de8\u57df\u8bbf\u95ee\u8d44\u6e90\u7684\u95ee\u9898\u3002**\u540c\u6837\u7684\uff0c\u591a\u4e2a\u6587\u4ef6\u52a8\u6001\u5f15\u5165\u5747\u4f1a\u8fdb\u884c\u5f02\u6b65\u52a0\u8f7d\uff0c\u4f46\u4e5f\u4e0d\u4f1a\u6309\u987a\u5e8f\u52a0\u8f7d\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u83b7\u53d6\u6240\u6709-script-\u8282\u70b9",children:"\u83b7\u53d6\u6240\u6709 script \u8282\u70b9"}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u9884\u5148\u8bbe\u7f6e\u7684\u5c5e\u6027\u83b7\u53d6\u9875\u9762\u4e2d\u6240\u6709 ",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u7684\u8282\u70b9\u96c6\u5408\uff0c\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u904d\u5386\u6253\u5370\u4e00\u4e9b\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"document.scripts"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"exp\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"<script>\n    // \u904d\u5386\u5e76\u6253\u5370\u51fa src\n    Array.prototype.slice.call(document.scripts).forEach(function(e){\n        console.log(e, e.src);\n    })\n<\/script>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u83b7\u53d6\u7684\u5e76\u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u800c\u662f\u4e00\u4e2a\u8282\u70b9\u96c6\u5408\uff0c\u8981\u4f7f\u7528\u6570\u7ec4\u7684 ",(0,c.jsx)(n.code,{children:"forEach()"})," \u65b9\u6cd5\u6211\u4eec\u5c31\u5148\u5c06\u5176\u8f6c\u6362\u6210\u4e00\u4e2a\u6570\u7ec4\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,c.jsx)(n.code,{children:"<script>"})," \u6807\u7b7e\u7684\u540c\u6b65\u52a0\u8f7d\u7279\u6027\uff0c\u82e5\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u6709\u8fdb\u884c DOM \u64cd\u4f5c\uff0c\u90a3\u4e48\u653e\u5728 ",(0,c.jsx)(n.code,{children:"<head>"})," \u4e2d\u5c06\u4f1a\u6267\u884c\u5931\u8d25\uff0c\u56e0\u4e3a\u6b64\u65f6 ",(0,c.jsx)(n.code,{children:"<body>"})," \u4e2d\u8981\u64cd\u4f5c\u7684\u5143\u7d20\u8fd8\u672a\u89e3\u6790\u51fa\u6765\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u300aDOM \u542f\u8499\u300b\uff0cCody Lindley\uff0c\u9648\u517b\u5251 \u8bd1"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var c=s(67294);const r={},i=c.createContext(r);function t(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);