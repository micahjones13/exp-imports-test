import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.58 4.58L21.41 9.41C21.79 9.79 22 10.3 22 10.83V18C22 19.1 21.1 20 20 20H3.99C2.89 20 2 19.11 2 18.01V6C2 4.9 2.9 4 4 4H15.17C15.7 4 16.21 4.21 16.58 4.58ZM20.5 11L15 5.5V10C15 10.55 15.45 11 16 11H20.5Z" fill="currentColor"/></svg>';

const RuxIconNote$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-note", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-note"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-note":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNote$1);
      }
      break;
  } });
}

const RuxIconNote = RuxIconNote$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNote, defineCustomElement };
