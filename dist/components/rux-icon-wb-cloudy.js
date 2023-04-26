import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5952 10.04C17.9328 6.59 15.024 4 11.5296 4C8.75518 4 6.34558 5.64 5.14558 8.04C2.25598 8.36 0.00958252 10.91 0.00958252 14C0.00958252 17.31 2.59198 20 5.76958 20H18.2496C20.8992 20 23.0496 17.76 23.0496 15C23.0496 12.36 21.0816 10.22 18.5952 10.04Z" fill="currentColor"/></svg>';

const RuxIconWbCloudy$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-wb-cloudy", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-wb-cloudy"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-wb-cloudy":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWbCloudy$1);
      }
      break;
  } });
}

const RuxIconWbCloudy = RuxIconWbCloudy$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWbCloudy, defineCustomElement };
