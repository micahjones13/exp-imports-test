const t=t=>!!t.shadowRoot&&!!t.attachShadow;function n(t,n){return n?null!==t.querySelector(`[slot="${n}"]`):[...t.childNodes].some((t=>{var n;if(t.nodeType===t.TEXT_NODE&&""!==(null===(n=null==t?void 0:t.textContent)||void 0===n?void 0:n.trim()))return!0;if(t.nodeType===t.ELEMENT_NODE){const n=t;if(!n.hasAttribute("slot")&&"hidden"!==n.getAttribute("type"))return!0}return!1}))}const e=(n,e,u,i,l,s)=>{let o=e.querySelector("input.aux-input");(n||t(e))&&(s||null==s?(o||(o=e.ownerDocument.createElement("input"),o.type="hidden",o.classList.add("aux-input"),e.appendChild(o)),o.disabled=l,o.name=u,o.value=i||""):o&&o.remove())},u=(n,e,u,i,l)=>{let s=e.querySelectorAll("input.aux-select");if(s)for(const t of s)t.remove();if(n||t(e))if(Array.isArray(i))for(const t in i){let n=e.ownerDocument.createElement("input");n.type="hidden",n.classList.add("aux-select"),n.classList.add(`aux-select-${t}`),n.disabled=l,n.name=u,i[t]&&(n.value=i[t]),e.appendChild(n)}else{let t=e.ownerDocument.createElement("input");t.type="hidden",t.classList.add("aux-select"),t.classList.add("aux-select-0"),t.disabled=l,t.name=u,i&&(t.value=i),e.appendChild(t)}};export{u as a,t as b,n as h,e as r}