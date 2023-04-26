import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H21C22.1 1 23 1.9 23 3V17C23 18.1 22.1 19 21 19H7C5.9 19 5 18.1 5 17V3C5 1.9 5.9 1 7 1ZM8 17H20C20.55 17 21 16.55 21 16V4C21 3.45 20.55 3 20 3H8C7.45 3 7 3.45 7 4V16C7 16.55 7.45 17 8 17ZM2 5C1.45 5 1 5.45 1 6V21C1 22.1 1.9 23 3 23H18C18.55 23 19 22.55 19 22C19 21.45 18.55 21 18 21H4C3.45 21 3 20.55 3 20V6C3 5.45 2.55 5 2 5ZM17 11V13C17 14.1 16.1 15 15 15H12C11.45 15 11 14.55 11 14C11 13.45 11.45 13 12 13H15V11H12C11.45 11 11 10.55 11 10V6C11 5.45 11.45 5 12 5H16C16.55 5 17 5.45 17 6C17 6.55 16.55 7 16 7H13V9H15C16.1 9 17 9.9 17 11Z" fill="currentColor"/></svg>';

const RuxIconFilter5$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-filter-5", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-filter-5"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-filter-5":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFilter5$1);
      }
      break;
  } });
}

const RuxIconFilter5 = RuxIconFilter5$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFilter5, defineCustomElement };
