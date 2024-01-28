"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[93448],{13735:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=o(85893),t=o(11151);const r={title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",date:new Date("2023-05-28T23:07:00.000Z"),update:new Date("2023-05-28T23:07:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"},l=void 0,i={permalink:"/2023/05/28/computer-technology/nodejs/nodejs-loader",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/nodejs/2023-05-28-nodejs-loader.md",source:"@site/blog/computer-technology/nodejs/2023-05-28-nodejs-loader.md",title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002",date:"2023-05-28T23:07:00.000Z",formattedDate:"2023\u5e745\u670828\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Node.js",permalink:"/tags/node-js"}],readingTime:4.285,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u901a\u8fc7 Node.js \u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801",date:"2023-05-28T23:07:00.000Z",update:"2023-05-28T23:07:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js"],description:"\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d `--experimental-specifier-resolution` \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"},unlisted:!1,prevItem:{title:"\u7ed3\u5408 AI \u6280\u672f\u6784\u5efa\u53ef\u89c6\u5316\u77e5\u8bc6\u5e93\u7684\u5c1d\u8bd5",permalink:"/2023/06/19/computer-technology/ai/ai-knowledge-base"},nextItem:{title:"WebGPU \u2013 Web \u5e73\u53f0\u7684\u901a\u7528\u8ba1\u7b97 API",permalink:"/computer-technology/web-frontend/api/webgpu-gpgpu"}},d={authorsImageUrls:[void 0]},a=[{value:"CommonJS\uff1a\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684",id:"commonjs\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684",level:3},{value:"ES Modules\uff1a\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684",id:"es-modules\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684",level:3},{value:"<code>--experimental-specifier-resolution=node</code>",id:"--experimental-specifier-resolutionnode",level:3},{value:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668",id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2023-05-28 23:07:00"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9274\u4e8e Node.js \u7684\u8bf8\u591a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c\u76ee\u524d\u6587\u4ef6\u6709\u591a\u79cd\u6269\u5c55\u540d\uff0c\u5728\u6587\u4ef6\u5f15\u7528\u65f6\u5f88\u591a\u5f00\u53d1\u8005\u4e60\u60ef\u4e0d\u5199\u6269\u5c55\u540d\uff0c\u8fd9\u5728 ES Modules \u4ee3\u7801\u4e2d\u9700\u8981\u989d\u5916\u7684\u547d\u4ee4\u884c flag \u624d\u80fd\u5b9e\u73b0\u3002\u4f46\u5728 Node.js v19 \u7684\u7248\u672c\u53d1\u5e03\u540e\uff0c\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"--experimental-specifier-resolution"})," \u547d\u4ee4\u884c flag \u88ab\u5220\u9664\uff0c\u4e3a\u4e86\u80fd\u7ee7\u7eed\u8fd0\u884c\u65e0\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\uff0c\u5c31\u9700\u8981\u501f\u52a9\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d\uff0cNode.js \u6587\u4ef6\u7684\u6269\u5c55\u540d\u5c31\u6709\u6570\u79cd\uff0c\u6bd4\u5982\u5e38\u89c1\u7684 ",(0,s.jsx)(n.code,{children:".js"}),"\u3001",(0,s.jsx)(n.code,{children:".mjs"}),"\u3001",(0,s.jsx)(n.code,{children:".cjs"}),"\u3001",(0,s.jsx)(n.code,{children:".node"}),"\uff0c\u4e4b\u6240\u4ee5\u6709\u8fd9\u4e9b\u4e1c\u897f\u5b58\u5728\uff0c\u662f\u56e0\u4e3a\u4e86 Node.js \u4ece\u6700\u521d\u7684\u7248\u672c\u53d1\u5c55\u5230\u73b0\u5728\uff0c\u5df2\u5386\u7ecf\u4e86\u6570\u4e2a\u5927\u7248\u672c\u7684\u66f4\u65b0\uff0c\u6709\u5f88\u6c89\u91cd\u7684\u5386\u53f2\u5305\u88b1\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"commonjs\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684",children:"CommonJS\uff1a\u6269\u5c55\u540d\u4e0d\u662f\u5fc5\u987b\u7684"}),"\n",(0,s.jsxs)(n.p,{children:["\u76f8\u4fe1\u5f88\u591a\u4f7f\u7528 Node.js \u7684\u5f00\u53d1\u8005\u76ee\u524d\u719f\u6089\u7684\u5e94\u8be5\u662f CommonJS \u98ce\u683c\uff0c\u5176\u4e2d",(0,s.jsx)(n.strong,{children:"\u4e0d\u9700\u8981\u5f3a\u5236\u5728\u4ee3\u7801\u4e2d\u5199\u6587\u4ef6\u7684\u6269\u5c55\u540d"}),"\uff0c\u8fd9\u5b9e\u9645\u4e0a\u548c\u5176\u5b83\u540e\u7aef\u8bed\u8a00\u4f53\u9a8c\u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const foo = require('./foo.js'); // work!\nconst foo = require('./foo'); // work too!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"es-modules\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684",children:"ES Modules\uff1a\u6269\u5c55\u540d\u662f\u5fc5\u987b\u7684"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u73b0\u5982\u4eca Node.js \u5df2\u5168\u9762\u652f\u6301 ES Modules \u7684\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.strong,{children:"\u4f7f\u7528 ES Modules \u7f16\u5199\u4ee3\u7801\u9ed8\u8ba4\u5fc5\u987b\u5199\u6587\u4ef6\u7684\u6269\u5c55\u540d"}),"\uff0c\u636e\u5b98\u65b9\u6587\u6863\u8bf4\u660e\uff0c\u8fd9\u4e0e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"import"})," \u884c\u4e3a\u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import * as foo from './foo.js'; // work!\nimport * as foo from './foo'; // error, not work!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"--experimental-specifier-resolutionnode",children:(0,s.jsx)(n.code,{children:"--experimental-specifier-resolution=node"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u7528 ES Modules \u7f16\u5199\u4ee3\u7801\uff0c\u53c8\u4e0d\u9700\u8981\u5199\u6587\u4ef6\u6269\u5c55\u540d\uff0cNode.js \u5728\u5f88\u4e45\u4ee5\u524d\u5c31\u7ed9\u51fa\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u7684 flag \u6765\u5e94\u5bf9\u8fd9\u7c7b\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ node --experimental-specifier-resolution=node index.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u8fc7\uff0c\u8fd1\u671f\u5728\u4f7f\u7528 Node.js v20 \u7248\u672c\u65f6\uff0c\u7a81\u7136\u53d1\u73b0\u8be5 flag \u5931\u6548\u4e86\uff0c\u5bfc\u81f4\u5199\u7684\u6ca1\u6709\u6269\u5c55\u540d\u7684 ES Modules \u4ee3\u7801\u65e0\u6cd5\u8fd0\u884c\u3002\u9042\u5f00\u59cb\u67e5\u9605\u5b98\u65b9\u6587\u6863\uff0c\u53d1\u73b0\u5728 v18 \u7684\u6587\u6863\u4e2d\u8be5 flag \u8fd8\u53ef\u4ee5\u7d22\u5f15\uff0cv20 \u7684\u6587\u6863\u4e2d\u5df2\u7ecf\u65e0\u6cd5\u7d22\u5f15\u4e86\uff0c\u5728\u540e\u7eed\u67e5\u9605\u8d44\u6599\u7684\u8fc7\u7a0b\u4e2d\u7ec8\u4e8e\u4ece ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/blog/announcements/v19-release-announce#custom-esm-resolution-adjustments",children:"Node.js \u7684 v19 \u53d1\u5e03\u516c\u544a"}),"\u4e2d\u53d1\u73b0\u4e86\u95ee\u9898\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Node.js has removed the --experimental-specifier-resolution flag. Its functionality can now be achieved via custom loaders."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Node.js v18 \u5c06\u662f\u6700\u540e\u4e00\u4e2a\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"--experimental-specifier-resolution"})," \u547d\u4ee4\u884c flag \u7684\u5927\u7248\u672c\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668",children:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u76f8\u4fe1\u8fd9\u4e00\u53d8\u5316\u7ed9\u5f88\u591a\u4eba\u9020\u6210\u4e86\u56f0\u6270\uff0c\u5bf9\u4e8e\u6211\u4e5f\u662f\u3002\u5b98\u65b9\u7ed9\u7684\u65b9\u6848\u662f",(0,s.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668"}),"\uff0c\u4f46\u6ca1\u6709\u5177\u4f53\u7684\u6587\u6863\u8bf4\u660e\uff0c\u53ea\u80fd\u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/nodejs/node/pull/44859",children:"v19 \u53d1\u5e03\u516c\u544a\u4e2d\u63d0\u53ca\u7684 Github Issue"})," \u4e2d\u5bfb\u5f97\u86db\u4e1d\u9a6c\u8ff9\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7ec8\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9700\u8981\u5b89\u88c5\u4e00\u4e2a\u5b98\u65b9\u63d0\u4f9b\u7684",(0,s.jsx)(n.a,{href:"https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader",children:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u5305"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm i commonjs-extension-resolution-loader\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u6539\u53d8\u8fd0\u884c\u6587\u4ef6\u7684\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u4ee5\u524d\n$ node --experimental-specifier-resolution=node index.js\n\n# \u73b0\u5728\n$ node --experimental-loader=commonjs-extension-resolution-loader index.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u8be5\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u8fd0\u884c\u4ee3\u7801\uff0c\u5982\u679c\u9047\u5230\u7b2c\u4e09\u65b9\u5305\u662f ES Modules\uff0c\u4e14\u6ca1\u6709\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"package.json"})," \u6587\u4ef6\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"main"})," \u5b57\u6bb5\u5c06\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230\u6a21\u5757\u7684\u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a CommonJS \u89c4\u8303\u6a21\u5757\u89e3\u6790\u4f9d\u8d56 ",(0,s.jsx)(n.code,{children:"main"})," \u5b57\u6bb5\uff0c\u800c ES Modules \u89c4\u8303\u5219\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"exports"})," \u5b57\u6bb5\u6307\u5b9a\u6a21\u5757\u5165\u53e3\u6587\u4ef6\uff0c\u8be6\u89c1",(0,s.jsx)(n.a,{href:"https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points",children:"\u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9274\u4e8e\u4ee5\u4e0a\u60c5\u51b5\uff0c\u5982\u679c\u662f\u65b0\u9879\u76ee\uff0c\u800c\u4e14\u91c7\u7528 ES Modules \u7f16\u5199\u4ee3\u7801\uff0c\u90a3\u8fd8\u662f\u5e26\u4e0a\u6587\u4ef6\u6269\u5c55\u540d\u9075\u5faa\u5176\u89c4\u8303\u6bd4\u8f83\u597d\uff0c\u653e\u5f03\u91c7\u7528 flag \u4ee5\u53ca\u81ea\u5b9a\u4e49\u52a0\u8f7d\u5668\u7684\u65b9\u5f0f\u8fd0\u884c\u4ee3\u7801\uff0c\u6bd5\u7adf\u4f1a\u5e26\u6765\u4e00\u4e9b\u989d\u5916\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/en/blog/announcements/v19-release-announce",children:"https://nodejs.org/en/blog/announcements/v19-release-announce"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/docs/latest-v18.x/api/cli.html#--experimental-specifier-resolutionmode",children:"https://nodejs.org/docs/latest-v18.x/api/cli.html#--experimental-specifier-resolutionmode"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader",children:"https://github.com/nodejs/loaders-test/tree/main/commonjs-extension-resolution-loader"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points",children:"https://nodejs.org/docs/latest-v18.x/api/packages.html#package-entry-points"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>l});var s=o(67294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);