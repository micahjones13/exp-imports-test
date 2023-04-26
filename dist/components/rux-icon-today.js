import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H18V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V3H8V2C8 1.45 7.55 1 7 1C6.45 1 6 1.45 6 2V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V8H19V18ZM11 10H8C7.45 10 7 10.45 7 11V14C7 14.55 7.45 15 8 15H11C11.55 15 12 14.55 12 14V11C12 10.45 11.55 10 11 10Z" fill="currentColor"/></svg>';

const RuxIconToday$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-today", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-today"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-today":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconToday$1);
      }
      break;
  } });
}

const RuxIconToday = RuxIconToday$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconToday, defineCustomElement };
