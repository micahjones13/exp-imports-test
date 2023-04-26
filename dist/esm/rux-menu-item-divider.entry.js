import { r as registerInstance, h } from './index-a1205123.js';

const ruxMenuItemDividerCss = ":host{display:block}:host([hidden]){display:none}li{list-style:none;pointer-events:none;border-top:1px solid var(--menu-divider-color-fill)}.wrapper{padding:var(--spacing-1) var(--spacing-2)}";

const RuxMenuItemDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "wrapper" }, h("li", { role: "separator", part: "container" })));
  }
};
RuxMenuItemDivider.style = ruxMenuItemDividerCss;

export { RuxMenuItemDivider as rux_menu_item_divider };
