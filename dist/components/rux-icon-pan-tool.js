import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 4C20.67 4 20 4.67 20 5.5V10.5C20 10.78 19.78 11 19.5 11C19.22 11 19 10.78 19 10.5V2.5C19 1.67 18.33 1 17.5 1C16.67 1 16 1.67 16 2.5V10.5C16 10.78 15.78 11 15.5 11C15.22 11 15 10.78 15 10.5V1.5C15 0.67 14.33 0 13.5 0C12.67 0 12 0.67 12 1.5V10.49C12 10.77 11.78 10.99 11.5 10.99C11.22 10.99 11 10.77 11 10.49V4.5C11 3.67 10.33 3 9.5 3C8.67 3 8 3.67 8 4.5V15.91L3.88 13.56C3.3 13.23 2.58 13.32 2.1 13.78C1.5 14.36 1.48 15.32 2.07 15.91L8.85 22.8C9.6 23.57 10.62 24 11.7 24H19C21.21 24 23 22.21 23 20V5.5C23 4.67 22.33 4 21.5 4Z" fill="currentColor"/></svg>';

const RuxIconPanTool$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pan-tool", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pan-tool"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pan-tool":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPanTool$1);
      }
      break;
  } });
}

const RuxIconPanTool = RuxIconPanTool$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPanTool, defineCustomElement };
