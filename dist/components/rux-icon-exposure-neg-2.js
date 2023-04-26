import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.91 13.22L15.05 16.29H21V18H12.37V16.51L16.54 11.96C16.9 11.58 17.19 11.23 17.42 10.93C17.66 10.63 17.84 10.35 17.98 10.1C18.12 9.85 18.21 9.62 18.27 9.4C18.32 9.18 18.35 8.97 18.35 8.75C18.35 8.46 18.3 8.19 18.22 7.94C18.13 7.69 18.01 7.47 17.85 7.29C17.69 7.11 17.49 6.96 17.26 6.86C17.03 6.76 16.76 6.71 16.45 6.71C16.09 6.71 15.76 6.77 15.49 6.89C15.22 7.01 14.99 7.17 14.81 7.38C14.64 7.59 14.5 7.84 14.41 8.13C14.33 8.4 14.29 8.69 14.28 9H12.14C12.15 8.47 12.24 7.97 12.42 7.5C12.61 7 12.89 6.57 13.26 6.2C13.62 5.83 14.08 5.53 14.62 5.32C15.16 5.11 15.78 5 16.47 5C17.11 5 17.68 5.08 18.19 5.24C18.68 5.41 19.11 5.64 19.45 5.95C19.79 6.25 20.05 6.62 20.23 7.06C20.41 7.5 20.5 7.99 20.5 8.52C20.5 8.91 20.44 9.31 20.31 9.7C20.18 10.09 20 10.48 19.77 10.87C19.54 11.26 19.27 11.65 18.95 12.04C18.63 12.43 18.29 12.83 17.91 13.22ZM3 13C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11H9C9.55 11 10 11.45 10 12C10 12.55 9.55 13 9 13H3Z" fill="currentColor"/></svg>';

const RuxIconExposureNeg2$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-exposure-neg-2", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-exposure-neg-2"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-exposure-neg-2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExposureNeg2$1);
      }
      break;
  } });
}

const RuxIconExposureNeg2 = RuxIconExposureNeg2$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExposureNeg2, defineCustomElement };
