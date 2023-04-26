import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5ZM11 19H6C5.45 19 5 18.55 5 18V13H10C10.55 13 11 13.45 11 14V19ZM5 11H10C10.55 11 11 10.55 11 10V5H6C5.45 5 5 5.45 5 6V11ZM18 19H13V14C13 13.45 13.45 13 14 13H19V18C19 18.55 18.55 19 18 19ZM14 11H19V6C19 5.45 18.55 5 18 5H13V10C13 10.55 13.45 11 14 11Z" fill="currentColor"/></svg>';

const RuxIconBorderAll$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-all", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-all"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-all":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderAll$1);
      }
      break;
  } });
}

const RuxIconBorderAll = RuxIconBorderAll$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderAll, defineCustomElement };
