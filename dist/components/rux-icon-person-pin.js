import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.9 20 5 20H9L11.29 22.29C11.68 22.68 12.31 22.68 12.7 22.29L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM12 5.3C13.49 5.3 14.7 6.51 14.7 8C14.7 9.49 13.49 10.7 12 10.7C10.51 10.7 9.3 9.49 9.3 8C9.3 6.51 10.51 5.3 12 5.3ZM6 15.1V16H18V15.1C18 13.1 14 12 12 12C10 12 6 13.1 6 15.1Z" fill="currentColor"/></svg>';

const RuxIconPersonPin$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-person-pin", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-person-pin"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-person-pin":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPersonPin$1);
      }
      break;
  } });
}

const RuxIconPersonPin = RuxIconPersonPin$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPersonPin, defineCustomElement };
