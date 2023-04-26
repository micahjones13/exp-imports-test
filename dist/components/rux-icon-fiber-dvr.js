import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.89 3 1 3.89 1 5V19C1 20.1 1.89 21 3 21H21C22.11 21 23 20.1 23 19V5C23 3.89 22.11 3 21 3ZM6.5 10.5H4.5V13.5H6.5V10.5ZM19.5 10.5H17.5V11.5H19.5V10.5ZM6.5 15C7.33 15 8 14.33 8 13.5V10.5C8 9.67 7.33 9 6.5 9H3.5C3.22 9 3 9.22 3 9.5V14.5C3 14.78 3.22 15 3.5 15H6.5ZM14.1 9.92L12.83 14.28C12.71 14.71 12.31 15 11.87 15C11.43 15 11.03 14.71 10.91 14.28L9.64 9.92C9.5 9.46 9.85 9 10.33 9C10.65 9 10.93 9.21 11.02 9.52L11.87 12.43L12.72 9.52C12.81 9.21 13.09 9 13.41 9C13.89 9 14.24 9.46 14.1 9.92ZM20.1 12.9C20.6 12.65 21 12.1 21 11.5V10.5C21 9.67 20.33 9 19.5 9H16.64C16.29 9 16 9.29 16 9.64V14.31C16 14.69 16.31 15 16.69 15H16.81C17.19 15 17.5 14.69 17.5 14.31V13H18.65L19.47 14.92C19.57 15.18 19.82 15.34 20.1 15.34C20.59 15.34 20.92 14.83 20.73 14.38L20.1 12.9Z" fill="currentColor"/></svg>';

const RuxIconFiberDvr$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-fiber-dvr", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-fiber-dvr"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-fiber-dvr":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFiberDvr$1);
      }
      break;
  } });
}

const RuxIconFiberDvr = RuxIconFiberDvr$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFiberDvr, defineCustomElement };
