import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 7.07004L10.25 11L12.5 14C12.83 14.44 12.74 15.07 12.3 15.4C11.86 15.73 11.23 15.65 10.9 15.2C9.84999 13.8 8.58999 12.13 7.79999 11.06C7.39999 10.53 6.59999 10.53 6.19999 11.06L2.19999 16.39C1.70999 17.06 2.17999 18 2.99999 18H21C21.82 18 22.29 17.06 21.8 16.4L14.8 7.07004C14.4 6.53004 13.6 6.53004 13.2 7.07004Z" fill="currentColor"/></svg>';

const RuxIconLandscape$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-landscape", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-landscape"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-landscape":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLandscape$1);
      }
      break;
  } });
}

const RuxIconLandscape = RuxIconLandscape$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLandscape, defineCustomElement };
