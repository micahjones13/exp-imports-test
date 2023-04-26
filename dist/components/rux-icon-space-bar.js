import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10V13H6V10C6 9.45 5.55 9 5 9C4.45 9 4 9.45 4 10V14C4 14.55 4.45 15 5 15H19C19.55 15 20 14.55 20 14V10C20 9.45 19.55 9 19 9C18.45 9 18 9.45 18 10Z" fill="currentColor"/></svg>';

const RuxIconSpaceBar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-space-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-space-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-space-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSpaceBar$1);
      }
      break;
  } });
}

const RuxIconSpaceBar = RuxIconSpaceBar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSpaceBar, defineCustomElement };
