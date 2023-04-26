import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V7C1 7.55 1.45 8 2 8C2.55 8 3 7.55 3 7V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V18C21 18.55 20.55 19 20 19H15C14.45 19 14 19.45 14 20C14 20.55 14.45 21 15 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM19 16V8C19 7.45 18.55 7 18 7H6C5.45 7 5 7.45 5 8V8.63C8.96 9.91 12.09 13.04 13.37 17H18C18.55 17 19 16.55 19 16ZM1 21V18C2.04 18 2.95 18.52 3.49 19.32C3.81 19.8 4 20.38 4 21H1ZM2.14 14.09C1.54 13.99 1 14.48 1 15.09C1 15.58 1.36 15.99 1.85 16.07C3.93 16.43 5.57 18.07 5.93 20.15C6.01 20.64 6.42 21 6.91 21C7.52 21 8 20.46 7.91 19.86C7.43 16.9 5.09 14.57 2.14 14.09ZM1 11.05C1 10.46 1.51 10 2.1 10.05C7.29 10.57 11.42 14.69 11.95 19.88C12.01 20.47 11.55 20.99 10.95 20.99C10.44 20.99 10.01 20.62 9.96 20.12C9.55 15.85 6.15 12.45 1.88 12.04C1.38 11.99 1 11.56 1 11.05Z" fill="currentColor"/></svg>';

const RuxIconCastConnected$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cast-connected", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cast-connected"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cast-connected":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCastConnected$1);
      }
      break;
  } });
}

const RuxIconCastConnected = RuxIconCastConnected$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCastConnected, defineCustomElement };
