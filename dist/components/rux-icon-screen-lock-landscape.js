import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H21C22.1 5 23 5.9 23 7V17C23 18.1 22.1 19 21 19H3C1.9 19 1 18.1 1 17V7C1 5.9 1.9 5 3 5ZM5 17H19V7H5V17ZM14 16C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11V10C14 8.89 13.1 8 12 8C10.89 8 10 8.9 10 10V11C9.45 11 9 11.45 9 12V15C9 15.55 9.45 16 10 16H14ZM12 8.8C11.34 8.8 10.8 9.34 10.8 10V11H13.2V10C13.2 9.34 12.66 8.8 12 8.8Z" fill="currentColor"/></svg>';

const RuxIconScreenLockLandscape$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-screen-lock-landscape", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-screen-lock-landscape"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-screen-lock-landscape":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScreenLockLandscape$1);
      }
      break;
  } });
}

const RuxIconScreenLockLandscape = RuxIconScreenLockLandscape$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScreenLockLandscape, defineCustomElement };
