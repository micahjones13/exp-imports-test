import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM7 9H9V11H7V9ZM7 13V11H5V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V11H17V9H15V11H13V9H11V11H9V13H7ZM7 13H5V15H7V13ZM11 13V11H13V13H11ZM15 13V11H17V13H15ZM17 13V15H19V13H17ZM15 13V15H13V13H15ZM11 13V15H9V13H11ZM9 18H7V16H9V18ZM11 18H13V16H11V18ZM17 18H15V16H17V18Z" fill="currentColor"/></svg>';

const RuxIconGradient$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-gradient", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-gradient"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-gradient":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGradient$1);
      }
      break;
  } });
}

const RuxIconGradient = RuxIconGradient$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGradient, defineCustomElement };
