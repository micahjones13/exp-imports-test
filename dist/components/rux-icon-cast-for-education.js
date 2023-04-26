import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H15C14.45 21 14 20.55 14 20C14 19.45 14.45 19 15 19H20C20.55 19 21 18.55 21 18V6C21 5.45 20.55 5 20 5H4C3.45 5 3 5.45 3 6V7C3 7.55 2.55 8 2 8C1.45 8 1 7.55 1 7V5C1 3.9 1.9 3 3 3ZM14.98 6.26L19.2 8.56C19.54 8.75 19.54 9.25 19.2 9.44L14.98 11.74C14.68 11.9 14.32 11.9 14.02 11.74L9.8 9.44C9.45 9.25 9.45 8.75 9.8 8.56L14.02 6.26C14.32 6.1 14.68 6.1 14.98 6.26ZM14.02 12.74L11 11.09V12.5C11 12.87 11.2 13.2 11.52 13.38L14.02 14.74C14.32 14.9 14.68 14.9 14.98 14.74L17.48 13.38C17.8 13.2 18 12.86 18 12.5V11.09L14.98 12.74C14.68 12.9 14.32 12.9 14.02 12.74ZM1 21V18C2.66 18 4 19.34 4 21H1ZM2.14 14.09C1.54 13.99 1 14.48 1 15.09C1 15.58 1.36 15.99 1.85 16.07C3.93 16.43 5.57 18.07 5.93 20.15C6.01 20.64 6.42 21 6.91 21C7.52 21 8 20.46 7.91 19.86C7.43 16.9 5.09 14.57 2.14 14.09ZM1 11.05C1 10.46 1.51 10 2.1 10.05C7.29 10.57 11.42 14.69 11.95 19.88C12.01 20.47 11.55 20.99 10.95 20.99C10.44 20.99 10.01 20.62 9.96 20.12C9.55 15.85 6.15 12.45 1.88 12.04C1.38 11.99 1 11.56 1 11.05Z" fill="currentColor"/></svg>';

const RuxIconCastForEducation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cast-for-education", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cast-for-education"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cast-for-education":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCastForEducation$1);
      }
      break;
  } });
}

const RuxIconCastForEducation = RuxIconCastForEducation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCastForEducation, defineCustomElement };
