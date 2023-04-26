import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";

const RuxTabPanel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  connectedCallback() {
    this.el.setAttribute('role', 'tabpanel');
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return ruxTabPanelCss; }
}, [1, "rux-tab-panel"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-tab-panel"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-tab-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTabPanel$1);
      }
      break;
  } });
}

const RuxTabPanel = RuxTabPanel$1;
const defineCustomElement = defineCustomElement$1;

export { RuxTabPanel, defineCustomElement };
