import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM4 19H20C20.55 19 21 18.55 21 18V9H14C13.45 9 13 8.55 13 8V5H4C3.45 5 3 5.45 3 6V18C3 18.55 3.45 19 4 19Z" fill="currentColor"/></svg>';

const RuxIconTab$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-tab", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTab$1);
      }
      break;
  } });
}

const RuxIconTab = RuxIconTab$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTab, defineCustomElement };
