import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.04999 15.9C1.60999 10.34 6.29999 6 12 6C17.7 6 22.39 10.34 22.95 15.9C23.01 16.49 22.54 17 21.95 17C21.44 17 21.01 16.62 20.96 16.12C20.51 11.57 16.66 8 12 8C7.33999 8 3.48999 11.57 3.04999 16.12C2.99999 16.62 2.56999 17 2.05999 17C1.45999 17 0.999986 16.49 1.04999 15.9ZM5.08999 15.86C5.63999 12.54 8.52999 10 12 10C15.47 10 18.36 12.54 18.9 15.86C19 16.46 18.52 17 17.91 17C17.42 17 17.01 16.64 16.93 16.15C16.52 13.79 14.47 12 12 12C9.52999 12 7.47999 13.79 7.06999 16.15C6.98999 16.64 6.57999 17 6.08999 17C5.47999 17 4.98999 16.46 5.08999 15.86Z" fill="currentColor"/></svg>';

const RuxIconLooks$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-looks", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-looks"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-looks":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLooks$1);
      }
      break;
  } });
}

const RuxIconLooks = RuxIconLooks$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLooks, defineCustomElement };
