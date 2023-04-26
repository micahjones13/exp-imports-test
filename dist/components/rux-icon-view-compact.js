import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11V7C3 5.9 3.9 5 5 5H20C21.1 5 22 5.9 22 7V11H3ZM5 19H9V12H3V17C3 18.1 3.9 19 5 19ZM10 19H20C21.1 19 22 18.1 22 17V12H10V19Z" fill="currentColor"/></svg>';

const RuxIconViewCompact$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-compact", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-compact"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-compact":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewCompact$1);
      }
      break;
  } });
}

const RuxIconViewCompact = RuxIconViewCompact$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewCompact, defineCustomElement };
