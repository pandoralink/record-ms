import{u as c,r as n,j as i}from"./index-4K8MCTj1.js";import{P as u}from"./PageWrapper-Dmb1eLGU.js";import{b as d}from"./context-BVKqA11r.js";import{R as g}from"./RecordTagAction-DV8cqjNO.js";import"./with-default-props-D4fAU74E.js";import"./nav-bar-7Wdt2NiX.js";import"./safe-area-CdiIcGsQ.js";import"./index-Bc2wvFYg.js";import"./index-9nx2DlAH.js";import"./isBrowser-CU3-RGUT.js";import"./button-Bpbz-6r1.js";import"./validate-D9IZnNEL.js";import"./card-C4QVFP6U.js";import"./index-_7DM4Akm.js";import"./use-isomorphic-update-layout-effect-cv3wE5KP.js";import"./index-DfHYskjN.js";import"./space-aOglY742.js";import"./spin-loading-CsJBPB6Y.js";import"./react-spring-web.esm-4yA8vDld.js";import"./should-render-BiA09XbB.js";import"./with-stop-propagation-DuYupDqp.js";import"./config-provider-4QUlm3fk.js";import"./attach-properties-to-component-CxYBDbn1.js";import"./input-BEDU8DIS.js";import"./use-props-value-DEiOoCBn.js";import"./useInputHandleKeyDown-DpWn5ALs.js";import"./swipe-action-BRMpERit.js";import"./index-BYUl2Fjp.js";import"./hooks-B4H36dVC.js";const O=()=>{const s=c(),e=d(),a=n.useMemo(()=>e.map(r=>r.items.map(o=>o.record.map(p=>({rKey:r.rKey,actionItem:o.actionItem,itemRKey:o.rKey,time:p.time,desc:p.desc})))).flat(2).sort((r,m)=>m.time-r.time).slice(0,5),[e]);return i.jsx(u,{title:"最近操作",onBack:()=>{s(-1)},children:a.map(t=>i.jsx("div",{children:i.jsx(g,{time:t.time,desc:t.desc,actionItem:t.actionItem,recordKey:t.rKey})},t.time))})};export{O as RecentAction};
