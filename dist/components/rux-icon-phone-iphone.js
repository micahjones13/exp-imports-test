import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1H8.5C7.12 1 6 2.12 6 3.5V20.5C6 21.88 7.12 23 8.5 23H16.5C17.88 23 19 21.88 19 20.5V3.5C19 2.12 17.88 1 16.5 1ZM12.5 22C11.67 22 11 21.33 11 20.5C11 19.67 11.67 19 12.5 19C13.33 19 14 19.67 14 20.5C14 21.33 13.33 22 12.5 22ZM8 18H17V4H8V18Z" fill="currentColor"/></svg>';

const RuxIconPhoneIphone$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-iphone", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-iphone"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-iphone":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneIphone$1);
      }
      break;
  } });
}

const RuxIconPhoneIphone = RuxIconPhoneIphone$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneIphone, defineCustomElement };
