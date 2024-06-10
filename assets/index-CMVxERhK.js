import{a as _t}from"./attach-properties-to-component-CxYBDbn1.js";import{r as C,R as A,f as zt}from"./index-B4UGxPOW.js";import{w as Tt,a as It,m as jt,c as st}from"./with-default-props-B7uQ1QtS.js";import{_ as Xt}from"./index-BvZ__38l.js";import{u as Yt}from"./use-props-value-CTciXfrJ.js";import{w as Ut}from"./with-stop-propagation-hPxRTu59.js";import{u as qt,r as Kt}from"./should-render-C9OUz-kT.js";import{g as pt,u as Zt,a as Gt}from"./index-kXkBLS8A.js";import{u as Jt}from"./index-n9e96kxF.js";var Qt=function(t){return t.every(function(e){var n=pt(e);return n?n.getRootNode()instanceof ShadowRoot:!1})},te=function(t){return t?t.getRootNode():document},ee=function(t){if(!t||!document.getRootNode)return document;var e=Array.isArray(t)?t:[t];return Qt(e)?te(pt(e[0])):document};function ne(t,e,n){n===void 0&&(n="click");var o=Zt(t);Gt(function(){var i=function(c){var a=Array.isArray(e)?e:[e];a.some(function(l){var f=pt(l);return!f||f.contains(c.target)})||o.current(c)},s=ee(e),r=Array.isArray(n)?n:[n];return r.forEach(function(c){return s.addEventListener(c,i)}),function(){r.forEach(function(c){return s.removeEventListener(c,i)})}},Array.isArray(n)?n:[n],e)}const oe=C.memo(t=>Tt(t,A.createElement("svg",{viewBox:"0 0 30 16"},A.createElement("g",{fill:"currentColor"},A.createElement("path",{d:"M0,0 L30,0 L18.07289,14.312538 C16.65863,16.009645 14.13637,16.238942 12.43926,14.824685 C12.25341,14.669808 12.08199,14.49839 11.92711,14.312538 L0,0 L0,0 Z"}))))),ie=["top","right","bottom","left"],G=Math.min,Y=Math.max,ct=Math.round,rt=Math.floor,W=t=>({x:t,y:t}),re={left:"right",right:"left",bottom:"top",top:"bottom"},se={start:"end",end:"start"};function gt(t,e,n){return Y(t,G(e,n))}function _(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function wt(t){return t==="x"?"y":"x"}function xt(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(z(t))?"y":"x"}function vt(t){return wt(ot(t))}function ce(t,e,n){n===void 0&&(n=!1);const o=nt(t),i=vt(t),s=xt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=lt(r)),[r,lt(r)]}function le(t){const e=lt(t);return[ht(t),e,ht(e)]}function ht(t){return t.replace(/start|end/g,e=>se[e])}function ae(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function fe(t,e,n,o){const i=nt(t);let s=ae(z(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ht)))),s}function lt(t){return t.replace(/left|right|bottom|top/g,e=>re[e])}function ue(t){return{top:0,right:0,bottom:0,left:0,...t}}function kt(t){return typeof t!="number"?ue(t):{top:t,right:t,bottom:t,left:t}}function at(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Rt(t,e,n){let{reference:o,floating:i}=t;const s=ot(e),r=vt(e),c=xt(r),a=z(e),l=s==="y",f=o.x+o.width/2-i.width/2,m=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let u;switch(a){case"top":u={x:f,y:o.y-i.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:m};break;case"left":u={x:o.x-i.width,y:m};break;default:u={x:o.x,y:o.y}}switch(nt(e)){case"start":u[r]-=g*(n&&l?-1:1);break;case"end":u[r]+=g*(n&&l?-1:1);break}return u}const de=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:m}=Rt(l,o,a),g=o,u={},d=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x:v,y:x,data:b,reset:y}=await p({x:f,y:m,initialPlacement:o,placement:g,strategy:i,middlewareData:u,rects:l,platform:r,elements:{reference:t,floating:e}});f=v??f,m=x??m,u={...u,[w]:{...u[w],...b}},y&&d<=50&&(d++,typeof y=="object"&&(y.placement&&(g=y.placement),y.rects&&(l=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:f,y:m}=Rt(l,g,a)),h=-1)}return{x:f,y:m,placement:g,strategy:i,middlewareData:u}};async function ft(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:g=!1,padding:u=0}=_(e,t),d=kt(u),w=c[g?m==="floating"?"reference":"floating":m],p=at(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),v=m==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},y=at(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:x,strategy:a}):v);return{top:(p.top-y.top+d.top)/b.y,bottom:(y.bottom-p.bottom+d.bottom)/b.y,left:(p.left-y.left+d.left)/b.x,right:(y.right-p.right+d.right)/b.x}}const me=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:a}=e,{element:l,padding:f=0}=_(t,e)||{};if(l==null)return{};const m=kt(f),g={x:n,y:o},u=vt(i),d=xt(u),h=await r.getDimensions(l),w=u==="y",p=w?"top":"left",v=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[d]+s.reference[u]-g[u]-s.floating[d],y=g[u]-s.reference[u],E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let L=E?E[x]:0;(!L||!await(r.isElement==null?void 0:r.isElement(E)))&&(L=c.floating[x]||s.floating[d]);const T=b/2-y/2,j=L/2-h[d]/2-1,B=G(m[p],j),V=G(m[v],j),R=B,tt=L-h[d]-V,O=L/2-h[d]/2+T,k=gt(R,O,tt),D=!a.arrow&&nt(i)!=null&&O!==k&&s.reference[d]/2-(O<R?B:V)-h[d]/2<0,M=D?O<R?O-R:O-tt:0;return{[u]:g[u]+M,data:{[u]:k,centerOffset:O-k-M,...D&&{alignmentOffset:M}},reset:D}}}),ge=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:h=!0,...w}=_(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=z(i),v=z(c)===c,x=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=g||(v||!h?[lt(c)]:le(c));!g&&d!=="none"&&b.push(...fe(c,h,d,x));const y=[c,...b],E=await ft(e,w),L=[];let T=((o=s.flip)==null?void 0:o.overflows)||[];if(f&&L.push(E[p]),m){const R=ce(i,r,x);L.push(E[R[0]],E[R[1]])}if(T=[...T,{placement:i,overflows:L}],!L.every(R=>R<=0)){var j,B;const R=(((j=s.flip)==null?void 0:j.index)||0)+1,tt=y[R];if(tt)return{data:{index:R,overflows:T},reset:{placement:tt}};let O=(B=T.filter(k=>k.overflows[0]<=0).sort((k,D)=>k.overflows[1]-D.overflows[1])[0])==null?void 0:B.placement;if(!O)switch(u){case"bestFit":{var V;const k=(V=T.map(D=>[D.placement,D.overflows.filter(M=>M>0).reduce((M,Wt)=>M+Wt,0)]).sort((D,M)=>D[1]-M[1])[0])==null?void 0:V[0];k&&(O=k);break}case"initialPlacement":O=c;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Ct(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Ot(t){return ie.some(e=>t[e]>=0)}const he=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=_(t,e);switch(o){case"referenceHidden":{const s=await ft(e,{...i,elementContext:"reference"}),r=Ct(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Ot(r)}}}case"escaped":{const s=await ft(e,{...i,altBoundary:!0}),r=Ct(s,n.floating);return{data:{escapedOffsets:r,escaped:Ot(r)}}}default:return{}}}}};async function pe(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=z(n),c=nt(n),a=ot(n)==="y",l=["left","top"].includes(r)?-1:1,f=s&&a?-1:1,m=_(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:d}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return c&&typeof d=="number"&&(u=c==="end"?d*-1:d),a?{x:u*f,y:g*l}:{x:g*l,y:u*f}}const we=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,a=await pe(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:r}}}}},xe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:v}=w;return{x:p,y:v}}},...a}=_(t,e),l={x:n,y:o},f=await ft(e,a),m=ot(z(i)),g=wt(m);let u=l[g],d=l[m];if(s){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",v=u+f[w],x=u-f[p];u=gt(v,u,x)}if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",v=d+f[w],x=d-f[p];d=gt(v,d,x)}const h=c.fn({...e,[g]:u,[m]:d});return{...h,data:{x:h.x-n,y:h.y-o}}}}},ve=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:s,middlewareData:r}=e,{offset:c=0,mainAxis:a=!0,crossAxis:l=!0}=_(t,e),f={x:n,y:o},m=ot(i),g=wt(m);let u=f[g],d=f[m];const h=_(c,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(a){const x=g==="y"?"height":"width",b=s.reference[g]-s.floating[x]+w.mainAxis,y=s.reference[g]+s.reference[x]-w.mainAxis;u<b?u=b:u>y&&(u=y)}if(l){var p,v;const x=g==="y"?"width":"height",b=["top","left"].includes(z(i)),y=s.reference[m]-s.floating[x]+(b&&((p=r.offset)==null?void 0:p[m])||0)+(b?0:w.crossAxis),E=s.reference[m]+s.reference[x]+(b?0:((v=r.offset)==null?void 0:v[m])||0)-(b?w.crossAxis:0);d<y?d=y:d>E&&(d=E)}return{[g]:u,[m]:d}}}};function Q(t){return Dt(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(Dt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Dt(t){return t instanceof Node||t instanceof P(t).Node}function N(t){return t instanceof Element||t instanceof P(t).Element}function $(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function Pt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ye(t){return["table","td","th"].includes(Q(t))}function yt(t){const e=bt(),n=S(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function be(t){let e=I(t);for(;$(e)&&!J(e);){if(yt(e))return e;e=I(e)}return null}function bt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(Q(t))}function S(t){return P(t).getComputedStyle(t)}function ut(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Pt(t)&&t.host||F(t);return Pt(e)?e.host:e}function Nt(t){const e=I(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:$(e)&&it(e)?e:Nt(e)}function et(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Nt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=P(i);return s?e.concat(r,r.visualViewport||[],it(i)?i:[],r.frameElement&&n?et(r.frameElement):[]):e.concat(i,et(i,[],n))}function $t(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=$(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=ct(n)!==s||ct(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function At(t){return N(t)?t:t.contextElement}function K(t){const e=At(t);if(!$(e))return W(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=$t(e);let r=(s?ct(n.width):n.width)/o,c=(s?ct(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Ae=W(0);function Mt(t){const e=P(t);return!bt()||!e.visualViewport?Ae:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ee(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==P(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=At(t);let r=W(1);e&&(o?N(o)&&(r=K(o)):r=K(t));const c=Ee(s,n,o)?Mt(s):W(0);let a=(i.left+c.x)/r.x,l=(i.top+c.y)/r.y,f=i.width/r.x,m=i.height/r.y;if(s){const g=P(s),u=o&&N(o)?P(o):o;let d=g,h=d.frameElement;for(;h&&o&&u!==d;){const w=K(h),p=h.getBoundingClientRect(),v=S(h),x=p.left+(h.clientLeft+parseFloat(v.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(v.paddingTop))*w.y;a*=w.x,l*=w.y,f*=w.x,m*=w.y,a+=x,l+=b,d=P(h),h=d.frameElement}}return at({width:f,height:m,x:a,y:l})}const Re=[":popover-open",":modal"];function Et(t){return Re.some(e=>{try{return t.matches(e)}catch{return!1}})}function Ce(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=F(o),c=e?Et(e.floating):!1;if(o===r||c&&s)return n;let a={scrollLeft:0,scrollTop:0},l=W(1);const f=W(0),m=$(o);if((m||!m&&!s)&&((Q(o)!=="body"||it(r))&&(a=ut(o)),$(o))){const g=U(o);l=K(o),f.x=g.x+o.clientLeft,f.y=g.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+f.x,y:n.y*l.y-a.scrollTop*l.y+f.y}}function Oe(t){return Array.from(t.getClientRects())}function Ft(t){return U(F(t)).left+ut(t).scrollLeft}function Pe(t){const e=F(t),n=ut(t),o=t.ownerDocument.body,i=Y(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=Y(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Ft(t);const c=-n.scrollTop;return S(o).direction==="rtl"&&(r+=Y(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function Le(t,e){const n=P(t),o=F(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,a=0;if(i){s=i.width,r=i.height;const l=bt();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:c,y:a}}function Se(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=$(t)?K(t):W(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,a=i*s.x,l=o*s.y;return{width:r,height:c,x:a,y:l}}function Lt(t,e,n){let o;if(e==="viewport")o=Le(t,n);else if(e==="document")o=Pe(F(t));else if(N(e))o=Se(e,n);else{const i=Mt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return at(o)}function Bt(t,e){const n=I(t);return n===e||!N(n)||J(n)?!1:S(n).position==="fixed"||Bt(n,e)}function Te(t,e){const n=e.get(t);if(n)return n;let o=et(t,[],!1).filter(c=>N(c)&&Q(c)!=="body"),i=null;const s=S(t).position==="fixed";let r=s?I(t):t;for(;N(r)&&!J(r);){const c=S(r),a=yt(r);!a&&c.position==="fixed"&&(i=null),(s?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||it(r)&&!a&&Bt(t,r))?o=o.filter(f=>f!==r):i=c,r=I(r)}return e.set(t,o),o}function ke(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?Et(e)?[]:Te(e,this._c):[].concat(n),o],c=r[0],a=r.reduce((l,f)=>{const m=Lt(e,f,i);return l.top=Y(m.top,l.top),l.right=G(m.right,l.right),l.bottom=G(m.bottom,l.bottom),l.left=Y(m.left,l.left),l},Lt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function De(t){const{width:e,height:n}=$t(t);return{width:e,height:n}}function Ne(t,e,n){const o=$(e),i=F(e),s=n==="fixed",r=U(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const a=W(0);if(o||!o&&!s)if((Q(e)!=="body"||it(i))&&(c=ut(e)),o){const m=U(e,!0,s,e);a.x=m.x+e.clientLeft,a.y=m.y+e.clientTop}else i&&(a.x=Ft(i));const l=r.left+c.scrollLeft-a.x,f=r.top+c.scrollTop-a.y;return{x:l,y:f,width:r.width,height:r.height}}function dt(t){return S(t).position==="static"}function St(t,e){return!$(t)||S(t).position==="fixed"?null:e?e(t):t.offsetParent}function Vt(t,e){const n=P(t);if(Et(t))return n;if(!$(t)){let i=I(t);for(;i&&!J(i);){if(N(i)&&!dt(i))return i;i=I(i)}return n}let o=St(t,e);for(;o&&ye(o)&&dt(o);)o=St(o,e);return o&&J(o)&&dt(o)&&!yt(o)?n:o||be(t)||n}const $e=async function(t){const e=this.getOffsetParent||Vt,n=this.getDimensions,o=await n(t.floating);return{reference:Ne(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Me(t){return S(t).direction==="rtl"}const Fe={convertOffsetParentRelativeRectToViewportRelativeRect:Ce,getDocumentElement:F,getClippingRect:ke,getOffsetParent:Vt,getElementRects:$e,getClientRects:Oe,getDimensions:De,getScale:K,isElement:N,isRTL:Me};function Be(t,e){let n=null,o;const i=F(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),s();const{left:l,top:f,width:m,height:g}=t.getBoundingClientRect();if(c||e(),!m||!g)return;const u=rt(f),d=rt(i.clientWidth-(l+m)),h=rt(i.clientHeight-(f+g)),w=rt(l),v={rootMargin:-u+"px "+-d+"px "+-h+"px "+-w+"px",threshold:Y(0,G(1,a))||1};let x=!0;function b(y){const E=y[0].intersectionRatio;if(E!==a){if(!x)return r();E?r(!1,E):o=setTimeout(()=>{r(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(t)}return r(!0),s}function Ve(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=At(t),f=i||s?[...l?et(l):[],...et(e)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const m=l&&c?Be(l,n):null;let g=-1,u=null;r&&(u=new ResizeObserver(p=>{let[v]=p;v&&v.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=u)==null||x.observe(e)})),n()}),l&&!a&&u.observe(l),u.observe(e));let d,h=a?U(t):null;a&&w();function w(){const p=U(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,d=requestAnimationFrame(w)}return n(),()=>{var p;f.forEach(v=>{i&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),m==null||m(),(p=u)==null||p.disconnect(),u=null,a&&cancelAnimationFrame(d)}}const He=we,We=xe,_e=ge,ze=he,Ie=me,je=ve,Xe=(t,e,n)=>{const o=new Map,i={platform:Fe,...n},s={...i.platform,_c:o};return de(t,e,{...i,platform:s})};class Ye extends A.Component{constructor(){super(...arguments),this.element=null}componentDidMount(){this.componentDidUpdate()}componentDidUpdate(){const e=zt.findDOMNode(this);e instanceof Element?this.element=e:this.element=null}render(){return A.Children.only(this.props.children)}}const Ue={topLeft:"top-start",topRight:"top-end",bottomLeft:"bottom-start",bottomRight:"bottom-end",leftTop:"left-start",leftBottom:"left-end",rightTop:"right-start",rightBottom:"right-end"};function qe(t){var e;return(e=Ue[t])!==null&&e!==void 0?e:t}let q=null,Z=null;It&&(q=document.createElement("div"),q.className="adm-px-tester",q.style.setProperty("--size","10"),document.body.appendChild(q),Z=document.createElement("div"),Z.className="adm-px-tester",document.body.appendChild(Z));function mt(t){return q===null||Z===null||q.getBoundingClientRect().height===10?t:(Z.style.setProperty("--size",t.toString()),Z.getBoundingClientRect().height)}const X="adm-popover",Ke={placement:"top",defaultVisible:!1,stopPropagation:["click"],getContainer:()=>document.body,mode:"light"},Ht=C.forwardRef((t,e)=>{const n=jt(Ke,t),o=qe(n.placement),[i,s]=Yt({value:n.visible,defaultValue:n.defaultVisible,onChange:n.onVisibleChange});C.useImperativeHandle(e,()=>({show:()=>s(!0),hide:()=>s(!1),visible:i}),[i]);const r=C.useRef(null),c=C.useRef(null),a=C.useRef(null),l=Ut(n.stopPropagation,Tt(n,A.createElement("div",{className:st(X,`${X}-${n.mode}`,{[`${X}-hidden`]:!i}),ref:c},A.createElement("div",{className:`${X}-arrow`,ref:a},A.createElement(oe,{className:`${X}-arrow-icon`})),A.createElement("div",{className:`${X}-inner`},A.createElement("div",{className:`${X}-inner-content`},n.content))))),[f,m]=C.useState(null);function g(){var d,h,w;return Xt(this,void 0,void 0,function*(){const p=(h=(d=r.current)===null||d===void 0?void 0:d.element)!==null&&h!==void 0?h:null,v=c.current,x=a.current;if(m(p),!p||!v||!x)return;const{x:b,y,placement:E,middlewareData:L}=yield Xe(p,v,{placement:o,middleware:[He(mt(12)),We({padding:mt(4),crossAxis:!1,limiter:je()}),_e(),ze(),Ie({element:x,padding:mt(12)})]});Object.assign(v.style,{left:`${b}px`,top:`${y}px`});const T=E.split("-")[0],j={top:"bottom",right:"left",bottom:"top",left:"right"}[T],{x:B,y:V}=(w=L.arrow)!==null&&w!==void 0?w:{};Object.assign(x.style,{left:B!=null?`${B}px`:"",top:V!=null?`${V}px`:"",right:"",bottom:"",[j]:"calc(var(--arrow-size) * -1)"});const R={top:"0deg",bottom:"180deg",left:"270deg",right:"90deg"}[T];x.style.setProperty("--arrow-icon-rotate",R)})}Jt(()=>{g()}),C.useEffect(()=>{if(!f||!n.trigger)return;function d(){s(h=>!h)}return f.addEventListener("click",d),()=>{f.removeEventListener("click",d)}},[f,n.trigger]),C.useEffect(()=>{const d=c.current;if(!(!f||!d))return Ve(f,d,g,{elementResize:typeof ResizeObserver<"u"})},[f]),ne(()=>{n.trigger&&s(!1)},[()=>{var d;return(d=r.current)===null||d===void 0?void 0:d.element},c],["click","touchmove"]);const u=qt(i,!1,n.destroyOnHide);return A.createElement(A.Fragment,null,A.createElement(Ye,{ref:r},n.children),u&&Kt(n.getContainer,l))}),H="adm-popover-menu",Ze=C.forwardRef((t,e)=>{const n=C.useRef(null);C.useImperativeHandle(e,()=>n.current,[]);const o=C.useCallback(s=>{var r;const{onAction:c}=t;c&&c(s),(r=n.current)===null||r===void 0||r.hide()},[t.onAction]),i=C.useMemo(()=>{const s=(t==null?void 0:t.maxCount)&&t.actions.length>(t==null?void 0:t.maxCount),r=(t==null?void 0:t.maxCount)&&(t==null?void 0:t.maxCount)*48;return A.createElement("div",{className:`${H}-list`},A.createElement("div",{className:st(`${H}-list-inner`,{[`${H}-list-scroll`]:s}),style:{height:r}},t.actions.map((c,a)=>{var l;return A.createElement("a",{key:(l=c.key)!==null&&l!==void 0?l:a,className:st(`${H}-item`,"adm-plain-anchor",{[`${H}-item-disabled`]:c.disabled}),onClick:()=>{var f;c.disabled||(o(c),(f=c.onClick)===null||f===void 0||f.call(c))}},c.icon&&A.createElement("div",{className:`${H}-item-icon`},c.icon),A.createElement("div",{className:`${H}-item-text`},c.text))})))},[t.actions,o]);return A.createElement(Ht,Object.assign({ref:n},t,{className:st(H,t.className),content:i}),t.children)}),cn=_t(Ht,{Menu:Ze});export{cn as P};
