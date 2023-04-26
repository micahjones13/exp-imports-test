import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 5H21.9C22.49 5 22.95 5.51 22.89 6.1L21.35 21.53C21.25 22.35 20.56 23 19.72 23H18.02L18 15C18 10.77 14.9 8.16 11.22 7.31L11.1 6.1C11.05 5.51 11.51 5 12.1 5H16V2C16 1.45 16.45 1 17 1C17.55 1 18 1.45 18 2V5ZM15 21C15.55 21 16 21.45 16 22C16 22.55 15.55 23 15 23H2C1.45 23 1 22.55 1 22C1 21.45 1.45 21 2 21H15ZM14.9 15C15.52 15 16.01 14.44 15.89 13.84C15.24 10.61 11.87 8.99 8.5 8.99C5.13 8.99 1.77 10.61 1.11 13.84C0.99 14.44 1.49 15 2.1 15H14.9ZM1 18C1 17.45 1.45 17 2 17H15C15.55 17 16 17.45 16 18C16 18.55 15.55 19 15 19H2C1.45 19 1 18.55 1 18Z" fill="currentColor"/></svg>';

const RuxIconFastfood$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-fastfood", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-fastfood"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-fastfood":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFastfood$1);
      }
      break;
  } });
}

const RuxIconFastfood = RuxIconFastfood$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFastfood, defineCustomElement };
