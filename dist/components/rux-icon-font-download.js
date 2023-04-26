import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM14.07 13.5L12 7.98L9.93 13.5H14.07ZM14.81 15.5L15.71 17.88C15.86 18.25 16.22 18.5 16.62 18.5C17.3 18.5 17.77 17.81 17.52 17.18L13.27 6.37C13.06 5.84 12.56 5.5 12 5.5C11.44 5.5 10.94 5.84 10.72 6.37L6.47 17.18C6.22 17.81 6.69 18.5 7.37 18.5C7.78 18.5 8.14 18.25 8.28 17.87L9.17 15.5H14.81Z" fill="currentColor"/></svg>';

const RuxIconFontDownload$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-font-download", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-font-download"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-font-download":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFontDownload$1);
      }
      break;
  } });
}

const RuxIconFontDownload = RuxIconFontDownload$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFontDownload, defineCustomElement };
