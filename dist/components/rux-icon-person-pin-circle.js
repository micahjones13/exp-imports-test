import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.14 2 5 5.14 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.14 15.86 2 12 2ZM12 4C13.1 4 14 4.9 14 6C14 7.11 13.1 8 12 8C10.9 8 10 7.11 10 6C10 4.9 10.9 4 12 4ZM8 11.85C8.86 13.15 10.33 14 12 14C13.67 14 15.14 13.15 16 11.85C15.98 10.53 13.33 9.8 12 9.8C10.67 9.8 8.02 10.53 8 11.85Z" fill="currentColor"/></svg>';

const RuxIconPersonPinCircle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-person-pin-circle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-person-pin-circle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-person-pin-circle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPersonPinCircle$1);
      }
      break;
  } });
}

const RuxIconPersonPinCircle = RuxIconPersonPinCircle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPersonPinCircle, defineCustomElement };
