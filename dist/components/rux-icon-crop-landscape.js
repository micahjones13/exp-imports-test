import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H19C20.1 5 21 5.9 21 7V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7C3 5.9 3.9 5 5 5ZM6 17H18C18.55 17 19 16.55 19 16V8C19 7.45 18.55 7 18 7H6C5.45 7 5 7.45 5 8V16C5 16.55 5.45 17 6 17Z" fill="currentColor"/></svg>';

const RuxIconCropLandscape$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop-landscape", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop-landscape"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop-landscape":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCropLandscape$1);
      }
      break;
  } });
}

const RuxIconCropLandscape = RuxIconCropLandscape$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCropLandscape, defineCustomElement };
