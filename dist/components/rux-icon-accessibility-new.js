import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4ZM19.51 6.24C20.06 6.12 20.61 6.44 20.75 6.99C20.89 7.55 20.55 8.12 19.99 8.25C18.39 8.61 16.65 8.86 15 9V21C15 21.55 14.55 22 14 22C13.45 22 13 21.55 13 21V16H11V21C11 21.55 10.55 22 10 22C9.45002 22 9.00002 21.55 9.00002 21V9C7.35002 8.86 5.61002 8.61 4.00002 8.25C3.45002 8.12 3.11002 7.55 3.25002 6.99C3.39002 6.44 3.94002 6.12 4.49002 6.24C6.87002 6.77 9.52002 7 12 7C14.48 7 17.13 6.77 19.51 6.24Z" fill="currentColor"/></svg>';

const RuxIconAccessibilityNew$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-accessibility-new", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-accessibility-new"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-accessibility-new":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAccessibilityNew$1);
      }
      break;
  } });
}

const RuxIconAccessibilityNew = RuxIconAccessibilityNew$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAccessibilityNew, defineCustomElement };
