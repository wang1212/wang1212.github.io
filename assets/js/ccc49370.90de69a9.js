"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6103],{77460:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var i=t(67294),a=t(90512),s=t(8264),r=t(35281),o=t(13548),l=t(41059),c=t(99415),d=t(95999),u=t(32244),m=t(85893);function f(e){const{nextItem:n,prevItem:t}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,m.jsx)(u.Z,{...t,subLabel:(0,m.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,m.jsx)(u.Z,{...n,subLabel:(0,m.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,o.nO)(),{title:t,description:i,date:a,tags:r,authors:l,frontMatter:c}=n,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.d,{title:t,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var g=t(35742);function x(){const e=(0,o.iZ)();return(0,m.jsx)(g.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=t(86668);function v(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function b(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=b({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function j(e){const n=e.getBoundingClientRect();return n.top===n.bottom?j(e.parentNode):n}function L(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>j(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(j(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function N(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,p.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function H(e){const n=(0,i.useRef)(void 0),t=N();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),l=L(o,{anchorTopOffset:t.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var y=t(33692);function C(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(y.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(C,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const k=i.memo(C);function _(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:o,...l}=e;const c=(0,p.L)(),d=r??c.tableOfContents.minHeadingLevel,u=o??c.tableOfContents.maxHeadingLevel,f=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>b({toc:v(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:d,maxHeadingLevel:u});return H((0,i.useMemo)((()=>{if(a&&s)return{linkClassName:a,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u}}),[a,s,d,u])),(0,m.jsx)(k,{toc:f,className:t,linkClassName:a,...l})}const Z={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},I="table-of-contents__link toc-highlight",O="table-of-contents__link--active";function T(e){let{className:n,...t}=e;return(0,m.jsx)("div",{className:(0,a.Z)(Z.tableOfContents,"thin-scrollbar",n),children:(0,m.jsx)(_,{...t,linkClassName:I,linkActiveClassName:O})})}var w=t(64061),A=t(59047);function B(e){let{className:n}=e;return(0,m.jsx)(A.Z,{type:"caution",title:(0,m.jsx)(w.ht,{}),className:(0,a.Z)(n,r.k.common.draftBanner),children:(0,m.jsx)(w.xo,{})})}var E=t(3230);function M(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,m.jsxs)(m.Fragment,{children:[(t||i.unlisted)&&(0,m.jsx)(E.Z,{}),i.draft&&(0,m.jsx)(B,{})]})}function P(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,o.nO)(),{nextItem:s,prevItem:r,frontMatter:d}=i,{hide_table_of_contents:u,toc_min_heading_level:h,toc_max_heading_level:g}=d;return(0,m.jsxs)(l.Z,{sidebar:n,toc:!u&&a.length>0?(0,m.jsx)(T,{toc:a,minHeadingLevel:h,maxHeadingLevel:g}):void 0,children:[(0,m.jsx)(M,{metadata:i}),(0,m.jsx)(c.Z,{children:t}),(s||r)&&(0,m.jsx)(f,{nextItem:s,prevItem:r})]})}function S(e){const n=e.content;return(0,m.jsx)(o.n4,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(x,{}),(0,m.jsx)(P,{sidebar:e.sidebar,children:(0,m.jsx)(n,{})})]})})}},3230:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var i=t(90512),a=t(64061),s=t(35281),r=t(59047),o=t(85893);function l(e){let{className:n}=e;return(0,o.jsx)(r.Z,{type:"caution",title:(0,o.jsx)(a.cI,{}),className:(0,i.Z)(n,s.k.common.unlistedBanner),children:(0,o.jsx)(a.eU,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.T$,{}),(0,o.jsx)(l,{...e})]})}},64061:(e,n,t)=>{t.d(n,{T$:()=>l,cI:()=>r,eU:()=>o,ht:()=>c,xo:()=>d});t(67294);var i=t(95999),a=t(35742),s=t(85893);function r(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(a.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);