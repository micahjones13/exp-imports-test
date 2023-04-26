import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.99998H16L12.71 0.70998C12.32 0.31998 11.69 0.31998 11.3 0.70998L8 3.99998H4C2.9 3.99998 2 4.89998 2 5.99998V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V5.99998C22 4.89998 21.1 3.99998 20 3.99998ZM19 20H5C4.45 20 4 19.55 4 19V6.99998C4 6.44998 4.45 5.99998 5 5.99998H8.52L12.04 2.49998L15.52 5.99998H19C19.55 5.99998 20 6.44998 20 6.99998V19C20 19.55 19.55 20 19 20ZM7 7.99998H17C17.55 7.99998 18 8.44998 18 8.99998V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V8.99998C6 8.44998 6.45 7.99998 7 7.99998Z" fill="currentColor"/></svg>';

const RuxIconFilterFrames$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-filter-frames", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-filter-frames"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-filter-frames":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFilterFrames$1);
      }
      break;
  } });
}

const RuxIconFilterFrames = RuxIconFilterFrames$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFilterFrames, defineCustomElement };
