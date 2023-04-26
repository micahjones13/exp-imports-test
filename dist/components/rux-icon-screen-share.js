import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 16C22 17.1 21.1 18 20 18H23C23.55 18 24 18.45 24 19C24 19.55 23.55 20 23 20H1C0.45 20 0 19.55 0 19C0 18.45 0.45 18 1 18H4C2.89 18 2 17.1 2 16V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V16ZM13 12.28V14.47L16.61 11.09C16.82 10.89 16.82 10.56 16.61 10.36L13 7V9.13C9.11 9.67 7.56 12.33 7 15C8.39 13.13 10.22 12.28 13 12.28Z" fill="currentColor"/></svg>';

const RuxIconScreenShare$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-screen-share", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-screen-share"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-screen-share":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScreenShare$1);
      }
      break;
  } });
}

const RuxIconScreenShare = RuxIconScreenShare$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScreenShare, defineCustomElement };
