import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 7.99998V11H5.82998L8.70998 8.11998C9.09998 7.72998 9.09998 7.09998 8.70998 6.70998C8.31998 6.31998 7.68998 6.31998 7.29998 6.70998L2.70998 11.3C2.31998 11.69 2.31998 12.32 2.70998 12.71L7.29998 17.3C7.68998 17.69 8.31998 17.69 8.70998 17.3C9.09998 16.91 9.09998 16.28 8.70998 15.89L5.82998 13H20C20.55 13 21 12.55 21 12V7.99998C21 7.44998 20.55 6.99998 20 6.99998C19.45 6.99998 19 7.44998 19 7.99998Z" fill="currentColor"/></svg>';

const RuxIconKeyboardReturn$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-keyboard-return", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-keyboard-return"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-keyboard-return":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconKeyboardReturn$1);
      }
      break;
  } });
}

const RuxIconKeyboardReturn = RuxIconKeyboardReturn$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconKeyboardReturn, defineCustomElement };
