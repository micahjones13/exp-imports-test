import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5V20C3 20.55 3.45 21 4 21C4.55 21 5 20.55 5 20V6C5 5.45 5.45 5 6 5H20C20.55 5 21 4.55 21 4C21 3.45 20.55 3 20 3H5C3.9 3 3 3.9 3 5ZM19 13V11H21V13H19ZM21 17V15H19V17H21ZM7 21H9V19H7V21ZM17 21H15V19H17V21ZM13 21H11V19H13V21ZM21 7V9H19V7H21ZM21 21H19V19H21V21Z" fill="currentColor"/></svg>';

const RuxIconBorderStyle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-style", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-style"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-style":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderStyle$1);
      }
      break;
  } });
}

const RuxIconBorderStyle = RuxIconBorderStyle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderStyle, defineCustomElement };
