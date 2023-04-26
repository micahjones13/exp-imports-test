import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H20C20.55 3 21 3.45 21 4V9C21 9.55 20.55 10 20 10H15L12 13V4C12 3.45 12.45 3 13 3ZM16.69 14.97L19.23 15.26C20.24 15.38 21 16.23 20.99 17.24V18.97C20.99 20.1 20.05 21.04 18.92 20.97C10.39 20.44 3.55998 13.62 3.02998 5.08C2.95998 3.95 3.89998 3.01 5.02998 3.01H6.75998C7.77998 3.01 8.62998 3.77 8.74998 4.78L9.03998 7.3C9.10998 7.91 8.89998 8.51 8.46998 8.94L6.61998 10.79C8.05998 13.63 10.38 15.94 13.21 17.38L15.05 15.54C15.48 15.11 16.08 14.9 16.69 14.97Z" fill="currentColor"/></svg>';

const RuxIconPermPhoneMsg$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-perm-phone-msg", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-perm-phone-msg"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-perm-phone-msg":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPermPhoneMsg$1);
      }
      break;
  } });
}

const RuxIconPermPhoneMsg = RuxIconPermPhoneMsg$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPermPhoneMsg, defineCustomElement };
