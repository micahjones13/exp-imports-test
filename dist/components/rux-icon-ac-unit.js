import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H17.83L20.37 8.46C20.76 8.07 20.76 7.44 20.37 7.05C19.98 6.66 19.34 6.66 18.95 7.05L15 11H13V9L16.95 5.05C17.34 4.66 17.34 4.02 16.95 3.63C16.56 3.24 15.93 3.24 15.54 3.63L13 6.17V3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3V6.17L8.46 3.63C8.07 3.24 7.44 3.24 7.05 3.63C6.66 4.02 6.66 4.66 7.05 5.05L11 9V11H9L5.05 7.05C4.66 6.66 4.02 6.66 3.63 7.05C3.24 7.44 3.24 8.07 3.63 8.46L6.17 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H6.17L3.63 15.54C3.24 15.93 3.24 16.56 3.63 16.95C4.02 17.34 4.66 17.34 5.05 16.95L9 13H11V15L7.05 18.95C6.66 19.34 6.66 19.98 7.05 20.37C7.44 20.76 8.07 20.76 8.46 20.37L11 17.83V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V17.83L15.54 20.37C15.93 20.76 16.56 20.76 16.95 20.37C17.34 19.98 17.34 19.34 16.95 18.95L13 15V13H15L18.95 16.95C19.34 17.34 19.98 17.34 20.37 16.95C20.76 16.56 20.76 15.93 20.37 15.54L17.83 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11Z" fill="currentColor"/></svg>';

const RuxIconAcUnit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-ac-unit", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-ac-unit"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-ac-unit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAcUnit$1);
      }
      break;
  } });
}

const RuxIconAcUnit = RuxIconAcUnit$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAcUnit, defineCustomElement };
