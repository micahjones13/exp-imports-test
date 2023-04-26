import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.93 4.2602L19.08 19.2502C19.42 20.0802 18.57 20.9102 17.75 20.5402L12.41 18.1802C12.15 18.0702 11.86 18.0702 11.6 18.1802L6.26002 20.5402C5.44002 20.9002 4.59002 20.0802 4.93002 19.2502L11.08 4.2602C11.41 3.4302 12.59 3.4302 12.93 4.2602Z" fill="currentColor"/></svg>';

const RuxIconNavigation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-navigation", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-navigation"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-navigation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNavigation$1);
      }
      break;
  } });
}

const RuxIconNavigation = RuxIconNavigation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNavigation, defineCustomElement };
