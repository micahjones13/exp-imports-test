import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.34 19.24C3.22 16.12 3.22 11.05 6.34 7.93L11.3 2.98C11.69 2.59 12.32 2.59 12.71 2.98L17.66 7.93C20.78 11.05 20.78 16.12 17.66 19.24C16.1 20.8 14.05 21.58 12 21.58C9.95 21.58 7.9 20.8 6.34 19.24ZM7.76 17.83C8.89 18.97 10.4 19.59 12 19.59V5.1L7.76 9.35C6.62 10.48 6 11.99 6 13.59C6 15.19 6.62 16.69 7.76 17.83Z" fill="currentColor"/></svg>';

const RuxIconInvertColors$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-invert-colors", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-invert-colors"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-invert-colors":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconInvertColors$1);
      }
      break;
  } });
}

const RuxIconInvertColors = RuxIconInvertColors$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconInvertColors, defineCustomElement };
