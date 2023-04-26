import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM1 6C1 5.45 1.45 5 2 5C2.55 5 3 5.45 3 6V20C3 20.55 3.45 21 4 21H18C18.55 21 19 21.45 19 22C19 22.55 18.55 23 18 23H3C1.9 23 1 22.1 1 21V6ZM13.21 13.83L15.56 10.81C15.76 10.55 16.16 10.55 16.35 10.81L18.9 14.2C19.15 14.53 18.91 15 18.5 15H9.52C9.11 15 8.87 14.52 9.13 14.19L10.87 11.96C11.07 11.71 11.45 11.7 11.65 11.95L13.21 13.83ZM8 17H20C20.55 17 21 16.55 21 16V4C21 3.45 20.55 3 20 3H8C7.45 3 7 3.45 7 4V16C7 16.55 7.45 17 8 17Z" fill="currentColor"/></svg>';

const RuxIconFilter$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-filter", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-filter"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-filter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFilter$1);
      }
      break;
  } });
}

const RuxIconFilter = RuxIconFilter$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFilter, defineCustomElement };
