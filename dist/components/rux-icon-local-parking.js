import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3H12.79C15.84 3 18.56 5.19 18.95 8.21C19.42 11.87 16.57 15 13 15H10V19C10 20.1 9.1 21 8 21C6.9 21 6 20.1 6 19V5C6 3.9 6.9 3 8 3ZM10 11H13.2C14.3 11 15.2 10.1 15.2 9C15.2 7.9 14.3 7 13.2 7H10V11Z" fill="currentColor"/></svg>';

const RuxIconLocalParking$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-local-parking", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-local-parking"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-local-parking":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLocalParking$1);
      }
      break;
  } });
}

const RuxIconLocalParking = RuxIconLocalParking$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLocalParking, defineCustomElement };
