import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4C10.58 4 7 7.58 7 12C7 16.42 10.58 20 15 20C19.42 20 23 16.42 23 12C23 7.58 19.42 4 15 4ZM15 18C11.69 18 9 15.31 9 12C9 8.69 11.69 6 15 6C18.31 6 21 8.69 21 12C21 15.31 18.31 18 15 18ZM6.43 6.58C4.4 7.54 3 9.61 3 12C3 14.39 4.4 16.46 6.43 17.42C6.77 17.58 7 17.9 7 18.27V18.45C7 19.13 6.29 19.55 5.68 19.27C2.92 18.01 1 15.23 1 12C1 8.77 2.92 5.99 5.68 4.73C6.29 4.44 7 4.87 7 5.55V5.74C7 6.11 6.77 6.42 6.43 6.58Z" fill="currentColor"/></svg>';

const RuxIconToll$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-toll", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-toll"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-toll":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconToll$1);
      }
      break;
  } });
}

const RuxIconToll = RuxIconToll$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconToll, defineCustomElement };
