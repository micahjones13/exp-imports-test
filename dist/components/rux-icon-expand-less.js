import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.29 8.70998L6.69997 13.3C6.30997 13.69 6.30997 14.32 6.69997 14.71C7.08997 15.1 7.71997 15.1 8.10997 14.71L12 10.83L15.88 14.71C16.27 15.1 16.9 15.1 17.29 14.71C17.68 14.32 17.68 13.69 17.29 13.3L12.7 8.70998C12.32 8.31998 11.68 8.31998 11.29 8.70998Z" fill="currentColor"/></svg>';

const RuxIconExpandLess$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-expand-less", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-expand-less"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-expand-less":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExpandLess$1);
      }
      break;
  } });
}

const RuxIconExpandLess = RuxIconExpandLess$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExpandLess, defineCustomElement };
