import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 18H19V5H18.7L14 6.7V8.4L17 7.38V18ZM5 13C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H11C11.55 11 12 11.45 12 12C12 12.55 11.55 13 11 13H5Z" fill="currentColor"/></svg>';

const RuxIconExposureNeg1$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-exposure-neg-1", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-exposure-neg-1"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-exposure-neg-1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExposureNeg1$1);
      }
      break;
  } });
}

const RuxIconExposureNeg1 = RuxIconExposureNeg1$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExposureNeg1, defineCustomElement };
