import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableBodyCss = ":host{display:table-row-group}:host([hidden]){display:none}";

const RuxTableBody = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return ruxTableBodyCss; }
}, [1, "rux-table-body"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table-body"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table-body":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTableBody);
      }
      break;
  } });
}

export { RuxTableBody as R, defineCustomElement as d };
