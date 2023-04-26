import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.07 5.32C16.26 6 18 7.74 18.68 9.93C18.87 10.56 19.44 11 20.09 11H20.13C21.13 11 21.85 10.04 21.56 9.09C20.59 5.91 18.08 3.4 14.9 2.43C13.96 2.14 13 2.86 13 3.86V3.9C13 4.56 13.44 5.13 14.07 5.32ZM18.68 14.07C18 16.27 16.26 18 14.07 18.68C13.44 18.87 13 19.44 13 20.09V20.13C13 21.13 13.96 21.85 14.91 21.56C18.09 20.59 20.6 18.08 21.57 14.9C21.86 13.95 21.14 12.99 20.15 12.99H20.1C19.44 13 18.87 13.44 18.68 14.07ZM9.91 18.67C10.55 18.87 11 19.44 11 20.11C11 21.12 10.03 21.86 9.07 21.56C4.98 20.31 2 16.5 2 12C2 7.5 4.98 3.69 9.07 2.44C10.03 2.14 11 2.88 11 3.88V3.89C11 4.56 10.55 5.13 9.91 5.33C7.07 6.22 5 8.87 5 12C5 15.13 7.07 17.78 9.91 18.67Z" fill="currentColor"/></svg>';

const RuxIconDonutLarge$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-donut-large", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-donut-large"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-donut-large":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDonutLarge$1);
      }
      break;
  } });
}

const RuxIconDonutLarge = RuxIconDonutLarge$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDonutLarge, defineCustomElement };
