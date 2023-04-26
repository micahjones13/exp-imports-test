import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H17C18.1 3 19 3.9 19 5V21L12 18L5 21L5.01 5C5.01 3.9 5.9 3 7 3ZM12 15.82L17 18V6C17 5.45 16.55 5 16 5H8C7.45 5 7 5.45 7 6V18L12 15.82Z" fill="currentColor"/></svg>';

const RuxIconTurnedInNot$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-turned-in-not", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-turned-in-not"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-turned-in-not":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTurnedInNot$1);
      }
      break;
  } });
}

const RuxIconTurnedInNot = RuxIconTurnedInNot$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTurnedInNot, defineCustomElement };
