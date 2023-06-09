import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.06 10C14.53 10 14.12 9.56 14.13 9.04C14.13 8.42 13.96 7.74 13.35 7.15C12.5 6.33 11.97 5.19 12 3.9C12.01 3.4 12.44 3 12.94 3C13.47 3 13.9 3.43 13.88 3.95C13.85 4.59 14 5.14 14.65 5.86C15.42 6.63 16.04 7.71 16 9.11C15.99 9.61 15.56 10 15.06 10ZM5 6C5 7.10457 5.89543 8 7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6ZM22 13C22 12.45 21.55 12 21 12H11.15C10.84 11.78 10.56 11.54 10.33 11.28L8.93 9.73C8.74 9.52 8.5 9.35 8.24 9.23C7.95 9.09 7.62 9 7.28 9H7.25C6.01 9 5 10.01 5 11.25V12H3C2.45 12 2 12.45 2 13V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V13ZM7 19V15C7 14.45 6.55 14 6 14C5.45 14 5 14.45 5 15V19C5 19.55 5.45 20 6 20C6.55 20 7 19.55 7 19ZM11 15V19C11 19.55 10.55 20 10 20C9.45 20 9 19.55 9 19V15C9 14.45 9.45 14 10 14C10.55 14 11 14.45 11 15ZM15 19V15C15 14.45 14.55 14 14 14C13.45 14 13 14.45 13 15V19C13 19.55 13.45 20 14 20C14.55 20 15 19.55 15 19ZM19 15V19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V15C17 14.45 17.45 14 18 14C18.55 14 19 14.45 19 15ZM18.13 9.04C18.12 9.56 18.53 10 19.06 10C19.56 10 19.99 9.61 20 9.11C20.04 7.71 19.42 6.63 18.65 5.86C18 5.14 17.85 4.59 17.88 3.95C17.9 3.43 17.47 3 16.94 3C16.44 3 16.01 3.4 16 3.9C15.97 5.19 16.5 6.33 17.35 7.15C17.96 7.74 18.13 8.42 18.13 9.04Z" fill="currentColor"/></svg>';

const RuxIconHotTub$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-hot-tub", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-hot-tub"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-hot-tub":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconHotTub$1);
      }
      break;
  } });
}

const RuxIconHotTub = RuxIconHotTub$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconHotTub, defineCustomElement };
