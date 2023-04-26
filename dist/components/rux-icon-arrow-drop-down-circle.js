import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM8.86 11.86L11.65 14.65C11.84 14.84 12.16 14.84 12.36 14.64L15.15 11.85C15.47 11.54 15.25 11 14.8 11H9.21C8.76 11 8.54 11.54 8.86 11.86Z" fill="currentColor"/></svg>';

const RuxIconArrowDropDownCircle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-drop-down-circle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-drop-down-circle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-drop-down-circle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowDropDownCircle$1);
      }
      break;
  } });
}

const RuxIconArrowDropDownCircle = RuxIconArrowDropDownCircle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowDropDownCircle, defineCustomElement };
