import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 5.14 8.14 2 12 2C15.86 2 19 5.14 19 9C19 13.17 14.58 18.92 12.77 21.11C12.37 21.59 11.64 21.59 11.24 21.11C9.42 18.92 5 13.17 5 9ZM13 10H15C15.55 10 16 9.55 16 9C16 8.45 15.55 8 15 8H13V6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6V8H9C8.45 8 8 8.45 8 9C8 9.55 8.45 10 9 10H11V12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12V10Z" fill="currentColor"/></svg>';

const RuxIconAddLocation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-add-location", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-add-location"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-add-location":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAddLocation$1);
      }
      break;
  } });
}

const RuxIconAddLocation = RuxIconAddLocation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAddLocation, defineCustomElement };
