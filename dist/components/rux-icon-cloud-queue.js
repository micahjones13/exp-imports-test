import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4ZM6 18H19C20.66 18 22 16.66 22 15C22 13.34 20.66 12 19 12H17.5V11.5C17.5 8.46 15.04 6 12 6C9.48 6 7.37 7.69 6.71 10H6C3.79 10 2 11.79 2 14C2 16.21 3.79 18 6 18Z" fill="currentColor"/></svg>';

const RuxIconCloudQueue$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cloud-queue", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cloud-queue"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cloud-queue":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCloudQueue$1);
      }
      break;
  } });
}

const RuxIconCloudQueue = RuxIconCloudQueue$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCloudQueue, defineCustomElement };
