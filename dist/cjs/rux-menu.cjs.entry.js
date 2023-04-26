'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxMenuCss = ":host{display:block}";

const RuxMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxMenuSelected = index.createEvent(this, "ruxmenuselected", 7);
  }
  connectedCallback() {
    this.el.addEventListener('click', (e) => {
      this._handleSelected(e.target);
    });
  }
  _handleSelected(item) {
    //prevent code from running if the clicked element was disabled
    if (item.disabled)
      return;
    const menuItems = Array.from(this.el.querySelectorAll('rux-menu-item'));
    menuItems.forEach((el) => {
      el.selected = false;
      if (el === item && !el.disabled) {
        item.selected = true;
        this.ruxMenuSelected.emit(item);
      }
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "rux-menu" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
RuxMenu.style = ruxMenuCss;

exports.rux_menu = RuxMenu;
