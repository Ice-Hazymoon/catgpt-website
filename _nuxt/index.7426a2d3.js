import{_ as f}from"./Navbar.0f0e4624.js";import{_ as u}from"./nuxt-link.60028201.js";import{_ as g}from"./Container.856f971b.js";import{L as v,s as x,y as b,z as k,k as y,o as i,b as l,f as e,i as r,e as t,u as n,F as w,r as I,t as d}from"./entry.b980ff2a.js";import{I as A}from"./IconDatabase.6f9359c4.js";import{I as L}from"./IconSquareRoundedPlus.e2c27dfe.js";import{I as z}from"./IconClock.d5411577.js";import"./Dialog.876fc127.js";import"./index.b7543822.js";import"./LoadingSvg.54a92436.js";const B={class:"page-tools"},C=t("span",null,"AI 工具集",-1),D=t("div",{class:"mb-4 flex items-center text-xl font-bold"},[t("div",null,"工具列表：")],-1),N={class:"-mx-2 mt-4"},S={class:"group inline-block w-full p-2 align-top sm:w-1/2 lg:w-1/3"},$={class:"flex h-36 items-center justify-center rounded-md border border-gray-300 p-4 text-3xl text-gray-500 ring-2 ring-theme ring-offset-transparent transition-all hover:border-transparent hover:bg-theme-50 hover:ring-offset-1 group-hover:text-theme dark:border-slate-700 dark:text-inherit dark:hover:bg-theme-900 dark:hover:ring-theme-700"},F=t("div",{class:"ml-2"},"创建",-1),P={class:"h-36 rounded-md border border-gray-300 p-4 ring-2 ring-theme ring-offset-transparent transition-all hover:border-transparent hover:bg-theme-50 hover:ring-offset-1 dark:border-slate-700 dark:hover:bg-theme-900 dark:hover:ring-theme-700"},V={class:"text-lg font-bold"},j={class:"mt-2 line-clamp-2 h-12"},q={class:"mt-2 flex text-xs text-gray-500"},E={class:"mr-3 flex items-center"},H={class:"ml-1"},Y={__name:"index",setup(M){v({title:"AI 工具集",meta:[{hid:"description",name:"description",content:"AI 工具集"}]});const c=x([]);return b(async()=>{const _=(await k()).filter(o=>o.startsWith("tool-")),a=await Promise.all(_.map(async o=>await y(o)));c.value=a}),(h,_)=>{const a=f,o=u,m=g;return i(),l("div",B,[e(a,{shadow:"",fixed:""},{"nav-center":r(()=>[e(n(A)),C]),_:1}),t("main",null,[e(m,null,{default:r(()=>[D,t("div",N,[t("div",S,[e(o,{to:"/tools/editor",class:"w-full"},{default:r(()=>[t("div",$,[e(n(L),{size:36}),F])]),_:1})]),(i(!0),l(w,null,I(n(c),(s,p)=>(i(),l("div",{class:"inline-block w-full p-2 align-top sm:w-1/2 lg:w-1/3",key:p},[e(o,{to:`/tools/editor?id=${s.id}`,class:"w-full"},{default:r(()=>[t("div",P,[t("div",V,d(s.title),1),t("div",j,d(s.desc),1),t("div",q,[t("div",E,[e(n(z),{size:12}),t("span",H,d(new Date(s.createdAt).toLocaleString()),1)])])])]),_:2},1032,["to"])]))),128))])]),_:1})])])}}};export{Y as default};
