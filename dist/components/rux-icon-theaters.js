import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4V5H16V4C16 3.45 15.55 3 15 3H9C8.45 3 8 3.45 8 4V5H6V4C6 3.45 5.55 3 5 3C4.45 3 4 3.45 4 4V20C4 20.55 4.45 21 5 21C5.55 21 6 20.55 6 20V19H8V20C8 20.55 8.45 21 9 21H15C15.55 21 16 20.55 16 20V19H18V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V4C20 3.45 19.55 3 19 3C18.45 3 18 3.45 18 4ZM8 17H6V15H8V17ZM6 13H8V11H6V13ZM8 9H6V7H8V9ZM16 17H18V15H16V17ZM18 13H16V11H18V13ZM16 9H18V7H16V9Z" fill="currentColor"/></svg>';

const RuxIconTheaters$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-theaters", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-theaters"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-theaters":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTheaters$1);
      }
      break;
  } });
}

const RuxIconTheaters = RuxIconTheaters$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTheaters, defineCustomElement };
