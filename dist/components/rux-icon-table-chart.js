import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H5C3.9 3 3 3.9 3 5V8H22V5C22 3.9 21.1 3 20 3ZM20 21H17V10H22V19C22 20.1 21.1 21 20 21ZM15 10.02H10V21H15V10.02ZM5 21C3.9 21 3 20.1 3 19V10H8V21H5Z" fill="currentColor"/></svg>';

const RuxIconTableChart$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-table-chart", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-table-chart"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-table-chart":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTableChart$1);
      }
      break;
  } });
}

const RuxIconTableChart = RuxIconTableChart$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTableChart, defineCustomElement };
