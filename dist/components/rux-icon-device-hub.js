import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 17L13 13V9.81999C14.35 9.32999 15.26 7.92999 14.93 6.35999C14.68 5.17999 13.7 4.23999 12.51 4.03999C10.63 3.72999 9 5.16999 9 6.99999C9 8.29999 9.84 9.39999 11 9.81999V13L7 17H4C3.45 17 3 17.45 3 18V21C3 21.55 3.45 22 4 22H7C7.55 22 8 21.55 8 21V18.95L12 14.75L16 18.95V21C16 21.55 16.45 22 17 22H20C20.55 22 21 21.55 21 21V18C21 17.45 20.55 17 20 17H17Z" fill="currentColor"/></svg>';

const RuxIconDeviceHub$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-device-hub", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-device-hub"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-device-hub":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDeviceHub$1);
      }
      break;
  } });
}

const RuxIconDeviceHub = RuxIconDeviceHub$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDeviceHub, defineCustomElement };
