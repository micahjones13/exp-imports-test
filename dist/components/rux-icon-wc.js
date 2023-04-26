import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.20003 6C8.26563 6 9.12003 5.11 9.12003 4C9.12003 2.89 8.26563 2 7.20003 2C6.13443 2 5.28003 2.89 5.28003 4C5.28003 5.11 6.13443 6 7.20003 6ZM5.28003 14.5V21C5.28003 21.55 5.71203 22 6.24003 22H8.16003C8.68803 22 9.12003 21.55 9.12003 21V14.5H9.60003C10.128 14.5 10.56 14.05 10.56 13.5V9C10.56 7.9 9.69603 7 8.64003 7H5.76003C4.70403 7 3.84003 7.9 3.84003 9V13.5C3.84003 14.05 4.27203 14.5 4.80003 14.5H5.28003ZM17.28 16V21C17.28 21.55 16.848 22 16.32 22H15.36C14.832 22 14.4 21.55 14.4 21V16H12.8544C12.192 16 11.7312 15.33 11.9424 14.68L13.9584 8.37C14.2176 7.55 14.9568 7 15.7824 7H15.8976C16.7232 7 17.4528 7.55 17.7216 8.37L19.7376 14.68C19.9392 15.33 19.4784 16 18.8256 16H17.28ZM17.76 4C17.76 5.11 16.9056 6 15.84 6C14.7744 6 13.92 5.11 13.92 4C13.92 2.89 14.7744 2 15.84 2C16.9056 2 17.76 2.89 17.76 4Z" fill="currentColor"/></svg>';

const RuxIconWc$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-wc", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-wc"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-wc":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWc$1);
      }
      break;
  } });
}

const RuxIconWc = RuxIconWc$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWc, defineCustomElement };
