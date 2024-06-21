import{R as P}from"./index-BzfneoA9.js";function nt(s,t,e){return Math.max(t,Math.min(s,e))}const l={toVector(s,t){return s===void 0&&(s=t),Array.isArray(s)?s:[s,s]},add(s,t){return[s[0]+t[0],s[1]+t[1]]},sub(s,t){return[s[0]-t[0],s[1]-t[1]]},addTo(s,t){s[0]+=t[0],s[1]+=t[1]},subTo(s,t){s[0]-=t[0],s[1]-=t[1]}};function C(s,t,e){return t===0||Math.abs(t)===1/0?Math.pow(s,e*5):s*t*e/(t+e*s)}function L(s,t,e,i=.15){return i===0?nt(s,t,e):s<t?-C(t-s,e-t,i)+t:s>e?+C(s-e,e-t,i)+e:s}function ot(s,[t,e],[i,r]){const[[n,o],[c,f]]=s;return[L(t,n,o,i),L(e,c,f,r)]}function at(s,t){if(typeof s!="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var i=e.call(s,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function ct(s){var t=at(s,"string");return typeof t=="symbol"?t:String(t)}function d(s,t,e){return t=ct(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function M(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),e.push.apply(e,i)}return e}function u(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?M(Object(e),!0).forEach(function(i){d(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}const G={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function K(s){return s?s[0].toUpperCase()+s.slice(1):""}const ut=["enter","leave"];function ft(s=!1,t){return s&&!ut.includes(t)}function ht(s,t="",e=!1){const i=G[s],r=i&&i[t]||t;return"on"+K(s)+K(r)+(ft(e,r)?"Capture":"")}const lt=["gotpointercapture","lostpointercapture"];function dt(s){let t=s.substring(2).toLowerCase();const e=!!~t.indexOf("passive");e&&(t=t.replace("passive",""));const i=lt.includes(t)?"capturecapture":"capture",r=!!~t.indexOf(i);return r&&(t=t.replace("capture","")),{device:t,capture:r,passive:e}}function pt(s,t=""){const e=G[s],i=e&&e[t]||t;return s+i}function A(s){return"touches"in s}function N(s){return A(s)?"touch":"pointerType"in s?s.pointerType:"mouse"}function mt(s){return Array.from(s.touches).filter(t=>{var e,i;return t.target===s.currentTarget||((e=s.currentTarget)===null||e===void 0||(i=e.contains)===null||i===void 0?void 0:i.call(e,t.target))})}function gt(s){return s.type==="touchend"||s.type==="touchcancel"?s.changedTouches:s.targetTouches}function X(s){return A(s)?gt(s)[0]:s}function _t(s){return mt(s).map(t=>t.identifier)}function O(s){const t=X(s);return A(s)?t.identifier:t.pointerId}function R(s){const t=X(s);return[t.clientX,t.clientY]}const B=40,j=800;function yt(s){let{deltaX:t,deltaY:e,deltaMode:i}=s;return i===1?(t*=B,e*=B):i===2&&(t*=j,e*=j),[t,e]}function vt(s){const t={};if("buttons"in s&&(t.buttons=s.buttons),"shiftKey"in s){const{shiftKey:e,altKey:i,metaKey:r,ctrlKey:n}=s;Object.assign(t,{shiftKey:e,altKey:i,metaKey:r,ctrlKey:n})}return t}function D(s,...t){return typeof s=="function"?s(...t):s}function bt(){}function wt(...s){return s.length===0?bt:s.length===1?s[0]:function(){let t;for(const e of s)t=e.apply(this,arguments)||t;return t}}function U(s,t){return Object.assign({},t,s||{})}const Tt=32;class Et{constructor(t,e,i){this.ctrl=t,this.args=e,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:i,args:r}=this;e[i]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=r,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,i=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=i.from?D(i.from,e):e.offset,e.offset=e.lastOffset,e.startTime=e.timeStamp=t.timeStamp)}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:i,shared:r}=this;e.args=this.args;let n=0;if(t&&(e.event=t,i.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,vt(t)),r.down=r.pressed=r.buttons%2===1||r.touches>0,n=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const _=e._delta.map(Math.abs);l.addTo(e._distance,_)}this.axisIntent&&this.axisIntent(t);const[o,c]=e._movement,[f,h]=i.threshold,{_step:a,values:g}=e;if(i.hasCustomTransform?(a[0]===!1&&(a[0]=Math.abs(o)>=f&&g[0]),a[1]===!1&&(a[1]=Math.abs(c)>=h&&g[1])):(a[0]===!1&&(a[0]=Math.abs(o)>=f&&Math.sign(o)*f),a[1]===!1&&(a[1]=Math.abs(c)>=h&&Math.sign(c)*h)),e.intentional=a[0]!==!1||a[1]!==!1,!e.intentional)return;const p=[0,0];if(i.hasCustomTransform){const[_,rt]=g;p[0]=a[0]!==!1?_-a[0]:0,p[1]=a[1]!==!1?rt-a[1]:0}else p[0]=a[0]!==!1?o-a[0]:0,p[1]=a[1]!==!1?c-a[1]:0;this.restrictToAxis&&!e._blocked&&this.restrictToAxis(p);const w=e.offset,T=e._active&&!e._blocked||e.active;T&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=r[this.ingKey]=e._active,t&&(e.first&&("bounds"in i&&(e._bounds=D(i.bounds,e)),this.setup&&this.setup()),e.movement=p,this.computeOffset()));const[E,k]=e.offset,[[I,tt],[et,st]]=e._bounds;e.overflow=[E<I?-1:E>tt?1:0,k<et?-1:k>st?1:0],e._movementBound[0]=e.overflow[0]?e._movementBound[0]===!1?e._movement[0]:e._movementBound[0]:!1,e._movementBound[1]=e.overflow[1]?e._movementBound[1]===!1?e._movement[1]:e._movementBound[1]:!1;const it=e._active?i.rubberband||[0,0]:[0,0];if(e.offset=ot(e._bounds,e.offset,it),e.delta=l.sub(e.offset,w),this.computeMovement(),T&&(!e.last||n>Tt)){e.delta=l.sub(e.offset,w);const _=e.delta.map(Math.abs);l.addTo(e.distance,_),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&n>0&&(e.velocity=[_[0]/n,_[1]/n],e.timeDelta=n)}}emit(){const t=this.state,e=this.shared,i=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!i.triggerAllEvents)return;const r=this.handler(u(u(u({},e),t),{},{[this.aliasKey]:t.values}));r!==void 0&&(t.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function kt([s,t],e){const i=Math.abs(s),r=Math.abs(t);if(i>r&&i>e)return"x";if(r>i&&r>e)return"y"}class F extends Et{constructor(...t){super(...t),d(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=l.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=l.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const e=this.state,i=this.config;if(!e.axis&&t){const r=typeof i.axisThreshold=="object"?i.axisThreshold[N(t)]:i.axisThreshold;e.axis=kt(e._movement,r)}e._blocked=(i.lockDirection||!!i.axis)&&!e.axis||!!i.axis&&i.axis!==e.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const St=s=>s,V=.15,z={enabled(s=!0){return s},eventOptions(s,t,e){return u(u({},e.shared.eventOptions),s)},preventDefault(s=!1){return s},triggerAllEvents(s=!1){return s},rubberband(s=0){switch(s){case!0:return[V,V];case!1:return[0,0];default:return l.toVector(s)}},from(s){if(typeof s=="function")return s;if(s!=null)return l.toVector(s)},transform(s,t,e){const i=s||e.shared.transform;return this.hasCustomTransform=!!i,i||St},threshold(s){return l.toVector(s,0)}},Dt=0,v=u(u({},z),{},{axis(s,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},axisThreshold(s=Dt){return s},bounds(s={}){if(typeof s=="function")return n=>v.bounds(s(n));if("current"in s)return()=>s.current;if(typeof HTMLElement=="function"&&s instanceof HTMLElement)return s;const{left:t=-1/0,right:e=1/0,top:i=-1/0,bottom:r=1/0}=s;return[[t,e],[i,r]]}}),H={ArrowRight:(s,t=1)=>[s*t,0],ArrowLeft:(s,t=1)=>[-1*s*t,0],ArrowUp:(s,t=1)=>[0,-1*s*t],ArrowDown:(s,t=1)=>[0,s*t]};class At extends F{constructor(...t){super(...t),d(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),i=t.currentTarget.getBoundingClientRect(),r={left:e.left-i.left+t.offset[0],right:e.right-i.right+t.offset[0],top:e.top-i.top+t.offset[1],bottom:e.bottom-i.bottom+t.offset[1]};t._bounds=v.bounds(r)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,i=this.state;if(t.buttons!=null&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):e.pointerButtons!==-1&&e.pointerButtons!==t.buttons))return;const r=this.ctrl.setEventIds(t);e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(r&&r.size>1&&i._pointerActive)&&(this.start(t),this.setupPointer(t),i._pointerId=O(t),i._pointerActive=!0,this.computeValues(R(t)),this.computeInitial(),e.preventScrollAxis&&N(t)!=="mouse"?(i._active=!1,this.setupScrollPrevention(t)):e.delay>0?(this.setupDelayTrigger(t),e.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,i=this.config;if(!e._pointerActive)return;const r=O(t);if(e._pointerId!==void 0&&r!==e._pointerId)return;const n=R(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=l.sub(n,e._values),this.computeValues(n)),l.addTo(e._movement,e._delta),this.compute(t),e._delayed&&e.intentional){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(i.preventScrollAxis&&!e._preventScroll)if(e.axis)if(e.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const e=this.state,i=this.config;if(!e._active||!e._pointerActive)return;const r=O(t);if(e._pointerId!==void 0&&r!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[n,o]=e._distance;if(e.tap=n<=i.tapsThreshold&&o<=i.tapsThreshold,e.tap&&i.filterTaps)e._force=!0;else{const[c,f]=e._delta,[h,a]=e._movement,[g,p]=i.swipe.velocity,[w,T]=i.swipe.distance,E=i.swipe.duration;if(e.elapsedTime<E){const k=Math.abs(c/e.timeDelta),I=Math.abs(f/e.timeDelta);k>g&&Math.abs(h)>w&&(e.swipe[0]=Math.sign(c)),I>p&&Math.abs(a)>T&&(e.swipe[1]=Math.sign(f))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config,i=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,It(t);const e=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",e),this.eventStore.add(this.sharedConfig.window,"touch","cancel",e),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const e=H[t.key];if(e){const i=this.state,r=t.shiftKey?10:t.altKey?.1:1;this.start(t),i._delta=e(this.config.keyboardDisplacement,r),i._keyboardActive=!0,l.addTo(i._movement,i._delta),this.compute(t),this.emit()}}keyUp(t){t.key in H&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function It(s){"persist"in s&&typeof s.persist=="function"&&s.persist()}const b=typeof window<"u"&&window.document&&window.document.createElement;function $(){return b&&"ontouchstart"in window}function Pt(){return $()||b&&window.navigator.maxTouchPoints>1}function Ot(){return b&&"onpointerdown"in window}function xt(){return b&&"exitPointerLock"in window.document}function Ct(){try{return"constructor"in GestureEvent}catch{return!1}}const m={isBrowser:b,gesture:Ct(),touch:$(),touchscreen:Pt(),pointer:Ot(),pointerLock:xt()},Lt=250,Mt=180,Kt=.5,Rt=50,Bt=250,jt=10,Y={mouse:0,touch:0,pen:8},Ut=u(u({},v),{},{device(s,t,{pointer:{touch:e=!1,lock:i=!1,mouse:r=!1}={}}){return this.pointerLock=i&&m.pointerLock,m.touch&&e?"touch":this.pointerLock?"mouse":m.pointer&&!r?"pointer":m.touch?"touch":"mouse"},preventScrollAxis(s,t,{preventScroll:e}){if(this.preventScrollDelay=typeof e=="number"?e:e||e===void 0&&s?Lt:void 0,!(!m.touchscreen||e===!1))return s||(e!==void 0?"y":void 0)},pointerCapture(s,t,{pointer:{capture:e=!0,buttons:i=1,keys:r=!0}={}}){return this.pointerButtons=i,this.keys=r,!this.pointerLock&&this.device==="pointer"&&e},threshold(s,t,{filterTaps:e=!1,tapsThreshold:i=3,axis:r=void 0}){const n=l.toVector(s,e?i:r?1:0);return this.filterTaps=e,this.tapsThreshold=i,n},swipe({velocity:s=Kt,distance:t=Rt,duration:e=Bt}={}){return{velocity:this.transform(l.toVector(s)),distance:this.transform(l.toVector(t)),duration:e}},delay(s=0){switch(s){case!0:return Mt;case!1:return 0;default:return s}},axisThreshold(s){return s?u(u({},Y),s):Y},keyboardDisplacement(s=jt){return s}});function Vt(s){const[t,e]=s.overflow,[i,r]=s._delta,[n,o]=s._direction;(t<0&&i>0&&n<0||t>0&&i<0&&n>0)&&(s._movement[0]=s._movementBound[0]),(e<0&&r>0&&o<0||e>0&&r<0&&o>0)&&(s._movement[1]=s._movementBound[1])}u(u({},z),{},{device(s,t,{shared:e,pointer:{touch:i=!1}={}}){if(e.target&&!m.touch&&m.gesture)return"gesture";if(m.touch&&i)return"touch";if(m.touchscreen){if(m.pointer)return"pointer";if(m.touch)return"touch"}},bounds(s,t,{scaleBounds:e={},angleBounds:i={}}){const r=o=>{const c=U(D(e,o),{min:-1/0,max:1/0});return[c.min,c.max]},n=o=>{const c=U(D(i,o),{min:-1/0,max:1/0});return[c.min,c.max]};return typeof e!="function"&&typeof i!="function"?[r(),n()]:o=>[r(o),n(o)]},threshold(s,t,e){return this.lockDirection=e.axis==="lock",l.toVector(s,this.lockDirection?[.1,3]:0)},modifierKey(s){return s===void 0?"ctrlKey":s},pinchOnWheel(s=!0){return s}});u(u({},v),{},{mouseOnly:(s=!0)=>s});class Ht extends F{constructor(...t){super(...t),d(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const e=this.state;e._delta=yt(t),l.addTo(e._movement,e._delta),Vt(e),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const Yt=v;u(u({},v),{},{mouseOnly:(s=!0)=>s});const q=new Map,x=new Map;function J(s){q.set(s.key,s.engine),x.set(s.key,s.resolver)}const Wt={key:"drag",engine:At,resolver:Ut},Gt={key:"wheel",engine:Ht,resolver:Yt};function Nt(s,t){if(s==null)return{};var e={},i=Object.keys(s),r,n;for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(e[r]=s[r]);return e}function Xt(s,t){if(s==null)return{};var e=Nt(s,t),i,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(r=0;r<n.length;r++)i=n[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(s,i)&&(e[i]=s[i])}return e}const Ft={target(s){if(s)return()=>"current"in s?s.current:s},enabled(s=!0){return s},window(s=m.isBrowser?window:void 0){return s},eventOptions({passive:s=!0,capture:t=!1}={}){return{passive:s,capture:t}},transform(s){return s}},zt=["target","eventOptions","window","enabled","transform"];function S(s={},t){const e={};for(const[i,r]of Object.entries(t))switch(typeof r){case"function":e[i]=r.call(e,s[i],i,s);break;case"object":e[i]=S(s[i],r);break;case"boolean":r&&(e[i]=s[i]);break}return e}function $t(s,t,e={}){const i=s,{target:r,eventOptions:n,window:o,enabled:c,transform:f}=i,h=Xt(i,zt);if(e.shared=S({target:r,eventOptions:n,window:o,enabled:c,transform:f},Ft),t){const a=x.get(t);e[t]=S(u({shared:e.shared},h),a)}else for(const a in h){const g=x.get(a);g&&(e[a]=S(u({shared:e.shared},h[a]),g))}return e}class Q{constructor(t,e){d(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=e}add(t,e,i,r,n){const o=this._listeners,c=pt(e,i),f=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},h=u(u({},f),n);t.addEventListener(c,r,h);const a=()=>{t.removeEventListener(c,r,h),o.delete(a)};return o.add(a),a}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class qt{constructor(){d(this,"_timeouts",new Map)}add(t,e,i=140,...r){this.remove(t),this._timeouts.set(t,window.setTimeout(e,i,...r))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class Jt{constructor(t){d(this,"gestures",new Set),d(this,"_targetEventStore",new Q(this)),d(this,"gestureEventStores",{}),d(this,"gestureTimeoutStores",{}),d(this,"handlers",{}),d(this,"config",{}),d(this,"pointerIds",new Set),d(this,"touchIds",new Set),d(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Qt(this,t)}setEventIds(t){if(A(t))return this.touchIds=new Set(_t(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=$t(t,e,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,i={};let r;if(!(e.target&&(r=e.target(),!r))){if(e.enabled){for(const o of this.gestures){const c=this.config[o],f=W(i,c.eventOptions,!!r);if(c.enabled){const h=q.get(o);new h(this,t,o).bind(f)}}const n=W(i,e.eventOptions,!!r);for(const o in this.nativeHandlers)n(o,"",c=>this.nativeHandlers[o](u(u({},this.state.shared),{},{event:c,args:t})),void 0,!0)}for(const n in i)i[n]=wt(...i[n]);if(!r)return i;for(const n in i){const{device:o,capture:c,passive:f}=dt(n);this._targetEventStore.add(r,o,"",i[n],{capture:c,passive:f})}}}}function y(s,t){s.gestures.add(t),s.gestureEventStores[t]=new Q(s,t),s.gestureTimeoutStores[t]=new qt}function Qt(s,t){t.drag&&y(s,"drag"),t.wheel&&y(s,"wheel"),t.scroll&&y(s,"scroll"),t.move&&y(s,"move"),t.pinch&&y(s,"pinch"),t.hover&&y(s,"hover")}const W=(s,t,e)=>(i,r,n,o={},c=!1)=>{var f,h;const a=(f=o.capture)!==null&&f!==void 0?f:t.capture,g=(h=o.passive)!==null&&h!==void 0?h:t.passive;let p=c?i:ht(i,r,a);e&&g&&(p+="Passive"),s[p]=s[p]||[],s[p].push(n)};function Z(s,t={},e,i){const r=P.useMemo(()=>new Jt(s),[]);if(r.applyHandlers(s,i),r.applyConfig(t,e),P.useEffect(r.effect.bind(r)),P.useEffect(()=>r.clean.bind(r),[]),t.target===void 0)return r.bind.bind(r)}function te(s,t){return J(Wt),Z({drag:s},t||{},"drag")}function ee(s,t){return J(Gt),Z({wheel:s},t||{},"wheel")}export{ee as a,te as u};
