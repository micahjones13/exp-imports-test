import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 9.5C18.47 9.5 17.6 10.12 17.21 11H14.29C13.9 10.12 13.03 9.5 12 9.5C10.97 9.5 10.1 10.12 9.71 11H6.79C6.4 10.12 5.53 9.5 4.5 9.5C3.12 9.5 2 10.62 2 12C2 13.38 3.12 14.5 4.5 14.5C5.53 14.5 6.4 13.88 6.79 13H9.71C10.1 13.88 10.97 14.5 12 14.5C13.03 14.5 13.9 13.88 14.29 13H17.21C17.6 13.88 18.47 14.5 19.5 14.5C20.88 14.5 22 13.38 22 12C22 10.62 20.88 9.5 19.5 9.5Z" fill="currentColor"/></svg>';

const RuxIconLinearScale$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-linear-scale", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-linear-scale"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-linear-scale":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLinearScale$1);
      }
      break;
  } });
}

const RuxIconLinearScale = RuxIconLinearScale$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLinearScale, defineCustomElement };
