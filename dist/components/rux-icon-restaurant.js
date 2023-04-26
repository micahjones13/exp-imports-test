import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 9H11V3C11 2.45 11.45 2 12 2C12.55 2 13 2.45 13 3V9C13 11.21 11.21 13 9 13V21C9 21.55 8.55 22 8 22C7.45 22 7 21.55 7 21V13C4.79 13 3 11.21 3 9V3C3 2.45 3.45 2 4 2C4.55 2 5 2.45 5 3V9H7V3C7 2.45 7.45 2 8 2C8.55 2 9 2.45 9 3V9ZM18 14C16.9 14 16 13.1 16 12V6C16 4.51 17.6 2.68 19.76 2.15C20.39 2 21 2.48 21 3.13V21C21 21.55 20.55 22 20 22C19.45 22 19 21.55 19 21V14H18Z" fill="currentColor"/></svg>';

const RuxIconRestaurant$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-restaurant", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-restaurant"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-restaurant":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRestaurant$1);
      }
      break;
  } });
}

const RuxIconRestaurant = RuxIconRestaurant$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRestaurant, defineCustomElement };
