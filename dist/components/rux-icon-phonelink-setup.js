import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.99997 3V5C6.99997 5.55 7.44997 6 7.99997 6C8.54997 6 8.99997 5.55 8.99997 5V4H19V20H8.99997V19C8.99997 18.45 8.54997 18 7.99997 18C7.44997 18 6.99997 18.45 6.99997 19V21C6.99997 22.1 7.89997 23 8.99997 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1H8.99997C7.89997 1 6.99997 1.9 6.99997 3ZM9.49997 15.5C9.78997 15.38 10.05 15.21 10.3 15.02L10.28 15.05L11.29 15.44C11.52 15.53 11.78 15.44 11.9 15.22L12.74 13.76C12.86 13.55 12.81 13.27 12.62 13.12L11.77 12.44L11.75 12.47C11.755 12.43 11.7606 12.39 11.7662 12.35C11.7831 12.23 11.8 12.11 11.8 11.99C11.8 11.87 11.7831 11.75 11.7662 11.63C11.7606 11.59 11.755 11.55 11.75 11.51L11.77 11.54L12.62 10.86C12.81 10.71 12.86 10.43 12.74 10.22L11.9 8.76C11.78 8.55 11.52 8.45 11.29 8.54L10.28 8.93L10.3 8.96C10.05 8.79 9.78997 8.62 9.49997 8.5L9.32997 7.42C9.29997 7.18 9.08997 7 8.83997 7H7.15997C6.90997 7 6.69997 7.18 6.66997 7.42L6.49997 8.5C6.20997 8.62 5.94997 8.79 5.69997 8.98L5.71997 8.95L4.69997 8.56C4.46997 8.47 4.20997 8.56 4.08997 8.78L3.24997 10.24C3.12997 10.45 3.17997 10.73 3.36997 10.88L4.21997 11.56L4.23997 11.53C4.23554 11.5632 4.23062 11.597 4.22564 11.6311C4.20815 11.7509 4.18997 11.8755 4.18997 12C4.18997 12.12 4.20685 12.24 4.22372 12.36C4.22935 12.4 4.23497 12.44 4.23997 12.48L4.21997 12.45L3.36997 13.13C3.17997 13.28 3.12997 13.56 3.24997 13.77L4.08997 15.23C4.20997 15.44 4.46997 15.54 4.69997 15.45L5.70997 15.06L5.69997 15.02C5.94997 15.21 6.20997 15.38 6.49997 15.5L6.66997 16.57C6.69997 16.82 6.90997 17 7.15997 17H8.83997C9.08997 17 9.29997 16.82 9.32997 16.58L9.49997 15.5ZM7.99997 10C6.89997 10 5.99997 10.9 5.99997 12C5.99997 13.1 6.89997 14 7.99997 14C9.09997 14 9.99997 13.1 9.99997 12C9.99997 10.9 9.09997 10 7.99997 10Z" fill="currentColor"/></svg>';

const RuxIconPhonelinkSetup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phonelink-setup", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phonelink-setup"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phonelink-setup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhonelinkSetup$1);
      }
      break;
  } });
}

const RuxIconPhonelinkSetup = RuxIconPhonelinkSetup$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhonelinkSetup, defineCustomElement };
