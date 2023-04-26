import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM13.5 21H10.5C10.22 21 10 20.78 10 20.5C10 20.22 10.22 20 10.5 20H13.5C13.78 20 14 20.22 14 20.5C14 20.78 13.78 21 13.5 21ZM7 18H17V4H7V18Z" fill="currentColor"/></svg>';

const RuxIconPhoneAndroid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-android", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-android"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-android":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneAndroid$1);
      }
      break;
  } });
}

const RuxIconPhoneAndroid = RuxIconPhoneAndroid$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneAndroid, defineCustomElement };
