import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.2698L16.15 19.7798C16.91 20.2398 17.84 19.5598 17.64 18.6998L16.54 13.9798L20.21 10.7998C20.88 10.2198 20.52 9.11977 19.64 9.04977L14.81 8.63977L12.92 4.17977C12.58 3.36977 11.42 3.36977 11.08 4.17977L9.19001 8.62977L4.36001 9.03977C3.48001 9.10977 3.12001 10.2098 3.79001 10.7898L7.46001 13.9698L6.36001 18.6898C6.16001 19.5498 7.09001 20.2298 7.85001 19.7698L12 17.2698Z" fill="currentColor"/></svg>';

const RuxIconStar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-star", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-star"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-star":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStar$1);
      }
      break;
  } });
}

const RuxIconStar = RuxIconStar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStar, defineCustomElement };
