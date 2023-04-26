import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.28 4.55L14 6H19C19.55 6 20 6.45 20 7V15C20 15.55 19.55 16 19 16H13.61C13.24 16 12.89 15.79 12.72 15.45L12 14H7V20C7 20.55 6.55 21 6 21C5.45 21 5 20.55 5 20V5C5 4.45 5.45 4 6 4H12.38C12.76 4 13.11 4.21 13.28 4.55ZM14 14H18V8H13L12 6H7V12H13L14 14Z" fill="currentColor"/></svg>';

const RuxIconOutlinedFlag$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-outlined-flag", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-outlined-flag"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-outlined-flag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconOutlinedFlag$1);
      }
      break;
  } });
}

const RuxIconOutlinedFlag = RuxIconOutlinedFlag$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconOutlinedFlag, defineCustomElement };
