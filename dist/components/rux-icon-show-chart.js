import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.19997 17.78L9.49997 12.48L12.75 15.73C13.16 16.14 13.82 16.12 14.2 15.69L21.37 7.62003C21.72 7.23003 21.7 6.63003 21.33 6.25003C20.93 5.85003 20.26 5.86003 19.88 6.29003L13.49 13.47L10.2 10.18C9.80997 9.79003 9.17997 9.79003 8.78997 10.18L2.69997 16.28C2.30997 16.67 2.30997 17.3 2.69997 17.69L2.78997 17.78C3.17997 18.17 3.81997 18.17 4.19997 17.78Z" fill="currentColor"/></svg>';

const RuxIconShowChart$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-show-chart", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-show-chart"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-show-chart":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconShowChart$1);
      }
      break;
  } });
}

const RuxIconShowChart = RuxIconShowChart$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconShowChart, defineCustomElement };
