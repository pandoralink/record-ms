import{a as P,m as D,w as T}from"./with-default-props-CJz_oMvJ.js";import{r,R as v,i as $}from"./index-BzfneoA9.js";import{u as F,a as S}from"./react-spring-web.esm-D8lu2Y0j.js";import{S as B,r as A}from"./should-render-BHEuclEH.js";import{w as H}from"./with-stop-propagation-CDkAgc26.js";import{u as I}from"./config-provider-Cb8MFuwX.js";import{_ as X}from"./index-Cv4DLZ7G.js";var U=function(){var t=r.useRef(!1);return r.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]),t};const k=10;function V(t,e){return t>e&&t>k?"horizontal":e>t&&e>k?"vertical":""}function z(){const t=r.useRef(0),e=r.useRef(0),n=r.useRef(0),c=r.useRef(0),o=r.useRef(0),a=r.useRef(0),s=r.useRef(""),h=()=>s.current==="vertical",f=()=>s.current==="horizontal",m=()=>{n.current=0,c.current=0,o.current=0,a.current=0,s.current=""};return{move:u=>{const d=u.touches[0];n.current=d.clientX<0?0:d.clientX-t.current,c.current=d.clientY-e.current,o.current=Math.abs(n.current),a.current=Math.abs(c.current),s.current||(s.current=V(o.current,a.current))},start:u=>{m(),t.current=u.touches[0].clientX,e.current=u.touches[0].clientY},reset:m,startX:t,startY:e,deltaX:n,deltaY:c,offsetX:o,offsetY:a,direction:s,isVertical:h,isHorizontal:f}}const W=P?window:void 0,q=["scroll","auto","overlay"];function K(t){return t.nodeType===1}function Z(t,e=W){let n=t;for(;n&&n!==e&&K(n);){if(n===document.body)return e;const{overflowY:c}=window.getComputedStyle(n);if(q.includes(c)&&n.scrollHeight>n.clientHeight)return n;n=n.parentNode}return e}let _=!1;if(P)try{const t={};Object.defineProperty(t,"passive",{get(){_=!0}}),window.addEventListener("test-passive",null,t)}catch{}let g=0;const O="adm-overflow-hidden";function G(t){let e=t==null?void 0:t.parentElement;for(;e;){if(e.clientHeight<e.scrollHeight)return e;e=e.parentElement}return null}function J(t,e){const n=z(),c=s=>{n.move(s);const h=n.deltaY.current>0?"10":"01",f=Z(s.target,t.current);if(!f)return;if(e==="strict"){const L=G(s.target);if(L===document.body||L===document.documentElement){s.preventDefault();return}}const{scrollHeight:m,offsetHeight:i,scrollTop:l}=f,{height:u}=f.getBoundingClientRect();let d="11";l===0?d=i>=m?"00":"01":m<=Math.round(u+l)&&(d="10"),d!=="11"&&n.isVertical()&&!(parseInt(d,2)&parseInt(h,2))&&s.cancelable&&_&&s.preventDefault()},o=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",c,_?{passive:!1}:!1),g||document.body.classList.add(O),g++},a=()=>{g&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",c),g--,g||document.body.classList.remove(O))};r.useEffect(()=>{if(e)return o(),()=>{a()}},[e])}const R="adm-mask",Q={default:.55,thin:.35,thick:.75},ee={black:"0, 0, 0",white:"255, 255, 255"},te={visible:!0,destroyOnClose:!1,forceRender:!1,color:"black",opacity:"default",disableBodyScroll:!0,getContainer:null,stopPropagation:["click"]},Te=t=>{const e=D(te,t),{locale:n}=I(),c=r.useRef(null);J(c,e.visible&&e.disableBodyScroll);const o=r.useMemo(()=>{var i;const l=(i=Q[e.opacity])!==null&&i!==void 0?i:e.opacity,u=ee[e.color];return u?`rgba(${u}, ${l})`:e.color},[e.color,e.opacity]),[a,s]=r.useState(e.visible),h=U(),{opacity:f}=F({opacity:e.visible?1:0,config:{precision:.01,mass:1,tension:250,friction:30,clamp:!0},onStart:()=>{s(!0)},onRest:()=>{var i,l;h.current||(s(e.visible),e.visible?(i=e.afterShow)===null||i===void 0||i.call(e):(l=e.afterClose)===null||l===void 0||l.call(e))}}),m=H(e.stopPropagation,T(e,v.createElement(S.div,{className:R,ref:c,"aria-hidden":!0,style:Object.assign(Object.assign({},e.style),{background:o,opacity:f,display:a?void 0:"none"}),onClick:i=>{var l;i.target===i.currentTarget&&((l=e.onMaskClick)===null||l===void 0||l.call(e,i))}},e.onMaskClick&&v.createElement("div",{className:`${R}-aria-button`,role:"button","aria-label":n.Mask.name,onClick:e.onMaskClick}),v.createElement("div",{className:`${R}-content`},e.children))));return v.createElement(B,{active:a,forceRender:e.forceRender,destroyOnClose:e.destroyOnClose},A(e.getContainer,m))};function Fe(t){return r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),r.createElement("g",{id:"CloseOutline-CloseOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"CloseOutline-编组"},r.createElement("rect",{id:"CloseOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),r.createElement("path",{d:"M10.6085104,8.11754663 L24.1768397,21.8195031 L24.1768397,21.8195031 L37.7443031,8.1175556 C37.8194278,8.04168616 37.9217669,7.999 38.0285372,7.999 L41.1040268,7.999 C41.3249407,7.999 41.5040268,8.1780861 41.5040268,8.399 C41.5040268,8.50440471 41.4624226,8.60554929 41.3882578,8.68044752 L26.2773302,23.9408235 L26.2773302,23.9408235 L41.5021975,39.3175645 C41.65763,39.4745475 41.6563731,39.7278104 41.4993901,39.8832429 C41.4244929,39.9574004 41.3233534,39.999 41.2179546,39.999 L38.1434012,39.999 C38.0366291,39.999 37.9342885,39.9563124 37.8591634,39.8804408 L24.1768397,26.0621438 L24.1768397,26.0621438 L10.4936501,39.8804497 C10.4185257,39.9563159 10.3161889,39.999 10.2094212,39.999 L7.13584526,39.999 C6.91493136,39.999 6.73584526,39.8199139 6.73584526,39.599 C6.73584526,39.4936017 6.77744443,39.3924627 6.85160121,39.3175656 L22.0763492,23.9408235 L22.0763492,23.9408235 L6.96554081,8.68044639 C6.81010226,8.52346929 6.81134951,8.27020637 6.9683266,8.11476782 C7.04322474,8.04060377 7.14436883,7.999 7.24977299,7.999 L10.3242852,7.999 C10.4310511,7.999 10.5333863,8.04168267 10.6085104,8.11754663 Z",id:"CloseOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}const E=Object.assign({},$),{version:ne,render:oe,unmountComponentAtNode:re}=E;let C;try{Number((ne||"").split(".")[0])>=18&&E.createRoot&&(C=E.createRoot)}catch{}function N(t){const{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:e}=E;e&&typeof e=="object"&&(e.usingClientEntryPoint=t)}const y="__antd_mobile_root__";function ce(t,e){oe(t,e)}function se(t,e){N(!0);const n=e[y]||C(e);N(!1),n.render(t),e[y]=n}function ie(t,e){if(C){se(t,e);return}ce(t,e)}function ae(t){return re(t)}function le(t){return X(this,void 0,void 0,function*(){return Promise.resolve().then(()=>{var e;(e=t[y])===null||e===void 0||e.unmount(),delete t[y]})})}function ue(t){return C?le(t):ae(t)}function Ye(t){const e=document.createElement("div");document.body.appendChild(e);function n(){ue(e)&&e.parentNode&&e.parentNode.removeChild(e)}return ie(t,e),n}var Y={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=r;function de(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fe=typeof Object.is=="function"?Object.is:de,me=p.useState,ve=p.useEffect,pe=p.useLayoutEffect,he=p.useDebugValue;function ge(t,e){var n=e(),c=me({inst:{value:n,getSnapshot:e}}),o=c[0].inst,a=c[1];return pe(function(){o.value=n,o.getSnapshot=e,w(o)&&a({inst:o})},[t,n,e]),ve(function(){return w(o)&&a({inst:o}),t(function(){w(o)&&a({inst:o})})},[t]),he(n),n}function w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fe(t,n)}catch{return!0}}function Ee(t,e){return e()}var ye=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ee:ge;j.useSyncExternalStore=p.useSyncExternalStore!==void 0?p.useSyncExternalStore:ye;Y.exports=j;var Ce=Y.exports;let Re=!1;const M=new Set;function x(){return Re}function we(t){return M.add(t),()=>{M.delete(t)}}function be(){return Ce.useSyncExternalStore(we,x,x)}const b="adm-spin-loading",Se={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},_e={color:"default"},Le=15*3.14159265358979*2,je=r.memo(t=>{var e;const n=D(_e,t),c=be(),{percent:o}=F({cancel:c,loop:{reverse:!0},from:{percent:80},to:{percent:30},config:{duration:1200}});return T(n,v.createElement(S.div,{className:b,style:{"--color":(e=Se[n.color])!==null&&e!==void 0?e:n.color,"--percent":o}},v.createElement("svg",{className:`${b}-svg`,viewBox:"0 0 32 32"},v.createElement(S.circle,{className:`${b}-fill`,fill:"transparent",strokeWidth:"2",strokeDasharray:Le,strokeDashoffset:o,strokeLinecap:"square",r:15,cx:16,cy:16}))))});export{Fe as C,Te as M,je as S,J as a,Ye as r,_ as s,U as u};
