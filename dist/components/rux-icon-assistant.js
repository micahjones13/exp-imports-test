import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2H19C20.1 2 21 2.9 21 4V18C21 19.1 20.1 20 19 20H15L12.7 22.29C12.31 22.68 11.68 22.68 11.29 22.29L9 20H5C3.9 20 3 19.1 3 18V4C3 2.9 3.9 2 5 2ZM12 17L13.88 12.88L18 11L13.88 9.12L12 5L10.12 9.12L6 11L10.12 12.88L12 17Z" fill="currentColor"/></svg>';

const RuxIconAssistant$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-assistant", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-assistant"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-assistant":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAssistant$1);
      }
      break;
  } });
}

const RuxIconAssistant = RuxIconAssistant$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAssistant, defineCustomElement };
