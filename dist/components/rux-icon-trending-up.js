import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.85 6.85L18.29 8.29L13.41 13.17L10.12 9.88C9.72998 9.49 9.09998 9.49 8.70998 9.88L2.70998 15.89C2.31998 16.28 2.31998 16.91 2.70998 17.3C3.09998 17.69 3.72998 17.69 4.11998 17.3L9.40998 12L12.7 15.29C13.09 15.68 13.72 15.68 14.11 15.29L19.7 9.71L21.14 11.15C21.45 11.46 21.99 11.24 21.99 10.8V6.5C22 6.22 21.78 6 21.5 6H17.21C16.76 6 16.54 6.54 16.85 6.85Z" fill="currentColor"/></svg>';

const RuxIconTrendingUp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-trending-up", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-trending-up"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-trending-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTrendingUp$1);
      }
      break;
  } });
}

const RuxIconTrendingUp = RuxIconTrendingUp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTrendingUp, defineCustomElement };
