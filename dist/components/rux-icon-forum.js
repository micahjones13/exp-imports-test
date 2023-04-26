import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 4V11C17 12.1 16.1 13 15 13H6L2 17V4C2 2.9 2.9 2 4 2H15C16.1 2 17 2.9 17 4ZM19 6H20C21.1 6 22 6.9 22 8V22L18 18H8C6.9 18 6 17.1 6 16V15H18C18.55 15 19 14.55 19 14V6Z" fill="currentColor"/></svg>';

const RuxIconForum$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-forum", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-forum"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-forum":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconForum$1);
      }
      break;
  } });
}

const RuxIconForum = RuxIconForum$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconForum, defineCustomElement };
