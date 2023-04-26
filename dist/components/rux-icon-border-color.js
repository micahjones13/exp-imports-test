import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.71 4.83832C21.1 4.46392 21.1 3.85912 20.71 3.48472L18.37 1.23832C17.98 0.86392 17.35 0.86392 16.96 1.23832L15 3.11992L18.75 6.71992L20.71 4.83832ZM17.75 7.67992L14 4.07992L4.15 13.5359C4.05 13.6319 4 13.7471 4 13.8815V16.7999C4 17.0687 4.22 17.2799 4.5 17.2799H7.54C7.67 17.2799 7.8 17.2319 7.89 17.1359L17.75 7.67992ZM22 20.1599H2C0.9 20.1599 0 21.0239 0 22.0799C0 23.1359 0.9 23.9999 2 23.9999H22C23.1 23.9999 24 23.1359 24 22.0799C24 21.0239 23.1 20.1599 22 20.1599Z" fill="currentColor"/></svg>';

const RuxIconBorderColor$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-color", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-color"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-color":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderColor$1);
      }
      break;
  } });
}

const RuxIconBorderColor = RuxIconBorderColor$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderColor, defineCustomElement };
