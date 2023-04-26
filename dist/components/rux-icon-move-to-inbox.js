import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H4.99C3.88 3 3 3.9 3 5V19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 15H15.87C15.4 15 15.02 15.34 14.89 15.8C14.54 17.07 13.37 18 12 18C10.63 18 9.46 17.07 9.11 15.8C8.98 15.34 8.6 15 8.13 15H4.99V6C4.99 5.45 5.44 5 5.99 5H18C18.55 5 19 5.45 19 6V15ZM14 10H16L12.36 13.65C12.16 13.85 11.85 13.85 11.65 13.65L8 10H10V7H14V10Z" fill="currentColor"/></svg>';

const RuxIconMoveToInbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-move-to-inbox", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-move-to-inbox"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-move-to-inbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMoveToInbox$1);
      }
      break;
  } });
}

const RuxIconMoveToInbox = RuxIconMoveToInbox$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMoveToInbox, defineCustomElement };
