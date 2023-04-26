import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.88 10.79L13 12.67V4C13 3.45 12.55 3 12 3C11.45 3 11 3.45 11 4V12.67L9.11 10.79C8.72 10.4 8.09 10.4 7.7 10.79C7.31 11.18 7.31 11.81 7.7 12.2L11.29 15.79C11.68 16.18 12.31 16.18 12.7 15.79L16.29 12.2C16.68 11.81 16.68 11.18 16.29 10.79C15.9 10.4 15.27 10.4 14.88 10.79ZM19 18V13C19 12.45 19.45 12 20 12C20.55 12 21 12.45 21 13V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V13C3 12.45 3.45 12 4 12C4.55 12 5 12.45 5 13V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18Z" fill="currentColor"/></svg>';

const RuxIconSaveAlt$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-save-alt", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-save-alt"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-save-alt":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSaveAlt$1);
      }
      break;
  } });
}

const RuxIconSaveAlt = RuxIconSaveAlt$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSaveAlt, defineCustomElement };
