import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13H17V5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V13ZM3 10H4C4.55 10 5 10.45 5 11V12C5 12.55 4.55 13 4 13H3C2.45 13 2 12.55 2 12V11C2 10.45 2.45 10 3 10ZM21 10H20C19.45 10 19 10.45 19 11V12C19 12.55 19.45 13 20 13H21C21.55 13 22 12.55 22 12V11C22 10.45 21.55 10 21 10ZM7 19.5C7 20.33 6.33 21 5.5 21C4.67 21 4 20.33 4 19.5V17C4 15.9 4.9 15 6 15H18C19.1 15 20 15.9 20 17V19.5C20 20.33 19.33 21 18.5 21C17.67 21 17 20.33 17 19.5V18H7V19.5Z" fill="currentColor"/></svg>';

const RuxIconSeat$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-seat", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-seat"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-seat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSeat$1);
      }
      break;
  } });
}

const RuxIconSeat = RuxIconSeat$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSeat, defineCustomElement };
