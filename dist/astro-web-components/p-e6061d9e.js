import{h as a}from"./p-3aed6e85.js";const e=({notifications:e})=>a("div",{class:"rux-advanced-status__badge "+(e>0?"":"rux-advanced-status__hidden"),part:"monitoring-badge"},e&&(a=>{const e=Math.floor(a);if(e<=0)return null;const s=Math.floor(e/1e3%1e3),t=e/1e6%1e6,n=e/1e9%1e9,l=e/1e12%1e12;let d=e.toString();return a>1e12||l>=1?d="∞":n>=1?d=`${n.toFixed(1).toString()}B`:t>=1?d=`${t.toFixed(1).toString()}M`:s>=1&&(d=`${s}K`),d})(e)),s=({label:e,sublabel:s})=>a("div",{class:"rux-advanced-status__label",part:"monitoring-label"},a("span",null,e),a("span",{class:"rux-advanced-status__sublabel "+(s?"":"rux-advanced-status__hidden"),part:"monitoring-sublabel"},s));export{s as M,e as a}