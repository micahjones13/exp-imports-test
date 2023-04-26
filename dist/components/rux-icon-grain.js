import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C20 7.1 19.1 8 18 8C16.9 8 16 7.1 16 6C16 4.9 16.9 4 18 4C19.1 4 20 4.9 20 6ZM4 10C4 8.9 4.9 8 6 8C7.1 8 8 8.9 8 10C8 11.1 7.1 12 6 12C4.9 12 4 11.1 4 10ZM8 14C8 12.9 8.9 12 10 12C11.1 12 12 12.9 12 14C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM14 16C12.9 16 12 16.9 12 18C12 19.1 12.9 20 14 20C15.1 20 16 19.1 16 18C16 16.9 15.1 16 14 16ZM16 14C16 12.9 16.9 12 18 12C19.1 12 20 12.9 20 14C20 15.1 19.1 16 18 16C16.9 16 16 15.1 16 14ZM14 8C12.9 8 12 8.9 12 10C12 11.1 12.9 12 14 12C15.1 12 16 11.1 16 10C16 8.9 15.1 8 14 8ZM8 6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6C12 7.1 11.1 8 10 8C8.9 8 8 7.1 8 6Z" fill="currentColor"/></svg>';

const RuxIconGrain$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-grain", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-grain"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-grain":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGrain$1);
      }
      break;
  } });
}

const RuxIconGrain = RuxIconGrain$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGrain, defineCustomElement };
