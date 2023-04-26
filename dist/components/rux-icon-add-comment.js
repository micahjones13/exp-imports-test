import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1 2 22 2.9 22 4V22L18 18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20ZM13 11H16C16.55 11 17 10.55 17 10C17 9.45 16.55 9 16 9H13V6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6V9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H11V14C11 14.55 11.45 15 12 15C12.55 15 13 14.55 13 14V11Z" fill="currentColor"/></svg>';

const RuxIconAddComment$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-add-comment", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-add-comment"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-add-comment":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAddComment$1);
      }
      break;
  } });
}

const RuxIconAddComment = RuxIconAddComment$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAddComment, defineCustomElement };
