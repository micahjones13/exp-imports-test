import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8 5H20C21.1 5 22 5.9 22 7V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V7C2 5.9 2.9 5 4 5H7.2L8.4 3.66C8.78 3.24 9.32 3 9.89 3H14.11C14.68 3 15.22 3.24 15.6 3.66L16.8 5ZM19 19C19.55 19 20 18.55 20 18V8C20 7.45 19.55 7 19 7H12V8C9.2 8 7 10.2 7 13C7 15.8 9.2 18 12 18V19H19ZM12 16.2V18C14.8 18 17 15.8 17 13C17 10.2 14.8 8 12 8V9.8C10.2 9.8 8.8 11.2 8.8 13C8.8 14.8 10.2 16.2 12 16.2ZM12 16.2C13.8 16.2 15.2 14.8 15.2 13C15.2 11.2 13.8 9.8 12 9.8V16.2Z" fill="currentColor"/></svg>';

const RuxIconMonochromePhotos$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-monochrome-photos", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-monochrome-photos"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-monochrome-photos":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMonochromePhotos$1);
      }
      break;
  } });
}

const RuxIconMonochromePhotos = RuxIconMonochromePhotos$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMonochromePhotos, defineCustomElement };
