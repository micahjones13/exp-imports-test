import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 18H20V5H19.7L15 6.7V8.4L18 7.38V18ZM8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8V11H13C13.55 11 14 11.45 14 12C14 12.55 13.55 13 13 13H10V16C10 16.55 9.55 17 9 17C8.45 17 8 16.55 8 16V13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H8V8Z" fill="currentColor"/></svg>';

const RuxIconExposurePlus1$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-exposure-plus-1", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-exposure-plus-1"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-exposure-plus-1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExposurePlus1$1);
      }
      break;
  } });
}

const RuxIconExposurePlus1 = RuxIconExposurePlus1$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExposurePlus1, defineCustomElement };
