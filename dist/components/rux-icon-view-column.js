import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 18H8C8.55 18 9 17.55 9 17V6C9 5.45 8.55 5 8 5H5C4.45 5 4 5.45 4 6V17C4 17.55 4.45 18 5 18ZM11 18H14C14.55 18 15 17.55 15 17V6C15 5.45 14.55 5 14 5H11C10.45 5 10 5.45 10 6V17C10 17.55 10.45 18 11 18ZM16 17V6C16 5.45 16.45 5 17 5H20C20.55 5 21 5.45 21 6V17C21 17.55 20.55 18 20 18H17C16.45 18 16 17.55 16 17Z" fill="currentColor"/></svg>';

const RuxIconViewColumn$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-column", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-column"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-column":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewColumn$1);
      }
      break;
  } });
}

const RuxIconViewColumn = RuxIconViewColumn$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewColumn, defineCustomElement };
