import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hasSlot } from './utils.js';

const ruxTagCss = ":host{display:flex;justify-content:center;align-items:center;border-radius:var(--radius-base);font-size:var(--font-body-2-bold-font-size);font-weight:var(--font-body-2-bold-font-weight);line-height:var(--font-body-2-bold-line-height);font-family:var(--font-body-2-bold-font-family);letter-spacing:var(--font-body-2-bold-letter-spacing);padding:0.25rem 0.625rem;text-align:center;color:var(--color-palette-neutral-000)}:host(.is-undefined){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-off);background:var(--color-palette-grey-800);box-shadow:var(--tag-shadow-inner-unknown)}:host([status=pass]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-normal-on-dark);background:var(--color-palette-green-900);box-shadow:var(--tag-shadow-inner-pass)}:host([status=fail]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-critical-on-dark);background:var(--color-palette-red-900);box-shadow:var(--tag-shadow-inner-fail)}:host([status=unknown]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-off-on-dark);background:var(--color-palette-grey-800);box-shadow:var(--tag-shadow-inner-unknown)}";

const statusMap = {
  unknown: 'UNK',
  pass: 'PASS',
  fail: 'FAIL',
};
const RuxTag$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
     */
    this.status = 'unknown';
    this.hasSlot = false;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.hasSlot = hasSlot(this.el);
  }
  _handleSlotChange() {
    this.hasSlot = hasSlot(this.el);
  }
  _getValidStatus() {
    if (this.status) {
      //if it is a valid status, return it
      if (statusMap[this.status]) {
        return statusMap[this.status];
      }
      //if it's not, return the default status
      else {
        return statusMap['unknown'];
      }
    }
  }
  render() {
    return (h(Host, { class: {
        'is-undefined': statusMap[this.status] === undefined,
      } }, h("div", { part: "container" }, h("slot", { onSlotchange: this._handleSlotChange }), !this.hasSlot ? this._getValidStatus() : null)));
  }
  get el() { return this; }
  static get style() { return ruxTagCss; }
}, [1, "rux-tag", {
    "status": [513],
    "hasSlot": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-tag"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-tag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTag$1);
      }
      break;
  } });
}

const RuxTag = RuxTag$1;
const defineCustomElement = defineCustomElement$1;

export { RuxTag, defineCustomElement };
