"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=p,s=c["".concat(i,".").concat(m)]||c[m]||k[m]||o;return n?r.createElement(s,l(l({ref:t},d),{},{components:n})):r.createElement(s,l({ref:t},d))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),p=(n(67294),n(3905));const o={title:"ODM \u672c\u5730\u90e8\u7f72",date:new Date("2019-11-11T11:26:21.000Z"),update:new Date("2019-11-11T11:26:21.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","GIS"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","GIS"],description:"GIS\uff0cODM\uff08OpenDroneMap\uff09\u662f\u5f00\u6e90\u7684\u65e0\u4eba\u673a\u822a\u7247\u5904\u7406\u5de5\u5177\u5957\u4ef6\uff0c\u57fa\u672c\u4e0a\u5df2\u6210\u4e3a\u8be5\u9886\u57df\u5f00\u6e90\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb0\u5f55\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c ODM \u5de5\u5177\u5957\u4ef6\u7684\u90e8\u7f72\u3002"},l=void 0,a={permalink:"/Computer-Technology/GIS/gis-odm-deploy",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/GIS/gis-odm-deploy.md",source:"@site/blog/Computer-Technology/GIS/gis-odm-deploy.md",title:"ODM \u672c\u5730\u90e8\u7f72",description:"GIS\uff0cODM\uff08OpenDroneMap\uff09\u662f\u5f00\u6e90\u7684\u65e0\u4eba\u673a\u822a\u7247\u5904\u7406\u5de5\u5177\u5957\u4ef6\uff0c\u57fa\u672c\u4e0a\u5df2\u6210\u4e3a\u8be5\u9886\u57df\u5f00\u6e90\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb0\u5f55\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c ODM \u5de5\u5177\u5957\u4ef6\u7684\u90e8\u7f72\u3002",date:"2019-11-11T11:26:21.000Z",formattedDate:"2019\u5e7411\u670811\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"GIS",permalink:"/tags/gis"}],readingTime:14.22,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",imageURL:"https://github.com/wang1212.png",key:"wang1212"}],frontMatter:{title:"ODM \u672c\u5730\u90e8\u7f72",date:"2019-11-11T11:26:21.000Z",update:"2019-11-11T11:26:21.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","GIS"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","GIS"],description:"GIS\uff0cODM\uff08OpenDroneMap\uff09\u662f\u5f00\u6e90\u7684\u65e0\u4eba\u673a\u822a\u7247\u5904\u7406\u5de5\u5177\u5957\u4ef6\uff0c\u57fa\u672c\u4e0a\u5df2\u6210\u4e3a\u8be5\u9886\u57df\u5f00\u6e90\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb0\u5f55\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c ODM \u5de5\u5177\u5957\u4ef6\u7684\u90e8\u7f72\u3002"},prevItem:{title:"Web \u524d\u7aef\u5f00\u53d1\u7684\u5fc3\u8def\u5386\u7a0b",permalink:"/Life/2020-work-record-web"},nextItem:{title:"2019 \u5e74\u5de5\u4f5c\u8bb0\u5f55",permalink:"/Life/2019-work-record"}},i={authorsImageUrls:[void 0]},u=[{value:"ODM",id:"odm",level:2},{value:"WebODM \u672c\u5730\u90e8\u7f72",id:"webodm-\u672c\u5730\u90e8\u7f72",level:2},{value:"\u5b89\u88c5 Ubuntu",id:"\u5b89\u88c5-ubuntu",level:3},{value:"\u5b89\u88c5 Git",id:"\u5b89\u88c5-git",level:3},{value:"\u5b89\u88c5 Python3",id:"\u5b89\u88c5-python3",level:3},{value:"\u5b89\u88c5 Docker",id:"\u5b89\u88c5-docker",level:3},{value:"\u5b89\u88c5 docker-compose",id:"\u5b89\u88c5-docker-compose",level:3},{value:"\u5b89\u88c5 WebODM",id:"\u5b89\u88c5-webodm",level:3},{value:"\u8bbe\u7f6e\u7cfb\u7edf\u9759\u6001 IP",id:"\u8bbe\u7f6e\u7cfb\u7edf\u9759\u6001-ip",level:3},{value:"\u90e8\u7f72\u66f4\u591a\u5904\u7406\u8282\u70b9",id:"\u90e8\u7f72\u66f4\u591a\u5904\u7406\u8282\u70b9",level:2},{value:"\u90e8\u7f72 NodeODM",id:"\u90e8\u7f72-nodeodm",level:3},{value:"\u90e8\u7f72 ClusterODM",id:"\u90e8\u7f72-clusterodm",level:3}],d={toc:u};function k(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2019-11-11 11:26:21 "))),(0,p.kt)("p",null,"GIS\uff0cODM\uff08OpenDroneMap\uff09\u662f\u5f00\u6e90\u7684\u65e0\u4eba\u673a\u822a\u7247\u5904\u7406\u5de5\u5177\u5957\u4ef6\uff0c\u57fa\u672c\u4e0a\u5df2\u6210\u4e3a\u8be5\u9886\u57df\u5f00\u6e90\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb0\u5f55\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c ODM \u5de5\u5177\u5957\u4ef6\u7684\u90e8\u7f72\u3002"),(0,p.kt)("h2",{id:"odm"},"ODM"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.opendronemap.org/"},"OpenDroneMap")," \u662f\u5f00\u6e90\u7684\u65e0\u4eba\u673a\u822a\u7247\u5904\u7406\u5de5\u5177\u5957\u4ef6\uff0c\u5176\u6784\u5efa\u7ef4\u62a4\u4e86\u4e30\u5bcc\u7684\u89e3\u51b3\u65b9\u6848\u751f\u6001\u7cfb\u7edf\uff0c\u57fa\u672c\u4e0a\u5df2\u6210\u4e3a\u8be5\u9886\u57df\u5185\u5f00\u6e90\u7684\u4e8b\u5b9e\u6807\u51c6\u3002"),(0,p.kt)("p",null,"ODM \u56e2\u961f\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5de5\u5177\uff0c\u5305\u62ec\u547d\u4ee4\u884c\u5de5\u5177\u5305\uff0c\u5177\u6709\u53ef\u89c6\u5316\u3001\u5b58\u50a8\u548c\u6570\u636e\u5206\u6790\u7684 Web \u5e94\u7528\u7a0b\u5e8f\uff0c\u8f7b\u91cf\u7ea7 REST API\uff0cPython SDK\uff0c\u96c6\u7fa4\u652f\u6301\u7b49\uff0c\u800c\u8fd9\u4e9b\u8d44\u6e90\u5168\u90e8\u5f00\u6e90\uff0c\u652f\u6301\u672c\u5730\u90e8\u7f72\u548c\u6784\u5efa\u3002\u5176\u4e2d\uff0cWebODM \u662f\u4e00\u4e2a\u63d0\u4f9b\u53ef\u89c6\u5316\u3001\u5b58\u50a8\u3001\u6570\u636e\u5206\u6790\u7684\u65e0\u4eba\u673a\u5f71\u50cf\u5904\u7406\u5e73\u53f0\uff0c\u91c7\u7528\u4e86 Docker \u5bb9\u5668\u5316\u90e8\u7f72\u65b9\u6848\u3002"),(0,p.kt)("h2",{id:"webodm-\u672c\u5730\u90e8\u7f72"},"WebODM \u672c\u5730\u90e8\u7f72"),(0,p.kt)("p",null,"ODM \u56e2\u961f\u4e00\u76f4\u5728\u81f4\u529b\u4e8e\u7ef4\u62a4\u5e9e\u5927\u7684 ODM \u6280\u672f\u751f\u6001\uff0c\u540c\u65f6\u4e5f\u5728\u4e0d\u65ad\u7684\u5b8c\u5584\u5b98\u65b9\u6587\u6863\uff0c\u4e0b\u9762\u4e3a\u5b98\u65b9\u7684\u672c\u5730\u5316\u90e8\u7f72\u6307\u5357\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://docs.opendronemap.org/installation.html#installation"},"WebODM \u672c\u5730\u5316\u90e8\u7f72\u6307\u5357\uff08\u5b98\u65b9\u6587\u6863\uff09"))),(0,p.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u76ee\u524d\u76f8\u6bd4\u8f83\u4e4b\u524d\u5df2\u6539\u5584\u5f88\u591a\uff0c\u6b65\u9aa4\u4e5f\u76f8\u5f53\u6e05\u6670\uff0c\u5728\u8fd9\u91cc\u53ea\u662f\u68b3\u7406\u4e00\u4e0b\u90e8\u7f72\u8fc7\u7a0b\uff0c\u5e76\u8bb0\u5f55\u4e86\u4e00\u4e9b\u8981\u6ce8\u610f\u7684\u7ec6\u8282\u3002"),(0,p.kt)("p",null,"WebODM \u7684\u6574\u4f53\u67b6\u6784\u8bbe\u8ba1\u5f88\u6e05\u6670\uff0c\u5206\u89e3\u6210\u4e86\u4e0d\u540c\u7684\u6a21\u5757\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ODM\uff08\u7b97\u6cd5\u5904\u7406\uff0c\u5e95\u5c42 API\uff09 -> NodeODM\uff08\u8f7b\u91cf\u7ea7 REST API\uff09 -> ClusterODM\uff08\u96c6\u7fa4\u652f\u6301\uff0c\u8d1f\u8f7d\u5747\u8861\uff09 -> WebODM\uff08Web \u5e94\u7528\uff09\n")),(0,p.kt)("p",null,"\u5404\u4e2a\u6a21\u5757\u5df2\u7531 ODM \u56e2\u961f\u5236\u4f5c\u6210\u4e86 Docker \u955c\u50cf\u53d1\u5e03\u5230\u4e86 Docker Hub \u4e0a\u9762\uff0c\u6700\u7b80\u5355\u7684\u65b9\u6848\u5c31\u662f\u76f4\u63a5\u5229\u7528\u955c\u50cf\u8fdb\u884c\u90e8\u7f72\uff0c\u5f53\u7136\u4e5f\u652f\u6301\u81ea\u5df1\u6784\u5efa\uff0c\u6b64\u5904\u91c7\u7528\u955c\u50cf\u90e8\u7f72\u3002"),(0,p.kt)("p",null,"\u5b98\u65b9\u63a8\u8350\u7684\u73af\u5883\u662f Ubuntu 16.04 \u64cd\u4f5c\u7cfb\u7edf\uff0c64 \u4f4d\u591a\u6838 CPU\uff0c\u81f3\u5c11 4GB \u5185\u5b58\uff0c20GB \u78c1\u76d8\u7a7a\u95f4\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u91c7\u7528 Ubuntu 18.04 Server \u5bbf\u4e3b\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\uff0c\u4e0d\u5efa\u8bae\u5728 Windows \u4e0a\u90e8\u7f72\uff0c\u8017\u65f6\u4e14\u5bb9\u6613\u51fa\u9519\u3002"),(0,p.kt)("h3",{id:"\u5b89\u88c5-ubuntu"},"\u5b89\u88c5 Ubuntu"),(0,p.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5728\u7269\u7406\u673a\u5b89\u88c5 ",(0,p.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/server"},"Ubuntu 18.04 Server")," \u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528\u865a\u62df\u673a\u5b89\u88c5\u3002"),(0,p.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u8fdb\u5165\u7cfb\u7edf\uff0c\u9996\u5148\u521b\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\uff0cUbuntu \u9ed8\u8ba4\u6ca1\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\u3002\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo passwd root  # \u8be5\u547d\u4ee4\u4f1a\u8981\u6c42\u5148\u8f93\u5165\u5f53\u524d\u767b\u5f55\u7528\u6237\u547d\u4ee4\uff0c\u518d\u8f93\u5165\u4e24\u904d\u8981\u8bbe\u7f6e\u7684 root \u7528\u6237\u547d\u4ee4\n")),(0,p.kt)("p",null,"\u5176\u6b21\uff0c\u6362\u6e90\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"apt")," \u662f Ubuntu \u5b98\u65b9\u7684\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\uff0c\u5176\u4ed3\u5e93\u5730\u5740\u5728\u56fd\u5916\uff0c\u5b89\u88c5\u8f6f\u4ef6\u5bb9\u6613\u51fa\u9519\u4e14\u901f\u5ea6\u7f13\u6162\uff0c\u6362\u4e3a\u56fd\u5185\u4ed3\u5e93\u5730\u5740\uff08\u4e2d\u79d1\u5927\u3001\u963f\u91cc\u4e91\u3001\u7f51\u6613\u4e91\u7b49\u7b49\uff09\uff0c\u7f51\u4e0a\u641c\u7d22\u5373\u53ef\u3002\u4e3b\u8981\u6539\u52a8\u7684\u6587\u4ef6\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"\uff0c\u6539\u52a8\u524d\u6ce8\u610f\u5907\u4efd\u3002\u6362\u6389\u4ed3\u5e93\u5730\u5740\u4e4b\u540e\u66f4\u65b0\u6e90\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\n")),(0,p.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://winscp.net/"},"WinSCP")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"PuTTY")," \u5229\u7528 SSH \u534f\u8bae\u8fdc\u7a0b\u7ba1\u7406 Linux \u64cd\u4f5c\u7cfb\u7edf\u3002Ubuntu \u9ed8\u8ba4\u4e0d\u652f\u6301 ",(0,p.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\u8fdc\u7a0b\u767b\u5f55\uff0c\u9700\u4fee\u6539 SSH \u914d\u7f6e\u3002\u5148\u68c0\u67e5 ssh \u670d\u52a1\u662f\u5426\u5df2\u5b89\u88c5\u5e76\u5728\u8fd0\u884c\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo ps -e | grep ssh\n")),(0,p.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u5e94\u8be5\u662f\u5df2\u5b58\u5728\u7684\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u5b89\u88c5\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo apt-get install openssh-server\n")),(0,p.kt)("p",null,"\u7136\u540e\uff0c\u4fee\u6539 ",(0,p.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," \u914d\u7f6e\u6587\u4ef6\uff0c\u5c06\u5176\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"PermitRootLogin prohibit-password")," \u4fee\u6539\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"PermitRootLogin yes")," \u5373\u53ef\uff0c\u4fdd\u5b58\u540e\u9700\u91cd\u542f\u670d\u52a1\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"service ssh restart\n")),(0,p.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u5229\u7528 WinSCP \u548c PuTTY \u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\u8fdc\u7a0b\u7ba1\u7406\u591a\u4e2a Linux \u64cd\u4f5c\u7cfb\u7edf\u4e86\u3002\u67e5\u770b\u7cfb\u7edf\u7684 IP \u5730\u5740\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ifconfig -a  # eth \u5f00\u5934\u7684\u4e3a\u4ee5\u592a\u7f51\u5361\u5730\u5740\n")),(0,p.kt)("h3",{id:"\u5b89\u88c5-git"},"\u5b89\u88c5 Git"),(0,p.kt)("p",null,"\u5b89\u88c5\u524d\u5148\u770b\u770b\u662f\u4e0d\u662f\u5df2\u7ecf\u5b89\u88c5\u4e86 Git\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"git --version\n")),(0,p.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0cUbuntu \u7cfb\u7edf\u90fd\u4f1a\u5728\u5b89\u88c5\u65f6\u81ea\u52a8\u5b89\u88c5 Git\uff0c\u5982\u672a\u5b89\u88c5\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo apt-get install git\n")),(0,p.kt)("h3",{id:"\u5b89\u88c5-python3"},"\u5b89\u88c5 Python3"),(0,p.kt)("p",null,"\u8fd9\u91cc\u5176\u5b9e\u5b89\u88c5 Python2 \u6216\u8005 Python3 \u90fd\u53ef\u4ee5\uff0c\u5efa\u8bae\u5b89\u88c5 Python3\u3002\u68c0\u67e5\u662f\u5426\u5df2\u5b89\u88c5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"python3 -V\npip3 -V\n")),(0,p.kt)("p",null,"\u5982\u672a\u5b89\u88c5\uff0c\u5219\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo apt-get install python3\nsudo apt-get install python3-pip  # \u6ce8\u610f\uff0cpip \u4e0d\u8981\u5b89\u88c5\u9519\uff0c\u5fc5\u987b\u4e3a python3-pip\n")),(0,p.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4e0a\u7f51\u641c\u7d22\u5c06 pip \u7684\u6e90\u6362\u4e3a\u56fd\u5185\u6e90\uff08\u4e2d\u79d1\u5927\u3001\u963f\u91cc\u4e91\u3001\u7f51\u6613\u4e91\u7b49\u7b49\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u914d\u7f6e\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u65b0\u5efa\u4e00\u4e2a\u5373\u53ef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"mkdir ~/.pip\ntouch ~/.pip/pip.conf\n")),(0,p.kt)("h3",{id:"\u5b89\u88c5-docker"},"\u5b89\u88c5 Docker"),(0,p.kt)("p",null,"\u8fd9\u91cc\u5fc5\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u8981\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"apt")," \u5b89\u88c5 Docker\uff0c\u56e0\u4e3a\u66f4\u65b0\u4e0d\u53ca\u65f6\uff0c\u4e5f\u4e0d\u8981\u67e5\u770b\u7f51\u7edc\u4e0a\u7684\u6559\u7a0b\uff0c\u5bb9\u6613\u51fa\u9519\uff0c\u76f4\u63a5\u6839\u636e\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"},"Docker \u5b89\u88c5\u6307\u5357\uff08\u5b98\u65b9\u6587\u6863\uff09"))),(0,p.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u9047\u5230\u4ee5\u4e0b\u6b65\u9aa4\u65f6\uff0c\u8fdb\u884c\u6362\u6e90\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'sudo add-apt-repository \\\n"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) \\\nstable"\n')),(0,p.kt)("p",null,"\u5176\u4e2d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"deb [arch=amd64] https://download.docker.com/linux/ubuntu")," \u4e3a Docker \u5b98\u65b9\u5730\u5740\uff0c\u5728\u56fd\u5916\uff0c\u57fa\u672c\u5f88\u96be\u5b89\u88c5\u6210\u529f\uff0c\u4e0a\u7f51\u641c\u7d22\u6362\u4e3a\u56fd\u5185\u5730\u5740\uff08\u4e2d\u79d1\u5927\u3001\u963f\u91cc\u4e91\u3001\u7f51\u6613\u4e91\u7b49\u7b49\uff09\u518d\u5b89\u88c5\u3002\u987a\u5229\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6839\u636e\u5b98\u65b9\u6587\u6863\uff0c\u6d4b\u8bd5 ",(0,p.kt)("inlineCode",{parentName:"p"},"hello-world")," \u955c\u50cf\u662f\u5426\u80fd\u8fd0\u884c\u6210\u529f\u3002"),(0,p.kt)("p",null,"Docker Hub \u662f Docker \u5b98\u65b9\u63d0\u4f9b\u7684\u955c\u50cf\u6587\u4ef6\u6258\u7ba1\u4ed3\u5e93\uff0c\u5728\u56fd\u5185\u8bbf\u95ee\u901f\u5ea6\u8f83\u6162\uff0c\u4e0a\u7f51\u641c\u7d22\u6362\u4e3a\u56fd\u5185\u6e90\uff08\u4e2d\u79d1\u5927\u3001\u963f\u91cc\u4e91\u3001\u7f51\u6613\u4e91\u7b49\u7b49\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u914d\u7f6e\u6587\u4ef6\u5e94\u8be5\u662f\u4e0d\u5b58\u5728\u7684\uff0c\u521b\u5efa\u4e00\u4e2a\u5373\u53ef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"touch /etc/docker/daemon.json\n")),(0,p.kt)("p",null,"\u6362\u6389\u6e90\u4e4b\u540e\uff0c\u91cd\u542f Docker \u670d\u52a1\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"service docker restart\n")),(0,p.kt)("p",null,"WebODM \u6240\u8981\u7528\u5230\u7684 Docker \u955c\u50cf\u6587\u4ef6\u56fd\u5185\u4ed3\u5e93\u5747\u6ca1\u6709\uff0c\u6240\u4ee5\u7a0d\u540e\u5b89\u88c5\u65f6\u5c06\u4f1a\u8017\u8d39\u8f83\u957f\u65f6\u95f4\u3002\u4e0d\u8fc7\uff0c\u7b2c\u4e00\u6b21\u5b89\u88c5\u4e4b\u540e\uff0c\u955c\u50cf\u4f1a\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"docker images\n")),(0,p.kt)("p",null,"\u5217\u51fa\u5728\u672c\u5730\u5df2\u5b58\u5728\u7684\u6240\u6709\u955c\u50cf\u6587\u4ef6\uff0c\u53ef\u4ee5\u5229\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"docker save")," \u547d\u4ee4\u5c06\u8981\u7528\u7684\u955c\u50cf\u6587\u4ef6\u5bfc\u51fa\uff0c\u7a0d\u540e\u4fbf\u53ef\u5229\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"docker load")," \u547d\u4ee4\u5728\u5176\u5b83\u7cfb\u7edf\u4e2d\u5bfc\u5165\u955c\u50cf\u6587\u4ef6\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u591a\u6b21\u4e0b\u8f7d\u4e86\uff0c\u8282\u7701\u65f6\u95f4\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/save/"},"docker save\uff08\u5b98\u65b9\u6587\u6863\uff09"))),(0,p.kt)("h3",{id:"\u5b89\u88c5-docker-compose"},"\u5b89\u88c5 docker-compose"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u662f Docker \u7684\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u63d0\u4f9b\u7ba1\u7406\u7531\u591a\u4e2a docker \u5bb9\u5668\u7ec4\u6210\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u80fd\u529b\uff0c\u524d\u9762\u8bf4\u8fc7 WebODM \u7531\u51e0\u4e2a\u6a21\u5757\u7ec4\u6210\uff0c\u6bcf\u4e2a\u6a21\u5757\u8fd0\u884c\u5728\u4e0d\u540c\u7684 Docker \u5bb9\u5668\u4e2d\uff0c\u6240\u4ee5\u8981\u501f\u52a9\u8be5\u5de5\u5177\u3002\u5148\u68c0\u67e5\u662f\u5426\u5df2\u5b89\u88c5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"docker-compose --version\n")),(0,p.kt)("p",null,"\u5982\u672a\u5b89\u88c5\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo pip3 install docker-compose\n")),(0,p.kt)("h3",{id:"\u5b89\u88c5-webodm"},"\u5b89\u88c5 WebODM"),(0,p.kt)("p",null,"\u5176\u5b9e\uff0c\u524d\u9762\u6240\u6709\u7684\u6b65\u9aa4\u90fd\u53ea\u662f\u4e3a\u8fd9\u4e00\u6b65\u81ea\u52a8\u5316\u5b8c\u6210 WebODM \u5b89\u88c5\u63d0\u4f9b\u6240\u5fc5\u8981\u7684\u8fd0\u884c\u73af\u5883\u3002ODM \u56e2\u961f\u7f16\u5199\u4e86 Bash \u811a\u672c\uff0c\u63d0\u4f9b\u4e86\u5f88\u591a\u547d\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7\u51e0\u6761\u547d\u4ee4\u5b8c\u6210 WebODM \u7684\u5b89\u88c5\u3001\u540e\u671f\u66f4\u65b0\u3001\u91cd\u542f\uff0c\u65b9\u4fbf\u5f88\u591a\u3002"),(0,p.kt)("p",null,"\u9996\u5148\uff0c\u5229\u7528 Git \u4e0b\u8f7d\u4ed3\u5e93\u4ee3\u7801\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenDroneMap/WebODM\n")),(0,p.kt)("p",null,"\u4e0b\u8f7d\u6bd4\u8f83\u8017\u65f6\uff0c\u7ea6\u6709\u4e0a\u767e\u5146\u751a\u81f3 1GB \u591a\u6587\u4ef6\uff0c\u8fd0\u6c14\u597d\u7684\u8bdd\uff0c10 \u591a\u5206\u949f\u5c31\u53ef\u4ee5\u5b8c\u6210\u3002\u5982\u679c\u5b9e\u5728\u7f13\u6162\uff0c\u53ef\u4ee5\u7533\u8bf7\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"https://gitee.com/"},"Gitee")," \u5e10\u53f7\uff0c\u5c06 GitHub \u4e0a\u7684\u8be5\u4ed3\u5e93\u5bfc\u5165\u4f60\u7684 Gitee \u4ed3\u5e93\uff0c\u7136\u540e\u4ece Gitee \u4e0b\u8f7d\u4f1a\u975e\u5e38\u5feb\uff0c\u51e0\u5206\u949f\u5373\u53ef\u5b8c\u6210\u3002"),(0,p.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8fdb\u5165\u76ee\u5f55\uff0c\u5f00\u59cb\u5b89\u88c5 WebODM\uff0c\u6267\u884c Bash \u811a\u672c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"cd WebODM\n./webodm.sh start\n")),(0,p.kt)("p",null,"\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e3a\u8981\u4ece Docker Hub \u62c9\u53d6\u51e0\u4e2a\u955c\u50cf\u6587\u4ef6\uff08\u7ea6 7GB\uff09\uff0c\u4f1a\u5f02\u5e38\u7f13\u6162\uff0c\u8fd0\u6c14\u597d\u7684\u8bdd\u534a\u4e2a\u5c0f\u65f6\u5230\u4e00\u5c0f\u65f6\u5c31\u80fd\u5b8c\u6210\uff0c\u5426\u5219\u53ea\u80fd\u7b49\u3002"),(0,p.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u547d\u4ee4\u884c\u4f1a\u63d0\u793a\u4f60\u8be5\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u8fd0\u884c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"localhost:8000")," \u4e0a\u4e86\uff0c\u6253\u5f00\u53e6\u4e00\u4e2a\u547d\u4ee4\u884c\u7a97\u53e3\uff0c\u5229\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u6d4b\u8bd5\u4e00\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"curl localhost:8000 -L # \u770b\u5230\u9875\u9762\u4ee3\u7801\u8f93\u51fa\u540e\uff0c\u8bf4\u660e\u5df2\u6210\u529f\u5b89\u88c5\n")),(0,p.kt)("p",null,"\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u5728\uff08\u5185\u7f51\u4e2d\uff09\u5176\u5b83\u62e5\u6709 GUI \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7528\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"ip:8000")," \u6765\u8bbf\u95ee WebODM \u7ba1\u7406\u9875\u9762\u4e86\uff0c\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"ifconfig -a")," \u547d\u4ee4\u53ef\u67e5\u770b ip \u5730\u5740\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"eth")," \u5f00\u5934\u7684\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"inet")," \u4fe1\u606f\u5373\u4e3a ipv4 \u5730\u5740\uff09\u3002"),(0,p.kt)("h3",{id:"\u8bbe\u7f6e\u7cfb\u7edf\u9759\u6001-ip"},"\u8bbe\u7f6e\u7cfb\u7edf\u9759\u6001 IP"),(0,p.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\u591a\u4e2a Linux \u7cfb\u7edf\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9759\u6001 IP \u4f1a\u66f4\u65b9\u4fbf\uff0c\u5982\u679c\u662f\u5728\u865a\u62df\u673a\u4e2d\u5b89\u88c5\u7684\uff0c\u5c06\u865a\u62df\u673a\u548c\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u914d\u7f6e\u4e3a\u6865\u63a5\u6a21\u5f0f\uff0c\u7269\u7406\u673a\u76f4\u63a5\u5b89\u88c5\u7684\u5219\u4e0d\u9700\u8981\u3002"),(0,p.kt)("p",null,"\u7136\u540e\uff0c\u914d\u7f6e\u9759\u6001 IP\uff0cUbuntu 18.04 Server \u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://netplan.io/"},"netplan")," \u6765\u7ba1\u7406\u914d\u7f6e\u7f51\u7edc\u3002\u7f16\u8f91 ",(0,p.kt)("inlineCode",{parentName:"p"},"/etc/netplan/50-cloud-init.yaml")," \u6587\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"network:\n    ethernets:\n        eth0:\n            addresses: [192.168.1.120/24]\n            dhcp4: false\n            dhcp6: false\n            gateway4: 192.168.1.1\n            nameservers:\n                addresses: [114.114.114.114, 8.8.8.8]\n                search: []\n    version: 2\n")),(0,p.kt)("p",null,"\u9759\u6001 IP \u7684\u914d\u7f6e\u5927\u81f4\u5982\u4e0a\uff0c\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"addresses")," \u4e3a\u8981\u914d\u7f6e\u7684 IP \u5730\u5740\uff0c\u52a1\u5fc5\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"dhcp4")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"dhcp6")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5426\u5219\u4f1a\u51fa\u9519\u3002\u7f16\u8f91\u4fdd\u5b58\u4e4b\u540e\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"sudo netplan apply\n")),(0,p.kt)("p",null,"\u66f4\u65b0\u4e86\u7f51\u7edc\u914d\u7f6e\u4e4b\u540e\uff0c\u6d4b\u8bd5\u7f51\u7edc\u662f\u5426\u6b63\u5e38\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ping www.baidu.com # \u6d4b\u8bd5\u662f\u5426\u80fd\u8bbf\u95ee\u5916\u7f51\nping <local_net_ip> # \u6d4b\u8bd5\u662f\u5426\u80fd\u8bbf\u95ee\u5c40\u57df\u7f51\u4e2d\u5176\u5b83\u4e3b\u673a\n")),(0,p.kt)("h2",{id:"\u90e8\u7f72\u66f4\u591a\u5904\u7406\u8282\u70b9"},"\u90e8\u7f72\u66f4\u591a\u5904\u7406\u8282\u70b9"),(0,p.kt)("p",null,"\u8fd9\u6837\u5b89\u88c5\u7684 WebODM \u53ea\u6709\u4e00\u4e2a NodeODM \u5904\u7406\u8282\u70b9\uff0c\u4f46\u5177\u5907\u6240\u6709\u7684\u529f\u80fd\u3002\u5176\u67b6\u6784\u5927\u81f4\u4e3a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ODM\uff08\u7b97\u6cd5\u5904\u7406\uff0c\u5e95\u5c42 API\uff09 -> NodeODM\uff08\u5904\u7406\u8282\u70b9\uff0c\u8f7b\u91cf\u7ea7 REST API\uff09 -> WebODM\uff08Web \u5e94\u7528\uff09\n")),(0,p.kt)("p",null,"\u800c\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u5b83\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u591a\u4e2a NodeODM \u8282\u70b9\u6dfb\u52a0\u5230 WebODM \u4e2d\uff0c\u5373\u53ef\u5b9e\u73b0\u591a\u8282\u70b9\u5e76\u884c\u5904\u7406\u591a\u4e2a\u4efb\u52a1\uff0c\u73b0\u5728\u4e5f\u652f\u6301\u5229\u7528",(0,p.kt)("a",{parentName:"p",href:"https://docs.opendronemap.org/large.html#"},"\u62c6\u5206\u5408\u5e76"),"\u5b9e\u73b0\u591a\u8282\u70b9\u5904\u7406\u540c\u4e00\u4e2a\u4efb\u52a1\u3002\u5176\u67b6\u6784\u5927\u81f4\u4e3a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ODM\uff08\u7b97\u6cd5\u5904\u7406\uff0c\u5e95\u5c42 API\uff09 -> NodeODM\uff08\u591a\u4e2a\u5904\u7406\u8282\u70b9\uff0c\u8f7b\u91cf\u7ea7 REST API\uff09 -> ClusterODM\uff08\u96c6\u7fa4\u652f\u6301\uff0c\u8d1f\u8f7d\u5747\u8861\uff09 -> WebODM\uff08Web \u5e94\u7528\uff09\n")),(0,p.kt)("h3",{id:"\u90e8\u7f72-nodeodm"},"\u90e8\u7f72 NodeODM"),(0,p.kt)("p",null,"\u5b89\u88c5\u591a\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/OpenDroneMap/NodeODM"},"NodeODM")," \u5904\u7406\u8282\u70b9\u975e\u5e38\u7b80\u5355\uff0c\u5728\u5176\u5b83\u591a\u4e2a\u5185\u7f51\u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u597d\u5fc5\u8981\u7684\u8fd0\u884c\u73af\u5883\uff08Ubuntu\u3001Git\u3001Python3\u3001Docker\uff09\uff0c\u5229\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"docker save")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"docker load")," \u547d\u4ee4\uff0c\u5c06\u5b89\u88c5 WebODM \u65f6\u4e0b\u8f7d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"opendronemap/nodeodm")," \u590d\u5236\u5230\u5176\u5b83\u670d\u52a1\u5668\u4e0a\uff0c\u8fd9\u6837\u5c31\u4e0d\u7528\u518d\u4ece Docker Hub \u4e0b\u8f7d\uff0c\u8282\u7701\u5927\u91cf\u65f6\u95f4\u3002"),(0,p.kt)("p",null,"\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"docker images\n")),(0,p.kt)("p",null,"\u67e5\u770b\u662f\u5426\u672c\u5730\u5df2\u6210\u529f\u5bfc\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"opendronemap/nodeodm")," \u955c\u50cf\u6587\u4ef6\uff0c\u5df2\u6210\u529f\u5219\u76f4\u63a5\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"docker run --rm -it -p 3000:3000 opendronemap/nodeodm -q 1 --token <secret>\n")),(0,p.kt)("p",null,"\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"<secret>")," \u4e3a\u8981\u8fde\u63a5\u8be5\u5904\u7406\u8282\u70b9\u65f6\u7684\u5bc6\u94a5\uff0c\u53ef\u7701\u7565 ",(0,p.kt)("inlineCode",{parentName:"p"},"--token")," \u9009\u9879\u3002\u8fd0\u884c\u6210\u529f\u540e\uff0c\u53ef\u8bbf\u95ee ",(0,p.kt)("inlineCode",{parentName:"p"},"localhost:3000/?token=<secret>")," \u67e5\u770b\uff0c\u9875\u9762\u6210\u529f\u663e\u793a\u5219\u90e8\u7f72\u6210\u529f\uff0c\u8bbe\u7f6e\u597d\u8be5\u670d\u52a1\u5668\u7684\u9759\u6001 IP \u540e\uff0c\u5373\u53ef\u5728 WebODM \u7ba1\u7406\u9875\u9762\u5c06\u8be5\u8282\u70b9\u52a0\u5165\u961f\u5217\u4e2d\uff0c\u63d0\u4f9b\u5e76\u884c\u5904\u7406\u591a\u4e2a\u4efb\u52a1\u7684\u80fd\u529b\u3002"),(0,p.kt)("h3",{id:"\u90e8\u7f72-clusterodm"},"\u90e8\u7f72 ClusterODM"),(0,p.kt)("p",null,"NodeODM \u53ea\u80fd\u652f\u6301\u4e00\u4e2a\u8282\u70b9\u5904\u7406\u4e00\u4e2a\u4efb\u52a1\uff0c\u8981\u7f29\u77ed\u65f6\u95f4\uff0c\u63d0\u9ad8\u6548\u7387\uff0c\u5fc5\u7136\u6709\u591a\u4e2a NodeODM \u8282\u70b9\u5904\u7406\u540c\u4e00\u4e2a\u4efb\u52a1\u7684\u9700\u6c42\uff0c\u800c ODM \u56e2\u961f\u8fd1\u671f\uff082019 \u5e74 6 \u6708\uff09\u5ba3\u5e03\u4e86",(0,p.kt)("a",{parentName:"p",href:"https://docs.opendronemap.org/large.html#"},"\u62c6\u5206\u5408\u5e76"),"\u7684\u65b0\u7279\u6027\uff0c\u5e76\u5728\u4e0d\u65ad\u4f18\u5316\uff0c\u800c\u5176\u8bbe\u8ba1\u4e5f\u975e\u5e38\u7b80\u6d01\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/OpenDroneMap/ClusterODM"},"ClusterODM")," \u6765\u81ea\u52a8\u7ba1\u7406\u591a\u4e2a NodeODM \u8282\u70b9\u5373\u53ef\u3002"),(0,p.kt)("p",null,"\u540c\u6837\u7684\uff0c\u4efb\u610f\u627e\u4e00\u53f0\u5185\u7f51\u4e2d\u7684\u670d\u52a1\u5668\u914d\u7f6e\u597d\u5fc5\u8981\u7684\u8fd0\u884c\u73af\u5883\uff08Ubuntu\u3001Git\u3001Python3\u3001Docker\uff09\uff0c\u6267\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"docker run -ti -p 3001:3000 -p 8080:8080 -p 10000:10000 opendronemap/clusterodm\n")),(0,p.kt)("p",null,"\u6b64\u65f6\u4f1a\u4ece Docker Hub \u4e0b\u8f7d ",(0,p.kt)("inlineCode",{parentName:"p"},"opendronemap/clusterodm")," \u955c\u50cf\u6587\u4ef6\uff08\u7ea6 1GB\uff09\uff0c\u5982\u679c\u5bbf\u4e3b\u673a ",(0,p.kt)("inlineCode",{parentName:"p"},"3001")," \u7aef\u53e3\u5df2\u88ab\u5360\u7528\u6362\u6210\u5176\u5b83\u7aef\u53e3\u5373\u53ef\u3002\u8fd0\u884c\u6210\u529f\u540e\uff0c\u53ef\u8bbf\u95ee ",(0,p.kt)("inlineCode",{parentName:"p"},"localhost:10000")," \u67e5\u770b\u5df2\u52a0\u5165\u7684 NodeODM \u8282\u70b9\u4fe1\u606f\u3002ClusterODM \u5bf9 NodeODM \u7684\u7ba1\u7406\u64cd\u4f5c\uff08\u6dfb\u52a0\u3001\u5220\u9664\u3001\u67e5\u770b\uff09\uff0c\u90fd\u662f\u901a\u8fc7 telnet \u534f\u8bae\u5b8c\u6210\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"telnet localhost 8080\n")),(0,p.kt)("p",null,"\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5373\u53ef\u7ba1\u7406 NodeODM \u8282\u70b9\uff0c\u8f93\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"HELP")," \u53ef\u67e5\u770b\u6240\u6709\u547d\u4ee4\u3002"),(0,p.kt)("p",null,"\u6b64\u65f6\u5c06\u9700\u8981\u4f5c\u4e3a\u96c6\u7fa4\u90e8\u7f72\u7684 NodeODM \u8282\u70b9\u4ece WebODM \u7ba1\u7406\u9875\u9762\u4e2d\u5220\u9664\uff0c\u800c\u662f\u76f4\u63a5\u6dfb\u52a0 ClusterODM\uff0c\u8fd9\u6837\u5728 WebODM \u4e2d\u521b\u5efa\u7684\u4efb\u52a1\u5982\u679c\u9009\u62e9\u4e86 ClusterODM \u4f5c\u4e3a\u5904\u7406\u8282\u70b9\uff0c\u5176\u4f1a\u81ea\u52a8\u534f\u8c03\u8fde\u63a5\u5230 ClusterODM \u7684\u6240\u6709\u7a7a\u95f2 NodeODM \u8282\u70b9\u5e76\u884c\u5904\u7406\u8be5\u4efb\u52a1\u3002"),(0,p.kt)("p",null,"\u8fd9\u91cc\u8fd8\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8981\u8ba9\u96c6\u7fa4\u751f\u6548\uff0c\u9700\u8981\u5728\u521b\u5efa\u4efb\u52a1\u7684\u65f6\u5019\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"sm-cluster")," \u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u540c\u65f6\u8c03\u6574 ",(0,p.kt)("inlineCode",{parentName:"p"},"split")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"split-overlap")," \u9009\u9879\uff0c\u5982\u679c\u5931\u8d25\uff0c\u8bf4\u660e ",(0,p.kt)("inlineCode",{parentName:"p"},"split")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"split-overlap")," \u9009\u9879\u53c2\u6570\u6709\u95ee\u9898\uff0c\u8c03\u6574\u540e\u518d\u8bd5\u3002\u5177\u4f53\u8bbe\u7f6e\u9879\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://docs.opendronemap.org/arguments.html"},"ODM \u914d\u7f6e\u9879\uff08\u5b98\u65b9\u6587\u6863\uff09"))))}k.isMDXComponent=!0}}]);