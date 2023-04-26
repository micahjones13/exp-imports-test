import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.89 14.86C18.96 14.37 19.37 14 19.87 14C20.47 14 20.96 14.53 20.87 15.12C20.25 19.59 15.93 22.87 11.1 21.79C8.01001 21.1 5.71001 18.71 5.11001 15.6C4.11001 10.48 8.01001 6.00003 12.95 6.00003V3.20003C12.95 2.76003 13.49 2.54003 13.8 2.85003L17.59 6.64003C17.79 6.84003 17.79 7.15003 17.59 7.35003L13.8 11.14C13.49 11.46 12.95 11.24 12.95 10.79V8.00003C9.22001 8.00003 6.27001 11.42 7.08001 15.29C7.56001 17.55 9.22001 19.28 11.47 19.82C15.12 20.7 18.41 18.23 18.89 14.86ZM13.25 16.32C13.32 16.28 13.38 16.22 13.43 16.15C13.48 16.08 13.52 16 13.54 15.91C13.56 15.82 13.57 15.72 13.57 15.6C13.57 15.48 13.56 15.39 13.53 15.29C13.5 15.19 13.45 15.11 13.4 15.05C13.35 14.99 13.27 14.93 13.19 14.9C13.11 14.87 13.01 14.85 12.89 14.85C12.82 14.85 12.74 14.86 12.69 14.87C12.64 14.88 12.59 14.9 12.54 14.92C12.49 14.94 12.46 14.96 12.42 14.99C12.38 15.02 12.35 15.05 12.32 15.08L11.65 14.91L11.9 12.74H14.29V13.45H12.59L12.48 14.37C12.495 14.365 12.51 14.3575 12.5275 14.3488C12.545 14.34 12.565 14.33 12.59 14.32C12.615 14.31 12.64 14.3025 12.665 14.295C12.69 14.2875 12.715 14.28 12.74 14.27C12.7845 14.2522 12.8449 14.2423 12.8999 14.2333C12.9067 14.2322 12.9134 14.2311 12.92 14.23C12.98 14.22 13.05 14.21 13.12 14.21C13.33 14.21 13.51 14.25 13.67 14.31C13.83 14.37 13.97 14.47 14.08 14.59C14.19 14.71 14.27 14.87 14.33 15.04C14.39 15.21 14.42 15.42 14.42 15.64C14.42 15.83 14.39 16.01 14.33 16.18C14.27 16.35 14.18 16.5 14.06 16.63C13.94 16.76 13.79 16.86 13.61 16.94C13.43 17.02 13.21 17.06 12.97 17.06C12.79 17.06 12.61 17.03 12.44 16.98C12.27 16.93 12.11 16.85 11.98 16.74C11.85 16.63 11.74 16.51 11.66 16.35C11.58 16.19 11.54 16.02 11.53 15.82H12.37C12.39 15.99 12.45 16.13 12.56 16.23C12.67 16.33 12.81 16.38 12.98 16.38C13.08 16.38 13.18 16.36 13.25 16.32Z" fill="currentColor"/></svg>';

const RuxIconForward5$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-forward-5", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-forward-5"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-forward-5":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconForward5$1);
      }
      break;
  } });
}

const RuxIconForward5 = RuxIconForward5$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconForward5, defineCustomElement };
