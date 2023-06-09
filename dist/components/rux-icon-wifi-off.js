import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.11998 2.33986L19.68 17.8999C20.07 18.2899 20.07 18.9199 19.68 19.2899C19.29 19.6799 18.66 19.6799 18.27 19.2899L11.9 12.9199C10.51 12.9499 9.11998 13.3699 7.92998 14.2099C7.35997 14.6199 6.58998 14.5699 6.09998 14.0799L6.08997 14.0699C5.48997 13.4699 5.52997 12.4599 6.21997 11.9599C7.19998 11.2499 8.27997 10.7499 9.40998 10.4499L7.17998 8.21986C6.02997 8.68986 4.92998 9.32986 3.92998 10.1499C3.37998 10.6099 2.56998 10.5599 2.05998 10.0499C1.46998 9.45986 1.50998 8.47986 2.15998 7.94986C3.05998 7.20986 4.03998 6.59986 5.04998 6.09986L2.70998 3.74986C2.31998 3.35986 2.31998 2.72986 2.70998 2.33986C3.09997 1.94986 3.72997 1.94986 4.11998 2.33986ZM21.95 10.0499C21.44 10.5599 20.62 10.5999 20.06 10.1399C17.69 8.19986 14.78 7.24986 11.89 7.27986L9.29997 4.68986C13.65 3.91986 18.26 5.00986 21.85 7.94986C22.5 8.47986 22.54 9.45986 21.95 10.0499ZM15.27 10.6699C16.16 10.9699 17.01 11.3999 17.79 11.9699C18.32 12.3499 18.46 13.0399 18.22 13.6199L15.27 10.6699ZM13.95 16.2299C12.73 15.5999 11.27 15.5999 10.04 16.2299C9.44998 16.5399 9.33998 17.3499 9.80997 17.8199L11.28 19.2899C11.67 19.6799 12.3 19.6799 12.69 19.2899L14.16 17.8199C14.65 17.3499 14.55 16.5399 13.95 16.2299Z" fill="currentColor"/></svg>';

const RuxIconWifiOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-wifi-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-wifi-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-wifi-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWifiOff$1);
      }
      break;
  } });
}

const RuxIconWifiOff = RuxIconWifiOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWifiOff, defineCustomElement };
