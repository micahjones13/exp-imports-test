import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12L9.29 8.11998C8.9 7.72998 8.9 7.09998 9.29 6.70998C9.68 6.31998 10.31 6.31998 10.7 6.70998L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.31 17.69 9.68 17.69 9.29 17.3C8.91 16.91 8.9 16.27 9.29 15.88Z" fill="currentColor"/></svg>';

const RuxIconKeyboardArrowRight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-keyboard-arrow-right", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-keyboard-arrow-right"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-keyboard-arrow-right":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconKeyboardArrowRight$1);
      }
      break;
  } });
}

const RuxIconKeyboardArrowRight = RuxIconKeyboardArrowRight$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconKeyboardArrowRight, defineCustomElement };
