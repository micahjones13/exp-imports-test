import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 18.0001H8C6.9 18.0001 6 17.1001 6 16.0001V9.50008C6 8.67008 6.67 8.00008 7.5 8.00008C8.33 8.00008 9 8.67008 9 9.50008V12.7701L14.95 7.00008C15.52 6.45008 16.43 6.46008 16.99 7.02008C17.55 7.58008 17.55 8.49008 17 9.06008L11.15 15.0001H14.5C15.33 15.0001 16 15.6701 16 16.5001C16 17.3301 15.33 18.0001 14.5 18.0001Z" fill="currentColor"/></svg>';

const RuxIconTransitEnterexit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-transit-enterexit", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-transit-enterexit"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-transit-enterexit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTransitEnterexit$1);
      }
      break;
  } });
}

const RuxIconTransitEnterexit = RuxIconTransitEnterexit$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTransitEnterexit, defineCustomElement };
