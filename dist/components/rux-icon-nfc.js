import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5V19ZM13 6H16C17.1 6 18 6.9 18 8V16C18 17.1 17.1 18 16 18H8C6.9 18 6 17.1 6 16V8C6 6.9 6.9 6 8 6H9C9.55 6 10 6.45 10 7C10 7.55 9.55 8 9 8H8V15C8 15.55 8.45 16 9 16H15C15.55 16 16 15.55 16 15V8H13V10.28C13.6 10.62 14 11.26 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 11.26 10.4 10.63 11 10.28V8C11 6.9 11.9 6 13 6Z" fill="currentColor"/></svg>';

const RuxIconNfc$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-nfc", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-nfc"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-nfc":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNfc$1);
      }
      break;
  } });
}

const RuxIconNfc = RuxIconNfc$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNfc, defineCustomElement };