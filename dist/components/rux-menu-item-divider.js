import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const ruxMenuItemDividerCss = ":host{display:block}:host([hidden]){display:none}li{list-style:none;pointer-events:none;border-top:1px solid var(--menu-divider-color-fill)}.wrapper{padding:var(--spacing-1) var(--spacing-2)}";

const RuxMenuItemDivider$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "wrapper" }, h("li", { role: "separator", part: "container" })));
  }
  static get style() { return ruxMenuItemDividerCss; }
}, [1, "rux-menu-item-divider"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-menu-item-divider"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-menu-item-divider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxMenuItemDivider$1);
      }
      break;
  } });
}

const RuxMenuItemDivider = RuxMenuItemDivider$1;
const defineCustomElement = defineCustomElement$1;

export { RuxMenuItemDivider, defineCustomElement };
