import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C14 7.28 13.94 7.55 13.84 7.79C17.75 8.6 20.73 11.93 21 16H3C3.27 11.93 6.25 8.6 10.16 7.79C10.06 7.55 10 7.28 10 7C10 5.9 10.9 5 12 5C13.1 5 14 5.9 14 7ZM22 18C22 17.45 21.55 17 21 17H3C2.45 17 2 17.45 2 18C2 18.55 2.45 19 3 19H21C21.55 19 22 18.55 22 18Z" fill="currentColor"/></svg>';

const RuxIconRoomService$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-room-service", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-room-service"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-room-service":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRoomService$1);
      }
      break;
  } });
}

const RuxIconRoomService = RuxIconRoomService$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRoomService, defineCustomElement };
