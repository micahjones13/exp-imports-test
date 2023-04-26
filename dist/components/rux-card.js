import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hasSlot } from './utils.js';

const ruxCardCss = ":host{--card-header-padding:var(--spacing-2);--card-footer-padding:var(--spacing-2);--body-padding:var(--card-footer-padding);display:block}.hidden,:host([hidden]){display:none}.rux-card{border:1px solid var(--card-color-border);border-radius:var(--radius-base);background:var(--color-background-base-default);box-shadow:var(--shadow-overlay)}.rux-card__header{padding:var(--card-header-padding);font-family:var(--font-heading-3-font-family);font-size:var(--font-heading-3-font-size);font-weight:var(--font-heading-3-font-weight);letter-spacing:var(--font-heading-3-letter-spacing);line-height:var(--font-heading-3-line-height);box-sizing:border-box;text-align:left}.rux-card__body{padding:var(--body-padding);box-sizing:border-box;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);line-height:var(--font-body-1-line-height);letter-spacing:var(--font-body-1-letter-spacing);text-align:left}.rux-card__footer{padding-left:var(--card-footer-padding);padding-right:var(--card-footer-padding);padding-top:var(--card-footer-padding);padding-bottom:var(--card-footer-padding);box-sizing:border-box;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);line-height:var(--font-body-1-line-height);letter-spacing:var(--font-body-1-letter-spacing);text-align:left}";

const RuxCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.activeSlots = {
      header: false,
      footer: false,
    };
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange(slotName) {
    const show = hasSlot(this.el, slotName);
    this.activeSlots = Object.assign(Object.assign({}, this.activeSlots), { [slotName]: show });
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-card" }, h("div", { class: {
        'rux-card__header': true,
        hidden: !this.activeSlots.header,
      }, part: "header" }, h("slot", { name: "header", onSlotchange: () => this._handleSlotChange('header') })), h("div", { class: "rux-card__body", part: "body" }, h("slot", null)), h("div", { class: {
        'rux-card__footer': true,
        hidden: !this.activeSlots.footer,
      }, part: "footer" }, h("slot", { name: "footer", onSlotchange: () => this._handleSlotChange('footer') })))));
  }
  get el() { return this; }
  static get style() { return ruxCardCss; }
}, [1, "rux-card", {
    "activeSlots": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-card"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxCard$1);
      }
      break;
  } });
}

const RuxCard = RuxCard$1;
const defineCustomElement = defineCustomElement$1;

export { RuxCard, defineCustomElement };
