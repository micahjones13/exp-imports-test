import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM13 19H20C20.55 19 21 18.55 21 18V14C21 13.45 20.55 13 20 13H13C12.45 13 12 13.45 12 14V18C12 18.55 12.45 19 13 19Z" fill="currentColor"/></svg>';

const RuxIconBrandingWatermark$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-branding-watermark", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-branding-watermark"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-branding-watermark":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrandingWatermark$1);
      }
      break;
  } });
}

const RuxIconBrandingWatermark = RuxIconBrandingWatermark$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrandingWatermark, defineCustomElement };
