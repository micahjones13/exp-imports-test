import{r as a,h as t,H as o,g as r}from"./p-3aed6e85.js";import{h as d}from"./p-12583e0d.js";const e=class{constructor(t){a(this,t),this.activeSlots={header:!1,footer:!1}}connectedCallback(){this._handleSlotChange=this._handleSlotChange.bind(this)}_handleSlotChange(a){const t=d(this.el,a);this.activeSlots=Object.assign(Object.assign({},this.activeSlots),{[a]:t})}render(){return t(o,null,t("div",{class:"rux-card"},t("div",{class:{"rux-card__header":!0,hidden:!this.activeSlots.header},part:"header"},t("slot",{name:"header",onSlotchange:()=>this._handleSlotChange("header")})),t("div",{class:"rux-card__body",part:"body"},t("slot",null)),t("div",{class:{"rux-card__footer":!0,hidden:!this.activeSlots.footer},part:"footer"},t("slot",{name:"footer",onSlotchange:()=>this._handleSlotChange("footer")}))))}get el(){return r(this)}};e.style=":host{--card-header-padding:var(--spacing-2);--card-footer-padding:var(--spacing-2);--body-padding:var(--card-footer-padding);display:block}.hidden,:host([hidden]){display:none}.rux-card{border:1px solid var(--card-color-border);border-radius:var(--radius-base);background:var(--color-background-base-default);box-shadow:var(--shadow-overlay)}.rux-card__header{padding:var(--card-header-padding);font-family:var(--font-heading-3-font-family);font-size:var(--font-heading-3-font-size);font-weight:var(--font-heading-3-font-weight);letter-spacing:var(--font-heading-3-letter-spacing);line-height:var(--font-heading-3-line-height);box-sizing:border-box;text-align:left}.rux-card__body{padding:var(--body-padding);box-sizing:border-box;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);line-height:var(--font-body-1-line-height);letter-spacing:var(--font-body-1-letter-spacing);text-align:left}.rux-card__footer{padding-left:var(--card-footer-padding);padding-right:var(--card-footer-padding);padding-top:var(--card-footer-padding);padding-bottom:var(--card-footer-padding);box-sizing:border-box;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);line-height:var(--font-body-1-line-height);letter-spacing:var(--font-body-1-letter-spacing);text-align:left}";export{e as rux_card}