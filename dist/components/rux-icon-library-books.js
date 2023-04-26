import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM3 6C2.45 6 2 6.45 2 7V20C2 21.1 2.9 22 4 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20H5C4.45 20 4 19.55 4 19V7C4 6.45 3.55 6 3 6ZM10 11H18C18.55 11 19 10.55 19 10C19 9.45 18.55 9 18 9H10C9.45 9 9 9.45 9 10C9 10.55 9.45 11 10 11ZM14 15H10C9.45 15 9 14.55 9 14C9 13.45 9.45 13 10 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM10 7H18C18.55 7 19 6.55 19 6C19 5.45 18.55 5 18 5H10C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7Z" fill="currentColor"/></svg>';

const RuxIconLibraryBooks$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-library-books", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-library-books"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-library-books":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLibraryBooks$1);
      }
      break;
  } });
}

const RuxIconLibraryBooks = RuxIconLibraryBooks$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLibraryBooks, defineCustomElement };
