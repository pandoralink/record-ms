import{u as i,r as n,j as t,O as p}from"./index-By7UgRYt.js";import"./with-default-props-CBsXvwG_.js";import{S as c}from"./safe-area-BzdNV_Ox.js";import{T as a}from"./index-2_4n4X94.js";import"./use-props-value-CYLTqXE_.js";import"./index-BvdF-Vz4.js";import"./traverse-react-node-CuGhr7eF.js";const m=({activeKey:o,setActiveKey:s})=>{const r=[{key:"action",title:"行为"},{key:"analyse",title:"分析"},{key:"setting",title:"设置"}];return t.jsx(a,{activeKey:o,safeArea:!0,onChange:e=>s(e),children:r.map(e=>t.jsx(a.Item,{title:e.title},e.key))})},l=({activeKey:o,setActiveKey:s})=>t.jsx("div",{className:"tab-bar",style:{position:"fixed",bottom:0,width:"100%",borderTop:"solid 1px var(--adm-color-border)"},children:t.jsx(m,{activeKey:o,setActiveKey:s})}),v=()=>{const o=i(),[s,r]=n.useState("action");return t.jsxs(t.Fragment,{children:[t.jsx(c,{position:"top",style:{background:"#f2f2f7"}}),t.jsx(p,{}),t.jsx(l,{activeKey:s,setActiveKey:e=>{r(e),o(e)}})]})};export{v as TopLevelPageWrapper};
