import{r as s}from"./index-BKYHviBL.js";import{b as d,u as l}from"./index-DlGwl23E.js";var p=function(){var n=d(s.useState({}),2),e=n[1];return s.useCallback(function(){return e({})},[])};function x(n){const{value:e,defaultValue:o,onChange:r}=n,c=p(),t=s.useRef(e!==void 0?e:o);e!==void 0&&(t.current=e);const f=l((u,i=!1)=>{const a=typeof u=="function"?u(t.current):u;if(!(!i&&a===t.current))return t.current=a,c(),r==null?void 0:r(a)});return[t.current,f]}export{p as a,x as u};