/*! For license information please see 9e4087bc.4815fa54.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3608],{6573:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var r=a(87462);const n="word_y5Tp",o="tag-list_xLZ0";var i=a(67294),l=a(39960),s=a(1944),c=a(96274);const u=["\u4eba\u4e0d\u5e94\u8be5\u662f\u63d2\u5728\u82b1\u74f6\u91cc\u4f9b\u4eba\u89c2\u8d4f\u7684\u9759\u7269\uff0c\u800c\u662f\u8513\u5ef6\u5728\u8349\u539f\u4e0a\u968f\u98ce\u8d77\u821e\u7684\u97f5\u5f8b\u3002\u751f\u547d\u4e0d\u662f\u5b89\u6392\uff0c\u800c\u662f\u8ffd\u6c42\uff0c\u4eba\u751f\u7684\u610f\u4e49\u4e5f\u8bb8\u6c38\u8fdc\u6ca1\u6709\u7b54\u6848\uff0c\u4f46\u4e5f\u8981\u5c3d\u60c5\u611f\u53d7\u8fd9\u79cd\u6ca1\u6709\u7b54\u6848\u7684\u4eba\u751f\u3002","\u5176\u5b9e\u6211\u4eec\u6bcf\u4e2a\u4eba\u7684\u751f\u6d3b\u90fd\u662f\u4e00\u4e2a\u4e16\u754c\uff0c\u5373\u4f7f\u6700\u5e73\u51e1\u7684\u4eba\u4e5f\u8981\u4e3a\u4ed6\u751f\u6d3b\u7684\u90a3\u4e2a\u4e16\u754c\u800c\u594b\u6597\u3002","\u4eba\u4e00\u8f88\u5b50\u6700\u73cd\u8d35\u7684\u54c1\u8d28\u5176\u5b9e\u5c31\u4e24\u6837\uff1a\u4e00\u4e2a\u662f\u70ed\u8840\uff0c\u4e00\u4e2a\u662f\u5929\u771f\u3002","\u4f60\u4e0d\u80fd\u56e0\u4e3a\u81ea\u5df1\u53d8\u6210\u4e86\u4e0d\u75db\u4e0d\u75d2\u7684\u4eba\uff0c\u5c31\u53bb\u5632\u7b11\u90a3\u4e9b\u7231\u6068\u5206\u660e\u7684\u4eba\u3002","\u5c0a\u91cd\u90a3\u4e9b\u4e0e\u4f60\u6297\u4e89\u7684\u4eba\uff0c\u56e0\u4e3a\u4f60\u4e89\u7684\u662f\u7406\uff0c\u4e0d\u662f\u53bb\u635f\u6bc1\u5bf9\u65b9\u7684\u4eba\u683c\u3002","\u68a6\u60f3\u8fd9\u4e1c\u897f\u4e0e\u7ecf\u5178\u4e00\u6837\uff0c\u6c38\u8fdc\u4e0d\u4f1a\u56e0\u65f6\u95f4\u800c\u892a\u8272\uff0c\u53cd\u800c\u66f4\u663e\u73cd\u8d35\u3002","\u6211\u4eec\u8d70\u8fc7\u7684\u6bcf\u4e00\u6b65\u4e0d\u4e00\u5b9a\u662f\u5b8c\u7f8e\u7684\uff0c\u4f46\u6bcf\u4e00\u6b65\u90fd\u6709\u503c\u5f97\u6df1\u601d\u7684\u610f\u4e49\u3002","\u505a\u751f\u6d3b\u7684\u5bfc\u6f14\uff0c\u4e0d\u6210\uff1b\u6b21\u4e4b\uff0c\u505a\u6f14\u5458\uff1b\u518d\u6b21\u4e4b\uff0c\u505a\u89c2\u4f17\u3002"],d={title:"\u5386\u53f2\u6587\u7ae0",description:()=>u[Math.floor(Math.random()*u.length)]};function m(t){let{year:e,month:a,posts:r}=t;const n=t=>t.split(/[^\d]+/).slice(0,3).map((t=>t.padStart(2,"0"))).join("-");return i.createElement(i.Fragment,null,i.createElement("h4",null,i.createElement("small",{style:{color:"var(--ifm-color-secondary)"}},e)," ",a," \u6708"),i.createElement("ul",null,r.map((t=>i.createElement("li",{key:t.metadata.date},i.createElement(l.Z,{to:t.metadata.permalink},i.createElement("div",null,t.metadata.title)),i.createElement("div",{style:{opacity:.5}},i.createElement("small",null,"\u53d1\u5e03\u4e8e ",n(t.metadata.frontMatter.date))," ",t.metadata.frontMatter.update!==t.metadata.frontMatter.date?i.createElement("small",null,"\u6700\u540e\u66f4\u65b0\u4e8e"," ",n(t.metadata.frontMatter.update)):""))))))}function f(t){let{year:e,posts:a}=t;const n=function(t){const e=t.reduceRight(((t,e)=>{const a=e.metadata.date.split("-")[1],r=t.get(a)??[];return t.set(a,[e,...r])}),new Map);return Array.from(e,(t=>{let[e,a]=t;return{month:e,posts:a}}))}(a);return i.createElement(i.Fragment,null,i.createElement("h3",null,e," \u5e74"),n.sort(((t,e)=>Number(e.month)-Number(t.month))).map(((t,a)=>i.createElement(m,(0,r.Z)({key:a,year:e},t)))))}function h(t){let{years:e}=t;return i.createElement("section",{className:"margin-vert--lg"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},e.sort(((t,e)=>Number(e.year)-Number(t.year))).map(((t,e)=>i.createElement("div",{key:e,className:"col col--4 margin-bottom--lg"},i.createElement(f,t)))))))}function g(t){const[e]=(0,i.useState)(d.description()),[r,l]=(0,i.useState)([]),[u,m]=(0,i.useState)(null),f=d.title,g=function(t){const e=new Map;return t.forEach((t=>{(t.metadata.tags||[]).forEach((t=>{let a=e.get(t.label);e.has(t.label)||(a={item:t,count:0}),a.count++,e.set(t.label,a)}))})),e}(t.archive.blogPosts),w=Array.from(g,(t=>{let[e,a]=t;return[e,a.count]}));return(0,i.useEffect)((()=>{const t=a(85083);return t(document.getElementById("wordcloud"),{list:w.filter((t=>t[1]>1)),classes:n,backgroundColor:"transparent",shape:"square",weightFactor:2,rotateRatio:.5,rotationSteps:2,fontFamily:"Impact",color:"random-light",gridSize:Math.round(24*document.getElementById("wordcloud").getBoundingClientRect().width/1024),shrinkToFit:!0,click(t){m(t[0])}}),()=>{t.stop()}}),[m]),(0,i.useEffect)((()=>{const e=u?t.archive.blogPosts.filter((t=>t.metadata.frontMatter.tags.includes(u))):t.archive.blogPosts;l(function(t){const e=t.reduceRight(((t,e)=>{const a=e.metadata.date.split("-")[0],r=t.get(a)??[];return t.set(a,[e,...r])}),new Map);return Array.from(e,(t=>{let[e,a]=t;return{year:e,posts:a}}))}(e))}),[u,l]),i.createElement(i.Fragment,null,i.createElement(s.d,{title:d.title,description:e}),i.createElement(c.Z,null,i.createElement("header",{className:"hero hero--primary"},i.createElement("div",{className:"container"},i.createElement("h1",{className:"hero__title"},f),i.createElement("p",{className:"hero__subtitle"},e))),i.createElement("main",null,t.archive.blogPosts.length>0?i.createElement(i.Fragment,null,i.createElement("section",{className:"margin-top--lg"},i.createElement("div",{id:"wordcloud",className:"container",style:{height:"300px"}})),i.createElement("section",{className:"margin-top--lg"},i.createElement("div",{className:"container"},i.createElement("hr",{className:"margin-vert--lg",style:{opacity:.25}}),i.createElement("ul",{className:o},w.slice().sort(((t,e)=>e[1]-t[1])).map((t=>i.createElement("li",{key:t[0],className:"button button--sm button--outline button--secondary "+(u===t[0]?"button--active":""),onClick:()=>m(u===t[0]?null:t[0])},t[0]," ",t[1])))))),r.length?i.createElement(h,{years:r}):""):"")))}},85083:function(t,e){var a,r,n,o,i,l,s;window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var r=parseInt(a.data.substr(e.length),36);t[r]&&(t[r](),t[r]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var r=t.length;return t.push(a),window.postMessage(e+r.toString(36),"*"),r}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),r=this,n=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e&&e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),o=function(){if(n){for(var t,e,a=document.createElement("canvas").getContext("2d"),r=20;r;){if(a.font=r.toString(10)+"px sans-serif",a.measureText("\uff37").width===t&&a.measureText("m").width===e)return r+1;t=a.measureText("\uff37").width,e=a.measureText("m").width,r--}return 0}}(),i=function(t){for(var e,a,r=t.length;r;)e=Math.floor(Math.random()*r),a=t[--r],t[r]=t[e],t[e]=a;return t},l={},(s=function(t,e){if(n){var a=Math.floor(Math.random()*Date.now());Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw new Error("The element id specified is not found.")}else if(!e.tagName&&!e.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var r={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationSteps:0,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var s in e)s in r&&(r[s]=e[s]);if("function"!=typeof r.weightFactor){var c=r.weightFactor;r.weightFactor=function(t){return t*c}}if("function"!=typeof r.shape)switch(r.shape){case"circle":default:r.shape="circle";break;case"cardioid":r.shape=function(t){return 1-Math.sin(t)};break;case"diamond":r.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":r.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":r.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":r.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":r.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":r.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}r.gridSize=Math.max(Math.floor(r.gridSize),4);var u,d,m,f,h,g,w,v,p=r.gridSize,M=p-r.maskGapWidth,b=Math.abs(r.maxRotation-r.minRotation),y=Math.abs(Math.floor(r.rotationSteps)),E=Math.min(r.maxRotation,r.minRotation);switch(r.color){case"random-dark":w=function(){return L(10,50)};break;case"random-light":w=function(){return L(50,90)};break;default:"function"==typeof r.color&&(w=r.color)}"function"==typeof r.fontWeight&&(v=r.fontWeight);var x=null;"function"==typeof r.classes&&(x=r.classes);var k,T=!1,I=[],C=function(t){var e,a,r=t.currentTarget,n=r.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var o=e-n.left,i=a-n.top,l=Math.floor(o*(r.width/n.width||1)/p),s=Math.floor(i*(r.height/n.height||1)/p);return I[l][s]},S=function(t){var e=C(t);k!==e&&(k=e,e?r.hover(e.item,e.dimension,t):r.hover(void 0,void 0,t))},F=function(t){var e=C(t);e&&(r.click(e.item,e.dimension,t),t.preventDefault())},P=[],N=function(t){if(P[t])return P[t];var e=8*t,a=e,n=[];for(0===t&&n.push([f[0],f[1],0]);a--;){var o=1;"circle"!==r.shape&&(o=r.shape(a/e*2*Math.PI)),n.push([f[0]+t*o*Math.cos(-a/e*2*Math.PI),f[1]+t*o*Math.sin(-a/e*2*Math.PI)*r.ellipticity,a/e*2*Math.PI])}return P[t]=n,n},R=function(){return r.abortThreshold>0&&(new Date).getTime()-g>r.abortThreshold},A=function(e,a,r,n,o){e>=d||a>=m||e<0||a<0||(u[e][a]=!1,r&&t[0].getContext("2d").fillRect(e*p,a*p,M,M),T&&(I[e][a]={item:o,dimension:n}))},O=function e(a){var n,l,s;Array.isArray(a)?(n=a[0],l=a[1]):(n=a.word,l=a.weight,s=a.attributes);var c=0===r.rotateRatio||Math.random()>r.rotateRatio?0:0===b?E:y>0?E+Math.floor(Math.random()*y)*b/(y-1):E+Math.random()*b,f=function(t){if(Array.isArray(t)){var e=t.slice();return e.splice(0,2),e}return[]}(a),g=function(t,e,a,n){var i=r.weightFactor(e);if(i<=r.minSize)return!1;var l,s=1;i<o&&(s=function(){for(var t=2;t*i<o;)t+=2;return t}()),l=v?v(t,e,i,n):r.fontWeight;var c=document.createElement("canvas"),u=c.getContext("2d",{willReadFrequently:!0});u.font=l+" "+(i*s).toString(10)+"px "+r.fontFamily;var d=u.measureText(t).width/s,m=Math.max(i*s,u.measureText("m").width,u.measureText("\uff37").width)/s,f=d+2*m,h=3*m,g=Math.ceil(f/p),w=Math.ceil(h/p);f=g*p,h=w*p;var M=-d/2,b=.4*-m,y=Math.ceil((f*Math.abs(Math.sin(a))+h*Math.abs(Math.cos(a)))/p),E=Math.ceil((f*Math.abs(Math.cos(a))+h*Math.abs(Math.sin(a)))/p),x=E*p,k=y*p;c.setAttribute("width",x),c.setAttribute("height",k),u.scale(1/s,1/s),u.translate(x*s/2,k*s/2),u.rotate(-a),u.font=l+" "+(i*s).toString(10)+"px "+r.fontFamily,u.fillStyle="#000",u.textBaseline="middle",u.fillText(t,M*s,(b+.5*i)*s);var T=u.getImageData(0,0,x,k).data;if(R())return!1;for(var I,C,S,F=[],P=E,N=[y/2,E/2,y/2,E/2];P--;)for(I=y;I--;){S=p;t:for(;S--;)for(C=p;C--;)if(T[4*((I*p+S)*x+(P*p+C))+3]){F.push([P,I]),P<N[3]&&(N[3]=P),P>N[1]&&(N[1]=P),I<N[0]&&(N[0]=I),I>N[2]&&(N[2]=I);break t}}return{mu:s,occupied:F,bounds:N,gw:E,gh:y,fillTextOffsetX:M,fillTextOffsetY:b,fillTextWidth:d,fillTextHeight:m,fontSize:i}}(n,l,c,f);if(!g)return!1;if(R())return!1;if(!r.drawOutOfBound&&!r.shrinkToFit){var M=g.bounds;if(M[1]-M[3]+1>d||M[2]-M[0]+1>m)return!1}for(var k=h+1,I=function(e){var o=Math.floor(e[0]-g.gw/2),i=Math.floor(e[1]-g.gh/2);return g.gw,g.gh,!!function(t,e,a,n,o){for(var i=o.length;i--;){var l=t+o[i][0],s=e+o[i][1];if(l>=d||s>=m||l<0||s<0){if(!r.drawOutOfBound)return!1}else if(!u[l][s])return!1}return!0}(o,i,0,0,g.occupied)&&(function(e,a,n,o,i,l,s,c,u,d){var m,f,h,g=n.fontSize;m=w?w(o,i,g,l,s,d):r.color,f=v?v(o,i,g,d):r.fontWeight,h=x?x(o,i,g,d):r.classes,t.forEach((function(t){if(t.getContext){var i=t.getContext("2d"),l=n.mu;i.save(),i.scale(1/l,1/l),i.font=f+" "+(g*l).toString(10)+"px "+r.fontFamily,i.fillStyle=m,i.translate((e+n.gw/2)*p*l,(a+n.gh/2)*p*l),0!==c&&i.rotate(-c),i.textBaseline="middle",i.fillText(o,n.fillTextOffsetX*l,(n.fillTextOffsetY+.5*g)*l),i.restore()}else{var s=document.createElement("span"),d="";d="rotate("+-c/Math.PI*180+"deg) ",1!==n.mu&&(d+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var w={position:"absolute",display:"block",font:f+" "+g*n.mu+"px "+r.fontFamily,left:(e+n.gw/2)*p+n.fillTextOffsetX+"px",top:(a+n.gh/2)*p+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:g+"px",whiteSpace:"nowrap",transform:d,webkitTransform:d,msTransform:d,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var v in m&&(w.color=m),s.textContent=o,w)s.style[v]=w[v];if(u)for(var M in u)s.setAttribute(M,u[M]);h&&(s.className+=h),t.appendChild(s)}}))}(o,i,g,n,l,h-k,e[2],c,s,f),function(e,a,n,o,i,l){var s,c,u=i.occupied,f=r.drawMask;if(f&&((s=t[0].getContext("2d")).save(),s.fillStyle=r.maskColor),T){var h=i.bounds;c={x:(e+h[3])*p,y:(a+h[0])*p,w:(h[1]-h[3]+1)*p,h:(h[2]-h[0]+1)*p}}for(var g=u.length;g--;){var w=e+u[g][0],v=a+u[g][1];w>=d||v>=m||w<0||v<0||A(w,v,f,c,l)}f&&s.restore()}(o,i,0,0,g,a),!0)};k--;){var C=N(h-k);if(r.shuffle&&(C=[].concat(C),i(C)),C.some(I))return!0}return!!r.shrinkToFit&&(Array.isArray(a)?a[1]=3*a[1]/4:a.weight=3*a.weight/4,e(a))},z=function(e,a,r){if(a)return!t.some((function(t){var a=new CustomEvent(e,{detail:r||{}});return!t.dispatchEvent(a)}),this);t.forEach((function(t){var a=new CustomEvent(e,{detail:r||{}});t.dispatchEvent(a)}),this)};!function(){var e=t[0];if(e.getContext)d=Math.ceil(e.width/p),m=Math.ceil(e.height/p);else{var n=e.getBoundingClientRect();d=Math.ceil(n.width/p),m=Math.ceil(n.height/p)}if(z("wordcloudstart",!0)){var o,i,s,c,w;if(f=r.origin?[r.origin[0]/p,r.origin[1]/p]:[d/2,m/2],h=Math.floor(Math.sqrt(d*d+m*m)),u=[],!e.getContext||r.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=r.backgroundColor,e.clearRect(0,0,d*(p+1),m*(p+1)),e.fillRect(0,0,d*(p+1),m*(p+1))}else t.textContent="",t.style.backgroundColor=r.backgroundColor,t.style.position="relative"})),o=d;o--;)for(u[o]=[],i=m;i--;)u[o][i]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=r.backgroundColor,v.fillRect(0,0,1,1);var M,b,y=v.getImageData(0,0,1,1).data,E=e.getContext("2d").getImageData(0,0,d*p,m*p).data;for(o=d;o--;)for(u[o]=[],i=m;i--;){b=p;t:for(;b--;)for(M=p;M--;)for(s=4;s--;)if(E[4*((i*p+b)*d*p+(o*p+M))+s]!==y[s]){u[o][i]=!1;break t}!1!==u[o][i]&&(u[o][i]=!0)}E=v=y=void 0}if(r.hover||r.click){for(T=!0,o=d+1;o--;)I[o]=[];r.hover&&e.addEventListener("mousemove",S),r.click&&(e.addEventListener("click",F),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",S),e.removeEventListener("click",F),k=void 0}))}s=0,0!==r.wait?(c=window.setTimeout,w=window.clearTimeout):(c=window.setImmediate,w=window.clearImmediate);var x=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},C=function t(){x("wordcloudstart",t),w(l[a])};!function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)}("wordcloudstart",C),l[a]=c((function t(){if(s>=r.list.length)return w(l[a]),z("wordcloudstop",!1),x("wordcloudstart",C),void delete l[a];g=(new Date).getTime();var e=O(r.list[s]),n=!z("wordclouddrawn",!0,{item:r.list[s],drawn:e});if(R()||n)return w(l[a]),r.abort(),z("wordcloudabort",!1),z("wordcloudstop",!1),x("wordcloudstart",C),void delete l[a];s++,l[a]=c(t,r.wait)}),r.wait)}}()}function L(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=n,s.minFontSize=o,s.stop=function(){if(l)for(var t in l)window.clearImmediate(l[t])},r.WordCloud=s,void 0===(a=function(){return s}.apply(e,[]))||(t.exports=a)}}]);