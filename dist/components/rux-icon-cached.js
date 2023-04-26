import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.69003 6 6.00003 8.69 6.00003 12H7.79003C8.24003 12 8.46003 12.54 8.15003 12.85L5.36003 15.64C5.16003 15.84 4.85003 15.84 4.65003 15.64L1.86003 12.85C1.54003 12.54 1.76003 12 2.21003 12H4.00003C4.00003 7.58 7.58003 4 12 4C13.04 4 14.04 4.2 14.95 4.57C15.62 4.84 15.8 5.7 15.29 6.21C15.02 6.48 14.61 6.59 14.25 6.44C13.56 6.15 12.79 6 12 6ZM15.86 11.14L18.65 8.35C18.84 8.16 19.16 8.16 19.35 8.36L22.14 11.15C22.46 11.46 22.24 12 21.79 12H20C20 16.42 16.42 20 12 20C10.96 20 9.96003 19.8 9.05003 19.43C8.38003 19.16 8.20003 18.3 8.71003 17.79C8.98003 17.52 9.39003 17.41 9.75003 17.56C10.44 17.85 11.21 18 12 18C15.31 18 18 15.31 18 12H16.21C15.76 12 15.54 11.46 15.86 11.14Z" fill="currentColor"/></svg>';

const RuxIconCached$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cached", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cached"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cached":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCached$1);
      }
      break;
  } });
}

const RuxIconCached = RuxIconCached$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCached, defineCustomElement };
