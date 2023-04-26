import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM9 11.5C9 12.33 8.33 13 7.5 13H5.5V14.25C5.5 14.66 5.16 15 4.75 15C4.34 15 4 14.66 4 14.25V10C4 9.45 4.45 9 5 9H7.5C8.33 9 9 9.67 9 10.5V11.5ZM11.75 15C12.16 15 12.5 14.66 12.5 14.25V9.75C12.5 9.34 12.16 9 11.75 9C11.34 9 11 9.34 11 9.75V14.25C11 14.66 11.34 15 11.75 15ZM20 14.21C20 14.65 19.65 15 19.21 15C18.96 15 18.72 14.88 18.57 14.67L16.26 11.5V14.38C16.26 14.72 15.98 15 15.64 15H15.63C15.28 15 15 14.72 15 14.38V9.83C15 9.37 15.37 9 15.83 9C16.1 9 16.35 9.13 16.5 9.35L18.75 12.5V9.62C18.75 9.28 19.03 9 19.37 9H19.38C19.72 9 20 9.28 20 9.62V14.21ZM7.5 10.5H5.5V11.5H7.5V10.5Z" fill="currentColor"/></svg>';

const RuxIconFiberPin$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-fiber-pin", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-fiber-pin"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-fiber-pin":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFiberPin$1);
      }
      break;
  } });
}

const RuxIconFiberPin = RuxIconFiberPin$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFiberPin, defineCustomElement };
