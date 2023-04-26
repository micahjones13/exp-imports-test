import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.01L8 1C6.9 1 6 1.9 6 3V17C6 18.1 6.9 19 8 19H16C17.1 19 18 18.1 18 17V3C18 1.9 17.1 1.01 16 1.01ZM9 23H15C15.55 23 16 22.55 16 22C16 21.45 15.55 21 15 21H9C8.45 21 8 21.45 8 22C8 22.55 8.45 23 9 23ZM8 15H16V5H8V15Z" fill="currentColor"/></svg>';

const RuxIconDock$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'auto';
  }
  get iconSize() {
    const sizes = {
      'extra-small': '1rem',
      small: '2rem',
      normal: '3rem',
      large: '4rem',
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    }
    else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize,
    };
    return h("div", { style: style, innerHTML: svgIcon });
  }
}, [0, "rux-icon-dock", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-dock"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-dock":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDock$1);
      }
      break;
  } });
}

const RuxIconDock = RuxIconDock$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDock, defineCustomElement };
