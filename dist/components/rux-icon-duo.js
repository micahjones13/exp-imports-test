import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2H20C21.1 2 22 2.9 22 4V12C22 17.62 17.39 22 11.72 22C6.49 22 2 17.5 2 12.28C2 6.66 6.38 2 12 2ZM14 13L17 15V9L14 11V9H7V15H14V13Z" fill="currentColor"/></svg>';

const RuxIconDuo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-duo", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-duo"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-duo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDuo$1);
      }
      break;
  } });
}

const RuxIconDuo = RuxIconDuo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDuo, defineCustomElement };
