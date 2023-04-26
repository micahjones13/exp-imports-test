import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.86003 6.14002L8.65003 3.35002C8.84003 3.16002 9.16003 3.16002 9.35003 3.35002L12.14 6.14002C12.46 6.45002 12.24 6.99002 11.79 6.99002H10V13C10 13.55 9.55003 14 9.00003 14C8.45003 14 8.00003 13.55 8.00003 13V6.99002H6.21003C5.76003 6.99002 5.54003 6.45002 5.86003 6.14002ZM16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z" fill="currentColor"/></svg>';

const RuxIconSwapVert$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-swap-vert", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-swap-vert"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-swap-vert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSwapVert$1);
      }
      break;
  } });
}

const RuxIconSwapVert = RuxIconSwapVert$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSwapVert, defineCustomElement };
