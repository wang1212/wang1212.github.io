"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[66610],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>m});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function P(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),I=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):P(P({},t),e)),l},o=function(e){var t=I(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=I(l),m=r,c=k["".concat(i,".").concat(m)]||k[m]||u[m]||a;return l?n.createElement(c,P(P({ref:t},o),{},{components:l})):n.createElement(c,P({ref:t},o))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,P=new Array(a);P[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,P[1]=p;for(var I=2;I<a;I++)P[I]=l[I];return n.createElement.apply(null,P)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},66492:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>P,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>I});var n=l(87462),r=(l(67294),l(3905));const a={title:"IP \u534f\u8bae",date:new Date("2016-06-23T18:02:00.000Z"),update:new Date("2016-06-23T18:02:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","IP"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","IP"],description:"\u4f5c\u4e3a TCP/IP \u534f\u8bae\u6808\u4e2d\u6700\u6838\u5fc3\u7684\u534f\u8bae\uff0cIP \u534f\u8bae\u4e3a\u7f51\u7edc\u6570\u636e\u4f20\u8f93\u548c\u7f51\u7edc\u4e92\u8054\u63d0\u4f9b\u6700\u57fa\u672c\u7684\u670d\u52a1\u3002IP \u534f\u8bae\u6709 IPv4 \u548c IPv6 \u4e24\u4e2a\u7248\u672c\uff0c\u6211\u4eec\u53ea\u8ba8\u8bba TPv4 \u7248\u672c\u7684 IP \u534f\u8bae\u3002"},P=void 0,p={permalink:"/Computer-Technology/Protocol/protocol-ip",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Protocol/protocol-ip.md",source:"@site/blog/Computer-Technology/Protocol/protocol-ip.md",title:"IP \u534f\u8bae",description:"\u4f5c\u4e3a TCP/IP \u534f\u8bae\u6808\u4e2d\u6700\u6838\u5fc3\u7684\u534f\u8bae\uff0cIP \u534f\u8bae\u4e3a\u7f51\u7edc\u6570\u636e\u4f20\u8f93\u548c\u7f51\u7edc\u4e92\u8054\u63d0\u4f9b\u6700\u57fa\u672c\u7684\u670d\u52a1\u3002IP \u534f\u8bae\u6709 IPv4 \u548c IPv6 \u4e24\u4e2a\u7248\u672c\uff0c\u6211\u4eec\u53ea\u8ba8\u8bba TPv4 \u7248\u672c\u7684 IP \u534f\u8bae\u3002",date:"2016-06-23T18:02:00.000Z",formattedDate:"2016\u5e746\u670823\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u534f\u8bae",permalink:"/tags/\u534f\u8bae"},{label:"IP",permalink:"/tags/ip"}],readingTime:17.99,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"IP \u534f\u8bae",date:"2016-06-23T18:02:00.000Z",update:"2016-06-23T18:02:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","IP"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u534f\u8bae","IP"],description:"\u4f5c\u4e3a TCP/IP \u534f\u8bae\u6808\u4e2d\u6700\u6838\u5fc3\u7684\u534f\u8bae\uff0cIP \u534f\u8bae\u4e3a\u7f51\u7edc\u6570\u636e\u4f20\u8f93\u548c\u7f51\u7edc\u4e92\u8054\u63d0\u4f9b\u6700\u57fa\u672c\u7684\u670d\u52a1\u3002IP \u534f\u8bae\u6709 IPv4 \u548c IPv6 \u4e24\u4e2a\u7248\u672c\uff0c\u6211\u4eec\u53ea\u8ba8\u8bba TPv4 \u7248\u672c\u7684 IP \u534f\u8bae\u3002"},prevItem:{title:"HTTP \u534f\u8bae",permalink:"/Computer-Technology/Protocol/protocol-http"},nextItem:{title:"TCP \u4e0e UDP \u534f\u8bae",permalink:"/Computer-Technology/Protocol/protocol-tcp-udp"}},i={authorsImageUrls:[void 0]},I=[{value:"IP \u534f\u8bae",id:"ip-\u534f\u8bae",level:2},{value:"IP \u534f\u8bae\u5b9a\u4e49",id:"ip-\u534f\u8bae\u5b9a\u4e49",level:3},{value:"IP \u534f\u8bae\u7684\u57fa\u672c\u529f\u80fd",id:"ip-\u534f\u8bae\u7684\u57fa\u672c\u529f\u80fd",level:3},{value:"IP \u534f\u8bae\u7684\u7279\u6027",id:"ip-\u534f\u8bae\u7684\u7279\u6027",level:3},{value:"\u6570\u636e\u62a5\u5206\u7247",id:"\u6570\u636e\u62a5\u5206\u7247",level:3},{value:"\u6700\u5927\u4f20\u8f93\u5355\u5143\uff08MTU\uff09",id:"\u6700\u5927\u4f20\u8f93\u5355\u5143mtu",level:4},{value:"\u5206\u7247\u4e0e\u91cd\u7ec4",id:"\u5206\u7247\u4e0e\u91cd\u7ec4",level:4},{value:"IP \u5bfb\u5740\u4e0e\u5730\u5740\u89e3\u6790",id:"ip-\u5bfb\u5740\u4e0e\u5730\u5740\u89e3\u6790",level:2},{value:"IP \u5730\u5740",id:"ip-\u5730\u5740",level:3},{value:"IP \u5730\u5740\u683c\u5f0f",id:"ip-\u5730\u5740\u683c\u5f0f",level:4},{value:"IP \u5730\u5740\u5206\u914d",id:"ip-\u5730\u5740\u5206\u914d",level:4},{value:"IP \u5730\u5740\u5206\u7c7b\u7f16\u5740",id:"ip-\u5730\u5740\u5206\u7c7b\u7f16\u5740",level:4},{value:"IP \u5b50\u7f51\u4e0e\u8d85\u7f51",id:"ip-\u5b50\u7f51\u4e0e\u8d85\u7f51",level:3},{value:"\u5b50\u7f51\u63a9\u7801\uff08Subnet Mask\uff09",id:"\u5b50\u7f51\u63a9\u7801subnet-mask",level:4},{value:"\u5212\u5206\u5b50\u7f51",id:"\u5212\u5206\u5b50\u7f51",level:4},{value:"\u7ec4\u5408\u8d85\u7f51",id:"\u7ec4\u5408\u8d85\u7f51",level:4},{value:"\u5730\u5740\u89e3\u6790",id:"\u5730\u5740\u89e3\u6790",level:3},{value:"ARP\uff08\u5730\u5740\u89e3\u6790\u534f\u8bae\uff09",id:"arp\u5730\u5740\u89e3\u6790\u534f\u8bae",level:4},{value:"RARP\uff08\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae\uff09",id:"rarp\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae",level:4},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],o={toc:I};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-06-23 18:02:00"))),(0,r.kt)("p",null,"\u4f5c\u4e3a TCP/IP \u534f\u8bae\u6808\u4e2d\u6700\u6838\u5fc3\u7684\u534f\u8bae\uff0cIP \u534f\u8bae\u4e3a\u7f51\u7edc\u6570\u636e\u4f20\u8f93\u548c\u7f51\u7edc\u4e92\u8054\u63d0\u4f9b\u6700\u57fa\u672c\u7684\u670d\u52a1\u3002IP \u534f\u8bae\u6709 IPv4 \u548c IPv6 \u4e24\u4e2a\u7248\u672c\uff0c\u6211\u4eec\u53ea\u8ba8\u8bba TPv4 \u7248\u672c\u7684 IP \u534f\u8bae\u3002"),(0,r.kt)("h2",{id:"ip-\u534f\u8bae"},"IP \u534f\u8bae"),(0,r.kt)("p",null,"\u7f51\u7edc\u5c42\u662f\u7f51\u7edc\u4f53\u7cfb\u4e2d\u901a\u4fe1\u5b50\u7f51\u7684\u6700\u9ad8\u5c42\uff0c\u5bf9\u4e8e TCP/IP \u6765\u8bf4\uff0c\u7f51\u7edc\u5c42\u662f\u5176\u6838\u5fc3\u6240\u5728\u3002\u8be5\u5c42\u5305\u542b 5 \u4e2a\u534f\u8bae\uff1aIP\u3001ARP\u3001RARP\u3001ICMP\u3001IGMP\uff0c\u5176\u4e2d\u6700\u4e3b\u8981\u7684 IP \u534f\u8bae\u8d1f\u8d23\u751f\u6210\u53d1\u5f80\u76ee\u7684\u5730\u7684\u6570\u636e\u62a5\u4ee5\u5b9e\u73b0\u903b\u8f91\u5bfb\u5740\uff0c\u5b8c\u6210\u6570\u636e\u4ece\u7f51\u7edc\u4e0a\u4e00\u4e2a\u8282\u70b9\u5411\u53e6\u4e00\u4e2a\u8282\u70b9\u7684\u4f20\u8f93\u3002"),(0,r.kt)("h3",{id:"ip-\u534f\u8bae\u5b9a\u4e49"},"IP \u534f\u8bae\u5b9a\u4e49"),(0,r.kt)("p",null,"IP\uff08Internet Pcotocol\uff0c\u7f51\u9645\u534f\u8bae\uff09\u662f TCP/IP \u534f\u8bae\u6808\u4e2d\u7f51\u7edc\u5c42\u7684\u534f\u8bae\uff0c\u4e5f\u662f\u6700\u4e3a\u6838\u5fc3\u7684\u534f\u8bae\uff0c\u63d0\u4f9b\u65e0\u8fde\u63a5\u7684 IP \u6570\u636e\u62a5\u6295\u9012\u670d\u52a1\u3002IP \u534f\u8bae\u662f\u4e3a\u4e86\u5728\u5206\u7ec4\u4ea4\u6362\uff08Packer-switching\uff0c\u53c8\u79f0\u5305\u4ea4\u6362\uff09\u8ba1\u7b97\u673a\u901a\u4fe1\u7f51\u7edc\u7684\u4e92\u8054\u7cfb\u7edf\u4e2d\u4f7f\u7528\u800c\u8bbe\u8ba1\u3002IP \u5c42\uff08\u7f51\u7edc\u5c42\uff09\u53ea\u8d1f\u8d23\u6570\u636e\u7684\u8def\u7531\u548c\u4f20\u8f93\uff0c\u5728\u6e90\u8282\u70b9\u4e0e\u76ee\u7684\u8282\u70b9\u4e4b\u95f4\u4f20\u9001\u6570\u636e\u62a5\uff0c\u4f46\u5e76\u4e0d\u5904\u7406\u6570\u636e\u5185\u5bb9\u3002\u6570\u636e\u62a5\u4e2d\u6709\u76ee\u7684\u5730\u5740\u7b49\u5fc5\u8981\u5185\u5bb9\uff0c\u4f7f\u6bcf\u4e2a\u6570\u636e\u62a5\u7ecf\u8fc7\u4e0d\u540c\u7684\u8def\u5f84\u4e5f\u80fd\u51c6\u786e\u5230\u8fbe\u76ee\u7684\u5730\uff0c\u5728\u76ee\u7684\u5730\u91cd\u65b0\u7ec4\u5408\u8fd8\u539f\u6210\u539f\u6765\u53d1\u9001\u7684\u6570\u636e\u3002IP \u534f\u8bae\u4f7f\u7528\u4ee5\u4e0b 4 \u4e2a\u4e3b\u8981\u7684\u673a\u5236\u6765\u63d0\u4f9b\u670d\u52a1\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7c7b\u578b\uff08Type of Service\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6765\u6307\u793a\u8981\u6c42\u7684\u670d\u52a1\u8d28\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u5b58\u65f6\u95f4\uff08Time of Live\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u62a5\u751f\u5b58\u65f6\u95f4\u7684\u4e0a\u9650\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u9879\uff08Operation\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u67d0\u4e9b\u60c5\u51b5\u4e0b\u9700\u8981\u6216\u6709\u7528\u7684\u63a7\u5236\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9996\u90e8\u6821\u9a8c\u548c\uff08Header Checksum\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5bf9 IP \u9996\u90e8\u5185\u5bb9\u8fdb\u884c\u51fa\u9519\u68c0\u6d4b\u7684\u529f\u80fd\u3002")),(0,r.kt)("p",null,"IP \u5c42\u901a\u8fc7 IP \u5730\u5740\u5b9e\u73b0\u4e86\u7269\u7406\u5730\u5740\u7684\u7edf\u4e00\uff0c\u901a\u8fc7 IP \u6570\u636e\u62a5\u5b9e\u73b0\u4e86\u6570\u636e\u5e27\u7684\u7edf\u4e00\u3002IP \u5c42\u901a\u8fc7\u5bf9\u4ee5\u4e0a\u4e24\u4e2a\u65b9\u9762\u7684\u7edf\u4e00\u8fbe\u5230\u4e86\u5411\u4e0a\u5c4f\u853d\u5e95\u5c42\u5dee\u5f02\u7684\u76ee\u7684\u3002"),(0,r.kt)("h3",{id:"ip-\u534f\u8bae\u7684\u57fa\u672c\u529f\u80fd"},"IP \u534f\u8bae\u7684\u57fa\u672c\u529f\u80fd"),(0,r.kt)("p",null,"IP \u534f\u8bae\u7684\u4e3b\u8981\u76ee\u7684\u662f\u901a\u8fc7\u4e00\u4e2a\u4e92\u8054\u7684\u7f51\u7edc\u4f20\u8f93\u6570\u636e\u62a5\uff0c\u6d89\u53ca\u4e24\u4e2a\u6700\u57fa\u672c\u7684\u529f\u80fd\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bfb\u5740\uff08Addressing\uff09"),(0,r.kt)("p",{parentName:"li"},"IP \u534f\u8bae\u6839\u636e\u6570\u636e\u62a5\u9996\u90e8\u4e2d\u5305\u62ec\u7684\u76ee\u7684\u5730\u5740\u5c06\u6570\u636e\u62a5\u4f20\u9001\u5230\u76ee\u7684\u8282\u70b9\uff0c\u8fd9\u5c31\u6d89\u53ca\u4f20\u9001\u8def\u5f84\u7684\u9009\u62e9\uff0c\u5373\u8def\u7531\u529f\u80fd\u3002IP \u534f\u8bae\u4f7f\u7528 IP \u5730\u5740\u6765\u5b9e\u73b0\u8def\u7531\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u7247\uff08Fragmentation\uff09"),(0,r.kt)("p",{parentName:"li"},"IP \u534f\u8bae\u8fd8\u63d0\u4f9b\u5bf9\u6570\u636e\u5927\u5c0f\u7684\u5206\u7247\u548c\u91cd\u7ec4\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u7f51\u7edc\u5bf9\u6570\u636e\u5305\u5927\u5c0f\u7684\u9650\u5236\u3002\u5982\u679c\u7f51\u7edc\u53ea\u80fd\u4f20\u9001\u5c0f\u6570\u636e\u5305\uff0cIP \u534f\u8bae\u5c06\u5bf9\u6570\u636e\u62a5\u8fdb\u884c\u5206\u6bb5\u5e76\u91cd\u65b0\u7ec4\u6210\u5c0f\u5757\u518d\u8fdb\u884c\u4f20\u9001\u3002"))),(0,r.kt)("h3",{id:"ip-\u534f\u8bae\u7684\u7279\u6027"},"IP \u534f\u8bae\u7684\u7279\u6027"),(0,r.kt)("p",null,"IP \u534f\u8bae\u662f\u4e00\u4e2a\u65e0\u8fde\u63a5\u7684\u3001\u4e0d\u53ef\u9760\u7684\u3001\u70b9\u5bf9\u70b9\u7684\u534f\u8bae\uff0c\u53ea\u80fd\u5c3d\u529b\u4f20\u9001\u6570\u636e\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u6570\u636e\u7684\u5230\u8fbe\u3002\u5177\u4f53\u5730\u8bb2\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP \u534f\u8bae\u63d0\u4f9b\u65e0\u8fde\u63a5\u7684\u6570\u636e\u62a5\u670d\u52a1\uff0c\u5404\u4e2a\u6570\u636e\u62a5\u72ec\u7acb\u4f20\u8f93\uff0c\u53ef\u80fd\u6cbf\u7740\u4e0d\u540c\u7684\u8def\u5f84\u5230\u8fbe\u76ee\u7684\u5730\uff0c\u4e5f\u53ef\u80fd\u4e0d\u4f1a\u6309\u5e8f\u5230\u8fbe\u76ee\u7684\u5730\u3002"),(0,r.kt)("li",{parentName:"ul"},"IP \u534f\u8bae\u4e0d\u542b\u9519\u8bef\u68c0\u6d4b\u6216\u9519\u8bef\u6062\u590d\u7684\u7f16\u7801\uff0c\u5c5e\u4e8e\u4e0d\u53ef\u9760\u7684\u534f\u8bae\u3002\u4f4d\u4e8e\u4e0a\u4e00\u5c42\uff08\u4f20\u8f93\u5c42\uff09\u7684 TCP \u534f\u8bae\u5219\u63d0\u4f9b\u4e86\u9519\u8bef\u68c0\u6d4b\u548c\u6062\u590d\u673a\u5236\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4e00\u79cd\u70b9\u5bf9\u70b9\u534f\u8bae\uff0c\u867d\u7136 IP \u6570\u636e\u62a5\u643a\u5e26\u6e90 IP \u5730\u5740\u548c\u76ee\u7684 IP \u5730\u5740\uff0c\u4f46\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u65f6\u7684\u5bf9\u7b49\u5b9e\u4f53\u4e00\u5b9a\u662f\u76f8\u90bb\u8bbe\u5907\uff08\u540c\u4e00\u7f51\u7edc\uff09\u4e2d\u7684\u5bf9\u7b49\u5b9e\u4f53\u3002"),(0,r.kt)("li",{parentName:"ul"},"IP \u534f\u8bae\u7684\u6548\u7387\u975e\u5e38\u9ad8\uff0c\u5b9e\u73b0\u8d77\u6765\u975e\u5e38\u7b80\u5355\u3002")),(0,r.kt)("h3",{id:"\u6570\u636e\u62a5\u5206\u7247"},"\u6570\u636e\u62a5\u5206\u7247"),(0,r.kt)("p",null,"\u6570\u636e\u62a5\u5206\u7247\uff08Fragmentation\uff09\u662f IP \u534f\u8bae\u7684\u57fa\u672c\u529f\u80fd\u4e2d\u7684\u4e00\u4e2a\u529f\u80fd\uff0c\u5b9e\u73b0\u6570\u636e\u62a5\u5206\u7247\u7684\u610f\u4e49\u548c\u4f5c\u7528\u6211\u4eec\u63a5\u4e0b\u6765\u5c06\u4f1a\u8ba8\u8bba\u3002IP \u6570\u636e\u62a5\u6700\u5927\u957f\u5ea6\u53ef\u8fbe 65535\uff082^16-1\uff09\u5b57\u8282\uff0c\u4f46\u5f88\u5c11\u6709\u5e95\u5c42\u7684\u7269\u7406\u7f51\u7edc\u80fd\u591f\u5c01\u88c5\u5982\u6b64\u5927\u7684\u6570\u636e\u5305\uff0c\u56e0\u6b64\u5c06 IP \u6570\u636e\u62a5\u5206\u7247\u4f20\u8f93\uff0c\u76ee\u7684\u4e3b\u673a\u5c06\u5206\u7247\u91cd\u7ec4\u8fd8\u539f\u4e3a\u4e00\u4e2a\u6570\u636e\u62a5\u3002"),(0,r.kt)("h4",{id:"\u6700\u5927\u4f20\u8f93\u5355\u5143mtu"},"\u6700\u5927\u4f20\u8f93\u5355\u5143\uff08MTU\uff09"),(0,r.kt)("p",null,"\u5e95\u5c42\u7269\u7406\u7f51\u7edc\u80fd\u591f\u5c01\u88c5\u7684\u6700\u5927\u6570\u636e\u957f\u5ea6\u79f0\u4e3a\u8be5\u7f51\u7edc\u7684\u6700\u5927\u4f20\u8f93\u5355\u5143\uff08Maximum Transmission Unit\uff0cMTU\uff09\u3002\u5f53\u6570\u636e\u62a5\u5c01\u88c5\u6210\u5e27\u65f6\uff0c\u6570\u636e\u62a5\u7684\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e MTU\u3002\u5bf9\u4e8e\u4e0d\u540c\u7684\u7269\u7406\u7f51\u7edc\u534f\u8bae\uff0cMTU \u7684\u503c\u4e5f\u662f\u4e0d\u540c\u7684\u3002\u7269\u7406\u7f51\u7edc\u7684 MTU \u662f\u7531\u786c\u4ef6\u51b3\u5b9a\u7684\uff0c\u901a\u5e38\u7f51\u7edc\u7684\u901f\u5ea6\u8d8a\u9ad8\uff0cMTU \u4e5f\u5c31\u8d8a\u5927\u3002"),(0,r.kt)("p",null,"IP \u6570\u636e\u62a5\u5728\u4ece\u6e90\u8282\u70b9\u5230\u76ee\u7684\u8282\u70b9\u7684\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u5f80\u5f80\u8981\u7ecf\u8fc7\u591a\u4e2a\u4e0d\u540c\u7684\u7f51\u7edc\uff0c\u800c\u5404\u4e2a\u7269\u7406\u7f51\u7edc\u7684 MTU \u53ef\u80fd\u4e0d\u540c\u3002\u5c06\u4e00\u4e2a\u6570\u636e\u62a5\u5c01\u88c5\u5728\u5177\u6709\u8f83\u5927 MTU \u7684\u7269\u7406\u7f51\u7edc\u5e27\u4e2d\u53d1\u9001\u65f6\uff0c\u53ef\u80fd\u5728\u7a7f\u8fc7\u8f83\u5c0f MTU \u7684\u7269\u7406\u7f51\u7edc\u65f6\u65e0\u6cd5\u6b63\u5e38\u4f20\u8f93\u3002\u6b64\u65f6\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6709\u4e24\u79cd\u65b9\u6848\uff1a\u4e00\u662f\u5c06\u6570\u636e\u62a5\u6309\u7167\u4ece\u6e90\u8282\u70b9\u5230\u76ee\u7684\u8282\u70b9\u7684\u6700\u5c0f MTU \u8fdb\u884c\u5c01\u88c5\uff0c\u4f46\u8fd9\u79cd\u65b9\u6848\u4e0d\u80fd\u5145\u5206\u5229\u7528\u7f51\u7edc\u7684\u4f20\u8f93\u80fd\u529b\uff0c\u4f20\u8f93\u6548\u7387\u8f83\u4f4e\uff1b\u4e8c\u662f\u5c06\u6570\u636e\u62a5\u5148\u4ee5\u6e90\u8282\u70b9\u6240\u5728\u7f51\u7edc\u7684 MTU \u8fdb\u884c\u5c01\u88c5\uff0c\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u518d\u6839\u636e\u9700\u8981\u5bf9\u6570\u636e\u62a5\u8fdb\u884c\u52a8\u6001\u5206\u7247\u3002"),(0,r.kt)("p",null,"TCP/IP \u534f\u8bae\u91c7\u7528\u7684\u662f\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u5373\u6570\u636e\u62a5\u5206\u7247\u3002"),(0,r.kt)("h4",{id:"\u5206\u7247\u4e0e\u91cd\u7ec4"},"\u5206\u7247\u4e0e\u91cd\u7ec4"),(0,r.kt)("p",null,"\u5f53 IP \u5c42\u8981\u4f20\u9001\u7684\u6570\u636e\u5927\u4e8e\u7269\u7406\u7f51\u7edc\u7684\u6700\u5927\u4f20\u8f93\u5355\u5143\u65f6\uff0c\u5fc5\u987b\u5c06 IP \u6570\u636e\u5305\u5206\u7247\u4f20\u8f93\u3002\u5206\u7247\u662f\u5c06\u4e00\u4e2a\u6570\u636e\u62a5\u5212\u5206\u6210\u82e5\u5e72\u4e2a\u66f4\u5c0f\u7684\u5355\u5143\uff0c\u4ee5\u9002\u5e94\u5e95\u5c42\u7269\u7406\u7f51\u7edc\u7684 MTU\u3002\u5206\u7247\u5fc5\u987b\u6ee1\u8db3\u4e24\u4e2a\u6761\u4ef6\uff1a\u4e00\u662f\u5206\u7247\u5c3d\u53ef\u80fd\u5927\uff0c\u4f46\u5fc5\u987b\u80fd\u591f\u4e3a\u5e27\u6240\u5c01\u88c5\uff1b\u4e8c\u662f\u5206\u7247\u4e2d\u6570\u636e\u7684\u5927\u5c0f\u5fc5\u987b\u4e3a 8 \u5b57\u8282\u7684\u6574\u6570\u500d\uff0c\u5426\u5219 IP \u65e0\u6cd5\u8868\u8fbe\u5176\u504f\u79fb\u91cf\u3002"),(0,r.kt)("p",null,"\u540c\u4e00\u6570\u636e\u62a5\u5404\u4e2a\u5206\u7247\u5230\u8fbe\u76ee\u7684\u5730\uff0c\u5fc5\u987b\u88ab\u91cd\u7ec4\u4e3a\u4e00\u4e2a\u5b8c\u6574\u7684\u6570\u636e\u62a5\u3002\u76ee\u7684\u4e3b\u673a\u5728\u8fdb\u884c\u5206\u7247\u91cd\u7ec4\u65f6\uff0c\u91c7\u7528\u4e00\u7ec4\u91cd\u7ec4\u5b9a\u65f6\u5668\u3002\u5f00\u59cb\u91cd\u7ec4\u65f6\u5373\u542f\u52a8\u5b9a\u65f6\u5668\uff0c\u5982\u679c\u91cd\u7ec4\u5b9a\u65f6\u5668\u8d85\u65f6\u4ecd\u7136\u672a\u80fd\u5b8c\u6210\u91cd\u7ec4\uff08\u7531\u4e8e\u67d0\u4e9b\u5206\u7247\u6ca1\u6709\u53ca\u65f6\u5230\u8fbe\u76ee\u7684\u4e3b\u673a\uff09\uff0c\u6e90\u4e3b\u673a\u7684 IP \u5c42\u5c06\u4e22\u5f03\u8be5\u6570\u636e\u62a5\uff0c\u5e76\u4ea7\u751f\u4e00\u4e2a\u8d85\u65f6\u9519\u8bef\uff0c\u62a5\u544a\u7ed9\u6e90\u4e3b\u673a\u3002"),(0,r.kt)("p",null,"\u5206\u7247\u53ef\u4ee5\u5728\u6e90\u4e3b\u673a\u6216\u4f20\u8f93\u8def\u5f84\u4e0a\u7684\u4efb\u4f55\u4e00\u53f0\u8def\u7531\u5668\u4e0a\u8fdb\u884c\uff0c\u800c\u5206\u7247\u7684\u91cd\u7ec4\u53ea\u80fd\u5728\u76ee\u7684\u4e3b\u673a\u4e0a\u8fdb\u884c\u3002"),(0,r.kt)("h2",{id:"ip-\u5bfb\u5740\u4e0e\u5730\u5740\u89e3\u6790"},"IP \u5bfb\u5740\u4e0e\u5730\u5740\u89e3\u6790"),(0,r.kt)("p",null,"IP \u5730\u5740\u662f TCP/IP \u4e2d\u7684\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5728\u7f51\u7edc\u5c42\u5b9e\u73b0\u4e86\u5e95\u5c42\u7f51\u7edc\u5730\u5740\u7684\u7edf\u4e00\uff0c\u4f7f TCP/IP \u7f51\u7edc\u5c42\u5730\u5740\u5177\u6709\u5168\u5c40\u552f\u4e00\u6027\u548c\u4e00\u81f4\u6027\u3002",(0,r.kt)("strong",{parentName:"p"},"IP \u5730\u5740\u662f TCP/IP \u7f51\u7edc\u7684\u5bfb\u5740\u673a\u5236\uff08\u903b\u8f91\u5bfb\u5740\uff09\uff0c\u662f TCP/IP \u7f51\u7edc\u8fdb\u884c\u5bfb\u5740\u548c\u9009\u62e9\u8def\u7531\u7684\u4f9d\u636e\u3002"),"IP \u6570\u636e\u5305\u6700\u7ec8\u9700\u8981\u7269\u7406\u7f51\u7edc\u6765\u5904\u7406\uff0c\u5f53 IP \u6570\u636e\u5305\u4ea4\u4ed8\u7ed9\u7269\u7406\u7f51 \u7edc\u4e4b\u540e\uff0c\u7269\u7406\u7f51\u7edc\u5c31\u9700\u8981\u5b83\u81ea\u5df1\u7684\u5bfb\u5740\u673a\u5236\u6765\u5904\u7406\uff0c\u5373 MAC \u5bfb\u5740\uff08\u7269\u7406\u5730\u5740\uff09\u3002\u8fd9\u5c31\u6d89\u53ca\u4e24\u79cd\u5730\u5740\u7684\u8f6c\u6362\uff0c\u5177\u4f53\u7531\u5730\u5740\u89e3\u6790\u534f\u8bae\uff08ARP\uff09\u548c\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae\uff08RARP\uff09\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"ip-\u5730\u5740"},"IP \u5730\u5740"),(0,r.kt)("p",null,"\u5728 TCP/IP \u7f51\u7edc\u4e2d\u6bcf\u4e2a\u4e3b\u673a\u90fd\u6709\u552f\u4e00\u7684\u5730\u5740\uff0c\u5b83\u662f\u901a\u8fc7 IP \u534f\u8bae\u6765\u5b9e\u73b0\u7684\uff0c\u7528\u6765\u6807\u8bc6\u6bcf\u4e00\u4e2a\u7f51\u7edc\u8282\u70b9\u4ee5\u786e\u4fdd\u5b83\u4eec\u4e4b\u95f4\u7684\u76f8\u4e92\u901a\u4fe1\u3002"),(0,r.kt)("h4",{id:"ip-\u5730\u5740\u683c\u5f0f"},"IP \u5730\u5740\u683c\u5f0f"),(0,r.kt)("p",null,"Internet \u91c7\u7528\u4e00\u79cd\u5168\u5c40\u901a\u7528\u7684\u5730\u5740\u683c\u5f0f\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u7f51\u7edc\u548c\u6bcf\u4e00\u53f0\u4e3b\u673a\u90fd\u5206\u914d\u4e00\u4e2a IP \u5730\u5740\uff0c\u4ee5\u5c4f\u853d\u7269\u7406\u7f51\u7edc\u5730\u5740\u7684\u5dee\u5f02\u3002IPv4 \u89c4\u5b9a\uff0cIP \u5730\u5740\u957f\u5ea6\u4e3a 32 \u4f4d\uff08IPv6 \u89c4\u5b9a\u5730\u5740\u957f\u5ea6\u4e3a 128 \u4f4d\uff09\u3002\u56e0\u6b64\uff0cIPv4 \u7684\u5730\u5740\u7a7a\u95f4\u4e3a 2^32\u3002"),(0,r.kt)("p",null,"IP \u5730\u5740\u662f 32 \u4f4d\u4e8c\u8fdb\u5236\u6570\u5b57\uff0c\u4e3a\u4e86\u65b9\u4fbf\u6211\u4eec\u4e00\u822c\u5c06 IP \u5730\u5740\u5206\u4e3a 4 \u4e2a 8 \u4f4d\u5b57\u6bb5\uff0c\u4ee5 4 \u4e2a\u5341\u8fdb\u5236\u6570\u8868\u793a\uff0c\u4e4b\u95f4\u7528\u70b9\u9694\u5f00\u3002\u4f8b\u5982\uff0c202.112.10.105\uff0c\u8fd9\u79cd\u8bb0\u5f55\u65b9\u6cd5\u79f0\u4e3a\u201c\u70b9-\u6570\u201d\u6cd5\u3002"),(0,r.kt)("p",null,"IP \u5730\u5740\u6807\u8bc6\u4e00\u4e2a\u7f51\u7edc\u548c\u8fde\u5165\u6b64\u7f51\u7edc\u7684\u4e00\u53f0\u4e3b\u673a\u3002IP \u5730\u5740\u91c7\u7528\u4e00\u79cd\u7531\u7f51\u7edc ID\uff08Net-id\uff09\u548c\u4e3b\u673a ID\uff08Host-id\uff09\u7ec4\u6210\u7684\u4e24\u7ea7\u7ed3\u6784\uff0c\u7f51\u7edc ID \u8868\u793a\u4e3b\u673a\u6240\u5c5e\u7684\u7f51\u7edc\uff0c\u4e3b\u673a ID \u4ee3\u8868\u4e3b\u673a\u672c\u8eab\u3002\u4f8b\u5982\uff0c192.168.1.102\uff0c\u8fd9\u4e2a IP \u5730\u5740\u4e2d\u524d 3 \u4e2a\u5341\u8fdb\u5236\u6570\u8868\u793a\u7f51\u7edc ID\uff0c\u6700\u540e\u4e00\u4e2a\u5341\u8fdb\u5236\u6570\u8868\u793a\u4e3b\u673a ID\u3002"),(0,r.kt)("h4",{id:"ip-\u5730\u5740\u5206\u914d"},"IP \u5730\u5740\u5206\u914d"),(0,r.kt)("p",null,"IP \u5730\u5740\u5206\u914d\u7684\u57fa\u672c\u539f\u5219\u662f\uff0c\u8981\u4e3a\u540c\u4e00\u7f51\u7edc\uff08\u5b50\u7f51\u6216\u7f51\u6bb5\uff09\u5185\u7684\u6240\u6709\u4e3b\u673a\u5206\u914d\u76f8\u540c\u7684\u7f51\u7edc ID\uff0c\u540c\u4e00\u7f51\u7edc\u4e2d\u7684\u4e0d\u540c\u4e3b\u673a\u5fc5\u987b\u5206\u914d\u4e0d\u540c\u7684\u4e3b\u673a ID\uff0c\u4ee5\u533a\u5206\u4e3b\u673a\u3002"),(0,r.kt)("h4",{id:"ip-\u5730\u5740\u5206\u7c7b\u7f16\u5740"},"IP \u5730\u5740\u5206\u7c7b\u7f16\u5740"),(0,r.kt)("p",null,"\u8003\u8651\u5230\u4e0d\u540c\u89c4\u6a21\u7f51\u7edc\u7684\u9700\u8981\uff0cIP \u5c06 32 \u4f4d\u5730\u5740\u7a7a\u95f4\u5212\u5206\u4e3a\u4e0d\u540c\u7684\u5730\u5740\u7c7b\u522b\uff0c\u5e76\u5b9a\u4e49\u4e86 5 \u7c7b\u5730\u5740\uff0c\u5373 A \u7c7b\u81f3 E \u7c7b\u3002\u5176\u4e2d A\u3001B\u3001C \u662f 3 \u4e2a\u57fa\u672c\u7684\u7c7b\u522b\uff0c\u5206\u522b\u4ee3\u8868\u4e0d\u540c\u89c4\u6a21\u7684\u7f51\u7edc\uff0c\u7531 InterNIC \u5728\u5168\u7403\u8303\u56f4\u5185\u7edf\u4e00\u5206\u914d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A \u7c7b\u5730\u5740"),(0,r.kt)("p",{parentName:"li"},"\u9ad8 8 \u4f4d\u4ee3\u8868\u7f51\u7edc ID\uff0c\u4f4e 24 \u4f4d\u4ee3\u8868\u4e3b\u673a ID\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"B \u7c7b\u5730\u5740"),(0,r.kt)("p",{parentName:"li"},"\u9ad8 16 \u4f4d\u4ee3\u8868\u7f51\u7edc ID\uff0c\u4f4e 16 \u4f4d\u4ee3\u8868\u4e3b\u673a ID\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C \u7c7b\u5730\u5740"),(0,r.kt)("p",{parentName:"li"},"\u9ad8 24 \u4f4d\u4ee3\u8868\u7f51\u7edc ID\uff0c\u4f4e 8 \u4f4d\u4ee3\u8868\u4e3b\u673a ID\u3002"))),(0,r.kt)("h3",{id:"ip-\u5b50\u7f51\u4e0e\u8d85\u7f51"},"IP \u5b50\u7f51\u4e0e\u8d85\u7f51"),(0,r.kt)("p",null,"\u5b50\u7f51\uff08Subnet\uff09\u662f\u5bf9\u4e00\u4e2a\u7f51\u7edc\u7684\u8fdb\u4e00\u6b65\u5212\u5206\u3002\u5b50\u7f51\u5212\u5206\u4e0d\u4ec5\u89e3\u51b3\u4e86 IP \u5730\u5740\u7684\u77ed\u7f3a\u95ee\u9898\uff0c\u800c\u4e14\u53ef\u4ee5\u8ba9\u7528\u6237\u7075\u6d3b\u914d\u7f6e\u81ea\u5df1\u7684 IP \u7f51\u7edc\u3002\u8d85\u7f51\uff08Supernet\uff09\u4e0e\u5b50\u7f51\u6b63\u597d\u76f8\u53cd\uff0c\u5c06\u591a\u4e2a\u7f51\u7edc\u5408\u5e76\u6210\u4e00\u4e2a\u7f51\u7edc\u3002"),(0,r.kt)("h4",{id:"\u5b50\u7f51\u63a9\u7801subnet-mask"},"\u5b50\u7f51\u63a9\u7801\uff08Subnet Mask\uff09"),(0,r.kt)("p",null,"\u5b50\u7f51\u63a9\u7801\uff08Subnet Mask\uff09\u7528\u6765\u5c06 IP \u5730\u5740\u5212\u5206\u6210\u7f51\u7edc\u5730\u5740\u548c\u4e3b\u673a\u5730\u5740\u4e24\u90e8\u5206\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u540c\u4e00\u4e2a IP \u5730\u5740\uff0c\u5982\u679c\u5176\u5b50\u7f51\u63a9\u7801\u4e0d\u540c\uff0c\u5219\u4ee3\u8868\u4e0d\u540c\u7684\u7f51\u7edc\u6216\u4e3b\u673a\u3002")),(0,r.kt)("p",null,"\u4e0e IP \u5730\u5740\u76f8\u540c\uff0c\u5b50\u7f51\u63a9\u7801\u4e5f\u662f 32 \u4f4d\u4e8c\u8fdb\u5236\u6570\uff0c\u5176\u4e2d\u9ad8\u4f4d\u90e8\u5206\u5bf9\u5e94 IP \u5730\u5740\u4e2d\u7684\u7f51\u7edc\u4f4d\uff0c\u7528\u201c1\u201d\u8868\u793a\uff1b\u5269\u4f59\u4f4e\u4f4d\u90e8\u5206\u5bf9\u5e94 IP \u5730\u5740\u4e2d\u7684\u4e3b\u673a\u4f4d\uff0c\u7528 \u201c0\u201d \u8868\u793a\u3002\u4e3a\u4e86\u65b9\u4fbf\uff0c\u540c\u6837\u91c7\u7528\u201c\u70b9-\u6570\u201d\u6cd5\u8bb0\u5f55\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A \u7c7b\u5730\u5740\u5b50\u7f51\u63a9\u7801\uff1a255.0.0.0"),(0,r.kt)("li",{parentName:"ul"},"B \u7c7b\u5730\u5740\u5b50\u7f51\u63a9\u7801\uff1a255.255.0.0"),(0,r.kt)("li",{parentName:"ul"},"C \u7c7b\u5730\u5740\u5b50\u7f51\u63a9\u7801\uff1a255.255.255.0")),(0,r.kt)("h4",{id:"\u5212\u5206\u5b50\u7f51"},"\u5212\u5206\u5b50\u7f51"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a C \u7c7b\u5730\u5740\u7f51\u7edc\u6765\u8bf4\uff0c\u53ef\u652f\u6301 254 \u53f0\u4e3b\u673a\u63a5\u5165\u7f51\u7edc\uff0c\u5982\u679c\u9700\u8981\u4e24\u4e2a\u7f51\u7edc\uff0c\u5e76\u4e14\u4e24\u4e2a\u7f51\u7edc\u63a5\u5165\u4e3b\u673a\u6570\u52a0\u8d77\u6765\u4e0d\u8d85\u8fc7 254 \u53f0\uff08\u5404\u81ea\u7684\u4e3b\u673a\u6570\u8f83\u5c11\uff09\u65f6\uff0c\u82e5\u4f7f\u7528\u4e24\u4e2a C \u7c7b\u5730\u5740\u7f51\u7edc\uff0c\u5bf9\u4e8e IP \u5730\u5740\u6765\u8bf4\u662f\u4e00\u79cd\u6d6a\u8d39\uff1b\u6b64\u65f6\u53ef\u4ee5\u5229\u7528\u5b50\u7f51\u63a9\u7801\u6765\u5c06\u540c\u4e00\u4e2a C \u7c7b\u5730\u5740\u7f51\u7edc\u8fdb\u4e00\u6b65\u5212\u5206\u6210\u4e24\u4e2a\u4e0d\u540c\u5b50\u7f51\uff0c\u4ee5\u6b64\u6765\u63d0\u9ad8 IP \u5730\u5740\u7684\u5229\u7528\u7387\u3002"),(0,r.kt)("p",null,"\u5c06 IP \u5730\u5740\u7684\u4e3b\u673a ID \u90e8\u5206\u5212\u5206\u6210\uff1a\u5b50\u7f51 ID +\u4e3b\u673a ID\u3002\u4e5f\u5c31\u662f\u8bf4\u5c06\u539f\u6765\u7684 IP \u5730\u5740\u4e24\u7ea7\u7ed3\u6784\u6269\u5145\u4e3a\u4e09\u7ea7\u7ed3\u6784\uff1a\u7f51\u7edc ID +\u5b50\u7f51 ID +\u4e3b\u673a ID\u3002\u901a\u8fc7\u589e\u52a0\u5b50\u7f51\u63a9\u7801\u4e2d\u7684 \u201c1\u201d\uff08\u589e\u52a0\u7f51\u7edc\u4f4d\uff09\uff0c\u5373\u53ef\u5b9e\u73b0\u5b50\u7f51\u5212\u5206\u3002\u4f8b\u5982\uff0c\u5c06 C \u7c7b\u5730\u5740\u7684\u5b50\u7f51\u63a9\u7801 255.255.255.0\uff0c\u6539\u6210 255.255.255.128 \u5373\u53ef\u3002"),(0,r.kt)("h4",{id:"\u7ec4\u5408\u8d85\u7f51"},"\u7ec4\u5408\u8d85\u7f51"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a C \u7c7b\u5730\u5740\u7f51\u7edc\u6765\u8bf4\uff0c\u5b83\u4ec5\u80fd\u652f\u6301 254 \u53f0\u4e3b\u673a\u63a5\u5165\u7f51\u7edc\uff0c\u5982\u679c\u9700\u8981\u4e00\u4e2a\u7f51\u7edc\uff0c\u5e76\u4e14\u63a5\u5165\u4e3b\u673a\u6570\u591a\u4e8e 254\uff08\u8fdc\u5c0f\u4e8e 65534\uff09\u65f6\uff0c\u82e5\u4f7f\u7528\u4e00\u4e2a B \u7c7b\u5730\u5740\u7f51\u7edc\uff08\u53ef\u652f\u6301\u63a5\u5165\u4e3b\u673a 65534 \u53f0\uff09\uff0c\u5bf9\u4e8e IP \u5730\u5740\u6765\u8bf4\u662f\u4e00\u79cd\u6d6a\u8d39\uff1b\u6b64\u65f6\u53ef\u4ee5\u5229\u7528\u5b50\u7f51\u63a9\u7801\u6765\u5c06\u591a\u4e2a C \u7c7b\u5730\u5740\u7f51\u7edc\u5408\u5e76\u6210\u4e00\u4e2a\u8d85\u7f51\uff0c\u4ee5\u6b64\u6765\u63d0\u9ad8 IP \u5730\u5740\u7684\u5229\u7528\u7387\u3002"),(0,r.kt)("p",null,"\u5c06 IP \u5730\u5740\u7684\u7f51\u7edc ID \u4e00\u90e8\u5206\u5212\u5206\u4e3a\u65b0\u7684\u4e3b\u673a ID\u3002\u901a\u8fc7\u51cf\u5c11\u5b50\u7f51\u63a9\u7801\u4e2d\u7684 \u201c1\u201d\uff08\u51cf\u5c11\u7f51\u7edc\u4f4d\uff09\uff0c\u5373\u53ef\u5b9e\u73b0\u8d85\u7f51\u7ec4\u5408\u3002\u4f8b\u5982\u5c06 C \u7c7b\u5730\u5740\u7684\u5b50\u7f51\u63a9\u7801 255.255.255.0\uff0c\u6539\u6210 255.255.248.0 \u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"\u5730\u5740\u89e3\u6790"},"\u5730\u5740\u89e3\u6790"),(0,r.kt)("p",null,"IP \u5730\u5740\u5c5e\u4e8e\u7f51\u7edc\u5c42\u7684\u5bfb\u5740\uff0c\u6570\u636e\u5305\u901a\u8fc7 IP \u5730\u5740\u53ca\u8def\u7531\u8868\u5728\u7269\u7406\u7f51\u7edc\u4e2d\u4f20\u9012\uff0c\u8fd8\u5fc5\u987b\u9075\u5b88\u7f51\u7edc\u7684\u7269\u7406\u5c42\u534f\u8bae\uff0c\u5e95\u5c42\u7684\u7269\u7406\u7f51\u7edc\u9700\u8981\u83b7\u77e5 IP \u5730\u5740\uff0c\u8fd9\u5c31\u9700\u8981\u5c06 IP \u5730\u5740\u6620\u5c04\u4e3a\u7269\u7406\u7f51\u7edc\u5730\u5740\u3002\u540c\u65f6\uff0c\u7269\u7406\u7f51\u7edc\u5730\u5740\u4e5f\u9700\u8981\u6620\u5c04\u4e3a IP \u5730\u5740\u3002\u7f51\u7edc\u5c42\u63d0\u4f9b\u7684 ARP\uff08\u5730\u5740\u89e3\u6790\u534f\u8bae\uff09\u548c RARP\uff08\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae\uff09\u5373\u53ef\u5b9e\u73b0 MAC \u5730\u5740\uff08\u7269\u7406\u5730\u5740\uff09\u548c IP \u5730\u5740\uff08\u903b\u8f91\u5730\u5740\uff09\u7684\u76f8\u4e92\u8f6c\u6362\u3002"),(0,r.kt)("h4",{id:"arp\u5730\u5740\u89e3\u6790\u534f\u8bae"},"ARP\uff08\u5730\u5740\u89e3\u6790\u534f\u8bae\uff09"),(0,r.kt)("p",null,"IP \u6570\u636e\u62a5\u5fc5\u987b\u5c01\u88c5\u6210\u5e27\u624d\u80fd\u901a\u8fc7\u7269\u7406\u7f51\u7edc\u4f20\u8f93\uff0c\u8fd9\u5c31\u8981\u6c42\u53d1\u9001\u65b9\u5fc5\u987b\u77e5\u9053\u63a5\u6536\u65b9\u7684\u7269\u7406\u5730\u5740\u3002ARP \u7684\u529f\u80fd\u5206\u4e3a\u4e24\u90e8\u5206\uff1a\u4e00\u90e8\u5206\u5728\u53d1\u9001\u6570\u636e\u5305\u65f6\u8bf7\u6c42\u83b7\u5f97\u76ee\u7684\u8282\u70b9\u7684\u7269\u7406\u5730\u5740\uff1b\u53e6\u4e00\u90e8\u5206\u5411\u8bf7\u6c42\u7269\u7406\u5730\u5740\u7684\u8282\u70b9\u53d1\u9001\u89e3\u6790\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u5f53\u7f51\u7edc\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\uff08\u4e3b\u673a\u6216\u8def\u7531\u5668\uff09\u9700\u8981\u83b7\u77e5\u53e6\u4e00\u4e2a\u8282\u70b9\uff08\u4e3b\u673a\u6216\u8def\u7531\u5668\uff09\u7684\u7269\u7406\u5730\u5740\u65f6\u5b83\u5c31\u53d1\u9001 ARP \u67e5\u8be2\u62a5\u6587\u3002\u8fd9\u4e2a\u62a5\u6587\u5305\u62ec\u53d1\u9001\u65b9\u7684\u7269\u7406\u5730\u5740\u548c IP \u5730\u5740\uff0c\u4ee5\u53ca\u63a5\u6536\u65b9\u7684 IP \u5730\u5740\u3002\u7531\u4e8e\u53d1\u9001\u65b9\u5e76\u4e0d\u77e5\u9053\u63a5\u6536\u65b9\u7684\u7269\u7406\u5730\u5740\uff0c\u67e5\u8be2\u62a5\u6587\u5c31\u53ea\u80fd\u5728\u7f51\u7edc\u4e0a\u5e7f\u64ad\u3002"),(0,r.kt)("p",null,"\u5728\u7f51\u7edc\u4e0a\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4f1a\u63a5\u53d7\u8fd9\u4e2a ARP \u67e5\u8be2\u62a5\u6587\uff0c\u5c06\u8be5\u62a5\u6587\u4e2d\u7684\u63a5\u6536\u65b9 IP \u5730\u5740\u4e0e\u81ea\u5df1\u7684 IP \u5730\u5740\u8fdb\u884c\u6bd4\u8f83\uff0c\u76f8\u540c\u7684\u8282\u70b9\u5411\u67e5\u8be2\u8005\u56de\u4f20 ARP \u5e94\u7b54\u62a5\u6587\u3002\u8be5\u5e94\u7b54\u62a5\u6587\u4e2d\u5305\u542b\u63a5\u53d7\u65b9\u7684 IP \u5730\u5740\u548c\u7269\u7406\u5730\u5740\uff0c\u4ee5\u53ca\u53d1\u9001\u65b9\u7684\u7269\u7406\u5730\u5740\u3002\u7531\u4e8e\u77e5\u9053\u67e5\u8be2\u8005\u7269\u7406\u5730\u5740\uff0c\u8be5\u62a5\u6587\u7528\u5355\u64ad\u65b9\u5f0f\u76f4\u63a5\u53d1\u9001\u7ed9\u67e5\u8be2\u8005\u3002"),(0,r.kt)("h4",{id:"rarp\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae"},"RARP\uff08\u53cd\u5411\u5730\u5740\u89e3\u6790\u534f\u8bae\uff09"),(0,r.kt)("p",null,"RARP \u53ef\u4ee5\u5b9e\u73b0\u4ece\u7269\u7406\u5730\u5740\u5230 IP \u5730\u5740\u7684\u8f6c\u6362\uff0c\u4e3b\u8981\u88ab\u65e0\u76d8\u8ba1\u7b97\u673a\u7528\u6765\u83b7\u53d6\u5176 IP \u5730\u5740\u3002"),(0,r.kt)("p",null,"ARP \u5047\u5b9a\u6bcf\u4e2a\u4e3b\u673a\u90fd\u77e5\u9053\u81ea\u5df1\u7684\u7269\u7406\u5730\u5740\u548c IP \u5730\u5740\u7684\u6620\u5c04\uff0c\u5730\u5740\u89e3\u6790\u7684\u76ee\u7684\u662f\u83b7\u53d6\u53e6\u4e00\u4e2a\u7f51\u7edc\u8282\u70b9\u7684\u7269\u7406\u5730\u5740\u3002\u800c RARP \u5219\u4e3b\u8981\u662f\u901a\u8fc7\u672c\u673a\u7684\u7269\u7406\u5730\u5740\u83b7\u53d6\u672c\u673a\u7684 IP \u5730\u5740\uff0c\u9700\u8981\u501f\u52a9\u4e8e RARP \u670d\u52a1\u5668\u5e2e\u52a9\u5b8c\u6210\u89e3\u6790\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,r.kt)("p",null,"\u867d\u7136\u7f51\u7edc\u5c42\u4e2d\u6709 5 \u4e2a\u534f\u8bae\uff0c\u4f46 IP \u534f\u8bae\u662f\u6700\u6838\u5fc3\u7684\u534f\u8bae\uff0c\u5176\u4ed6 4 \u4e2a\u534f\u8bae\u90fd\u662f\u4e3a IP \u534f\u8bae\u670d\u52a1\u7684\uff0c\u589e\u52a0\u5730\u5740\u89e3\u6790\u3001\u5dee\u9519\u63a7\u5236\u7b49\u529f\u80fd\u3002"))}u.isMDXComponent=!0}}]);