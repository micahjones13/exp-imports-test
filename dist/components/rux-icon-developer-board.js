import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 7C21.55 7 22 7.45 22 8C22 8.55 21.55 9 21 9H20V11H21C21.55 11 22 11.45 22 12C22 12.55 21.55 13 21 13H20V15H21C21.55 15 22 15.45 22 16C22 16.55 21.55 17 21 17H20V19C20 20.1 19.1 21 18 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H18C19.1 3 20 3.9 20 5V7H21ZM17 19C17.55 19 18 18.55 18 18V6C18 5.45 17.55 5 17 5H5C4.45 5 4 5.45 4 6V18C4 18.55 4.45 19 5 19H17ZM6.5 13H10.5C10.78 13 11 13.22 11 13.5V16.5C11 16.78 10.78 17 10.5 17H6.5C6.22 17 6 16.78 6 16.5V13.5C6 13.22 6.22 13 6.5 13ZM15.5 7H12.5C12.22 7 12 7.22 12 7.5V9.5C12 9.78 12.22 10 12.5 10H15.5C15.78 10 16 9.78 16 9.5V7.5C16 7.22 15.78 7 15.5 7ZM6.5 7H10.5C10.78 7 11 7.22 11 7.5V11.5C11 11.78 10.78 12 10.5 12H6.5C6.22 12 6 11.78 6 11.5V7.5C6 7.22 6.22 7 6.5 7ZM15.5 11H12.5C12.22 11 12 11.22 12 11.5V16.5C12 16.78 12.22 17 12.5 17H15.5C15.78 17 16 16.78 16 16.5V11.5C16 11.22 15.78 11 15.5 11Z" fill="currentColor"/></svg>';

const RuxIconDeveloperBoard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-developer-board", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-developer-board"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-developer-board":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDeveloperBoard$1);
      }
      break;
  } });
}

const RuxIconDeveloperBoard = RuxIconDeveloperBoard$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDeveloperBoard, defineCustomElement };
