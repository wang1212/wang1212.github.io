"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1014],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const o={title:"Web \u524d\u7aef\u8de8\u57df\u8bbf\u95ee",date:new Date("2016-08-10T15:18:00.000Z"),update:new Date("2016-08-10T15:18:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],description:"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002"},i=void 0,l={permalink:"/Computer-Technology/Web/web-cross-domain",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/Computer-Technology/Web/web-cross-domain.md",source:"@site/blog/Computer-Technology/Web/web-cross-domain.md",title:"Web \u524d\u7aef\u8de8\u57df\u8bbf\u95ee",description:"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002",date:"2016-08-10T15:18:00.000Z",formattedDate:"2016\u5e748\u670810\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Web",permalink:"/tags/web"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"\u5b89\u5168",permalink:"/tags/\u5b89\u5168"},{label:"\u8de8\u57df",permalink:"/tags/\u8de8\u57df"}],readingTime:9.475,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Web \u524d\u7aef\u8de8\u57df\u8bbf\u95ee",date:"2016-08-10T15:18:00.000Z",update:"2016-08-10T15:18:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web","Web \u524d\u7aef","\u5b89\u5168","\u8de8\u57df"],description:"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002"},prevItem:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u5de5\u5177\u4e0e\u6280\u5de7",permalink:"/Computer-Technology/Web/web-performance-optimize-skill"},nextItem:{title:"Ruby-\u5143\u7f16\u7a0b\u4e4b\u65b9\u6cd5",permalink:"/Computer-Technology/Ruby/ruby-meta-method"}},p={authorsImageUrls:[void 0]},m=[{value:"\u540c\u6e90\u7b56\u7565",id:"\u540c\u6e90\u7b56\u7565",level:2},{value:"\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee",id:"\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee",level:2},{value:"\u54cd\u5e94\u5934\u6807\u8bc6",id:"\u54cd\u5e94\u5934\u6807\u8bc6",level:3},{value:"jsonp",id:"jsonp",level:3},{value:"\u5ba2\u6237\u7aef\u4ee3\u7801",id:"\u5ba2\u6237\u7aef\u4ee3\u7801",level:4},{value:"\u670d\u52a1\u5668\u7aef\u4ee3\u7801",id:"\u670d\u52a1\u5668\u7aef\u4ee3\u7801",level:4},{value:"window.name",id:"windowname",level:3},{value:"\u5ba2\u6237\u7aef\u4ee3\u7801",id:"\u5ba2\u6237\u7aef\u4ee3\u7801-1",level:4},{value:"\u8d44\u6e90\u9875\u9762\u4ee3\u7801",id:"\u8d44\u6e90\u9875\u9762\u4ee3\u7801",level:4},{value:"document.domain",id:"documentdomain",level:3},{value:"HTML5 postMessage API",id:"html5-postmessage-api",level:3},{value:"\u5ba2\u6237\u7aef\u4ee3\u7801",id:"\u5ba2\u6237\u7aef\u4ee3\u7801-2",level:4},{value:"\u8d44\u6e90\u9875\u9762\u4ee3\u7801",id:"\u8d44\u6e90\u9875\u9762\u4ee3\u7801-1",level:4},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],s={toc:m};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u6700\u540e\u66f4\u65b0\u4e8e 2016-08-10 15:18:00 "))),(0,a.kt)("p",null,"\u4e3a\u4e86\u7528\u6237\u7684\u5b89\u5168\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u90fd\u4f1a\u9650\u5236\u8de8\u57df\uff08Cross-domain\uff09\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u4e0d\u540c\u57df\u540d\u4e0b\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u8d44\u6e90\u7684\u4f20\u9012\u548c\u4fe1\u606f\u4ea4\u4e92\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53c8\u6709\u8de8\u57df\u8bf7\u6c42\u8d44\u6e90\u7684\u9700\u6c42\u3002"),(0,a.kt)("h2",{id:"\u540c\u6e90\u7b56\u7565"},"\u540c\u6e90\u7b56\u7565"),(0,a.kt)("p",null,"\u6211\u4eec\u8981\u5728\u5730\u5740\u680f\u4e2d\u6b63\u786e\u8f93\u5165\u201c\u534f\u8bae\u201d\u3001\u201c\u57df\u540d\u201d\u3001\u201c\u7aef\u53e3\u201d\u3001\u201c\u6587\u4ef6\u8def\u5f84\u201d\u624d\u80fd\u8bbf\u95ee\u4e00\u4e2a\u9875\u9762\uff0c\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u4e0d\u6b63\u786e\u5c31\u4e0d\u4f1a\u8fbe\u5230\u6211\u4eec\u671f\u671b\u7684\u7ed3\u679c\u3002\u6240\u8c13\u7684\u8de8\u57df\u5c31\u662f\u5f53",(0,a.kt)("strong",{parentName:"p"},"\u534f\u8bae"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u57df\u540d"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u7aef\u53e3"),"\u8fd9\u4e09\u8005\u6709\u4e00\u4e2a\u4e0d\u540c\u65f6\u5373\u79f0\u4e3a\u8de8\u57df\u8bbf\u95ee\uff0c\u8fd9\u65f6\u5019\u6d4f\u89c8\u5668\u4e3a\u4e86\u7528\u6237\u5b89\u5168\u5c31\u4f1a\u9650\u5236 JavaScript \u7684\u8de8\u57df\u884c\u4e3a\uff0c\u8fd9\u4e5f\u53eb\u505a\u540c\u6e90\u7b56\u7565\uff08\u7531\u7f51\u666f\u516c\u53f8\u63d0\u51fa\uff09\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u4e00\u4e2a\u516c\u53f8\uff08\u7ec4\u7ec7\u3001\u56e2\u961f\uff09\u4f1a\u7533\u8bf7\u4e00\u4e2a\u4e3b\u57df\u540d\uff0c\u7136\u540e\u6839\u636e\u670d\u52a1\u7c7b\u578b\u5206\u51fa\u591a\u4e2a\u4e8c\u7ea7\u57df\u540d\uff0c\u5728\u67d0\u4e9b\u6d89\u53ca\u5230\u654f\u611f\u4fe1\u606f\u7684\u9875\u9762\u53c8\u4f1a\u91c7\u7528 HTTPS \u534f\u8bae\u52a0\u5bc6\uff0c\u6216\u8bb8\u8fd8\u6709\u66f4\u591a\u7684\u7c7b\u4f3c\u9700\u6c42\uff0c\u8fd9\u4e9b\u9700\u6c42\u5927\u591a\u90fd\u9700\u8981\u8de8\u57df\u5171\u4eab\u8d44\u6e90\u624d\u80fd\u5b9e\u73b0\u7528\u6237\u7684\u5b9a\u5236\u670d\u52a1\u3002\u6240\u4ee5\uff0c\u8de8\u57df\u8bbf\u95ee\u4e0d\u662f\u4e2a\u80fd\u907f\u514d\u7684\u95ee\u9898\uff0c\u5728\u4e0d\u7834\u574f\u6d4f\u89c8\u5668\u5b89\u5168\u6027\u7684\u524d\u63d0\u4e0b\u6211\u4eec\u9700\u8981\u53bb\u89e3\u51b3\u5b83\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee"},"\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee"),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u8de8\u57df\u8bbf\u95ee\u9700\u6c42\u662f\u591a\u6837\u5316\u7684\uff0c\u56e0\u6b64\u89e3\u51b3\u65b9\u6cd5\u4e5f\u662f\u591a\u6837\u5316\u7684\uff0c\u4e0b\u9762\u5c31\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h3",{id:"\u54cd\u5e94\u5934\u6807\u8bc6"},"\u54cd\u5e94\u5934\u6807\u8bc6"),(0,a.kt)("p",null,"\u968f\u7740 Ajax \u6280\u672f\u7684\u5927\u91cf\u4f7f\u7528\uff0cAjax \u8de8\u57df\u8bf7\u6c42\u7684\u9700\u6c42\u65e5\u76ca\u589e\u591a\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7aef\u5f88\u7b80\u5355\u7684\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5373\u5728\u76f8\u5e94\u6587\u4ef6\u4e2d\u6dfb\u52a0\u54cd\u5e94\u5934\u6807\u8bc6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u5728\u670d\u52a1\u5668\u7aef\u7684\u6587\u4ef6\u4e2d\u52a0\u4e0a\u4ee5\u4e0b\u54cd\u5e94\u5934\uff08\u5141\u8bb8\u6240\u6709\u57df\u540d\u8de8\u57df\u8bbf\u95ee\u8be5\u8d44\u6e90\uff09\nheader('Access-Control-Allow-Origin: *');\n\n// \u53ea\u5141\u8bb8\u6307\u5b9a\u7684\u57df\u540d\u8de8\u57df\u8bbf\u95ee\u8be5\u8d44\u6e90\nheader('Access-Control-Allow-Origin: http://www.163.com');\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u6307\u5b9a\u591a\u4e2a\u57df\u540d\uff0c\u76f8\u4e92\u4e4b\u95f4\u7528\u9017\u53f7\u9694\u5f00\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("h3",{id:"jsonp"},"jsonp"),(0,a.kt)("p",null,"json \u662f\u4e00\u79cd\u5f88\u7b80\u5355\u7684\u6570\u636e\u683c\u5f0f\uff0c\u9274\u4e8e\u5b83\u7684\u7b80\u5355\u6027\u4ee5\u53ca script \u6807\u7b7e\u53ef\u8de8\u57df\u7684\u7279\u6027\uff0c\u6211\u4eec\u91c7\u7528 jsonp \u7684\u65b9\u5f0f\u8de8\u57df\u8bbf\u95ee\u8d44\u6e90\u3002"),(0,a.kt)("h4",{id:"\u5ba2\u6237\u7aef\u4ee3\u7801"},"\u5ba2\u6237\u7aef\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<script>\n    // \u5728\u5168\u5c40\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff08result \u53c2\u6570\u4e3a\u8de8\u57df\u8bbf\u95ee\u5230\u7684\u8d44\u6e90\uff09\n    function callback(result){\n        ...\n        // \u5728\u8fd9\u91cc\u5904\u7406\u8de8\u57df\u8bbf\u95ee\u5230\u7684\u8d44\u6e90\uff08\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u5728\u5168\u5c40\u53d8\u91cf\u4e2d\uff09\n        ...\n        // \u6700\u540e\u9500\u6bc1\u5168\u5c40\u7684\u56de\u8c03\u51fd\u6570\n        window.callback = null;\n        // \u79fb\u9664\u52a8\u6001\u521b\u5efa\u7684 script\n        document.body.removeChild(document.getElementById('nScript'));\n    }\n    // \u81ea\u6267\u884c\uff0c\u907f\u514d\u6c61\u67d3\u5168\u5c40\u7a7a\u95f4\n    (function(){\n        // \u52a8\u6001\u521b\u5efa script \u63d2\u5165DOM\u6811\uff0c\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee\u8d44\u6e90\n        var nScript = document.createElement('script');\n        nScript.id = \"nScript\";\n        nScript.src = \"http://www.163.com/info.php?call=callback\";\n        document.body.appendChild(nScript);\n    })(window);\n<\/script>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u5fc5\u987b\u5728\u5168\u5c40\u7a7a\u95f4\u5185\uff0c\u5426\u5219\u65e0\u6cd5\u88ab\u65b0\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"<script>")," \u6807\u7b7e\u8c03\u7528\uff0c\u8be5\u56de\u8c03\u51fd\u6570\u662f\u5728\u65b0\u521b\u5efa\u7684 script \u6807\u7b7e\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"src")," \u5c5e\u6027\u503c\u4e2d\u4ee5\u53c2\u6570\u65b9\u5f0f\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7aef\u7684\u3002"),"\u8be5\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5df1\u9500\u6bc1\u5b83\uff0c\u907f\u514d\u6c61\u67d3\u5168\u5c40\u7a7a\u95f4\uff1b\u5f53\u7136\uff0c\u5982\u679c\u6211\u4eec\u7ed9\u52a8\u6001\u521b\u5efa\u7684 script \u6807\u7b7e\u6307\u5b9a\u4e00\u4e2a id \u7684\u8bdd\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u79fb\u9664\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," \u5143\u7d20\u3002"),(0,a.kt)("h4",{id:"\u670d\u52a1\u5668\u7aef\u4ee3\u7801"},"\u670d\u52a1\u5668\u7aef\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<?php\n    header('Content-type: application/json');\n    // \u83b7\u53d6\u56de\u8c03\u65b9\u6cd5\u540d(\u6ce8\u610f\u4e0e\u5ba2\u6237\u7aef\u53c2\u6570\u540d\u5bf9\u5e94)\n    $call = htmlspecialchars($_GET['call']);\n    // \u8981\u8fd4\u56de\u7684 json \u683c\u5f0f\u6570\u636e\n    $data = \"['Name','Sex','Age']\";\n\n    echo $call.\"({$data})\";\n ?>\n")),(0,a.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u6240\u8c13\u7684 jsonp \u5c31\u662f\u901a\u8fc7\u5ba2\u6237\u7aef\u5c06\u56de\u8c03\u51fd\u6570\u540d\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7aef\uff0c\u670d\u52a1\u5668\u7aef\u518d\u628a\u8981\u8fd4\u56de\u7684 json \u6570\u636e\u5f53\u4f5c\u53c2\u6570\u4e0e\u65b9\u6cd5\u540d\u62fc\u63a5\u6210\u4e00\u6bb5 JavaScript \u4ee3\u7801\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u6267\u884c\u5f97\u5230\u7684 js \u4ee3\u7801\u8868\u8fbe\u5f0f\uff08\u8c03\u7528\u56de\u8c03\u65b9\u6cd5\uff09\u5c31\u5b9e\u73b0\u4e86\u8de8\u57df\u8bbf\u95ee\u8d44\u6e90\u3002"),(0,a.kt)("h3",{id:"windowname"},"window.name"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u53ea\u8981\u5904\u4e8e\u540c\u4e00\u4e2a\u7a97\u53e3\u4e0b\uff0c\u65e0\u8bba\u9875\u9762\u5982\u4f55\u8df3\u8f6c\uff0c\u6240\u6709\u5728\u8be5\u7a97\u53e3\u4e0b\u7684\u9875\u9762\u90fd\u5171\u4eab\uff08\u540c\u6b65\uff09",(0,a.kt)("code",null,"window.name"),"\u5c5e\u6027\uff08\u5305\u62ec\u83b7\u53d6\u3001\u4fee\u6539\u64cd\u4f5c\uff09\u3002"),"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u9700\u8981\u8de8\u57df\u8bbf\u95ee\u7684\u8d44\u6e90\u4fdd\u5b58\u5728\u8be5\u5c5e\u6027\u4e2d\u5171\u4eab\u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"\u5ba2\u6237\u7aef\u4ee3\u7801-1"},"\u5ba2\u6237\u7aef\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<sctipt>\n    // \u81ea\u6267\u884c\uff0c\u907f\u514d\u6c61\u67d3\u5168\u5c40\u7a7a\u95f4\n    (function(){\n        // \u52a8\u6001\u521b\u5efa iframe \u63d2\u5165DOM\u6811\uff0c\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee\u8d44\u6e90\n        var nIframe = document.createElement('iframe');\n        nIframe.style.cssText = 'display: none';\n        nIframe.src = 'http://www.163.com/info2.html';\n        nIframe.onload = function(){\n            // \u4fee\u6539 src \u5230\u540c\u6e90\u57df\u540d\u4e0b\uff08\u7a7a\u767d\u9875\uff09\n            this.src = 'about:blank';\n            this.onload = function() {\n                // \u53d6\u5f97\u8de8\u57df\u8bbf\u95ee\u8d44\u6e90\uff0c\u79fb\u9664\u8be5 iframe\n                var data = JSON.parse(this.contentWindow.name);\n                document.body.removeChild(this);\n                // \u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u5904\u7406\u5f97\u5230\u7684\u8d44\u6e90\u4e86\n                ...\n            }\n        }\n        document.body.appendChild(nIframe);\n    })(window);\n<\/script>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u53ea\u662f\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"<iframe>")," \u4f5c\u4e3a\u4ee3\u7406\u83b7\u53d6\u5230\u8de8\u57df\u8d44\u6e90\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"strong"},"<iframe>")," \u4e4b\u95f4\u4e5f\u662f\u4e0d\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u518d\u6b21\u628a\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"src")," \u4fee\u6539\u4e3a\u540c\u6e90\u9875\u9762\u6216\u8005\u7a7a\u767d\u9875\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230 ",(0,a.kt)("inlineCode",{parentName:"strong"},"window.name")," \u7684\u5c5e\u6027\u4e86\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u9700\u8981\u7684\u8d44\u6e90\u3002"),"\u540c\u6837\u5730\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u6700\u540e\u79fb\u9664\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," \u5143\u7d20\u3002"),(0,a.kt)("h4",{id:"\u8d44\u6e90\u9875\u9762\u4ee3\u7801"},"\u8d44\u6e90\u9875\u9762\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<script>\n    window.name = \'["Name","Sex","Age"]\';\n<\/script>\n')),(0,a.kt)("p",null,"\u7531\u4e8e\u8d44\u6e90\u9875\u9762\u4ec5\u4ec5\u662f\u4e3a\u4e86\u4f20\u9012\u6570\u636e\uff0c\u6211\u4eec\u901a\u5e38\u5728\u52a8\u6001\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," \u65f6\u8bbe\u7f6e CSS \u6837\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"display\uff1anone"),"\uff0c\u907f\u514d\u5b83\u5f71\u54cd\u5ba2\u6237\u7aef\u9875\u9762\u7684\u5e03\u5c40\u3002"),(0,a.kt)("h3",{id:"documentdomain"},"document.domain"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5373\u4fbf\u662f\u540c\u4e00\u4e2a\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"<iframe>")," \u4e5f\u662f\u6709\u8de8\u57df\u9650\u5236\u7684\uff0c\u82e5\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"<iframe>")," \u8f7d\u5165\u7684\u9875\u9762\u6070\u597d\u662f\u8de8\u5b50\u57df\u7684\u8bdd\uff08\u4e3b\u57df\u540d\u76f8\u540c\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u4eec\u5404\u81ea\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"document.domain")," \u8bbe\u7f6e\u4e3a\u5b83\u4eec\u5171\u6709\u7684\u4e3b\u57df\u540d\u5373\u53ef\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee\u3002"),"\u4e0b\u9762\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u7b80\u5355\u7684\u8bf4\u660e\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// iframe1 \uff1a www.163.com\n<script>\n    document.domain = "163.com";\n<\/script>\n// iframe2 \uff1a study.163.com\n<script>\n    document.domain = "163.com";\n<\/script>\n')),(0,a.kt)("p",null,"\u8fd9\u6837\u8bbe\u7f6e\u597d\u4e4b\u540e\uff0c\u6211\u4eec\u5219\u53ef\u4ee5\u5728\u5168\u5c40\u8303\u56f4\u5185\u5b8c\u6210\u4e24\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," \u8de8\u5b50\u57df\u7684\u6570\u636e\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u540c\u7406\uff0c\u6211\u4eec\u4f9d\u7136\u53ef\u4ee5\u52a8\u6001\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," \u53bb\u5b8c\u6210\u8de8\u5b50\u57df\u7684\u6570\u636e\u8bbf\u95ee\uff0c\u5177\u4f53\u5b9e\u73b0\u6211\u4eec\u53ef\u4ee5\u53c2\u8003\u4e0a\u9762\u5171\u4eab ",(0,a.kt)("inlineCode",{parentName:"p"},"window.name")," \u65f6\u52a8\u6001\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," \u7684\u65b9\u6cd5\u3002",(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8d44\u6e90\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"document.domain")," \u5c5e\u6027\u8981\u63d0\u524d\u8bbe\u7f6e\u597d\uff0c\u5426\u5219\u5728\u5ba2\u6237\u7aef\u9875\u9762\u662f\u65e0\u6cd5\u8de8\u57df\u53bb\u4fee\u6539\u8d44\u6e90\u9875\u9762\u7684\u5c5e\u6027\u7684\u3002")),(0,a.kt)("h3",{id:"html5-postmessage-api"},"HTML5 postMessage API"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728 HTML5 \u4e2d\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5b89\u5168\u4fbf\u6377\u7684\u8de8\u57df\u6d88\u606f\u4f20\u9012\u65b9\u6848\uff0c\u4e5f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"strong"},"postMessage()")," \u65b9\u6cd5\uff0c\u5b83\u6709\u4e24\u4e2a\u53c2\u6570\uff1a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u53d1\u9001\u7684\u6570\u636e\uff0c\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"strong"},"event")," \u4e8b\u4ef6\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"data")," \u5c5e\u6027\u4e0a\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u6570\u636e\u63a5\u53d7\u8005\u9650\u5236\u57df\u3002\u5728\u63a5\u53d7\u8005\u9875\u9762\u8fd8\u9700\u8981\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"message")," \u4e8b\u4ef6\u4f9b\u6211\u4eec\u76d1\u542c\u662f\u5426\u6709\u6570\u636e\u53d1\u9001\u8fc7\u6765\u914d\u5408\u4f7f\u7528\u3002")),(0,a.kt)("h4",{id:"\u5ba2\u6237\u7aef\u4ee3\u7801-2"},"\u5ba2\u6237\u7aef\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<script>\n    // \u6ce8\u518c message \u4e8b\u4ef6\u51c6\u5907\u63a5\u53d7\u6570\u636e\n    window.onmessage = function(e){\n        // \u53ef\u4ee5\u5148\u5224\u65ad\u53d1\u9001\u6e90\u518d\u5904\u7406\uff0c\u4fdd\u8bc1\u5b89\u5168\n        // if e.origin == "http://study.163.com"\n        // \u83b7\u53d6\u8de8\u57df\u8bbf\u95ee\u7684\u6570\u636e\n        var data = JSON.parse(e.data);\n        // \u5904\u7406\u6570\u636e\n        ...\n        // \u9500\u6bc1\u8be5\u4e8b\u4ef6\n        this.onmessage = null;\n        // \u79fb\u9664\u8be5 iframe\n        document.body.removeChild(nIframe);\n    }\n\n    var nIframe = document.createElement(\'iframe\');\n\n    nIframe.style.cssText = "display: none";\n    nIframe.src = "http://domain1.com:8081/info2.html";\n\n    document.body.appendChild(nIframe);\n<\/script>\n')),(0,a.kt)("p",null,"\u5728\u8fdb\u884c\u6570\u636e\u63a5\u6536\u548c\u5904\u7406\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"event.origin")," \u6765\u5224\u65ad\u53d1\u9001\u6e90\u662f\u5426\u5df2\u77e5\uff0c\u4fdd\u8bc1\u9875\u9762\u5b89\u5168\u3002"),(0,a.kt)("h4",{id:"\u8d44\u6e90\u9875\u9762\u4ee3\u7801-1"},"\u8d44\u6e90\u9875\u9762\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<script>\n    window.top.postMessage(\'["Name","Sex","Age"]\', \'http://www.163.com\');\n<\/script>\n')),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u89c4\u5b9a\u4e86\u6570\u636e\u63a5\u53d7\u8005\u7684\u57df\u9650\u5236\uff0c\u8fd9\u4e2a\u4e5f\u662f\u4e3a\u4e86\u4fdd\u8bc1\u654f\u611f\u6570\u636e\u4e0d\u4f1a\u53d1\u9001\u7ed9\u672a\u77e5\u9875\u9762\uff0c\u786e\u4fdd\u6570\u636e\u5b89\u5168\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,a.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u8de8\u57df\u8bbf\u95ee\u662f\u4e2a\u5f88\u5e38\u7528\u7684\u9700\u6c42\uff0c\u800c\u8bb8\u591a\u89e3\u51b3\u65b9\u6cd5\u4e5f\u90fd\u5f02\u66f2\u540c\u5de5\uff0c\u4e5f\u4e0d\u53ea\u6709\u8fd9\u4e9b\u65b9\u6cd5\u624d\u80fd\u5b9e\u73b0\u8de8\u57df\u8bbf\u95ee\uff0c\u91c7\u7528\u4ec0\u4e48\u65b9\u6cd5\u90fd\u662f\u6309\u5b9e\u9645\u9700\u6c42\u6765\u9009\u62e9\u7684\u3002\u800c\u6211\u4eec\u4f7f\u7528\u8de8\u57df\u8bbf\u95ee\u6280\u672f\uff0c\u662f\u8fdd\u80cc\u4e86\u6d4f\u89c8\u5668\u9ed8\u8ba4\u884c\u4e3a\u7684\uff0c\u6240\u4ee5\u66f4\u5e94\u8be5\u786e\u4fdd\u5b89\u5168\u6027\u3002"))}c.isMDXComponent=!0}}]);