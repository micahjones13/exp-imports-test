import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C3.45 4 3 4.45 3 5V7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7V5C21 4.45 20.55 4 20 4ZM4 10H20C20.55 10 21 10.45 21 11V12C21 12.55 20.55 13 20 13H4C3.45 13 3 12.55 3 12V11C3 10.45 3.45 10 4 10ZM4 15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H4C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15ZM3.5 19H20.5C20.78 19 21 19.22 21 19.5C21 19.78 20.78 20 20.5 20H3.5C3.22 20 3 19.78 3 19.5C3 19.22 3.22 19 3.5 19Z" fill="currentColor"/></svg>';

const RuxIconLineWeight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-line-weight", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-line-weight"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-line-weight":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLineWeight$1);
      }
      break;
  } });
}

const RuxIconLineWeight = RuxIconLineWeight$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLineWeight, defineCustomElement };
