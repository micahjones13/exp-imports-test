import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V22C10 22.55 10.45 23 11 23C11.55 23 12 22.55 12 22V2C12 1.45 11.55 1 11 1C10.45 1 10 1.45 10 2V3ZM10 18H5L10 12V18ZM14 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H14V12L19 18V6C19 5.45 18.55 5 18 5H14V3Z" fill="currentColor"/></svg>';

const RuxIconCompare$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-compare", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-compare"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-compare":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCompare$1);
      }
      break;
  } });
}

const RuxIconCompare = RuxIconCompare$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCompare, defineCustomElement };
