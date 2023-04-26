import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.71 15.88L10.83 12L14.71 8.11998C15.1 7.72998 15.1 7.09998 14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" fill="currentColor"/></svg>';

const RuxIconKeyboardArrowLeft$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-keyboard-arrow-left", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-keyboard-arrow-left"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-keyboard-arrow-left":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconKeyboardArrowLeft$1);
      }
      break;
  } });
}

const RuxIconKeyboardArrowLeft = RuxIconKeyboardArrowLeft$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconKeyboardArrowLeft, defineCustomElement };
