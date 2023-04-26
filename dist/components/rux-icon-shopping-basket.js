import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 9.00005H17.21L12.82 2.43005C12.42 1.84005 11.55 1.84005 11.16 2.43005L6.77 9.00005H2C1.45 9.00005 1 9.45005 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45005 22.55 9.00005 22 9.00005ZM11.99 4.79005L14.8 9.00005H9.18L11.99 4.79005ZM10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15Z" fill="currentColor"/></svg>';

const RuxIconShoppingBasket$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-shopping-basket", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-shopping-basket"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-shopping-basket":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconShoppingBasket$1);
      }
      break;
  } });
}

const RuxIconShoppingBasket = RuxIconShoppingBasket$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconShoppingBasket, defineCustomElement };
