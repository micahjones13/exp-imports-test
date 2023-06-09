import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9H6C6.55 9 7 8.55 7 8V6C7 5.45 6.55 5 6 5H4C3.45 5 3 5.45 3 6V8C3 8.55 3.45 9 4 9ZM6 14H4C3.45 14 3 13.55 3 13V11C3 10.45 3.45 10 4 10H6C6.55 10 7 10.45 7 11V13C7 13.55 6.55 14 6 14ZM6 19H4C3.45 19 3 18.55 3 18V16C3 15.45 3.45 15 4 15H6C6.55 15 7 15.45 7 16V18C7 18.55 6.55 19 6 19ZM19 14H9C8.45 14 8 13.55 8 13V11C8 10.45 8.45 10 9 10H19C19.55 10 20 10.45 20 11V13C20 13.55 19.55 14 19 14ZM9 19H19C19.55 19 20 18.55 20 18V16C20 15.45 19.55 15 19 15H9C8.45 15 8 15.45 8 16V18C8 18.55 8.45 19 9 19ZM8 8V6C8 5.45 8.45 5 9 5H19C19.55 5 20 5.45 20 6V8C20 8.55 19.55 9 19 9H9C8.45 9 8 8.55 8 8Z" fill="currentColor"/></svg>';

const RuxIconViewList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-list", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-list"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewList$1);
      }
      break;
  } });
}

const RuxIconViewList = RuxIconViewList$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewList, defineCustomElement };
