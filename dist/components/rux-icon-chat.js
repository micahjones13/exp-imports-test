import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01 4C2.01 2.9 2.9 2 4 2ZM17 9H7C6.45 9 6 9.45 6 10C6 10.55 6.45 11 7 11H17C17.55 11 18 10.55 18 10C18 9.45 17.55 9 17 9ZM13 14H7C6.45 14 6 13.55 6 13C6 12.45 6.45 12 7 12H13C13.55 12 14 12.45 14 13C14 13.55 13.55 14 13 14ZM7 8H17C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6H7C6.45 6 6 6.45 6 7C6 7.55 6.45 8 7 8Z" fill="currentColor"/></svg>';

const RuxIconChat$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-chat", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-chat"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-chat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconChat$1);
      }
      break;
  } });
}

const RuxIconChat = RuxIconChat$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconChat, defineCustomElement };
