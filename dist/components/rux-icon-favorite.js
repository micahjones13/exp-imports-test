import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.35 20.13C12.59 20.82 11.42 20.82 10.66 20.12L10.55 20.02C5.29997 15.27 1.86997 12.16 1.99997 8.27998C2.05997 6.57998 2.92997 4.94998 4.33997 3.98998C6.97997 2.18998 10.24 3.02998 12 5.08998C13.76 3.02998 17.02 2.17998 19.66 3.98998C21.07 4.94998 21.94 6.57998 22 8.27998C22.14 12.16 18.7 15.27 13.45 20.04L13.35 20.13Z" fill="currentColor"/></svg>';

const RuxIconFavorite$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-favorite", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-favorite"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-favorite":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFavorite$1);
      }
      break;
  } });
}

const RuxIconFavorite = RuxIconFavorite$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFavorite, defineCustomElement };
