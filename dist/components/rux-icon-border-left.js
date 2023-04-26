import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 20C5 20.55 4.55 21 4 21C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3C4.55 3 5 3.45 5 4V20ZM13 5H11V3H13V5ZM11 17H13V15H11V17ZM11 21H13V19H11V21ZM11 9H13V7H11V9ZM13 13H11V11H13V13ZM7 21H9V19H7V21ZM9 5H7V3H9V5ZM7 13H9V11H7V13ZM19 9H21V7H19V9ZM17 21H15V19H17V21ZM19 17H21V15H19V17ZM19 5V3H21V5H19ZM19 13H21V11H19V13ZM21 21H19V19H21V21ZM15 13H17V11H15V13ZM17 5H15V3H17V5Z" fill="currentColor"/></svg>';

const RuxIconBorderLeft$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-left", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-left"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-left":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderLeft$1);
      }
      break;
  } });
}

const RuxIconBorderLeft = RuxIconBorderLeft$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderLeft, defineCustomElement };
