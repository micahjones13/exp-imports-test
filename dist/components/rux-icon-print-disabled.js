import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.11998 2.31997C1.72998 1.92997 1.09998 1.92997 0.70998 2.31997C0.31998 2.70997 0.31998 3.33997 0.70998 3.72997L4.97998 7.99997C3.32998 8.00997 1.99998 9.34997 1.99998 11V15C1.99998 16.1 2.89998 17 3.99998 17H5.99998V19C5.99998 20.1 6.89998 21 7.99998 21H16C16.55 21 17.04 20.78 17.4 20.42L20.23 23.25C20.62 23.64 21.25 23.64 21.64 23.25C22.03 22.86 22.03 22.23 21.64 21.84L2.11998 2.31997ZM15 19H8.99998C8.44998 19 7.99998 18.55 7.99998 18V14H10.98L15.7 18.72C15.51 18.89 15.27 19 15 19ZM10.63 7.99997H19C20.66 7.99997 22 9.33997 22 11V15C22 16.1 21.1 17 20 17H19.63L10.63 7.99997ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 9.99997 19 9.99997C19.55 9.99997 20 10.45 20 11C20 11.55 19.55 12 19 12ZM18 5.99997C18 6.54997 17.55 6.99997 17 6.99997H9.62998L6.14998 3.50997C6.31998 3.20997 6.62998 2.99997 6.99998 2.99997H17C17.55 2.99997 18 3.44997 18 3.99997V5.99997Z" fill="currentColor"/></svg>';

const RuxIconPrintDisabled$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-print-disabled", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-print-disabled"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-print-disabled":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPrintDisabled$1);
      }
      break;
  } });
}

const RuxIconPrintDisabled = RuxIconPrintDisabled$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPrintDisabled, defineCustomElement };
