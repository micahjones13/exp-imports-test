import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4.55 9 5 8.55 5 8C5 7.45 4.55 7 4 7C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9ZM5 12C5 12.55 4.55 13 4 13C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11C4.55 11 5 11.45 5 12ZM5 16C5 16.55 4.55 17 4 17C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15C4.55 15 5 15.45 5 16ZM20 13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13ZM8 17H20C20.55 17 21 16.55 21 16C21 15.45 20.55 15 20 15H8C7.45 15 7 15.45 7 16C7 16.55 7.45 17 8 17ZM8 9C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H20C20.55 7 21 7.45 21 8C21 8.55 20.55 9 20 9H8Z" fill="currentColor"/></svg>';

const RuxIconList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-list", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-list"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconList$1);
      }
      break;
  } });
}

const RuxIconList = RuxIconList$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconList, defineCustomElement };
