import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const ruxMenuCss = ":host{display:block}";

const RuxMenu$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
  static get style() { return ruxMenuCss; }
}, [1, "rux-menu"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxMenu$1);
      }
      break;
  } });
}

const RuxMenu = RuxMenu$1;
const defineCustomElement = defineCustomElement$1;

export { RuxMenu, defineCustomElement };
