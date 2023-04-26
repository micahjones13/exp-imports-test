import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7V17C3 18.1 3.9 18.99 5 18.99L16 19C16.67 19 17.27 18.67 17.63 18.16L21.59 12.58C21.84 12.23 21.84 11.77 21.59 11.42L17.63 5.84Z" fill="currentColor"/></svg>';

const RuxIconLabel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-label", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-label"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLabel$1);
      }
      break;
  } });
}

const RuxIconLabel = RuxIconLabel$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLabel, defineCustomElement };
