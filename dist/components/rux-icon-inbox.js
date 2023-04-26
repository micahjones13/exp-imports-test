import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99 3H19C20.1 3 21 3.89 21 5V19C21 20.1 20.1 21 19 21H4.99C3.88 21 3 20.1 3 19L3.01 5C3.01 3.89 3.88 3 4.99 3ZM15.87 15H19V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V15H8.13C8.6 15 8.98 15.34 9.11 15.8C9.46 17.07 10.63 18 12 18C13.37 18 14.54 17.07 14.89 15.8C15.02 15.34 15.4 15 15.87 15Z" fill="currentColor"/></svg>';

const RuxIconInbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-inbox", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-inbox"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-inbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconInbox$1);
      }
      break;
  } });
}

const RuxIconInbox = RuxIconInbox$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconInbox, defineCustomElement };
