import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 14V11.53L12.88 4.65C13.08 4.45 13.39 4.45 13.59 4.65L15.36 6.42C15.56 6.62 15.56 6.93 15.36 7.13L8.47 14H6ZM10.5 14H17C17.55 14 18 13.55 18 13C18 12.45 17.55 12 17 12H12.5L10.5 14Z" fill="currentColor"/></svg>';

const RuxIconRateReview$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-rate-review", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-rate-review"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-rate-review":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRateReview$1);
      }
      break;
  } });
}

const RuxIconRateReview = RuxIconRateReview$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRateReview, defineCustomElement };
