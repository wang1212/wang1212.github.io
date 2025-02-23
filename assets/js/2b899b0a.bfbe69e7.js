"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8930],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},29972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>h});var n=r(66815),a=r(74848),s=r(28453);const i={title:"\u89e3\u6790 ECharts \u8bbe\u8ba1\uff1aUniversalTransition \u52a8\u753b",date:new Date("2023-11-10T19:23:00.000Z"),update:new Date("2023-11-11T21:56:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u52a8\u753b","\u5de5\u5177","ECharts","ZRender","\u6e90\u7801\u89e3\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u52a8\u753b","\u5de5\u5177","ECharts","ZRender","\u6e90\u7801\u89e3\u6790"],description:"ECharts \u7684 UniversalTransition \u52a8\u753b\u63d0\u4f9b\u4e86\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\u8fc7\u6e21\u52a8\u753b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u7c7b\u573a\u666f\u7684\u96be\u70b9\u5728\u4e8e\u8ba9\u4e0d\u89c4\u5219\u56fe\u5f62\u6216\u8005\u4e0d\u540c\u5f62\u72b6\u7684\u56fe\u5f62\u4e4b\u95f4\u5982\u4f55\u5b8c\u6210\u4e00\u4e2a\u6bd4\u8f83\u6d41\u7545\u7684\u8fc7\u6e21\u52a8\u753b\uff0c\u5728\u4e1a\u5185\u6bd4\u8f83\u719f\u77e5\u7684\u7c7b\u4f3c\u6280\u672f\u5219\u662f SVG Morph \u52a8\u753b\u3002"},o=void 0,l={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2023-11-11 21:56:00"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["ECharts \u7684 ",(0,a.jsx)(t.a,{href:"https://echarts.apache.org/zh/option.html#series-line.universalTransition",children:"UniversalTransition \u52a8\u753b"}),"\u63d0\u4f9b\u4e86\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\u8fc7\u6e21\u52a8\u753b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u7c7b\u573a\u666f\u7684\u96be\u70b9\u5728\u4e8e\u8ba9",(0,a.jsx)(t.strong,{children:"\u4e0d\u89c4\u5219\u56fe\u5f62"}),"\u6216\u8005",(0,a.jsx)(t.strong,{children:"\u4e0d\u540c\u5f62\u72b6\u7684\u56fe\u5f62"}),"\u4e4b\u95f4\u5982\u4f55\u5b8c\u6210\u4e00\u4e2a\u6bd4\u8f83\u6d41\u7545\u7684\u8fc7\u6e21\u52a8\u753b\uff0c\u5728\u4e1a\u5185\u6bd4\u8f83\u719f\u77e5\u7684\u7c7b\u4f3c\u6280\u672f\u5219\u662f SVG Morph \u52a8\u753b\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u67e5\u770b\u4ee5\u4e0b ECharts \u5b98\u65b9\u793a\u4f8b\uff1a"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://echarts.apache.org/examples/zh/editor.html?c=scatter-aggregate-bar",children:"https://echarts.apache.org/examples/zh/editor.html?c=scatter-aggregate-bar"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://echarts.apache.org/examples/zh/editor.html?c=scatter-symbol-morph",children:"https://echarts.apache.org/examples/zh/editor.html?c=scatter-symbol-morph"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://echarts.apache.org/examples/zh/editor.html?c=map-bar-morph",children:"https://echarts.apache.org/examples/zh/editor.html?c=map-bar-morph"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://echarts.apache.org/examples/zh/editor.html?c=treemap-sunburst-transition",children:"https://echarts.apache.org/examples/zh/editor.html?c=treemap-sunburst-transition"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},66815:e=>{e.exports=JSON.parse('{"permalink":"/2023/11/10/computer-technology/web-frontend/echarts-zrender/morph-animation","editUrl":"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/echarts-zrender/2023-11-10-morph-animation/index.md","source":"@site/blog/computer-technology/web-frontend/echarts-zrender/2023-11-10-morph-animation/index.md","title":"\u89e3\u6790 ECharts \u8bbe\u8ba1\uff1aUniversalTransition \u52a8\u753b","description":"ECharts \u7684 UniversalTransition \u52a8\u753b\u63d0\u4f9b\u4e86\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\u8fc7\u6e21\u52a8\u753b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u7c7b\u573a\u666f\u7684\u96be\u70b9\u5728\u4e8e\u8ba9\u4e0d\u89c4\u5219\u56fe\u5f62\u6216\u8005\u4e0d\u540c\u5f62\u72b6\u7684\u56fe\u5f62\u4e4b\u95f4\u5982\u4f55\u5b8c\u6210\u4e00\u4e2a\u6bd4\u8f83\u6d41\u7545\u7684\u8fc7\u6e21\u52a8\u753b\uff0c\u5728\u4e1a\u5185\u6bd4\u8f83\u719f\u77e5\u7684\u7c7b\u4f3c\u6280\u672f\u5219\u662f SVG Morph \u52a8\u753b\u3002","date":"2023-11-10T19:23:00.000Z","tags":[{"inline":true,"label":"\u8ba1\u7b97\u673a\u6280\u672f","permalink":"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{"inline":true,"label":"Web \u524d\u7aef","permalink":"/tags/web-\u524d\u7aef"},{"inline":true,"label":"\u6570\u636e\u53ef\u89c6\u5316","permalink":"/tags/\u6570\u636e\u53ef\u89c6\u5316"},{"inline":true,"label":"\u52a8\u753b","permalink":"/tags/\u52a8\u753b"},{"inline":true,"label":"\u5de5\u5177","permalink":"/tags/\u5de5\u5177"},{"inline":true,"label":"ECharts","permalink":"/tags/e-charts"},{"inline":true,"label":"ZRender","permalink":"/tags/z-render"},{"inline":true,"label":"\u6e90\u7801\u89e3\u6790","permalink":"/tags/\u6e90\u7801\u89e3\u6790"}],"readingTime":11.44,"hasTruncateMarker":true,"authors":[{"name":"\u4e0d\u5982\u6000\u5ff5","title":"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)","url":"https://github.com/wang1212","email":"mrwang1212@126.com","imageURL":"/img/authors/wang1212.png","key":"wang1212","page":null}],"frontMatter":{"title":"\u89e3\u6790 ECharts \u8bbe\u8ba1\uff1aUniversalTransition \u52a8\u753b","date":"2023-11-10T19:23:00.000Z","update":"2023-11-11T21:56:00.000Z","authors":"wang1212","tags":["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u52a8\u753b","\u5de5\u5177","ECharts","ZRender","\u6e90\u7801\u89e3\u6790"],"keywords":["\u8ba1\u7b97\u673a\u6280\u672f","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u52a8\u753b","\u5de5\u5177","ECharts","ZRender","\u6e90\u7801\u89e3\u6790"],"description":"ECharts \u7684 UniversalTransition \u52a8\u753b\u63d0\u4f9b\u4e86\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\u8fc7\u6e21\u52a8\u753b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u7c7b\u573a\u666f\u7684\u96be\u70b9\u5728\u4e8e\u8ba9\u4e0d\u89c4\u5219\u56fe\u5f62\u6216\u8005\u4e0d\u540c\u5f62\u72b6\u7684\u56fe\u5f62\u4e4b\u95f4\u5982\u4f55\u5b8c\u6210\u4e00\u4e2a\u6bd4\u8f83\u6d41\u7545\u7684\u8fc7\u6e21\u52a8\u753b\uff0c\u5728\u4e1a\u5185\u6bd4\u8f83\u719f\u77e5\u7684\u7c7b\u4f3c\u6280\u672f\u5219\u662f SVG Morph \u52a8\u753b\u3002"},"unlisted":false,"prevItem":{"title":"\u7ecd\u5174\u9c81\u8fc5\u6545\u5c45\u4e4b\u884c","permalink":"/2023/12/16/life/tourism/tourism-shaoxing"},"nextItem":{"title":"\u6b64\u884c\u5357\u4eac","permalink":"/2023/08/27/life/tourism/tourism-nanjing"}}')}}]);