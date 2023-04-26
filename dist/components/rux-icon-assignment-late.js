import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.82 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3ZM11 16V18H13V16H11ZM13 13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V13ZM11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3C11.45 3 11 3.45 11 4Z" fill="currentColor"/></svg>';

const RuxIconAssignmentLate$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-assignment-late", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-assignment-late"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-assignment-late":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAssignmentLate$1);
      }
      break;
  } });
}

const RuxIconAssignmentLate = RuxIconAssignmentLate$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAssignmentLate, defineCustomElement };
