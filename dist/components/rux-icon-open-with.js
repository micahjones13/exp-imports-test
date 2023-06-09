import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8.99996H10.5C10.22 8.99996 9.99996 8.77996 9.99996 8.49996V5.99996H8.20996C7.75996 5.99996 7.53996 5.45996 7.84996 5.14996L11.64 1.35996C11.84 1.15996 12.15 1.15996 12.35 1.35996L16.14 5.14996C16.46 5.45996 16.24 5.99996 15.79 5.99996H14V8.49996C14 8.77996 13.78 8.99996 13.5 8.99996ZM5.99996 9.99996H8.49996C8.77996 9.99996 8.99996 10.22 8.99996 10.5V13.5C8.99996 13.78 8.77996 14 8.49996 14H5.99996V15.79C5.99996 16.24 5.45996 16.46 5.14996 16.15L1.35996 12.36C1.15996 12.16 1.15996 11.85 1.35996 11.65L5.14996 7.85996C5.45996 7.53996 5.99996 7.75996 5.99996 8.20996V9.99996ZM22.65 11.65L18.86 7.85996C18.54 7.53996 18 7.75996 18 8.20996V9.99996H15.5C15.22 9.99996 15 10.22 15 10.5V13.5C15 13.78 15.22 14 15.5 14H18V15.79C18 16.24 18.54 16.46 18.85 16.14L22.64 12.35C22.84 12.16 22.84 11.84 22.65 11.65ZM10.5 15H13.5C13.78 15 14 15.22 14 15.5V18H15.8C16.24 18 16.46 18.54 16.15 18.85L12.36 22.64C12.16 22.84 11.85 22.84 11.65 22.64L7.85996 18.85C7.53996 18.54 7.75996 18 8.20996 18H9.99996V15.5C9.99996 15.22 10.22 15 10.5 15Z" fill="currentColor"/></svg>';

const RuxIconOpenWith$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-open-with", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-open-with"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-open-with":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconOpenWith$1);
      }
      break;
  } });
}

const RuxIconOpenWith = RuxIconOpenWith$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconOpenWith, defineCustomElement };
