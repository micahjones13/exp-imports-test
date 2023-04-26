import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4 3.01999C6.62 3.32999 3 7.51999 3 12.31V19C3 20.66 4.34 22 6 22H7C8.1 22 9 21.1 9 20V16C9 14.9 8.1 14 7 14H5V12.29C5 8.44999 7.96 5.10999 11.79 4.99999C15.76 4.88999 19 8.05999 19 12V14H17C15.9 14 15 14.9 15 16V20C15 21.1 15.9 22 17 22H18C19.66 22 21 20.66 21 19V12C21 6.82999 16.64 2.67999 11.4 3.01999Z" fill="currentColor"/></svg>';

const RuxIconHeadset$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-headset", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-headset"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-headset":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconHeadset$1);
      }
      break;
  } });
}

const RuxIconHeadset = RuxIconHeadset$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconHeadset, defineCustomElement };
