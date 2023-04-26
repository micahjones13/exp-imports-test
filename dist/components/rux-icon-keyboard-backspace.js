import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H6.82998L9.70998 8.11998C10.1 7.72998 10.1 7.09998 9.70998 6.70998C9.31998 6.31998 8.68998 6.31998 8.29998 6.70998L3.70998 11.3C3.31998 11.69 3.31998 12.32 3.70998 12.71L8.29998 17.3C8.68998 17.69 9.31998 17.69 9.70998 17.3C10.1 16.91 10.1 16.28 9.70998 15.89L6.82998 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11Z" fill="currentColor"/></svg>';

const RuxIconKeyboardBackspace$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-keyboard-backspace", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-keyboard-backspace"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-keyboard-backspace":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconKeyboardBackspace$1);
      }
      break;
  } });
}

const RuxIconKeyboardBackspace = RuxIconKeyboardBackspace$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconKeyboardBackspace, defineCustomElement };
