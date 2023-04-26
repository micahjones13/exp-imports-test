import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6.82001V17.18C7 17.97 7.87 18.45 8.54 18.02L16.68 12.84C17.3 12.45 17.3 11.55 16.68 11.15L8.54 5.98001C7.87 5.55001 7 6.03001 7 6.82001Z" fill="currentColor"/></svg>';

const RuxIconPlayArrow$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-play-arrow", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-play-arrow"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-play-arrow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPlayArrow$1);
      }
      break;
  } });
}

const RuxIconPlayArrow = RuxIconPlayArrow$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPlayArrow, defineCustomElement };
