import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM11 10.5C11 10.78 10.78 11 10.5 11H10C9.72 11 9.5 10.78 9.5 10.5H7.5V13.5H9.5C9.5 13.22 9.72 13 10 13H10.5C10.78 13 11 13.22 11 13.5V14C11 14.55 10.55 15 10 15H7C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9H10C10.55 9 11 9.45 11 10V10.5ZM17.5 11C17.78 11 18 10.78 18 10.5V10C18 9.45 17.55 9 17 9H14C13.45 9 13 9.45 13 10V14C13 14.55 13.45 15 14 15H17C17.55 15 18 14.55 18 14V13.5C18 13.22 17.78 13 17.5 13H17C16.72 13 16.5 13.22 16.5 13.5H14.5V10.5H16.5C16.5 10.78 16.72 11 17 11H17.5Z" fill="currentColor"/></svg>';

const RuxIconClosedCaption$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-closed-caption", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-closed-caption"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-closed-caption":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconClosedCaption$1);
      }
      break;
  } });
}

const RuxIconClosedCaption = RuxIconClosedCaption$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconClosedCaption, defineCustomElement };
