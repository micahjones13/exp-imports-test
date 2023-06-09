import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.08004 13.0799C5.52004 16.0599 7.95004 18.4899 10.94 18.9199C13.16 19.2499 15.2 18.5399 16.67 17.1999C17.17 16.7499 17.89 16.6399 18.47 16.9799C19.34 17.4799 19.47 18.6899 18.73 19.3699C16.64 21.2899 13.74 22.3199 10.6 21.8999C6.22004 21.3099 2.68004 17.7699 2.09004 13.3899C1.41004 8.28991 4.56004 3.8099 9.07004 2.4299C10.03 2.1399 11 2.8699 11 3.8699V3.8899C11 4.5599 10.55 5.1299 9.91004 5.3199C6.74004 6.3099 4.54004 9.4799 5.08004 13.0799ZM13 3.8899V3.8699C13 2.8699 13.97 2.1399 14.92 2.4299C19.02 3.6799 22 7.4999 22 11.9999C22 12.7599 21.91 13.5099 21.74 14.2299C21.51 15.1899 20.39 15.6399 19.53 15.1399L19.52 15.1299C18.95 14.7899 18.69 14.1299 18.83 13.4899C18.94 13.0099 19 12.5199 19 11.9999C19 8.8599 16.93 6.2099 14.08 5.3199C13.45 5.1199 13 4.5599 13 3.8899Z" fill="currentColor"/></svg>';

const RuxIconDataUsage$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-data-usage", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-data-usage"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-data-usage":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDataUsage$1);
      }
      break;
  } });
}

const RuxIconDataUsage = RuxIconDataUsage$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDataUsage, defineCustomElement };
