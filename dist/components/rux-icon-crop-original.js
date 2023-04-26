import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V18C19 18.55 18.55 19 18 19ZM11.21 15.83L13.56 12.81C13.76 12.55 14.16 12.55 14.35 12.81L16.9 16.2C17.15 16.53 16.91 17 16.5 17H7.52C7.11 17 6.87 16.52 7.13 16.19L8.87 13.96C9.07 13.71 9.45 13.7 9.65 13.95L11.21 15.83Z" fill="currentColor"/></svg>';

const RuxIconCropOriginal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop-original", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop-original"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop-original":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCropOriginal$1);
      }
      break;
  } });
}

const RuxIconCropOriginal = RuxIconCropOriginal$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCropOriginal, defineCustomElement };
