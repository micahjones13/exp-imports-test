import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 13C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C10.02 3.17 9.09 3.44 8.23 3.84L9.76 5.37C10.46 5.13 11.22 5 12 5C15.87 5 19 8.13 19 12C19 12.79 18.87 13.54 18.63 14.24L20.16 15.77C20.56 14.91 20.83 13.98 20.94 13H22ZM20.44 18.88L5.12 3.56C4.73 3.17 4.1 3.17 3.71 3.56C3.32 3.95 3.32 4.58 3.71 4.97L5.04 6.3C3.97 7.62 3.26 9.23 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C14.77 20.74 16.38 20.03 17.69 18.96L19.02 20.29C19.41 20.68 20.04 20.68 20.43 20.29C20.83 19.9 20.83 19.27 20.44 18.88ZM5 12C5 15.87 8.13 19 12 19C13.61 19 15.09 18.45 16.27 17.54L6.46 7.73C5.55 8.91 5 10.39 5 12Z" fill="currentColor"/></svg>';

const RuxIconLocationDisabled$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-location-disabled", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-location-disabled"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-location-disabled":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLocationDisabled$1);
      }
      break;
  } });
}

const RuxIconLocationDisabled = RuxIconLocationDisabled$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLocationDisabled, defineCustomElement };
