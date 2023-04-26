import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM14 18C14 17.4477 13.5523 17 13 17H11C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18ZM14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H10C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14H14ZM16 12L19 14V10L16 12ZM5 10L8 12L5 14V10ZM14 12C14 11.4477 13.5523 11 13 11H11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H13C13.5523 13 14 12.5523 14 12ZM14 8C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10H10C9.44772 10 9 9.55228 9 9C9 8.44772 9.44772 8 10 8H14ZM14 6C14 5.44772 13.5523 5 13 5H11C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7H13C13.5523 7 14 6.55228 14 6Z" fill="currentColor"/></svg>';

const RuxIconAltitude$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-altitude", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-altitude"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-altitude":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAltitude$1);
      }
      break;
  } });
}

const RuxIconAltitude = RuxIconAltitude$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAltitude, defineCustomElement };
