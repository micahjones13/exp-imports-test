import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.89 2 2 2.89 2 4V15C2 16.11 2.89 17 4 17H8V22L12 20L16 22V17H20C21.11 17 22 16.11 22 15V4C22 2.89 21.11 2 20 2ZM20 15H4V13H20V15ZM4 10H20V5C20 4.45 19.55 4 19 4H5C4.45 4 4 4.45 4 5V10Z" fill="currentColor"/></svg>';

const RuxIconCardMembership$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-card-membership", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-card-membership"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-card-membership":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCardMembership$1);
      }
      break;
  } });
}

const RuxIconCardMembership = RuxIconCardMembership$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCardMembership, defineCustomElement };
