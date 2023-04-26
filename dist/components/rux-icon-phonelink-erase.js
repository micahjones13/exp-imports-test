import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99998 1H19C20.1 1 21 1.9 21 3V21C21 22.1 20.1 23 19 23H8.99998C7.89998 23 6.99998 22.1 6.99998 21V19C6.99998 18.45 7.44998 18 7.99998 18C8.54998 18 8.99998 18.45 8.99998 19V20H19V4H8.99998V5C8.99998 5.55 8.54998 6 7.99998 6C7.44998 6 6.99998 5.55 6.99998 5V3C6.99998 1.9 7.89998 1 8.99998 1ZM11.5 7.7C11.78 7.42 12.22 7.42 12.5 7.7C12.78 7.98 12.78 8.42 12.5 8.7L8.99998 12.2L12.5 15.7C12.78 15.98 12.78 16.42 12.5 16.7C12.22 16.98 11.78 16.98 11.5 16.7L7.99998 13.2L4.49998 16.7C4.21998 16.98 3.77998 16.98 3.49998 16.7C3.21998 16.42 3.21998 15.98 3.49998 15.7L6.99998 12.2L3.49998 8.7C3.21998 8.42 3.21998 7.98 3.49998 7.7C3.77998 7.42 4.21998 7.42 4.49998 7.7L7.99998 11.2L11.5 7.7Z" fill="currentColor"/></svg>';

const RuxIconPhonelinkErase$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phonelink-erase", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phonelink-erase"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phonelink-erase":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhonelinkErase$1);
      }
      break;
  } });
}

const RuxIconPhonelinkErase = RuxIconPhonelinkErase$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhonelinkErase, defineCustomElement };
