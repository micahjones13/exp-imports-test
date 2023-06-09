import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.89 8.3C14.63 7.44 13.92 6.9 12.5 6.9C12.1 6.9 11.73 6.95 11.41 7.03L9.89998 5.52C10.25 5.37 10.61 5.24 11 5.16V4.5C11 3.67 11.67 3 12.5 3C13.33 3 14 3.67 14 4.5V5.19C15.52 5.56 16.49 6.49 16.93 7.64C17.18 8.29 16.66 9 15.96 9H15.9C15.45 9 15.02 8.73 14.89 8.3ZM4.76998 6.03C4.37998 5.64 4.37998 5.01 4.76998 4.62C5.15998 4.23 5.78998 4.23 6.17998 4.62L19.39 17.83C19.78 18.22 19.78 18.85 19.39 19.24C19 19.63 18.37 19.63 17.98 19.24L16.47 17.73C15.84 18.3 14.97 18.67 14.01 18.85V19.5C14.01 20.33 13.34 21 12.51 21C11.68 21 11.01 20.33 11.01 19.5V18.83C9.53998 18.51 8.23998 17.72 7.64998 16.39C7.35998 15.74 7.87998 15 8.59998 15H8.76998C9.17998 15 9.51998 15.28 9.66998 15.67C9.99998 16.51 10.85 17.1 12.5 17.1C13.87 17.1 14.58 16.68 14.92 16.19L11.41 12.68C9.05998 11.99 7.49998 10.85 7.49998 8.77L4.76998 6.03Z" fill="currentColor"/></svg>';

const RuxIconMoneyOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-money-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-money-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-money-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMoneyOff$1);
      }
      break;
  } });
}

const RuxIconMoneyOff = RuxIconMoneyOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMoneyOff, defineCustomElement };
