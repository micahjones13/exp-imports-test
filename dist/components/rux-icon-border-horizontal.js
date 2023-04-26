import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H5V5H3V3ZM5 7H3V9H5V7ZM5 21V19H3V21H5ZM3 17V15H5V17H3ZM7 21H9V19H7V21ZM9 3H7V5H9V3ZM15 3H17V5H15V3ZM13 7H11V9H13V7ZM11 3H13V5H11V3ZM21 17V15H19V17H21ZM13 21H11V19H13V21ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM19 5V3H21V5H19ZM19 9H21V7H19V9ZM13 17H11V15H13V17ZM15 21H17V19H15V21ZM21 19V21H19V19H21Z" fill="currentColor"/></svg>';

const RuxIconBorderHorizontal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-horizontal", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-horizontal"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-horizontal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderHorizontal$1);
      }
      break;
  } });
}

const RuxIconBorderHorizontal = RuxIconBorderHorizontal$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderHorizontal, defineCustomElement };
