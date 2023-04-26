import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 16C7 16.55 7.45 17 8 17H22C22.55 17 23 17.45 23 18C23 18.55 22.55 19 22 19H19V22C19 22.55 18.55 23 18 23C17.45 23 17 22.55 17 22V19H7C5.9 19 5 18.1 5 17V7H2C1.45 7 1 6.55 1 6C1 5.45 1.45 5 2 5H5V2C5 1.45 5.45 1 6 1C6.55 1 7 1.45 7 2V16ZM19 15H17V8C17 7.45 16.55 7 16 7H9V5H17C18.1 5 19 5.9 19 7V15Z" fill="currentColor"/></svg>';

const RuxIconCrop$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-crop", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-crop"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-crop":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCrop$1);
      }
      break;
  } });
}

const RuxIconCrop = RuxIconCrop$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCrop, defineCustomElement };
