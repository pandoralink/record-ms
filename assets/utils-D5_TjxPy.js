function a(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);const e=document.createElement("textarea");return e.value=t,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select(),new Promise((r,o)=>{document.execCommand("copy")?r():o(),e.remove()})}function i(){return(Object.keys(localStorage).reduce((o,n)=>{var c;return o+(((c=localStorage.getItem(n))==null?void 0:c.length)||0)},0)/5242880*100).toFixed(2)+"%"}export{a as c,i as g};