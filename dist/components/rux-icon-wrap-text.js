import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7H19C19.55 7 20 6.55 20 6C20 5.45 19.55 5 19 5H5C4.45 5 4 5.45 4 6C4 6.55 4.45 7 5 7ZM16.83 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H17.13C18.13 13 19.06 13.67 19.22 14.66C19.43 15.91 18.46 17 17.25 17H15V16.21C15 15.76 14.46 15.54 14.15 15.86L12.36 17.65C12.16 17.85 12.16 18.16 12.36 18.36L14.15 20.15C14.47 20.47 15 20.24 15 19.8V19H17C19.34 19 21.21 16.99 20.98 14.61C20.78 12.53 18.92 11 16.83 11ZM5 17H9C9.55 17 10 17.45 10 18C10 18.55 9.55 19 9 19H5C4.45 19 4 18.55 4 18C4 17.45 4.45 17 5 17Z" fill="currentColor"/></svg>';

const RuxIconWrapText$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-wrap-text", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-wrap-text"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-wrap-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWrapText$1);
      }
      break;
  } });
}

const RuxIconWrapText = RuxIconWrapText$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWrapText, defineCustomElement };
