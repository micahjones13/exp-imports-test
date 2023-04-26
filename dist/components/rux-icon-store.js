import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00001 6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4H5.00001C4.45001 4 4.00001 4.45 4.00001 5C4.00001 5.55 4.45001 6 5.00001 6ZM20.16 7.8C20.07 7.34 19.66 7 19.18 7H4.82001C4.34001 7 3.93001 7.34 3.84001 7.8L2.84001 12.8C2.72001 13.42 3.19001 14 3.82001 14H4.00001V19C4.00001 19.55 4.45001 20 5.00001 20H13C13.55 20 14 19.55 14 19V14H18V19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19V14H20.18C20.81 14 21.28 13.42 21.16 12.8L20.16 7.8ZM6.00001 18H12V14H6.00001V18Z" fill="currentColor"/></svg>';

const RuxIconStore$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-store", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-store"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-store":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStore$1);
      }
      break;
  } });
}

const RuxIconStore = RuxIconStore$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStore, defineCustomElement };
