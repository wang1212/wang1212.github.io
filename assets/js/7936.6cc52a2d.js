"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7936],{39354:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(49360),i=n(48451);const a=function(e){return(0,i.Z)(e,4)};var d=n(43836);n(52544);function l(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:o(e),edges:s(e)};return r.Z(e.graph())||(t.value=a(e.graph())),t}function o(e){return d.Z(e.nodes(),(function(t){var n=e.node(t),i=e.parent(t),a={v:t};return r.Z(n)||(a.value=n),r.Z(i)||(a.parent=i),a}))}function s(e){return d.Z(e.edges(),(function(t){var n=e.edge(t),i={v:t.v,w:t.w};return r.Z(t.name)||(i.name=t.name),r.Z(n)||(i.value=n),i}))}},87936:(e,t,n)=>{n.d(t,{r:()=>X});var r=n(41644),i=n(39354),a=n(25269),d=n(85322),l=n(45625),o=n(29840),s=n(64218);let c={},h={},g={};const f=(e,t)=>(d.l.trace("In isDecendant",t," ",e," = ",h[t].includes(e)),!!h[t].includes(e)),u=(e,t,n,r)=>{d.l.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const i=t.children(e)||[];e!==r&&i.push(e),d.l.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(t.children(i).length>0)u(i,t,n,r);else{const a=t.node(i);d.l.info("cp ",i," to ",r," with parent ",e),n.setNode(i,a),r!==t.parent(i)&&(d.l.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(d.l.debug("Setting parent",i,e),n.setParent(i,e)):(d.l.info("In copy ",e,"root",r,"data",t.node(e),r),d.l.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const l=t.edges(i);d.l.debug("Copying Edges",l),l.forEach((i=>{d.l.info("Edge",i);const a=t.edge(i.v,i.w,i.name);d.l.info("Edge data",a,r);try{((e,t)=>(d.l.info("Decendants of ",t," is ",h[t]),d.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(h[t]?h[t].includes(e.v)||f(e.v,t)||f(e.w,t)||h[t].includes(e.w):(d.l.debug("Tilt, ",t,",not in decendants"),!1))))(i,r)?(d.l.info("Copying as ",i.v,i.w,a,i.name),n.setEdge(i.v,i.w,a,i.name),d.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):d.l.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(l){d.l.error(l)}}))}d.l.debug("Removing node",i),t.removeNode(i)}))},w=(e,t)=>{const n=t.children(e);let r=[...n];for(const i of n)g[i]=e,r=[...r,...w(i,t)];return r},p=(e,t)=>{d.l.trace("Searching",e);const n=t.children(e);if(d.l.trace("Searching children of id ",e,n),n.length<1)return d.l.trace("This is a valid node",e),e;for(const r of n){const n=p(r,t);if(n)return d.l.trace("Found replacement for",e," => ",n),n}},v=e=>c[e]&&c[e].externalConnections&&c[e]?c[e].id:e,y=(e,t)=>{if(d.l.warn("extractor - ",t,i.c(e),e.children("D")),t>10)return void d.l.error("Bailing out");let n=e.nodes(),r=!1;for(const i of n){const t=e.children(i);r=r||t.length>0}if(r){d.l.debug("Nodes = ",n,t);for(const r of n)if(d.l.debug("Extracting node",r,c,c[r]&&!c[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),c[r])if(!c[r].externalConnections&&e.children(r)&&e.children(r).length>0){d.l.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";c[r]&&c[r].clusterData&&c[r].clusterData.dir&&(n=c[r].clusterData.dir,d.l.warn("Fixing dir",c[r].clusterData.dir,n));const a=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));d.l.warn("Old graph before copy",i.c(e)),u(r,e,a,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:c[r].clusterData,labelText:c[r].labelText,graph:a}),d.l.warn("New graph after copy node: (",r,")",i.c(a)),d.l.debug("Old graph after copy",i.c(e))}else d.l.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!c[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),d.l.debug(c);else d.l.debug("Not a cluster",r,t);n=e.nodes(),d.l.warn("New list of nodes",n);for(const r of n){const n=e.node(r);d.l.warn(" Now next level",r,n),n.clusterNode&&y(n.graph,t+1)}}else d.l.debug("Done, no node has children",e.nodes())},m=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const r=e.children(t),i=m(e,r);n=[...n,...i]})),n},x={rect:(e,t)=>{d.l.info("Creating subgraph rect for ",t.id,t);const n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),i=(0,d.m)((0,d.c)().flowchart.htmlLabels),l=n.insert("g").attr("class","cluster-label"),c="markdown"===t.labelType?(0,o.a)(l,t.labelText,{style:t.labelStyle,useHtmlLabels:i}):l.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let h=c.getBBox();if((0,d.m)((0,d.c)().flowchart.htmlLabels)){const e=c.children[0],t=(0,s.Ys)(c);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}const g=0*t.padding,f=g/2,u=t.width<=h.width+g?h.width+g:t.width;t.width<=h.width+g?t.diff=(h.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,d.l.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-u/2).attr("y",t.y-t.height/2-f).attr("width",u).attr("height",t.height+g),i?l.attr("transform","translate("+(t.x-h.width/2)+", "+(t.y-t.height/2)+")"):l.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const w=r.node().getBBox();return t.width=w.width,t.height=w.height,t.intersect=function(e){return(0,a.i)(t,e)},n},roundedWithTitle:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=n.insert("g").attr("class","cluster-label"),l=n.append("rect"),o=i.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let c=o.getBBox();if((0,d.m)((0,d.c)().flowchart.htmlLabels)){const e=o.children[0],t=(0,s.Ys)(o);c=e.getBoundingClientRect(),t.attr("width",c.width),t.attr("height",c.height)}c=o.getBBox();const h=0*t.padding,g=h/2,f=t.width<=c.width+t.padding?c.width+t.padding:t.width;t.width<=c.width+t.padding?t.diff=(c.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g).attr("width",f+h).attr("height",t.height+h),l.attr("class","inner").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g+c.height-1).attr("width",f+h).attr("height",t.height+h-c.height-3),i.attr("transform","translate("+(t.x-c.width/2)+", "+(t.y-t.height/2-t.padding/3+((0,d.m)((0,d.c)().flowchart.htmlLabels)?5:3))+")");const u=r.node().getBBox();return t.height=u.height,t.intersect=function(e){return(0,a.i)(t,e)},n},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,d=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2-d).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");const l=r.node().getBBox();return t.width=l.width,t.height=l.height,t.intersect=function(e){return(0,a.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,d=i/2;r.attr("class","divider").attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);const l=r.node().getBBox();return t.width=l.width,t.height=l.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,a.i)(t,e)},n}};let b={};const N=async(e,t,n,l,o)=>{d.l.info("Graph in recursive render: XXX",i.c(t),o);const s=t.graph().rankdir;d.l.trace("Dir in recursive render - dir:",s);const h=e.insert("g").attr("class","root");t.nodes()?d.l.info("Recursive render XXX",t.nodes()):d.l.info("No nodes found for",t),t.edges().length>0&&d.l.trace("Recursive edges",t.edge(t.edges()[0]));const g=h.insert("g").attr("class","clusters"),f=h.insert("g").attr("class","edgePaths"),u=h.insert("g").attr("class","edgeLabels"),w=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const r=t.node(e);if(void 0!==o){const n=JSON.parse(JSON.stringify(o.clusterData));d.l.info("Setting data for cluster XXX (",e,") ",n,o),t.setNode(o.id,n),t.parent(e)||(d.l.trace("Setting parent",e,o.id),t.setParent(e,o.id,n))}if(d.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r&&r.clusterNode){d.l.info("Cluster identified",e,r.width,t.node(e));const i=await N(w,r.graph,n,l,t.node(e)),o=i.elem;(0,a.u)(r,o),r.diff=i.diff||0,d.l.info("Node bounds (abc123)",e,r,r.width,r.x,r.y),(0,a.s)(o,r),d.l.warn("Recursive render complete ",o,r)}else t.children(e).length>0?(d.l.info("Cluster - the non recursive path XXX",e,r.id,r,t),d.l.info(p(r.id,t)),c[r.id]={id:p(r.id,t),node:r}):(d.l.info("Node - the non recursive path",e,r.id,r),await(0,a.e)(w,t.node(e),s))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),d.l.info("Fix",c,"ids:",e.v,e.w,"Translateing: ",c[e.v],c[e.w]),(0,a.f)(u,n)})),t.edges().forEach((function(e){d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),d.l.info("#############################################"),d.l.info("###                Layout                 ###"),d.l.info("#############################################"),d.l.info(t),(0,r.bK)(t),d.l.info("Graph after layout:",i.c(t));let v=0;return(e=>m(e,e.children()))(t).forEach((function(e){const n=t.node(e);d.l.info("Position "+e+": "+JSON.stringify(t.node(e))),d.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(0,a.p)(n):t.children(e).length>0?(((e,t)=>{d.l.trace("Inserting cluster");const n=t.shape||"rect";b[t.id]=x[n](e,t)})(g,n),c[n.id].node=n):(0,a.p)(n)})),t.edges().forEach((function(e){const r=t.edge(e);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r);const i=(0,a.g)(f,e,r,c,n,t,l);(0,a.h)(r,i)})),t.nodes().forEach((function(e){const n=t.node(e);d.l.info(e,n.type,n.diff),"group"===n.type&&(v=n.diff)})),{elem:h,diff:v}},X=async(e,t,n,r,l)=>{(0,a.a)(e,n,r,l),(0,a.b)(),(0,a.d)(),b={},h={},g={},c={},d.l.warn("Graph at first:",JSON.stringify(i.c(t))),((e,t)=>{!e||t>10?d.l.debug("Opting out, no graph "):(d.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(d.l.warn("Cluster identified",t," Replacement id in edges: ",p(t,e)),h[t]=w(t,e),c[t]={id:p(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),r=e.edges();n.length>0?(d.l.debug("Cluster identified",t,h),r.forEach((e=>{e.v!==t&&e.w!==t&&f(e.v,t)^f(e.w,t)&&(d.l.warn("Edge: ",e," leaves cluster ",t),d.l.warn("Decendants of XXX ",t,": ",h[t]),c[t].externalConnections=!0)}))):d.l.debug("Not a cluster ",t,h)})),e.edges().forEach((function(t){const n=e.edge(t);d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(d.l.warn("Fix XXX",c,"ids:",t.v,t.w,"Translating: ",c[t.v]," --- ",c[t.w]),c[t.v]&&c[t.w]&&c[t.v]===c[t.w]){d.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=v(t.v),i=v(t.w),e.removeEdge(t.v,t.w,t.name);const a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const l=structuredClone(n),o=structuredClone(n);l.label="",l.arrowTypeEnd="none",o.label="",l.fromCluster=t.v,o.toCluster=t.v,e.setEdge(r,a,l,t.name+"-cyclic-special"),e.setEdge(a,i,o,t.name+"-cyclic-special")}else(c[t.v]||c[t.w])&&(d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=v(t.v),i=v(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v&&(n.fromCluster=t.v),i!==t.w&&(n.toCluster=t.w),d.l.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name))})),d.l.warn("Adjusted Graph",i.c(e)),y(e,0),d.l.trace(c))})(t),d.l.warn("Graph after:",JSON.stringify(i.c(t))),await N(e,t,r,l)}}}]);