import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2ZM8.12 9.99L5.63 13.19C5.37 13.52 5.61 14 6.02 14.01H18.01C18.42 14.01 18.66 13.54 18.41 13.21L14.9 8.53C14.7 8.26 14.3 8.26 14.1 8.52L11 12.51L8.9 9.98C8.7 9.73 8.32 9.74 8.12 9.99Z" fill="currentColor"/></svg>';

const RuxIconMms$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-mms", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-mms"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-mms":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMms$1);
      }
      break;
  } });
}

const RuxIconMms = RuxIconMms$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMms, defineCustomElement };
