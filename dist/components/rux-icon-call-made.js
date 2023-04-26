import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99997 6C8.99997 6.56 9.44997 7 9.99997 7H15.59L4.69997 17.89C4.30997 18.28 4.30997 18.91 4.69997 19.3C5.08997 19.69 5.71997 19.69 6.10997 19.3L17 8.41V14C17 14.55 17.45 15 18 15C18.55 15 19 14.55 19 14V6C19 5.45 18.55 5 18 5H9.99997C9.44997 5 8.99997 5.45 8.99997 6Z" fill="currentColor"/></svg>';

const RuxIconCallMade$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-call-made", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-call-made"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-call-made":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCallMade$1);
      }
      break;
  } });
}

const RuxIconCallMade = RuxIconCallMade$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCallMade, defineCustomElement };
