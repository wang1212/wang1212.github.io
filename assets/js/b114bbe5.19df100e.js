"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6704],{32973:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),o=n(11151);const i={title:"\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\uff1aJunit",date:new Date("2017-08-30T23:42:00.000Z"),update:new Date("2017-08-30T23:42:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],description:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002"},l=void 0,r={permalink:"/computer-technology/tools/tools-junit",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/tools/tools-junit.md",source:"@site/blog/computer-technology/tools/tools-junit.md",title:"\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\uff1aJunit",description:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002",date:"2017-08-30T23:42:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{inline:!0,label:"\u6d4b\u8bd5",permalink:"/tags/\u6d4b\u8bd5"},{inline:!0,label:"\u5355\u5143\u6d4b\u8bd5",permalink:"/tags/\u5355\u5143\u6d4b\u8bd5"},{inline:!0,label:"Java",permalink:"/tags/java"},{inline:!0,label:"JUnit4",permalink:"/tags/j-unit-4"}],readingTime:8.89,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\uff1aJunit",date:"2017-08-30T23:42:00.000Z",update:"2017-08-30T23:42:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],description:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002"},unlisted:!1,prevItem:{title:"\u76d1\u542c\u5668\u3001\u8fc7\u6ee4\u5668\u3001Servlet",permalink:"/computer-technology/java-web/web-java-l-f-s"},nextItem:{title:"JSP \u5185\u7f6e\u5bf9\u8c61\u3001\u6307\u4ee4\u4e0e\u52a8\u4f5c",permalink:"/computer-technology/java-web/web-java-jsp"}},s={authorsImageUrls:[void 0]},c=[];function u(t){const e={blockquote:"blockquote",em:"em",p:"p",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2017-08-30 23:42:00"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002"})]})}function m(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>l});var a=n(67294);const o={},i=a.createContext(o);function l(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);