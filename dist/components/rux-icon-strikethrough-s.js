import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.44 6.67C14.54 6.93 14.59 7.21 14.59 7.52H17.6C17.6 6.86 17.47 6.26 17.22 5.71C16.97 5.16 16.61 4.68 16.14 4.28C15.68 3.88 15.11 3.56 14.45 3.34C13.78 3.11 13.05 3 12.24 3C11.45 3 10.72 3.1 10.06 3.29C9.41 3.49 8.84 3.77 8.36 4.12C7.88 4.48 7.51 4.91 7.25 5.41C6.98 5.92 6.85 6.47 6.85 7.08C6.85 7.72 6.98 8.27 7.24 8.75C7.27155 8.81311 7.31556 8.88244 7.35728 8.94818C7.36844 8.96577 7.37944 8.98311 7.39 9H12C11.36 8.78 10.97 8.55 10.59 8.3C10.1 7.97 9.85 7.57 9.85 7.09C9.85 6.86 9.9 6.64 10 6.43C10.1 6.22 10.25 6.04 10.44 5.88C10.63 5.73 10.87 5.61 11.16 5.52C11.45 5.43 11.8 5.39 12.19 5.39C12.59 5.39 12.95 5.45 13.25 5.55C13.55 5.66 13.8 5.8 14 5.99C14.2 6.18 14.35 6.4 14.44 6.67ZM3 11C3 10.45 3.45 10 4 10H20C20.55 10 21 10.45 21 11V11.02C21 11.57 20.55 12.02 20 12.02H17.13C17.19 12.12 17.25 12.24 17.3 12.35C17.51 12.82 17.61 13.36 17.61 13.96C17.61 14.6 17.48 15.17 17.23 15.67C16.98 16.17 16.62 16.6 16.16 16.94C15.7 17.28 15.14 17.54 14.49 17.73C13.84 17.92 13.11 18.01 12.31 18.01C11.83 18.01 11.35 17.96 10.87 17.88C10.39 17.79 9.93 17.66 9.49 17.49C9.05 17.32 8.64 17.1 8.27 16.84C7.89 16.58 7.57 16.27 7.29 15.92C7.01 15.56 6.8 15.16 6.64 14.71C6.48 14.26 6.4 13.68 6.4 13.13H9.37C9.37 13.58 9.48 14.03 9.62 14.34C9.76 14.65 9.96 14.9 10.21 15.09C10.46 15.28 10.77 15.42 11.12 15.51C11.47 15.6 11.87 15.64 12.3 15.64C12.68 15.64 13.02 15.59 13.31 15.51C13.6 15.42 13.83 15.31 14.02 15.16C14.21 15.01 14.35 14.83 14.44 14.63C14.53 14.42 14.58 14.2 14.58 13.97C14.58 13.71 14.54 13.48 14.47 13.28C14.39 13.07 14.25 12.88 14.04 12.71C13.83 12.54 13.54 12.37 13.17 12.2C13.0936 12.1695 12.9991 12.1363 12.901 12.1019C12.8064 12.0687 12.7084 12.0344 12.62 12H4C3.45 12 3 11.55 3 11Z" fill="currentColor"/></svg>';

const RuxIconStrikethroughS$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-strikethrough-s", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-strikethrough-s"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-strikethrough-s":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStrikethroughS$1);
      }
      break;
  } });
}

const RuxIconStrikethroughS = RuxIconStrikethroughS$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStrikethroughS, defineCustomElement };
