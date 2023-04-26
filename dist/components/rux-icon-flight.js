import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 14.58C21 14.22 20.81 13.89 20.51 13.69L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2.49 13.69C2.19 13.88 2 14.22 2 14.58C2 15.28 2.68 15.79 3.36 15.58L10 13.5V19L8.2 20.35C8.07 20.44 8 20.59 8 20.75V21.34C8 21.67 8.32 21.91 8.64 21.82L11.5 21L14.36 21.82C14.68 21.91 15 21.67 15 21.34V20.75C15 20.59 14.93 20.44 14.8 20.35L13 19V13.5L19.64 15.58C20.32 15.79 21 15.28 21 14.58Z" fill="currentColor"/></svg>';

const RuxIconFlight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-flight", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-flight"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-flight":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFlight$1);
      }
      break;
  } });
}

const RuxIconFlight = RuxIconFlight$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFlight, defineCustomElement };
