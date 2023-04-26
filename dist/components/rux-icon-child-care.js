import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.94 11.34C22.98 11.55 23 11.77 23 12C23 12.23 22.98 12.45 22.94 12.66C22.69 14.18 21.58 15.4 20.14 15.83C19.62 16.93 18.87 17.92 17.97 18.72C16.38 20.14 14.29 21 12 21C9.71 21 7.62 20.14 6.04 18.72C5.14 17.92 4.39 16.94 3.87 15.83C2.42 15.4 1.31 14.17 1.06 12.66C1.02 12.45 1 12.23 1 12C1 11.77 1.02 11.55 1.06 11.34C1.31 9.82 2.42 8.6 3.87 8.17C4.39 7.06 5.14 6.07 6.06 5.26C7.64 3.85 9.72 3 12 3C14.28 3 16.36 3.85 17.94 5.26C18.85 6.07 19.6 7.05 20.13 8.17C21.58 8.6 22.69 9.83 22.94 11.34ZM9.5 11.75C8.80964 11.75 8.25 11.1904 8.25 10.5C8.25 9.80964 8.80964 9.25 9.5 9.25C10.1904 9.25 10.75 9.80964 10.75 10.5C10.75 11.1904 10.1904 11.75 9.5 11.75ZM14.5 11.75C13.8096 11.75 13.25 11.1904 13.25 10.5C13.25 9.80964 13.8096 9.25 14.5 9.25C15.1904 9.25 15.75 9.80964 15.75 10.5C15.75 11.1904 15.1904 11.75 14.5 11.75ZM16.33 14.37C16.41 14.2 16.28 14 16.1 14H7.9C7.71 14 7.58 14.2 7.67 14.37C8.5 15.94 10.13 17 12 17C13.87 17 15.5 15.94 16.33 14.37ZM21 12C21 13.1 20.1 14 19 14C18.9348 14 18.8738 13.9915 18.8115 13.9828C18.7783 13.9782 18.7448 13.9735 18.71 13.97C18.51 14.64 18.22 15.26 17.85 15.83C16.6 17.74 14.45 19 12 19C9.55 19 7.4 17.74 6.15 15.83C5.78 15.26 5.49 14.64 5.29 13.97C5.25525 13.9735 5.2217 13.9782 5.18853 13.9828C5.12624 13.9915 5.06525 14 5 14C3.9 14 3 13.1 3 12C3 10.9 3.9 10 5 10C5.06525 10 5.12624 10.0085 5.18853 10.0172C5.2217 10.0218 5.25525 10.0265 5.29 10.03C5.49 9.36 5.78 8.74 6.15 8.17C7.4 6.26 9.55 5 12 5C14.45 5 16.6 6.26 17.85 8.17C18.22 8.74 18.51 9.36 18.71 10.03C18.7448 10.0265 18.7783 10.0218 18.8115 10.0172C18.8738 10.0085 18.9348 10 19 10C20.1 10 21 10.9 21 12Z" fill="currentColor"/></svg>';

const RuxIconChildCare$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-child-care", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-child-care"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-child-care":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconChildCare$1);
      }
      break;
  } });
}

const RuxIconChildCare = RuxIconChildCare$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconChildCare, defineCustomElement };
