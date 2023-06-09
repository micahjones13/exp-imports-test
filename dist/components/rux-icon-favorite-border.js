import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.08998C13.76 3.02998 17.02 2.18998 19.66 3.98998C21.06 4.94998 21.94 6.56998 22 8.26998C22.13 12.15 18.7 15.26 13.45 20.02L13.34 20.12C12.58 20.82 11.41 20.82 10.65 20.13L10.55 20.04L10.4896 19.9851C5.2736 15.2461 1.86051 12.1451 1.99997 8.27998C2.05997 6.56998 2.93997 4.94998 4.33997 3.98998C6.97997 2.17998 10.24 3.02998 12 5.08998ZM12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.49998C20 6.49998 18.5 4.99998 16.5 4.99998C14.96 4.99998 13.46 5.98998 12.94 7.35998H11.07C10.54 5.98998 9.03997 4.99998 7.49997 4.99998C5.49997 4.99998 3.99997 6.49998 3.99997 8.49998C3.99997 11.39 7.13997 14.24 11.9 18.55L12 18.65Z" fill="currentColor"/></svg>';

const RuxIconFavoriteBorder$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-favorite-border", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-favorite-border"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-favorite-border":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFavoriteBorder$1);
      }
      break;
  } });
}

const RuxIconFavoriteBorder = RuxIconFavoriteBorder$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFavoriteBorder, defineCustomElement };
