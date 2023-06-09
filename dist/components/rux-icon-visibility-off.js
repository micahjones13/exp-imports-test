import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71 4.56999C2.32 4.17999 2.32 3.54999 2.71 3.15999C3.1 2.76999 3.74 2.76999 4.13 3.15999L20.44 19.49C20.83 19.88 20.83 20.51 20.44 20.9C20.05 21.29 19.42 21.29 19.03 20.9L16.31 18.18C14.97 18.7 13.52 19 12 19C7 19 2.73 15.89 1 11.5C1.77 9.52999 3.06 7.82999 4.68 6.53999L2.71 4.56999ZM17 11.5C17 8.73999 14.76 6.49999 12 6.49999C11.49 6.49999 11 6.59999 10.53 6.73999L8.36 4.56999C9.51 4.19999 10.73 3.99999 12 3.99999C17 3.99999 21.27 7.10999 23 11.49C22.31 13.25 21.21 14.79 19.82 16.02L16.76 12.96C16.9 12.5 17 12.01 17 11.5ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" fill="currentColor"/></svg>';

const RuxIconVisibilityOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-visibility-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-visibility-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-visibility-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVisibilityOff$1);
      }
      break;
  } });
}

const RuxIconVisibilityOff = RuxIconVisibilityOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVisibilityOff, defineCustomElement };
