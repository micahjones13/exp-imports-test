import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 5L13.75 3.5H17V2H7V3.5H11.75L11 5C7.87 5.09 5 5.73 5 8.5V17C5 18.5 6.11 19.73 7.55 19.95L6.36 21.14C6.04 21.46 6.26 22 6.71 22H7.8C7.93 22 8.06 21.95 8.15 21.85L10 20H14L15.85 21.85C15.94 21.94 16.07 22 16.2 22H17.29C17.74 22 17.96 21.46 17.64 21.15L16.45 19.96C17.89 19.73 19 18.5 19 17V8.5C19 5.73 16.13 5.09 13 5ZM12 18.5C11.17 18.5 10.5 17.83 10.5 17C10.5 16.17 11.17 15.5 12 15.5C12.83 15.5 13.5 16.17 13.5 17C13.5 17.83 12.83 18.5 12 18.5ZM7 14H17V9H7V14Z" fill="currentColor"/></svg>';

const RuxIconTram$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-tram", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-tram"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-tram":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTram$1);
      }
      break;
  } });
}

const RuxIconTram = RuxIconTram$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTram, defineCustomElement };
