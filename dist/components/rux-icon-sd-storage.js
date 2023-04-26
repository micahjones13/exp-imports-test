import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.83 2H18C19.1 2 20 2.9 20 4V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V8.82C4 8.3 4.23 7.79 4.6 7.42L9.41 2.59C9.79 2.21 10.3 2 10.83 2ZM10 7C10 7.55 10.45 8 11 8C11.55 8 12 7.55 12 7V5C12 4.45 11.55 4 11 4C10.45 4 10 4.45 10 5V7ZM14 8C13.45 8 13 7.55 13 7V5C13 4.45 13.45 4 14 4C14.55 4 15 4.45 15 5V7C15 7.55 14.55 8 14 8ZM16 7C16 7.55 16.45 8 17 8C17.55 8 18 7.55 18 7V5C18 4.45 17.55 4 17 4C16.45 4 16 4.45 16 5V7Z" fill="currentColor"/></svg>';

const RuxIconSdStorage$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-sd-storage", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-sd-storage"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-sd-storage":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSdStorage$1);
      }
      break;
  } });
}

const RuxIconSdStorage = RuxIconSdStorage$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSdStorage, defineCustomElement };
