import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableHeaderCellCss = ":host{display:table-cell;vertical-align:middle;background:var(--color-background-surface-header);color:var(--color-text-primary);font-family:var(--font-heading-5-font-family);font-size:var(--font-heading-5-font-size);font-weight:var(--font-heading-5-font-weight);letter-spacing:var(--font-heading-5-letter-spacing);line-height:var(--font-heading-5-line-height);padding:var(--spacing-0) var(--spacing-2);height:var(--spacing-10);white-space:nowrap}:host([hidden]){display:none}";

const RuxTableHeaderCell = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return ruxTableHeaderCellCss; }
}, [1, "rux-table-header-cell"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table-header-cell"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table-header-cell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTableHeaderCell);
      }
      break;
  } });
}

export { RuxTableHeaderCell as R, defineCustomElement as d };
