import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4ZM9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L15.89 11.11C16.28 10.72 16.28 10.09 15.89 9.7C15.5 9.31 14.87 9.31 14.48 9.7L10 14.18L8.61 12.79C8.22 12.4 7.59 12.4 7.2 12.79C6.81 13.18 6.81 13.81 7.2 14.2L9.3 16.29Z" fill="currentColor"/></svg>';

const RuxIconCloudDone$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-cloud-done", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-cloud-done"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-cloud-done":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCloudDone$1);
      }
      break;
  } });
}

const RuxIconCloudDone = RuxIconCloudDone$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCloudDone, defineCustomElement };
