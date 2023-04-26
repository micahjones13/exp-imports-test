import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableHeaderRowCss = ":host{display:table-row}:host([hidden]){display:none}";

const RuxTableHeaderRow = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return ruxTableHeaderRowCss; }
}, [1, "rux-table-header-row"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table-header-row"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table-header-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTableHeaderRow);
      }
      break;
  } });
}

export { RuxTableHeaderRow as R, defineCustomElement as d };
