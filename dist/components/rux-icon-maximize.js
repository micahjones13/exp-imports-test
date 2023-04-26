import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3H20C20.55 3 21 3.45 21 4C21 4.55 20.55 5 20 5H4C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3Z" fill="currentColor"/></svg>';

const RuxIconMaximize$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-maximize", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-maximize"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-maximize":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMaximize$1);
      }
      break;
  } });
}

const RuxIconMaximize = RuxIconMaximize$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMaximize, defineCustomElement };
