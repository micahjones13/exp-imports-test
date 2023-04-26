import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7H19C20.1 7 21 7.9 21 9V15C21 16.1 20.1 17 19 17H5C3.9 17 3 16.1 3 15V9C3 7.9 3.9 7 5 7ZM6 15H18C18.55 15 19 14.55 19 14V10C19 9.45 18.55 9 18 9H6C5.45 9 5 9.45 5 10V14C5 14.55 5.45 15 6 15Z" fill="currentColor"/></svg>';

const RuxIconCrop75$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop-7-5", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop-7-5"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop-7-5":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCrop75$1);
      }
      break;
  } });
}

const RuxIconCrop75 = RuxIconCrop75$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCrop75, defineCustomElement };
