'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxMenuItemDividerCss = ":host{display:block}:host([hidden]){display:none}li{list-style:none;pointer-events:none;border-top:1px solid var(--menu-divider-color-fill)}.wrapper{padding:var(--spacing-1) var(--spacing-2)}";

const RuxMenuItemDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "wrapper" }, index.h("li", { role: "separator", part: "container" })));
  }
};
RuxMenuItemDivider.style = ruxMenuItemDividerCss;

exports.rux_menu_item_divider = RuxMenuItemDivider;
