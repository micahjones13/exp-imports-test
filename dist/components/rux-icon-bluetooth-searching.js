import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.42005L11.41 12.0001L15 15.5801C15.39 15.9801 15.39 16.6101 15 17.0001L10.71 21.3001C10.08 21.93 8.99997 21.4801 8.99997 20.5901V14.4101L5.10997 18.3001C4.71997 18.6901 4.08997 18.6901 3.69997 18.3001C3.30997 17.9101 3.30997 17.2801 3.69997 16.8901L8.58997 12.0001L3.69997 7.11005C3.30997 6.72005 3.30997 6.09005 3.69997 5.70005C4.08997 5.31005 4.71997 5.31005 5.10997 5.70005L8.99997 9.59005V3.41005C8.99997 2.52005 10.08 2.08005 10.71 2.71005L15 7.00005C15.39 7.40005 15.39 8.03005 15 8.42005ZM20.1 7.78005C19.85 7.23005 19.12 7.11005 18.7 7.54005C18.44 7.80005 18.39 8.18005 18.53 8.52005C18.99 9.59005 19.25 10.7601 19.25 11.9901C19.25 13.2301 18.99 14.4101 18.52 15.4801C18.38 15.8001 18.43 16.1701 18.68 16.4201C19.09 16.8301 19.78 16.7101 20.03 16.1901C20.66 14.8901 21.01 13.4301 21.01 11.8901C21 10.4401 20.68 9.04005 20.1 7.78005ZM15.98 10.2801L14.6 11.6601C14.4 11.8601 14.4 12.1701 14.6 12.3701L15.98 13.7501C16.26 14.0301 16.73 13.9001 16.83 13.5201C16.94 13.0201 17 12.5201 17 12.0001C17 11.4901 16.94 10.9901 16.82 10.5201C16.73 10.1401 16.26 10.0001 15.98 10.2801ZM11 5.83005L12.88 7.71005L11 9.59005V5.83005ZM12.88 16.2901L11 14.4101V18.1701L12.88 16.2901Z" fill="currentColor"/></svg>';

const RuxIconBluetoothSearching$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-bluetooth-searching", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-bluetooth-searching"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-bluetooth-searching":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBluetoothSearching$1);
      }
      break;
  } });
}

const RuxIconBluetoothSearching = RuxIconBluetoothSearching$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBluetoothSearching, defineCustomElement };
