import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.41 9.18005L14.88 7.71005L13 5.83005V8.77005L11 6.77005V3.41005C11 2.52005 12.08 2.08005 12.71 2.71005L17 7.00005C17.39 7.40005 17.39 8.03005 17 8.42005L14.82 10.5901L13.41 9.18005ZM19.29 17.8901L6.10997 4.70005C5.71997 4.31005 5.08997 4.31005 4.69997 4.70005C4.30997 5.09005 4.30997 5.72005 4.69997 6.11005L10.59 12.0001L5.69997 16.8901C5.30997 17.2801 5.30997 17.9101 5.69997 18.3001C6.08997 18.6901 6.71997 18.6901 7.10997 18.3001L11 14.4101V20.5901C11 21.4801 12.08 21.9301 12.71 21.3001L16.3 17.7101L17.89 19.3001C18.28 19.6901 18.91 19.6901 19.3 19.3001C19.68 18.9101 19.68 18.2701 19.29 17.8901ZM13 14.4101L14.88 16.2901L13 18.1701V14.4101Z" fill="currentColor"/></svg>';

const RuxIconBluetoothDisabled$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-bluetooth-disabled", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-bluetooth-disabled"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-bluetooth-disabled":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBluetoothDisabled$1);
      }
      break;
  } });
}

const RuxIconBluetoothDisabled = RuxIconBluetoothDisabled$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBluetoothDisabled, defineCustomElement };
