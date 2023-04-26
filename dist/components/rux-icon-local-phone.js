import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.23 15.2598L16.69 14.9698C16.08 14.8998 15.48 15.1098 15.05 15.5398L13.21 17.3798C10.38 15.9398 8.05998 13.6298 6.61998 10.7898L8.46998 8.93977C8.89998 8.50977 9.10998 7.90977 9.03998 7.29977L8.74998 4.77977C8.62998 3.76977 7.77998 3.00977 6.75998 3.00977H5.02998C3.89998 3.00977 2.95998 3.94977 3.02998 5.07977C3.55998 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z" fill="currentColor"/></svg>';

const RuxIconLocalPhone$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-local-phone", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-local-phone"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-local-phone":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLocalPhone$1);
      }
      break;
  } });
}

const RuxIconLocalPhone = RuxIconLocalPhone$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLocalPhone, defineCustomElement };
