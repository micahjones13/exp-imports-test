import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1H19C20.1 1 21 1.9 21 3V21C21 22.1 20.1 23 19 23H9C7.9 23 7 22.1 7 21V19C7 18.45 7.45 18 8 18C8.55 18 9 18.45 9 19V20H19V4H9V5C9 5.55 8.55 6 8 6C7.45 6 7 5.55 7 5V3C7 1.9 7.9 1 9 1ZM5.09 11.55L7.01 13.47L12.28 8.17C12.63 7.82 13.2 7.82 13.55 8.17C13.9 8.52 13.9 9.09 13.55 9.44L7.7 15.29C7.30999 15.68 6.68 15.68 6.29 15.29L3.82 12.82C3.47 12.47 3.47 11.9 3.82 11.55C4.17 11.2 4.74 11.2 5.09 11.55Z" fill="currentColor"/></svg>';

const RuxIconMobileFriendly$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-mobile-friendly", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-mobile-friendly"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-mobile-friendly":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMobileFriendly$1);
      }
      break;
  } });
}

const RuxIconMobileFriendly = RuxIconMobileFriendly$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMobileFriendly, defineCustomElement };
