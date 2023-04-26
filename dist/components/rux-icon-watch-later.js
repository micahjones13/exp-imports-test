import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM11.47 13.29L15.55 15.8C15.91 16.02 16.38 15.91 16.6 15.56C16.82 15.2 16.7 14.73 16.34 14.51L12.5 12.2V7.75C12.5 7.34 12.16 7 11.75 7C11.34 7 11 7.34 10.99 7.75V12.44C10.99 12.79 11.17 13.11 11.47 13.29Z" fill="currentColor"/></svg>';

const RuxIconWatchLater$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-watch-later", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-watch-later"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-watch-later":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWatchLater$1);
      }
      break;
  } });
}

const RuxIconWatchLater = RuxIconWatchLater$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWatchLater, defineCustomElement };
