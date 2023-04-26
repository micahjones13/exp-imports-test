import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00002 5.5V9.24C7.79002 8.43 7.00002 7.06 7.00002 5.5C7.00002 3.01 9.01002 1 11.5 1C13.99 1 16 3.01 16 5.5C16 7.06 15.21 8.43 14 9.24V5.5C14 4.12 12.88 3 11.5 3C10.12 3 9.00002 4.12 9.00002 5.5ZM13.61 11.5C13.92 11.5 14.22 11.57 14.5 11.71L18.58 13.74C19.35 14.12 19.79 14.96 19.67 15.81L19.04 20.28C18.9 21.27 18.06 22 17.06 22H10.96C10.43 22 9.92002 21.79 9.54002 21.42L5.53002 17.41C5.10002 16.97 5.10002 16.27 5.53002 15.83C5.80002 15.56 6.19002 15.44 6.56002 15.52L10 16.24V5.5C10 4.67 10.67 4 11.5 4C12.33 4 13 4.67 13 5.5V11.5H13.61Z" fill="currentColor"/></svg>';

const RuxIconTouchApp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-touch-app", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-touch-app"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-touch-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTouchApp$1);
      }
      break;
  } });
}

const RuxIconTouchApp = RuxIconTouchApp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTouchApp, defineCustomElement };
