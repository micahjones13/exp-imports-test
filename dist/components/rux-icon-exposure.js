import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM10.25 7H6.75C6.34 7 6 7.34 6 7.75C6 8.16 6.34 8.5 6.75 8.5H10.25C10.66 8.5 11 8.16 11 7.75C11 7.34 10.66 7 10.25 7ZM18 19H5L19 5V18C19 18.55 18.55 19 18 19ZM14.5 17.25V16H13.25C12.84 16 12.5 15.66 12.5 15.25C12.5 14.84 12.84 14.5 13.25 14.5H14.5V13.25C14.5 12.84 14.84 12.5 15.25 12.5C15.66 12.5 16 12.84 16 13.25V14.5H17.25C17.66 14.5 18 14.84 18 15.25C18 15.66 17.66 16 17.25 16H16V17.25C16 17.66 15.66 18 15.25 18C14.84 18 14.5 17.66 14.5 17.25Z" fill="currentColor"/></svg>';

const RuxIconExposure$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-exposure", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-exposure"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-exposure":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExposure$1);
      }
      break;
  } });
}

const RuxIconExposure = RuxIconExposure$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExposure, defineCustomElement };
