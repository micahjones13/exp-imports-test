import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5H3V7.5C3 7.78 3.22 8 3.5 8C3.78 8 4 7.78 4 7.5V4.5C4 4.22 3.78 4 3.5 4H2.5C2.22 4 2 4.22 2 4.5C2 4.78 2.22 5 2.5 5ZM20 7H8C7.45 7 7 6.55 7 6C7 5.45 7.45 5 8 5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7ZM8 17H20C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19H8C7.45 19 7 18.55 7 18C7 17.45 7.45 17 8 17ZM20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11ZM4.5 16C4.78 16 5 16.22 5 16.5V19.5C5 19.78 4.78 20 4.5 20H2.5C2.22 20 2 19.78 2 19.5C2 19.22 2.22 19 2.5 19H4V18.5H3.5C3.22 18.5 3 18.28 3 18C3 17.72 3.22 17.5 3.5 17.5H4V17H2.5C2.22 17 2 16.78 2 16.5C2 16.22 2.22 16 2.5 16H4.5ZM2 10.5C2 10.22 2.22 10 2.5 10H4.5C4.78 10 5 10.22 5 10.5V10.72C5 10.83 4.96 10.95 4.88 11.04L3.2 13H4.5C4.78 13 5 13.22 5 13.5C5 13.78 4.78 14 4.5 14H2.5C2.22 14 2 13.78 2 13.5V13.28C2 13.17 2.04 13.05 2.12 12.96L3.8 11H2.5C2.22 11 2 10.78 2 10.5Z" fill="currentColor"/></svg>';

const RuxIconFormatListNumbered$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-list-numbered", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-list-numbered"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-list-numbered":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatListNumbered$1);
      }
      break;
  } });
}

const RuxIconFormatListNumbered = RuxIconFormatListNumbered$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatListNumbered, defineCustomElement };
