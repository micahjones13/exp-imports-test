import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9C6.84 9 6.5 9.34 6.5 9.75V11H4.5V9.75C4.5 9.34 4.16 9 3.75 9C3.34 9 3 9.34 3 9.75V14.25C3 14.66 3.34 15 3.75 15C4.16 15 4.5 14.66 4.5 14.25V12.5H6.5V14.25C6.5 14.66 6.84 15 7.25 15C7.66 15 8 14.66 8 14.25V9.75C8 9.34 7.66 9 7.25 9ZM21 10.5C21 9.67 20.33 9 19.5 9H17C16.45 9 16 9.45 16 10V14.25C16 14.66 16.34 15 16.75 15C17.16 15 17.5 14.66 17.5 14.25V13H18.6L19.32 14.59C19.43 14.84 19.68 15 19.95 15C20.45 15 20.78 14.49 20.59 14.04L20.1 12.9C20.6 12.6 21 12.1 21 11.5V10.5ZM19.5 10.5H17.5V11.5H19.5V10.5ZM13 9H10C9.72 9 9.5 9.22 9.5 9.5V14.5C9.5 14.78 9.72 15 10 15H13C13.82 15 14.5 14.32 14.5 13.5V10.5C14.5 9.68 13.82 9 13 9ZM11 13.5H13V10.5H11V13.5Z" fill="currentColor"/></svg>';

const RuxIconHdrOn$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-hdr-on", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-hdr-on"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-hdr-on":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconHdrOn$1);
      }
      break;
  } });
}

const RuxIconHdrOn = RuxIconHdrOn$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconHdrOn, defineCustomElement };
