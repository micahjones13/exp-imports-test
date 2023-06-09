import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.91 13.22L16.05 16.29H22V18H13.37V16.51L17.54 11.96C17.9 11.58 18.19 11.23 18.42 10.93C18.66 10.63 18.84 10.35 18.98 10.1C19.12 9.85 19.21 9.62 19.27 9.4C19.32 9.18 19.35 8.97 19.35 8.75C19.35 8.46 19.3 8.19 19.22 7.94C19.13 7.69 19.01 7.47 18.85 7.29C18.69 7.11 18.49 6.96 18.26 6.86C18.03 6.76 17.76 6.71 17.45 6.71C17.09 6.71 16.76 6.77 16.49 6.89C16.22 7.01 15.99 7.17 15.81 7.38C15.64 7.59 15.5 7.84 15.41 8.13C15.33 8.4 15.29 8.69 15.28 9H13.14C13.15 8.47 13.24 7.97 13.42 7.5C13.61 7 13.89 6.57 14.26 6.2C14.62 5.83 15.08 5.53 15.62 5.32C16.16 5.11 16.78 5 17.47 5C18.11 5 18.68 5.08 19.19 5.24C19.68 5.41 20.11 5.64 20.45 5.95C20.79 6.25 21.05 6.62 21.23 7.06C21.41 7.5 21.5 7.99 21.5 8.52C21.5 8.91 21.44 9.31 21.31 9.7C21.18 10.09 21 10.48 20.77 10.87C20.54 11.26 20.27 11.65 19.95 12.04C19.63 12.43 19.29 12.83 18.91 13.22ZM6 8C6 7.45 6.45 7 7 7C7.55 7 8 7.45 8 8V11H11C11.55 11 12 11.45 12 12C12 12.55 11.55 13 11 13H8V16C8 16.55 7.55 17 7 17C6.45 17 6 16.55 6 16V13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11H6V8Z" fill="currentColor"/></svg>';

const RuxIconExposurePlus2$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-exposure-plus-2", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-exposure-plus-2"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-exposure-plus-2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExposurePlus2$1);
      }
      break;
  } });
}

const RuxIconExposurePlus2 = RuxIconExposurePlus2$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExposurePlus2, defineCustomElement };
