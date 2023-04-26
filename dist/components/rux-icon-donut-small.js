import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.82C11 21.46 10.41 21.94 9.79 21.8C5.32 20.8 2 16.79 2 12C2 7.21002 5.32 3.20002 9.79 2.20002C10.41 2.06002 11 2.54002 11 3.18002V20.82ZM13.03 3.18002V9.99002C13.03 10.54 13.48 10.99 14.03 10.99H20.82C21.46 10.99 21.94 10.4 21.8 9.77002C20.95 6.01002 18 3.05002 14.25 2.20002C13.62 2.06002 13.03 2.54002 13.03 3.18002ZM13.03 20.82V14.01C13.03 13.46 13.48 13.01 14.04 13H20.83C21.46 13 21.95 13.6 21.81 14.22C20.96 17.98 18.01 20.95 14.25 21.8C13.62 21.94 13.03 21.46 13.03 20.82Z" fill="currentColor"/></svg>';

const RuxIconDonutSmall$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-donut-small", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-donut-small"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-donut-small":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDonutSmall$1);
      }
      break;
  } });
}

const RuxIconDonutSmall = RuxIconDonutSmall$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDonutSmall, defineCustomElement };
