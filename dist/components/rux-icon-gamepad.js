import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3V7.29C15 7.43 14.95 7.55 14.86 7.64L12.36 10.14C12.16 10.34 11.85 10.34 11.65 10.14L9.15 7.64C9.05 7.55 9 7.42 9 7.29V3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3ZM3 9H7.29C7.43 9 7.55 9.05 7.64 9.14L10.14 11.64C10.34 11.84 10.34 12.15 10.14 12.35L7.64 14.85C7.55 14.95 7.42 15 7.29 15H3C2.45 15 2 14.55 2 14V10C2 9.45 2.45 9 3 9ZM9 16.71V21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V16.71C15 16.58 14.95 16.45 14.85 16.36L12.35 13.86C12.15 13.66 11.84 13.66 11.64 13.86L9.14 16.36C9.05 16.45 9 16.57 9 16.71ZM13.85 11.65L16.35 9.15C16.45 9.05 16.57 9 16.71 9.01H21C21.55 9.01 22 9.46 22 10.01V14.01C22 14.56 21.55 15.01 21 15.01H16.7C16.57 15.01 16.44 14.95 16.35 14.86L13.85 12.36C13.65 12.16 13.65 11.85 13.85 11.65Z" fill="currentColor"/></svg>';

const RuxIconGamepad$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-gamepad", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-gamepad"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-gamepad":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGamepad$1);
      }
      break;
  } });
}

const RuxIconGamepad = RuxIconGamepad$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGamepad, defineCustomElement };
