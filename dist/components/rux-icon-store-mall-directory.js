import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5C20 5.55 19.55 6 19 6ZM20.16 7.8C20.07 7.34 19.66 7 19.18 7H4.82C4.34 7 3.93 7.34 3.84 7.8L3 12V13C3 13.55 3.45 14 4 14V19C4 19.55 4.45 20 5 20H13C13.55 20 14 19.55 14 19V14H18V19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19V14C20.55 14 21 13.55 21 13V12L20.16 7.8ZM12 18H6V14H12V18Z" fill="currentColor"/></svg>';

const RuxIconStoreMallDirectory$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-store-mall-directory", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-store-mall-directory"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-store-mall-directory":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconStoreMallDirectory$1);
      }
      break;
  } });
}

const RuxIconStoreMallDirectory = RuxIconStoreMallDirectory$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconStoreMallDirectory, defineCustomElement };
