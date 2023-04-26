import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4 8.8C10.4 11.451 12.549 13.6 15.2 13.6C17.851 13.6 20 11.451 20 8.8C20 6.14903 17.851 4 15.2 4C12.549 4 10.4 6.14903 10.4 8.8ZM7.2 17.6C5.43269 17.6 4 16.1673 4 14.4C4 12.6327 5.43269 11.2 7.2 11.2C8.96731 11.2 10.4 12.6327 10.4 14.4C10.4 16.1673 8.96731 17.6 7.2 17.6ZM14.8 20C13.6954 20 12.8 19.1046 12.8 18C12.8 16.8954 13.6954 16 14.8 16C15.9046 16 16.8 16.8954 16.8 18C16.8 19.1046 15.9046 20 14.8 20Z" fill="currentColor"/></svg>';

const RuxIconBubbleChart$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-bubble-chart", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-bubble-chart"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-bubble-chart":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBubbleChart$1);
      }
      break;
  } });
}

const RuxIconBubbleChart = RuxIconBubbleChart$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBubbleChart, defineCustomElement };
