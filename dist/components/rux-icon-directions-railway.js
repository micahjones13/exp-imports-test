import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 15.5C4 17.43 5.57 19 7.5 19L6.36 20.15C6.04 20.46 6.26 21 6.71 21H17.29C17.74 21 17.96 20.46 17.64 20.15L16.5 19C18.43 19 20 17.43 20 15.5V5C20 1.5 16.42 1 12 1C7.58 1 4 1.5 4 5V15.5ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM6 10H18V5H6V10Z" fill="currentColor"/></svg>';

const RuxIconDirectionsRailway$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-directions-railway", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-directions-railway"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-directions-railway":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDirectionsRailway$1);
      }
      break;
  } });
}

const RuxIconDirectionsRailway = RuxIconDirectionsRailway$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDirectionsRailway, defineCustomElement };
