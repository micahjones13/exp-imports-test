import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 10.79C16.57 10.12 17.25 9.02 17.25 8C17.25 5.74 15.5 4 13.25 4H8C7.45 4 7 4.45 7 5V17C7 17.55 7.45 18 8 18H13.78C15.85 18 17.74 16.31 17.75 14.23C17.76 12.7 16.9 11.39 15.6 10.79ZM10 6.5H13C13.83 6.5 14.5 7.17 14.5 8C14.5 8.83 13.83 9.5 13 9.5H10V6.5ZM10 15.5H13.5C14.33 15.5 15 14.83 15 14C15 13.17 14.33 12.5 13.5 12.5H10V15.5Z" fill="currentColor"/></svg>';

const RuxIconFormatBold$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-bold", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-bold"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-bold":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatBold$1);
      }
      break;
  } });
}

const RuxIconFormatBold = RuxIconFormatBold$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatBold, defineCustomElement };
