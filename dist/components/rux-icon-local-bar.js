import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.55 3C20.35 3 21 3.65 21 4.45C21 4.8 20.87 5.15 20.63 5.41L13 14V19H17C17.55 19 18 19.45 18 20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20C6 19.45 6.45 19 7 19H11V14L3.37 5.41C3.13 5.15 3 4.8 3 4.45C3 3.65 3.65 3 4.45 3H19.55ZM5.66 5L7.43 7H16.57L18.35 5H5.66Z" fill="currentColor"/></svg>';

const RuxIconLocalBar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-local-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-local-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-local-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLocalBar$1);
      }
      break;
  } });
}

const RuxIconLocalBar = RuxIconLocalBar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLocalBar, defineCustomElement };
