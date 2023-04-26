import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5.5C10 6.33 10.67 7 11.5 7H12.21L8.79 15H7.5C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18H12.5C13.33 18 14 17.33 14 16.5C14 15.67 13.33 15 12.5 15H11.79L15.21 7H16.5C17.33 7 18 6.33 18 5.5C18 4.67 17.33 4 16.5 4H11.5C10.67 4 10 4.67 10 5.5Z" fill="currentColor"/></svg>';

const RuxIconFormatItalic$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-italic", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-italic"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-italic":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatItalic$1);
      }
      break;
  } });
}

const RuxIconFormatItalic = RuxIconFormatItalic$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatItalic, defineCustomElement };
