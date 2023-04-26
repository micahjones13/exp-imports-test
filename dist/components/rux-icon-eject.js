import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37 13.45L11.17 6.25C11.56 5.65 12.44 5.65 12.83 6.25L17.63 13.45C18.08 14.11 17.6 15 16.8 15H7.2C6.4 15 5.92 14.11 6.37 13.45ZM18 17H6C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17Z" fill="currentColor"/></svg>';

const RuxIconEject$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-eject", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-eject"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-eject":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEject$1);
      }
      break;
  } });
}

const RuxIconEject = RuxIconEject$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEject, defineCustomElement };
