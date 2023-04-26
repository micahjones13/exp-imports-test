import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.82C11 21.46 10.41 21.94 9.79 21.8C5.32 20.8 2 16.79 2 12C2 7.20995 5.32 3.19995 9.79 2.19995C10.41 2.05995 11 2.53995 11 3.17995V20.82ZM13.03 3.17995V9.98995C13.03 10.54 13.48 10.99 14.03 10.99H20.82C21.46 10.99 21.94 10.4 21.8 9.76995C20.95 6.00995 18 3.04995 14.25 2.19995C13.62 2.05995 13.03 2.53995 13.03 3.17995ZM13.03 20.82V14.01C13.03 13.46 13.48 13.01 14.04 13H20.83C21.46 13 21.95 13.6 21.81 14.22C20.96 17.98 18.01 20.95 14.25 21.8C13.62 21.94 13.03 21.46 13.03 20.82Z" fill="currentColor"/></svg>';

const RuxIconPieChart$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pie-chart", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pie-chart"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pie-chart":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPieChart$1);
      }
      break;
  } });
}

const RuxIconPieChart = RuxIconPieChart$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPieChart, defineCustomElement };
