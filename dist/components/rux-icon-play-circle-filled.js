import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1Z" fill="currentColor"/></svg>';

const RuxIconPlayCircleFilled$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-play-circle-filled", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-play-circle-filled"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-play-circle-filled":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPlayCircleFilled$1);
      }
      break;
  } });
}

const RuxIconPlayCircleFilled = RuxIconPlayCircleFilled$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPlayCircleFilled, defineCustomElement };
