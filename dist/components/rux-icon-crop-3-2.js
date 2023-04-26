import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4ZM6 18H18C18.55 18 19 17.55 19 17V7C19 6.45 18.55 6 18 6H6C5.45 6 5 6.45 5 7V17C5 17.55 5.45 18 6 18Z" fill="currentColor"/></svg>';

const RuxIconCrop32$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop-3-2", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop-3-2"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop-3-2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCrop32$1);
      }
      break;
  } });
}

const RuxIconCrop32 = RuxIconCrop32$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCrop32, defineCustomElement };
