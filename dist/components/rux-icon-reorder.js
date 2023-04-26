import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H4ZM4 11H20C20.55 11 21 10.55 21 10C21 9.45 20.55 9 20 9H4C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11ZM20 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H20C20.55 13 21 13.45 21 14C21 14.55 20.55 15 20 15ZM20 19H4C3.45 19 3 18.55 3 18C3 17.45 3.45 17 4 17H20C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19Z" fill="currentColor"/></svg>';

const RuxIconReorder$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-reorder", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-reorder"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-reorder":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconReorder$1);
      }
      break;
  } });
}

const RuxIconReorder = RuxIconReorder$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconReorder, defineCustomElement };
