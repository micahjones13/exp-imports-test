import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00002 3H22C23.1 3 24 3.9 24 5V19C24 20.1 23.1 21 22 21H7.07002C6.38002 21 5.77002 20.64 5.41002 20.12L0.370017 12.56C0.150017 12.22 0.150017 11.79 0.370017 11.45L5.41002 3.88C5.77002 3.35 6.31002 3 7.00002 3ZM7.50002 12C7.50002 12.83 8.17002 13.5 9.00002 13.5C9.83002 13.5 10.5 12.83 10.5 12C10.5 11.17 9.83002 10.5 9.00002 10.5C8.17002 10.5 7.50002 11.17 7.50002 12ZM14 13.5C13.17 13.5 12.5 12.83 12.5 12C12.5 11.17 13.17 10.5 14 10.5C14.83 10.5 15.5 11.17 15.5 12C15.5 12.83 14.83 13.5 14 13.5ZM17.5 12C17.5 12.83 18.17 13.5 19 13.5C19.83 13.5 20.5 12.83 20.5 12C20.5 11.17 19.83 10.5 19 10.5C18.17 10.5 17.5 11.17 17.5 12Z" fill="currentColor"/></svg>';

const RuxIconMore$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-more", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-more"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-more":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMore$1);
      }
      break;
  } });
}

const RuxIconMore = RuxIconMore$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMore, defineCustomElement };
