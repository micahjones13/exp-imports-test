import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 2V6C23 6.55 22.55 7 22 7H21V17H22C22.55 17 23 17.45 23 18V22C23 22.55 22.55 23 22 23H18C17.45 23 17 22.55 17 22V21H7V22C7 22.55 6.55 23 6 23H2C1.45 23 1 22.55 1 22V18C1 17.45 1.45 17 2 17H3V7H2C1.45 7 1 6.55 1 6V2C1 1.45 1.45 1 2 1H6C6.55 1 7 1.45 7 2V3H17V2C17 1.45 17.45 1 18 1H22C22.55 1 23 1.45 23 2ZM5 3H3V5H5V3ZM5 21H3V19H5V21ZM7 18V19H17V18C17 17.45 17.45 17 18 17H19V7H18C17.45 7 17 6.55 17 6V5H7V6C7 6.55 6.55 7 6 7H5V17H6C6.55 17 7 17.45 7 18ZM21 21H19V19H21V21ZM19 3V5H21V3H19ZM12.94 7.65C12.79 7.26 12.41 7 11.99 7C11.57 7 11.19 7.26 11.05 7.65L8.28 14.98C8.09 15.47 8.45 16 8.98 16C9.3 16 9.58 15.8 9.69 15.5L10.24 14H13.73L14.29 15.51C14.4 15.8 14.68 16 15 16H15.01C15.54 16 15.9 15.47 15.72 14.98L12.94 7.65ZM12 8.91L10.69 12.74H13.3L12 8.91Z" fill="currentColor"/></svg>';

const RuxIconFormatShapes$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-shapes", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-shapes"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-shapes":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatShapes$1);
      }
      break;
  } });
}

const RuxIconFormatShapes = RuxIconFormatShapes$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatShapes, defineCustomElement };
