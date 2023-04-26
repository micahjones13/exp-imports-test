import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.89 3 1 3.89 1 5V19C1 20.11 1.89 21 3 21H21C22.11 21 23 20.11 23 19V5C23 3.89 22.11 3 21 3ZM20 19.02H4C3.45 19.02 3 18.57 3 18.02V5.98C3 5.43 3.45 4.98 4 4.98H20C20.55 4.98 21 5.43 21 5.98V18.02C21 18.57 20.55 19.02 20 19.02ZM8 12H10V16H14V12H16L12.36 8.35C12.16 8.15 11.85 8.15 11.65 8.35L8 12Z" fill="currentColor"/></svg>';

const RuxIconPresentToAll$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-present-to-all", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-present-to-all"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-present-to-all":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPresentToAll$1);
      }
      break;
  } });
}

const RuxIconPresentToAll = RuxIconPresentToAll$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPresentToAll, defineCustomElement };
