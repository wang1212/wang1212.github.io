"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[56534],{67949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var o=n(85893),r=n(11151);const c={title:"TypeScript\uff1a\u6269\u5c55\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49",date:new Date("2022-01-09T17:36:00.000Z"),update:new Date("2022-01-09T17:36:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","TypeScript","\u7c7b\u578b\u5b9a\u4e49","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","TypeScript","\u7c7b\u578b\u5b9a\u4e49","\u5b9e\u8df5\u6848\u4f8b"],description:"TypeScript \u4f5c\u4e3a JavaScript \u7684\u8d85\u96c6\uff0c\u4e3a Web \u5f00\u53d1\u5e26\u6765\u4e86\u5f3a\u7c7b\u578b\u8bed\u8a00\u548c\u7c7b\u4f3c\u4ee3\u7801\u667a\u80fd\u63d0\u793a\u8fd9\u79cd\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u5982\u4f55\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49\u8fdb\u884c\u6269\u5c55\u5462\uff1f"},i=void 0,l={permalink:"/computer-technology/typescript/tools-typescript-type-extend",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/typescript/tools-typescript-type-extend.md",source:"@site/blog/computer-technology/typescript/tools-typescript-type-extend.md",title:"TypeScript\uff1a\u6269\u5c55\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49",description:"TypeScript \u4f5c\u4e3a JavaScript \u7684\u8d85\u96c6\uff0c\u4e3a Web \u5f00\u53d1\u5e26\u6765\u4e86\u5f3a\u7c7b\u578b\u8bed\u8a00\u548c\u7c7b\u4f3c\u4ee3\u7801\u667a\u80fd\u63d0\u793a\u8fd9\u79cd\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u5982\u4f55\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49\u8fdb\u884c\u6269\u5c55\u5462\uff1f",date:"2022-01-09T17:36:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"\u7c7b\u578b\u5b9a\u4e49",permalink:"/tags/\u7c7b\u578b\u5b9a\u4e49"},{label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"}],readingTime:3.51,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"TypeScript\uff1a\u6269\u5c55\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49",date:"2022-01-09T17:36:00.000Z",update:"2022-01-09T17:36:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","TypeScript","\u7c7b\u578b\u5b9a\u4e49","\u5b9e\u8df5\u6848\u4f8b"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","TypeScript","\u7c7b\u578b\u5b9a\u4e49","\u5b9e\u8df5\u6848\u4f8b"],description:"TypeScript \u4f5c\u4e3a JavaScript \u7684\u8d85\u96c6\uff0c\u4e3a Web \u5f00\u53d1\u5e26\u6765\u4e86\u5f3a\u7c7b\u578b\u8bed\u8a00\u548c\u7c7b\u4f3c\u4ee3\u7801\u667a\u80fd\u63d0\u793a\u8fd9\u79cd\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u5982\u4f55\u5bf9\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49\u8fdb\u884c\u6269\u5c55\u5462\uff1f"},unlisted:!1,prevItem:{title:"\u8d22\u52a1\u4e0e\u4f1a\u8ba1\u4e2d\u7684\u4e00\u4e9b\u5e38\u7528\u6982\u5ff5",permalink:"/finance-economics/financial-accounting-concept"},nextItem:{title:"\u89e3\u6790\u57fa\u4e8e core-js \u4e0e ESLint \u7684 Web \u517c\u5bb9\u65b9\u6848",permalink:"/computer-technology/web-frontend/tools-web-fee-polyfill-corejs-eslint"}},s={authorsImageUrls:[void 0]},a=[{value:"\u53c2\u8003\u8d44\u6e90",id:"\u53c2\u8003\u8d44\u6e90",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2022-01-09 17:36:00"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["TypeScript \u4f5c\u4e3a JavaScript \u7684\u8d85\u96c6\uff0c\u4e3a Web \u5f00\u53d1\u5e26\u6765\u4e86\u5f3a\u7c7b\u578b\u8bed\u8a00\u548c\u7c7b\u4f3c\u4ee3\u7801\u667a\u80fd\u63d0\u793a\u8fd9\u79cd\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u800c\u4ee3\u7801\u63d0\u793a\u4f9d\u8d56\u4e8e\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u3002\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u7684\u53d1\u5c55\u4e5f\u7ecf\u5386\u4e86\u4e00\u4e2a\u9010\u6b65\u6f14\u53d8\u7684\u8fc7\u7a0b\uff0c\u4ece\u6700\u521d\u57fa\u4e8e JavaScript \u7f16\u5199\u7684 npm \u5305\uff0c\u901a\u8fc7",(0,o.jsx)(t.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",children:"\u793e\u533a\u65b9\u6848"}),"\u6765\u5f15\u5165\u7c7b\u578b\u5b9a\u4e49\u5305\uff0c\u518d\u5230\u76ee\u524d\u591a\u6570\u6a21\u5757\u57fa\u4e8e TypeScript \u7f16\u5199\u5e76\u5728\u53d1\u5e03\u65f6\u5e26\u4e0a\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u8fd9\u79cd\u6700\u4f73\u65b9\u6848\uff0c\u5f00\u53d1\u8005\u4f53\u9a8c\u5f97\u5230\u8fdb\u4e00\u6b65\u7684\u63d0\u5347\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u4e0d\u8fc7\uff0c\u5728\u4f7f\u7528\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u7684\u8fc7\u7a0b\u4e2d\u6211\u4eec\u901a\u5e38\u9700\u8981\u548c\u7c7b\u578b\u5b9a\u4e49\u8fdb\u884c\u4ea4\u4e92\uff0c\u5927\u591a\u6570\u573a\u666f\u53ef\u4ee5\u901a\u8fc7\u6cdb\u578b\u6765\u89e3\u51b3\uff1b\u800c\u6709\u4e00\u4e2a\u5178\u578b\u573a\u666f\u5c31\u662f\u9700\u8981\u6211\u4eec\u6269\u5c55\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u907f\u514d\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u7f16\u7801\u65f6\u90fd\u8981\u5f15\u5165\u7c7b\u578b\u5b9a\u4e49\u7684\u9ebb\u70e6\u3002\u53ef\u80fd\u4e0d\u662f\u5f88\u597d\u7406\u89e3\uff0c\u5728\u8fd9\u91cc\u901a\u8fc7\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\u5c31\u53ef\u4ee5\u89e3\u91ca\u6e05\u695a\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"koa2"})," \u6846\u67b6\u8fdb\u884c Node \u5e94\u7528\u5f00\u53d1\u65f6\uff0c\u4e3a\u4e86\u5229\u7528 TypeScript \u5e26\u6765\u7684\u4f18\u52bf\uff0c\u9700\u8981\u5f15\u5165\u7c7b\u578b\u5b9a\u4e49\uff0c\u800c\u8be5\u6846\u67b6\u672c\u8eab\u662f\u7528 JavaScript \u7f16\u5199\u7684\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u793e\u533a\u63d0\u4f9b\u7684 ",(0,o.jsx)(t.code,{children:"@types/koa"})," \u5305\u6765\u83b7\u5f97\u652f\u6301\u3002",(0,o.jsx)(t.code,{children:"koa2"})," \u6846\u67b6\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55 ",(0,o.jsx)(t.code,{children:"context"})," \u5bf9\u8c61\u6765\u5f15\u5165\u4e00\u4e9b\u5de5\u5177\uff0c\u6700\u5178\u578b\u7684\u5c31\u662f\u65e5\u5fd7\u7ba1\u7406\uff0c\u8fd9\u91cc\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"koa-log4"}),"\uff0c\u5728 ",(0,o.jsx)(t.code,{children:"context"})," \u4e0a\u6302\u8f7d\u4e00\u4e2a ",(0,o.jsx)(t.code,{children:"logger"})," \u5c5e\u6027\u5f15\u7528\u65e5\u5fd7\u6253\u5370\u5668\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7\u6cdb\u578b\u7684\u65b9\u5f0f\u6269\u5c55\u5e94\u7528\u5b9e\u4f8b\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u5b9a\u4e49\uff0c\u4f46\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u5c31\u663e\u7684\u6bd4\u8f83\u9ebb\u70e6\u4e86\uff0c",(0,o.jsxs)(t.strong,{children:["\u5f00\u53d1\u4f53\u9a8c\u6700\u597d\u4e14\u6700\u81ea\u7136\u7684\u65b9\u5f0f\u5c31\u662f\u76f4\u63a5\u4e00\u6b21\u6269\u5c55 ",(0,o.jsx)(t.code,{children:"koa2"})," \u7684 ",(0,o.jsx)(t.code,{children:"context"})," \u7c7b\u578b\u5b9a\u4e49\uff0c\u540e\u7eed\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u4e0d\u7528\u4f7f\u7528\u6cdb\u578b\u5373\u53ef\u81ea\u52a8\u83b7\u5f97\u4ee3\u7801\u63d0\u793a\u3002"]})]}),"\n",(0,o.jsx)(t.p,{children:"\u8fd9\u91cc\u76f4\u63a5\u7ed9\u51fa\u6700\u7ec8\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// src/@types/index.d.ts\nimport log4js from 'koa-log4';\n\ndeclare module 'koa' {\n  interface DefaultContext {\n    logger: log4js.Logger;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u8d77\u521d\uff0c\u6211\u8ba4\u4e3a TypeScript \u5b98\u65b9\u4f1a\u5bf9\u8fd9\u79cd\u5178\u578b\u7684\u573a\u666f\u7ed9\u51fa\u660e\u786e\u7684\u65b9\u6848\u6587\u6863\uff0c\u4f46\u627e\u4e86\u5f88\u4e45\u6ca1\u627e\u5230\uff0c\u5c31\u53bb Google\uff0c\u5728 StackOverflow \u4e0a\u53d1\u73b0\u6709\u4eba\u63d0\u53ca\u7c7b\u4f3c\u4ee5\u4e0a\u7684\u65b9\u6848\uff0c\u7ecf\u8fc7\u5b9e\u9a8c\u786e\u5b9e\u89e3\u51b3\u4e86\u95ee\u9898\u3002\u4f46\u662f\uff0c\u6211\u4e00\u822c\u4f1a\u627e\u5230\u660e\u786e\u7684\u5b98\u65b9\u6587\u6863\u8bb0\u5f55\u4e00\u4e0b\uff0c\u4ee5\u5907\u540e\u7eed\u53c2\u8003\uff0c\u4e5f\u662f\u79c9\u884c\u5c3d\u91cf\u4e0d Hack \u4ee5\u5b98\u65b9\u4e14\u4f18\u96c5\u7684\u65b9\u5f0f\u89e3\u51b3\u95ee\u9898\u7684\u539f\u5219\uff0c\u7ecf\u8fc7\u975e\u5e38\u4ed4\u7ec6\u7684\u67e5\u627e\u4e4b\u540e\uff0c\u786e\u5b9e\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u627e\u5230\u4e86\uff0c\u4f46\u975e\u5e38\u5206\u6563\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u81f3\u6b64\uff0c\u5c31\u6bd4\u8f83\u5b8c\u7f8e\u7684\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u800c\u8fd9\u4e2a\u95ee\u9898\u4e5f\u662f\u5f88\u4e45\u4e4b\u524d\u5c31\u89e3\u51b3\u7684\uff0c\u56de\u8fc7\u5934\u6765\u53d1\u73b0\u8bb0\u5f55\u4e0b\u6765\u4f1a\u66f4\u597d\u4e00\u4e9b\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"\u53c2\u8003\u8d44\u6e90",children:"\u53c2\u8003\u8d44\u6e90"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation",children:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html#testing-your-types",children:"https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html#testing-your-types"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",children:"https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var o=n(67294);const r={},c=o.createContext(r);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);