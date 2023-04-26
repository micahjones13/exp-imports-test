import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 8C7.00001 8.55 6.55001 9 6.00001 9C5.45001 9 5.00001 8.55 5.00001 8V4C5.00001 3.45 5.45001 3 6.00001 3H10C10.55 3 11 3.45 11 4C11 4.55 10.55 5 10 5H8.40001L11.95 8.55L16.9 3.6C17.29 3.21 17.92 3.21 18.31 3.6C18.7 3.99 18.7 4.62 18.31 5.01L12.65 10.67C12.26 11.06 11.63 11.06 11.24 10.67L7.00001 6.43V8ZM0.910014 16.2C7.23001 10.61 16.76 10.61 23.09 16.2C23.92 16.94 23.93 18.25 23.13 19.04L21.93 20.24C21.22 20.95 20.1 21.01 19.31 20.39L17.35 18.83C16.88 18.45 16.6 17.88 16.6 17.28V14.7C13.61 13.72 10.38 13.73 7.40001 14.7V17.27C7.40001 17.88 7.12001 18.45 6.65001 18.82L4.68001 20.39C3.90001 21.01 2.77001 20.95 2.06001 20.24L0.860014 19.04C0.0700144 18.25 0.0700144 16.94 0.910014 16.2Z" fill="currentColor"/></svg>';

const RuxIconPhoneMissed$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-missed", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-missed"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-missed":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneMissed$1);
      }
      break;
  } });
}

const RuxIconPhoneMissed = RuxIconPhoneMissed$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneMissed, defineCustomElement };
