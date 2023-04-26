import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.81 8.62L19.65 9.04C20.5299 9.11 20.88 10.21 20.21 10.79L16.54 13.97L17.64 18.7C17.84 19.56 16.91 20.24 16.15 19.78L12 17.27L7.84995 19.77C7.08995 20.23 6.15995 19.55 6.35995 18.69L7.45995 13.97L3.78995 10.79C3.11995 10.21 3.47995 9.11 4.35995 9.04L9.18995 8.63L11.08 4.17C11.42 3.36 12.58 3.36 12.92 4.17L14.81 8.62ZM12 6.1V15.4L15.77 17.68L14.77 13.4L18.09 10.52L13.71 10.14L12 6.1Z" fill="currentColor"/></svg>';

const RuxIconStarHalf$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-star-half", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-star-half"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-star-half":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStarHalf$1);
      }
      break;
  } });
}

const RuxIconStarHalf = RuxIconStarHalf$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStarHalf, defineCustomElement };
