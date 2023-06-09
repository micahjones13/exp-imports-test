import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.34997 6.41997C8.85997 5.93997 8.85997 5.13997 9.34997 4.64997L11.29 2.69997C11.68 2.30997 12.31 2.30997 12.7 2.69997L14.65 4.64997C15.14 5.13997 15.14 5.92997 14.65 6.41997C14.16 6.89997 13.38 6.89997 12.89 6.41997L12 5.53997L11.11 6.41997C10.62 6.89997 9.83997 6.89997 9.34997 6.41997ZM17.58 9.34997C17.1 9.83997 17.1 10.62 17.58 11.11L18.46 12L17.58 12.89C17.1 13.38 17.1 14.16 17.58 14.65C18.07 15.14 18.86 15.14 19.35 14.65L21.3 12.7C21.69 12.31 21.69 11.68 21.3 11.29L19.35 9.33997C18.86 8.85997 18.06 8.85997 17.58 9.34997ZM4.64997 9.34997L2.69997 11.3C2.30997 11.69 2.30997 12.32 2.69997 12.71L4.64997 14.66C5.13997 15.15 5.92997 15.15 6.41997 14.66C6.89997 14.17 6.89997 13.39 6.41997 12.9L5.53997 12L6.41997 11.11C6.89997 10.62 6.89997 9.83997 6.41997 9.34997C5.93997 8.85997 5.13997 8.85997 4.64997 9.34997ZM11.11 17.58L12 18.46L12.9 17.58C13.39 17.1 14.17 17.1 14.66 17.58C15.15 18.07 15.15 18.86 14.66 19.35L12.71 21.3C12.32 21.69 11.69 21.69 11.3 21.3L9.34997 19.35C8.85997 18.86 8.85997 18.07 9.34997 17.58C9.83997 17.1 10.62 17.1 11.11 17.58ZM8.99997 12C8.99997 13.6568 10.3431 15 12 15C13.6568 15 15 13.6568 15 12C15 10.3431 13.6568 8.99997 12 8.99997C10.3431 8.99997 8.99997 10.3431 8.99997 12Z" fill="currentColor"/></svg>';

const RuxIconControlCamera$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-control-camera", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-control-camera"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-control-camera":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconControlCamera$1);
      }
      break;
  } });
}

const RuxIconControlCamera = RuxIconControlCamera$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconControlCamera, defineCustomElement };
