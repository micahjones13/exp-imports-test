import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 6H20C21.11 6 22 6.89 22 8V19C22 20.11 21.11 21 20 21H4C2.89 21 2 20.11 2 19V8C2 6.89 2.89 6 4 6H7V4C7 2.89 7.89 2 9 2H15C16.11 2 17 2.89 17 4V6ZM15 4H9V6H15V4ZM20 19H4V17H20V19ZM4 14H20V9C20 8.45 19.55 8 19 8H17V9C17 9.55 16.55 10 16 10C15.45 10 15 9.55 15 9V8H9V9C9 9.55 8.55 10 8 10C7.45 10 7 9.55 7 9V8H5C4.45 8 4 8.45 4 9V14Z" fill="currentColor"/></svg>';

const RuxIconCardTravel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-card-travel", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-card-travel"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-card-travel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCardTravel$1);
      }
      break;
  } });
}

const RuxIconCardTravel = RuxIconCardTravel$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCardTravel, defineCustomElement };
