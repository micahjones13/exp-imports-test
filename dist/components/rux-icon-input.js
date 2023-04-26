import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.01001H21C22.1 3.01001 23 3.91001 23 5.01001V18.99C23 20.09 22.1 20.99 21 20.99H2.98C1.89 20.99 1 20.1 1 19.01V16C1 15.45 1.45 15 2 15C2.55 15 3 15.45 3 16V18.02C3 18.57 3.45 19.02 4 19.02H20C20.55 19.02 21 18.57 21 18.02V5.99001C21 5.44001 20.55 4.99001 20 4.99001H4C3.45 4.99001 3 5.44001 3 5.99001V8.00001C3 8.55001 2.55 9.00001 2 9.00001C1.45 9.00001 1 8.55001 1 8.00001V5.01001C1 3.91001 1.9 3.01001 3 3.01001ZM14.64 12.36L11.85 15.15C11.54 15.46 11 15.24 11 14.79V13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11H11V9.21001C11 8.76001 11.54 8.54001 11.85 8.86001L14.64 11.65C14.84 11.85 14.84 12.16 14.64 12.36Z" fill="currentColor"/></svg>';

const RuxIconInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-input", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-input"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconInput$1);
      }
      break;
  } });
}

const RuxIconInput = RuxIconInput$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconInput, defineCustomElement };
