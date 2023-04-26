import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6H20C20.55 6 21 6.45 21 7V7.01C21 7.56 20.55 8.01 20 8.01H4C3.45 8.01 3 7.56 3 7.01V7C3 6.45 3.45 6 4 6ZM20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11ZM4 18H14C14.55 18 15 17.55 15 17C15 16.45 14.55 16 14 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z" fill="currentColor"/></svg>';

const RuxIconNotes$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-notes", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-notes"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-notes":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNotes$1);
      }
      break;
  } });
}

const RuxIconNotes = RuxIconNotes$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNotes, defineCustomElement };
