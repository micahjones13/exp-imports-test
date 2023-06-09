import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C11 1.45 11.44 1 12 1C12.55 1 13 1.45 13 2V6C13 6.55 12.55 7 12 7C11.45 7 11 6.55 11 6V2ZM8.47 7.06L7.75 6.34C7.36 5.95 6.73 5.95 6.34 6.34C5.95 6.73 5.95 7.36 6.34 7.75L7.05 8.46C7.44 8.85 8.07 8.85 8.46 8.46C8.85 8.08 8.85 7.44 8.47 7.06ZM6 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H6C6.55 13 7 12.55 7 12C7 11.45 6.55 11 6 11ZM17.66 6.35C17.27 5.96 16.64 5.96 16.25 6.35L15.54 7.06C15.15 7.45 15.15 8.08 15.54 8.47C15.93 8.86 16.56 8.86 16.95 8.47L17.66 7.76C18.04 7.37 18.04 6.73 17.66 6.35ZM18 13C17.45 13 17 12.56 17 12C17 11.45 17.45 11 18 11H22C22.55 11 23 11.45 23 12C23 12.55 22.55 13 22 13H18ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM16.24 17.65L15.53 16.94C15.15 16.56 15.15 15.92 15.53 15.53C15.92 15.14 16.55 15.14 16.94 15.53L17.65 16.24C18.04 16.63 18.04 17.26 17.65 17.65C17.26 18.04 16.63 18.04 16.24 17.65ZM6.34 17.65C6.73 18.04 7.36 18.04 7.75 17.65L8.46 16.94C8.85 16.55 8.85 15.92 8.46 15.53C8.07 15.14 7.44 15.14 7.05 15.53L6.34 16.24C5.96 16.63 5.96 17.27 6.34 17.65ZM13 22C13 22.55 12.56 23 12 23C11.45 23 11 22.55 11 22V18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18V22Z" fill="currentColor"/></svg>';

const RuxIconFlare$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-flare", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-flare"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-flare":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFlare$1);
      }
      break;
  } });
}

const RuxIconFlare = RuxIconFlare$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFlare, defineCustomElement };
