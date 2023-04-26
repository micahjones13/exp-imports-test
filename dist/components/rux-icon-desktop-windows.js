import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H21C22.1 2 23 2.9 23 4V16C23 17.1 22.1 18 21 18H14V20H15C15.55 20 16 20.45 16 21C16 21.55 15.55 22 15 22H9C8.45 22 8 21.55 8 21C8 20.45 8.45 20 9 20H10V18H3C1.9 18 1 17.1 1 16V4C1 2.9 1.9 2 3 2ZM4 16H20C20.55 16 21 15.55 21 15V5C21 4.45 20.55 4 20 4H4C3.45 4 3 4.45 3 5V15C3 15.55 3.45 16 4 16Z" fill="currentColor"/></svg>';

const RuxIconDesktopWindows$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-desktop-windows", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-desktop-windows"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-desktop-windows":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDesktopWindows$1);
      }
      break;
  } });
}

const RuxIconDesktopWindows = RuxIconDesktopWindows$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDesktopWindows, defineCustomElement };
