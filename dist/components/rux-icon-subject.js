import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C4.45 7 4 6.55 4 6C4 5.45 4.45 5 5 5H19C19.55 5 20 5.45 20 6C20 6.55 19.55 7 19 7H5ZM5 9H19C19.55 9 20 9.45 20 10C20 10.55 19.55 11 19 11H5C4.45 11 4 10.55 4 10C4 9.45 4.45 9 5 9ZM5 17H13C13.55 17 14 17.45 14 18C14 18.55 13.55 19 13 19H5C4.45 19 4 18.55 4 18C4 17.45 4.45 17 5 17ZM5 15H19C19.55 15 20 14.55 20 14C20 13.45 19.55 13 19 13H5C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15Z" fill="currentColor"/></svg>';

const RuxIconSubject$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-subject", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-subject"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-subject":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSubject$1);
      }
      break;
  } });
}

const RuxIconSubject = RuxIconSubject$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSubject, defineCustomElement };
