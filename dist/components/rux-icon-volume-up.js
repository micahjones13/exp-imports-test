import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.64996V4.44996C14 3.81996 14.63 3.36996 15.21 3.59996C18.6 4.88996 21 8.15996 21 12C21 15.84 18.6 19.11 15.21 20.4C14.63 20.62 14 20.18 14 19.55V19.35C14 18.97 14.24 18.64 14.6 18.5C17.18 17.47 19 14.94 19 12C19 9.05996 17.18 6.52996 14.6 5.49996C14.25 5.35996 14 5.02996 14 4.64996ZM3 9.99996V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.40996C12 5.51996 10.92 5.06996 10.29 5.69996L7 8.99996H4C3.45 8.99996 3 9.44996 3 9.99996ZM16.5 12C16.5 10.23 15.48 8.70996 14 7.96996V16.02C15.48 15.29 16.5 13.77 16.5 12Z" fill="currentColor"/></svg>';

const RuxIconVolumeUp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-volume-up", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-volume-up"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-volume-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVolumeUp$1);
      }
      break;
  } });
}

const RuxIconVolumeUp = RuxIconVolumeUp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVolumeUp, defineCustomElement };
