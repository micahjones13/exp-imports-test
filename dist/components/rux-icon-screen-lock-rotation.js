import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.05 9C21.05 9.55 20.6 10 20.05 10H15.05C14.5 10 14.05 9.55 14.05 9V5C14.05 4.45 14.5 4 15.05 4V3.5C15.05 2.12 16.17 1 17.55 1C18.93 1 20.05 2.12 20.05 3.5V4C20.6 4 21.05 4.45 21.05 5V9ZM20.44 11.9L22.3 13.77C22.89 14.35 22.89 15.3 22.3 15.89L15.94 22.25C15.36 22.84 14.41 22.84 13.82 22.25L1.80001 10.23C1.21001 9.65 1.21001 8.7 1.80001 8.11L8.16001 1.75C8.74001 1.16 9.69001 1.16 10.28 1.75L12.03 3.5C12.42 3.89 12.42 4.52 12.03 4.91C11.64 5.3 11.01 5.3 10.62 4.91L9.22001 3.51L3.56001 9.17L14.88 20.49L20.54 14.83L19.03 13.31C18.64 12.92 18.64 12.29 19.03 11.9C19.42 11.51 20.05 11.51 20.44 11.9ZM15.85 3.5C15.85 2.56 16.61 1.8 17.55 1.8C18.49 1.8 19.25 2.56 19.25 3.5V4H15.85V3.5ZM7.52001 21.48L8.85001 20.15L12.33 23.64C12.45 23.77 12.37 23.99 12.19 23.99C9.94001 24.04 7.96001 23.44 6.39001 22.61C3.11001 20.87 0.750013 17.67 0.150013 13.86C0.0800133 13.45 0.360013 13.06 0.770013 13C1.19001 12.93 1.57001 13.21 1.63001 13.62C2.18001 17.11 4.43001 20.02 7.52001 21.48Z" fill="currentColor"/></svg>';

const RuxIconScreenLockRotation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-screen-lock-rotation", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-screen-lock-rotation"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-screen-lock-rotation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScreenLockRotation$1);
      }
      break;
  } });
}

const RuxIconScreenLockRotation = RuxIconScreenLockRotation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScreenLockRotation, defineCustomElement };
