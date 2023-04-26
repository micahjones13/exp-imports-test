import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.79C18 13.84 15.82 16.56 12.79 16.95C9.13 17.42 6 14.57 6 11V4.25C6 3.56 6.56 3 7.25 3C7.94 3 8.5 3.56 8.5 4.25V11C8.5 13.17 10.48 14.89 12.73 14.42C14.37 14.09 15.5 12.57 15.5 10.9V4.25C15.5 3.56 16.06 3 16.75 3C17.44 3 18 3.56 18 4.25V10.79ZM6 21C5.45 21 5 20.55 5 20C5 19.45 5.45 19 6 19H18C18.55 19 19 19.45 19 20C19 20.55 18.55 21 18 21H6Z" fill="currentColor"/></svg>';

const RuxIconFormatUnderlined$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-underlined", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-underlined"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-underlined":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatUnderlined$1);
      }
      break;
  } });
}

const RuxIconFormatUnderlined = RuxIconFormatUnderlined$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatUnderlined, defineCustomElement };
