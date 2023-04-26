import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.01L6 2C4.9 2 4 2.89 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.89 19.1 2.01 18 2.01ZM17 20H7C6.45 20 6 19.55 6 19V11.98C6 11.43 6.45 10.98 7 10.98H17C17.55 10.98 18 11.43 18 11.98V19C18 19.55 17.55 20 17 20ZM7 9H17C17.55 9 18 8.55 18 8V5C18 4.45 17.55 4 17 4H7C6.45 4 6 4.45 6 5V8C6 8.55 6.45 9 7 9ZM9 5C9.55 5 10 5.45 10 6V7C10 7.55 9.55 8 9 8C8.45 8 8 7.55 8 7V6C8 5.45 8.45 5 9 5ZM10 13C10 12.45 9.55 12 9 12C8.45 12 8 12.45 8 13V16C8 16.55 8.45 17 9 17C9.55 17 10 16.55 10 16V13Z" fill="currentColor"/></svg>';

const RuxIconKitchen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-kitchen", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-kitchen"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-kitchen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconKitchen$1);
      }
      break;
  } });
}

const RuxIconKitchen = RuxIconKitchen$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconKitchen, defineCustomElement };
