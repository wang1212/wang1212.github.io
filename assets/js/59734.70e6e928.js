"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[59734],{59734:(e,t,n)=>{n.d(t,{ZP:()=>Q});var r=n(67294),o=n(61688);const i=new WeakMap,a={},s=()=>{},c=s(),u=Object,l=e=>e===c,d=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),g="undefined",h=typeof window!=g,w=typeof document!=g,p=(e,t)=>{const n=i.get(e);return[()=>e.get(t)||a,r=>{const o=e.get(t);n[5](t,f(o,r),o||a)},n[6]]},v=new WeakMap;let y=0;const m=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(u(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=v.get(e),o)return o;if(o=++y+"~",v.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=m(e[i])+",";v.set(e,o)}if(n==u){o="#";const t=u.keys(e).sort();for(;!l(i=t.pop());)l(e[i])||(o+=i+":"+m(e[i])+",");v.set(e,o)}}return o};let b=!0;const[_,E]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[s,s],O={isOnline:()=>b,isVisible:()=>{const e=w&&document.visibilityState;return l(e)||"hidden"!==e}},R={initFocus:e=>(w&&document.addEventListener("visibilitychange",e),_("focus",e),()=>{w&&document.removeEventListener("visibilitychange",e),E("focus",e)}),initReconnect:e=>{const t=()=>{b=!0,e()},n=()=>{b=!1};return _("online",t),_("offline",n),()=>{E("online",t),E("offline",n)}}},S=!r.useId,k=!h||"Deno"in window,L=e=>h&&typeof window.requestAnimationFrame!=g?window.requestAnimationFrame(e):setTimeout(e,1),T=k?r.useEffect:r.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,V=!k&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=e=>{if(d(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",t]};let I=0;const P=()=>++I;var x=0,M=1,W=2;async function F(...e){const[t,n,r,o]=e,a=f({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let s=a.populateCache;const u=a.rollbackOnError;let g=a.optimisticData;const h=!1!==a.revalidate,w=a.throwOnError;if(d(n)){const e=n,r=[],o=t.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!o.startsWith("$inf$")&&e(t.get(o)._k)&&r.push(o)}return Promise.all(r.map(v))}return v(n);async function v(n){const[o]=D(n);if(!o)return;const[a,f]=p(t,o),[v,y,m]=i.get(t),b=v[o],_=()=>h&&(delete m[o],b&&b[0])?b[0](2).then((()=>a().data)):a().data;if(e.length<3)return _();let E,O=r;const R=P();y[o]=[R,0];const S=!l(g),k=a(),L=k.data,T=k._c,C=l(T)?L:T;if(S&&(g=d(g)?g(C):g,f({data:g,_c:C})),d(O))try{O=O(C)}catch(I){E=I}if(O&&d(O.then)){if(O=await O.catch((e=>{E=e})),R!==y[o][0]){if(E)throw E;return O}E&&S&&(e=>"function"==typeof u?u(e):!1!==u)(E)&&(s=!0,O=C,f({data:O,_c:c}))}s&&(E||(d(s)&&(O=s(O,C)),f({data:O,_c:c}))),y[o][1]=P();const V=await _();if(f({_c:c}),!E)return s?V:O;if(w)throw E}}const A=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},q=(e,t)=>{if(!i.has(e)){const n=f(R,t),r={},o=F.bind(c,e);let a=s;const u={},l=(e,t)=>{const n=u[e]||[];return u[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);const o=u[t];if(o)for(let e=o.length;e--;)o[e](r,n)},g=()=>{if(!i.has(e)&&(i.set(e,[r,{},{},{},o,d,l]),!k)){const t=n.initFocus(setTimeout.bind(c,A.bind(c,r,0))),o=n.initReconnect(setTimeout.bind(c,A.bind(c,r,1)));a=()=>{t&&t(),o&&o(),i.delete(e)}}};return g(),[e,o,g,a]}return[e,i.get(e)[4]]},[J,N]=q(new Map),U=f({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!l(i)&&a>i||setTimeout(r,s,o)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:V?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:V?5e3:3e3,compare:(e,t)=>m(e)==m(t),isPaused:()=>!1,cache:J,mutate:N,fallback:{}},O),$=(e,t)=>{const n=f(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=f(o,a))}return n},j=(0,r.createContext)({}),H=h&&window.__SWR_DEVTOOLS_USE__,Z=H?window.__SWR_DEVTOOLS_USE__:[],z=e=>d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],B=Z.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const r=D(t)[0],[,,,o]=i.get(J),a=o[r];return a?(delete o[r],a):n(...e)}),r)));H&&(window.__SWR_DEVTOOLS_REACT__=r);const G={dedupe:!0};u.defineProperty((e=>{const{value:t}=e,n=(0,r.useContext)(j),o=d(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),a=(0,r.useMemo)((()=>o?i:$(n,i)),[o,n,i]),s=i&&i.provider,[u]=(0,r.useState)((()=>s?q(s(a.cache||J),i):c));return u&&(a.cache=u[0],a.mutate=u[1]),T((()=>{if(u)return u[2]&&u[2](),u[3]}),[]),(0,r.createElement)(j.Provider,f(e,{value:a}))}),"defaultValue",{value:U});var K,Q=(K=(e,t,n)=>{const{cache:a,compare:s,suspense:u,fallbackData:g,revalidateOnMount:h,refreshInterval:w,refreshWhenHidden:v,refreshWhenOffline:y,keepPreviousData:m}=n,[b,_,E]=i.get(a),[O,R]=D(e),C=(0,r.useRef)(!1),V=(0,r.useRef)(!1),I=(0,r.useRef)(O),A=(0,r.useRef)(t),q=(0,r.useRef)(n),J=()=>q.current,N=()=>J().isVisible()&&J().isOnline(),[U,$,j]=p(a,O),H=(0,r.useRef)({}).current,Z=l(g)?n.fallback[O]:g,z=(e,t)=>{let n=!0;for(const r in H){const o=r;s(t[o],e[o])||"data"===o&&l(e[o])&&s(t[o],ne)||(n=!1)}return n},B=(0,r.useMemo)((()=>{const e=!!O&&!!t&&(l(h)?!J().isPaused()&&!u:h),n=()=>{const t=U(),n=f(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n};let r=n();return()=>{const e=n();return z(e,r)?r:r=e}}),[a,O]),K=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>j(O,((t,n)=>{z(t,n)||e()}))),[a,O]),B,B),Q=!C.current,X=K.data,Y=l(X)?Z:X,ee=K.error,te=(0,r.useRef)(Y),ne=m?l(X)?te.current:X:Y,re=Q&&!l(h)?h:!J().isPaused()&&(u?!l(Y)&&n.revalidateIfStale:l(Y)||n.revalidateIfStale),oe=!!(O&&t&&Q&&re),ie=l(K.isValidating)?oe:K.isValidating,ae=l(K.isLoading)?oe:K.isLoading,se=(0,r.useCallback)((async e=>{const t=A.current;if(!O||!t||V.current||J().isPaused())return!1;let r,o,i=!0;const a=e||{},u=!E[O]||!a.dedupe,f=()=>S?!V.current&&O===I.current&&C.current:O===I.current,g={isValidating:!1,isLoading:!1},h=()=>{$(g)},w=()=>{const e=E[O];e&&e[1]===o&&delete E[O]},p={isValidating:!0};l(U().data)&&(p.isLoading=!0);try{if(u&&($(p),n.loadingTimeout&&l(U().data)&&setTimeout((()=>{i&&f()&&J().onLoadingSlow(O,n)}),n.loadingTimeout),E[O]=[t(R),P()]),[r,o]=E[O],r=await r,u&&setTimeout(w,n.dedupingInterval),!E[O]||E[O][1]!==o)return u&&f()&&J().onDiscarded(O),!1;g.error=c;const e=_[O];if(!l(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return h(),u&&f()&&J().onDiscarded(O),!1;const a=U().data;g.data=s(a,r)?a:r,u&&f()&&J().onSuccess(r,O,n)}catch(v){w();const e=J(),{shouldRetryOnError:t}=e;e.isPaused()||(g.error=v,u&&f()&&(e.onError(v,O,e),(!0===t||d(t)&&t(v))&&N()&&e.onErrorRetry(v,O,e,se,{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return i=!1,h(),!0}),[O,a]),ce=(0,r.useCallback)(((...e)=>F(a,I.current,...e)),[]);if(T((()=>{A.current=t,q.current=n,l(X)||(te.current=X)})),T((()=>{if(!O)return;const e=se.bind(c,G);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(O,b,(n=>{if(n==x){const n=Date.now();J().revalidateOnFocus&&n>t&&N()&&(t=n+J().focusThrottleInterval,e())}else if(n==M)J().revalidateOnReconnect&&N()&&e();else if(n==W)return se()}));return V.current=!1,I.current=O,C.current=!0,$({_k:R}),re&&(l(Y)||k?e():L(e)),()=>{V.current=!0,n()}}),[O]),T((()=>{let e;function t(){const t=d(w)?w(Y):w;t&&-1!==e&&(e=setTimeout(n,t))}function n(){U().error||!v&&!J().isVisible()||!y&&!J().isOnline()?t():se(G).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[w,v,y,O]),(0,r.useDebugValue)(ne),u&&l(Y)&&O){if(!S&&k)throw new Error("Fallback data is required when using suspense in SSR.");throw A.current=t,q.current=n,V.current=!1,l(ee)?se(G):ee}return{mutate:ce,get data(){return H.data=!0,ne},get error(){return H.error=!0,ee},get isValidating(){return H.isValidating=!0,ie},get isLoading(){return H.isLoading=!0,ae}}},function(...e){const t=f(U,(0,r.useContext)(j)),[n,o,i]=z(e),a=$(t,i);let s=K;const{use:c}=a,u=(c||[]).concat(B);for(let r=u.length;r--;)s=u[r](s);return s(n,o||a.fetcher||null,a)})}}]);