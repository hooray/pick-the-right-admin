
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as b,u as v,r as C,a as k,ao as d,J as $,s as z,g as B,ac as F,j as c,w as e,e as o,_ as P,a2 as f,h as w,v as M,f as s,i as t,D as N}from"./index-D8kZ2dnq.js";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-DqdzEeBY.js";import{u as S}from"./useMainPage-Dv4Z0Tn-.js";const V={class:"flex-col-center gap-2"},A=b({name:"PageReload",__name:"index",setup(D){const i=v(),l=S(),n=C(!1);k(()=>{d("f5",r=>{i.settings.toolbar.pageReload&&(r.preventDefault(),l.reload())})}),$(()=>{d.unbind("f5")});function m(){n.value=!0,l.reload()}function u(){location.reload()}return(r,a)=>{const _=R,p=w,g=P,x=F;return B(),z(x,{side:"bottom",disabled:c(i).os==="mac"},{content:e(()=>[s("div",V,[s("p",null,[a[2]||(a[2]=t("按住 ",-1)),o(_,null,{default:e(()=>a[1]||(a[1]=[t("Ctrl",-1)])),_:1,__:[1]}),a[3]||(a[3]=t(" 键并点击",-1))]),a[4]||(a[4]=s("p",null,"可切换为浏览器原生刷新",-1))])]),default:e(()=>[o(g,{variant:"ghost",size:"icon",class:"size-9",onClick:[f(m,["exact"]),f(u,["ctrl","exact"])],onAnimationend:a[0]||(a[0]=I=>n.value=!1)},{default:e(()=>[o(p,{name:"i-iconoir:refresh-double",class:M(["size-4",{animation:c(n)}])},null,8,["class"])]),_:1})]),_:1},8,["disabled"])}}}),J=N(A,[["__scopeId","data-v-a9601abd"]]);export{J as default};
