import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V16C3 15.45 3.45 15 4 15C4.55 15 5 15.45 5 16V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V8C5 8.55 4.55 9 4 9C3.45 9 3 8.55 3 8V5C3 3.9 3.89 3 5 3ZM12.2 16.29C11.81 16.68 11.18 16.68 10.79 16.29C10.41 15.91 10.4 15.27 10.79 14.88L12.67 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H12.67L10.79 9.11C10.4 8.72 10.4 8.09 10.79 7.7C11.18 7.31 11.81 7.31 12.2 7.7L15.79 11.29C16.18 11.68 16.18 12.31 15.79 12.7L12.2 16.29Z" fill="currentColor"/></svg>';

const RuxIconExitToApp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-exit-to-app", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-exit-to-app"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-exit-to-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconExitToApp$1);
      }
      break;
  } });
}

const RuxIconExitToApp = RuxIconExitToApp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconExitToApp, defineCustomElement };
