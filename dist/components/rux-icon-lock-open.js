import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8H17V6C17 3.24 14.76 1 12 1C9.72 1 7.73 2.54 7.16 4.75C7.02 5.29 7.34 5.83 7.88 5.97C8.41 6.11 8.96 5.79 9.1 5.25C9.44 3.93 10.63 3 12 3C13.65 3 15 4.35 15 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13ZM17 20C17.55 20 18 19.55 18 19V11C18 10.45 17.55 10 17 10H7C6.45 10 6 10.45 6 11V19C6 19.55 6.45 20 7 20H17Z" fill="currentColor"/></svg>';

const RuxIconLockOpen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-lock-open", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-lock-open"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-lock-open":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLockOpen$1);
      }
      break;
  } });
}

const RuxIconLockOpen = RuxIconLockOpen$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLockOpen, defineCustomElement };
