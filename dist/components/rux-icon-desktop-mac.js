import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H21C22.1 2 23 2.9 23 4V16C23 17.1 22.1 18 21 18H14L15.63 20.45C16.08 21.11 15.6 22 14.8 22H9.2C8.4 22 7.93 21.11 8.37 20.45L10 18H3C1.9 18 1 17.1 1 16V4C1 2.9 1.9 2 3 2ZM3 14H21V5C21 4.45 20.55 4 20 4H4C3.45 4 3 4.45 3 5V14Z" fill="currentColor"/></svg>';

const RuxIconDesktopMac$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-desktop-mac", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-desktop-mac"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-desktop-mac":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDesktopMac$1);
      }
      break;
  } });
}

const RuxIconDesktopMac = RuxIconDesktopMac$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDesktopMac, defineCustomElement };
