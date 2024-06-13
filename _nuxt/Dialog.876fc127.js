import{au as ht,S,F as Ge,Z as x,X as k,V as C,s as h,x as m,a as O,y as L,Y as D,v as re,av as gt,aw as bt,ax as yt,H as wt,h as ne,b as Pe,o as Te,c as Et,i as V,f as X,u as W,e as fe,$ as Ue,P as St,t as Le,A as Fe}from"./entry.b980ff2a.js";function N(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,N),l}var pe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(pe||{}),H=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(H||{});function B({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var a;let i=Ye(l,n),o=Object.assign(r,{props:i});if(e||t&2&&i.static)return $e(o);if(t&1){let s=(a=i.unmount)==null||a?0:1;return N(s,{[0](){return null},[1](){return $e({...r,props:{...i,hidden:!0,style:{display:"none"}}})}})}return $e(o)}function $e({props:e,attrs:t,slots:n,slot:l,name:r}){var a,i;let{as:o,...s}=Xe(e,["unmount","static"]),u=(a=n.default)==null?void 0:a.call(n,l),d={};if(l){let p=!1,c=[];for(let[f,v]of Object.entries(l))typeof v=="boolean"&&(p=!0),v===!0&&c.push(f);p&&(d["data-headlessui-state"]=c.join(" "))}if(o==="template"){if(u=Ke(u??[]),Object.keys(s).length>0||Object.keys(t).length>0){let[p,...c]=u??[];if(!Tt(p)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map(g=>g.trim()).filter((g,E,I)=>I.indexOf(g)===E).sort((g,E)=>g.localeCompare(E)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let f=Ye((i=p.props)!=null?i:{},s),v=ht(p,f);for(let g in f)g.startsWith("on")&&(v.props||(v.props={}),v.props[g]=f[g]);return v}return Array.isArray(u)&&u.length===1?u[0]:u}return S(o,Object.assign({},s,d),{default:()=>u})}function Ke(e){return e.flatMap(t=>t.type===Ge?Ke(t.children):[t])}function Ye(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...a){let i=n[l];for(let o of i){if(r instanceof Event&&r.defaultPrevented)return;o(r,...a)}}});return t}function $n(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Xe(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function Tt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Lt=0;function Ft(){return++Lt}function he(){return Ft()}var Qe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Qe||{});function y(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let Ze=Symbol("Context");var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function $t(){return Me()!==null}function Me(){return x(Ze,null)}function Ot(e){k(Ze,e)}var At=Object.defineProperty,Pt=(e,t,n)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ve=(e,t,n)=>(Pt(e,typeof t!="symbol"?t+"":t,n),n);class xt{constructor(){Ve(this,"current",this.detect()),Ve(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ae=new xt;function Q(e){if(ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=y(e);if(t)return t.ownerDocument}return document}let xe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(R||{}),Je=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Je||{}),Ct=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ct||{});function kt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(xe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var et=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(et||{});function Dt(e,t=0){var n;return e===((n=Q(e))==null?void 0:n.body)?!1:N(t,{[0](){return e.matches(xe)},[1](){let l=e;for(;l!==null;){if(l.matches(xe))return!0;l=l.parentElement}return!1}})}var Nt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Nt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function G(e){e?.focus({preventScroll:!0})}let Bt=["textarea","input"].join(",");function jt(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,Bt))!=null?n:!1}function Mt(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),a=t(l);if(r===null||a===null)return 0;let i=r.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ve(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e?.ownerDocument)!=null?a:document,o=Array.isArray(e)?n?Mt(e):e:kt(e);r.length>0&&o.length>1&&(o=o.filter(v=>!r.includes(v))),l=l??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(l))-1;if(t&4)return Math.max(0,o.indexOf(l))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},p=0,c=o.length,f;do{if(p>=c||p+c<=0)return 0;let v=u+p;if(t&16)v=(v+c)%c;else{if(v<0)return 3;if(v>=c)return 1}f=o[v],f?.focus(d),p+=s}while(f!==i.activeElement);return t&6&&jt(f)&&f.select(),2}function We(e,t,n){ae.isServer||C(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function tt(e,t,n){ae.isServer||C(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Rt(e,t,n=m(()=>!0)){function l(a,i){if(!n.value||a.defaultPrevented)return;let o=i(a);if(o===null||!o.getRootNode().contains(o))return;let s=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let u of s){if(u===null)continue;let d=u instanceof HTMLElement?u:y(u);if(d!=null&&d.contains(o)||a.composed&&a.composedPath().includes(d))return}return!Dt(o,et.Loose)&&o.tabIndex!==-1&&a.preventDefault(),t(a,o)}let r=h(null);We("mousedown",a=>{var i,o;n.value&&(r.value=((o=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:o[0])||a.target)},!0),We("click",a=>{r.value&&(l(a,()=>r.value),r.value=null)},!0),tt("blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var me=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(me||{});let Ce=O({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:l,...r}=e,a={"aria-hidden":(l&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return B({ourProps:a,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function nt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ht(){return/Android/gi.test(window.navigator.userAgent)}function On(){return nt()||Ht()}function ge(){let e=[],t={addEventListener(n,l,r,a){return n.addEventListener(l,r,a),t.add(()=>n.removeEventListener(l,r,a))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},style(n,l,r){let a=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:a})})},group(n){let l=ge();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}var le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(le||{});function It(){let e=h(0);return tt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function lt(e,t,n,l){ae.isServer||C(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}function rt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Ut(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function at(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var ot=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ot||{});let ee=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:h(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=h(null);l({el:r,$el:r});let a=m(()=>Q(r)),i=h(!1);L(()=>i.value=!0),D(()=>i.value=!1),Wt({ownerDocument:a},m(()=>i.value&&!!(e.features&16)));let o=_t({ownerDocument:a,container:r,initialFocus:m(()=>e.initialFocus)},m(()=>i.value&&!!(e.features&2)));qt({ownerDocument:a,container:r,containers:e.containers,previousActiveElement:o},m(()=>i.value&&!!(e.features&8)));let s=It();function u(f){let v=y(r);v&&(g=>g())(()=>{N(s.value,{[le.Forwards]:()=>{ve(v,R.First,{skipElements:[f.relatedTarget]})},[le.Backwards]:()=>{ve(v,R.Last,{skipElements:[f.relatedTarget]})}})})}let d=h(!1);function p(f){f.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(f){if(!i.value)return;let v=at(e.containers);y(r)instanceof HTMLElement&&v.add(y(r));let g=f.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&(it(v,g)||(d.value?ve(y(r),N(s.value,{[le.Forwards]:()=>R.Next,[le.Backwards]:()=>R.Previous})|R.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&G(f.target)))}return()=>{let f={},v={ref:r,onKeydown:p,onFocusout:c},{features:g,initialFocus:E,containers:I,...$}=e;return S(Ge,[!!(g&4)&&S(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:me.Focusable}),B({ourProps:v,theirProps:{...t,...$},slot:f,attrs:t,slots:n,name:"FocusTrap"}),!!(g&4)&&S(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:me.Focusable})])}}}),{features:ot}),q=[];Ut(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&q[0]!==t.target&&(q.unshift(t.target),q=q.filter(n=>n!=null&&n.isConnected),q.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Vt(e){let t=h(q.slice());return re([e],([n],[l])=>{l===!0&&n===!1?rt(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=q.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Wt({ownerDocument:e},t){let n=Vt(t);L(()=>{C(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&G(n())},{flush:"post"})}),D(()=>{t.value&&G(n())})}function _t({ownerDocument:e,container:t,initialFocus:n},l){let r=h(null),a=h(!1);return L(()=>a.value=!0),D(()=>a.value=!1),L(()=>{re([t,n,l],(i,o)=>{if(i.every((u,d)=>o?.[d]===u)||!l.value)return;let s=y(t);s&&rt(()=>{var u,d;if(!a.value)return;let p=y(n),c=(u=e.value)==null?void 0:u.activeElement;if(p){if(p===c){r.value=c;return}}else if(s.contains(c)){r.value=c;return}p?G(p):ve(s,R.First|R.NoScroll)===Je.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function qt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var a;lt((a=e.value)==null?void 0:a.defaultView,"focus",i=>{if(!r.value)return;let o=at(n);y(t)instanceof HTMLElement&&o.add(y(t));let s=l.value;if(!s)return;let u=i.target;u&&u instanceof HTMLElement?it(o,u)?(l.value=u,G(u)):(i.preventDefault(),i.stopPropagation(),G(s)):G(l.value)},!0)}function it(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=new Map,te=new Map;function _e(e,t=h(!0)){C(n=>{var l;if(!t.value)return;let r=y(e);if(!r)return;n(function(){var i;if(!r)return;let o=(i=te.get(r))!=null?i:1;if(o===1?te.delete(r):te.set(r,o-1),o!==1)return;let s=Oe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Oe.delete(r))});let a=(l=te.get(r))!=null?l:0;te.set(r,a+1),a===0&&(Oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let ut=Symbol("ForcePortalRootContext");function zt(){return x(ut,!1)}let qe=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return k(ut,e.force),()=>{let{force:l,...r}=e;return B({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Gt(e){let t=Q(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Kt=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=h(null),r=m(()=>Q(l)),a=zt(),i=x(st,null),o=h(a===!0||i==null?Gt(l.value):i.resolveTarget());C(()=>{a||i!=null&&(o.value=i.resolveTarget())});let s=x(ke,null);return L(()=>{let u=y(l);u&&s&&D(s.register(u))}),D(()=>{var u,d;let p=(u=r.value)==null?void 0:u.getElementById("headlessui-portal-root");p&&o.value===p&&o.value.children.length<=0&&((d=o.value.parentElement)==null||d.removeChild(o.value))}),()=>{if(o.value===null)return null;let u={ref:l,"data-headlessui-portal":""};return S(gt,{to:o.value},B({ourProps:u,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),ke=Symbol("PortalParentContext");function Yt(){let e=x(ke,null),t=h([]);function n(a){return t.value.push(a),e&&e.register(a),()=>l(a)}function l(a){let i=t.value.indexOf(a);i!==-1&&t.value.splice(i,1),e&&e.unregister(a)}let r={register:n,unregister:l,portals:t};return[t,O({name:"PortalWrapper",setup(a,{slots:i}){return k(ke,r),()=>{var o;return(o=i.default)==null?void 0:o.call(i)}}})]}let st=Symbol("PortalGroupContext"),Xt=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=bt({resolveTarget(){return e.target}});return k(st,l),()=>{let{target:r,...a}=e;return B({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),dt=Symbol("StackContext");var De=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(De||{});function Qt(){return x(dt,()=>{})}function Zt({type:e,enabled:t,element:n,onUpdate:l}){let r=Qt();function a(...i){l?.(...i),r(...i)}L(()=>{re(t,(i,o)=>{i?a(0,e,n):o===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),D(()=>{t.value&&a(1,e,n)}),k(dt,a)}let Jt=Symbol("DescriptionContext");function en({slot:e=h({}),name:t="Description",props:n={}}={}){let l=h([]);function r(a){return l.value.push(a),()=>{let i=l.value.indexOf(a);i!==-1&&l.value.splice(i,1)}}return k(Jt,{register:r,slot:e,name:t,props:n}),m(()=>l.value.length>0?l.value.join(" "):void 0)}function tn(e){let t=yt(e.getSnapshot());return D(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function nn(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...a){let i=t[r].call(n,...a);i&&(n=i,l.forEach(o=>o()))}}}function ln(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,a=e-r;n.style(l,"paddingRight",`${a}px`)}}}function rn(){if(!nt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function r(i){return l.containers.flatMap(o=>o()).some(o=>o.contains(i))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",i=>{if(i.target instanceof HTMLElement)try{let o=i.target.closest("a");if(!o)return;let{hash:s}=new URL(o.href),u=t.querySelector(s);u&&!r(u)&&(a=u)}catch{}},!0),n.addEventListener(t,"touchmove",i=>{i.target instanceof HTMLElement&&!r(i.target)&&i.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function an(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function on(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let z=nn(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ge(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:on(n)},r=[rn(),ln(),an()];r.forEach(({before:a})=>a?.(l)),r.forEach(({after:a})=>a?.(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});z.subscribe(()=>{let e=z.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&z.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&z.dispatch("TEARDOWN",n)}});function un(e,t,n){let l=tn(z),r=m(()=>{let a=e.value?l.value.get(e.value):void 0;return a?a.count>0:!1});return re([e,t],([a,i],[o],s)=>{if(!a||!i)return;z.dispatch("PUSH",a,n);let u=!1;s(()=>{u||(z.dispatch("POP",o??a,n),u=!0)})},{immediate:!0}),r}function sn({defaultContainers:e=[],portals:t}={}){let n=h(null),l=Q(n);function r(){var a;let i=[];for(let o of e)o!==null&&(o instanceof HTMLElement?i.push(o):"value"in o&&o.value instanceof HTMLElement&&i.push(o.value));if(t!=null&&t.value)for(let o of t.value)i.push(o);for(let o of(a=l?.querySelectorAll("html > *, body > *"))!=null?a:[])o!==document.body&&o!==document.head&&o instanceof HTMLElement&&o.id!=="headlessui-portal-root"&&(o.contains(y(n))||i.some(s=>o.contains(s))||i.push(o));return i}return{resolveContainers:r,contains(a){return r().some(i=>i.contains(a))},mainTreeNodeRef:n,MainTreeNode(){return S(Ce,{features:me.Hidden,ref:n})}}}var dn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(dn||{});let Ne=Symbol("DialogContext");function Re(e){let t=x(Ne,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Re),n}return t}let de="DC8F892D-2EBD-447C-A4C8-A03058436FF4",cn=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:de},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${he()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var a;let i=h(!1);L(()=>{i.value=!0});let o=h(0),s=Me(),u=m(()=>e.open===de&&s!==null?(s.value&F.Open)===F.Open:e.open),d=h(null),p=m(()=>Q(d));if(r({el:d,$el:d}),!(e.open!==de||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===de?void 0:e.open}`);let c=m(()=>i.value&&u.value?0:1),f=m(()=>c.value===0),v=m(()=>o.value>1),g=x(Ne,null)!==null,[E,I]=Yt(),{resolveContainers:$,mainTreeNodeRef:U,MainTreeNode:oe}=sn({portals:E,defaultContainers:[m(()=>{var b;return(b=T.panelRef.value)!=null?b:d.value})]}),ie=m(()=>v.value?"parent":"leaf"),Z=m(()=>s!==null?(s.value&F.Closing)===F.Closing:!1),ye=m(()=>g||Z.value?!1:f.value),ue=m(()=>{var b,w,A;return(A=Array.from((w=(b=p.value)==null?void 0:b.querySelectorAll("body > *"))!=null?w:[]).find(P=>P.id==="headlessui-portal-root"?!1:P.contains(y(U))&&P instanceof HTMLElement))!=null?A:null});_e(ue,ye);let we=m(()=>v.value?!0:f.value),Ee=m(()=>{var b,w,A;return(A=Array.from((w=(b=p.value)==null?void 0:b.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(P=>P.contains(y(U))&&P instanceof HTMLElement))!=null?A:null});_e(Ee,we),Zt({type:"Dialog",enabled:m(()=>c.value===0),element:d,onUpdate:(b,w)=>{if(w==="Dialog")return N(b,{[De.Add]:()=>o.value+=1,[De.Remove]:()=>o.value-=1})}});let Se=en({name:"DialogDescription",slot:m(()=>({open:u.value}))}),K=h(null),T={titleId:K,panelRef:h(null),dialogState:c,setTitleId(b){K.value!==b&&(K.value=b)},close(){t("close",!1)}};k(Ne,T);let J=m(()=>!(!f.value||v.value));Rt($,(b,w)=>{T.close(),wt(()=>w?.focus())},J);let j=m(()=>!(v.value||c.value!==0));lt((a=p.value)==null?void 0:a.defaultView,"keydown",b=>{j.value&&(b.defaultPrevented||b.key===Qe.Escape&&(b.preventDefault(),b.stopPropagation(),T.close()))});let Y=m(()=>!(Z.value||c.value!==0||g));return un(p,Y,b=>{var w;return{containers:[...(w=b.containers)!=null?w:[],$]}}),C(b=>{if(c.value!==0)return;let w=y(d);if(!w)return;let A=new ResizeObserver(P=>{for(let se of P){let M=se.target.getBoundingClientRect();M.x===0&&M.y===0&&M.width===0&&M.height===0&&T.close()}});A.observe(w),b(()=>A.disconnect())}),()=>{let{id:b,open:w,initialFocus:A,...P}=e,se={...n,ref:d,id:b,role:"dialog","aria-modal":c.value===0?!0:void 0,"aria-labelledby":K.value,"aria-describedby":Se.value},M={open:c.value===0};return S(qe,{force:!0},()=>[S(Kt,()=>S(Xt,{target:d.value},()=>S(qe,{force:!1},()=>S(ee,{initialFocus:A,containers:$,features:f.value?N(ie.value,{parent:ee.features.RestoreFocus,leaf:ee.features.All&~ee.features.FocusLock}):ee.features.None},()=>S(I,{},()=>B({ourProps:se,theirProps:{...P,...n},slot:M,attrs:n,slots:l,visible:c.value===0,features:pe.RenderStrategy|pe.Static,name:"Dialog"})))))),S(oe)])}}}),fn=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${he()}`}},setup(e,{attrs:t,slots:n,expose:l}){let r=Re("DialogPanel");l({el:r.panelRef,$el:r.panelRef});function a(i){i.stopPropagation()}return()=>{let{id:i,...o}=e,s={id:i,ref:r.panelRef,onClick:a};return B({ourProps:s,theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),vn=O({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${he()}`}},setup(e,{attrs:t,slots:n}){let l=Re("DialogTitle");return L(()=>{l.setTitleId(e.id),D(()=>l.setTitleId(null))}),()=>{let{id:r,...a}=e;return B({ourProps:{id:r},theirProps:a,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function pn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ae(e,...t){e&&t.length>0&&e.classList.add(...t)}function ce(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Be=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Be||{});function mn(e,t){let n=ge();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[a,i]=[l,r].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function ze(e,t,n,l,r,a){let i=ge(),o=a!==void 0?pn(a):()=>{};return ce(e,...r),Ae(e,...t,...n),i.nextFrame(()=>{ce(e,...n),Ae(e,...l),i.add(mn(e,s=>(ce(e,...l,...t),Ae(e,...r),o(s))))}),i.add(()=>ce(e,...t,...n,...l,...r)),i.add(()=>o("cancelled")),i.dispose}function _(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let He=Symbol("TransitionContext");var hn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(hn||{});function gn(){return x(He,null)!==null}function bn(){let e=x(He,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function yn(){let e=x(Ie,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ie=Symbol("NestingContext");function be(e){return"children"in e?be(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ct(e){let t=h([]),n=h(!1);L(()=>n.value=!0),D(()=>n.value=!1);function l(a,i=H.Hidden){let o=t.value.findIndex(({id:s})=>s===a);o!==-1&&(N(i,{[H.Unmount](){t.value.splice(o,1)},[H.Hidden](){t.value[o].state="hidden"}}),!be(t)&&n.value&&e?.())}function r(a){let i=t.value.find(({id:o})=>o===a);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:a,state:"visible"}),()=>l(a,H.Unmount)}return{children:t,register:r,unregister:l}}let ft=pe.RenderStrategy,je=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){let a=h(0);function i(){a.value|=F.Opening,t("beforeEnter")}function o(){a.value&=~F.Opening,t("afterEnter")}function s(){a.value|=F.Closing,t("beforeLeave")}function u(){a.value&=~F.Closing,t("afterLeave")}if(!gn()&&$t())return()=>S(vt,{...e,onBeforeEnter:i,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},l);let d=h(null),p=m(()=>e.unmount?H.Unmount:H.Hidden);r({el:d,$el:d});let{show:c,appear:f}=bn(),{register:v,unregister:g}=yn(),E=h(c.value?"visible":"hidden"),I={value:!0},$=he(),U={value:!1},oe=ct(()=>{!U.value&&E.value!=="hidden"&&(E.value="hidden",g($),u())});L(()=>{let T=v($);D(T)}),C(()=>{if(p.value===H.Hidden&&$){if(c.value&&E.value!=="visible"){E.value="visible";return}N(E.value,{hidden:()=>g($),visible:()=>v($)})}});let ie=_(e.enter),Z=_(e.enterFrom),ye=_(e.enterTo),ue=_(e.entered),we=_(e.leave),Ee=_(e.leaveFrom),Se=_(e.leaveTo);L(()=>{C(()=>{if(E.value==="visible"){let T=y(d);if(T instanceof Comment&&T.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function K(T){let J=I.value&&!f.value,j=y(d);!j||!(j instanceof HTMLElement)||J||(U.value=!0,c.value&&i(),c.value||s(),T(c.value?ze(j,ie,Z,ye,ue,Y=>{U.value=!1,Y===Be.Finished&&o()}):ze(j,we,Ee,Se,ue,Y=>{U.value=!1,Y===Be.Finished&&(be(oe)||(E.value="hidden",g($),u()))})))}return L(()=>{re([c],(T,J,j)=>{K(j),I.value=!1},{immediate:!0})}),k(Ie,oe),Ot(m(()=>N(E.value,{visible:F.Open,hidden:F.Closed})|a.value)),()=>{let{appear:T,show:J,enter:j,enterFrom:Y,enterTo:b,entered:w,leave:A,leaveFrom:P,leaveTo:se,...M}=e,pt={ref:d},mt={...M,...f.value&&c.value&&ae.isServer?{class:ne([n.class,M.class,...ie,...Z])}:{}};return B({theirProps:mt,ourProps:pt,slot:{},slots:l,attrs:n,features:ft,visible:E.value==="visible",name:"TransitionChild"})}}}),wn=je,vt=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let r=Me(),a=m(()=>e.show===null&&r!==null?(r.value&F.Open)===F.Open:e.show);C(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=h(a.value?"visible":"hidden"),o=ct(()=>{i.value="hidden"}),s=h(!0),u={show:a,appear:m(()=>e.appear||!s.value)};return L(()=>{C(()=>{s.value=!1,a.value?i.value="visible":be(o)||(i.value="hidden")})}),k(Ie,o),k(He,u),()=>{let d=Xe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return B({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(wn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...p,...d},l.default)]},attrs:{},features:ft,visible:i.value==="visible",name:"Transition"})}}});const En=O({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const l=h(!1);return L(()=>{l.value=!0}),r=>{if(l.value)return t.default?.();const a=t.fallback||t.placeholder;if(a)return a();const i=r.fallback||r.placeholder||"",o=r.fallbackTag||r.placeholderTag||"span";return Pe(o,n,i)}}}),Sn=fe("div",{class:"fixed inset-0 bg-black/50","aria-hidden":"true"},null,-1),Tn={class:"fixed inset-0 overflow-y-auto"},Ln={class:"flex min-h-full items-center justify-center p-4"},An={__name:"Dialog",props:{visible:{type:Boolean,default:!1},cancelButtonText:{type:String,default:"Cancel"},showCancelButton:{type:Boolean,default:!0},confirmButtonText:{type:String,default:"Confirm"},showConfirmButton:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,default:"md"},buttonAlign:{type:String,default:"right"}},emits:["update:visible","confirm","close","cancel"],setup(e,{emit:t}){const n=e,l=h(null);function r(o){t("update:visible",o)}function a(o,s){t("close",s)}function i(){r(!1),t("cancel")}return(o,s)=>{const u=En;return Te(),Et(u,null,{default:V(()=>[X(W(vt),{appear:"",show:n.visible,as:"template",static:!0},{default:V(()=>[X(W(cn),{initialFocus:W(l),onClose:a,as:"div",class:"relative z-10"},{default:V(()=>[X(W(je),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:V(()=>[Sn]),_:1}),fe("div",Tn,[fe("div",Ln,[X(W(je),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:V(()=>[X(W(fn),{class:ne(["w-full transform overflow-hidden rounded-md bg-white p-6 text-left align-middle text-base shadow-xl transition-all dark:bg-slate-700",{"max-w-xs":e.size==="xs","max-w-sm":e.size==="sm","max-w-md":e.size==="md","max-w-lg":e.size==="lg","max-w-xl":e.size==="xl"}])},{default:V(()=>[n.title?Ue(o.$slots,"title",{key:0,title:n.title},()=>[X(W(vn),{as:"h3",class:"mb-6 text-xl font-medium leading-6"},{default:V(()=>[St(Le(n.title),1)]),_:1})]):Fe("",!0),Ue(o.$slots,"content"),fe("div",{class:ne(["flex",{"justify-start":e.buttonAlign==="left","justify-end":e.buttonAlign==="right"}])},[e.showConfirmButton?(Te(),Pe("button",{key:0,type:"button",class:ne(["active:opacity-8 button button-theme",{"mr-4":e.buttonAlign==="left","ml-4":e.buttonAlign==="right"}]),ref_key:"completeButtonRef",ref:l,onClick:s[0]||(s[0]=d=>t("confirm"))},Le(n.confirmButtonText),3)):Fe("",!0),e.showCancelButton?(Te(),Pe("button",{key:1,type:"button",class:ne(["active:opacity-8 button button-sub",{"mr-4":e.buttonAlign==="left","ml-4":e.buttonAlign==="right"}]),onClick:i},Le(n.cancelButtonText),3)):Fe("",!0)],2)]),_:3},8,["class"])]),_:3})])])]),_:3},8,["initialFocus"])]),_:3},8,["show"])]),_:3})}}};export{Rt as F,B as H,$n as K,pe as N,Mt as O,vt as S,Xe as T,An as _,me as a,Qe as b,Ot as c,En as d,Ce as f,et as h,F as l,Q as m,On as n,y as o,Me as p,ge as r,he as t,N as u,Dt as w};
