import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H6C4.34 0 3 1.34 3 3V21C3 22.66 4.34 24 6 24H18C19.66 24 21 22.66 21 21V3C21 1.34 19.66 0 18 0ZM13.5 22H10.5C10.22 22 10 21.78 10 21.5C10 21.22 10.22 21 10.5 21H13.5C13.78 21 14 21.22 14 21.5C14 21.78 13.78 22 13.5 22ZM4.75 19H19.25V3H4.75V19Z" fill="currentColor"/></svg>';

const RuxIconTabletAndroid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-tablet-android", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-tablet-android"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-tablet-android":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconTabletAndroid$1);
      }
      break;
  } });
}

const RuxIconTabletAndroid = RuxIconTabletAndroid$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconTabletAndroid, defineCustomElement };
