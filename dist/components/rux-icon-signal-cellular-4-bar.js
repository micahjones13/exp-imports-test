import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.40999 22H20C21.1 22 22 21.1 22 20V4.41002C22 3.52002 20.92 3.07002 20.29 3.70002L3.70999 20.29C3.07999 20.92 3.51999 22 4.40999 22Z" fill="currentColor"/></svg>';

const RuxIconSignalCellular4Bar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-cellular-4-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-cellular-4-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-cellular-4-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalCellular4Bar$1);
      }
      break;
  } });
}

const RuxIconSignalCellular4Bar = RuxIconSignalCellular4Bar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalCellular4Bar, defineCustomElement };
