import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 6V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6H16ZM10 4H14V6H10V4ZM9 9.83V17.07C9 17.47 9.45 17.7 9.78 17.48L15.81 13.46C16.13 13.25 16.1 12.78 15.77 12.6L9.74 9.39C9.4 9.21 9 9.45 9 9.83Z" fill="currentColor"/></svg>';

const RuxIconShop$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-shop", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-shop"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-shop":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconShop$1);
      }
      break;
  } });
}

const RuxIconShop = RuxIconShop$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconShop, defineCustomElement };
