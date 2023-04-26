import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H20C20.55 3 21 3.45 21 4V10C21 10.55 20.55 11 20 11H3C2.45 11 2 10.55 2 10V4C2 3.45 2.45 3 3 3ZM3 13H20C20.55 13 21 13.45 21 14V20C21 20.55 20.55 21 20 21H3C2.45 21 2 20.55 2 20V14C2 13.45 2.45 13 3 13Z" fill="currentColor"/></svg>';

const RuxIconViewAgenda$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-view-agenda", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-view-agenda"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-view-agenda":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconViewAgenda$1);
      }
      break;
  } });
}

const RuxIconViewAgenda = RuxIconViewAgenda$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconViewAgenda, defineCustomElement };
