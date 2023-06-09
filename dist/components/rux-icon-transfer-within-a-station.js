import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 5.5C10.6 5.5 11.5 4.6 11.5 3.5C11.5 2.4 10.6 1.5 9.5 1.5C8.4 1.5 7.5 2.4 7.5 3.5C7.5 4.6 8.4 5.5 9.5 5.5ZM16.48 15.5H22V17H16.48V17.76C16.48 18.13 16.05 18.31 15.79 18.05L14.28 16.53C14.12 16.37 14.12 16.12 14.28 15.96L15.79 14.44C16.04 14.19 16.48 14.37 16.48 14.73V15.5ZM20.21 18.69L21.72 20.21C21.88 20.37 21.88 20.63 21.72 20.79L20.21 22.31C19.96 22.56 19.52 22.38 19.52 22.02V21.25H14V19.75H19.52V18.98C19.52 18.61 19.95 18.43 20.21 18.69ZM3.23 21.81L5.75 8.9L4 9.65V12C4 12.55 3.55 13 3 13C2.45 13 2 12.55 2 12V9.64C2 8.83 2.49 8.1 3.24 7.79L7.25 6.15C7.5 6.05 7.75 6 8 6C8.7 6 9.35 6.35 9.7 6.95L10.65 8.55C11.41 9.78 12.67 10.68 14.16 10.93C14.64 11.01 15 11.42 15 11.91C15 12.52 14.46 13.01 13.86 12.91C12.13 12.63 10.62 11.72 9.55 10.4L8.95 13.4L10.41 14.87C10.79 15.24 11 15.75 11 16.28V22C11 22.55 10.55 23 10 23C9.45 23 9 22.55 9 22V17L6.85 15L5.28 22.21C5.18 22.67 4.77 23 4.3 23H4.21C3.58 23 3.11 22.43 3.23 21.81Z" fill="currentColor"/></svg>';

const RuxIconTransferWithinAStation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-transfer-within-a-station", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-transfer-within-a-station"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-transfer-within-a-station":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTransferWithinAStation$1);
      }
      break;
  } });
}

const RuxIconTransferWithinAStation = RuxIconTransferWithinAStation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTransferWithinAStation, defineCustomElement };
