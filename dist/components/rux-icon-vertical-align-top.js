import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C4.45 5 4 4.55 4 4C4 3.45 4.45 3 5 3H19C19.55 3 20 3.45 20 4C20 4.55 19.55 5 19 5H5ZM11 11H9.21C8.76 11 8.54 10.46 8.85 10.15L11.64 7.36C11.84 7.16 12.15 7.16 12.35 7.36L15.14 10.15C15.46 10.46 15.24 11 14.79 11H13V20C13 20.55 12.55 21 12 21C11.45 21 11 20.55 11 20V11Z" fill="currentColor"/></svg>';

const RuxIconVerticalAlignTop$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-vertical-align-top", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-vertical-align-top"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-vertical-align-top":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVerticalAlignTop$1);
      }
      break;
  } });
}

const RuxIconVerticalAlignTop = RuxIconVerticalAlignTop$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVerticalAlignTop, defineCustomElement };
