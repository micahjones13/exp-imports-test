import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.18 6.4C18.72 4.28 15.51 3 12 3C8.49 3 5.28 4.29 2.8 6.41C2.36 6.79 2.32 7.47 2.74 7.89L6.34 11.49C6.7 11.85 7.26 11.88 7.66 11.57C8.86 10.63 10.37 10.07 12 10.07C13.64 10.07 15.14 10.63 16.34 11.56C16.74 11.87 17.3 11.84 17.65 11.48L21.25 7.88C21.67 7.46 21.63 6.78 21.18 6.4ZM8 17C8 19.2091 9.79086 21 12 21C14.2091 21 16 19.2091 16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17Z" fill="currentColor"/></svg>';

const RuxIconCompassCalibration$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-compass-calibration", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-compass-calibration"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-compass-calibration":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCompassCalibration$1);
      }
      break;
  } });
}

const RuxIconCompassCalibration = RuxIconCompassCalibration$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCompassCalibration, defineCustomElement };
