import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.35 4.85L16.54 6.04L4.69997 17.88C4.30997 18.27 4.30997 18.9 4.69997 19.29C5.08997 19.68 5.71997 19.68 6.10997 19.29L17.96 7.46L19.15 8.65C19.46 8.96 20 8.74 20 8.29V4.5C20 4.22 19.78 4 19.5 4H15.71C15.26 4 15.04 4.54 15.35 4.85ZM10.59 9.17L6.11997 4.7C5.72997 4.31 5.09997 4.31 4.70997 4.7C4.31997 5.09 4.31997 5.72 4.70997 6.11L9.16997 10.57L10.59 9.17ZM13.42 14.82L14.83 13.41L17.96 16.55L19.15 15.36C19.46 15.04 20 15.26 20 15.71V19.5C20 19.78 19.78 20 19.5 20H15.71C15.26 20 15.04 19.46 15.35 19.15L16.55 17.95L13.42 14.82Z" fill="currentColor"/></svg>';

const RuxIconShuffle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-shuffle", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-shuffle"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-shuffle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconShuffle$1);
      }
      break;
  } });
}

const RuxIconShuffle = RuxIconShuffle$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconShuffle, defineCustomElement };
