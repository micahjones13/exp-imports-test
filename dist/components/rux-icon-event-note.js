import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V3H16V2C16 1.45 16.45 1 17 1C17.55 1 18 1.45 18 2V3ZM8 10H16C16.55 10 17 10.45 17 11C17 11.55 16.55 12 16 12H8C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10ZM18 19H6C5.45 19 5 18.55 5 18V8H19V18C19 18.55 18.55 19 18 19ZM8 14H13C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16H8C7.45 16 7 15.55 7 15C7 14.45 7.45 14 8 14Z" fill="currentColor"/></svg>';

const RuxIconEventNote$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-event-note", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-event-note"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-event-note":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEventNote$1);
      }
      break;
  } });
}

const RuxIconEventNote = RuxIconEventNote$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEventNote, defineCustomElement };
