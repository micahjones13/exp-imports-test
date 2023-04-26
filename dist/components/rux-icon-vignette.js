import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM4 12C4 15.31 7.58 18 12 18C16.42 18 20 15.31 20 12C20 8.69 16.42 6 12 6C7.58 6 4 8.69 4 12Z" fill="currentColor"/></svg>';

const RuxIconVignette$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-vignette", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-vignette"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-vignette":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVignette$1);
      }
      break;
  } });
}

const RuxIconVignette = RuxIconVignette$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVignette, defineCustomElement };
