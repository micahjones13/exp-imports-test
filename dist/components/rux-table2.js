import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableCss = ":host{display:table;width:100%;border-collapse:separate;border-spacing:0;color:var(--color-text-primary);border-bottom:1px solid var(--color-background-base-default);background:var(--color-background-surface-default);text-align:left;overflow:scroll}:host([hidden]){display:none}";

const RuxTable = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return ruxTableCss; }
}, [1, "rux-table"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTable);
      }
      break;
  } });
}

export { RuxTable as R, defineCustomElement as d };
