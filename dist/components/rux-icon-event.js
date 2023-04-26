import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3ZM16 13H13C12.45 13 12 13.45 12 14V17C12 17.55 12.45 18 13 18H16C16.55 18 17 17.55 17 17V14C17 13.45 16.55 13 16 13ZM6 20H18C18.55 20 19 19.55 19 19V9H5V19C5 19.55 5.45 20 6 20Z" fill="currentColor"/></svg>';

const RuxIconEvent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-event", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-event"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-event":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEvent$1);
      }
      break;
  } });
}

const RuxIconEvent = RuxIconEvent$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEvent, defineCustomElement };
