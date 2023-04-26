import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM11 15C11 15.55 10.55 16 10 16C9.45 16 9 15.55 9 15V9C9 8.45 9.45 8 10 8C10.55 8 11 8.45 11 9V15ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 15C15 15.55 14.55 16 14 16C13.45 16 13 15.55 13 15V9C13 8.45 13.45 8 14 8C14.55 8 15 8.45 15 9V15Z" fill="currentColor"/></svg>';

const RuxIconPauseCircleOutline$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pause-circle-outline", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pause-circle-outline"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pause-circle-outline":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPauseCircleOutline$1);
      }
      break;
  } });
}

const RuxIconPauseCircleOutline = RuxIconPauseCircleOutline$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPauseCircleOutline, defineCustomElement };
