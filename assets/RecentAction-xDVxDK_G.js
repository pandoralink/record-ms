import{u as c,r as n,j as i}from"./index-A3j-_Inl.js";import{P as u}from"./PageWrapper-BFZ_DnIG.js";import{b as d}from"./context-jzoCB2od.js";import{R as g}from"./RecordTagAction-DSNt-QOn.js";import"./with-default-props-B5MJFbQu.js";import"./nav-bar-aa0E8ghH.js";import"./safe-area-DFIVDvyz.js";import"./index-D4kv2pca.js";import"./isBrowser-CU3-RGUT.js";import"./button-BlVt5fmL.js";import"./validate-XLRsc4GV.js";import"./card-Dtug99dg.js";import"./index-COzIfLzO.js";import"./use-isomorphic-update-layout-effect-CrWAHQoj.js";import"./index-BIOXoCKX.js";import"./space-D16IQv2O.js";import"./spin-loading-DVbe9M64.js";import"./react-spring-web.esm-scdsD_XJ.js";import"./should-render-CEgQl18f.js";import"./with-stop-propagation-C6_WT8nv.js";import"./config-provider-9zUhGboj.js";import"./attach-properties-to-component-CxYBDbn1.js";import"./input-DO7Fr9N-.js";import"./use-props-value-D7TWvYPJ.js";import"./useInputHandleKeyDown-XNl4iqyD.js";import"./swipe-action-B0ytrOSM.js";import"./index-D4I31-U8.js";import"./utils-BIxnbL-6.js";import"./hooks-CKH42jwf.js";const O=()=>{const s=c(),e=d(),a=n.useMemo(()=>e.map(r=>r.items.map(o=>o.record.map(p=>({rKey:r.rKey,actionItem:o.actionItem,itemRKey:o.rKey,time:p.time,desc:p.desc})))).flat(2).sort((r,m)=>m.time-r.time).slice(0,5),[e]);return i.jsx(u,{title:"最近操作",onBack:()=>{s(-1)},children:a.map(t=>i.jsx("div",{children:i.jsx(g,{time:t.time,desc:t.desc,actionItem:t.actionItem,recordKey:t.rKey})},t.time))})};export{O as RecentAction};
