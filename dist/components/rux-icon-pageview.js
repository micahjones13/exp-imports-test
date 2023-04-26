import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM11.5 9C10.12 9 9 10.12 9 11.5C9 12.88 10.12 14 11.5 14C12.88 14 14 12.88 14 11.5C14 10.12 12.88 9 11.5 9ZM13.88 15.3L16.08 17.5C16.47 17.89 17.11 17.89 17.51 17.49C17.9 17.1 17.9 16.46 17.51 16.07L15.31 13.88C15.87 12.99 16.14 11.92 15.95 10.76C15.64 8.89 14.13 7.35 12.25 7.05C9.22 6.57 6.66 9.08 7.04 12.09C7.28 13.99 8.78 15.57 10.66 15.92C11.85 16.14 12.98 15.88 13.88 15.3Z" fill="currentColor"/></svg>';

const RuxIconPageview$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pageview", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pageview"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pageview":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPageview$1);
      }
      break;
  } });
}

const RuxIconPageview = RuxIconPageview$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPageview, defineCustomElement };
