import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 7H16V5C16 4.45 15.78 3.95 15.41 3.59C15.05 3.22 14.55 3 14 3H10C8.9 3 8 3.9 8 5V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM10.5 17C10.22 17.28 10.22 17.72 10.5 18C10.78 18.28 11.22 18.28 11.5 18L14.65 14.86C14.85 14.66 14.85 14.35 14.65 14.15L11.5 11C11.22 10.72 10.78 10.72 10.5 11C10.22 11.28 10.22 11.72 10.5 12L13 14.5L10.5 17Z" fill="currentColor"/></svg>';

const RuxIconNextWeek$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-next-week", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-next-week"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-next-week":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNextWeek$1);
      }
      break;
  } });
}

const RuxIconNextWeek = RuxIconNextWeek$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNextWeek, defineCustomElement };
