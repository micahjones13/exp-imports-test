import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6L15.09 12.26L20.34 17.51C21.39 15.93 22 14.04 22 12C22 6.48 17.52 2 12 2C9.95999 2 8.06999 2.61 6.48999 3.66L11.74 8.91L18 6ZM2.80999 5.64L3.65999 6.49C2.28999 8.56 1.65999 11.17 2.17999 13.94C2.92999 17.89 6.09999 21.07 10.06 21.82C12.83 22.34 15.44 21.72 17.51 20.34L18.36 21.19C18.75 21.58 19.38 21.58 19.77 21.19C20.16 20.8 20.16 20.17 19.77 19.78L4.21999 4.22C3.82999 3.83 3.19999 3.83 2.80999 4.22C2.41999 4.61 2.41999 5.25 2.80999 5.64ZM12.26 15.09L8.90999 11.74L5.99999 18L12.26 15.09Z" fill="currentColor"/></svg>';

const RuxIconExploreOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-explore-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-explore-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-explore-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExploreOff$1);
      }
      break;
  } });
}

const RuxIconExploreOff = RuxIconExploreOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExploreOff, defineCustomElement };
