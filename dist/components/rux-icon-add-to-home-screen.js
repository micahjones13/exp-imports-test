import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 1L18 1.01C19.1 1.01 20 1.9 20 3V21C20 22.1 19.1 23 18 23H7.99997C6.89997 23 5.99997 22.1 5.99997 21V18C5.99997 17.45 6.44997 17 6.99997 17C7.54997 17 7.99997 17.45 7.99997 18V19H18V5H7.99997V6C7.99997 6.55 7.54997 7 6.99997 7C6.44997 7 5.99997 6.55 5.99997 6V3C5.99997 1.9 6.89997 1 7.99997 1ZM12 14C12 14.55 11.55 15 11 15C10.45 15 9.99997 14.55 9.99997 14V11.41L5.10997 16.3C4.71997 16.69 4.08997 16.69 3.69997 16.3C3.30997 15.91 3.30997 15.28 3.69997 14.89L8.58997 10H5.99997C5.44997 10 4.99997 9.55 4.99997 9C4.99997 8.45 5.44997 8 5.99997 8H11C11.55 8 12 8.45 12 9V14Z" fill="currentColor"/></svg>';

const RuxIconAddToHomeScreen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-add-to-home-screen", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-add-to-home-screen"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-add-to-home-screen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAddToHomeScreen$1);
      }
      break;
  } });
}

const RuxIconAddToHomeScreen = RuxIconAddToHomeScreen$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAddToHomeScreen, defineCustomElement };
