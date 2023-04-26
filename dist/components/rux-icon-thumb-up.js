import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.58 7.60003L13.12 2.06003C13.7 1.47003 14.64 1.47003 15.23 2.05003C15.59 2.41003 15.74 2.92003 15.64 3.42003L14.69 8.00003H20.34C22.49 8.00003 23.94 10.2 23.1 12.18L19.84 19.79C19.52 20.52 18.8 21 18 21H9C7.9 21 7 20.1 7 19V9.01003C7 8.48003 7.21 7.97003 7.58 7.60003ZM5 19C5 20.1 4.1 21 3 21C1.9 21 1 20.1 1 19V11C1 9.90003 1.9 9.00003 3 9.00003C4.1 9.00003 5 9.90003 5 11V19Z" fill="currentColor"/></svg>';

const RuxIconThumbUp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-thumb-up", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-thumb-up"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-thumb-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconThumbUp$1);
      }
      break;
  } });
}

const RuxIconThumbUp = RuxIconThumbUp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconThumbUp, defineCustomElement };
