import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H15C14.45 21 14 20.55 14 20C14 19.45 14.45 19 15 19H20C20.55 19 21 18.55 21 18V6C21 5.45 20.55 5 20 5H4C3.45 5 3 5.45 3 6V7C3 7.55 2.55 8 2 8C1.45 8 1 7.55 1 7V5C1 3.9 1.9 3 3 3ZM1 15.09C1 14.48 1.54 13.99 2.14 14.09C5.09 14.57 7.43 16.9 7.91 19.86C8 20.46 7.52 21 6.91 21C6.42 21 6.01 20.64 5.93 20.15C5.57 18.07 3.93 16.43 1.85 16.07C1.36 15.99 1 15.58 1 15.09ZM1 18V21H4C4 19.34 2.66 18 1 18ZM1 11.05C1 10.46 1.51 10 2.1 10.05C7.29 10.57 11.42 14.69 11.95 19.88C12.01 20.47 11.55 20.99 10.95 20.99C10.44 20.99 10.01 20.62 9.96 20.12C9.55 15.85 6.15 12.45 1.88 12.04C1.38 11.99 1 11.56 1 11.05Z" fill="currentColor"/></svg>';

const RuxIconCast$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cast", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cast"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cast":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCast$1);
      }
      break;
  } });
}

const RuxIconCast = RuxIconCast$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCast, defineCustomElement };
