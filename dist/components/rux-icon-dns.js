import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H19C20.1 11 21 10.1 21 9V5C21 3.9 20.1 3 19 3ZM5 13H19C20.1 13 21 13.9 21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15C3 13.9 3.9 13 5 13ZM5 17C5 18.1 5.9 19 7 19C8.1 19 9 18.1 9 17C9 15.9 8.1 15 7 15C5.9 15 5 15.9 5 17ZM5 7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7C9 5.9 8.1 5 7 5C5.9 5 5 5.9 5 7Z" fill="currentColor"/></svg>';

const RuxIconDns$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-dns", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-dns"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-dns":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDns$1);
      }
      break;
  } });
}

const RuxIconDns = RuxIconDns$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDns, defineCustomElement };
