import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3C18.1 3 19 3.9 19 5V16.11L7.94999 5.06L9.40999 3.59C9.78999 3.21 10.3 3 10.83 3H17ZM3.08999 5.85C2.69999 5.46 2.69999 4.83 3.08999 4.44C3.47999 4.05 4.10999 4.05 4.49999 4.44L20.55 20.5C20.94 20.89 20.94 21.52 20.55 21.91C20.16 22.3 19.53 22.3 19.14 21.91L18.23 21H6.99999C5.89999 21 4.99999 20.11 4.99999 19V7.78L3.08999 5.85Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularNoSim$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-cellular-no-sim", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-cellular-no-sim"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-cellular-no-sim":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalCellularNoSim$1);
      }
      break;
  } });
}

const RuxIconSignalCellularNoSim = RuxIconSignalCellularNoSim$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalCellularNoSim, defineCustomElement };
