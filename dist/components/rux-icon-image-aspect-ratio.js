import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM8 10H6V12H8V10ZM14 10H16V12H14V10ZM14 14H16V16H14V14ZM10 10H12V12H10V10ZM5 18H19C19.55 18 20 17.55 20 17V7C20 6.45 19.55 6 19 6H5C4.45 6 4 6.45 4 7V17C4 17.55 4.45 18 5 18Z" fill="currentColor"/></svg>';

const RuxIconImageAspectRatio$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-image-aspect-ratio", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-image-aspect-ratio"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-image-aspect-ratio":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconImageAspectRatio$1);
      }
      break;
  } });
}

const RuxIconImageAspectRatio = RuxIconImageAspectRatio$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconImageAspectRatio, defineCustomElement };
