import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.05 6.3C21.62 6.65 21.99 7.28 21.99 8L22 18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V8C2 7.28 2.38 6.65 2.95 6.3L10.99 1.59C11.61 1.22 12.39 1.22 13.01 1.59L21.05 6.3ZM3.74 7.84L10.94 12.34C11.59 12.74 12.41 12.74 13.06 12.34L20.26 7.84L13.01 3.59C12.39 3.22 11.61 3.22 10.99 3.59L3.74 7.84Z" fill="currentColor"/></svg>';

const RuxIconDrafts$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-drafts", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-drafts"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-drafts":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDrafts$1);
      }
      break;
  } });
}

const RuxIconDrafts = RuxIconDrafts$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDrafts, defineCustomElement };
