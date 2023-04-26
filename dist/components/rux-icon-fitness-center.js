import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.57 14.86L21.29 14.14C21.68 13.75 21.68 13.12 21.29 12.73L21.27 12.71C20.88 12.32 20.25 12.32 19.86 12.71L17 15.57L8.42998 6.99998L11.29 4.13998C11.68 3.74998 11.68 3.11998 11.29 2.72998L11.27 2.70998C10.88 2.31998 10.25 2.31998 9.85998 2.70998L9.13998 3.42998L8.41998 2.70998C8.02998 2.31998 7.38998 2.31998 6.99998 2.70998L5.56998 4.13998L4.84998 3.41998C4.45998 3.02998 3.80998 3.02998 3.41998 3.41998C3.02998 3.80998 3.02998 4.45998 3.41998 4.84998L4.13998 5.56998L2.70998 6.99998C2.31998 7.38998 2.31998 8.01998 2.70998 8.40998L3.42998 9.12998L2.70998 9.85998C2.31998 10.25 2.31998 10.88 2.70998 11.27L2.72998 11.29C3.11998 11.68 3.74998 11.68 4.13998 11.29L6.99998 8.42998L15.57 17L12.71 19.86C12.32 20.25 12.32 20.88 12.71 21.27L12.73 21.29C13.12 21.68 13.75 21.68 14.14 21.29L14.86 20.57L15.58 21.29C15.97 21.68 16.6 21.68 16.99 21.29L18.42 19.86L19.14 20.58C19.53 20.97 20.18 20.97 20.57 20.58C20.96 20.19 20.96 19.54 20.57 19.15L19.85 18.43L21.29 17C21.68 16.61 21.68 15.98 21.29 15.59L20.57 14.86Z" fill="currentColor"/></svg>';

const RuxIconFitnessCenter$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-fitness-center", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-fitness-center"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-fitness-center":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFitnessCenter$1);
      }
      break;
  } });
}

const RuxIconFitnessCenter = RuxIconFitnessCenter$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFitnessCenter, defineCustomElement };
