import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10V11.79C14.99 12.24 14.45 12.46 14.14 12.15L11.36 9.36003C11.17 9.16003 11.17 8.85003 11.36 8.65003L14.14 5.86003C14.45 5.54003 14.99 5.76003 14.99 6.21003V8.00003H21C21.55 8.00003 22 8.45003 22 9.00003C22 9.55003 21.55 10 21 10H14.99ZM3 14H9.01V12.2C9.01 11.76 9.55 11.53 9.86 11.85L12.64 14.64C12.83 14.84 12.83 15.15 12.64 15.35L9.86 18.14C9.55 18.46 9.01 18.24 9.01 17.79V16H3C2.45 16 2 15.55 2 15C2 14.45 2.45 14 3 14Z" fill="currentColor"/></svg>';

const RuxIconCompareArrows$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-compare-arrows", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-compare-arrows"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-compare-arrows":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCompareArrows$1);
      }
      break;
  } });
}

const RuxIconCompareArrows = RuxIconCompareArrows$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCompareArrows, defineCustomElement };
