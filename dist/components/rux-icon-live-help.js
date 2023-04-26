import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.9 20 5 20H9L11.29 22.29C11.68 22.68 12.31 22.68 12.7 22.29L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM13 16V18H11V16H13ZM14.17 11.17L15.07 10.25C15.64 9.68 16 8.88 16 8C16 5.79 14.21 4 12 4C10.18 4 8.65 5.21 8.16 6.87C8 7.43 8.4 7.99 8.98 7.99H9.28C9.67 7.99 9.98 7.72 10.11 7.35C10.38 6.57 11.13 6 12 6C13.1 6 14 6.9 14 8C14 8.55 13.78 9.05 13.42 9.41L12.18 10.67C11.57 11.29 11.15 12.1 11.04 13.01C10.97 13.53 11.37 13.99 11.89 13.99H12.2C12.64 13.99 12.99 13.66 13.05 13.23C13.18 12.27 13.59 11.76 14.17 11.17Z" fill="currentColor"/></svg>';

const RuxIconLiveHelp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-live-help", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-live-help"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-live-help":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLiveHelp$1);
      }
      break;
  } });
}

const RuxIconLiveHelp = RuxIconLiveHelp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLiveHelp, defineCustomElement };
