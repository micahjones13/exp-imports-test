import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4ZM14.5 9H4V12.5H14.5V9ZM4 14.5H14.5V18H5C4.45 18 4 17.55 4 17V14.5ZM16.5 18H19C19.55 18 20 17.55 20 17V9H16.5V18Z" fill="currentColor"/></svg>';

const RuxIconWeb$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-web", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-web"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-web":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWeb$1);
      }
      break;
  } });
}

const RuxIconWeb = RuxIconWeb$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWeb, defineCustomElement };
