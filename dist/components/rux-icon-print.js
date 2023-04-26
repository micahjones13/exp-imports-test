import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H17C17.55 3 18 3.45 18 4V6C18 6.55 17.55 7 17 7H7C6.45 7 6 6.55 6 6V4C6 3.45 6.45 3 7 3ZM5 8H19C20.66 8 22 9.34 22 11V15C22 16.1 21.1 17 20 17H18V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V17H4C2.9 17 2 16.1 2 15V11C2 9.34 3.34 8 5 8ZM9 19H15C15.55 19 16 18.55 16 18V14H8V18C8 18.55 8.45 19 9 19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12Z" fill="currentColor"/></svg>';

const RuxIconPrint$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-print", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-print"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-print":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPrint$1);
      }
      break;
  } });
}

const RuxIconPrint = RuxIconPrint$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPrint, defineCustomElement };
