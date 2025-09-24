
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,c,g as i,f as s,t as p,L as l,v as m,b as u}from"./index-D8kZ2dnq.js";const d={class:"breadcrumb-item flex items-center text-foreground"},f={class:"separator mx-2"},x=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=u();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(o,_)=>(i(),c("div",d,[s("span",f,p(o.separator),1),s("span",{class:m(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[l(o.$slots,"default")],2)]))}});export{x as _};
