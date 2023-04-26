import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM20 19C20.55 19 21 18.55 21 18V6C21 5.45 20.55 5 20 5H4C3.45 5 3 5.45 3 6V18C3 18.55 3.45 19 4 19H20ZM10 8C9.45 8 9 8.45 9 9V15C9 15.55 9.45 16 10 16C10.55 16 11 15.55 11 15V9C11 8.45 10.55 8 10 8ZM13 9C13 8.45 13.45 8 14 8C14.55 8 15 8.45 15 9V15C15 15.55 14.55 16 14 16C13.45 16 13 15.55 13 15V9Z" fill="currentColor"/></svg>';

const RuxIconPausePresentation$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pause-presentation", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pause-presentation"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pause-presentation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPausePresentation$1);
      }
      break;
  } });
}

const RuxIconPausePresentation = RuxIconPausePresentation$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPausePresentation, defineCustomElement };
