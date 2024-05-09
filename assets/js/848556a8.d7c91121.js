"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8046],{30457:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(85893),r=i(11151);const s={title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u89e3\u6790\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u7684\u5b9e\u73b0",date:new Date("2021-04-25T22:56:00.000Z"),update:new Date("2021-04-26T22:48:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],description:"\u524d\u7aef\u5f00\u53d1\u4e2d\u5e7f\u6cdb\u91c7\u7528\u7684\u4f18\u5316\u6280\u5de7\uff0c\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u3002"},l=void 0,c={permalink:"/computer-technology/web-frontend/javascript/debouncing-and-throttling",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/javascript/debouncing-and-throttling.md",source:"@site/blog/computer-technology/web-frontend/javascript/debouncing-and-throttling.md",title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u89e3\u6790\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u7684\u5b9e\u73b0",description:"\u524d\u7aef\u5f00\u53d1\u4e2d\u5e7f\u6cdb\u91c7\u7528\u7684\u4f18\u5316\u6280\u5de7\uff0c\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u3002",date:"2021-04-25T22:56:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"},{label:"\u8282\u6d41\u4e0e\u9632\u6296",permalink:"/tags/\u8282\u6d41\u4e0e\u9632\u6296"}],readingTime:16.385,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u89e3\u6790\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u7684\u5b9e\u73b0",date:"2021-04-25T22:56:00.000Z",update:"2021-04-26T22:48:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316","\u8282\u6d41\u4e0e\u9632\u6296"],description:"\u524d\u7aef\u5f00\u53d1\u4e2d\u5e7f\u6cdb\u91c7\u7528\u7684\u4f18\u5316\u6280\u5de7\uff0c\u51fd\u6570\u8282\u6d41\u4e0e\u9632\u6296\u3002"},unlisted:!1,prevItem:{title:"\u7406\u89e3\u7f16\u7a0b\u8bed\u8a00\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",permalink:"/computer-technology/tools/tools-programming-language"},nextItem:{title:"\u5357\u4e94\u53f0\u89c1\u4e91\u6d77",permalink:"/2021/04/08/life/tourism/tourism-nanwutai"}},a={authorsImageUrls:[void 0]},d=[{value:"\u89e3\u6790\u4ee3\u7801\u5b9e\u73b0",id:"\u89e3\u6790\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u9632\u6296\uff08Debounce\uff09",id:"\u9632\u6296debounce",level:3},{value:"\u9632\u6296\u589e\u5f3a",id:"\u9632\u6296\u589e\u5f3a",level:4},{value:"\u8282\u6d41\uff08Throttle\uff09",id:"\u8282\u6d41throttle",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2021-04-26 22:48:00"})}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u524d\u7aef\u5f00\u53d1\u4e2d\uff0c\u6709\u4e00\u4e2a\u4f7f\u7528\u8f83\u4e3a\u666e\u904d\u7684\u6027\u80fd\u4f18\u5316\u6280\u5de7\uff0c\u5373\u51fd\u6570\u8282\u6d41\uff08Throttle\uff09\u548c\u9632\u6296\uff08Debounce\uff09\uff0c\u5176\u4e3b\u8981\u4f5c\u7528\u662f\u6839\u636e\u65f6\u95f4\u5bf9\u51fd\u6570\u8c03\u7528\u505a\u4ee5\u9650\u5236\u3002\u6700\u5e38\u89c1\u7684\u4e1a\u52a1\u573a\u666f\u662f\u76d1\u542c\u9875\u9762\u7684 ",(0,t.jsx)(e.code,{children:"scroll"})," \u4e8b\u4ef6\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u5728 1s \u5185\u89e6\u53d1\u8be5\u4e8b\u4ef6\u6570\u6b21\uff08\u751a\u81f3\u8fbe\u6570\u5341\u6b21\uff09\uff0c\u5982\u679c\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5728\u8fd9 1s \u5185\u591a\u6b21\u6267\u884c\uff0c\u5fc5\u7136\u4f1a\u9020\u6210\u4e00\u5b9a\u7684\u6027\u80fd\u95ee\u9898\uff0c\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u672c\u8d28\u4e0a\uff0c\u51fd\u6570\u8282\u6d41\u548c\u9632\u6296\u5e76\u4e0d\u662f\u63a7\u5236\u4e8b\u4ef6\u6e90\u7684\u89e6\u53d1\u6b21\u6570\uff0c\u800c\u662f\u5728\u4e8b\u4ef6\u77ed\u65f6\u95f4\u5185\u8fde\u7eed\u591a\u6b21\u89e6\u53d1\u4e4b\u540e\u63a7\u5236\u76f8\u5e94\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u7684\u8c03\u7528\u9891\u7387\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u8282\u6d41\uff1a\u5728\u4e00\u6bb5\u8fde\u7eed\u65f6\u95f4\u5185\uff0c\u9650\u5236\u51fd\u6570\u5728\u4e00\u5b9a\u65f6\u95f4\u95f4\u9694\u5185\u4ec5\u80fd\u8c03\u7528\u4e00\u6b21\u3002\uff08\u4f8b\u5982\uff0c\u65f6\u95f4\u95f4\u9694\u4e3a 1s\uff0c\u90a3\u4e48 10s \u5185\u81f3\u591a\u88ab\u8c03\u7528 10 \u6b21\u3002\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u9632\u6296\uff1a\u5728\u8fde\u7eed\u7684\u51fd\u6570\u8c03\u7528\u4e2d\uff0c\u9650\u5236\u4e24\u6b21\u51fd\u6570\u8c03\u7528\u7684\u65f6\u95f4\u95f4\u9694\u5e94\u5927\u4e8e\u4e00\u5b9a\u65f6\u95f4\u3002\uff08\u4f8b\u5982\uff0c\u65f6\u95f4\u95f4\u9694\u4e3a 1s\uff0c\u8fde\u7eed\u8c03\u7528\u51fd\u6570\u591a\u6b21\u4e14\u6bcf\u6b21\u95f4\u9694\u5c0f\u4e8e 1s\uff0c\u90a3\u4e48 10s \u5185\u81f3\u591a\u88ab\u8c03\u7528 1 \u6b21\u3002\uff09"}),"\n"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://css-tricks.com/debouncing-throttling-explained-examples/",children:"\u63a8\u8350\u9605\u8bfb\uff1a\u901a\u8fc7\u793a\u4f8b\u89e3\u91ca\u9632\u6296\u548c\u8282\u6d41"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u89e3\u6790\u4ee3\u7801\u5b9e\u73b0",children:"\u89e3\u6790\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u8fd9\u91cc\uff0c\u4e3b\u8981\u662f\u5206\u6790\u4e00\u4e0b\u5982\u4f55\u7528\u4ee3\u7801\u5b9e\u73b0\u51fd\u6570\u7684\u8282\u6d41\u548c\u9632\u6296\u529f\u80fd\u3002\u5f53\u7136\uff0c\u5e76\u4e0d\u6253\u7b97\u81ea\u5df1\u624b\u5199\u5b9e\u73b0\uff0c\u4ee5\u76ee\u524d\u6bd4\u8f83\u6210\u719f\u7684\u5de5\u5177\u5e93\uff08",(0,t.jsx)(e.a,{href:"https://lodash.com/",children:"Lodash"}),"\uff09\u6240\u63d0\u4f9b\u7684\u5b9e\u73b0\u4e3a\u57fa\u7840\u6765\u8fdb\u884c\u5206\u6790\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5927\u81f4\u7684\u5b9e\u73b0\u601d\u8def\u57fa\u672c\u4e0a\u4e00\u6837\uff0c\u90fd\u662f\u5229\u7528\u95ed\u5305\uff0c\u7ef4\u62a4\u5185\u90e8\u72b6\u6001\uff0c\u6839\u636e\u5185\u90e8\u72b6\u6001\u6765\u5bf9\u51fd\u6570\u8c03\u7528\u505a\u5177\u4f53\u63a7\u5236\u3002\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function debounce(func, time_interval) {\n  // ...\n  return () => {\n    func.apply(thisArg, arguments);\n  };\n}\n\n// \u5bf9\u51fd\u6570\u8fdb\u884c\u9632\u6296\u5904\u7406\u5305\u88c5\nconst debounced = debounce(() => {}, 1000);\n\ndebounced(); // \u8c03\u7528 n \u6b21\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u9632\u6296debounce",children:"\u9632\u6296\uff08Debounce\uff09"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/lodash/lodash/blob/master/debounce.js",children:"_.debounce \u6e90\u7801"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u9996\u5148\u770b\u4e00\u4e0b\u5176\u6e90\u7801\u4e3b\u4f53\u7ed3\u6784\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function debounce(func, wait, options) {\n  // \u5185\u90e8\u72b6\u6001\n  let lastArgs,\n    lastThis, // \u4fdd\u5b58\u6700\u540e\u4e00\u6b21\u51fd\u6570\u8c03\u7528\u4f20\u5165\u7684\u53c2\u6570\u5217\u8868\u548c this \u6307\u5411\n    maxWait,\n    result, // \u51fd\u6570\u6267\u884c\u7ed3\u679c\n    timerId,\n    lastCallTime; // \u5173\u952e\uff1a\u4e3b\u8981\u7528\u6765\u9650\u5236\u51fd\u6570\u8c03\u7528\n\n  // ...\n\n  // wait \u6ca1\u6709\u6307\u5b9a\u65f6\uff0c\u9ed8\u8ba4\u5229\u7528 requestAnimationFrame API \u505a\u4e86\u6027\u80fd\u4f18\u5316\n  const useRAF =\n    !wait && wait !== 0 && typeof root.requestAnimationFrame === 'function';\n\n  // \u95ed\u5305\u7ed3\u6784\n  function debounced(...args) {}\n\n  // \u5de5\u5177\u65b9\u6cd5\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  debounced.pending = pending;\n\n  return debounced;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u662f\u7b26\u5408\u5229\u7528\u95ed\u5305\u5b9e\u73b0\u7684\u601d\u8def\u7684\uff0c\u5176\u4e2d\u8fd8\u63a5\u53d7\u7b2c\u4e09\u4e2a\u53c2\u6570 ",(0,t.jsx)(e.code,{children:"options"}),"\uff0clodash \u5e93\u5bf9\u8be5\u9632\u6296\u529f\u80fd\u505a\u4e86\u589e\u5f3a\uff0c\u540c\u65f6\u4e5f\u6dfb\u52a0\u4e86\u4e09\u4e2a\u5de5\u5177\u65b9\u6cd5 ",(0,t.jsx)(e.code,{children:"cancel"}),"\u3001",(0,t.jsx)(e.code,{children:"flush"}),"\u3001",(0,t.jsx)(e.code,{children:"pending"}),"\u3002\u5f88\u6709\u610f\u601d\u7684\u662f\uff0clodash \u9ed8\u8ba4\u5229\u7528 ",(0,t.jsxs)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",children:[(0,t.jsx)(e.code,{children:"requestAnimationFrame"})," API"]})," \u505a\u4e86\u6027\u80fd\u4f18\u5316\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u9632\u6296\u7684\u6838\u5fc3\u601d\u60f3\u662f\uff1a",(0,t.jsx)(e.strong,{children:"\u9650\u5236\u4e24\u6b21\u51fd\u6570\u8c03\u7528\u7684\u65f6\u95f4\u95f4\u9694\u5e94\u5927\u4e8e\u4e00\u5b9a\u65f6\u95f4"}),"\u3002\u6765\u770b\u770b\u5177\u4f53\u7684\u5b9e\u73b0\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function debounce(func, wait, options) {\n  // \u5b9e\u9645\u8c03\u7528\u51fd\u6570\n  function invokeFunc(time) {\n    const args = lastArgs;\n    const thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args); // \u5173\u952e\uff1a\u5229\u7528 apply \u8c03\u7528\uff0c\u4fdd\u8bc1 this \u6307\u5411\u548c\u53c2\u6570\u5217\u8868\u6b63\u786e\n\n    return result;\n  }\n\n  // \u5173\u952e\uff1a\u521b\u5efa\u8d85\u65f6\u5668\uff0c\u5f02\u6b65\u8c03\u7528\u51fd\u6570\n  // \u5f02\u6b65\u8c03\u7528\u7684\u76ee\u7684\u662f\u5728\u4e24\u6b21\u8c03\u7528\u4e4b\u95f4\u65f6\u95f4\u95f4\u9694\u8fc7\u77ed\uff08\u4e0d\u7b26\u5408\u9650\u5236\u6761\u4ef6\uff09\u65f6\uff0c\u5ef6\u540e\u8c03\u7528\u76f4\u81f3\u6ee1\u8db3\u6761\u4ef6\n  function startTimer(pendingFunc, wait) {\n    if (useRAF) {\n      root.cancelAnimationFrame(timerId);\n      return root.requestAnimationFrame(pendingFunc);\n    }\n    return setTimeout(pendingFunc, wait);\n  }\n\n  // \u5224\u65ad\u662f\u5426\u53ef\u4ee5\u8c03\u7528\u51fd\u6570\n  function shouldInvoke(time) {\n    const timeSinceLastCall = time - lastCallTime;\n    const timeSinceLastInvoke = time - lastInvokeTime;\n\n    // \u5173\u952e\uff1a\u8fd9\u4e00\u884c\u7684\u5224\u65ad\u6761\u4ef6\uff0c\u9650\u5236\u4e24\u6b21\u51fd\u6570\u8c03\u7528\u7684\u65f6\u95f4\u95f4\u9694\u5e94\u5927\u4e8e\u4e00\u5b9a\u65f6\u95f4\n    return (\n      lastCallTime === undefined ||\n      timeSinceLastCall >= wait ||\n      timeSinceLastCall < 0 ||\n      (maxing && timeSinceLastInvoke >= maxWait)\n    );\n  }\n\n  function timerExpired() {\n    const time = Date.now();\n\n    // \u5173\u952e\uff1a\u8d85\u65f6\u5668\u5230\u671f\u540e\uff0c\u9700\u8981\u518d\u6b21\u68c0\u67e5\u662f\u5426\u6ee1\u8db3\u6761\u4ef6\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    timerId = startTimer(timerExpired, remainingWait(time));\n  }\n\n  function debounced(...args) {\n    const time = Date.now();\n    const isInvoking = shouldInvoke(time);\n\n    lastArgs = args; // \u6bcf\u6b21\u8c03\u7528\u90fd\u66f4\u65b0\u4fdd\u5b58\u7684\u53c2\u6570\u5217\u8868\u548c this \u6307\u5411\n    lastThis = this;\n    lastCallTime = time; // \u5173\u952e\uff1a\u8bb0\u5f55\u6bcf\u6b21\u51fd\u6570\u8c03\u7528\u7684\u65f6\u95f4\uff0c\u5728\u4e0b\u4e00\u6b21\u8c03\u7528\u65f6\u5bf9\u65f6\u95f4\u95f4\u9694\u8fdb\u884c\u5224\u65ad\n\n    // \u5173\u952e\uff1a\u8fdb\u884c\u4e24\u6b21\u8c03\u7528\u65f6\u95f4\u95f4\u9694\u5224\u65ad\uff0c\u5e76\u521b\u5efa\u8d85\u65f6\u5668\u5f02\u6b65\u6267\u884c\u51fd\u6570\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        timerId = startTimer(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = startTimer(timerExpired, wait);\n    }\n\n    return result;\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6e90\u7801\u4e2d\u50cf ",(0,t.jsx)(e.code,{children:"trailingEdge()"}),"\u3001",(0,t.jsx)(e.code,{children:"leadingEdge()"})," \u3001",(0,t.jsx)(e.code,{children:"remainingWait()"})," \u7b49\u53ef\u4ee5\u6682\u65f6\u5ffd\u7565\u6389\uff0c\u8fd9\u4e9b\u51fd\u6570\u4e3b\u8981\u662f lodash \u4e3a\u7ed3\u5408 ",(0,t.jsx)(e.code,{children:"options"})," \u5bf9\u9632\u6296\u529f\u80fd\u505a\u7684\u4e00\u4e9b\u589e\u5f3a\u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4f9d\u636e\u6e90\u7801\uff0c\u9632\u6296\u7684\u5b9e\u73b0\u601d\u8def\u662f\uff1a\u5229\u7528\u95ed\u5305\u8fd4\u56de\u4e00\u4e2a\u5f85\u8c03\u7528\u51fd\u6570 ",(0,t.jsx)(e.code,{children:"debounced"}),"\uff0c\u5b9e\u9645\u8981\u8c03\u7528\u7684\u51fd\u6570 ",(0,t.jsx)(e.code,{children:"func()"})," \u91c7\u7528\u5f02\u6b65\u8c03\u7528\u7684\u65b9\u5f0f\uff0c\u5728\u6211\u4eec\u6bcf\u6b21\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u5229\u7528 ",(0,t.jsx)(e.code,{children:"shouldInvoke()"})," \u51fd\u6570\uff08\u4e3b\u8981\u662f\u5229\u7528 ",(0,t.jsx)(e.code,{children:"Date.now()"})," \u4e0e ",(0,t.jsx)(e.code,{children:"lastCallTime"}),"\uff09\u5224\u65ad\u662f\u5426\u6ee1\u8db3\u65f6\u95f4\u95f4\u9694\u6761\u4ef6\uff0c\u5728\u6ee1\u8db3\u6761\u4ef6\u65f6\u5229\u7528 ",(0,t.jsx)(e.code,{children:"startTimer()"})," \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u8d85\u65f6\u5668\u53bb\u5f02\u6b65\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\uff0c\u800c\u5728\u6bcf\u6b21\u8d85\u65f6\u5668\u5230\u671f\u540e\u8981\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u65f6\u90fd\u8981\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"shouldInvoke()"})," \u51fd\u6570\u518d\u6b21\u68c0\u67e5\u662f\u5426\u6ee1\u8db3\u6761\u4ef6\uff0c\u4e0d\u6ee1\u8db3\u5219\u7ee7\u7eed\u5ef6\u8fdf\u8c03\u7528\uff0c\u76f4\u81f3\u6ee1\u8db3\u6761\u4ef6\u540e\u6267\u884c ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\uff08\u4e3b\u8981\u4e3a ",(0,t.jsx)(e.code,{children:"invokeFunc()"})," \u51fd\u6570\uff09\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\u5b9e\u9645\u8981\u8c03\u7528\u7684 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u662f\u88ab\u5f02\u6b65\u8c03\u7528\u7684\uff0c\u5e76\u4e14\u4e3a\u4e86\u4fdd\u8bc1 ",(0,t.jsx)(e.code,{children:"this"})," \u6307\u5411\u548c\u53c2\u6570\u4e00\u81f4\uff0c\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"apply()"})," \u65b9\u6cd5\u53bb\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u9632\u6296\u589e\u5f3a",children:"\u9632\u6296\u589e\u5f3a"}),"\n",(0,t.jsx)(e.p,{children:"lodash \u5bf9\u9632\u6296\u529f\u80fd\u505a\u4e86\u589e\u5f3a\uff0c\u5148\u6765\u770b\u770b\u4e4b\u524d\u63d0\u5230\u7684\u4e09\u4e2a\u5de5\u5177\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function cancelTimer(id) {\n  if (useRAF) {\n    returnroot.cancelAnimationFrame(id);\n  }\n  clearTimeout(id);\n}\n\nfunction cancel() {\n  if (timerId !== undefined) {\n    cancelTimer(timerId); // \u6e05\u9664\u8d85\u65f6\u5668\uff0c\u5373\u53d6\u6d88\u5f02\u6b65\u7684 func() \u51fd\u6570\u8c03\u7528\n  }\n  // \u5c06\u72b6\u6001\u521d\u59cb\u5316\n  lastInvokeTime = 0;\n  lastArgs = lastCallTime = lastThis = timerId = undefined;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"cancel()"})," \u8fd9\u4e2a\u5de5\u5177\u65b9\u6cd5\u63d0\u4f9b\u4e86",(0,t.jsxs)(e.strong,{children:["\u5c06\u8981\u6267\u884c\u7684 ",(0,t.jsx)(e.code,{children:"func()"})," \u8c03\u7528\u53d6\u6d88\u6389"]}),"\u7684\u529f\u80fd\uff0c\u5b9e\u73b0\u8be5\u529f\u80fd\u4e5f\u5f97\u76ca\u4e8e\u5176\u5f02\u6b65\u8c03\u7528\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function trailingEdge(time) {\n  timerId = undefined; // \u5173\u952e\uff1a\u867d\u7136\u4e22\u5f03\u4e86\u5f15\u7528\uff0c\u4f46\u6ca1\u6709\u6e05\u9664\u8d85\u65f6\u5668\n\n  if (trailing && lastArgs) {\n    // \u5173\u952e\uff1a\u5229\u7528 lastArgs \u5728\u8c03\u7528 func() \u51fd\u6570\u524d\u505a\u4e86\u5224\u65ad\n    return invokeFunc(time); // \u5173\u952e\uff1a\u8be5\u51fd\u6570\u5185\u90e8\u4e5f\u6e05\u9664\u4e86 lastArgs\n  }\n  lastArgs = lastThis = undefined; // \u5173\u952e\uff1a\u5c06\u53c2\u6570\u5217\u8868\u6e05\u9664\uff0c\u610f\u5473\u7740\u5c06\u4e0d\u4f1a\u518d\u6b21\u8c03\u7528 func() \u51fd\u6570\n\n  return result;\n}\n\nfunction flush() {\n  return timerId === undefined ? result : trailingEdge(Date.now());\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"flush()"})," \u8fd9\u4e2a\u5de5\u5177\u65b9\u6cd5\u63d0\u4f9b\u4e86",(0,t.jsxs)(e.strong,{children:["\u7acb\u5373\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570"]}),"\u7684\u529f\u80fd\uff0c\u4f46\u8981\u6ce8\u610f\u7684\u662f\u5176\u5185\u90e8\u5b9e\u73b0\u4e2d\u53ea\u662f\u4e22\u6389\u4e86 ",(0,t.jsx)(e.code,{children:"timerId"})," \u5bf9\u5df2\u7ecf\u53d1\u8d77\u7684\u8d85\u65f6\u5668\u4efb\u52a1\u7684\u5f15\u7528\uff0c\u5e76\u6ca1\u6709\u6e05\u9664\u8d85\u65f6\u5668\uff0c\u90a3\u4e48\u4f1a\u4e0d\u4f1a\u9020\u6210\u5bf9 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u7684\u91cd\u590d\u8c03\u7528\u5462\uff1f\u6839\u636e\u6e90\u7801\u6765\u770b\uff0c\u5728\u8d85\u65f6\u5668\u5230\u671f\u4e4b\u540e\u7684 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u8c03\u7528\u4e4b\u524d\u7528 ",(0,t.jsx)(e.code,{children:"lastArgs"})," \u505a\u4e86\u5224\u65ad\uff0c\u800c\u5728\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"flush()"})," \u8fc7\u7a0b\u4e2d\u6e05\u9664\u4e86 ",(0,t.jsx)(e.code,{children:"lastArgs"})," \u7684\u503c\uff0c\u4e5f\u5c31\u907f\u514d\u4e86\u91cd\u590d\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"func()"})," \u7684\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u81f3\u4e8e\u4e3a\u4f55\u4e0d\u76f4\u63a5\u6e05\u9664\u6389\u8d85\u65f6\u5668\uff0c\u800c\u53ea\u662f\u4e22\u5f03\u5f15\u7528\uff1f\u4e0d\u5f97\u800c\u77e5\u3002\u4f46\u6211\u731c\u6d4b\u5e94\u8be5\u662f\u57fa\u4e8e\u6a21\u5757\u8bbe\u8ba1\u4e0a\u7684\u8003\u8651\uff0c\u56e0\u4e3a ",(0,t.jsx)(e.code,{children:"trailingEdge()"})," \u51fd\u6570\u88ab\u8c03\u7528\u7684\u65f6\u673a\u5c31\u662f\u8d85\u65f6\u5668\u5230\u671f\u4e4b\u540e\uff0c\u6240\u4ee5\u5b83\u53ea\u8d1f\u8d23\u6e05\u9664\u6389 ",(0,t.jsx)(e.code,{children:"timerId"})," \u7684\u503c\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function pending() {\n  return timerId !== undefined;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"pending()"})," \u8fd9\u4e2a\u5de5\u5177\u65b9\u6cd5\u5c31\u6bd4\u8f83\u7b80\u5355\u4e86\uff0c\u4ec5\u63d0\u4f9b\u4e86",(0,t.jsxs)(e.strong,{children:["\u83b7\u53d6\u76ee\u524d\u662f\u5426\u5904\u4e8e\u7b49\u5f85\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u7684\u72b6\u6001"]}),"\u7684\u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\u770b\u770b ",(0,t.jsx)(e.code,{children:"options"})," \u8fd9\u4e2a\u53c2\u6570\u5e26\u6765\u4e86\u54ea\u4e9b\u529f\u80fd\u4e0a\u7684\u589e\u5f3a\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"let maxWait;\nlet leading = false; // \u9ed8\u8ba4 false\nlet maxing = false;\nlet trailing = true; // \u9ed8\u8ba4\u662f true\n\nif (isObject(options)) {\n  leading = !!options.leading;\n  maxing = 'maxWait' in options;\n  maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait; // \u5173\u952e\uff1a\u53d6 maxWait \u548c wait \u6700\u5927\u503c\n  trailing = 'trailing' in options ? !!options.trailing : trailing;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"{ leading, maxWait, trailing }"})," \u6709\u4e09\u4e2a\u9009\u9879\u5b57\u6bb5\u3002\u5148\u6765\u770b\u770b ",(0,t.jsx)(e.code,{children:"maxWait"})," \u9009\u9879\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function remainingWait(time) {\n  const timeSinceLastCall = time - lastCallTime;\n  const timeSinceLastInvoke = time - lastInvokeTime;\n  const timeWaiting = wait - timeSinceLastCall;\n\n  // \u5173\u952e\uff1amaxWait \u51b3\u5b9a\u4e86\u8d85\u65f6\u5668\u7684\u8d85\u65f6\u65f6\u95f4\n  return maxing\n    ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)\n    : timeWaiting;\n}\n\nfunction shouldInvoke(time) {\n  const timeSinceLastCall = time - lastCallTime;\n  const timeSinceLastInvoke = time - lastInvokeTime;\n\n  return (\n    lastCallTime === undefined ||\n    timeSinceLastCall >= wait ||\n    // \u5173\u952e\uff1amaxWait \u51b3\u5b9a\u4e86\u8be5\u4e0d\u8be5\u8c03\u7528 func() \u51fd\u6570\n    timeSinceLastCall < 0 ||\n    (maxing && timeSinceLastInvoke >= maxWait)\n  );\n}\n\nfunction timerExpired() {\n  // ...\n  timerId = startTimer(timerExpired, remainingWait(time));\n}\n\nfunction debounced(...args) {\n  // ...\n  const isInvoking = shouldInvoke(time);\n  // ...\n  if (isInvoking) {\n    // ...\n    if (maxing) {\n      timerId = startTimer(timerExpired, wait);\n      return invokeFunc(lastCallTime);\n    }\n  }\n  // ...\n  return result;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u867d\u7136\u4ee3\u7801\u770b\u8d77\u6765\u5f88\u591a\uff0c\u4f46\u5b9e\u9645 ",(0,t.jsx)(e.code,{children:"maxWait"})," \u53ea\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u529f\u80fd\uff1a",(0,t.jsxs)(e.strong,{children:["\u5728\u5bf9\u51fd\u6570\u8fdb\u884c\u9632\u6296\u5904\u7406\u4e2d\uff0c\u4e24\u6b21 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u5b9e\u9645\u8c03\u7528\u95f4\u9694\u81f3\u591a\u4e3a ",(0,t.jsx)(e.code,{children:"maxWait"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4e24\u6b21\u8c03\u7528\u65f6\u95f4\u95f4\u9694\u8fbe\u5230\u8be5\u65f6\u95f4\uff0c\u65e0\u8bba ",(0,t.jsx)(e.code,{children:"wait"})," \u9650\u5236\u5982\u4f55\uff0c\u5747\u4f1a\u6267\u884c ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u8c03\u7528\u3002"]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u4e2a\u5176\u5b9e\u89e3\u51b3\u4e86\u56e0\u4e3a\u51fd\u6570\u8c03\u7528\u9891\u7387\u8fc7\u9ad8\uff0c",(0,t.jsx)(e.code,{children:"func()"})," \u957f\u65f6\u95f4\u5f97\u4e0d\u5230\u5b9e\u9645\u8c03\u7528\u7684\u4e1a\u52a1\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\uff0c\u9700\u8981\u628a ",(0,t.jsx)(e.code,{children:"leading"})," \u548c ",(0,t.jsx)(e.code,{children:"trailing"})," \u4e24\u4e2a\u9009\u9879\u653e\u5728\u4e00\u8d77\u770b\uff0c\u56e0\u4e3a\u5b83\u4eec\u521a\u597d\u662f\u5bf9\u7acb\u7684\u4e00\u7ec4\u503c\uff0c\u672c\u8d28\u4e0a\u89e3\u51b3\u7684\u662f\u540c\u4e00\u4e2a\u95ee\u9898\uff1a",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u5b9e\u9645\u8c03\u7528\u7684\u65f6\u673a\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function leadingEdge(time) {\n  lastInvokeTime = time;\n\n  timerId = startTimer(timerExpired, wait);\n  // \u5173\u952e\uff1a\u5229\u7528 leading \u5224\u65ad\n  return leading ? invokeFunc(time) : result;\n}\n\nfunction timerExpired() {\n  const time = Date.now();\n\n  if (shouldInvoke(time)) {\n    return trailingEdge(time); // \u5173\u952e\uff1a\u8d85\u65f6\u5668\u5230\u671f\u540e\u603b\u662f\u8c03\u7528 trailingEdge() \u51fd\u6570\n  }\n\n  timerId = startTimer(timerExpired, remainingWait(time));\n}\n\nfunction trailingEdge(time) {\n  timerId = undefined;\n\n  // \u5173\u952e\uff1a\u5229\u7528 trailing \u8fdb\u884c\u5224\u65ad\n  if (trailing && lastArgs) {\n    return invokeFunc(time);\n  }\n  lastArgs = lastThis = undefined;\n\n  return result;\n}\n\nfunction debounced(...args) {\n  // ...\n  if (isInvoking) {\n    if (timerId === undefined) {\n      return leadingEdge(lastCallTime);\n    }\n    // ...\n  }\n  // ...\n  return result;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u9996\u5148\u8bf4\u7ed3\u8bba\uff1a",(0,t.jsxs)(e.strong,{children:["\u5f53 ",(0,t.jsx)(e.code,{children:"leading=true"})," \u65f6\u51b3\u5b9a\u5bf9 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u7684\u5b9e\u9645\u8c03\u7528\u5728\u521b\u5efa\u8d85\u65f6\u5668\u65f6\uff08\u63d0\u524d\u8c03\u7528\uff09\uff0c\u800c ",(0,t.jsx)(e.code,{children:"trailing=true"})," \u65f6\u51b3\u5b9a\u5bf9 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u7684\u5b9e\u9645\u8c03\u7528\u5728\u521b\u5efa\u7684\u8d85\u65f6\u5668\u5230\u671f\u540e\uff08\u5ef6\u540e\u8c03\u7528\uff09\u3002"]})]}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u5b9e\u8981\u641e\u61c2\u5176\u4e2d\u7684\u601d\u8def\uff0c\u53ea\u8981\u7406\u89e3\u4e86\u4ee5\u4e0a\u51e0\u4e2a\u51fd\u6570\u5728\u5b9e\u9645\u8c03\u7528\u4e2d\u7684\u6267\u884c\u987a\u5e8f\u5373\u53ef\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"debounced() -> leadingEdge() -> timerExpired() -> trailingEdge() -> debounced()\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u5176\u5b9e\u662f\u4e00\u4e2a\u8c03\u7528\u5faa\u73af\uff0c\u65e0\u8bba ",(0,t.jsx)(e.code,{children:"leading"})," \u548c ",(0,t.jsx)(e.code,{children:"trailing"})," \u503c\u5982\u4f55\uff0c\u5176\u76f8\u5e94\u7684\u51fd\u6570 ",(0,t.jsx)(e.code,{children:"leadingEdge()"})," \u548c ",(0,t.jsx)(e.code,{children:"trailingEdge()"})," \u90fd\u53c2\u4e0e\u5176\u4e2d\uff0c\u53ea\u4e0d\u8fc7\u5728\u4e0d\u540c\u503c\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e24\u4e2a\u51fd\u6570\u6240\u626e\u6f14\u7684\u89d2\u8272\u4e0d\u540c\u800c\u5df2\u3002\u8fd9\u91cc\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5373\u53ef\u8bf4\u660e\u95ee\u9898\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"// \u5f53 leading=true\uff0c\u4e14 trailing=false \u65f6\uff1a\n// leadingEdge() \u51fd\u6570\u4e3b\u8981\u4f5c\u7528\u662f\u8c03\u7528 invokeFunc() \u51fd\u6570\u6765\u5b9e\u9645\u8c03\u7528 func() \u51fd\u6570\n// trailingEdge() \u51fd\u6570\u4e3b\u8981\u4f5c\u7528\u5219\u662f\u8d85\u65f6\u5668\u5230\u671f\u540e\u6e05\u9664\u6389\u5185\u90e8\u72b6\u6001\uff0c\u4e3b\u8981\u662f timerId \u7684\u503c\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u90a3\u4e48\u8fd9\u91cc\u6709\u4e2a\u503c\u5f97\u8003\u8651\u7684\u70b9\uff0c\u6309\u7167\u5e38\u89c4\u7684\u5b9e\u73b0\u601d\u8def\u4e0d\u5e94\u5c06 ",(0,t.jsx)(e.code,{children:"leadingEdge()"})," \u548c ",(0,t.jsx)(e.code,{children:"trailingEdge()"})," \u51fd\u6570\u653e\u5728\u4e00\u8d77\u540c\u65f6\u5904\u7406\u903b\u8f91\uff0c\u800c\u5e94\u8be5\u6309\u7167\u6761\u4ef6\u5224\u65ad\u72ec\u7acb\u6210\u4e24\u6761\u7ebf\u53bb\u5904\u7406\u903b\u8f91\u3002\u6839\u636e\u6e90\u7801\u5206\u6790\u6765\u770b\uff0c\u6211\u731c\u6d4b\u662f\u56e0\u4e3a lodash \u6240\u63d0\u4f9b\u7684 ",(0,t.jsx)(e.code,{children:"leading"})," \u548c ",(0,t.jsx)(e.code,{children:"trailing"})," \u4e24\u4e2a\u9009\u9879\u5e76\u975e\u5b8c\u5168\u5bf9\u7acb\u7684\u4e00\u7ec4\u503c\uff0c\u53ef\u80fd\u5b58\u5728\u5b83\u4eec\u540c\u65f6\u4e3a ",(0,t.jsx)(e.code,{children:"true"})," \u7684\u60c5\u51b5\uff08\u5728\u51fd\u6570\u7684\u9876\u90e8\u6ce8\u91ca\u4e2d\u6709\u6240\u8bf4\u660e\uff09\u3002\u5f53\u7136\u8fd9\u91cc\u4e0d\u80fd\u540c\u65f6\u4e3a ",(0,t.jsx)(e.code,{children:"false"}),"\uff0c\u56e0\u4e3a\u5206\u6790\u4e0b\u6e90\u7801\u7684\u5b9e\u73b0\uff0c\u4f60\u4f1a\u53d1\u73b0 ",(0,t.jsx)(e.code,{children:"func()"})," \u51fd\u6570\u5c06\u6c38\u8fdc\u5f97\u4e0d\u5230\u5b9e\u9645\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u8282\u6d41throttle",children:"\u8282\u6d41\uff08Throttle\uff09"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/lodash/lodash/blob/master/throttle.js",children:"_.throttle \u6e90\u7801"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e4b\u6240\u4ee5\u5148\u89e3\u6790\u9632\u6296\u7684\u5b9e\u73b0\uff0c\u662f\u56e0\u4e3a\u8282\u6d41\u7684\u6e90\u7801\u5b9e\u73b0\u4e2d\u5f15\u7528\u5230\u4e86\u9632\u6296\u7684\u6e90\u7801\u5b9e\u73b0\uff0c\u8fd9\u6837\u53cd\u800c\u8ba9\u8282\u6d41\u7684\u6e90\u7801\u5b9e\u73b0\u770b\u8d77\u6765\u76f8\u5f53\u7b80\u6d01\u3002\u6e90\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function throttle(func,\xa0wait,\xa0options)\xa0{\n    let leading\xa0=\xa0true\n    let trailing\xa0=\xa0true\n\n    if\xa0(typeof func\xa0!==\xa0'function')\xa0{\n        throw new TypeError('Expected\xa0a\xa0function')\n    }\n\n    if\xa0(isObject(options))\xa0{\n        leading\xa0=\xa0'leading'inoptions\xa0?\xa0!!options.leading\xa0:\xa0leading\n        trailing\xa0=\xa0'trailing'inoptions\xa0?\xa0!!options.trailing\xa0:\xa0trailing\n    }\n\n    return debounce(func,\xa0wait,\xa0{\n        leading,\n        trailing,\n        'maxWait': wait\n    })\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"options: { leading, trailing, maxWait }"})," \u9009\u9879\u4e2d\u7684 ",(0,t.jsx)(e.code,{children:"leading"})," \u548c ",(0,t.jsx)(e.code,{children:"trailing"})," \u4e0d\u518d\u7ec6\u8bf4\uff0c\u53c2\u8003\u9632\u6296\u7684\u7406\u89e3\u5373\u53ef\u3002\u800c ",(0,t.jsx)(e.code,{children:"maxWait"})," \u9009\u9879\u5219\u662f\u5173\u952e\uff0c\u5b83\u6ca1\u6709\u5bf9\u5916\u66b4\u9732\uff0c\u800c\u662f\u76f4\u63a5\u9ed8\u8ba4\u4f7f\u7528\u4e86 ",(0,t.jsx)(e.code,{children:"wait"})," \u7684\u503c\uff08\u5b9e\u9645\u4e0a\u8fd9\u4e5f\u662f\u8ba9\u8282\u6d41\u53ef\u4ee5\u5229\u7528\u9632\u6296\u6765\u5b9e\u73b0\u7684\u4e3b\u8981\u539f\u56e0\uff09\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4e3b\u8981\u5206\u6790\u4e0b ",(0,t.jsx)(e.code,{children:"maxWait"})," \u9009\u9879\u662f\u5982\u4f55\u8ba9\u8282\u6d41\u53ef\u4ee5\u5229\u7528\u9632\u6296\u6765\u5b9e\u73b0\u7684\u6838\u5fc3\u601d\u8def\u3002\u56de\u8fc7\u5934\u6765\uff0c\u6211\u4eec\u770b\u770b\u51fd\u6570\u7684\u8282\u6d41\u548c\u9632\u6296\u7684\u6982\u5ff5\uff0c\u5c31\u53ef\u4ee5\u53d1\u73b0\u5b83\u4eec\u672c\u8d28\u4e0a\u90fd\u662f\u5bf9\u51fd\u6570\u8c03\u7528\u9891\u7387\u505a\u4e86\u9650\u5236\uff0c",(0,t.jsx)(e.strong,{children:"\u552f\u4e00\u4e0d\u540c\u7684\u662f\u51fd\u6570\u9632\u6296\u4f1a\u5728\u51fd\u6570\u8c03\u7528\u8fc7\u5feb\u65f6\uff08\u4e0d\u6ee1\u8db3\u9650\u5236\u6761\u4ef6\u65f6\uff09\u65e0\u9650\u671f\u7684\u5ef6\u8fdf\u51fd\u6570\u7684\u5b9e\u9645\u8c03\u7528\uff0c\u800c\u51fd\u6570\u8282\u6d41\u5fc5\u987b\u8981\u4fdd\u8bc1\u51fd\u6570\u7684\u5b9e\u9645\u8c03\u7528\u8981\u5728\u9650\u5236\u65f6\u95f4\u5185\u81f3\u5c11\u53d1\u751f\u4e00\u6b21\u3002"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u800c\u5728\u524d\u9762\u6211\u4eec\u5206\u6790\u9632\u6296\u7684\u529f\u80fd\u589e\u5f3a\u5b9e\u73b0\u65f6\uff0c",(0,t.jsx)(e.code,{children:"maxWait"})," \u9009\u9879\u4e3a\u51fd\u6570\u9632\u6296\u63d0\u4f9b\u7684\u6b63\u662f\u5728\u8fbe\u5230 ",(0,t.jsx)(e.code,{children:"maxWait"})," \u65f6\u95f4\u65f6\u5b9e\u9645\u7684\u51fd\u6570\u8c03\u7528\u5fc5\u987b\u53d1\u751f\u4e00\u6b21\u7684\u529f\u80fd\u3002\u90a3\u4e48\uff0c\u5f53 ",(0,t.jsx)(e.code,{children:"wait === maxWait"})," \u65f6\u6070\u597d\u6ee1\u8db3\u4e86\u8282\u6d41\u7684\u8981\u6c42\u3002\u6240\u4ee5\uff0clodash \u5728\u589e\u5f3a\u9632\u6296\u7684\u65f6\u5019\uff0c\u540c\u65f6\u5229\u7528\u9632\u6296\u4e5f\u5b9e\u73b0\u4e86\u8282\u6d41\u7684\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,t.jsx)(e.p,{children:"\u51fd\u6570\u7684\u8282\u6d41\u548c\u9632\u6296\u662f\u4e2a\u5f88\u5e38\u7528\u7684\u6027\u80fd\u4f18\u5316\u6280\u5de7\uff0c\u5b9e\u73b0\u601d\u8def\u4e5f\u6bd4\u8f83\u7b80\u5355\uff0c\u4f46 lodash \u5bf9\u57fa\u672c\u7684\u903b\u8f91\u8fdb\u884c\u4e86\u589e\u5f3a\uff0c\u4ee5\u9002\u5e94\u66f4\u591a\u7684\u4e1a\u52a1\u573a\u666f\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5728\u6e90\u7801\u5b9e\u73b0\u5c42\u9762\u6765\u770b\uff0clodash \u5bf9\u9632\u6296\u7684\u589e\u5f3a\u903b\u8f91\u53cd\u800c\u964d\u4f4e\u4e86\u8282\u6d41\u5b9e\u73b0\u7684\u590d\u6742\u6027\uff0c\u8fd9\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u662f\u66f4\u503c\u5f97\u501f\u9274\u7684\u4e00\u79cd\u601d\u8def\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>l});var t=i(67294);const r={},s=t.createContext(r);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);