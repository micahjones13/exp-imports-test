import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H4ZM4 11H20C20.55 11 21 10.55 21 10C21 9.45 20.55 9 20 9H4C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11ZM4 19H20C20.55 19 21 18.55 21 18V14C21 13.45 20.55 13 20 13H4C3.45 13 3 13.45 3 14V18C3 18.55 3.45 19 4 19Z" fill="currentColor"/></svg>';

const RuxIconHorizontalSplit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-horizontal-split", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-horizontal-split"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-horizontal-split":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconHorizontalSplit$1);
      }
      break;
  } });
}

const RuxIconHorizontalSplit = RuxIconHorizontalSplit$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconHorizontalSplit, defineCustomElement };
