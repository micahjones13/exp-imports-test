import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 3H14C14.55 3 15 2.55 15 2C15 1.45 14.55 1 14 1H9.99998C9.44998 1 8.99998 1.45 8.99998 2C8.99998 2.55 9.44998 3 9.99998 3ZM12 8C11.49 8 11.08 8.39 11.02 8.89L13 10.86V9C13 8.45 12.55 8 12 8ZM19 13C19 9.13 15.87 6 12 6C10.88 6 9.81998 6.27 8.87998 6.74L7.42998 5.29C8.77998 4.48 10.34 4 12 4C14.12 4 16.07 4.74 17.62 5.98L18.37 5.23C18.76 4.85 19.38 4.84 19.77 5.23L19.78 5.24C20.17 5.63 20.16 6.26 19.78 6.64L19.03 7.39C20.26 8.93 21 10.88 21 13C21 14.68 20.53 16.25 19.73 17.59L18.26 16.12C18.73 15.18 19 14.12 19 13ZM20.19 20.88L3.86998 4.56C3.47998 4.17 2.84998 4.17 2.45998 4.56C2.06998 4.95 2.06998 5.58 2.45998 5.97L4.52998 8.04C3.60998 9.42 3.04998 11.03 2.99998 12.76C2.86998 17.84 6.93998 22 12 22C13.84 22 15.55 21.45 16.98 20.5L18.77 22.29C19.16 22.68 19.79 22.68 20.18 22.29C20.58 21.9 20.58 21.27 20.19 20.88ZM4.99998 13C4.99998 16.87 8.12998 20 12 20C13.29 20 14.49 19.65 15.53 19.05L5.95998 9.48C5.34998 10.51 4.99998 11.71 4.99998 13Z" fill="currentColor"/></svg>';

const RuxIconTimerOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-timer-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-timer-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-timer-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTimerOff$1);
      }
      break;
  } });
}

const RuxIconTimerOff = RuxIconTimerOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTimerOff, defineCustomElement };
