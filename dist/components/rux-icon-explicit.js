import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM11 9H14C14.55 9 15 8.55 15 8C15 7.45 14.55 7 14 7H10C9.45 7 9 7.45 9 8V16C9 16.55 9.45 17 10 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15H11V13H14C14.55 13 15 12.55 15 12C15 11.45 14.55 11 14 11H11V9Z" fill="currentColor"/></svg>';

const RuxIconExplicit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-explicit", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-explicit"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-explicit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExplicit$1);
      }
      break;
  } });
}

const RuxIconExplicit = RuxIconExplicit$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExplicit, defineCustomElement };
