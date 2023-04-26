import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 16V4C22 2.9 21.1 2 20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16ZM11.4 12.53L13.03 14.71L15.61 11.49C15.81 11.24 16.19 11.24 16.39 11.49L19.35 15.19C19.61 15.52 19.38 16 18.96 16H9C8.59 16 8.35 15.53 8.6 15.2L10.6 12.53C10.8 12.27 11.2 12.27 11.4 12.53ZM2 20V7C2 6.45 2.45 6 3 6C3.55 6 4 6.45 4 7V19C4 19.55 4.45 20 5 20H17C17.55 20 18 20.45 18 21C18 21.55 17.55 22 17 22H4C2.9 22 2 21.1 2 20Z" fill="currentColor"/></svg>';

const RuxIconCollections$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-collections", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-collections"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-collections":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCollections$1);
      }
      break;
  } });
}

const RuxIconCollections = RuxIconCollections$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCollections, defineCustomElement };
