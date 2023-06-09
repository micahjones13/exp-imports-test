import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 8C17 8.55 16.55 9 16 9C15.45 9 15 8.55 15 8V4C15 3.45 15.45 3 16 3C16.55 3 17 3.45 17 4V5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H17V8ZM4 7C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H13V7H4ZM4 19C3.45 19 3 18.55 3 18C3 17.45 3.45 17 4 17H9V19H4ZM13 20V19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H13V16C13 15.45 12.55 15 12 15C11.45 15 11 15.45 11 16V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20ZM7 11V10C7 9.45 7.45 9 8 9C8.55 9 9 9.45 9 10V14C9 14.55 8.55 15 8 15C7.45 15 7 14.55 7 14V13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H7ZM21 12C21 11.45 20.55 11 20 11H11V13H20C20.55 13 21 12.55 21 12Z" fill="currentColor"/></svg>';

const RuxIconTune$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-tune", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-tune"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-tune":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTune$1);
      }
      break;
  } });
}

const RuxIconTune = RuxIconTune$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTune, defineCustomElement };
