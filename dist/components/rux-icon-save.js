import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.59 3.59C17.21 3.21 16.7 3 16.17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7.83C21 7.3 20.79 6.79 20.41 6.42L17.59 3.59ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM7 9H13C14.1 9 15 8.1 15 7C15 5.9 14.1 5 13 5H7C5.9 5 5 5.9 5 7C5 8.1 5.9 9 7 9Z" fill="currentColor"/></svg>';

const RuxIconSave$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-save", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-save"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-save":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSave$1);
      }
      break;
  } });
}

const RuxIconSave = RuxIconSave$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSave, defineCustomElement };
