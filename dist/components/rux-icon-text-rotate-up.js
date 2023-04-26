import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.35 4.35001C18.15 4.15001 17.84 4.15001 17.64 4.35001L15.85 6.14001C15.54 6.46001 15.76 7.00001 16.21 7.00001H17V19C17 19.55 17.45 20 18 20C18.55 20 19 19.55 19 19V7.00001H19.79C20.24 7.00001 20.46 6.46001 20.14 6.15001L18.35 4.35001ZM11.8 10.5L13.4 9.84001C13.76 9.70001 14 9.35001 14 8.96001C14 8.27001 13.29 7.81001 12.66 8.08001L3.69 11.96C3.27 12.13 3 12.54 3 13C3 13.46 3.27 13.87 3.69 14.05L12.66 17.93C13.29 18.2 14 17.73 14 17.04C14 16.65 13.76 16.3 13.4 16.15L11.8 15.5V10.5ZM10 11.13L4.98 13L10 14.87V11.13Z" fill="currentColor"/></svg>';

const RuxIconTextRotateUp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-text-rotate-up", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-text-rotate-up"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-text-rotate-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTextRotateUp$1);
      }
      break;
  } });
}

const RuxIconTextRotateUp = RuxIconTextRotateUp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTextRotateUp, defineCustomElement };
