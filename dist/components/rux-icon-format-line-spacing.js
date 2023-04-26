import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64 6.14995C7.96 6.45995 7.74 6.99995 7.29 6.99995H6V17H7.29C7.74 17 7.96 17.54 7.65 17.85L5.36 20.14C5.16 20.34 4.85 20.34 4.65 20.14L2.36 17.85C2.04 17.54 2.26 17 2.71 17H4V6.99995H2.71C2.26 6.99995 2.04 6.45995 2.35 6.14995L4.64 3.84995C4.84 3.64995 5.15 3.64995 5.35 3.84995L7.64 6.14995ZM21 6.99995H11C10.45 6.99995 10 6.54995 10 5.99995C10 5.44995 10.45 4.99995 11 4.99995H21C21.55 4.99995 22 5.44995 22 5.99995C22 6.54995 21.55 6.99995 21 6.99995ZM21 17H11C10.45 17 10 17.45 10 18C10 18.55 10.45 19 11 19H21C21.55 19 22 18.55 22 18C22 17.45 21.55 17 21 17ZM11 11H21C21.55 11 22 11.45 22 12C22 12.55 21.55 13 21 13H11C10.45 13 10 12.55 10 12C10 11.45 10.45 11 11 11Z" fill="currentColor"/></svg>';

const RuxIconFormatLineSpacing$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-line-spacing", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-line-spacing"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-line-spacing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatLineSpacing$1);
      }
      break;
  } });
}

const RuxIconFormatLineSpacing = RuxIconFormatLineSpacing$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatLineSpacing, defineCustomElement };
