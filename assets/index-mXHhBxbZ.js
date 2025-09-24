
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c}from"./index-D8kZ2dnq.js";const l=/\d/,d=["-","_","/","."];function m(t=""){if(!l.test(t))return t!==t.toLowerCase()}function C(t,s){const r=d,n=[];if(!t||typeof t!="string")return n;let e="",o,u;for(const i of t){const a=r.includes(i);if(a===!0){n.push(e),e="",o=void 0;continue}const p=m(i);if(u===!1){if(o===!1&&p===!0){n.push(e),e=i,o=p;continue}if(o===!0&&p===!1&&e.length>1){const f=e.at(-1);n.push(e.slice(0,Math.max(0,e.length-1))),e=f+i,o=p;continue}}e+=i,o=p,u=a}return n.push(e),n}function h(t){return t?t[0].toUpperCase()+t.slice(1):""}function S(t,s){return t?(Array.isArray(t)?t:C(t)).map(r=>h(r)).join(""):""}function v(t){const s=Object.assign({}),r="./".concat(S(t),"/index.vue"),n=s[r];return n||{default:c({name:"SlotsInvalidComponent",render:()=>null})}}function R(t){const s=v(t);return c(s.default)}export{R as u};
