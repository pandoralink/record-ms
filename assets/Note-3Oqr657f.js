import{r as o,R as g,u as q,j as x}from"./index-4K8MCTj1.js";import{m as _,w as z}from"./with-default-props-D4fAU74E.js";import{C as Y}from"./card-C4QVFP6U.js";import{r as Z}from"./index.esm-Cg_c7sd2.js";import{u as I}from"./index-DfHYskjN.js";import{u as G}from"./index-9nx2DlAH.js";import{w as B}from"./with-stop-propagation-DuYupDqp.js";import{u as J,a as K,t as Q}from"./react-spring-web.esm-4yA8vDld.js";import{u as U,S as ee,D as te}from"./swipe-action-BRMpERit.js";import{N as ne}from"./nav-bar-7Wdt2NiX.js";import{S as oe}from"./space-aOglY742.js";import{c as ie,d as se,l as re}from"./context-BVKqA11r.js";import"./isBrowser-CU3-RGUT.js";import"./button-Bpbz-6r1.js";import"./validate-D9IZnNEL.js";import"./index-Bc2wvFYg.js";function ae(i){return o.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i,{style:Object.assign({verticalAlign:"-0.125em"},i.style),className:["antd-mobile-icon",i.className].filter(Boolean).join(" ")}),o.createElement("g",{id:"AddOutline-AddOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"AddOutline-add"},o.createElement("rect",{id:"AddOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),o.createElement("path",{d:"M25.1,6.5 C25.3209139,6.5 25.5,6.6790861 25.5,6.9 L25.5,22.5 L41.1,22.5 C41.3209139,22.5 41.5,22.6790861 41.5,22.9 L41.5,25.1 C41.5,25.3209139 41.3209139,25.5 41.1,25.5 L25.5,25.5 L25.5,41.1 C25.5,41.3209139 25.3209139,41.5 25.1,41.5 L22.9,41.5 C22.6790861,41.5 22.5,41.3209139 22.5,41.1 L22.5,25.5 L6.9,25.5 C6.6790861,25.5 6.5,25.3209139 6.5,25.1 L6.5,22.9 C6.5,22.6790861 6.6790861,22.5 6.9,22.5 L22.5,22.5 L22.5,6.9 C22.5,6.6790861 22.6790861,6.5 22.9,6.5 L25.1,6.5 Z",id:"AddOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function le(i,e){const d=G(i);I(()=>{const u=e.current;if(u)if(window.ResizeObserver){let n;const r=new ResizeObserver(()=>{n=window.requestAnimationFrame(()=>d(u))});return r.observe(u),()=>{window.cancelAnimationFrame(n),r.disconnect()}}else d(u)},[e])}const ce="adm-ellipsis",de={direction:"end",rows:1,expandText:"",content:"",collapseText:"",stopPropagationForActionButtons:[],onContentClick:()=>{},defaultExpanded:!1},ue=i=>{const e=_(de,i),d=o.useRef(null),u=o.useRef(null),n=o.useRef(null),[r,s]=o.useState({}),[p,k]=o.useState(e.defaultExpanded),[S,N]=o.useState(!1),w=o.useMemo(()=>Z(e.content),[e.content]);function a(f,y){return w.slice(f,y).join("")}function v(){var f,y;const h=d.current;if(!h)return;const C=h.style.display;h.style.display="block";const m=window.getComputedStyle(h),t=document.createElement("div");Array.prototype.slice.apply(m).forEach(b=>{t.style.setProperty(b,m.getPropertyValue(b))}),h.style.display=C,t.style.height="auto",t.style.minHeight="auto",t.style.maxHeight="auto",t.style.textOverflow="clip",t.style.webkitLineClamp="unset",t.style.display="block";const P=D(m.lineHeight),A=Math.floor(P*(e.rows+.5)+D(m.paddingTop)+D(m.paddingBottom));if(t.innerText=e.content,document.body.appendChild(t),t.offsetHeight<=A)N(!1);else{let T=function(l,c){if(c-l<=1)return e.direction==="end"?{leading:a(0,l)+"..."}:{tailing:"..."+a(c,b)};const E=Math.round((l+c)/2);return e.direction==="end"?t.innerHTML=a(0,E)+"..."+j:t.innerHTML=j+"..."+a(E,b),t.offsetHeight<=A?e.direction==="end"?T(E,c):T(l,E):e.direction==="end"?T(l,E):T(E,c)},O=function(l,c){if(l[1]-l[0]<=1&&c[1]-c[0]<=1)return{leading:a(0,l[0])+"...",tailing:"..."+a(c[1],b)};const E=Math.floor((l[0]+l[1])/2),H=Math.ceil((c[0]+c[1])/2);return t.innerHTML=a(0,E)+"..."+j+"..."+a(H,b),t.offsetHeight<=A?O([E,l[1]],[c[0],H]):O([l[0],E],[H,c[1]])};N(!0);const b=e.content.length,V=typeof e.collapseText=="string"?e.collapseText:(f=n.current)===null||f===void 0?void 0:f.innerHTML,W=typeof e.expandText=="string"?e.expandText:(y=u.current)===null||y===void 0?void 0:y.innerHTML,j=p?V:W,$=Math.floor((0+b)/2),X=e.direction==="middle"?O([0,$],[$,b]):T(0,b);s(X)}document.body.removeChild(t)}le(v,d),I(()=>{v()},[e.content,e.direction,e.rows,e.expandText,e.collapseText]);const L=!!e.expandText&&B(e.stopPropagationForActionButtons,g.createElement("a",{ref:u,onClick:()=>{k(!0)}},e.expandText)),R=!!e.collapseText&&B(e.stopPropagationForActionButtons,g.createElement("a",{ref:n,onClick:()=>{k(!1)}},e.collapseText)),F=()=>S?p?g.createElement(g.Fragment,null,e.content,R):g.createElement(g.Fragment,null,r.leading,L,r.tailing):e.content;return z(e,g.createElement("div",{ref:d,className:ce,onClick:f=>{f.target===f.currentTarget&&e.onContentClick(f)}},F()))};function D(i){if(!i)return 0;const e=i.match(/^\d*(\.\d*)?/);return e?Number(e[0]):0}const M="adm-floating-bubble",fe={axis:"y",defaultOffset:{x:0,y:0}},pe=i=>{const e=_(fe,i),d=o.useRef(null),u=o.useRef(null),[n,r]=o.useState(e.offset===void 0?e.defaultOffset:e.offset);o.useEffect(()=>{e.offset!==void 0&&S.start({x:e.offset.x,y:e.offset.y})},[e.offset]);const[{x:s,y:p,opacity:k},S]=J(()=>({x:n.x,y:n.y,opacity:1})),N=U(w=>{var a;let v=w.offset[0],L=w.offset[1];if(w.last&&e.magnetic){const F=d.current,f=u.current;if(!F||!f)return;const y=F.getBoundingClientRect(),h=f.getBoundingClientRect();if(e.magnetic==="x"){const C=s.goal-s.get(),m=h.left+C-y.left,t=y.right-(h.right+C);t<=m?v+=t:v-=m}else if(e.magnetic==="y"){const C=p.goal-p.get(),m=h.top+C-y.top,t=y.bottom-(h.bottom+C);t<=m?L+=t:L-=m}}const R={x:v,y:L};e.offset===void 0?S.start(R):r(R),(a=e.onOffsetChange)===null||a===void 0||a.call(e,R),S.start({opacity:w.active?.8:1})},{axis:e.axis==="xy"?void 0:e.axis,pointer:{touch:!0},filterTaps:!0,bounds:d,from:()=>[s.get(),p.get()]});return z(e,g.createElement("div",{className:M},g.createElement("div",{className:`${M}-boundary-outer`},g.createElement("div",{className:`${M}-boundary`,ref:d})),g.createElement(K.div,Object.assign({},N(),{style:{opacity:k,transform:Q([s,p],(w,a)=>`translate(${w}px, ${a}px)`)},onClick:e.onClick,className:`${M}-button`,ref:u}),e.children)))},Me=()=>{const i=q(),e=ie(),d=se(),u=o.useMemo(()=>{const n=re.cloneDeep(e||[]).map(r=>{const s=new Date(r.noteId),p=`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")} ${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`;return{...r,time:p}});return n.sort((r,s)=>s.noteId-r.noteId),n},[e]);return x.jsxs(x.Fragment,{children:[x.jsx(ne,{style:{backgroundColor:"#f2f2f7",fontWeight:500},back:null,children:"随记"}),x.jsx(oe,{direction:"vertical",style:{backgroundColor:"#f2f2f7",padding:"16px",width:"100%",boxSizing:"border-box"},children:u.map(n=>x.jsx(ee,{style:{borderRadius:8},rightActions:[{key:"delete",text:x.jsx(te,{fontSize:36}),color:"danger",onClick:r=>{r.stopPropagation(),d(s=>(s||[]).filter(p=>p.noteId!==n.noteId))}}],children:x.jsx(Y,{className:"note-card",title:n.title,bodyStyle:{textAlign:"left",overflow:"hidden"},onClick:()=>{i({pathname:"/note-detail",search:`noteId=${n.noteId}`})},children:x.jsxs("div",{className:"note-card__desc",children:[n.time,x.jsx(ue,{className:"note-card__desc__content",direction:"end",content:n.content.slice(0,30)})]})},n.noteId)}))}),x.jsx(pe,{axis:"x",magnetic:"x",style:{"--initial-position-bottom":"100px","--initial-position-right":"24px","--edge-distance":"24px"},onClick:()=>{i("/note-detail")},children:x.jsx(ae,{fontSize:32})})]})};export{Me as Note};
