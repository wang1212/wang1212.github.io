"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["83157"],{14809(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(28506).K2)(i,"populateCommonDb")},55444(e,t,a){a.d(t,{diagram:()=>k});var i=a(14809),l=a(82120),r=a(34845),s=a(28506),n=a(78731),o=a(38414),c=s.UI.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,g=p.showData,u=structuredClone(c),m=(0,s.K2)(()=>structuredClone(u),"getConfig"),f=(0,s.K2)(()=>{d=new Map,g=p.showData,(0,s.IU)()},"clear"),h=(0,s.K2)(({label:e,value:t})=>{d.has(e)||(d.set(e,t),s.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),x=(0,s.K2)(()=>d,"getSections"),S=(0,s.K2)(e=>{g=e},"setShowData"),w=(0,s.K2)(()=>g,"getShowData"),y={getConfig:m,clear:f,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:h,getSections:x,setShowData:S,getShowData:w},D=(0,s.K2)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),T={parse:(0,s.K2)(async e=>{let t=await (0,n.qg)("pie",e);s.Rm.debug(t),D(t,y)},"parse")},$=(0,s.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=(0,s.K2)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,o.rLf)().value(e=>e.value)(t)},"createPieArcs"),k={parser:T,db:y,renderer:{draw:(0,s.K2)((e,t,a,i)=>{s.Rm.debug("rendering pie chart\n"+e);let n=i.db,c=(0,s.D7)(),p=(0,l.$t)(n.getConfig(),c.pie),d=(0,r.D)(t),g=d.append("g");g.attr("transform","translate(225,225)");let{themeVariables:u}=c,[m]=(0,l.I5)(u.pieOuterStrokeWidth);m??=2;let f=p.textPosition,h=(0,o.JLW)().innerRadius(0).outerRadius(185),x=(0,o.JLW)().innerRadius(185*f).outerRadius(185*f);g.append("circle").attr("cx",0).attr("cy",0).attr("r",185+m/2).attr("class","pieOuterCircle");let S=n.getSections(),w=C(S),y=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],D=(0,o.UMr)(y);g.selectAll("mySlices").data(w).enter().append("path").attr("d",h).attr("fill",e=>D(e.data.label)).attr("class","pieCircle");let T=0;S.forEach(e=>{T+=e}),g.selectAll("mySlices").data(w).enter().append("text").text(e=>(e.data.value/T*100).toFixed(0)+"%").attr("transform",e=>"translate("+x.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),g.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let $=g.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*D.domain().length/2)+")");$.append("rect").attr("width",18).attr("height",18).style("fill",D).style("stroke",D),$.data(w).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return n.getShowData()?`${t} [${a}]`:t});let k=512+Math.max(...$.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${k} 450`),(0,s.a$)(d,450,k,p.useMaxWidth)},"draw")},styles:$}}}]);