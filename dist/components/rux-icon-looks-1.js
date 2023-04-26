import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM12 16C12 16.55 12.45 17 13 17C13.55 17 14 16.55 14 16V8C14 7.45 13.55 7 13 7H11C10.45 7 10 7.45 10 8C10 8.55 10.45 9 11 9H12V16Z" fill="currentColor"/></svg>';

const RuxIconLooks1$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-looks-1", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-looks-1"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-looks-1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLooks1$1);
      }
      break;
  } });
}

const RuxIconLooks1 = RuxIconLooks1$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLooks1, defineCustomElement };
