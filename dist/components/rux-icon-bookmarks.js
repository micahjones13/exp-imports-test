import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 19L19 18V5C19 3.9 18.1 3 17 3H7C7 1.9 7.89 1 8.99 1H19C20.1 1 21 1.9 21 3V19ZM5 5H15C16.1 5 17 5.9 17 7V23L10 20L3 23V7C3 5.9 3.9 5 5 5Z" fill="currentColor"/></svg>';

const RuxIconBookmarks$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-bookmarks", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-bookmarks"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-bookmarks":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBookmarks$1);
      }
      break;
  } });
}

const RuxIconBookmarks = RuxIconBookmarks$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBookmarks, defineCustomElement };
