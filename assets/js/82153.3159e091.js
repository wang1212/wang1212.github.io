(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[82153],{57277:function(e,t,n){e.exports=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?l(e):t}function f(e,t){return d(e)||h(e,t)||p()}function d(e){if(Array.isArray(e))return e}function h(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(e,t){return e(t={exports:{}},t.exports),t.exports}e=e&&e.hasOwnProperty("default")?e.default:e;var y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function m(){}function v(){}v.resetWarningCache=m;var b=function(){function e(e,t,n,r,a,o){if(o!==y){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:v,resetWarningCache:m};return n.PropTypes=n,n},k=g((function(e){e.exports=b()}));function w(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function S(e,t){var n;void 0===t&&(t=w);var r,a=[],o=!1;function i(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return o&&n===this&&t(i,a)||(r=e.apply(this,i),o=!0,n=this,a=i),r}return i}var D=864e5,O=7,E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=["","Mon","","Wed","","Fri",""];function L(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}function M(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function C(e){return e instanceof Date?e:new Date(e)}function T(e){return L(new Date,-e)}function _(e){for(var t=[],n=0;n<e;n+=1)t.push(n);return t}var x=10,z=4,F="react-calendar-heatmap-",A=function(n){function u(){var e,n;t(this,u);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return a(l(n=c(this,(e=s(u)).call.apply(e,[this].concat(o)))),"getValueCache",S((function(e){return e.values.reduce((function(e,t){var r=C(t.date);return e[Math.floor((r-n.getStartDateWithEmptyDays())/D)]={value:t,className:n.props.classForValue(t),title:n.props.titleForValue?n.props.titleForValue(t):null,tooltipDataAttrs:n.getTooltipDataAttrsForValue(t)},e}),{})}))),n}return i(u,n),r(u,[{key:"getDateDifferenceInDays",value:function(){var e=this.props,t=e.startDate,n=e.numDays;if(n)return console.warn("numDays is a deprecated prop. It will be removed in the next release. Consider using the startDate prop instead."),n;var r=this.getEndDate()-C(t);return Math.ceil(r/D)}},{key:"getSquareSizeWithGutter",value:function(){return x+this.props.gutterSize}},{key:"getMonthLabelSize",value:function(){return this.props.showMonthLabels?this.props.horizontal?x+z:2*(x+z):0}},{key:"getWeekdayLabelSize",value:function(){return this.props.showWeekdayLabels?this.props.horizontal?30:1.5*x:0}},{key:"getStartDate",value:function(){return L(this.getEndDate(),1-this.getDateDifferenceInDays())}},{key:"getEndDate",value:function(){return M(C(this.props.endDate))}},{key:"getStartDateWithEmptyDays",value:function(){return L(this.getStartDate(),-this.getNumEmptyDaysAtStart())}},{key:"getNumEmptyDaysAtStart",value:function(){return this.getStartDate().getDay()}},{key:"getNumEmptyDaysAtEnd",value:function(){return O-1-this.getEndDate().getDay()}},{key:"getWeekCount",value:function(){var e=this.getDateDifferenceInDays()+this.getNumEmptyDaysAtStart()+this.getNumEmptyDaysAtEnd();return Math.ceil(e/O)}},{key:"getWeekWidth",value:function(){return O*this.getSquareSizeWithGutter()}},{key:"getWidth",value:function(){return this.getWeekCount()*this.getSquareSizeWithGutter()-(this.props.gutterSize-this.getWeekdayLabelSize())}},{key:"getHeight",value:function(){return this.getWeekWidth()+(this.getMonthLabelSize()-this.props.gutterSize)+this.getWeekdayLabelSize()}},{key:"getValueForIndex",value:function(e){return this.valueCache[e]?this.valueCache[e].value:null}},{key:"getClassNameForIndex",value:function(e){return this.valueCache[e]?this.valueCache[e].className:this.props.classForValue(null)}},{key:"getTitleForIndex",value:function(e){return this.valueCache[e]?this.valueCache[e].title:this.props.titleForValue?this.props.titleForValue(null):null}},{key:"getTooltipDataAttrsForIndex",value:function(e){return this.valueCache[e]?this.valueCache[e].tooltipDataAttrs:this.getTooltipDataAttrsForValue({date:null,count:null})}},{key:"getTooltipDataAttrsForValue",value:function(e){var t=this.props.tooltipDataAttrs;return"function"==typeof t?t(e):t}},{key:"getTransformForWeek",value:function(e){return this.props.horizontal?"translate(".concat(e*this.getSquareSizeWithGutter(),", 0)"):"translate(0, ".concat(e*this.getSquareSizeWithGutter(),")")}},{key:"getTransformForWeekdayLabels",value:function(){return this.props.horizontal?"translate(".concat(x,", ").concat(this.getMonthLabelSize(),")"):null}},{key:"getTransformForMonthLabels",value:function(){return this.props.horizontal?"translate(".concat(this.getWeekdayLabelSize(),", 0)"):"translate(".concat(this.getWeekWidth()+z,", ").concat(this.getWeekdayLabelSize(),")")}},{key:"getTransformForAllWeeks",value:function(){return this.props.horizontal?"translate(".concat(this.getWeekdayLabelSize(),", ").concat(this.getMonthLabelSize(),")"):"translate(0, ".concat(this.getWeekdayLabelSize(),")")}},{key:"getViewBox",value:function(){return this.props.horizontal?"0 0 ".concat(this.getWidth()," ").concat(this.getHeight()):"0 0 ".concat(this.getHeight()," ").concat(this.getWidth())}},{key:"getSquareCoordinates",value:function(e){return this.props.horizontal?[0,e*this.getSquareSizeWithGutter()]:[e*this.getSquareSizeWithGutter(),0]}},{key:"getWeekdayLabelCoordinates",value:function(e){return this.props.horizontal?[0,(e+1)*x+e*this.props.gutterSize]:[e*x+e*this.props.gutterSize,x]}},{key:"getMonthLabelCoordinates",value:function(e){if(this.props.horizontal)return[e*this.getSquareSizeWithGutter(),this.getMonthLabelSize()-z];var t=-2;return[0,(e+1)*this.getSquareSizeWithGutter()+t]}},{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick(e)}},{key:"handleMouseOver",value:function(e,t){this.props.onMouseOver&&this.props.onMouseOver(e,t)}},{key:"handleMouseLeave",value:function(e,t){this.props.onMouseLeave&&this.props.onMouseLeave(e,t)}},{key:"renderSquare",value:function(t,n){var r=this;if((n<this.getNumEmptyDaysAtStart()||n>=this.getNumEmptyDaysAtStart()+this.getDateDifferenceInDays())&&!this.props.showOutOfRangeDays)return null;var a=f(this.getSquareCoordinates(t),2),i=a[0],s=a[1],u=this.getValueForIndex(n),l=e.createElement("rect",o({key:n,width:x,height:x,x:i,y:s,className:this.getClassNameForIndex(n),onClick:function(){return r.handleClick(u)},onMouseOver:function(e){return r.handleMouseOver(e,u)},onMouseLeave:function(e){return r.handleMouseLeave(e,u)}},this.getTooltipDataAttrsForIndex(n)),e.createElement("title",null,this.getTitleForIndex(n))),c=this.props.transformDayElement;return c?c(l,u,n):l}},{key:"renderWeek",value:function(t){var n=this;return e.createElement("g",{key:t,transform:this.getTransformForWeek(t),className:"".concat(F,"week")},_(O).map((function(e){return n.renderSquare(e,t*O+e)})))}},{key:"renderAllWeeks",value:function(){var e=this;return _(this.getWeekCount()).map((function(t){return e.renderWeek(t)}))}},{key:"renderMonthLabels",value:function(){var t=this;return this.props.showMonthLabels?_(this.getWeekCount()-1).map((function(n){var r=L(t.getStartDateWithEmptyDays(),(n+1)*O),a=f(t.getMonthLabelCoordinates(n),2),o=a[0],i=a[1];return r.getDate()>=1&&r.getDate()<=O?e.createElement("text",{key:n,x:o,y:i,className:"".concat(F,"month-label")},t.props.monthLabels[r.getMonth()]):null})):null}},{key:"renderWeekdayLabels",value:function(){var t=this;return this.props.showWeekdayLabels?this.props.weekdayLabels.map((function(n,r){var a=f(t.getWeekdayLabelCoordinates(r),2),o=a[0],i=a[1],s="".concat(t.props.horizontal?"":"".concat(F,"small-text")," ").concat(F,"weekday-label");return 1&r?e.createElement("text",{key:"".concat(o).concat(i),x:o,y:i,className:s},n):null})):null}},{key:"render",value:function(){return this.valueCache=this.getValueCache(this.props),e.createElement("svg",{className:"react-calendar-heatmap",viewBox:this.getViewBox()},e.createElement("g",{transform:this.getTransformForMonthLabels(),className:"".concat(F,"month-labels")},this.renderMonthLabels()),e.createElement("g",{transform:this.getTransformForAllWeeks(),className:"".concat(F,"all-weeks")},this.renderAllWeeks()),e.createElement("g",{transform:this.getTransformForWeekdayLabels(),className:"".concat(F,"weekday-labels")},this.renderWeekdayLabels()))}}]),u}(e.Component);return A.propTypes={values:k.arrayOf(k.shape({date:k.oneOfType([k.string,k.number,k.instanceOf(Date)]).isRequired}).isRequired).isRequired,numDays:k.number,startDate:k.oneOfType([k.string,k.number,k.instanceOf(Date)]),endDate:k.oneOfType([k.string,k.number,k.instanceOf(Date)]),gutterSize:k.number,horizontal:k.bool,showMonthLabels:k.bool,showWeekdayLabels:k.bool,showOutOfRangeDays:k.bool,tooltipDataAttrs:k.oneOfType([k.object,k.func]),titleForValue:k.func,classForValue:k.func,monthLabels:k.arrayOf(k.string),weekdayLabels:k.arrayOf(k.string),onClick:k.func,onMouseOver:k.func,onMouseLeave:k.func,transformDayElement:k.func},A.defaultProps={numDays:null,startDate:T(200),endDate:new Date,gutterSize:1,horizontal:!0,showMonthLabels:!0,showWeekdayLabels:!1,showOutOfRangeDays:!1,tooltipDataAttrs:null,titleForValue:null,classForValue:function(e){return e?"color-filled":"color-empty"},monthLabels:E,weekdayLabels:W,onClick:null,onMouseOver:null,onMouseLeave:null,transformDayElement:null},A}(n(67294))},79250:(e,t,n)=>{"use strict";n.d(t,{u:()=>x});var r=n(67294);const a=new Set,o=new WeakMap,i=new WeakMap,s=new WeakMap,u=new WeakMap,l=new WeakMap,c=new WeakMap,f=new WeakMap,d=new WeakSet;let h;const p="__aa_tgt",g="__aa_del",y=e=>{const t=function(e){const t=e.reduce(((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)]),[]);return!t.every((e=>"#comment"===e.nodeName))&&e.reduce(((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(D(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){const r=t.target.children.item(n);if(r){if(g in r)return!1;D(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){const r=t.removedNodes[n];if(g in r)return!1;r instanceof Element&&(e.add(r),D(t.target,r),i.set(r,[t.previousSibling,t.nextSibling]))}}return e}),new Set)}(e);t&&t.forEach((e=>function(e){var t;const n=e.isConnected,r=o.has(e);n&&i.has(e)&&i.delete(e);s.has(e)&&(null===(t=s.get(e))||void 0===t||t.cancel());r&&n?function(e){const t=o.get(e),n=E(e);if(!C(e))return o.set(e,n);let r;if(!t)return;const a=L(e);if("function"!=typeof a){const o=t.left-n.left,i=t.top-n.top,[s,u,l,c]=W(e,t,n),f={transform:`translate(${o}px, ${i}px)`},d={transform:"translate(0, 0)"};s!==u&&(f.width=`${s}px`,d.width=`${u}px`),l!==c&&(f.height=`${l}px`,d.height=`${c}px`),r=e.animate([f,d],{duration:a.duration,easing:a.easing})}else r=new Animation(a(e,"remain",t,n)),r.play();s.set(e,r),o.set(e,n),r.addEventListener("finish",v.bind(null,e))}(e):r&&!n?function(e){var t;if(!i.has(e)||!o.has(e))return;const[n,r]=i.get(e);Object.defineProperty(e,g,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):null===(t=M(e))||void 0===t||t.appendChild(e);function a(){var t;e.remove(),o.delete(e),i.delete(e),s.delete(e),null===(t=u.get(e))||void 0===t||t.disconnect()}if(!C(e))return a();const[l,c,f,d]=function(e){const t=o.get(e),[n,,r]=W(e,t,E(e));let a=e.parentElement;for(;a&&("static"===getComputedStyle(a).position||a instanceof HTMLBodyElement);)a=a.parentElement;a||(a=document.body);const i=getComputedStyle(a),s=o.get(a)||E(a),u=Math.round(t.top-s.top)-O(i.borderTopWidth),l=Math.round(t.left-s.left)-O(i.borderLeftWidth);return[u,l,n,r]}(e),h=L(e),p=o.get(e);let y;Object.assign(e.style,{position:"absolute",top:`${l}px`,left:`${c}px`,width:`${f}px`,height:`${d}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!=typeof h?y=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:h.duration,easing:"ease-out"}):(y=new Animation(h(e,"remove",p)),y.play());s.set(e,y),y.addEventListener("finish",a)}(e):function(e){const t=E(e);o.set(e,t);const n=L(e);if(!C(e))return;let r;"function"!=typeof n?r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*n.duration,easing:"ease-in"}):(r=new Animation(n(e,"add",t)),r.play());s.set(e,r),r.addEventListener("finish",v.bind(null,e))}(e)}(e)))},m=e=>{e.forEach((e=>{e.target===h&&(clearTimeout(f.get(h)),f.set(h,setTimeout((()=>{a.forEach((e=>T(e,(e=>k((()=>v(e)))))))}),100))),o.has(e.target)&&v(e.target)}))};function v(e){clearTimeout(f.get(e));const t=L(e),n="function"==typeof t?500:t.duration;f.set(e,setTimeout((async()=>{const t=s.get(e);try{await(null==t?void 0:t.finished),o.set(e,E(e)),function(e){const t=u.get(e);null==t||t.disconnect();let n=o.get(e),r=0;n||(n=E(e),o.set(e,n));const{offsetWidth:a,offsetHeight:i}=h,s=[n.top-5,a-(n.left+5+n.width),i-(n.top+5+n.height),n.left-5].map((e=>-1*Math.floor(e)+"px")).join(" "),l=new IntersectionObserver((()=>{++r>1&&v(e)}),{root:h,threshold:1,rootMargin:s});l.observe(e),u.set(e,l)}(e)}catch{}}),n))}function b(e){setTimeout((()=>{l.set(e,setInterval((()=>k(v.bind(null,e))),2e3))}),Math.round(2e3*Math.random()))}function k(e){"function"==typeof requestIdleCallback?requestIdleCallback((()=>e())):requestAnimationFrame((()=>e()))}let w,S;function D(e,t){t||p in e?t&&!(p in t)&&Object.defineProperty(t,p,{value:e}):Object.defineProperty(e,p,{value:e})}function O(e){return Number(e.replace(/[^0-9.\-]/g,""))}function E(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function W(e,t,n){let r=t.width,a=t.height,o=n.width,i=n.height;const s=getComputedStyle(e);if("content-box"===s.getPropertyValue("box-sizing")){const e=O(s.paddingTop)+O(s.paddingBottom)+O(s.borderTopWidth)+O(s.borderBottomWidth),t=O(s.paddingLeft)+O(s.paddingRight)+O(s.borderRightWidth)+O(s.borderLeftWidth);r-=t,o-=t,a-=e,i-=e}return[r,o,a,i].map(Math.round)}function L(e){return p in e&&c.has(e[p])?c.get(e[p]):{duration:250,easing:"ease-in-out"}}function M(e){if(p in e)return e[p]}function C(e){const t=M(e);return!!t&&d.has(t)}function T(e,...t){t.forEach((t=>t(e,c.has(e))));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach((e=>e(r,c.has(r))))}}function _(e,t={}){if(w&&S){window.matchMedia("(prefers-reduced-motion: reduce)").matches&&"function"!=typeof t&&!t.disrespectUserMotionPreference||(d.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),T(e,v,b,(e=>null==S?void 0:S.observe(e))),"function"==typeof t?c.set(e,t):c.set(e,{duration:250,easing:"ease-in-out",...t}),w.observe(e,{childList:!0}),a.add(e))}return Object.freeze({parent:e,enable:()=>{d.add(e)},disable:()=>{d.delete(e)},isEnabled:()=>d.has(e)})}"undefined"!=typeof window&&(h=document.documentElement,w=new MutationObserver(y),S=new ResizeObserver(m),S.observe(h));function x(e){const[t,n]=(0,r.useState)();return[(0,r.useCallback)((t=>{t instanceof HTMLElement?n(_(t,e)):n(void 0)}),[]),e=>{t&&(e?t.enable():t.disable())}]}},59734:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>Z});var r=n(67294),a=n(61688);const o=new WeakMap,i={},s=()=>{},u=s(),l=Object,c=e=>e===u,f=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),h="undefined",p=typeof window!=h,g=typeof document!=h,y=(e,t)=>{const n=o.get(e);return[()=>e.get(t)||i,r=>{const a=e.get(t);n[5](t,d(a,r),a||i)},n[6]]},m=new WeakMap;let v=0;const b=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let a,o;if(l(e)!==e||r||n==RegExp)a=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(a=m.get(e),a)return a;if(a=++v+"~",m.set(e,a),n==Array){for(a="@",o=0;o<e.length;o++)a+=b(e[o])+",";m.set(e,a)}if(n==l){a="#";const t=l.keys(e).sort();for(;!c(o=t.pop());)c(e[o])||(a+=o+":"+b(e[o])+",");m.set(e,a)}}return a};let k=!0;const[w,S]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[s,s],D={isOnline:()=>k,isVisible:()=>{const e=g&&document.visibilityState;return c(e)||"hidden"!==e}},O={initFocus:e=>(g&&document.addEventListener("visibilitychange",e),w("focus",e),()=>{g&&document.removeEventListener("visibilitychange",e),S("focus",e)}),initReconnect:e=>{const t=()=>{k=!0,e()},n=()=>{k=!1};return w("online",t),w("offline",n),()=>{S("online",t),S("offline",n)}}},E=!r.useId,W=!p||"Deno"in window,L=e=>p&&typeof window.requestAnimationFrame!=h?window.requestAnimationFrame(e):setTimeout(e,1),M=W?r.useEffect:r.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,T=!W&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),_=e=>{if(f(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",t]};let x=0;const z=()=>++x;var F=0,A=1,R=2;async function V(...e){const[t,n,r,a]=e,i=d({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{});let s=i.populateCache;const l=i.rollbackOnError;let h=i.optimisticData;const p=!1!==i.revalidate,g=i.throwOnError;if(f(n)){const e=n,r=[],a=t.keys();for(let n=a.next();!n.done;n=a.next()){const a=n.value;!a.startsWith("$inf$")&&e(t.get(a)._k)&&r.push(a)}return Promise.all(r.map(m))}return m(n);async function m(n){const[a]=_(n);if(!a)return;const[i,d]=y(t,a),[m,v,b]=o.get(t),k=m[a],w=()=>p&&(delete b[a],k&&k[0])?k[0](2).then((()=>i().data)):i().data;if(e.length<3)return w();let S,D=r;const O=z();v[a]=[O,0];const E=!c(h),W=i(),L=W.data,M=W._c,C=c(M)?L:M;if(E&&(h=f(h)?h(C):h,d({data:h,_c:C})),f(D))try{D=D(C)}catch(x){S=x}if(D&&f(D.then)){if(D=await D.catch((e=>{S=e})),O!==v[a][0]){if(S)throw S;return D}S&&E&&(e=>"function"==typeof l?l(e):!1!==l)(S)&&(s=!0,D=C,d({data:D,_c:u}))}s&&(S||(f(s)&&(D=s(D,C)),d({data:D,_c:u}))),v[a][1]=z();const T=await w();if(d({_c:u}),!S)return s?T:D;if(g)throw S}}const N=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},I=(e,t)=>{if(!o.has(e)){const n=d(O,t),r={},a=V.bind(u,e);let i=s;const l={},c=(e,t)=>{const n=l[e]||[];return l[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);const a=l[t];if(a)for(let e=a.length;e--;)a[e](r,n)},h=()=>{if(!o.has(e)&&(o.set(e,[r,{},{},{},a,f,c]),!W)){const t=n.initFocus(setTimeout.bind(u,N.bind(u,r,0))),a=n.initReconnect(setTimeout.bind(u,N.bind(u,r,1)));i=()=>{t&&t(),a&&a(),o.delete(e)}}};return h(),[e,a,h,i]}return[e,o.get(e)[4]]},[P,j]=I(new Map),q=d({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:(e,t,n,r,a)=>{const o=n.errorRetryCount,i=a.retryCount,s=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!c(o)&&i>o||setTimeout(r,s,a)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:T?5e3:3e3,compare:(e,t)=>b(e)==b(t),isPaused:()=>!1,cache:P,mutate:j,fallback:{}},D),$=(e,t)=>{const n=d(e,t);if(t){const{use:r,fallback:a}=e,{use:o,fallback:i}=t;r&&o&&(n.use=r.concat(o)),a&&i&&(n.fallback=d(a,i))}return n},B=(0,r.createContext)({}),G=p&&window.__SWR_DEVTOOLS_USE__,H=G?window.__SWR_DEVTOOLS_USE__:[],J=e=>f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],U=H.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const r=_(t)[0],[,,,a]=o.get(P),i=a[r];return i?(delete a[r],i):n(...e)}),r)));G&&(window.__SWR_DEVTOOLS_REACT__=r);const Y={dedupe:!0};l.defineProperty((e=>{const{value:t}=e,n=(0,r.useContext)(B),a=f(t),o=(0,r.useMemo)((()=>a?t(n):t),[a,n,t]),i=(0,r.useMemo)((()=>a?o:$(n,o)),[a,n,o]),s=o&&o.provider,[l]=(0,r.useState)((()=>s?I(s(i.cache||P),o):u));return l&&(i.cache=l[0],i.mutate=l[1]),M((()=>{if(l)return l[2]&&l[2](),l[3]}),[]),(0,r.createElement)(B.Provider,d(e,{value:i}))}),"defaultValue",{value:q});var X,Z=(X=(e,t,n)=>{const{cache:i,compare:s,suspense:l,fallbackData:h,revalidateOnMount:p,refreshInterval:g,refreshWhenHidden:m,refreshWhenOffline:v,keepPreviousData:b}=n,[k,w,S]=o.get(i),[D,O]=_(e),C=(0,r.useRef)(!1),T=(0,r.useRef)(!1),x=(0,r.useRef)(D),N=(0,r.useRef)(t),I=(0,r.useRef)(n),P=()=>I.current,j=()=>P().isVisible()&&P().isOnline(),[q,$,B]=y(i,D),G=(0,r.useRef)({}).current,H=c(h)?n.fallback[D]:h,J=(e,t)=>{let n=!0;for(const r in G){const a=r;s(t[a],e[a])||"data"===a&&c(e[a])&&s(t[a],ne)||(n=!1)}return n},U=(0,r.useMemo)((()=>{const e=!!D&&!!t&&(c(p)?!P().isPaused()&&!l:p),n=()=>{const t=q(),n=d(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n};let r=n();return()=>{const e=n();return J(e,r)?r:r=e}}),[i,D]),X=(0,a.useSyncExternalStore)((0,r.useCallback)((e=>B(D,((t,n)=>{J(t,n)||e()}))),[i,D]),U,U),Z=!C.current,K=X.data,Q=c(K)?H:K,ee=X.error,te=(0,r.useRef)(Q),ne=b?c(K)?te.current:K:Q,re=Z&&!c(p)?p:!P().isPaused()&&(l?!c(Q)&&n.revalidateIfStale:c(Q)||n.revalidateIfStale),ae=!!(D&&t&&Z&&re),oe=c(X.isValidating)?ae:X.isValidating,ie=c(X.isLoading)?ae:X.isLoading,se=(0,r.useCallback)((async e=>{const t=N.current;if(!D||!t||T.current||P().isPaused())return!1;let r,a,o=!0;const i=e||{},l=!S[D]||!i.dedupe,d=()=>E?!T.current&&D===x.current&&C.current:D===x.current,h={isValidating:!1,isLoading:!1},p=()=>{$(h)},g=()=>{const e=S[D];e&&e[1]===a&&delete S[D]},y={isValidating:!0};c(q().data)&&(y.isLoading=!0);try{if(l&&($(y),n.loadingTimeout&&c(q().data)&&setTimeout((()=>{o&&d()&&P().onLoadingSlow(D,n)}),n.loadingTimeout),S[D]=[t(O),z()]),[r,a]=S[D],r=await r,l&&setTimeout(g,n.dedupingInterval),!S[D]||S[D][1]!==a)return l&&d()&&P().onDiscarded(D),!1;h.error=u;const e=w[D];if(!c(e)&&(a<=e[0]||a<=e[1]||0===e[1]))return p(),l&&d()&&P().onDiscarded(D),!1;const i=q().data;h.data=s(i,r)?i:r,l&&d()&&P().onSuccess(r,D,n)}catch(m){g();const e=P(),{shouldRetryOnError:t}=e;e.isPaused()||(h.error=m,l&&d()&&(e.onError(m,D,e),(!0===t||f(t)&&t(m))&&j()&&e.onErrorRetry(m,D,e,se,{retryCount:(i.retryCount||0)+1,dedupe:!0})))}return o=!1,p(),!0}),[D,i]),ue=(0,r.useCallback)(((...e)=>V(i,x.current,...e)),[]);if(M((()=>{N.current=t,I.current=n,c(K)||(te.current=K)})),M((()=>{if(!D)return;const e=se.bind(u,Y);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(D,k,(n=>{if(n==F){const n=Date.now();P().revalidateOnFocus&&n>t&&j()&&(t=n+P().focusThrottleInterval,e())}else if(n==A)P().revalidateOnReconnect&&j()&&e();else if(n==R)return se()}));return T.current=!1,x.current=D,C.current=!0,$({_k:O}),re&&(c(Q)||W?e():L(e)),()=>{T.current=!0,n()}}),[D]),M((()=>{let e;function t(){const t=f(g)?g(Q):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){q().error||!m&&!P().isVisible()||!v&&!P().isOnline()?t():se(Y).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,m,v,D]),(0,r.useDebugValue)(ne),l&&c(Q)&&D){if(!E&&W)throw new Error("Fallback data is required when using suspense in SSR.");throw N.current=t,I.current=n,T.current=!1,c(ee)?se(Y):ee}return{mutate:ue,get data(){return G.data=!0,ne},get error(){return G.error=!0,ee},get isValidating(){return G.isValidating=!0,oe},get isLoading(){return G.isLoading=!0,ie}}},function(...e){const t=d(q,(0,r.useContext)(B)),[n,a,o]=J(e),i=$(t,o);let s=X;const{use:u}=i,l=(u||[]).concat(U);for(let r=l.length;r--;)s=l[r](s);return s(n,a||i.fetcher||null,i)})}}]);