import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM14.5 12C14.5 12.83 15.17 13.5 16 13.5C16.83 13.5 17.5 12.83 17.5 12C17.5 11.17 16.83 10.5 16 10.5C15.17 10.5 14.5 11.17 14.5 12Z" fill="currentColor"/></svg>';

const RuxIconAccountBalanceWallet$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-account-balance-wallet", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-account-balance-wallet"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-account-balance-wallet":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAccountBalanceWallet$1);
      }
      break;
  } });
}

const RuxIconAccountBalanceWallet = RuxIconAccountBalanceWallet$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAccountBalanceWallet, defineCustomElement };
