"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6497],{2948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(85893),a=n(11151);const s={title:"\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\uff1a\u63a2\u7d22 ECharts \u4e0e ZRender \u7684\u8bbe\u8ba1\u6a21\u5f0f",date:new Date("2023-01-09T23:37:00.000Z"),update:new Date("2023-01-09T23:37:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1","ZRender","ECharts","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u5b9e\u8df5\u6848\u4f8b","\u6e90\u7801\u5206\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1","ZRender","ECharts","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u5b9e\u8df5\u6848\u4f8b","\u6e90\u7801\u5206\u6790"],description:"\u901a\u5e38\uff0c\u5bf9\u4e8e Web \u9875\u9762\u7684\u4ea4\u4e92\u5904\u7406\u4e2d\uff0c\u5c24\u5176\u662f DOM \u5143\u7d20\u6837\u5f0f\u7684\u53d8\u5316\u7528 CSS \u5904\u7406\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u4f46\u5982\u679c\u662f\u666e\u901a\u5bf9\u8c61\u5462\uff1f\u95ee\u9898\u4f3c\u4e4e\u53d8\u5f97\u590d\u6742\u8d77\u6765\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u901a\u8fc7\u63a2\u7d22 ECharts \u4e0e ZRender \u5728\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\u76f8\u5173\u65b9\u9762\u7684\u6e90\u7801\u5b9e\u73b0\uff0c\u8ba8\u8bba\u4e00\u4e0b\u5728\u590d\u6742\u573a\u666f\u4e2d\u5904\u7406\u4ea4\u4e92\u72b6\u6001\u7684\u8bbe\u8ba1\u65b9\u6848\uff0c\u5982\u4f55\u5c06\u547d\u4ee4\u5f0f\u7f16\u7801\u7684\u590d\u6742\u6027\u901a\u8fc7\u58f0\u660e\u5f0f\u7f16\u7801\u6765\u964d\u4f4e\uff0c\u8be5\u600e\u6837\u5e94\u5bf9\u590d\u6742\u573a\u666f\u4e0b\u7684\u72b6\u6001\u53e0\u52a0\u95ee\u9898\u3002"},o=void 0,i={permalink:"/2023/01/09/computer-technology/web-frontend/zrender/interactive-state-design",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/web-frontend/zrender/2023-01-09-interactive-state-design/index.md",source:"@site/blog/computer-technology/web-frontend/zrender/2023-01-09-interactive-state-design/index.md",title:"\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\uff1a\u63a2\u7d22 ECharts \u4e0e ZRender \u7684\u8bbe\u8ba1\u6a21\u5f0f",description:"\u901a\u5e38\uff0c\u5bf9\u4e8e Web \u9875\u9762\u7684\u4ea4\u4e92\u5904\u7406\u4e2d\uff0c\u5c24\u5176\u662f DOM \u5143\u7d20\u6837\u5f0f\u7684\u53d8\u5316\u7528 CSS \u5904\u7406\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u4f46\u5982\u679c\u662f\u666e\u901a\u5bf9\u8c61\u5462\uff1f\u95ee\u9898\u4f3c\u4e4e\u53d8\u5f97\u590d\u6742\u8d77\u6765\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u901a\u8fc7\u63a2\u7d22 ECharts \u4e0e ZRender \u5728\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\u76f8\u5173\u65b9\u9762\u7684\u6e90\u7801\u5b9e\u73b0\uff0c\u8ba8\u8bba\u4e00\u4e0b\u5728\u590d\u6742\u573a\u666f\u4e2d\u5904\u7406\u4ea4\u4e92\u72b6\u6001\u7684\u8bbe\u8ba1\u65b9\u6848\uff0c\u5982\u4f55\u5c06\u547d\u4ee4\u5f0f\u7f16\u7801\u7684\u590d\u6742\u6027\u901a\u8fc7\u58f0\u660e\u5f0f\u7f16\u7801\u6765\u964d\u4f4e\uff0c\u8be5\u600e\u6837\u5e94\u5bf9\u590d\u6742\u573a\u666f\u4e0b\u7684\u72b6\u6001\u53e0\u52a0\u95ee\u9898\u3002",date:"2023-01-09T23:37:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1",permalink:"/tags/\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1"},{label:"ZRender",permalink:"/tags/z-render"},{label:"ECharts",permalink:"/tags/e-charts"},{label:"Web \u524d\u7aef",permalink:"/tags/web-\u524d\u7aef"},{label:"\u6570\u636e\u53ef\u89c6\u5316",permalink:"/tags/\u6570\u636e\u53ef\u89c6\u5316"},{label:"\u5b9e\u8df5\u6848\u4f8b",permalink:"/tags/\u5b9e\u8df5\u6848\u4f8b"},{label:"\u6e90\u7801\u5206\u6790",permalink:"/tags/\u6e90\u7801\u5206\u6790"}],readingTime:21.165,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\uff1a\u63a2\u7d22 ECharts \u4e0e ZRender \u7684\u8bbe\u8ba1\u6a21\u5f0f",date:"2023-01-09T23:37:00.000Z",update:"2023-01-09T23:37:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1","ZRender","ECharts","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u5b9e\u8df5\u6848\u4f8b","\u6e90\u7801\u5206\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","\u7a0b\u5e8f\u67b6\u6784\u8bbe\u8ba1","ZRender","ECharts","Web \u524d\u7aef","\u6570\u636e\u53ef\u89c6\u5316","\u5b9e\u8df5\u6848\u4f8b","\u6e90\u7801\u5206\u6790"],description:"\u901a\u5e38\uff0c\u5bf9\u4e8e Web \u9875\u9762\u7684\u4ea4\u4e92\u5904\u7406\u4e2d\uff0c\u5c24\u5176\u662f DOM \u5143\u7d20\u6837\u5f0f\u7684\u53d8\u5316\u7528 CSS \u5904\u7406\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u4f46\u5982\u679c\u662f\u666e\u901a\u5bf9\u8c61\u5462\uff1f\u95ee\u9898\u4f3c\u4e4e\u53d8\u5f97\u590d\u6742\u8d77\u6765\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u901a\u8fc7\u63a2\u7d22 ECharts \u4e0e ZRender \u5728\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\u76f8\u5173\u65b9\u9762\u7684\u6e90\u7801\u5b9e\u73b0\uff0c\u8ba8\u8bba\u4e00\u4e0b\u5728\u590d\u6742\u573a\u666f\u4e2d\u5904\u7406\u4ea4\u4e92\u72b6\u6001\u7684\u8bbe\u8ba1\u65b9\u6848\uff0c\u5982\u4f55\u5c06\u547d\u4ee4\u5f0f\u7f16\u7801\u7684\u590d\u6742\u6027\u901a\u8fc7\u58f0\u660e\u5f0f\u7f16\u7801\u6765\u964d\u4f4e\uff0c\u8be5\u600e\u6837\u5e94\u5bf9\u590d\u6742\u573a\u666f\u4e0b\u7684\u72b6\u6001\u53e0\u52a0\u95ee\u9898\u3002"},unlisted:!1,prevItem:{title:"\u75ab\u60c5\u7ed3\u675f\u540e\u7b2c\u4e00\u6b21\u51fa\u6e38",permalink:"/2023/01/25/life/tourism/tourism"},nextItem:{title:"Web 3D \u5f00\u53d1\u5b9e\u8df5\uff1a\u8ba1\u7b97\u7269\u4f53\u5728 2D \u5e73\u9762\u4e0a\u7684\u50cf\u7d20\u5c3a\u5bf8",permalink:"/computer-technology/3d/web-3d-practical-case-2"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const t={blockquote:"blockquote",em:"em",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2023-01-09 23:37:00"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u901a\u5e38\uff0c\u5bf9\u4e8e Web \u9875\u9762\u7684\u4ea4\u4e92\u5904\u7406\u4e2d\uff0c\u5c24\u5176\u662f DOM \u5143\u7d20\u6837\u5f0f\u7684\u53d8\u5316\u7528 CSS \u5904\u7406\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u4f46\u5982\u679c\u662f\u666e\u901a\u5bf9\u8c61\u5462\uff1f\u95ee\u9898\u4f3c\u4e4e\u53d8\u5f97\u590d\u6742\u8d77\u6765\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u901a\u8fc7\u63a2\u7d22 ECharts \u4e0e ZRender \u5728\u4ea4\u4e92\u72b6\u6001\u8bbe\u8ba1\u76f8\u5173\u65b9\u9762\u7684\u6e90\u7801\u5b9e\u73b0\uff0c\u8ba8\u8bba\u4e00\u4e0b\u5728\u590d\u6742\u573a\u666f\u4e2d\u5904\u7406\u4ea4\u4e92\u72b6\u6001\u7684\u8bbe\u8ba1\u65b9\u6848\uff0c\u5982\u4f55\u5c06\u547d\u4ee4\u5f0f\u7f16\u7801\u7684\u590d\u6742\u6027\u901a\u8fc7\u58f0\u660e\u5f0f\u7f16\u7801\u6765\u964d\u4f4e\uff0c\u8be5\u600e\u6837\u5e94\u5bf9\u590d\u6742\u573a\u666f\u4e0b\u7684\u72b6\u6001\u53e0\u52a0\u95ee\u9898\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);