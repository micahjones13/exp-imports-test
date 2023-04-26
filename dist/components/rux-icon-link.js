import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 15H10C10.55 15 11 15.45 11 16C11 16.55 10.55 17 10 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H10C10.55 7 11 7.45 11 8C11 8.55 10.55 9 10 9H7C5.35 9 4 10.35 4 12C4 13.65 5.35 15 7 15ZM17 7H14C13.45 7 13 7.45 13 8C13 8.55 13.45 9 14 9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H14C13.45 15 13 15.45 13 16C13 16.55 13.45 17 14 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9C8.45 11 8 11.45 8 12Z" fill="currentColor"/></svg>';

const RuxIconLink$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-link", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-link"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLink$1);
      }
      break;
  } });
}

const RuxIconLink = RuxIconLink$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLink, defineCustomElement };
