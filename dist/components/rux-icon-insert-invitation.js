import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2V3H8V2C8 1.45 7.55 1 7 1C6.45 1 6 1.45 6 2V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2ZM16 12H13C12.45 12 12 12.45 12 13V16C12 16.55 12.45 17 13 17H16C16.55 17 17 16.55 17 16V13C17 12.45 16.55 12 16 12ZM6 19H18C18.55 19 19 18.55 19 18V8H5V18C5 18.55 5.45 19 6 19Z" fill="currentColor"/></svg>';

const RuxIconInsertInvitation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-insert-invitation", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-insert-invitation"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-insert-invitation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconInsertInvitation$1);
      }
      break;
  } });
}

const RuxIconInsertInvitation = RuxIconInsertInvitation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconInsertInvitation, defineCustomElement };
