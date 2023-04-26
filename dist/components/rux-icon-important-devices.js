import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V20H8C7.45 20 7 20.45 7 21C7 21.55 7.45 22 8 22H14C14.55 22 15 21.55 15 21C15 20.45 14.55 20 14 20H13V18H14C14.55 18 15 17.55 15 17C15 16.45 14.55 16 14 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4H19C19.55 4 20 4.45 20 5V8C20 8.55 20.45 9 21 9C21.55 9 22 8.55 22 8V4C22 2.9 21.1 2 20 2ZM18 11L23 11.01C23.55 11.01 24 11.45 24 12V21C24 21.55 23.55 22 23 22H18C17.45 22 17 21.55 17 21V12C17 11.45 17.45 11 18 11ZM18 20H23V13H18V20ZM11 6L11.97 9H15L12.53 10.76L13.47 13.67L11 11.87L8.53 13.67L9.47 10.76L7 9H10.03L11 6Z" fill="currentColor"/></svg>';

const RuxIconImportantDevices$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-important-devices", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-important-devices"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-important-devices":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconImportantDevices$1);
      }
      break;
  } });
}

const RuxIconImportantDevices = RuxIconImportantDevices$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconImportantDevices, defineCustomElement };
