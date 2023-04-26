import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.83 0.86L15.53 2.16C17.03 3.25 18 5.01 18 7H6C6 5.01 6.97 3.26 8.45 2.17L7.14 0.86C6.94 0.66 6.94 0.35 7.14 0.15C7.34 -0.05 7.65 -0.05 7.85 0.15L9.34 1.63C10.14 1.23 11.04 1 12 1C12.95 1 13.85 1.23 14.64 1.63L16.12 0.15C16.32 -0.05 16.63 -0.05 16.83 0.15C17.03 0.35 17.03 0.66 16.83 0.86ZM2 9.5C2 8.67 2.67 8 3.5 8C4.33 8 5 8.67 5 9.5V16.5C5 17.33 4.33 18 3.5 18C2.67 18 2 17.33 2 16.5V9.5ZM7 19C6.45 19 6 18.55 6 18V8H18V18C18 18.55 17.55 19 17 19H16V22.5C16 23.33 15.33 24 14.5 24C13.67 24 13 23.33 13 22.5V19H11V22.5C11 23.33 10.33 24 9.5 24C8.67 24 8 23.33 8 22.5V19H7ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM10 5H9V4H10V5ZM14 5H15V4H14V5Z" fill="currentColor"/></svg>';

const RuxIconAndroid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-android", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-android"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-android":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAndroid$1);
      }
      break;
  } });
}

const RuxIconAndroid = RuxIconAndroid$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAndroid, defineCustomElement };
