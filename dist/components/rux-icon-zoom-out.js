import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09002 2.53002 2.53002 6.09002 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.26 19.75C18.67 20.16 19.33 20.16 19.74 19.75L19.75 19.74C20.16 19.33 20.16 18.67 19.75 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14ZM12 9.50002C12 9.22002 11.78 9.00002 11.5 9.00002H7.50002C7.22002 9.00002 7.00002 9.22002 7.00002 9.50002C7.00002 9.78002 7.22002 10 7.50002 10H11.5C11.78 10 12 9.78002 12 9.50002Z" fill="currentColor"/></svg>';

const RuxIconZoomOut$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-zoom-out", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-zoom-out"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-zoom-out":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconZoomOut$1);
      }
      break;
  } });
}

const RuxIconZoomOut = RuxIconZoomOut$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconZoomOut, defineCustomElement };
