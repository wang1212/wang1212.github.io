"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[738],{28352:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=i(85893),s=i(11151);const l={title:"\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\uff1aJunit",date:new Date("2017-08-30T23:42:00.000Z"),update:new Date("2017-08-30T23:42:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],description:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002"},r=void 0,c={permalink:"/computer-technology/tools/tools-junit",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/tools/tools-junit.md",source:"@site/blog/computer-technology/tools/tools-junit.md",title:"\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\uff1aJunit",description:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002",date:"2017-08-30T23:42:00.000Z",tags:[{inline:!0,label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{inline:!0,label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{inline:!0,label:"\u6d4b\u8bd5",permalink:"/tags/\u6d4b\u8bd5"},{inline:!0,label:"\u5355\u5143\u6d4b\u8bd5",permalink:"/tags/\u5355\u5143\u6d4b\u8bd5"},{inline:!0,label:"Java",permalink:"/tags/java"},{inline:!0,label:"JUnit4",permalink:"/tags/j-unit-4"}],readingTime:8.89,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212",page:null}],frontMatter:{title:"\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\uff1aJunit",date:"2017-08-30T23:42:00.000Z",update:"2017-08-30T23:42:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u5de5\u5177","\u6d4b\u8bd5","\u5355\u5143\u6d4b\u8bd5","Java","JUnit4"],description:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002"},unlisted:!1,prevItem:{title:"\u76d1\u542c\u5668\u3001\u8fc7\u6ee4\u5668\u3001Servlet",permalink:"/computer-technology/java-web/web-java-l-f-s"},nextItem:{title:"JSP \u5185\u7f6e\u5bf9\u8c61\u3001\u6307\u4ee4\u4e0e\u52a8\u4f5c",permalink:"/computer-technology/java-web/web-java-jsp"}},d={authorsImageUrls:[void 0]},a=[{value:"JUnit",id:"junit",level:2},{value:"\u4f7f\u7528 JUnit4",id:"\u4f7f\u7528-junit4",level:2},{value:"\u5bfc\u5165 JUnit4",id:"\u5bfc\u5165-junit4",level:3},{value:"\u8fdb\u884c\u6d4b\u8bd5",id:"\u8fdb\u884c\u6d4b\u8bd5",level:3},{value:"\u4ee3\u7801\u89c4\u8303",id:"\u4ee3\u7801\u89c4\u8303",level:3},{value:"\u6d4b\u8bd5\u5931\u8d25\u5206\u6790",id:"\u6d4b\u8bd5\u5931\u8d25\u5206\u6790",level:3},{value:"JUnit \u8fd0\u884c\u8fc7\u7a0b",id:"junit-\u8fd0\u884c\u8fc7\u7a0b",level:2},{value:"JUnit \u5e38\u7528\u6ce8\u89e3",id:"junit-\u5e38\u7528\u6ce8\u89e3",level:2},{value:"JUnit \u6df1\u5165\u4f7f\u7528",id:"junit-\u6df1\u5165\u4f7f\u7528",level:2},{value:"\u6d4b\u8bd5\u5957\u4ef6",id:"\u6d4b\u8bd5\u5957\u4ef6",level:3},{value:"\u53c2\u6570\u5316\u8bbe\u7f6e",id:"\u53c2\u6570\u5316\u8bbe\u7f6e",level:3}];function o(n){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",kbd:"kbd",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2017-08-30 23:42:00"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u91cf\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u800c\u4e14\u5176\u4e2d\u903b\u8f91\u4e5f\u8f83\u4e3a\u590d\u6742\uff0c\u5728\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u9879\u76ee\u6d4b\u8bd5\u5176\u5b9e\u662f\u6bd4\u8f83\u8017\u8d39\u65f6\u95f4\u548c\u7cbe\u529b\u7684\uff0c\u56e0\u6b64\u8fb9\u5f00\u53d1\u8fb9\u6d4b\u8bd5\u662f\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u800c JUnit \u5219\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u4fbf\u5229\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"junit",children:"JUnit"}),"\n",(0,t.jsx)(e.p,{children:"JUnit \u662f\u4e00\u4e2a\u7528\u6765\u5bf9 Java \u4ee3\u7801\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u7684\u6846\u67b6\uff0c\u662f XUnit \uff08\u4e00\u5957\u57fa\u4e8e\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\u7684\u6d4b\u8bd5\u6846\u67b6\uff09\u7684\u4e00\u4e2a\u5b50\u96c6\uff0c\u7c7b\u4f3c\u7684\u8fd8\u6709 PythonUnit\u3001CppUnit\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["JUnit \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u81ea\u52a8\u5316\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u800c\u4e0d\u9700\u8981\u6211\u4eec\u53bb\u7f16\u5199 ",(0,t.jsx)(e.code,{children:"main"})," \u65b9\u6cd5\u9010\u4e00\u6d4b\u8bd5\uff0c\u540c\u65f6\u5176\u4f7f\u7528\u65ad\u8a00\uff08assert\uff09\u673a\u5236\u53ef\u4ee5\u5c06\u6211\u4eec\u9884\u671f\u7684\u7ed3\u679c\u548c\u7a0b\u5e8f\u8fd0\u884c\u5f97\u5230\u7ed3\u679c\u8fdb\u884c\u6bd4\u5bf9\uff0c\u786e\u4fdd\u5bf9\u7ed3\u679c\u7684\u53ef\u9884\u77e5\u6027\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528-junit4",children:"\u4f7f\u7528 JUnit4"}),"\n",(0,t.jsx)(e.p,{children:"JUnit \u76ee\u524d\u5df2\u7ecf\u66f4\u65b0\u5230\u7b2c 4 \u4e2a\u7248\u672c\uff0c\u4e5f\u5c31\u662f JUnit4\uff0c\u5f53\u7136\u7b2c 5 \u7248\u4e5f\u5728\u7b79\u5907\u4e4b\u4e2d\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Junit4 \u5373\u53ef\u3002\u5176\u5b9e eclipse \u5df2\u7ecf\u96c6\u6210\u4e86 Junit \u5355\u5143\u6d4b\u8bd5\u6846\u67b6\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u800c\u4e0d\u9700\u8981\u53bb\u4e0b\u8f7d jar \u5305\u5bfc\u5165\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u5bfc\u5165-junit4",children:"\u5bfc\u5165 JUnit4"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728 eclipse \u4e2d\u65b0\u5efa\u4e00\u4e2a Java \u9879\u76ee\uff0c\u7136\u540e",(0,t.jsx)(e.kbd,{children:"\u53f3\u952e"}),"\u9879\u76ee\uff0c\u9009\u62e9 ",(0,t.jsx)(e.strong,{children:"Build Path -> Add Libraries"})," ,\u7136\u540e\u9009\u62e9 Junit \u5373\u53ef\u5c06\u5176\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u88ab\u6d4b\u8bd5\u7684\u7c7b\uff0c\u7136\u540e\u518d\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u7c7b\u7528\u6765\u4f7f\u7528 JUnit4 \u5bf9\u88ab\u6d4b\u8bd5\u7c7b\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u8fdb\u884c\u6d4b\u8bd5",children:"\u8fdb\u884c\u6d4b\u8bd5"}),"\n",(0,t.jsxs)(e.p,{children:["Junit4 \u76f8\u5bf9\u4e8e\u7b2c 3 \u4e2a\u7248\u672c\u6765\u8bf4\u4f7f\u7528\u8d77\u6765\u66f4\u4e3a\u65b9\u4fbf\u4e86\uff0c\u53ea\u9700\u5728\u6d4b\u8bd5\u7c7b\u7684\u6d4b\u8bd5\u65b9\u6cd5\u524d\u9762\u52a0\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"@Test"})," \u6ce8\u89e3\u5373\u53ef\u3002\u8fd9\u91cc\u6709\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"assertEquals()"})," \u65b9\u6cd5\u5f88\u6709\u7528\uff0c\u5176\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5bf9\u7a0b\u5e8f\u7684\u671f\u671b\u7ed3\u679c\u548c\u8fd0\u884c\u7ed3\u679c\u8fdb\u884c\u6bd4\u5bf9\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"@Test\npublic void testXXX(){\n    /**\n     * obj1 : \u671f\u671b\u503c\uff08\u6211\u4eec\u6307\u5b9a\uff09\n     * obj2 : \u8fd0\u884c\u503c\uff08\u8c03\u7528\u88ab\u6d4b\u8bd5\u7c7b\uff09\n     */\n    assertEquals(Object obj1, Object obj2);\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6d4b\u8bd5\u4ee3\u7801\u7f16\u5199\u5b8c\u6210\u540e\uff0c",(0,t.jsx)(e.strong,{children:"Run As -> JUnit Test"})," \u5373\u53ef\uff0c\u53ea\u8981\u51fa\u73b0\u7eff\u8272\u7684\u72b6\u6001\u6761\u5219\u4ee3\u8868\u6211\u4eec\u7684\u6d4b\u8bd5\u5168\u90e8\u6210\u529f\uff0c\u5982\u679c\u4e3a\u7ea2\u8272\u8bf4\u660e\u6211\u4eec\u6709\u90e8\u5206\u6d4b\u8bd5\u5931\u8d25\uff0c\u5728\u72b6\u6001\u6761\u4e0b\u65b9\u7684\u6d4b\u8bd5\u7ed3\u679c\u5217\u8868\u4e2d\uff0c\u6bcf\u4e00\u9879\u524d\u9762\u90fd\u4f1a\u6807\u8bb0\u51fa\u6765\uff0c\u6d4b\u8bd5\u6210\u529f\u7684\u5219\u4e3a\u5bf9\u53f7\uff0c\u5931\u8d25\u7684\u4e3a\u53c9\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u4ee3\u7801\u89c4\u8303",children:"\u4ee3\u7801\u89c4\u8303"}),"\n",(0,t.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u5e94\u8be5\u5c06\u6d4b\u8bd5\u7c7b\u548c\u9879\u76ee\u88ab\u6d4b\u8bd5\u7c7b\u4ee3\u7801\u5206\u5f00\u653e\u7f6e\uff0c\u901a\u5e38\u4f1a\u5728\u9879\u76ee\u4e0b ",(0,t.jsx)(e.strong,{children:"New -> Source Floder"})," \u547d\u540d\u4e3a ",(0,t.jsx)(e.strong,{children:"test"})," \u5c06\u6d4b\u8bd5\u7c7b\u4ee3\u7801\u653e\u5165\u5176\u4e2d\uff0c\u6d4b\u8bd5\u7c7b\u548c\u88ab\u6d4b\u8bd5\u7c7b\u7684\u5305\u540d\u5e94\u4e00\u81f4\uff0c\u5728\u9879\u76ee\u90e8\u7f72\u65f6\u5220\u9664\u8fd9\u4e2a\u76ee\u5f55\u5373\u53ef\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u53e6\u5916\uff0c\u6d4b\u8bd5\u7c7b\u7684\u547d\u540d\u5e94\u9075\u5faa\u88ab\u6d4b\u8bd5\u7c7b\u540d\u52a0 Test \u540e\u7f00\u7684\u89c4\u5219\uff1b\u800c\u6d4b\u8bd5\u7c7b\u7684\u65b9\u6cd5\u547d\u540d\u5e94\u9075\u5faa\u4ee5 test \u4e3a\u524d\u7f00\u52a0\u88ab\u6d4b\u8bd5\u65b9\u6cd5\u540d\u7684\u89c4\u5219\uff0c\u6bd4\u5982 ",(0,t.jsx)(e.code,{children:"testXXX()"}),"\uff0c\u8fd9\u6837\u66f4\u4e3a\u89c4\u8303\u4e00\u4e9b\u3002\u8fd8\u6709\u5c31\u662f\uff0c\u6d4b\u8bd5\u65b9\u6cd5\u662f\u516c\u6709\uff08public\uff09\u3001\u65e0\u8fd4\u56de\u503c\uff08void\uff09\u7684\uff0c\u5e76\u4e14\u6d4b\u8bd5\u65b9\u6cd5\u4e4b\u95f4\u662f\u76f8\u4e92\u72ec\u7acb\u7684\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u6709\u4e00\u4e2a\u5c0f\u6280\u5de7\uff0c\u901a\u5e38\u88ab\u6d4b\u8bd5\u7c7b\u7684\u65b9\u6cd5\u4f1a\u5f88\u591a\uff0c\u624b\u52a8\u7f16\u5199\u6d4b\u8bd5\u65b9\u6cd5\u8017\u8d39\u65f6\u95f4\uff0c\u6211\u4eec\u53ef\u4ee5",(0,t.jsx)(e.kbd,{children:"\u53f3\u952e"}),"\u6d4b\u8bd5\u7c7b\uff0c",(0,t.jsx)(e.strong,{children:"New -> Other"})," \u7136\u540e\u9009\u62e9 ",(0,t.jsx)(e.strong,{children:"JUnit Test Case"}),"\uff0c\u9009\u4e2d\u8981\u6d4b\u8bd5\u7684\u65b9\u6cd5\uff0c\u8bbe\u7f6e\u597d\u6587\u4ef6\u8def\u5f84\u5373\u53ef\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5305\u542b\u6307\u5b9a\u6d4b\u8bd5\u65b9\u6cd5\u7684\u6d4b\u8bd5\u7c7b\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u6d4b\u8bd5\u5931\u8d25\u5206\u6790",children:"\u6d4b\u8bd5\u5931\u8d25\u5206\u6790"}),"\n",(0,t.jsxs)(e.p,{children:["JUnit \u7684\u6d4b\u8bd5\u7ed3\u679c\u662f\u975e\u5e38\u76f4\u89c2\u7684\uff0c\u7ea2\u8272\u72b6\u6001\u6761\u4ee3\u8868\u6211\u4eec\u6d4b\u8bd5\u5931\u8d25\uff0c\u5176\u4e2d\u53c8\u5206\u4e3a\u4e24\u79cd\u5931\u8d25\u7c7b\u578b\uff0c\u5206\u522b\u4e3a ",(0,t.jsx)(e.code,{children:"Errors"})," \u548c ",(0,t.jsx)(e.code,{children:"Failures"}),"\u3002\u5bfc\u81f4\u6d4b\u8bd5\u5931\u8d25\u7684\u539f\u56e0\u6211\u4eec\u53ef\u4ee5\u5728\u4e0b\u65b9\u7684\u6d88\u606f\u6808\u4e2d\u770b\u5230\uff0c\u5176\u8bf4\u660e\u4e86\u5f15\u8d77\u6d4b\u8bd5\u5931\u8d25\u7684\u5177\u4f53\u539f\u56e0\u3002"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Errors"}),"\n",(0,t.jsx)(e.p,{children:"\u662f\u7531\u4e8e\u4ee3\u7801\u5f02\u5e38\u5f15\u8d77\u7684\uff0c\u53ef\u80fd\u662f\u6d4b\u8bd5\u4ee3\u7801\u672c\u8eab\u7684\u9519\u8bef\uff0c\u4e5f\u53ef\u80fd\u662f\u88ab\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Failures"}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u822c\u7531\u5355\u5143\u6d4b\u8bd5\u7684\u65ad\u8a00\u65b9\u6cd5\u5224\u65ad\u5931\u8d25\u6240\u5f15\u8d77\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u7a0b\u5e8f\u7684\u8fd0\u884c\u7ed3\u679c\u548c\u6211\u4eec\u7684\u9884\u671f\u4e0d\u4e00\u6837\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"junit-\u8fd0\u884c\u8fc7\u7a0b",children:"JUnit \u8fd0\u884c\u8fc7\u7a0b"}),"\n",(0,t.jsxs)(e.p,{children:["\u8981\u4f7f\u7528\u597d JUnit4 \u8fd9\u4e2a\u6d4b\u8bd5\u5de5\u5177\uff0c\u6211\u4eec\u5e94\u8be5\u4e86\u89e3\u6e05\u695a\u5176\u8fd0\u884c\u7684\u8fc7\u7a0b\u3002\u5728 ",(0,t.jsx)(e.strong,{children:"New -> Other"})," \u65b0\u5efa\u4e00\u4e2a ",(0,t.jsx)(e.strong,{children:"JUnit Test Case"})," \u7c7b\u65f6\uff0c\u53ef\u4ee5\u52fe\u9009\u56db\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"setUpBeforeClass()"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"@BeforeClass"})," \u6807\u6ce8\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u6d4b\u8bd5\u7c7b\u52a0\u8f7d\u65f6\u8fd0\u884c\u4e00\u6b21\uff0c\u9002\u5408\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"tearDownAfterClass()"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"@AfterClass"})," \u6807\u6ce8\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u6240\u6709\u6d4b\u8bd5\u65b9\u6cd5\u6267\u884c\u5b8c\u6210\u65f6\u8fd0\u884c\u4e00\u6b21\uff0c\u9002\u5408\u6e05\u7406\u8d44\u6e90\uff0c\u4f8b\u5982\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"setUp()"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"@Before"})," \u6807\u6ce8\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u6bcf\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u6267\u884c\u524d\u8fd0\u884c\u4e00\u6b21\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"tearDown()"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"@After"})," \u6807\u6ce8\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u6bcf\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u6267\u884c\u540e\u8fd0\u884c\u4e00\u6b21\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0a\u56db\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u7684\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u5f53\u7136\u524d\u63d0\u662f\u8fd9\u4e9b\u65b9\u6cd5\u8fd0\u884c\u7684\u65f6\u673a\u548c\u4f5c\u7528\u6211\u4eec\u5e94\u8be5\u77e5\u9053\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"junit-\u5e38\u7528\u6ce8\u89e3",children:"JUnit \u5e38\u7528\u6ce8\u89e3"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"@Test"}),"\n",(0,t.jsx)(e.li,{children:"@BeforeClass"}),"\n",(0,t.jsx)(e.li,{children:"@AfterClass"}),"\n",(0,t.jsx)(e.li,{children:"@Before"}),"\n",(0,t.jsx)(e.li,{children:"@After"}),"\n",(0,t.jsx)(e.li,{children:"@Ignore"}),"\n",(0,t.jsx)(e.li,{children:"@RunWith"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"@Test"})," \u6ce8\u89e3\u6807\u6ce8\u4e00\u4e2a\u65b9\u6cd5\u4e3a\u6d4b\u8bd5\u65b9\u6cd5\uff0c\u9664\u6b64\u4e4b\u5916\u6211\u4eec\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u8981\u6355\u83b7\u7684\u5f02\u5e38\u548c\u6d4b\u8bd5\u65f6\u95f4\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"/**\n * expected : \u8868\u660e\u6211\u4eec\u9884\u671f\u4f1a\u53d1\u751f\u7684\u5f02\u5e38\uff0c\u4f7f\u5176\u4e0d\u5f71\u54cd\u6d4b\u8bd5\u7ed3\u679c\uff0c\u7c7b\u4f3c\u4e8e throws \u5173\u952e\u5b57\n * timeout : \u6307\u5b9a\u6d4b\u8bd5\u7684\u65f6\u95f4\uff08ms\uff09\uff0c\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u7a0b\u5e8f\u6027\u80fd\n */\n@Test(expected=ArithmeticException.class, timeout=2000)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"@Ignore"})," \u6ce8\u89e3\u6807\u6ce8\u4e00\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\u88ab\u8fd0\u884c\u5668\u5ffd\u7565\uff0c\u540c\u65f6\u53ef\u4ee5\u6807\u8bc6\u4e00\u4e9b\u5ffd\u7565\u4fe1\u606f\u3002",(0,t.jsx)(e.code,{children:"@RunWith"})," \u6ce8\u89e3\u7528\u6765\u66f4\u6539\u6d4b\u8bd5\u8fd0\u884c\u5668\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"junit-\u6df1\u5165\u4f7f\u7528",children:"JUnit \u6df1\u5165\u4f7f\u7528"}),"\n",(0,t.jsx)(e.p,{children:"\u4f1a\u5229\u7528 JUnit \u8fdb\u884c\u57fa\u672c\u7684\u5355\u5143\u6d4b\u8bd5\u6216\u8bb8\u5df2\u7ecf\u6ee1\u8db3\u4e86\u6211\u4eec\u7684\u9700\u6c42\uff0c\u7136\u800c JUnit \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u66f4\u52a0\u4fbf\u5229\u7684\u5de5\u5177\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u6d4b\u8bd5\u5957\u4ef6",children:"\u6d4b\u8bd5\u5957\u4ef6"}),"\n",(0,t.jsxs)(e.p,{children:["\u6d4b\u8bd5\u5957\u4ef6\u662f\u7528\u6765\u540c\u65f6\u6d4b\u8bd5\u4e00\u6574\u5957\u6d4b\u8bd5\u7c7b\u7684\uff0c",(0,t.jsx)(e.strong,{children:"New -> Other"})," \u7136\u540e ",(0,t.jsx)(e.strong,{children:"JUnit Test Suite"})," \u5373\u53ef\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u5957\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"// \u6d4b\u8bd5\u5957\u4ef6\u7c7b\n@RunWith(Suite.class)\n@SuiteClasses({ taskTest1.class, taskTest2.class })\npublic class AllTests { }\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u521b\u5efa\u6d4b\u8bd5\u5957\u4ef6\u65f6\u53ef\u4ee5\u52fe\u9009\u9700\u8981\u5305\u542b\u8fdb\u6765\u7684\u6d4b\u8bd5\u7c7b\u6216\u8005\u6d4b\u8bd5\u5957\u4ef6\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5728 ",(0,t.jsx)(e.code,{children:"@SuiteClasses"})," \u6ce8\u89e3\u4e2d\u624b\u52a8\u6dfb\u52a0\u3002\u8981\u6ce8\u610f\u7684\u662f\u6d4b\u8bd5\u5957\u4ef6\u7c7b\u5fc5\u987b\u662f\u4e00\u4e2a\u7a7a\u7c7b\uff0c\u4e0d\u80fd\u5305\u542b\u4efb\u4f55\u65b9\u6cd5\uff1b\u5176\u6b21\u8981\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"@RunWith"})," \u6ce8\u89e3\u5c06\u8fd0\u884c\u5668\u4fee\u6539\u4e3a ",(0,t.jsx)(e.code,{children:"Suite.class"}),"\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u53c2\u6570\u5316\u8bbe\u7f6e",children:"\u53c2\u6570\u5316\u8bbe\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:"\u53c2\u6570\u5316\u8bbe\u7f6e\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u63d0\u9ad8\u4ee3\u7801\u7684\u91cd\u7528\u5ea6\uff0c\u51cf\u5c11\u7c7b\u4f3c\u7684\u4ee3\u7801\u7f16\u5199\u5de5\u4f5c\u91cf\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"//\u88ab\u6d4b\u8bd5\u7c7b\npublic class Calculate {\n    // \u9664\u6cd5\n    public int divide(int a, int b){\n        return a/b;\n    }\n}\n\n// \u53c2\u6570\u5316\u8bbe\u7f6e\u7684\u6d4b\u8bd5\u7c7b\n@RunWith(Parameterized.class)\npublic class ParameterTest {\n    // \u53c2\u6570\n    int expected, input1, input2;\n\n    // \u7528\u6765\u8fd4\u56de\u4e00\u7ec4\u53c2\u6570\n    @Parameters\n    public static Collection<Object[]> params(){\n        return Arrays.asList(new Object[][]{\n            {1,2,2},\n            {3,9,3},\n            {25, 625, 25}\n        });\n    }\n\n    // \u6784\u9020\u5668\n    public ParameterTest(int expected, int input1, int input2) {\n        this.expected = expected;\n        this.input1 = input1;\n        this.input2 = input2;\n    }\n\n    // \u6d4b\u8bd5\u65b9\u6cd5\n    @Test\n    public void testDivide() {\n        assertEquals(expected, new Calculate().divide(input1, input2));\n    }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u53c2\u6570\u5316\u8bbe\u7f6e\u7684\u6d4b\u8bd5\u7c7b\u8981\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"@RunWith"})," \u6ce8\u89e3\u5c06\u8fd0\u884c\u5668\u4fee\u6539\u4e3a ",(0,t.jsx)(e.strong,{children:"Parameterized.class"}),"\u3002\u8be5\u7c7b\u4e2d\u8981\u58f0\u660e\u53d8\u91cf\u6765\u5b58\u653e\u9884\u671f\u503c\u548c\u7ed3\u679c\u503c\uff0c\u58f0\u660e\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"@Parameters"})," \u6ce8\u89e3\u6807\u6ce8\u7684\u8fd4\u56de\u503c\u4e3a ",(0,t.jsx)(e.code,{children:"Collection"})," \u7684\u516c\u5171\u9759\u6001\u65b9\u6cd5\u6765\u8fd4\u56de\u4e00\u7ec4\u53c2\u6570\u503c\uff0c\u5176\u6b21\u8fd8\u8981\u58f0\u660e\u4e00\u4e2a\u5e26\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var t=i(67294);const s={},l=t.createContext(s);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);