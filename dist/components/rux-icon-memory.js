import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 10C21 9.45 20.55 9 20 9H19V7C19 5.9 18.1 5 17 5H15V4C15 3.45 14.55 3 14 3C13.45 3 13 3.45 13 4V5H11V4C11 3.45 10.55 3 10 3C9.45 3 9 3.45 9 4V5H7C5.9 5 5 5.9 5 7V9H4C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11H5V13H4C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15H5V17C5 18.1 5.9 19 7 19H9V20C9 20.55 9.45 21 10 21C10.55 21 11 20.55 11 20V19H13V20C13 20.55 13.45 21 14 21C14.55 21 15 20.55 15 20V19H17C18.1 19 19 18.1 19 17V15H20C20.55 15 21 14.55 21 14C21 13.45 20.55 13 20 13H19V11H20C20.55 11 21 10.55 21 10ZM10 9H14C14.55 9 15 9.45 15 10V14C15 14.55 14.55 15 14 15H10C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9ZM11 13H13V11H11V13ZM8 17H16C16.55 17 17 16.55 17 16V8C17 7.45 16.55 7 16 7H8C7.45 7 7 7.45 7 8V16C7 16.55 7.45 17 8 17Z" fill="currentColor"/></svg>';

const RuxIconMemory$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-memory", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-memory"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-memory":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMemory$1);
      }
      break;
  } });
}

const RuxIconMemory = RuxIconMemory$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMemory, defineCustomElement };