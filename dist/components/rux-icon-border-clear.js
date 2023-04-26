import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5H9V3H7V5ZM7 13H9V11H7V13ZM9 21H7V19H9V21ZM11 17H13V15H11V17ZM13 21H11V19H13V21ZM3 21H5V19H3V21ZM5 17H3V15H5V17ZM3 13H5V11H3V13ZM5 9H3V7H5V9ZM3 5H5V3H3V5ZM13 13H11V11H13V13ZM19 17H21V15H19V17ZM21 13H19V11H21V13ZM19 21H21V19H19V21ZM21 9H19V7H21V9ZM11 9H13V7H11V9ZM19 5V3H21V5H19ZM11 5H13V3H11V5ZM17 21H15V19H17V21ZM15 13H17V11H15V13ZM17 5H15V3H17V5Z" fill="currentColor"/></svg>';

const RuxIconBorderClear$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-border-clear", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-border-clear"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-border-clear":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBorderClear$1);
      }
      break;
  } });
}

const RuxIconBorderClear = RuxIconBorderClear$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBorderClear, defineCustomElement };
