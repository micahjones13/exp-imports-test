import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.33998 8 3.75998 10.42 2.05998 13.93C1.73998 14.6 2.09998 15.4 2.80998 15.64C3.39998 15.84 4.03998 15.56 4.30998 15C5.60998 12.34 8.33998 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z" fill="currentColor"/></svg>';

const RuxIconRedo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-redo", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-redo"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-redo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRedo$1);
      }
      break;
  } });
}

const RuxIconRedo = RuxIconRedo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRedo, defineCustomElement };
