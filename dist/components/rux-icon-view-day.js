import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5V4C2 3.45 2.45 3 3 3H20C20.55 3 21 3.45 21 4V5C21 5.55 20.55 6 20 6H3C2.45 6 2 5.55 2 5ZM20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8ZM3 21H20C20.55 21 21 20.55 21 20V19C21 18.45 20.55 18 20 18H3C2.45 18 2 18.45 2 19V20C2 20.55 2.45 21 3 21Z" fill="currentColor"/></svg>';

const RuxIconViewDay$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-day", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-day"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-day":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewDay$1);
      }
      break;
  } });
}

const RuxIconViewDay = RuxIconViewDay$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewDay, defineCustomElement };
