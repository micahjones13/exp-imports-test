import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.63389 20.3746C3.11916 21.0119 3.55875 22 4.41005 22H20.0001L20.1487 21.9945C21.18 21.9178 22.0001 21.05 22.0001 20V4.41002L21.9941 4.29648C21.907 3.48293 20.8927 3.09741 20.2901 3.70002L3.71005 20.29L3.63389 20.3746ZM13.9996 11.407L20.9974 4.40691L21.0001 4.41002V20L20.9933 20.1158C20.935 20.61 20.5086 21 20.0001 21L13.9996 21V11.407Z" fill="currentColor"/></svg>';

const RuxIconSignalCellular2Bar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-cellular-2-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-cellular-2-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-cellular-2-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalCellular2Bar$1);
      }
      break;
  } });
}

const RuxIconSignalCellular2Bar = RuxIconSignalCellular2Bar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalCellular2Bar, defineCustomElement };
