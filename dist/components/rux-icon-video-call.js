import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 7V10.5L19.29 8.2C19.92 7.57 21 8.02 21 8.91V15.08C21 15.97 19.92 16.42 19.29 15.79L17 13.5V17C17 17.55 16.55 18 16 18H4C3.45 18 3 17.55 3 17V7C3 6.45 3.45 6 4 6H16C16.55 6 17 6.45 17 7ZM11 13H13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11H11V9C11 8.45 10.55 8 10 8C9.45 8 9 8.45 9 9V11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13H9V15C9 15.55 9.45 16 10 16C10.55 16 11 15.55 11 15V13Z" fill="currentColor"/></svg>';

const RuxIconVideoCall$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-video-call", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-video-call"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-video-call":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVideoCall$1);
      }
      break;
  } });
}

const RuxIconVideoCall = RuxIconVideoCall$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVideoCall, defineCustomElement };
