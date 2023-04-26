import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.67 4H14V3C14 2.45 13.55 2 13 2H11C10.45 2 10 2.45 10 3V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.34 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4Z" fill="currentColor"/></svg>';

const RuxIconBatteryFull$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-battery-full", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-battery-full"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-battery-full":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBatteryFull$1);
      }
      break;
  } });
}

const RuxIconBatteryFull = RuxIconBatteryFull$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBatteryFull, defineCustomElement };
