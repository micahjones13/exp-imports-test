import{r as t,h as a,H as r,g as e}from"./p-3aed6e85.js";const i=class{constructor(a){t(this,a),this.selected=!1,this.disabled=!1,this.small=!1}connectedCallback(){var t,a;(null===(a=null===(t=this.el)||void 0===t?void 0:t.parentElement)||void 0===a?void 0:a.getAttributeNode("small"))&&this.el.setAttribute("small","")}_clickHandler(t){this.disabled&&t.stopImmediatePropagation()}render(){return a(r,{onClick:this._clickHandler},a("div",{part:"container",class:{"rux-tab":!0,"rux-tab--selected":this.selected,"rux-tab--small":this.small,"rux-tab--large":!this.small,"rux-tab--disabled":this.disabled},role:"tab",tabindex:this.disabled||!this.selected?"-1":"0"},a("slot",null)))}get el(){return e(this)}};i.style=":host{display:contents}.rux-tab{box-sizing:border-box;display:flex;align-items:center;justify-content:center;margin:0;min-width:5rem;text-decoration:none;color:var(--color-background-interactive-default);border-bottom:var(--border-width-lg) solid transparent;cursor:pointer}.rux-tab:hover{color:var(--color-background-interactive-hover)}.rux-tab:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset);border-radius:var(--focus-radius)}:host([hidden]){display:none}:host span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.rux-tab--large{font-family:var(--font-heading-2-font-family);font-size:var(--font-heading-2-font-size);letter-spacing:var(--font-heading-2-letter-spacing);font-weight:var(--font-heading-2-font-weight);line-height:var(--font-heading-2-line-height);padding:var(--spacing-6) var(--spacing-3);height:var(--spacing-20)}.rux-tab--small{font-family:var(--font-heading-5-font-family);font-size:var(--font-heading-5-font-size);letter-spacing:var(--font-heading-5-letter-spacing);font-weight:var(--font-heading-5-font-weight);line-height:var(--font-heading-5-line-height);padding:var(--spacing-4) var(--spacing-3);height:calc(var(--spacing-16) - var(--spacing-1));min-width:5rem}.rux-tab--large.rux-tab--selected{border-color:var(--color-border-interactive-default)}.rux-tab--small.rux-tab--selected{border-bottom:var(--border-width-lg) solid var(--color-border-interactive-default)}.rux-tab--selected{color:var(--color-text-primary)}.rux-tab--disabled{color:var(--color-text-interactive-default);opacity:var(--opacity-disabled);cursor:not-allowed}.rux-tab--disabled:hover{color:var(--color-text-interactive-default);opacity:var(--opacity-disabled)}";export{i as rux_tab}