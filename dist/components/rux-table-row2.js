import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxTableRowCss = ":host{display:table-row}:host([hidden]){display:none}:host(.is-selected){background:var(--color-background-surface-selected)}:host(.is-selected) ::slotted(rux-table-cell){border-color:var(--color-background-base-default)}:host(:hover:not(.is-selected)){background:var(--color-background-surface-hover);color:var(--color-text-primary)}";

const RuxTableRow = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Changes the background color of the row. Can be applied to multiple rows at once.
     */
    this.selected = false;
  }
  render() {
    return (h(Host, { class: {
        'is-selected': this.selected,
      } }, h("slot", null)));
  }
  static get style() { return ruxTableRowCss; }
}, [1, "rux-table-row", {
    "selected": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-table-row"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-table-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTableRow);
      }
      break;
  } });
}

export { RuxTableRow as R, defineCustomElement as d };
