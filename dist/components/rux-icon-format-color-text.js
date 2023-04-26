import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.63 3.93L6.06 15.58C5.79 16.26 6.29 17 7.03 17C7.46 17 7.85 16.73 8.01 16.32L8.87 14H15.12L15.99 16.32C16.14 16.73 16.53 17 16.97 17C17.7 17 18.21 16.26 17.94 15.58L13.37 3.93C13.14 3.37 12.6 3 12 3C11.4 3 10.85 3.37 10.63 3.93ZM9.62 12L12 5.67L14.38 12H9.62ZM24 22C24 20.9 23.1 20 22 20H2C0.9 20 0 20.9 0 22C0 23.1 0.9 24 2 24H22C23.1 24 24 23.1 24 22Z" fill="currentColor"/></svg>';

const RuxIconFormatColorText$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-color-text", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-color-text"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-color-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatColorText$1);
      }
      break;
  } });
}

const RuxIconFormatColorText = RuxIconFormatColorText$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatColorText, defineCustomElement };
