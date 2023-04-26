import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4V12C5 13.66 6.34 15 8 15H13C13.55 15 14 15.45 14 16C14 16.55 13.55 17 13 17H8C5.24 17 3 14.76 3 12V4C3 3.45 3.45 3 4 3C4.55 3 5 3.45 5 4ZM19 18H20.5C21.33 18 22 18.67 22 19.5C22 20.33 21.33 21 20.5 21H18C16.9 21 16 20.1 16 19V14H9C7.35 14 6 12.65 6 11V3H12V9H17C18.1 9 19 9.9 19 11V18Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatLegroomNormal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-airline-seat-legroom-normal", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-airline-seat-legroom-normal"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-airline-seat-legroom-normal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAirlineSeatLegroomNormal$1);
      }
      break;
  } });
}

const RuxIconAirlineSeatLegroomNormal = RuxIconAirlineSeatLegroomNormal$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAirlineSeatLegroomNormal, defineCustomElement };
