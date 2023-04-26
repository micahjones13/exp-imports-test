import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.05999 10.0601C2.56999 10.5701 3.38999 10.6101 3.94999 10.1501C6.70999 7.89007 10.19 6.97007 13.53 7.39007L14.72 4.71007C10.37 3.93007 5.75999 5.01007 2.14999 7.96007C1.50999 8.49007 1.46999 9.47007 2.05999 10.0601ZM15.9 5.00007C15.73 5.00007 15.58 5.09007 15.49 5.23007L15.42 5.38007L10.24 17.0301C10.08 17.3201 9.97999 17.6401 9.97999 17.9901C9.97999 19.1001 10.88 20.0001 11.99 20.0001C12.95 20.0001 13.76 19.3201 13.95 18.4101L13.96 18.3801L16.4 5.50007C16.4 5.22007 16.18 5.00007 15.9 5.00007ZM21.84 7.96007C22.49 8.49007 22.53 9.47007 21.94 10.0601C21.43 10.5701 20.62 10.6001 20.04 10.1401C19.06 9.34007 18 8.72007 16.87 8.25007L17.4 5.43007C18.98 6.01007 20.48 6.85007 21.84 7.96007ZM17.91 14.0901C18.51 13.4901 18.47 12.4601 17.77 11.9701C17.31 11.6401 16.83 11.3601 16.33 11.1101L15.78 14.0301C15.89 14.1001 16 14.1701 16.1 14.2501C16.67 14.6501 17.43 14.5701 17.91 14.0901ZM7.92999 14.2101C7.34999 14.6201 6.57999 14.5801 6.07999 14.0801C5.47999 13.4801 5.52999 12.4601 6.21999 11.9501C8.02999 10.6501 10.18 10.0501 12.31 10.1101L11.03 12.9901C9.93999 13.1501 8.86999 13.5501 7.92999 14.2101Z" fill="currentColor"/></svg>';

const RuxIconNetworkCheck$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-network-check", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-network-check"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-network-check":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNetworkCheck$1);
      }
      break;
  } });
}

const RuxIconNetworkCheck = RuxIconNetworkCheck$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNetworkCheck, defineCustomElement };
