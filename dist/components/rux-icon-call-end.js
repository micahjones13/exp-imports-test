import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50997 15.4801L6.50997 13.8901C6.98997 13.5101 7.26997 12.9301 7.26997 12.3201V9.72011C10.29 8.74011 13.56 8.73011 16.59 9.72011V12.3301C16.59 12.9401 16.87 13.5201 17.35 13.9001L19.34 15.4801C20.14 16.1101 21.28 16.0501 22 15.3301L23.22 14.1101C24.02 13.3101 24.02 11.9801 23.17 11.2301C16.76 5.57011 7.09997 5.57011 0.689974 11.2301C-0.160026 11.9801 -0.160026 13.3101 0.639974 14.1101L1.85997 15.3301C2.56997 16.0501 3.70997 16.1101 4.50997 15.4801Z" fill="currentColor"/></svg>';

const RuxIconCallEnd$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-call-end", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-call-end"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-call-end":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCallEnd$1);
      }
      break;
  } });
}

const RuxIconCallEnd = RuxIconCallEnd$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCallEnd, defineCustomElement };
