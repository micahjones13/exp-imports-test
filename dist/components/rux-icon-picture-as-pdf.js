import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM11.5 9.5C11.5 10.33 10.83 11 10 11H9V12.25C9 12.66 8.66 13 8.25 13C7.84 13 7.5 12.66 7.5 12.25V8C7.5 7.45 7.95 7 8.5 7H10C10.83 7 11.5 7.67 11.5 8.5V9.5ZM15 13C15.83 13 16.5 12.33 16.5 11.5V8.5C16.5 7.67 15.83 7 15 7H13C12.72 7 12.5 7.22 12.5 7.5V12.5C12.5 12.78 12.72 13 13 13H15ZM20.5 7.75C20.5 8.16 20.16 8.5 19.75 8.5H19V9.5H19.75C20.16 9.5 20.5 9.84 20.5 10.25C20.5 10.66 20.16 11 19.75 11H19V12.25C19 12.66 18.66 13 18.25 13C17.84 13 17.5 12.66 17.5 12.25V8C17.5 7.45 17.95 7 18.5 7H19.75C20.16 7 20.5 7.34 20.5 7.75ZM10 9.5H9V8.5H10V9.5ZM3 6C2.45 6 2 6.45 2 7V20C2 21.1 2.9 22 4 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20H5C4.45 20 4 19.55 4 19V7C4 6.45 3.55 6 3 6ZM15 11.5H14V8.5H15V11.5Z" fill="currentColor"/></svg>';

const RuxIconPictureAsPdf$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-picture-as-pdf", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-picture-as-pdf"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-picture-as-pdf":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPictureAsPdf$1);
      }
      break;
  } });
}

const RuxIconPictureAsPdf = RuxIconPictureAsPdf$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPictureAsPdf, defineCustomElement };
