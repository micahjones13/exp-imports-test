import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.73 2.41005L16.56 5.24005C17.34 6.02005 17.34 7.29005 16.56 8.07005L15.14 9.49005L9.49 3.83005L10.9 2.42005C11.68 1.63005 12.95 1.63005 13.73 2.41005ZM8.07 5.24005L5.24 8.07005L17.97 20.8001C18.75 21.58 20.02 21.58 20.8 20.8001C21.58 20.0201 21.58 18.75 20.8 17.9701L8.07 5.24005ZM12 21H2C1.45 21 1 21.4501 1 22C1 22.55 1.45 23 2 23H12C12.55 23 13 22.55 13 22C13 21.4501 12.55 21 12 21ZM9.49 15.14L3.83 9.48005L2.42 10.89C1.64 11.67 1.64 12.9401 2.42 13.7201L5.25 16.5501C6.03 17.3301 7.3 17.3301 8.08 16.5501L9.49 15.14Z" fill="currentColor"/></svg>';

const RuxIconGavel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-gavel", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-gavel"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-gavel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconGavel$1);
      }
      break;
  } });
}

const RuxIconGavel = RuxIconGavel$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconGavel, defineCustomElement };
