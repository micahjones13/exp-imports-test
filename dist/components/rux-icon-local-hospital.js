import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19L3.01 5C3.01 3.9 3.9 3 5 3ZM14 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10H14V7C14 6.45 13.55 6 13 6H11C10.45 6 10 6.45 10 7V10H7C6.45 10 6 10.45 6 11V13C6 13.55 6.45 14 7 14H10V17C10 17.55 10.45 18 11 18H13C13.55 18 14 17.55 14 17V14Z" fill="currentColor"/></svg>';

const RuxIconLocalHospital$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-local-hospital", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-local-hospital"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-local-hospital":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLocalHospital$1);
      }
      break;
  } });
}

const RuxIconLocalHospital = RuxIconLocalHospital$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLocalHospital, defineCustomElement };
