import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.7 16H9V15.21C9 14.76 9.54 14.54 9.85 14.86L11.64 16.65C11.84 16.85 11.84 17.16 11.64 17.36L9.85 19.15C9.54 19.46 9 19.24 9 18.8V18H8.73C5.43 18 2.48 15.64 2.06 12.36C1.54 8.4 4.64 5 8.5 5H11C11.55 5 12 5.45 12 6C12 6.55 11.55 7 11 7H8.5C5.87 7 3.76 9.27 4.02 11.95C4.25 14.29 6.35 16 8.7 16ZM15 5H21C21.55 5 22 5.45 22 6C22 6.55 21.55 7 21 7H15C14.45 7 14 6.55 14 6C14 5.45 14.45 5 15 5ZM15 10.5H21C21.55 10.5 22 10.95 22 11.5C22 12.05 21.55 12.5 21 12.5H15C14.45 12.5 14 12.05 14 11.5C14 10.95 14.45 10.5 15 10.5ZM21 16H15C14.45 16 14 16.45 14 17C14 17.55 14.45 18 15 18H21C21.55 18 22 17.55 22 17C22 16.45 21.55 16 21 16Z" fill="currentColor"/></svg>';

const RuxIconLowPriority$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-low-priority", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-low-priority"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-low-priority":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLowPriority$1);
      }
      break;
  } });
}

const RuxIconLowPriority = RuxIconLowPriority$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLowPriority, defineCustomElement };
