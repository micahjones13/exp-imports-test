import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7ZM4 18H8C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM14 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H14C14.55 11 15 11.45 15 12C15 12.55 14.55 13 14 13Z" fill="currentColor"/></svg>';

const RuxIconSort$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-sort", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-sort"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-sort":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSort$1);
      }
      break;
  } });
}

const RuxIconSort = RuxIconSort$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSort, defineCustomElement };
