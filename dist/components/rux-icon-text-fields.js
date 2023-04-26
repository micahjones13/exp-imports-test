import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C3.17 7 2.5 6.33 2.5 5.5C2.5 4.67 3.17 4 4 4H14C14.83 4 15.5 4.67 15.5 5.5C15.5 6.33 14.83 7 14 7H10.5V17.5C10.5 18.33 9.83 19 9 19C8.17 19 7.5 18.33 7.5 17.5V7H4ZM14 9H20C20.83 9 21.5 9.67 21.5 10.5C21.5 11.33 20.83 12 20 12H18.5V17.5C18.5 18.33 17.83 19 17 19C16.17 19 15.5 18.33 15.5 17.5V12H14C13.17 12 12.5 11.33 12.5 10.5C12.5 9.67 13.17 9 14 9Z" fill="currentColor"/></svg>';

const RuxIconTextFields$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-text-fields", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-text-fields"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-text-fields":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTextFields$1);
      }
      break;
  } });
}

const RuxIconTextFields = RuxIconTextFields$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTextFields, defineCustomElement };
