import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.87 5.86L20.65 8.65C20.84 8.84 20.84 9.16 20.64 9.35L17.86 12.14C17.55 12.46 17.01 12.24 17.01 11.79V10H11C10.45 10 10 9.55 10 9C10 8.45 10.45 8 11 8H17.02V6.21C17.02 5.77 17.56 5.54 17.87 5.86ZM3.36003 14.65L6.14003 11.86C6.45003 11.54 6.99003 11.76 6.99003 12.21V14H13C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16H6.99003V17.8C6.99003 18.24 6.45003 18.47 6.14003 18.15L3.36003 15.36C3.17003 15.16 3.17003 14.85 3.36003 14.65Z" fill="currentColor"/></svg>';

const RuxIconSwapHoriz$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-swap-horiz", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-swap-horiz"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-swap-horiz":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSwapHoriz$1);
      }
      break;
  } });
}

const RuxIconSwapHoriz = RuxIconSwapHoriz$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSwapHoriz, defineCustomElement };
