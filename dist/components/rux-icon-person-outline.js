import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14.1 8C14.1 6.84 13.16 5.9 12 5.9C10.84 5.9 9.9 6.84 9.9 8C9.9 9.16 10.84 10.1 12 10.1C13.16 10.1 14.1 9.16 14.1 8ZM18.1 17C18.1 16.36 14.97 14.9 12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17ZM4 17C4 14.34 9.33 13 12 13C14.67 13 20 14.34 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17Z" fill="currentColor"/></svg>';

const RuxIconPersonOutline$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-person-outline", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-person-outline"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-person-outline":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPersonOutline$1);
      }
      break;
  } });
}

const RuxIconPersonOutline = RuxIconPersonOutline$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPersonOutline, defineCustomElement };
