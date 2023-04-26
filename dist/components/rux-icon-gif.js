import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 9.75C10 9.34 9.66 9 9.25 9H6C5.4 9 5 9.5 5 10V14C5 14.5 5.4 15 6 15H9C9.6 15 10 14.5 10 14V12.75C10 12.34 9.66 12 9.25 12C8.84 12 8.5 12.34 8.5 12.75V13.5H6.5V10.5H9.25C9.66 10.5 10 10.16 10 9.75ZM12.25 9C12.66 9 13 9.34 13 9.75V14.25C13 14.66 12.66 15 12.25 15C11.84 15 11.5 14.66 11.5 14.25V9.75C11.5 9.34 11.84 9 12.25 9ZM18.25 9C18.66 9 19 9.34 19 9.75C19 10.16 18.66 10.5 18.25 10.5H16V11.5H17.25C17.66 11.5 18 11.84 18 12.25C18 12.66 17.66 13 17.25 13H16V14.25C16 14.66 15.66 15 15.25 15C14.84 15 14.5 14.66 14.5 14.25V10C14.5 9.45 14.95 9 15.5 9H18.25Z" fill="currentColor"/></svg>';

const RuxIconGif$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-gif", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-gif"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-gif":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGif$1);
      }
      break;
  } });
}

const RuxIconGif = RuxIconGif$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGif, defineCustomElement };
