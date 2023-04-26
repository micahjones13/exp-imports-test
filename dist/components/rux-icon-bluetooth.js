import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 7.00005L12.71 2.71005C12.08 2.08005 11 2.52005 11 3.41005V9.59005L7.10997 5.70005C6.71997 5.31005 6.08997 5.31005 5.69997 5.70005C5.30997 6.09005 5.30997 6.72005 5.69997 7.11005L10.59 12.0001L5.69997 16.8901C5.30997 17.2801 5.30997 17.9101 5.69997 18.3001C6.08997 18.6901 6.71997 18.6901 7.10997 18.3001L11 14.4101V20.5901C11 21.4801 12.08 21.93 12.71 21.3001L17 17.0001C17.39 16.6101 17.39 15.9801 17 15.5901L13.41 12.0001L17 8.42005C17.39 8.03005 17.39 7.39005 17 7.00005ZM13 5.83005L14.88 7.71005L13 9.59005V5.83005ZM13 18.1701L14.88 16.2901L13 14.4101V18.1701Z" fill="currentColor"/></svg>';

const RuxIconBluetooth$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-bluetooth", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-bluetooth"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-bluetooth":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBluetooth$1);
      }
      break;
  } });
}

const RuxIconBluetooth = RuxIconBluetooth$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBluetooth, defineCustomElement };
