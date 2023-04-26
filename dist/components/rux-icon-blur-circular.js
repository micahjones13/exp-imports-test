import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.5 7C10.5 7.28 10.28 7.5 10 7.5C9.72 7.5 9.5 7.28 9.5 7C9.5 6.72 9.72 6.5 10 6.5C10.28 6.5 10.5 6.72 10.5 7ZM9 10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10C11 10.55 10.55 11 10 11C9.45 11 9 10.55 9 10ZM9 14C9 13.45 9.45 13 10 13C10.55 13 11 13.45 11 14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14ZM7 9.5C6.72 9.5 6.5 9.72 6.5 10C6.5 10.28 6.72 10.5 7 10.5C7.28 10.5 7.5 10.28 7.5 10C7.5 9.72 7.28 9.5 7 9.5ZM9.5 17C9.5 16.72 9.72 16.5 10 16.5C10.28 16.5 10.5 16.72 10.5 17C10.5 17.28 10.28 17.5 10 17.5C9.72 17.5 9.5 17.28 9.5 17ZM7 13.5C6.72 13.5 6.5 13.72 6.5 14C6.5 14.28 6.72 14.5 7 14.5C7.28 14.5 7.5 14.28 7.5 14C7.5 13.72 7.28 13.5 7 13.5ZM14 9C13.45 9 13 9.45 13 10C13 10.55 13.45 11 14 11C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM14.5 7C14.5 7.28 14.28 7.5 14 7.5C13.72 7.5 13.5 7.28 13.5 7C13.5 6.72 13.72 6.5 14 6.5C14.28 6.5 14.5 6.72 14.5 7ZM17 13.5C16.72 13.5 16.5 13.72 16.5 14C16.5 14.28 16.72 14.5 17 14.5C17.28 14.5 17.5 14.28 17.5 14C17.5 13.72 17.28 13.5 17 13.5ZM16.5 10C16.5 9.72 16.72 9.5 17 9.5C17.28 9.5 17.5 9.72 17.5 10C17.5 10.28 17.28 10.5 17 10.5C16.72 10.5 16.5 10.28 16.5 10ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM14 16.5C13.72 16.5 13.5 16.72 13.5 17C13.5 17.28 13.72 17.5 14 17.5C14.28 17.5 14.5 17.28 14.5 17C14.5 16.72 14.28 16.5 14 16.5ZM13 14C13 13.45 13.45 13 14 13C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15C13.45 15 13 14.55 13 14Z" fill="currentColor"/></svg>';

const RuxIconBlurCircular$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-blur-circular", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-blur-circular"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-blur-circular":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBlurCircular$1);
      }
      break;
  } });
}

const RuxIconBlurCircular = RuxIconBlurCircular$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBlurCircular, defineCustomElement };
