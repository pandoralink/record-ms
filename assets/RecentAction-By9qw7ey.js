import{u as c,r as n,j as i}from"./index-BzfneoA9.js";import{P as u}from"./PageWrapper-Dudcctrk.js";import{b as d}from"./context-C861iW53.js";import{R as g}from"./RecordTagAction-DftAwCo1.js";import"./with-default-props-CJz_oMvJ.js";import"./nav-bar-CuwRpdNp.js";import"./safe-area-fZYJ_iXP.js";import"./index-Cv4DLZ7G.js";import"./isBrowser-CU3-RGUT.js";import"./button-DJ12UD5m.js";import"./validate-CAoW_kJw.js";import"./card-C6fHRdTv.js";import"./index-Dps1GsoO.js";import"./use-isomorphic-update-layout-effect-BXp9hG6P.js";import"./index-CW2lH1zu.js";import"./space-C0j3B_G-.js";import"./auto-center-DgWGWwnJ.js";import"./spin-loading-BUEA2cwN.js";import"./react-spring-web.esm-D8lu2Y0j.js";import"./should-render-BHEuclEH.js";import"./with-stop-propagation-CDkAgc26.js";import"./config-provider-Cb8MFuwX.js";import"./use-inner-visible-CVIP5rGv.js";import"./attach-properties-to-component-CxYBDbn1.js";import"./input-DTX27LZm.js";import"./use-props-value-B20lLCbj.js";import"./bound-sRU-RDN8.js";import"./useInputHandleKeyDown-B5D8pYGI.js";import"./index-DMaug4gz.js";import"./use-gesture-react.esm-ByEQHnZU.js";import"./swipe-action-DXCpGThd.js";import"./index-D1QZq8cV.js";import"./utils-DqhwL_u_.js";import"./hooks-BDd0Jgu-.js";const X=()=>{const s=c(),m=d(),a=n.useMemo(()=>m.map(r=>r.items.map(o=>o.record.map(p=>({rKey:r.rKey,actionItem:o.actionItem,itemRKey:o.rKey,time:p.time,desc:p.desc})))).flat(2).sort((r,e)=>e.time-r.time).slice(0,5),[m]);return i.jsx(u,{title:"最近操作",onBack:()=>{s(-1)},children:a.map(t=>i.jsx("div",{children:i.jsx(g,{time:t.time,desc:t.desc,actionItem:t.actionItem,recordKey:t.rKey})},t.time))})};export{X as RecentAction};
