import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.53115 17.8387L6.58945 18.8268L8.92522 18.602L9.83101 20.4262C9.89964 20.5644 9.93535 20.7167 9.93535 20.871C9.93535 21.3838 9.54931 21.8065 9.05197 21.8642L8.93535 21.871H4.20497C3.9626 21.871 3.72849 21.7829 3.54616 21.6233C3.16263 21.2874 3.09746 20.7232 3.37588 20.3117L3.45266 20.2122L5.53115 17.8387ZM7.09757 10.0443C7.33377 10.0636 7.55543 10.1662 7.72301 10.3338L10.042 12.653L12 12L11.347 13.958L13.2146 15.8254C13.6051 16.2159 13.6051 16.8491 13.2146 17.2396C13.047 17.4072 12.8253 17.5098 12.5891 17.5291L7.30432 17.9622C7.01163 17.9862 6.7232 17.8803 6.51554 17.6726L5.87575 17.0328C5.66809 16.8252 5.56221 16.5367 5.58619 16.2441L6.01924 10.9592C6.06434 10.4088 6.54713 9.99915 7.09757 10.0443Z" fill="currentColor"/></svg>';

const RuxIconAntennaOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-antenna-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-antenna-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-antenna-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAntennaOff$1);
      }
      break;
  } });
}

const RuxIconAntennaOff = RuxIconAntennaOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAntennaOff, defineCustomElement };
