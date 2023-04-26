import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM12.75 5C12.34 5 12 5.34 12 5.75V10.25C12 10.66 12.34 11 12.75 11C13.16 11 13.5 10.66 13.5 10.25V8L15.29 10.69C15.42 10.88 15.64 11 15.88 11C16.45 11 16.78 10.37 16.47 9.9L15.2 8L16.47 6.1C16.78 5.63 16.44 5 15.88 5C15.64 5 15.42 5.12 15.29 5.31L13.5 8V5.75C13.5 5.34 13.16 5 12.75 5ZM7 8.25C7 7.7 7.45 7.25 8 7.25H9.5V6.5H7.75C7.34 6.5 7 6.16 7 5.75C7 5.34 7.34 5 7.75 5H10C10.55 5 11 5.45 11 6V7.75C11 8.3 10.55 8.75 10 8.75H8.5V9.5H10.25C10.66 9.5 11 9.84 11 10.25C11 10.66 10.66 11 10.25 11H8C7.45 11 7 10.55 7 10V8.25ZM13.71 18.29L18.74 13.26C18.91 13.09 19 12.87 19 12.63C19 11.85 18.05 11.45 17.49 12.01L13 16.5L9.7 13.22C9.31 12.83 8.68 12.83 8.29 13.22L5.26 16.25C5.09 16.41 5 16.64 5 16.87C5 17.65 5.95 18.05 6.51 17.49L9 15L12.3 18.29C12.69 18.68 13.32 18.68 13.71 18.29Z" fill="currentColor"/></svg>';

const RuxIconScore$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-score", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-score"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-score":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScore$1);
      }
      break;
  } });
}

const RuxIconScore = RuxIconScore$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScore, defineCustomElement };
