import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.07007V9.00007H20C20 4.92007 16.95 1.56007 13 1.07007ZM4 15.0001C4 19.4201 7.58 23.0001 12 23.0001C16.42 23.0001 20 19.4201 20 15.0001V11.0001H4V15.0001ZM4 9.00007C4 4.92007 7.05 1.56007 11 1.07007V9.00007H4Z" fill="currentColor"/></svg>';

const RuxIconMouse$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-mouse", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-mouse"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-mouse":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMouse$1);
      }
      break;
  } });
}

const RuxIconMouse = RuxIconMouse$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMouse, defineCustomElement };
