import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.77 6.12012C8.9 5.50012 11.7 7.31012 12.65 10.0001H21C22.1 10.0001 23 10.9001 23 12.0001C23 13.1001 22.1 14.0001 21 14.0001V16.0001C21 17.1001 20.1 18.0001 19 18.0001C17.9 18.0001 17 17.1001 17 16.0001V14.0001H12.65C11.83 16.3301 9.61 18.0001 7 18.0001C3.26 18.0001 0.320001 14.5701 1.14 10.7001C1.62 8.41012 3.48 6.58012 5.77 6.12012ZM5 12.0001C5 13.1001 5.9 14.0001 7 14.0001C8.1 14.0001 9 13.1001 9 12.0001C9 10.9001 8.1 10.0001 7 10.0001C5.9 10.0001 5 10.9001 5 12.0001Z" fill="currentColor"/></svg>';

const RuxIconVpnKey$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-vpn-key", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-vpn-key"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-vpn-key":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVpnKey$1);
      }
      break;
  } });
}

const RuxIconVpnKey = RuxIconVpnKey$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVpnKey, defineCustomElement };
