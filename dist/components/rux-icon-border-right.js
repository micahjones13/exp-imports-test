import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H5V3H3V5ZM7 21H9V19H7V21ZM9 5H7V3H9V5ZM7 13H9V11H7V13ZM5 21H3V19H5V21ZM11 21H13V19H11V21ZM5 13H3V11H5V13ZM3 17H5V15H3V17ZM5 9H3V7H5V9ZM11 17H13V15H11V17ZM17 13H15V11H17V13ZM19 4V20C19 20.55 19.45 21 20 21C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3C19.45 3 19 3.45 19 4ZM17 21H15V19H17V21ZM15 5H17V3H15V5ZM13 13H11V11H13V13ZM11 5H13V3H11V5ZM13 9H11V7H13V9Z" fill="currentColor"/></svg>';

const RuxIconBorderRight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-right", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-right"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-right":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderRight$1);
      }
      break;
  } });
}

const RuxIconBorderRight = RuxIconBorderRight$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderRight, defineCustomElement };
