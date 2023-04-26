import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.36 6.28L21.3 6.22C20.91 5.83 20.27 5.85 19.91 6.26L17.73 8.71C15.68 6.4 12.83 5 9.61003 5C7.11003 5 4.78003 5.87 2.86003 7.3C2.39003 7.65 2.34003 8.34 2.75003 8.75L2.81003 8.81C3.14003 9.14 3.67003 9.2 4.04003 8.92C5.63003 7.72 7.54003 7 9.61003 7C12.35 7 14.7 8.26 16.38 10.24L13.5 13.48L10.21 10.19C9.82003 9.8 9.19003 9.8 8.80003 10.19L2.68003 16.32C2.31003 16.69 2.31003 17.3 2.68003 17.67L2.83003 17.82C3.20003 18.19 3.81003 18.19 4.18003 17.82L9.50003 12.49L12.75 15.74C13.16 16.15 13.82 16.13 14.2 15.7L17.55 11.94C18.17 13.06 18.63 14.33 18.87 15.67C18.95 16.14 19.34 16.49 19.82 16.49H19.91C20.51 16.49 20.96 15.94 20.85 15.35C20.53 13.5 19.87 11.81 18.96 10.35L21.4 7.6C21.74 7.22 21.72 6.64 21.36 6.28Z" fill="currentColor"/></svg>';

const RuxIconMultilineChart$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-multiline-chart", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-multiline-chart"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-multiline-chart":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMultilineChart$1);
      }
      break;
  } });
}

const RuxIconMultilineChart = RuxIconMultilineChart$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMultilineChart, defineCustomElement };
