import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C20.11 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H16C15.45 20 15 19.55 15 19C15 18.45 15.45 18 16 18H19V8H5V18H8C8.55 18 9 18.45 9 19C9 19.55 8.55 20 8 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.89 4 5 4ZM8.86 13.14L11.65 10.35C11.84 10.16 12.16 10.16 12.35 10.36L15.14 13.15C15.46 13.46 15.24 14 14.79 14H13V19C13 19.55 12.55 20 12 20C11.45 20 11 19.55 11 19V14H9.21C8.76 14 8.54 13.46 8.86 13.14Z" fill="currentColor"/></svg>';

const RuxIconOpenInBrowser$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-open-in-browser", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-open-in-browser"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-open-in-browser":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconOpenInBrowser$1);
      }
      break;
  } });
}

const RuxIconOpenInBrowser = RuxIconOpenInBrowser$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconOpenInBrowser, defineCustomElement };
