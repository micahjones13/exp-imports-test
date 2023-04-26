import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 17L1.01 7C1.01 5.9 1.9 5 3 5H21C22.1 5 23 5.9 23 7V17C23 18.1 22.1 19 21 19H3C1.9 19 1 18.1 1 17ZM19 17V7H5V17H19Z" fill="currentColor"/></svg>';

const RuxIconStayPrimaryLandscape$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-stay-primary-landscape", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-stay-primary-landscape"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-stay-primary-landscape":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStayPrimaryLandscape$1);
      }
      break;
  } });
}

const RuxIconStayPrimaryLandscape = RuxIconStayPrimaryLandscape$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStayPrimaryLandscape, defineCustomElement };
