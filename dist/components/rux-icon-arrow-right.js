import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.71 15.2902L14.3 12.7002C14.69 12.3102 14.69 11.6802 14.3 11.2902L11.71 8.70022C11.08 8.08022 10 8.52022 10 9.41022V14.5802C10 15.4802 11.08 15.9202 11.71 15.2902Z" fill="currentColor"/></svg>';

const RuxIconArrowRight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-right", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-right"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-right":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowRight$1);
      }
      break;
  } });
}

const RuxIconArrowRight = RuxIconArrowRight$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowRight, defineCustomElement };
