import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13H4C3.45 13 3 12.55 3 12V4C3 3.45 3.45 3 4 3H10C10.55 3 11 3.45 11 4V12C11 12.55 10.55 13 10 13ZM10 21H4C3.45 21 3 20.55 3 20V16C3 15.45 3.45 15 4 15H10C10.55 15 11 15.45 11 16V20C11 20.55 10.55 21 10 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 8V4C13 3.45 13.45 3 14 3H20C20.55 3 21 3.45 21 4V8C21 8.55 20.55 9 20 9H14C13.45 9 13 8.55 13 8Z" fill="currentColor"/></svg>';

const RuxIconDashboard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-dashboard", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-dashboard"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-dashboard":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDashboard$1);
      }
      break;
  } });
}

const RuxIconDashboard = RuxIconDashboard$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDashboard, defineCustomElement };
