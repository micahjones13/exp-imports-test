import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 19H16C16.55 19 17 18.55 17 18V5C17 4.45 16.55 4 16 4H8C7.45 4 7 4.45 7 5V18C7 18.55 7.45 19 8 19ZM3 17H5C5.55 17 6 16.55 6 16V7C6 6.45 5.55 6 5 6H3C2.45 6 2 6.45 2 7V16C2 16.55 2.45 17 3 17ZM18 16V7C18 6.45 18.45 6 19 6H21C21.55 6 22 6.45 22 7V16C22 16.55 21.55 17 21 17H19C18.45 17 18 16.55 18 16Z" fill="currentColor"/></svg>';

const RuxIconViewCarousel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-carousel", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-carousel"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-carousel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewCarousel$1);
      }
      break;
  } });
}

const RuxIconViewCarousel = RuxIconViewCarousel$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewCarousel, defineCustomElement };
