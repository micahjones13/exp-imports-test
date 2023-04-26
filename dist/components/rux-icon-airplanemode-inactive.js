import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 14.58C21 15.29 20.31 15.79 19.64 15.58L18.65 15.26L10 6.61V3.5C10 2.67 10.67 2 11.5 2C12.33 2 13 2.67 13 3.5V9L20.51 13.69C20.81 13.89 21 14.22 21 14.58ZM20.14 19.59L18.73 21L13 15.27V19L14.8 20.35C14.93 20.44 15 20.59 15 20.75V21.34C15 21.67 14.68 21.91 14.36 21.82L11.5 21L8.64 21.82C8.32 21.91 8 21.67 8 21.34V20.75C8 20.59 8.07 20.44 8.2 20.35L10 19V13.5L3.36 15.58C2.68 15.79 2 15.28 2 14.58C2 14.22 2.19 13.88 2.49 13.7L7.99 10.26L3 5.27L4.41 3.86L20.14 19.59Z" fill="currentColor"/></svg>';

const RuxIconAirplanemodeInactive$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-airplanemode-inactive", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-airplanemode-inactive"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-airplanemode-inactive":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAirplanemodeInactive$1);
      }
      break;
  } });
}

const RuxIconAirplanemodeInactive = RuxIconAirplanemodeInactive$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAirplanemodeInactive, defineCustomElement };
