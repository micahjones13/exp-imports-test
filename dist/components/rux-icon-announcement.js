import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12 11C11.45 11 11 10.55 11 10V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V10C13 10.55 12.55 11 12 11ZM11 13V15H13V13H11Z" fill="currentColor"/></svg>';

const RuxIconAnnouncement$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-announcement", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-announcement"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-announcement":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAnnouncement$1);
      }
      break;
  } });
}

const RuxIconAnnouncement = RuxIconAnnouncement$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAnnouncement, defineCustomElement };
