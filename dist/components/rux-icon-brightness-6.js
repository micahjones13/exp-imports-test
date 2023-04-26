import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6 12.7099L20 15.3099V18.9999C20 19.5499 19.55 19.9999 19 19.9999H15.3L12.7 22.5999C12.31 22.9899 11.68 22.9899 11.29 22.5999L8.68998 19.9999H4.99998C4.44998 19.9999 3.99998 19.5499 3.99998 18.9999V15.2999L1.39998 12.6999C1.00998 12.3099 1.00998 11.6799 1.39998 11.2899L3.99998 8.68992V4.99992C3.99998 4.44992 4.44998 3.99992 4.99998 3.99992H8.68998L11.3 1.39992C11.69 1.00992 12.32 1.00992 12.71 1.39992L15.31 3.99992H19C19.55 3.99992 20 4.44992 20 4.99992V8.68992L22.6 11.2999C22.99 11.6899 22.99 12.3199 22.6 12.7099ZM12 7.09992V16.8999C12 17.5099 12.55 18.0099 13.15 17.8899C15.91 17.3499 18 14.9199 18 11.9999C18 9.07992 15.91 6.64992 13.15 6.10992C12.55 5.98992 12 6.48992 12 7.09992Z" fill="currentColor"/></svg>';

const RuxIconBrightness6$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-brightness-6", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-brightness-6"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-brightness-6":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrightness6$1);
      }
      break;
  } });
}

const RuxIconBrightness6 = RuxIconBrightness6$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrightness6, defineCustomElement };
