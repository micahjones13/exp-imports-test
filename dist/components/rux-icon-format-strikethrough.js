import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5.5C5 6.33 5.67 7 6.5 7H10V10H14V7H17.5C18.33 7 19 6.33 19 5.5C19 4.67 18.33 4 17.5 4H6.5C5.67 4 5 4.67 5 5.5ZM12 19C13.1 19 14 18.1 14 17V16H10V17C10 18.1 10.9 19 12 19ZM20 14H4C3.45 14 3 13.55 3 13C3 12.45 3.45 12 4 12H20C20.55 12 21 12.45 21 13C21 13.55 20.55 14 20 14Z" fill="currentColor"/></svg>';

const RuxIconFormatStrikethrough$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-strikethrough", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-strikethrough"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-strikethrough":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatStrikethrough$1);
      }
      break;
  } });
}

const RuxIconFormatStrikethrough = RuxIconFormatStrikethrough$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatStrikethrough, defineCustomElement };
