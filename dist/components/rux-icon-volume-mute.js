import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10V14C8 14.55 8.45 15 9 15H12L15.29 18.29C15.92 18.92 17 18.47 17 17.58V6.41002C17 5.52002 15.92 5.07002 15.29 5.70002L12 9.00002H9C8.45 9.00002 8 9.45002 8 10Z" fill="currentColor"/></svg>';

const RuxIconVolumeMute$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-volume-mute", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-volume-mute"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-volume-mute":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVolumeMute$1);
      }
      break;
  } });
}

const RuxIconVolumeMute = RuxIconVolumeMute$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVolumeMute, defineCustomElement };
