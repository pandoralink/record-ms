import{u as m,b as p,r as c,j as r}from"./index-BAp2uJNA.js";import"./with-default-props-CMBK7XXi.js";import{C as f}from"./card-Bm9Xbvdt.js";import{N as l}from"./nav-bar-DfpX-dUZ.js";import{S as u}from"./safe-area-BWYm8GsI.js";import{S as d}from"./space-DucTn_zh.js";import{b as x}from"./context-C4UcBI1T.js";import{A as g}from"./ActionNameTag-brRFyykn.js";import{T as h}from"./TagDetailPopover-BaZ4-7R8.js";import{b as j}from"./utils-Boy3u2nq.js";import"./index-CauQB7WX.js";import"./index-GB9J5_l6.js";import"./tag-C_JUbPtf.js";import"./index-CEg9wJF7.js";import"./attach-properties-to-component-CxYBDbn1.js";import"./use-props-value-CHhyxfC0.js";import"./with-stop-propagation-D-0Q3mwI.js";import"./should-render-CXgSacTY.js";import"./index-lMu87Tbl.js";function b({clickItemList:i}){const e={};i.forEach(o=>{const s=j(o);Object.entries(s).forEach(([t,a])=>{e[t]||(e[t]=[]),e[t].push({actionItem:o.actionItem.name,count:a})})});const n=Object.entries(e).sort((o,s)=>{const[t]=o,[a]=s;return a.localeCompare(t)});return r.jsx("div",{children:n.map(([o,s])=>r.jsx("div",{style:{backgroundColor:"#f2f2f7",padding:"16px"},children:r.jsx(f,{title:`${parseInt(o.split(":")[0],10)-1}:30-${o}`,bodyStyle:{textAlign:"left"},children:r.jsx(d,{children:s.map(t=>r.jsx(h,{timeList:t.count.timeList,children:r.jsx(g,{name:t.actionItem,count:t.count.total})},t.actionItem))})})},o))})}const F=()=>{const i=m(),e=x(),[n]=p(),[o]=c.useState(n.get("recordKey")||""),s=c.useMemo(()=>{var t;return((t=e==null?void 0:e.find(a=>a.rKey===o))==null?void 0:t.items)||[]},[o,e]);return s?r.jsxs(r.Fragment,{children:[r.jsx(u,{position:"top",style:{background:"#f2f2f7"}}),r.jsx(l,{style:{backgroundColor:"#f2f2f7",fontWeight:500},onBack:()=>{i(-1)},children:"单日详情"}),r.jsx(b,{clickItemList:s})]}):null};export{F as RecordTagDetailWithDay};
