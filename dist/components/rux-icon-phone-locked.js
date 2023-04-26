import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4V3.5C20 2.12 18.88 1 17.5 1C16.12 1 15 2.12 15 3.5V4C14.45 4 14 4.45 14 5V9C14 9.55 14.45 10 15 10H20C20.55 10 21 9.55 21 9V5C21 4.45 20.55 4 20 4ZM19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.05998 13.63 6.61998 10.79L8.46998 8.94C8.89998 8.51 9.10998 7.91 9.03998 7.3L8.74998 4.78C8.62998 3.77 7.77998 3.01 6.75998 3.01H5.02998C3.89998 3.01 2.95998 3.95 3.02998 5.08C3.55998 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26ZM16 4H19V3.5C19 2.67 18.33 2 17.5 2C16.67 2 16 2.67 16 3.5V4Z" fill="currentColor"/></svg>';

const RuxIconPhoneLocked$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-locked", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-locked"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-locked":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneLocked$1);
      }
      break;
  } });
}

const RuxIconPhoneLocked = RuxIconPhoneLocked$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneLocked, defineCustomElement };
