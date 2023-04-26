import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.29 8.71005L9.69997 11.3001C9.30997 11.6901 9.30997 12.3201 9.69997 12.7101L12.29 15.3001C12.92 15.9301 14 15.4801 14 14.5901V9.41005C14 8.52005 12.92 8.08005 12.29 8.71005Z" fill="currentColor"/></svg>';

const RuxIconArrowLeft$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-left", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-left"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-left":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowLeft$1);
      }
      break;
  } });
}

const RuxIconArrowLeft = RuxIconArrowLeft$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowLeft, defineCustomElement };
