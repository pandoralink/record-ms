import{r as m,R as a,u as p,j as t}from"./index-DE9JW7L8.js";import{u as k}from"./index-DMGlskFF.js";import{g as v}from"./utils-D5_TjxPy.js";import{w as g,m as w,c as E}from"./with-default-props-ZNhL5bow.js";import{L as s}from"./index-CShAKJgO.js";import{N as j}from"./nav-bar-pkrgLCdM.js";import{_ as b}from"./index-Dp9DsjWu.js";import{u as N}from"./use-props-value-Bal7tDYD.js";import{u as S,i as P}from"./validate-gfvL6HFD.js";import"./index-C_OXVGSL.js";const y=m.memo(o=>g(o,a.createElement("svg",{width:"28px",height:"28px",viewBox:"0 0 28 28"},a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.createElement("g",{transform:"translate(-137.000000, -840.000000)",fill:"#1576FE"},a.createElement("g",{transform:"translate(80.000000, 823.000000)"},a.createElement("g",{transform:"translate(53.000000, 13.000000)"},a.createElement("path",{d:"M17.9996753,31.5 C10.5556724,31.5 4.5,25.4443275 4.5,18.0003247 C4.5,10.5563219 10.5556724,4.5 17.9996753,4.5 C18.5355492,4.5 18.9702974,4.93474816 18.9702974,5.47062208 C18.9702974,6.006496 18.5355492,6.44124416 17.9996753,6.44124416 C11.6261524,6.44124416 6.44124416,11.6267709 6.44124416,18.0002938 C6.44124416,24.3738167 11.6261524,29.5587249 17.9996753,29.5587249 C24.3731982,29.5587249 29.5587249,24.3738167 29.5587249,18.0002938 C29.5587249,14.7964616 28.2778291,11.8169616 25.9523687,9.61220279 C25.5637302,9.24317094 25.5473089,8.62893223 25.9157222,8.23967523 C26.2841356,7.84976878 26.8989928,7.83461537 27.2882498,8.20302872 C30.0042351,10.7787368 31.5,14.2580826 31.5,18.0002938 C31.5,25.4443275 25.4436781,31.5 17.9996753,31.5 Z"})))))))),r="adm-switch",I={defaultChecked:!1},$=o=>{const e=w(I,o),c=e.disabled||e.loading||!1,[l,n]=m.useState(!1),{locale:u}=S(),[i,C]=N({value:e.checked,defaultValue:e.defaultChecked,onChange:e.onChange});function x(){return b(this,void 0,void 0,function*(){if(c||e.loading||l)return;const h=!i;if(e.beforeChange){n(!0);try{yield e.beforeChange(h),n(!1)}catch(d){throw n(!1),d}}const f=C(h);if(P(f)){n(!0);try{yield f,n(!1)}catch(d){throw n(!1),d}}})}return g(e,a.createElement("div",{onClick:x,className:E(r,{[`${r}-checked`]:i,[`${r}-disabled`]:c||l}),role:"switch","aria-label":u.Switch.name,"aria-checked":i,"aria-disabled":c},a.createElement("div",{className:`${r}-checkbox`},a.createElement("div",{className:`${r}-handle`},(e.loading||l)&&a.createElement(y,{className:`${r}-spin-icon`})),a.createElement("div",{className:`${r}-inner`},i?e.checkedText:e.uncheckedText))))},Z=()=>{const o=p(),{showMode:e,setShowMode:c}=k(),l=m.useMemo(()=>v(),[]);return t.jsxs(t.Fragment,{children:[t.jsx(j,{style:{backgroundColor:"#f2f2f7"},back:null,children:"设置"}),t.jsxs(s,{mode:"card",style:{textAlign:"left",fontWeight:500},children:[t.jsx(s.Item,{onClick:()=>{o({pathname:"/kv-config"})},children:"键值映射"}),t.jsx(s.Item,{extra:t.jsx($,{checked:e,onChange:c}),children:"展示模式"})]}),t.jsxs(s,{mode:"card",style:{textAlign:"left"},children:[t.jsx(s.Item,{onClick:()=>{},children:"导入数据"}),t.jsx(s.Item,{onClick:()=>{},children:"导出数据"}),t.jsx(s.Item,{onClick:()=>{},arrow:!1,extra:l,children:"本地存储比例"})]})]})};export{Z as Setting};
