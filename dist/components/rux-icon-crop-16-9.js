import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 6H19C20.1 6 21 6.9 21 8V16C21 17.1 20.1 18 19 18H5C3.9 18 3 17.1 3 16V8C3 6.9 3.9 6 5 6ZM6 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8H6C5.45 8 5 8.45 5 9V15C5 15.55 5.45 16 6 16Z" fill="currentColor"/></svg>';

const RuxIconCrop169$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop-16-9", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop-16-9"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop-16-9":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCrop169$1);
      }
      break;
  } });
}

const RuxIconCrop169 = RuxIconCrop169$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCrop169, defineCustomElement };
