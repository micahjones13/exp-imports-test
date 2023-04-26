import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM15 15C15 15.55 14.55 16 14 16H10C9.45 16 9 15.55 9 15V12C9 11.45 9.45 11 10 11V10C10 8.9 10.89 8 12 8C13.1 8 14 8.89 14 10V11C14.55 11 15 11.45 15 12V15ZM12 8.8C11.34 8.8 10.8 9.34 10.8 10V11H13.2V10C13.2 9.34 12.66 8.8 12 8.8ZM7 19H17V5H7V19Z" fill="currentColor"/></svg>';

const RuxIconScreenLockPortrait$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-screen-lock-portrait", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-screen-lock-portrait"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-screen-lock-portrait":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScreenLockPortrait$1);
      }
      break;
  } });
}

const RuxIconScreenLockPortrait = RuxIconScreenLockPortrait$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScreenLockPortrait, defineCustomElement };
