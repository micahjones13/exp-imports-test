import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6ZM13 16H15C15.55 16 16 15.55 16 15C16 14.45 15.55 14 15 14H13V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V14H9C8.45 14 8 14.45 8 15C8 15.55 8.45 16 9 16H11V18C11 18.55 11.45 19 12 19C12.55 19 13 18.55 13 18V16Z" fill="currentColor"/></svg>';

const RuxIconEnhancedEncryption$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-enhanced-encryption", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-enhanced-encryption"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-enhanced-encryption":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEnhancedEncryption$1);
      }
      break;
  } });
}

const RuxIconEnhancedEncryption = RuxIconEnhancedEncryption$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEnhancedEncryption, defineCustomElement };
