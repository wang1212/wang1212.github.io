"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1217],{31984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(85893),s=t(11151);const r={title:"\u89e3\u6790 Konva \u8bbe\u8ba1\uff1a\u4e8b\u4ef6\u7cfb\u7edf",date:new Date("2023-08-08T21:21:00.000Z"),update:new Date("2024-06-02T19:47:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","Konva.js","Canvas","\u6e90\u7801\u5206\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","Konva.js","Canvas","\u6e90\u7801\u5206\u6790"],description:"\u7ed8\u56fe\u5f15\u64ce\u652f\u6301\u4e30\u5bcc\u4ea4\u4e92\u7684\u524d\u63d0\u662f\u62e5\u6709\u4e00\u5957\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u800c\u5728\u753b\u5e03\u4e2d\u5982\u4f55\u62fe\u53d6\u5143\u7d20\u662f\u5b9e\u73b0\u7684\u5173\u952e\uff0c\u4ece Konva.js \u7684\u6e90\u7801\u6765\u770b\u770b\u5176\u4e8b\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u8bbe\u8ba1\u7684\u3002"},o=void 0,i={permalink:"/2023/08/08/computer-technology/web-frontend/konva/event-system",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/konva/2023-08-08-event-system.md",source:"@site/blog/computer-technology/web-frontend/konva/2023-08-08-event-system.md",title:"\u89e3\u6790 Konva \u8bbe\u8ba1\uff1a\u4e8b\u4ef6\u7cfb\u7edf",description:"\u7ed8\u56fe\u5f15\u64ce\u652f\u6301\u4e30\u5bcc\u4ea4\u4e92\u7684\u524d\u63d0\u662f\u62e5\u6709\u4e00\u5957\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u800c\u5728\u753b\u5e03\u4e2d\u5982\u4f55\u62fe\u53d6\u5143\u7d20\u662f\u5b9e\u73b0\u7684\u5173\u952e\uff0c\u4ece Konva.js \u7684\u6e90\u7801\u6765\u770b\u770b\u5176\u4e8b\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u8bbe\u8ba1\u7684\u3002",date:"2023-08-08T21:21:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"Konva.js",permalink:"/tags/konva-js"},{label:"Canvas",permalink:"/tags/canvas"},{label:"\u6e90\u7801\u5206\u6790",permalink:"/tags/\u6e90\u7801\u5206\u6790"}],readingTime:12.915,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u89e3\u6790 Konva \u8bbe\u8ba1\uff1a\u4e8b\u4ef6\u7cfb\u7edf",date:"2023-08-08T21:21:00.000Z",update:"2024-06-02T19:47:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","Konva.js","Canvas","\u6e90\u7801\u5206\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","Konva.js","Canvas","\u6e90\u7801\u5206\u6790"],description:"\u7ed8\u56fe\u5f15\u64ce\u652f\u6301\u4e30\u5bcc\u4ea4\u4e92\u7684\u524d\u63d0\u662f\u62e5\u6709\u4e00\u5957\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u800c\u5728\u753b\u5e03\u4e2d\u5982\u4f55\u62fe\u53d6\u5143\u7d20\u662f\u5b9e\u73b0\u7684\u5173\u952e\uff0c\u4ece Konva.js \u7684\u6e90\u7801\u6765\u770b\u770b\u5176\u4e8b\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u8bbe\u8ba1\u7684\u3002"},unlisted:!1,prevItem:{title:"\u6b64\u884c\u5357\u4eac",permalink:"/2023/08/27/life/tourism/tourism-nanjing"},nextItem:{title:"\u8c08\u8c08\u7b14\u8bb0\u8bb0\u5f55\u548c\u77e5\u8bc6\u7ba1\u7406\u5de5\u5177",permalink:"/2023/07/22/tools/notes-app"}},c={authorsImageUrls:[void 0]},l=[];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",mermaid:"mermaid",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2024-06-02 19:47:00"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7ed8\u56fe\u5f15\u64ce\u652f\u6301\u4e30\u5bcc\u4ea4\u4e92\u7684\u524d\u63d0\u662f\u62e5\u6709\u4e00\u5957\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u800c\u5728\u753b\u5e03\u4e2d\u5982\u4f55\u62fe\u53d6\u5143\u7d20\u662f\u5b9e\u73b0\u7684\u5173\u952e\uff0c\u4ece ",(0,a.jsx)(n.a,{href:"https://konvajs.org/",children:"Konva.js"})," \u7684\u6e90\u7801\u6765\u770b\u770b\u5176\u4e8b\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u8bbe\u8ba1\u7684\u3002"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"\uff08\u4e4b\u524d\u5206\u6790\u8fc7 ZRender \u7684\u6e90\u7801\u5b9e\u73b0\uff0c\u5176\u91c7\u7528\u4e86\u51e0\u4f55\u5224\u65ad\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u5143\u7d20\u62fe\u53d6\uff0c\u800c Konva.js \u91c7\u7528\u4e86\u4e0d\u540c\u7684\u65b9\u6848\u3002\uff09"})}),"\n",(0,a.jsx)(n.mermaid,{value:'---\ntitle: Konva\'s Event System(v9.3.11)\n---\nflowchart BT\n    subgraph bind2dom\n        canvas["canvas (dom)"]\n\n        subgraph Stage\n            getIntersection("getIntersection()")\n        end\n\n        Stage -- addEventListener() --\x3e canvas\n        canvas -- trigger() --\x3e Stage\n    end\n\n    subgraph pick\n        subgraph Layer\n            SceneCanvas\n            HitCanvas\n            LayerGetIntersection("getIntersection()")\n\n            HitCanvas -. "fillStyle: colorKey" .-> SceneCanvas\n            LayerGetIntersection -- "getImageData()" --\x3e HitCanvas\n        end\n\n        subgraph Shape\n            colorKey\n            shapes\n            sceneFunc("sceneFunc()")\n            hitFunc("hitFunc()")\n            Shape_FireAndBubble("_fireAndBubble()")\n\n            hitFunc -. "default" .-> sceneFunc\n            colorKey ---\x3e shapes\n            shapes -. "find" .-> Shape_FireAndBubble\n        end\n\n        SceneCanvas ---\x3e sceneFunc\n        HitCanvas ---\x3e hitFunc\n        HitCanvas -.-> colorKey\n    end\n\n    User("User")\n\n    getIntersection --\x3e pick\n\n    User -. on() .-> Shape\n    Shape -. trigger() .-> User\n\n    User -. interact .-> canvas\n\n    linkStyle 3,9,10 stroke: red,color: red;\n    linkStyle 5,6,11,12 stroke: green,color: green;\n    linkStyle 13 stroke: orange,color: orange;\n\n    style User fill: orange;\n    style pick fill: transparent,color: gray,stroke: gray,stroke-width: 2px,stroke-dasharray: 10 5;\n    style bind2dom fill: transparent,color: gray,stroke: gray,stroke-width: 2px,stroke-dasharray: 10 5;\n'})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);