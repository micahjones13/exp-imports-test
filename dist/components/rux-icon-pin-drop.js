import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 11.49 9.62 16.19 11.23 18.12C11.63 18.6 12.36 18.6 12.76 18.12C14.38 16.19 18 11.49 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM6 22C5.45 22 5 21.55 5 21C5 20.45 5.45 20 6 20H18C18.55 20 19 20.45 19 21C19 21.55 18.55 22 18 22H6Z" fill="currentColor"/></svg>';

const RuxIconPinDrop$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pin-drop", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pin-drop"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pin-drop":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPinDrop$1);
      }
      break;
  } });
}

const RuxIconPinDrop = RuxIconPinDrop$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPinDrop, defineCustomElement };
