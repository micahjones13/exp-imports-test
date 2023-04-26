import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12ZM15 6.5L18.15 9.65C18.35 9.85 18.35 10.16 18.15 10.36L15 13.5V11H11V9H15V6.5ZM5.85 14.35L9 17.5V15H13V13H9V10.5L5.85 13.64C5.65 13.84 5.65 14.15 5.85 14.35Z" fill="currentColor"/></svg>';

const RuxIconSwapHorizontalCircle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-swap-horizontal-circle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-swap-horizontal-circle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-swap-horizontal-circle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSwapHorizontalCircle$1);
      }
      break;
  } });
}

const RuxIconSwapHorizontalCircle = RuxIconSwapHorizontalCircle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSwapHorizontalCircle, defineCustomElement };
