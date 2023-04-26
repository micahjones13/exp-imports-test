import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 11H2.5V9.75C2.5 9.34 2.16 9 1.75 9C1.34 9 1 9.34 1 9.75V14.25C1 14.66 1.34 15 1.75 15C2.16 15 2.5 14.66 2.5 14.25V12.5H4.5V14.25C4.5 14.66 4.84 15 5.25 15C5.66 15 6 14.66 6 14.25V9.75C6 9.34 5.66 9 5.25 9C4.84 9 4.5 9.34 4.5 9.75V11ZM7.75 10.5H8.5V14.25C8.5 14.66 8.84 15 9.25 15C9.66 15 10 14.66 10 14.25V10.5H10.75C11.16 10.5 11.5 10.16 11.5 9.75C11.5 9.34 11.16 9 10.75 9H7.75C7.34 9 7 9.34 7 9.75C7 10.16 7.34 10.5 7.75 10.5ZM14 10.5H13.25C12.84 10.5 12.5 10.16 12.5 9.75C12.5 9.34 12.84 9 13.25 9H16.25C16.66 9 17 9.34 17 9.75C17 10.16 16.66 10.5 16.25 10.5H15.5V14.25C15.5 14.66 15.16 15 14.75 15C14.34 15 14 14.66 14 14.25V10.5ZM21.5 9H19C18.45 9 18 9.45 18 10V14.25C18 14.66 18.34 15 18.75 15C19.16 15 19.5 14.66 19.5 14.25V13H21.5C22.33 13 23 12.32 23 11.5V10.5C23 9.68 22.33 9 21.5 9ZM19.5 11.5H21.5V10.5H19.5V11.5Z" fill="currentColor"/></svg>';

const RuxIconHttp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-http", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-http"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-http":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconHttp$1);
      }
      break;
  } });
}

const RuxIconHttp = RuxIconHttp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconHttp, defineCustomElement };
