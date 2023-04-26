import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H18V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V3H8V2C8 1.45 7.55 1 7 1C6.45 1 6 1.45 6 2V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM16 10.53C15.71 10.24 15.23 10.24 14.94 10.53L10.59 14.88L9 13.29C8.71 13 8.23 13 7.94 13.29C7.65 13.58 7.65 14.06 7.94 14.35L9.88 16.29C10.27 16.68 10.9 16.68 11.29 16.29L15.99 11.59C16.29 11.3 16.29 10.82 16 10.53ZM6 19H18C18.55 19 19 18.55 19 18V8H5V18C5 18.55 5.45 19 6 19Z" fill="currentColor"/></svg>';

const RuxIconEventAvailable$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-event-available", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-event-available"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-event-available":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEventAvailable$1);
      }
      break;
  } });
}

const RuxIconEventAvailable = RuxIconEventAvailable$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEventAvailable, defineCustomElement };
