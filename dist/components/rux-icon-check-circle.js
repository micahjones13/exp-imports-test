import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5.7 12.7L9.29 16.29C9.68 16.68 10.32 16.68 10.7 16.29L18.29 8.7C18.68 8.31 18.68 7.68 18.29 7.29C17.9 6.9 17.27 6.9 16.88 7.29L10 14.17L7.11 11.29C6.72 10.9 6.09 10.9 5.7 11.29C5.31 11.68 5.31 12.31 5.7 12.7Z" fill="currentColor"/></svg>';

const RuxIconCheckCircle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-check-circle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-check-circle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-check-circle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCheckCircle$1);
      }
      break;
  } });
}

const RuxIconCheckCircle = RuxIconCheckCircle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCheckCircle, defineCustomElement };
