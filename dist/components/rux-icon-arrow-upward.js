import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 19V7.82998L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.70998C12.32 4.31998 11.69 4.31998 11.3 4.70998L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.82998V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" fill="currentColor"/></svg>';

const RuxIconArrowUpward$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-upward", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-upward"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-upward":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowUpward$1);
      }
      break;
  } });
}

const RuxIconArrowUpward = RuxIconArrowUpward$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowUpward, defineCustomElement };
