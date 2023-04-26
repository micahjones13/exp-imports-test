import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.77 7.23L19.78 7.22L16.59 4.03C16.3 3.74 15.82 3.74 15.53 4.03C15.24 4.32 15.24 4.8 15.53 5.09L17.11 6.67C16.06 7.07 15.35 8.14 15.53 9.38C15.69 10.48 16.63 11.37 17.73 11.49C18.2 11.54 18.61 11.46 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V20C4 20.55 4.45 21 5 21H13C13.55 21 14 20.55 14 20V13.5H15.5V18.36C15.5 19.67 16.44 20.86 17.74 20.99C19.24 21.14 20.5 19.97 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10ZM8 13.5V16.12C8 16.63 8.68 16.81 8.93 16.37L11.57 11.75C11.76 11.41 11.52 11 11.14 11H10V8C10 7.48 9.3 7.31 9.06 7.76L6.39 12.76C6.21 13.1 6.45 13.5 6.83 13.5H8Z" fill="currentColor"/></svg>';

const RuxIconEvStation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-ev-station", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-ev-station"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-ev-station":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEvStation$1);
      }
      break;
  } });
}

const RuxIconEvStation = RuxIconEvStation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEvStation, defineCustomElement };
