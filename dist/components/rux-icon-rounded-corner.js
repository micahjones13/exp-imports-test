import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H3V3H5V5ZM3 9H5V7H3V9ZM3 13H5V11H3V13ZM21 17H19V15H21V17ZM21 19H19V21H21V19ZM5 17H3V15H5V17ZM7 5H9V3H7V5ZM13 21H11V19H13V21ZM15 19V21H17V19H15ZM9 21H7V19H9V21ZM3 21H5V19H3V21ZM16 3C18.76 3 21 5.24 21 8V13H19V8C19 6.35 17.65 5 16 5H11V3H16Z" fill="currentColor"/></svg>';

const RuxIconRoundedCorner$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-rounded-corner", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-rounded-corner"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-rounded-corner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRoundedCorner$1);
      }
      break;
  } });
}

const RuxIconRoundedCorner = RuxIconRoundedCorner$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRoundedCorner, defineCustomElement };
