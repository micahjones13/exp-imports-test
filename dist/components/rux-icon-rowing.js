import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C16.1 5 17 4.1 17 3C17 1.9 16.1 1 15 1C13.9 1 13 1.9 13 3C13 4.1 13.9 5 15 5ZM4.75 18.25C4.34 18.66 4.34 19.34 4.75 19.75C5.16 20.16 5.84 20.16 6.25 19.75L9 17H11L8.5 14.5L4.75 18.25ZM18.29 18.29L20.29 20.3C20.68 20.69 20.68 21.33 20.29 21.71L18.71 23.29C18.31 23.68 17.68 23.68 17.29 23.29L15.3 21.28C15.11 21.1 15.01 20.84 15.01 20.58V19.5L7.9 12.41C7.61 12.45 7.31 12.48 7 12.48C6.4 12.48 5.92 12 5.92 11.4C5.92 10.8 6.4 10.32 7 10.32C8.66 10.35 10.61 9.45 11.67 8.28L13.07 6.73C13.26 6.52 13.5 6.35 13.76 6.23C14.05 6.09 14.38 6 14.72 6H14.74C15.98 6 17 7.02 17 8.26V14.01C17 14.85 16.65 15.62 16.08 16.17L12.5 12.59V10.32C11.87 10.84 11 11.38 10.21 11.71L16.5 18H17.58C17.85 18 18.11 18.11 18.29 18.29Z" fill="currentColor"/></svg>';

const RuxIconRowing$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-rowing", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-rowing"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-rowing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRowing$1);
      }
      break;
  } });
}

const RuxIconRowing = RuxIconRowing$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRowing, defineCustomElement };
