import{r as i,j as t}from"./index-DE9JW7L8.js";import"./with-default-props-ZNhL5bow.js";import{N as C}from"./nav-bar-pkrgLCdM.js";import{u as g,l as S,a as R}from"./context-C9UckKB9.js";import{u as w,M as p,D as f,B as O}from"./hooks-CGD0cvX5.js";import{C as b,S as v}from"./space-dBnVsSF8.js";import{I as x}from"./input-DqOP86Ju.js";import{S as D,E as T,D as z}from"./swipe-action-Cjsh_ULH.js";import{T as B}from"./tag-C1v5LHLC.js";import{T as E,A as h}from"./index-CChOZ6L2.js";import"./index-C_OXVGSL.js";import"./index-Dp9DsjWu.js";import"./validate-gfvL6HFD.js";import"./use-props-value-Bal7tDYD.js";const I=({aKey:e,name:o})=>{const c=w(),a=g(),[l,s]=i.useState(o),u=i.useRef("");u.current=l;const[j,A]=i.useState(""),y=i.useRef("");return y.current=j,t.jsx("div",{style:{backgroundColor:"#f2f2f7",padding:"16px"},children:t.jsx(b,{style:{padding:0},bodyStyle:{padding:0},onClick:()=>{p.show({content:t.jsxs("div",{children:[t.jsx(x,{placeholder:"请输入内容",defaultValue:j,onChange:r=>{A(r)}}),t.jsx(f,{style:{margin:0}})]}),closeOnAction:!0,closeOnMaskClick:!0,actions:[{key:"confirm-record",text:"保存",primary:!0,onClick:()=>{c({aKey:e,name:o},y.current)}}]})},children:t.jsx(D,{style:{borderRadius:8},rightActions:[{key:"rename",text:t.jsx(T,{fontSize:36}),color:"warning",onClick:r=>{r.stopPropagation(),p.show({content:t.jsxs("div",{children:[t.jsx(x,{placeholder:"请输入内容",defaultValue:l,onChange:n=>{s(n)}}),t.jsx(f,{style:{margin:0}})]}),closeOnAction:!0,closeOnMaskClick:!0,actions:[{key:"confirm-rename",text:"重命名",primary:!0,onClick:()=>{a(n=>{if(!n)return[];const d=S.cloneDeep(n),m=d.find(k=>k.aKey===e);return m&&u.current!==m.name&&(m.name=u.current),d})}}]})}},{key:"delete",text:t.jsx(z,{fontSize:36}),color:"danger",onClick:r=>{r.stopPropagation(),a(n=>(n==null?void 0:n.filter(d=>d.aKey!==e))||[])}}],children:t.jsxs(v,{justify:"between",align:"center",style:{padding:8,width:"100%"},children:[t.jsx(B,{round:!0,color:"primary",style:{fontSize:20,minWidth:80,paddingTop:8,paddingBottom:8},children:o}),t.jsx(O,{className:"add-action-btn",fill:"none",onClick:r=>{r.stopPropagation(),c({aKey:e,name:o}),E.show({content:"+1",position:"top",duration:100})},children:t.jsx(h,{color:"var(--adm-color-primary)",fontSize:36})})]})})})})},M=()=>{const[e,o]=i.useState(""),c=i.useRef("");c.current=e;const a=g(),l=i.useCallback(()=>{a(s=>s?[...s,{name:c.current,aKey:new Date().getTime()}]:[])},[a]);return t.jsx(h,{color:"var(--adm-color-primary)",fontSize:36,onClick:s=>{s.stopPropagation(),p.show({content:t.jsxs("div",{children:[t.jsx(x,{placeholder:"请输入内容",defaultValue:e,onChange:o}),t.jsx(f,{style:{margin:0}})]}),closeOnAction:!0,closeOnMaskClick:!0,actions:[{key:"confirm-add-action",text:"添加",primary:!0,onClick:l}]})}})},Y=()=>{const e=R();return t.jsxs(t.Fragment,{children:[t.jsx(C,{style:{backgroundColor:"#f2f2f7"},back:null,right:t.jsx("div",{style:{paddingTop:8},children:t.jsx(M,{})})}),t.jsx("div",{className:"action-list",style:{paddingBottom:80},children:e==null?void 0:e.map(o=>t.jsx("div",{children:t.jsx(I,{...o})},o.aKey))})]})};export{Y as ActionList};
