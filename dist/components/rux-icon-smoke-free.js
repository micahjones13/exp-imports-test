import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.61 8.65021H16.03C17.08 8.65021 18 9.39021 18 10.7002V11.2502C18 11.6602 18.33 12.0002 18.75 12.0002H18.76C19.17 12.0002 19.51 11.6702 19.51 11.2502V10.3602C19.51 8.55021 17.91 7.20021 16.04 7.20021H14.74C13.72 7.20021 12.8 6.47021 12.67 5.45021C12.55 4.50021 13.13 3.75021 13.97 3.52021C14.29 3.43021 14.51 3.14021 14.51 2.80021C14.51 2.31021 14.05 1.94021 13.58 2.08021C12.16 2.49021 11.13 3.81021 11.16 5.36021C11.18 7.21021 12.77 8.65021 14.61 8.65021ZM19.69 3.38021C19.52 3.89021 19.23 4.35021 18.85 4.73021C20.72 5.62021 22 7.54021 22 9.76021V11.2502C22 11.6602 21.66 12.0002 21.25 12.0002C20.84 12.0002 20.5 11.6602 20.5 11.2502V9.77021C20.5 7.75021 19.07 6.06021 17.14 5.75021C16.77 5.69021 16.5 5.37021 16.5 5.00021V4.85021C16.5 4.50021 16.75 4.22021 17.09 4.11021C17.64 3.93021 18.08 3.49021 18.26 2.94021C18.37 2.61021 18.64 2.37021 18.98 2.36021C19.5 2.37021 19.85 2.88021 19.69 3.38021ZM17 14.5002C17 13.6702 16.33 13.0002 15.5 13.0002H14.66L16.84 15.1802C16.94 14.9702 17 14.7402 17 14.5002ZM2.71 5.29021C3.1 4.90021 3.73 4.90021 4.12 5.29021L19.7 20.8802C20.09 21.2702 20.09 21.9002 19.7 22.2902C19.31 22.6802 18.68 22.6802 18.29 22.2902L12 16.0002H3.5C2.67 16.0002 2 15.3302 2 14.5002C2 13.6702 2.67 13.0002 3.5 13.0002H9L2.71 6.70021C2.32 6.31021 2.32 5.68021 2.71 5.29021ZM19.5 13.0002H18V16.0002H19.5V13.0002ZM22 13.0002H20.5V16.0002H22V13.0002Z" fill="currentColor"/></svg>';

const RuxIconSmokeFree$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-smoke-free", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-smoke-free"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-smoke-free":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSmokeFree$1);
      }
      break;
  } });
}

const RuxIconSmokeFree = RuxIconSmokeFree$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSmokeFree, defineCustomElement };
