import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3 4.70998C18.91 4.31998 18.28 4.31998 17.89 4.70998L7 15.59V9.99998C7 9.44998 6.55 8.99998 6 8.99998C5.45 8.99998 5 9.44998 5 9.99998V18C5 18.55 5.45 19 6 19H14C14.55 19 15 18.55 15 18C15 17.45 14.55 17 14 17H8.41L19.3 6.10998C19.68 5.72998 19.68 5.08998 19.3 4.70998Z" fill="currentColor"/></svg>';

const RuxIconCallReceived$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-call-received", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-call-received"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-call-received":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCallReceived$1);
      }
      break;
  } });
}

const RuxIconCallReceived = RuxIconCallReceived$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCallReceived, defineCustomElement };
