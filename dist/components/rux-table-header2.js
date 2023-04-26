import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableHeaderCss = ":host{display:table-header-group;box-shadow:0 0.25rem 0.5rem rgba(0, 0, 0, 0.45);border-top-width:1px;border-top-style:solid;border-top-color:var(--color-background-surface-default)}:host([hidden]){display:none}";

const RuxTableHeader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return ruxTableHeaderCss; }
}, [1, "rux-table-header"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table-header"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTableHeader);
      }
      break;
  } });
}

export { RuxTableHeader as R, defineCustomElement as d };
