import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H16.83L15.59 3.65C15.22 3.24 14.68 3 14.12 3H9.88C9.32 3 8.78 3.24 8.4 3.65L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18ZM10.75 11.75L12 9L13.25 11.75L16 13L13.25 14.25L12 17L10.75 14.25L8 13L10.75 11.75Z" fill="currentColor"/></svg>';

const RuxIconCameraEnhance$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-camera-enhance", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-camera-enhance"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-camera-enhance":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCameraEnhance$1);
      }
      break;
  } });
}

const RuxIconCameraEnhance = RuxIconCameraEnhance$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCameraEnhance, defineCustomElement };
