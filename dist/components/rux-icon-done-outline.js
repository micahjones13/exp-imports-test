import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43001 13.44L18.36 3.51C19.14 2.73 20.4 2.73 21.19 3.51L22.59 4.91C23.37 5.69 23.37 6.96 22.59 7.74L9.84001 20.48C9.06001 21.26 7.79001 21.26 7.01001 20.48L1.41001 14.88C0.630012 14.1 0.630012 12.83 1.41001 12.05L2.81001 10.65C3.59001 9.87 4.86001 9.87 5.64001 10.65L8.43001 13.44ZM20.47 7.03C20.86 6.64 20.86 6.02 20.47 5.63C20.08 5.24 19.46 5.24 19.07 5.63L8.43001 16.27L4.93001 12.77C4.54001 12.38 3.92001 12.38 3.53001 12.77C3.14001 13.16 3.14001 13.78 3.53001 14.17L7.73001 18.37C8.12001 18.76 8.74001 18.76 9.13001 18.37L20.47 7.03Z" fill="currentColor"/></svg>';

const RuxIconDoneOutline$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-done-outline", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-done-outline"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-done-outline":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDoneOutline$1);
      }
      break;
  } });
}

const RuxIconDoneOutline = RuxIconDoneOutline$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDoneOutline, defineCustomElement };
