import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70999 11.71L11.3 14.3C11.69 14.69 12.32 14.69 12.71 14.3L15.3 11.71C15.93 11.08 15.48 10 14.59 10H9.40999C8.51999 10 8.07999 11.08 8.70999 11.71Z" fill="currentColor"/></svg>';

const RuxIconArrowDropDown$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-drop-down", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-drop-down"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-drop-down":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowDropDown$1);
      }
      break;
  } });
}

const RuxIconArrowDropDown = RuxIconArrowDropDown$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowDropDown, defineCustomElement };
