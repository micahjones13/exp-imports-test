import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00001 16.1698L5.53001 12.6998C5.14001 12.3098 4.51001 12.3098 4.12001 12.6998C3.73001 13.0898 3.73001 13.7198 4.12001 14.1098L8.30001 18.2898C8.69001 18.6798 9.32001 18.6798 9.71001 18.2898L20.29 7.70982C20.68 7.31982 20.68 6.68982 20.29 6.29982C19.9 5.90982 19.27 5.90982 18.88 6.29982L9.00001 16.1698Z" fill="currentColor"/></svg>';

const RuxIconCheck$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-check", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-check"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-check":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCheck$1);
      }
      break;
  } });
}

const RuxIconCheck = RuxIconCheck$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCheck, defineCustomElement };
