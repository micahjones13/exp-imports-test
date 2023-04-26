import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM11 15H13V13H11V15ZM11 9H14C14.55 9 15 8.55 15 8C15 7.45 14.55 7 14 7H11C9.9 7 9 7.9 9 9V15C9 16.11 9.9 17 11 17H13C14.1 17 15 16.11 15 15V13C15 11.9 14.1 11 13 11H11V9Z" fill="currentColor"/></svg>';

const RuxIconLooks6$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-looks-6", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-looks-6"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-looks-6":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLooks6$1);
      }
      break;
  } });
}

const RuxIconLooks6 = RuxIconLooks6$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLooks6, defineCustomElement };
