import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM9 7H7V9H9V7ZM16 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z" fill="currentColor"/></svg>';

const RuxIconListAlt$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-list-alt", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-list-alt"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-list-alt":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconListAlt$1);
      }
      break;
  } });
}

const RuxIconListAlt = RuxIconListAlt$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconListAlt, defineCustomElement };
