import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4C21 4.55 20.55 5 20 5H4ZM7 8C7 8.55 7.45 9 8 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H8C7.45 7 7 7.45 7 8ZM20 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13ZM7 16C7 16.55 7.45 17 8 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H8C7.45 15 7 15.45 7 16ZM4 21H20C20.55 21 21 20.55 21 20C21 19.45 20.55 19 20 19H4C3.45 19 3 19.45 3 20C3 20.55 3.45 21 4 21Z" fill="currentColor"/></svg>';

const RuxIconFormatAlignCenter$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-align-center", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-align-center"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-align-center":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatAlignCenter$1);
      }
      break;
  } });
}

const RuxIconFormatAlignCenter = RuxIconFormatAlignCenter$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatAlignCenter, defineCustomElement };
