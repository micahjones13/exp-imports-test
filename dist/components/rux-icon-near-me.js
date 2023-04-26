import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 3.93997L4.06999 10.08C3.23999 10.43 3.25999 11.61 4.08999 11.93L9.42999 14C9.68999 14.1 9.89999 14.31 9.99999 14.57L12.06 19.9C12.38 20.74 13.57 20.76 13.92 19.93L20.07 5.25997C20.4 4.42997 19.57 3.59997 18.75 3.93997Z" fill="currentColor"/></svg>';

const RuxIconNearMe$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-near-me", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-near-me"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-near-me":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNearMe$1);
      }
      break;
  } });
}

const RuxIconNearMe = RuxIconNearMe$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNearMe, defineCustomElement };
