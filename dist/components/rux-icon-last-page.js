import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0025 7C19.0025 6.45 18.5525 6 18.0025 6C17.4525 6 17.0025 6.45 17.0025 7V17C17.0025 17.55 17.4525 18 18.0025 18C18.5525 18 19.0025 17.55 19.0025 17V7ZM11.1825 12L7.2925 8.11C6.9125 7.73 6.9125 7.09 7.2925 6.7C7.6825 6.31 8.3125 6.31 8.7025 6.7L13.2925 11.3C13.6825 11.69 13.6825 12.32 13.2925 12.71L8.7025 17.3C8.3125 17.69 7.6825 17.69 7.2925 17.3C6.9025 16.91 6.9025 16.28 7.2925 15.89L11.1825 12Z" fill="currentColor"/></svg>';

const RuxIconLastPage$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-last-page", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-last-page"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-last-page":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLastPage$1);
      }
      break;
  } });
}

const RuxIconLastPage = RuxIconLastPage$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLastPage, defineCustomElement };
