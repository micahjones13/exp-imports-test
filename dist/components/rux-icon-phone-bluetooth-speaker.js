import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.34 8.45978L16.79 6.00978L14.34 3.54978C14.14 3.35978 14.14 3.03978 14.34 2.83978C14.53 2.63978 14.85 2.63978 15.05 2.83978L17 4.78978V1.63978C17 1.43978 17.12 1.25978 17.31 1.17978C17.5 1.09978 17.72 1.14978 17.86 1.28978L20.04 3.46978C20.14 3.56978 20.19 3.68978 20.19 3.82978C20.19 3.96978 20.13 4.09978 20.04 4.18978L18.21 6.01978L20.04 7.84978C20.24 8.03978 20.24 8.35978 20.04 8.55978L17.86 10.7398C17.76 10.8398 17.63 10.8898 17.5 10.8898C17.44 10.8898 17.37 10.8798 17.31 10.8498C17.12 10.7698 17 10.5798 17 10.3798V7.22978L15.05 9.16978C14.86 9.36978 14.54 9.36978 14.34 9.16978C14.14 8.97978 14.14 8.65978 14.34 8.45978ZM16.69 14.9698L19.23 15.2598C20.24 15.3798 21 16.2298 20.99 17.2398V18.9698C20.99 20.0998 20.05 21.0398 18.92 20.9698C10.39 20.4398 3.55998 13.6198 3.02998 5.07978C2.95998 3.94978 3.89998 3.00978 5.02998 3.00978H6.75998C7.77998 3.00978 8.62998 3.76978 8.74998 4.77978L9.03998 7.29978C9.10998 7.90978 8.89998 8.50978 8.46998 8.93978L6.61998 10.7898C8.05998 13.6298 10.38 15.9398 13.21 17.3798L15.05 15.5398C15.48 15.1098 16.08 14.8998 16.69 14.9698ZM18.01 2.85978L18.97 3.81978L18.01 4.77978V2.85978ZM18.97 8.18978L18.01 7.22978V9.14978L18.97 8.18978Z" fill="currentColor"/></svg>';

const RuxIconPhoneBluetoothSpeaker$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-bluetooth-speaker", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-bluetooth-speaker"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-bluetooth-speaker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneBluetoothSpeaker$1);
      }
      break;
  } });
}

const RuxIconPhoneBluetoothSpeaker = RuxIconPhoneBluetoothSpeaker$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneBluetoothSpeaker, defineCustomElement };
