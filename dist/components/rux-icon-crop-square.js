import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM7 18H17C17.55 18 18 17.55 18 17V7C18 6.45 17.55 6 17 6H7C6.45 6 6 6.45 6 7V17C6 17.55 6.45 18 7 18Z" fill="currentColor"/></svg>';

const RuxIconCropSquare$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop-square", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop-square"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop-square":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCropSquare$1);
      }
      break;
  } });
}

const RuxIconCropSquare = RuxIconCropSquare$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCropSquare, defineCustomElement };
