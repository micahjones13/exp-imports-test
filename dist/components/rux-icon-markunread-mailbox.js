import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H10V11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11V4H13C13.55 4 14 3.55 14 3V1C14 0.45 13.55 0 13 0H7C6.45 0 6 0.45 6 1V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6Z" fill="currentColor"/></svg>';

const RuxIconMarkunreadMailbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-markunread-mailbox", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-markunread-mailbox"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-markunread-mailbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMarkunreadMailbox$1);
      }
      break;
  } });
}

const RuxIconMarkunreadMailbox = RuxIconMarkunreadMailbox$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMarkunreadMailbox, defineCustomElement };
