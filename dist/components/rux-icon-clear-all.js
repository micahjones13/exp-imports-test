import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H20C20.55 7 21 7.45 21 8C21 8.55 20.55 9 20 9H8ZM6 13H18C18.55 13 19 12.55 19 12C19 11.45 18.55 11 18 11H6C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13ZM4 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H4C3.45 15 3 15.45 3 16C3 16.55 3.45 17 4 17Z" fill="currentColor"/></svg>';

const RuxIconClearAll$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-clear-all", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-clear-all"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-clear-all":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconClearAll$1);
      }
      break;
  } });
}

const RuxIconClearAll = RuxIconClearAll$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconClearAll, defineCustomElement };
