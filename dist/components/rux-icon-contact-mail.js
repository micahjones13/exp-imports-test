import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM21 8V7L18 9L15 7V8L17.72 9.82C17.89 9.93 18.11 9.93 18.27 9.82L21 8ZM11 9C11 7.34 9.66 6 8 6C6.34 6 5 7.34 5 9C5 10.66 6.34 12 8 12C9.66 12 11 10.66 11 9ZM2 18V17C2 15 6 13.9 8 13.9C10 13.9 14 15 14 17V18H2ZM14.5 12H21.5C21.78 12 22 11.78 22 11.5V6.5C22 6.22 21.78 6 21.5 6H14.5C14.22 6 14 6.22 14 6.5V11.5C14 11.78 14.22 12 14.5 12Z" fill="currentColor"/></svg>';

const RuxIconContactMail$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-contact-mail", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-contact-mail"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-contact-mail":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconContactMail$1);
      }
      break;
  } });
}

const RuxIconContactMail = RuxIconContactMail$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconContactMail, defineCustomElement };
