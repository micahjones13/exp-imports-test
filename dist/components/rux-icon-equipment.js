import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V9C2 10.1046 2.89543 11 4 11H20C21.1046 11 22 10.1046 22 9V5ZM22 15C22 13.8954 21.1046 13 20 13H4C2.89543 13 2 13.8954 2 15V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V15ZM4 15H20V19H4V15ZM7 16V18H5V16H7ZM10 18V16H8V18H10ZM13 16V18H11V16H13ZM20 5H4V9H20V5ZM7 8V6H5V8H7ZM10 6V8H8V6H10ZM13 8V6H11V8H13Z" fill="currentColor"/></svg>';

const RuxIconEquipment$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-equipment", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-equipment"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-equipment":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconEquipment$1);
      }
      break;
  } });
}

const RuxIconEquipment = RuxIconEquipment$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconEquipment, defineCustomElement };
