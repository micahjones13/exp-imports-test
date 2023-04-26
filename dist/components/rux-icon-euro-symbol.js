import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18.5C12.49 18.5 10.32 17.08 9.24 15H14C14.55 15 15 14.55 15 14C15 13.45 14.55 13 14 13H8.58C8.53 12.67 8.5 12.34 8.5 12C8.5 11.66 8.53 11.33 8.58 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H9.24C10.32 6.92 12.5 5.5 15 5.5C16.25 5.5 17.42 5.86 18.42 6.47C18.92 6.78 19.57 6.73 19.99 6.31C20.57 5.73 20.44 4.78 19.74 4.35C18.36 3.5 16.73 3 15 3C11.08 3 7.76 5.51 6.52 9H4C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11H6.06C6.02 11.33 6 11.66 6 12C6 12.34 6.02 12.67 6.06 13H4C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15H6.52C7.76 18.49 11.08 21 15 21C16.74 21 18.36 20.51 19.74 19.65C20.43 19.22 20.56 18.26 19.98 17.68C19.56 17.26 18.91 17.21 18.41 17.53C17.42 18.15 16.26 18.5 15 18.5Z" fill="currentColor"/></svg>';

const RuxIconEuroSymbol$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-euro-symbol", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-euro-symbol"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-euro-symbol":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEuroSymbol$1);
      }
      break;
  } });
}

const RuxIconEuroSymbol = RuxIconEuroSymbol$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEuroSymbol, defineCustomElement };
