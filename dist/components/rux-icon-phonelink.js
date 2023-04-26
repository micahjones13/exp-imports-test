import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.45 4.45 6 5 6H21C21.55 6 22 5.55 22 5C22 4.45 21.55 4 21 4H4C2.9 4 2 4.9 2 6V17H1.5C0.67 17 0 17.67 0 18.5C0 19.33 0.67 20 1.5 20H12.5C13.33 20 14 19.33 14 18.5C14 17.67 13.33 17 12.5 17H4V7ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM18 17H22V10H18V17Z" fill="currentColor"/></svg>';

const RuxIconPhonelink$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phonelink", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phonelink"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phonelink":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhonelink$1);
      }
      break;
  } });
}

const RuxIconPhonelink = RuxIconPhonelink$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhonelink, defineCustomElement };
