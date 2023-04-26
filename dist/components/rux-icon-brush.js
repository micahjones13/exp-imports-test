import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.37 3.29006L20.71 4.63006C21.1 5.02006 21.1 5.65006 20.71 6.04006L11.75 15.0001L9 12.2501L17.96 3.29006C18.35 2.90006 18.98 2.90006 19.37 3.29006ZM4 17.0001C4 15.3401 5.34 14.0001 7 14.0001C8.66 14.0001 10 15.3401 10 17.0001C10 19.2101 8.21 21.0001 6 21.0001C4.49 21.0001 2.92 20.2201 2 19.0001C2.84 19.0001 4 18.3101 4 17.0001Z" fill="currentColor"/></svg>';

const RuxIconBrush$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-brush", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-brush"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-brush":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrush$1);
      }
      break;
  } });
}

const RuxIconBrush = RuxIconBrush$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrush, defineCustomElement };
