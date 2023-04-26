import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 6V8.54C22 9.23 21.66 9.91 21.06 10.24C20.43 10.58 20 11.24 20 12C20 12.76 20.43 13.42 21.06 13.76C21.66 14.09 22 14.77 22 15.46V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V15.46C2 14.77 2.34 14.09 2.94 13.76C3.57 13.43 4 12.76 4 12C4 11.24 3.58 10.58 2.95 10.23C2.34 9.91 2.01 9.23 2.01 8.54V6C2.01 4.89 2.9 4 4 4H20C21.1 4 22 4.9 22 6ZM11 17.5H13V15.5H11V17.5ZM13 13H11V11H13V13ZM11 8.5H13V6.5H11V8.5Z" fill="currentColor"/></svg>';

const RuxIconConfirmationNumber$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-confirmation-number", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-confirmation-number"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-confirmation-number":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconConfirmationNumber$1);
      }
      break;
  } });
}

const RuxIconConfirmationNumber = RuxIconConfirmationNumber$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconConfirmationNumber, defineCustomElement };
