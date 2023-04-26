import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H6C4.9 3 4 3.9 4 5V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.1 10 22 9.1 22 8V5C22 3.9 21.1 3 20 3ZM20 8H18V5H20V8ZM19 21H3C2.45 21 2 20.55 2 20C2 19.45 2.45 19 3 19H19C19.55 19 20 19.45 20 20C20 20.55 19.55 21 19 21Z" fill="currentColor"/></svg>';

const RuxIconLocalCafe$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-local-cafe", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-local-cafe"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-local-cafe":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLocalCafe$1);
      }
      break;
  } });
}

const RuxIconLocalCafe = RuxIconLocalCafe$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLocalCafe, defineCustomElement };
