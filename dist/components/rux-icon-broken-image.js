import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.59V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V9.58L6 12.59L9.3 9.3C9.69 8.91 10.32 8.91 10.71 9.3L14 12.59L17.29 9.29C17.68 8.9 18.32 8.9 18.71 9.29L21 11.59ZM21 14.43L18 11.42L14.7 14.7C14.31 15.09 13.68 15.09 13.29 14.7L10 11.41L6.7 14.71C6.31 15.1 5.68 15.1 5.29 14.71L3 12.42V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V14.43Z" fill="currentColor"/></svg>';

const RuxIconBrokenImage$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-broken-image", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-broken-image"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-broken-image":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrokenImage$1);
      }
      break;
  } });
}

const RuxIconBrokenImage = RuxIconBrokenImage$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrokenImage, defineCustomElement };
