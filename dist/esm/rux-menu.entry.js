import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a1205123.js';

const ruxMenuCss = ":host{display:block}";

const RuxMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxMenuSelected = createEvent(this, "ruxmenuselected", 7);
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
    return (h(Host, null, h("div", { class: "rux-menu" }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
RuxMenu.style = ruxMenuCss;

export { RuxMenu as rux_menu };
