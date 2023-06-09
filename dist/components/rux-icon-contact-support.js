import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2C6.81 2 3 5.81 3 10.5C3 15.19 6.81 19 11.5 19H12V22C16.86 19.66 20 15 20 10.5C20 5.81 16.19 2 11.5 2ZM10.5 16.5V14.5H12.5V16.5H10.5ZM12.87 11.77C12.88 11.75 12.89 11.73 12.9 11.72C13.1721 11.3208 13.5513 10.9884 13.9356 10.6515C14.8224 9.87402 15.7369 9.07217 15.43 7.37C15.14 5.68 13.79 4.29 12.1 4.04C10.04 3.74 8.22 5.01 7.67 6.83C7.5 7.41 7.94 8 8.54 8H8.74C9.15 8 9.48 7.71 9.62 7.35C9.94 6.46 10.88 5.85 11.92 6.07C12.88 6.27 13.58 7.22 13.49 8.2C13.4223 8.96354 12.8768 9.38584 12.2715 9.85445C11.8938 10.1469 11.4928 10.4573 11.17 10.88L11.16 10.87C11.1427 10.8873 11.1287 10.9113 11.1142 10.9362C11.1036 10.9544 11.0927 10.9731 11.08 10.99C11.065 11.015 11.0475 11.04 11.03 11.065C11.0125 11.09 10.995 11.115 10.98 11.14C10.89 11.28 10.82 11.42 10.76 11.58C10.755 11.6 10.745 11.615 10.735 11.63C10.725 11.645 10.715 11.66 10.71 11.68C10.7 11.69 10.7 11.7 10.7 11.71C10.58 12.07 10.5 12.5 10.5 13.01H12.51C12.51 12.76 12.54 12.54 12.61 12.33C12.63 12.26 12.66 12.19 12.69 12.12C12.7 12.08 12.71 12.04 12.73 12.01C12.77 11.93 12.82 11.85 12.87 11.77Z" fill="currentColor"/></svg>';

const RuxIconContactSupport$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-contact-support", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-contact-support"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-contact-support":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconContactSupport$1);
      }
      break;
  } });
}

const RuxIconContactSupport = RuxIconContactSupport$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconContactSupport, defineCustomElement };
