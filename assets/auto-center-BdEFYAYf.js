import{_ as C}from"./index-DklZIr0F.js";import{R as s,r as o}from"./index-CaUIdpB1.js";import{r as w}from"./spin-loading-o5f0fPj1.js";import{w as y}from"./with-default-props-BZQsUyOg.js";function g(l){const R=s.forwardRef((t,a)=>{const[b,f]=o.useState(!1),d=o.useRef(!1),[n,E]=o.useState(l),v=o.useRef(0);o.useEffect(()=>{d.current?m():f(!0)},[]);function p(){var r,e;d.current=!0,f(!1),(e=(r=n.props).onClose)===null||e===void 0||e.call(r)}function m(){var r,e;u(),(e=(r=n.props).afterClose)===null||e===void 0||e.call(r)}return o.useImperativeHandle(a,()=>({close:p,replace:r=>{var e,i;v.current++,(i=(e=n.props).afterClose)===null||i===void 0||i.call(e),E(r)}})),s.cloneElement(n,Object.assign(Object.assign({},n.props),{key:v.current,visible:b,onClose:p,afterClose:m}))}),c=s.createRef(),u=w(s.createElement(R,{ref:c}));return{close:()=>C(this,void 0,void 0,function*(){var t;c.current?(t=c.current)===null||t===void 0||t.close():u()}),replace:t=>{var a;(a=c.current)===null||a===void 0||a.replace(t)}}}const _="adm-auto-center",j=l=>y(l,s.createElement("div",{className:_},s.createElement("div",{className:`${_}-content`},l.children)));export{j as A,g as r};