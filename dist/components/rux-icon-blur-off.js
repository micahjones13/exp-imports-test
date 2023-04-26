import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3C9.5 3.28 9.72 3.5 10 3.5C10.28 3.5 10.5 3.28 10.5 3C10.5 2.72 10.28 2.5 10 2.5C9.72 2.5 9.5 2.72 9.5 3ZM14 3.5C13.72 3.5 13.5 3.28 13.5 3C13.5 2.72 13.72 2.5 14 2.5C14.28 2.5 14.5 2.72 14.5 3C14.5 3.28 14.28 3.5 14 3.5ZM13 6C13 6.55228 13.4477 7 14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6ZM12.52 10.2C12.61 10.87 13.13 11.39 13.8 11.48L14 11.5C14.83 11.5 15.5 10.83 15.5 10C15.5 9.17 14.83 8.5 14 8.5C13.17 8.5 12.5 9.17 12.5 10L12.52 10.2ZM18 11C17.4477 11 17 10.5523 17 10C17 9.44772 17.4477 9 18 9C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11ZM17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5C17.4477 5 17 5.44772 17 6ZM21 10.5C20.72 10.5 20.5 10.28 20.5 10C20.5 9.72 20.72 9.5 21 9.5C21.28 9.5 21.5 9.72 21.5 10C21.5 10.28 21.28 10.5 21 10.5ZM9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6ZM18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15ZM5 18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18ZM14 20.5C14.28 20.5 14.5 20.72 14.5 21C14.5 21.28 14.28 21.5 14 21.5C13.72 21.5 13.5 21.28 13.5 21C13.5 20.72 13.72 20.5 14 20.5ZM21.5 14C21.5 13.72 21.28 13.5 21 13.5C20.72 13.5 20.5 13.72 20.5 14C20.5 14.28 20.72 14.5 21 14.5C21.28 14.5 21.5 14.28 21.5 14ZM3 13.5C3.28 13.5 3.5 13.72 3.5 14C3.5 14.28 3.28 14.5 3 14.5C2.72 14.5 2.5 14.28 2.5 14C2.5 13.72 2.72 13.5 3 13.5ZM9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17C9.44772 17 9 17.4477 9 18ZM3 9.5C3.28 9.5 3.5 9.72 3.5 10C3.5 10.28 3.28 10.5 3 10.5C2.72 10.5 2.5 10.28 2.5 10C2.5 9.72 2.72 9.5 3 9.5ZM10.5 21C10.5 20.72 10.28 20.5 10 20.5C9.72 20.5 9.5 20.72 9.5 21C9.5 21.28 9.72 21.5 10 21.5C10.28 21.5 10.5 21.28 10.5 21ZM6 15C5.44772 15 5 14.5523 5 14C5 13.4477 5.44772 13 6 13C6.55228 13 7 13.4477 7 14C7 14.5523 6.55228 15 6 15ZM4.62 4.56C4.23 4.17 3.6 4.17 3.21 4.56C2.82 4.95 2.82 5.58 3.21 5.97L6.28 9.04L6 9C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11C6.55 11 7 10.55 7 10C7 9.9 6.97 9.81 6.94 9.72L9.75 12.53C9.04 12.64 8.5 13.26 8.5 14C8.5 14.83 9.17 15.5 10 15.5C10.74 15.5 11.36 14.96 11.47 14.25L14.28 17.06C14.19 17.03 14.1 17 14 17C13.45 17 13 17.45 13 18C13 18.55 13.45 19 14 19C14.55 19 15 18.55 15 18C15 17.9 14.97 17.81 14.94 17.72L18.02 20.79C18.41 21.18 19.04 21.18 19.43 20.79C19.82 20.4 19.82 19.77 19.43 19.37L4.62 4.56Z" fill="currentColor"/></svg>';

const RuxIconBlurOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-blur-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-blur-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-blur-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBlurOff$1);
      }
      break;
  } });
}

const RuxIconBlurOff = RuxIconBlurOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBlurOff, defineCustomElement };
