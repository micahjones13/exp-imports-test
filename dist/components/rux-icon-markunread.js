import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM13.06 12.34L19.6 8.25C19.85 8.09 20 7.82 20 7.53C20 6.86 19.27 6.46 18.7 6.81L12 11L5.3 6.81C4.73 6.46 4 6.86 4 7.53C4 7.82 4.15 8.09 4.4 8.25L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34Z" fill="currentColor"/></svg>';

const RuxIconMarkunread$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-markunread", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-markunread"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-markunread":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMarkunread$1);
      }
      break;
  } });
}

const RuxIconMarkunread = RuxIconMarkunread$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMarkunread, defineCustomElement };
