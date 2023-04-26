import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H9C7.89 3 7 3.9 7 5V15C7 16.1 7.89 17 9 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3ZM3 9H5V7H3V9ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM5 19V21C3.89 21 3 20.1 3 19H5ZM17 21H15V19H17V21ZM10 15H18C18.55 15 19 14.55 19 14V6C19 5.45 18.55 5 18 5H10C9.45 5 9 5.45 9 6V14C9 14.55 9.45 15 10 15ZM11 21H13V19H11V21ZM9 21H7V19H9V21Z" fill="currentColor"/></svg>';

const RuxIconFlipToFront$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-flip-to-front", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-flip-to-front"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-flip-to-front":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFlipToFront$1);
      }
      break;
  } });
}

const RuxIconFlipToFront = RuxIconFlipToFront$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFlipToFront, defineCustomElement };
