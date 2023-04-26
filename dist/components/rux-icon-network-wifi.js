import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.64 7C23.19 6.66 18.71 3 12 3C5.27999 3 0.809985 6.66 0.359985 7L10.44 19.56C11.24 20.56 12.76 20.56 13.56 19.56L23.64 7Z" fill="currentColor"/></svg>';

const RuxIconNetworkWifi$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-network-wifi", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-network-wifi"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-network-wifi":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNetworkWifi$1);
      }
      break;
  } });
}

const RuxIconNetworkWifi = RuxIconNetworkWifi$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNetworkWifi, defineCustomElement };
