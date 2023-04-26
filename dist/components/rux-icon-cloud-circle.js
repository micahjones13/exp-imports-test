import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM8 16H16.5C17.88 16 19 14.88 19 13.5C19 12.12 17.88 11 16.5 11H16C16 8.79 14.21 7 12 7C10.13 7 8.58 8.27 8.14 10H8C6.34 10 5 11.34 5 13C5 14.66 6.34 16 8 16Z" fill="currentColor"/></svg>';

const RuxIconCloudCircle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cloud-circle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cloud-circle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cloud-circle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCloudCircle$1);
      }
      break;
  } });
}

const RuxIconCloudCircle = RuxIconCloudCircle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCloudCircle, defineCustomElement };
