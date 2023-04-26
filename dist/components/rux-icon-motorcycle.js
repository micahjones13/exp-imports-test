import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.44 9.03L17.31 6.9L15.71 5.3C15.52 5.11 15.26 5 15 5H12C11.45 5 11 5.45 11 6C11 6.55 11.45 7 12 7H14.59L16.59 9H5C2.2 9 0 11.2 0 14C0 16.8 2.2 19 5 19C7.46 19 9.45 17.31 9.9 15H10.72C11.25 15 11.76 14.79 12.13 14.41L14.31 12.23C14.11 12.77 14 13.37 14 14C14 16.8 16.2 19 19 19C21.8 19 24 16.8 24 14C24 11.35 22.03 9.23 19.44 9.03ZM5 15H7.82C7.4 16.15 6.28 17 5 17C3.37 17 2 15.63 2 14C2 12.37 3.37 11 5 11C6.28 11 7.4 11.85 7.82 13H5C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15ZM16 14C16 15.66 17.34 17 19 17C20.66 17 22 15.66 22 14C22 12.34 20.66 11 19 11C17.34 11 16 12.34 16 14Z" fill="currentColor"/></svg>';

const RuxIconMotorcycle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-motorcycle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-motorcycle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-motorcycle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMotorcycle$1);
      }
      break;
  } });
}

const RuxIconMotorcycle = RuxIconMotorcycle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMotorcycle, defineCustomElement };
