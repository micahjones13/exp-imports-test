import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.06C17.17 3.52 20.48 6.83 20.94 11H22C22.55 11 23 11.45 23 12C23 12.55 22.55 13 22 13H20.94C20.48 17.17 17.17 20.48 13 20.94V22C13 22.55 12.55 23 12 23C11.45 23 11 22.55 11 22V20.94C6.83 20.48 3.52 17.17 3.06 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11H3.06C3.52 6.83 6.83 3.52 11 3.06V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2V3.06ZM5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12Z" fill="currentColor"/></svg>';

const RuxIconGpsNotFixed$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-gps-not-fixed", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-gps-not-fixed"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-gps-not-fixed":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGpsNotFixed$1);
      }
      break;
  } });
}

const RuxIconGpsNotFixed = RuxIconGpsNotFixed$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGpsNotFixed, defineCustomElement };
