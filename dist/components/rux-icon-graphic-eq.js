import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C12.55 22 13 21.55 13 21V3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3V21C11 21.55 11.45 22 12 22ZM8 18C8.55 18 9 17.55 9 17V7C9 6.45 8.55 6 8 6C7.45 6 7 6.45 7 7V17C7 17.55 7.45 18 8 18ZM5 13C5 13.55 4.55 14 4 14C3.45 14 3 13.55 3 13V11C3 10.45 3.45 10 4 10C4.55 10 5 10.45 5 11V13ZM16 18C16.55 18 17 17.55 17 17V7C17 6.45 16.55 6 16 6C15.45 6 15 6.45 15 7V17C15 17.55 15.45 18 16 18ZM19 13V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11V13C21 13.55 20.55 14 20 14C19.45 14 19 13.55 19 13Z" fill="currentColor"/></svg>';

const RuxIconGraphicEq$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-graphic-eq", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-graphic-eq"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-graphic-eq":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGraphicEq$1);
      }
      break;
  } });
}

const RuxIconGraphicEq = RuxIconGraphicEq$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGraphicEq, defineCustomElement };
