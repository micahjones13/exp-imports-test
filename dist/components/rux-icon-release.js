import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9987 4.0186H18.9987V2.0186H14.9987V4.0186ZM10 13.64H14V11.64H10V13.64ZM8.99573 13.64H4.99573V11.64H8.99573V13.64ZM8.99573 16.64H4.99573V14.64H8.99573V16.64ZM14 16.64H10V14.64H14V16.64ZM18.9987 7.0186H14.9987V5.0186H18.9987V7.0186ZM4 17.8226V10.4672H20V17.8226H4ZM2 9.77094C2 9.0509 2.58371 8.46719 3.30375 8.46719H20.6962C21.4163 8.46719 22 9.0509 22 9.77094V18.5189C22 19.2389 21.4163 19.8226 20.6962 19.8226H3.30375C2.58371 19.8226 2 19.2389 2 18.5189V9.77094Z" fill="currentColor"/></svg>';

const RuxIconRelease$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-release", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-release"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-release":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRelease$1);
      }
      break;
  } });
}

const RuxIconRelease = RuxIconRelease$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRelease, defineCustomElement };
