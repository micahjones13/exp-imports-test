import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5ZM11 16.51L8.9 13.98C8.69 13.73 8.31 13.74 8.12 14L5.63 17.2C5.37 17.53 5.6 18.01 6.02 18.01H18.01C18.42 18.01 18.66 17.54 18.41 17.21L14.9 12.53C14.7 12.26 14.3 12.26 14.1 12.52L11 16.51Z" fill="currentColor"/></svg>';

const RuxIconPhoto$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-photo", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-photo"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-photo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoto$1);
      }
      break;
  } });
}

const RuxIconPhoto = RuxIconPhoto$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoto, defineCustomElement };
