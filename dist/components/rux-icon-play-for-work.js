import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.59V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V10.59H15.3C15.74 10.59 15.96 11.13 15.65 11.44L12.36 14.73C12.16 14.93 11.85 14.93 11.65 14.73L8.36001 11.44C8.04001 11.13 8.26001 10.59 8.71001 10.59H11ZM6.11001 15.15C5.99001 14.55 6.49001 14 7.10001 14C7.59001 14 7.99001 14.35 8.09001 14.83C8.47001 16.64 10.07 18 12 18C13.93 18 15.53 16.64 15.92 14.83C16.02 14.35 16.41 14 16.9 14C17.51 14 18.01 14.55 17.89 15.15C17.35 17.91 14.92 20 12 20C9.08001 20 6.65001 17.91 6.11001 15.15Z" fill="currentColor"/></svg>';

const RuxIconPlayForWork$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-play-for-work", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-play-for-work"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-play-for-work":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPlayForWork$1);
      }
      break;
  } });
}

const RuxIconPlayForWork = RuxIconPlayForWork$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPlayForWork, defineCustomElement };
