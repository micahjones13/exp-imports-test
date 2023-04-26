import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 0H5C4.45 0 4 0.45 4 1C4 1.55 4.45 2 5 2H19C19.55 2 20 1.55 20 1C20 0.45 19.55 0 19 0ZM19 24C19.55 24 20 23.55 20 23C20 22.45 19.55 22 19 22H5C4.45 22 4 22.45 4 23C4 23.55 4.45 24 5 24H19ZM4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM12 6.75C13.24 6.75 14.25 7.76 14.25 9C14.25 10.24 13.24 11.25 12 11.25C10.76 11.25 9.75 10.24 9.75 9C9.75 7.76 10.76 6.75 12 6.75ZM7 15.5V17H17V15.5C17 13.83 13.67 13 12 13C10.33 13 7 13.83 7 15.5Z" fill="currentColor"/></svg>';

const RuxIconContacts$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-contacts", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-contacts"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-contacts":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconContacts$1);
      }
      break;
  } });
}

const RuxIconContacts = RuxIconContacts$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconContacts, defineCustomElement };
