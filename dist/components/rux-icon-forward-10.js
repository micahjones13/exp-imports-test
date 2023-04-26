import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.94 14.8599C18.01 14.3699 18.42 13.9999 18.92 13.9999C19.52 13.9999 20.01 14.5299 19.92 15.1199C19.3 19.5899 14.98 22.8699 10.15 21.7899C7.06 21.0999 4.76 18.7099 4.16 15.5999C3.16 10.4799 7.06 5.99994 12 5.99994V3.20994C12 2.75994 12.54 2.53994 12.85 2.84994L16.64 6.63994C16.84 6.83994 16.84 7.14994 16.64 7.34994L12.85 11.1399C12.54 11.4599 12 11.2399 12 10.7899V7.99994C8.27 7.99994 5.32 11.4199 6.13 15.2899C6.61 17.5499 8.27 19.2799 10.52 19.8199C14.17 20.6999 17.46 18.2299 17.94 14.8599ZM10.9 12.7299V16.9999H10.05V13.7399L9.04 14.0499V13.3599L10.81 12.7299H10.9ZM14.32 12.7799C14.14 12.7099 13.95 12.6799 13.73 12.6799C13.51 12.6799 13.32 12.7099 13.14 12.7799C12.96 12.8499 12.81 12.9599 12.69 13.1099C12.57 13.2599 12.46 13.4499 12.4 13.6799C12.34 13.9099 12.3 14.1799 12.3 14.4999V15.2399C12.3 15.5599 12.34 15.8399 12.41 16.0599C12.48 16.2799 12.58 16.4799 12.71 16.6299C12.84 16.7799 12.99 16.8899 13.17 16.9599C13.35 17.0299 13.54 17.0599 13.76 17.0599C13.98 17.0599 14.17 17.0299 14.35 16.9599C14.53 16.8899 14.68 16.7799 14.8 16.6299C14.92 16.4799 15.02 16.2899 15.09 16.0599C15.16 15.8299 15.19 15.5599 15.19 15.2399V14.4999C15.19 14.1799 15.15 13.8999 15.08 13.6799C15.01 13.4599 14.91 13.2599 14.78 13.1099C14.65 12.9599 14.49 12.8499 14.32 12.7799ZM14.29 15.8299C14.32 15.6999 14.33 15.5399 14.33 15.3499H14.34V14.3799C14.34 14.1899 14.33 14.0299 14.3 13.8999C14.27 13.7699 14.23 13.6699 14.18 13.5899C14.13 13.5099 14.06 13.4499 13.99 13.4199C13.92 13.3899 13.83 13.3699 13.74 13.3699C13.65 13.3699 13.57 13.3899 13.49 13.4199C13.41 13.4499 13.36 13.5099 13.3 13.5899C13.24 13.6699 13.21 13.7699 13.18 13.8999C13.15 14.0299 13.14 14.1899 13.14 14.3799V15.3499C13.14 15.5399 13.15 15.6999 13.18 15.8299C13.21 15.9599 13.25 16.0699 13.3 16.1499C13.35 16.2299 13.42 16.2899 13.49 16.3199C13.56 16.3499 13.65 16.3699 13.74 16.3699C13.83 16.3699 13.91 16.3499 13.99 16.3199C14.07 16.2899 14.13 16.2299 14.18 16.1499C14.23 16.0699 14.26 15.9599 14.29 15.8299Z" fill="currentColor"/></svg>';

const RuxIconForward10$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-forward-10", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-forward-10"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-forward-10":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconForward10$1);
      }
      break;
  } });
}

const RuxIconForward10 = RuxIconForward10$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconForward10, defineCustomElement };
