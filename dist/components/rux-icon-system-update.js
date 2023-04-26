import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 5V19H7V5H17ZM13 13H14.79C15.24 13 15.46 13.54 15.15 13.85L12.36 16.64C12.16 16.84 11.85 16.84 11.65 16.64L8.86 13.85C8.54 13.54 8.76 13 9.21 13H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V13Z" fill="currentColor"/></svg>';

const RuxIconSystemUpdate$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-system-update", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-system-update"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-system-update":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSystemUpdate$1);
      }
      break;
  } });
}

const RuxIconSystemUpdate = RuxIconSystemUpdate$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSystemUpdate, defineCustomElement };
