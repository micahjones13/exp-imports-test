import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6H21C22.1 6 23 6.9 23 8V16C23 17.1 22.1 18 21 18H3C1.9 18 1 17.1 1 16V8C1 6.9 1.9 6 3 6ZM4 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8H19V11C19 11.55 18.55 12 18 12C17.45 12 17 11.55 17 11V8H15V11C15 11.55 14.55 12 14 12C13.45 12 13 11.55 13 11V8H11V11C11 11.55 10.55 12 10 12C9.45 12 9 11.55 9 11V8H7V11C7 11.55 6.55 12 6 12C5.45 12 5 11.55 5 11V8H4C3.45 8 3 8.45 3 9V15C3 15.55 3.45 16 4 16Z" fill="currentColor"/></svg>';

const RuxIconStraighten$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-straighten", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-straighten"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-straighten":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStraighten$1);
      }
      break;
  } });
}

const RuxIconStraighten = RuxIconStraighten$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStraighten, defineCustomElement };
