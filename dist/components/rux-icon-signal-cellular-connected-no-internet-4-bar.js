import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 22H4.40999C3.51999 22 3.07999 20.92 3.70999 20.29L20.29 3.70002C20.92 3.07002 22 3.52002 22 4.41002V8.00002H21C19.34 8.00002 18 9.34002 18 11V22ZM21 18C21.55 18 22 17.55 22 17V11C22 10.45 21.55 10 21 10C20.45 10 20 10.45 20 11V17C20 17.55 20.45 18 21 18ZM22 22V20H20V22H22Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularConnectedNoInternet4Bar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-cellular-connected-no-internet-4-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-cellular-connected-no-internet-4-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-cellular-connected-no-internet-4-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalCellularConnectedNoInternet4Bar$1);
      }
      break;
  } });
}

const RuxIconSignalCellularConnectedNoInternet4Bar = RuxIconSignalCellularConnectedNoInternet4Bar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalCellularConnectedNoInternet4Bar, defineCustomElement };
