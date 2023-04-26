import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM13 12V14H11V12H13ZM11 9C11 9.55 11.45 10 12 10C12.55 10 13 9.55 13 9V7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7V9Z" fill="currentColor"/></svg>';

const RuxIconSmsFailed$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-sms-failed", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-sms-failed"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-sms-failed":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSmsFailed$1);
      }
      break;
  } });
}

const RuxIconSmsFailed = RuxIconSmsFailed$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSmsFailed, defineCustomElement };
