import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.91 6.70998C14.52 6.31998 13.89 6.31998 13.5 6.70998L8.90999 11.3C8.51999 11.69 8.51999 12.32 8.90999 12.71L13.5 17.3C13.89 17.69 14.52 17.69 14.91 17.3C15.3 16.91 15.3 16.28 14.91 15.89L11.03 12L14.91 8.11998C15.29 7.72998 15.29 7.08998 14.91 6.70998Z" fill="currentColor"/></svg>';

const RuxIconNavigateBefore$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-navigate-before", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-navigate-before"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-navigate-before":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNavigateBefore$1);
      }
      break;
  } });
}

const RuxIconNavigateBefore = RuxIconNavigateBefore$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNavigateBefore, defineCustomElement };
