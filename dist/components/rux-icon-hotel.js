import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H19C21.21 7 23 8.79 23 11V19C23 19.55 22.55 20 22 20C21.45 20 21 19.55 21 19V17H3V19C3 19.55 2.55 20 2 20C1.45 20 1 19.55 1 19V6C1 5.45 1.45 5 2 5C2.55 5 3 5.45 3 6V14H11V9C11 7.9 11.9 7 13 7ZM10 10C10 11.66 8.66 13 7 13C5.34 13 4 11.66 4 10C4 8.34 5.34 7 7 7C8.66 7 10 8.34 10 10Z" fill="currentColor"/></svg>';

const RuxIconHotel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-hotel", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-hotel"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-hotel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconHotel$1);
      }
      break;
  } });
}

const RuxIconHotel = RuxIconHotel$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconHotel, defineCustomElement };
