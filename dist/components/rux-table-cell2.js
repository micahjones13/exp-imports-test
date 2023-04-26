import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableCellCss = ":host{display:table-cell;vertical-align:middle;border-width:0 0 1px 0;border-style:solid;border-color:var(--color-background-base-default);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--font-body-1-line-height);padding:var(--spacing-0) var(--spacing-2);height:calc(var(--spacing-8) - 1px);white-space:nowrap}::slotted(*){vertical-align:middle}:host([hidden]){display:none}";

const RuxTableCell = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return ruxTableCellCss; }
}, [1, "rux-table-cell"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table-cell"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table-cell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTableCell);
      }
      break;
  } });
}

export { RuxTableCell as R, defineCustomElement as d };
