import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.5C20 7.33 19.33 8 18.5 8H14.21L12.76 11.37L10.67 9.28L11.22 8H9.38998L6.38998 5H18.5C19.33 5 20 5.67 20 6.5ZM4.11998 5.56L17.44 18.88C17.83 19.27 17.83 19.9 17.43 20.28C17.04 20.67 16.41 20.67 16.02 20.28L11.07 15.33L9.85998 18.16C9.63998 18.67 9.13998 19 8.58998 19C7.59998 19 6.92998 17.99 7.31998 17.07L8.96998 13.23L2.70998 6.97C2.31998 6.58 2.31998 5.95 2.70998 5.56C3.09998 5.17 3.72998 5.17 4.11998 5.56Z" fill="currentColor"/></svg>';

const RuxIconFormatClear$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-clear", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-clear"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-clear":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatClear$1);
      }
      break;
  } });
}

const RuxIconFormatClear = RuxIconFormatClear$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatClear, defineCustomElement };
