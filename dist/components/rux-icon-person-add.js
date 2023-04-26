import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V8C6 7.45 5.55 7 5 7C4.45 7 4 7.45 4 8V10H2C1.45 10 1 10.45 1 11C1 11.55 1.45 12 2 12H4V14C4 14.55 4.45 15 5 15C5.55 15 6 14.55 6 14V12H8C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10H6ZM7 18C7 15.34 12.33 14 15 14C17.67 14 23 15.34 23 18V19C23 19.55 22.55 20 22 20H8C7.45 20 7 19.55 7 19V18Z" fill="currentColor"/></svg>';

const RuxIconPersonAdd$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-person-add", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-person-add"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-person-add":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPersonAdd$1);
      }
      break;
  } });
}

const RuxIconPersonAdd = RuxIconPersonAdd$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPersonAdd, defineCustomElement };
