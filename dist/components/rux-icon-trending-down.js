import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.85 17.15L18.29 15.71L13.41 10.83L10.12 14.12C9.72998 14.51 9.09998 14.51 8.70998 14.12L2.70998 8.11C2.31998 7.72 2.31998 7.09 2.70998 6.7C3.09998 6.31 3.72998 6.31 4.11998 6.7L9.40998 12L12.7 8.71C13.09 8.32 13.72 8.32 14.11 8.71L19.7 14.29L21.14 12.85C21.45 12.54 21.99 12.76 21.99 13.2V17.49C21.99 17.77 21.77 17.99 21.49 17.99H17.2C16.76 18 16.54 17.46 16.85 17.15Z" fill="currentColor"/></svg>';

const RuxIconTrendingDown$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-trending-down", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-trending-down"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-trending-down":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTrendingDown$1);
      }
      break;
  } });
}

const RuxIconTrendingDown = RuxIconTrendingDown$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTrendingDown, defineCustomElement };
