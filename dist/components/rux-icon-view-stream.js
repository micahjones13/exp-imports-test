import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 10V6C4 5.45 4.45 5 5 5H20C20.55 5 21 5.45 21 6V10C21 10.55 20.55 11 20 11H5C4.45 11 4 10.55 4 10ZM20 18H5C4.45 18 4 17.55 4 17V13C4 12.45 4.45 12 5 12H20C20.55 12 21 12.45 21 13V17C21 17.55 20.55 18 20 18Z" fill="currentColor"/></svg>';

const RuxIconViewStream$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-stream", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-stream"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-stream":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewStream$1);
      }
      break;
  } });
}

const RuxIconViewStream = RuxIconViewStream$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewStream, defineCustomElement };
