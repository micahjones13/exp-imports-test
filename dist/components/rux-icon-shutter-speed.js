import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 3H14C14.55 3 15 2.55 15 2C15 1.45 14.55 1 14 1H9.99998C9.44998 1 8.99998 1.45 8.99998 2C8.99998 2.55 9.44998 3 9.99998 3ZM19.03 7.39L19.78 6.64C20.16 6.26 20.17 5.63 19.78 5.24L19.77 5.23C19.38 4.84 18.76 4.85 18.37 5.23L17.62 5.98C16.07 4.74 14.12 4 12 4C7.19998 4 3.11998 7.96 2.99998 12.76C2.86998 17.84 6.93998 22 12 22C16.98 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM4.99998 13C4.99998 16.87 8.12998 20 12 20C15.87 20 19 16.87 19 13C19 9.13 15.87 6 12 6C8.12998 6 4.99998 9.13 4.99998 13ZM10.81 15H7.10998C6.72998 15 6.48998 15.4 6.65998 15.74C7.21998 16.86 8.09998 17.75 9.22998 18.31C9.45998 18.42 9.74998 18.33 9.87998 18.1L11.25 15.75C11.44 15.42 11.2 15 10.81 15ZM14.08 7.85C14.21 7.63 14.5 7.53 14.73 7.65C15.85 8.23 16.76 9.14 17.34 10.27C17.51 10.6 17.27 11 16.89 11H13.13C12.74 11 12.5 10.58 12.7 10.24L14.08 7.85ZM13.88 14.7C13.69 14.36 13.2 14.35 13.01 14.69L10.97 18.21C10.79 18.53 10.99 18.93 11.36 18.96C12.7 19.1 14.05 18.78 15.19 18.07C15.41 17.93 15.47 17.64 15.35 17.41L13.88 14.7ZM7.92998 9.57L10.31 13.23C10.52 13.56 10.28 14 9.88998 14H6.53998C6.27998 14 6.05998 13.81 6.03998 13.55C5.91998 12.14 6.27998 10.73 7.08998 9.57C7.28998 9.27 7.72998 9.27 7.92998 9.57ZM13.97 12.74L15.99 16.48C16.17 16.81 16.63 16.83 16.85 16.53C17.71 15.35 18.09 13.91 17.97 12.45C17.95 12.19 17.72 12 17.47 12H14.42C14.03 12 13.79 12.4 13.97 12.74ZM11.02 11.15C10.83 11.47 10.37 11.48 10.17 11.17L8.54998 8.69C8.40998 8.47 8.45998 8.16 8.67998 8.01C9.82998 7.25 11.2 6.92 12.56 7.04C12.93 7.08 13.15 7.48 12.96 7.8L11.02 11.15Z" fill="currentColor"/></svg>';

const RuxIconShutterSpeed$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-shutter-speed", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-shutter-speed"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-shutter-speed":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconShutterSpeed$1);
      }
      break;
  } });
}

const RuxIconShutterSpeed = RuxIconShutterSpeed$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconShutterSpeed, defineCustomElement };
