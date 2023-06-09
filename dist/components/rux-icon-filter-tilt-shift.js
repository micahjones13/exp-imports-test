import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.22986C11 2.58986 10.41 2.09986 9.78998 2.23986C8.66998 2.49986 7.60998 2.93986 6.66998 3.53986C6.13998 3.87986 6.05998 4.63986 6.50998 5.08986C6.82998 5.40986 7.33998 5.48986 7.71998 5.24986C8.48998 4.75986 9.33998 4.39986 10.26 4.19986C10.7 4.09986 11 3.68986 11 3.22986ZM17.33 3.54986C16.39 2.94986 15.33 2.50986 14.21 2.24986C13.59 2.10986 13 2.58986 13 3.22986C13 3.67986 13.3 4.09986 13.74 4.18986C14.65 4.38986 15.51 4.75986 16.27 5.23986C16.66 5.47986 17.16 5.40986 17.48 5.07986C17.94 4.63986 17.87 3.88986 17.33 3.54986ZM21.76 9.78986C21.9 10.4099 21.41 10.9999 20.77 10.9999C20.31 10.9999 19.9 10.6999 19.8 10.2499C19.6 9.33986 19.24 8.48986 18.75 7.71986C18.51 7.33986 18.59 6.82986 18.91 6.50986C19.36 6.05986 20.12 6.13986 20.46 6.66986C21.06 7.60986 21.5 8.66986 21.76 9.78986ZM5.09998 6.50986C4.63998 6.05986 3.88998 6.12986 3.54998 6.66986C2.94998 7.60986 2.50998 8.66986 2.24998 9.78986C2.10998 10.4099 2.58998 10.9999 3.22998 10.9999C3.67998 10.9999 4.09998 10.6999 4.18998 10.2599C4.38998 9.34986 4.75998 8.48986 5.23998 7.72986C5.49998 7.33986 5.41998 6.82986 5.09998 6.50986ZM2.23998 14.2099C2.09998 13.5899 2.58998 12.9999 3.22998 12.9999C3.68998 12.9999 4.09998 13.2999 4.18998 13.7499C4.38998 14.6699 4.74998 15.5199 5.23998 16.2799C5.48998 16.6599 5.40998 17.1699 5.08998 17.4899C4.63998 17.9399 3.87998 17.8699 3.53998 17.3299C2.93998 16.3799 2.49998 15.3299 2.23998 14.2099ZM15 11.9999C15 10.3399 13.66 8.99986 12 8.99986C10.34 8.99986 8.99998 10.3399 8.99998 11.9999C8.99998 13.6599 10.34 14.9999 12 14.9999C13.66 14.9999 15 13.6599 15 11.9999ZM20.45 17.3399C20.11 17.8699 19.35 17.9399 18.9 17.4899C18.58 17.1699 18.5 16.6599 18.76 16.2899C19.24 15.5199 19.61 14.6699 19.81 13.7599C19.9 13.3199 20.32 13.0199 20.77 13.0199C21.4 13.0199 21.89 13.6099 21.75 14.2299C21.49 15.3399 21.05 16.3999 20.45 17.3399ZM13 20.7699C13 21.4099 13.59 21.8999 14.21 21.7599C15.33 21.4999 16.38 21.0599 17.33 20.4599C17.87 20.1199 17.94 19.3599 17.49 18.9099C17.17 18.5899 16.66 18.5099 16.28 18.7599C15.52 19.2499 14.67 19.6099 13.75 19.8099C13.3 19.8999 13 20.3099 13 20.7699ZM9.78998 21.7499C8.66998 21.4899 7.61998 21.0499 6.66998 20.4499C6.12998 20.1099 6.05998 19.3599 6.51998 18.9199C6.83998 18.5899 7.33998 18.5199 7.72998 18.7599C8.48998 19.2399 9.34998 19.6099 10.26 19.8099C10.7 19.8999 11 20.3199 11 20.7699C11 21.3999 10.41 21.8899 9.78998 21.7499Z" fill="currentColor"/></svg>';

const RuxIconFilterTiltShift$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-filter-tilt-shift", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-filter-tilt-shift"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-filter-tilt-shift":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFilterTiltShift$1);
      }
      break;
  } });
}

const RuxIconFilterTiltShift = RuxIconFilterTiltShift$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFilterTiltShift, defineCustomElement };
