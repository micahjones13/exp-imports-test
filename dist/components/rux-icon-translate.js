import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.65 15.67C12.79 15.31 12.7 14.9 12.42 14.62L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H16.01C16.55 6 17 5.55 17 5.01V4.99C17 4.45 16.55 4 16.01 4H10V3C10 2.45 9.55 2 9 2C8.45 2 8 2.45 8 3V4H1.99C1.45 4 1 4.45 1 4.99C1 5.54 1.45 5.98 1.99 5.98H12.17C11.5 7.92 10.44 9.75 9 11.35C8.19 10.46 7.51 9.49 6.94 8.47C6.78 8.18 6.49 8 6.16 8C5.47 8 5.03 8.75 5.37 9.35C6 10.48 6.77 11.56 7.67 12.56L3.3 16.87C2.9 17.26 2.9 17.9 3.3 18.29C3.69 18.68 4.32 18.68 4.72 18.29L9 14L11.02 16.02C11.53 16.53 12.4 16.34 12.65 15.67ZM17.5 10C16.9 10 16.36 10.37 16.15 10.94L12.48 20.74C12.24 21.35 12.7 22 13.35 22C13.74 22 14.09 21.76 14.23 21.39L15.12 19H19.87L20.77 21.39C20.91 21.75 21.26 22 21.65 22C22.3 22 22.76 21.35 22.53 20.74L18.86 10.94C18.64 10.37 18.1 10 17.5 10ZM17.5 12.67L15.88 17H19.12L17.5 12.67Z" fill="currentColor"/></svg>';

const RuxIconTranslate$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-translate", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-translate"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-translate":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTranslate$1);
      }
      break;
  } });
}

const RuxIconTranslate = RuxIconTranslate$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTranslate, defineCustomElement };
