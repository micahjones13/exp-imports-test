import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 4.70021C14.86 4.31021 15.49 4.31021 15.88 4.70021C16.27 5.09021 16.27 5.73021 15.87 6.12021L12.7 9.29022C12.31 9.68021 11.68 9.68021 11.29 9.29022L8.12001 6.12021C7.73001 5.73021 7.73001 5.09021 8.12001 4.70021C8.51001 4.31021 9.14001 4.31021 9.53001 4.70021L12 7.17021L14.47 4.70021ZM9.53001 19.3002C9.14001 19.6902 8.51001 19.6902 8.12001 19.3002C7.73001 18.9102 7.73001 18.2702 8.13001 17.8902L11.3 14.7202C11.69 14.3302 12.32 14.3302 12.71 14.7202L15.88 17.8902C16.27 18.2802 16.27 18.9102 15.88 19.3002C15.49 19.6902 14.86 19.6902 14.47 19.3002L12 16.8302L9.53001 19.3002Z" fill="currentColor"/></svg>';

const RuxIconUnfoldLess$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-unfold-less", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-unfold-less"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-unfold-less":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconUnfoldLess$1);
      }
      break;
  } });
}

const RuxIconUnfoldLess = RuxIconUnfoldLess$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconUnfoldLess, defineCustomElement };
