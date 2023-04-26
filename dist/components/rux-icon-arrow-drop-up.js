import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70999 12.2902L11.3 9.70021C11.69 9.31021 12.32 9.31021 12.71 9.70021L15.3 12.2902C15.93 12.9202 15.48 14.0002 14.59 14.0002H9.40999C8.51999 14.0002 8.07999 12.9202 8.70999 12.2902Z" fill="currentColor"/></svg>';

const RuxIconArrowDropUp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-drop-up", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-drop-up"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-drop-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowDropUp$1);
      }
      break;
  } });
}

const RuxIconArrowDropUp = RuxIconArrowDropUp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowDropUp, defineCustomElement };
