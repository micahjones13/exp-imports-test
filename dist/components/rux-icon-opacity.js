import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.71 3.06002L17.66 8.00002C19.22 9.56002 20 11.64 20 13.64C20 15.64 19.22 17.75 17.66 19.31C16.1 20.87 14.05 21.66 12 21.66C9.95 21.66 7.9 20.87 6.34 19.31C4.78 17.75 4 15.64 4 13.64C4 11.64 4.78 9.56002 6.34 8.00002L11.3 3.06002C11.69 2.67002 12.32 2.67002 12.71 3.06002ZM7.76 9.60002C6.62 10.73 6.01 12 6 14H18C17.99 12 17.38 10.77 16.24 9.65002L12 5.27002L7.76 9.60002Z" fill="currentColor"/></svg>';

const RuxIconOpacity$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-opacity", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-opacity"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-opacity":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconOpacity$1);
      }
      break;
  } });
}

const RuxIconOpacity = RuxIconOpacity$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconOpacity, defineCustomElement };
