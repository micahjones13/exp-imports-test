import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3H7.5C6.67 3 6 3.67 6 4.5V19.5C6 20.33 6.67 21 7.5 21H16.5C17.33 21 18 20.33 18 19.5V4.5C18 3.67 17.33 3 16.5 3ZM5 16C5 16.55 4.55 17 4 17C3.45 17 3 16.55 3 16V8C3 7.45 3.45 7 4 7C4.55 7 5 7.45 5 8V16ZM2 14C2 14.55 1.55 15 1 15C0.45 15 0 14.55 0 14V10C0 9.45 0.45 9 1 9C1.55 9 2 9.45 2 10V14ZM22 10V14C22 14.55 22.45 15 23 15C23.55 15 24 14.55 24 14V10C24 9.45 23.55 9 23 9C22.45 9 22 9.45 22 10ZM21 16C21 16.55 20.55 17 20 17C19.45 17 19 16.55 19 16V8C19 7.45 19.45 7 20 7C20.55 7 21 7.45 21 8V16ZM8 19H16V5H8V19Z" fill="currentColor"/></svg>';

const RuxIconVibration$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-vibration", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-vibration"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-vibration":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVibration$1);
      }
      break;
  } });
}

const RuxIconVibration = RuxIconVibration$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVibration, defineCustomElement };
