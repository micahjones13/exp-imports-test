import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 18C21 18.55 20.55 19 20 19H4C3.45 19 3 18.55 3 18V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V18ZM13.88 8.7C14.27 8.31 14.9 8.31 15.29 8.7C15.68 9.09 15.68 9.73 15.3 10.11L13.41 12L15.3 13.89C15.69 14.28 15.69 14.91 15.3 15.3C14.91 15.69 14.28 15.69 13.89 15.3L12 13.41L10.11 15.3C9.72 15.69 9.09 15.69 8.7 15.3C8.31 14.91 8.31 14.28 8.7 13.89L10.59 12L8.7 10.11C8.31 9.72 8.31 9.09 8.7 8.7C9.09 8.31 9.72 8.31 10.11 8.7L12 10.59L13.88 8.7Z" fill="currentColor"/></svg>';

const RuxIconCancelPresentation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cancel-presentation", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cancel-presentation"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cancel-presentation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCancelPresentation$1);
      }
      break;
  } });
}

const RuxIconCancelPresentation = RuxIconCancelPresentation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCancelPresentation, defineCustomElement };
