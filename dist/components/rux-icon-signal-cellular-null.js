import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.71005 20.2901L20.2901 3.71005C20.9201 3.08005 22.0001 3.52005 22.0001 4.41005V20.0001C22.0001 21.1001 21.1001 22.0001 20.0001 22.0001H4.41005C3.52005 22.0001 3.08005 20.9201 3.71005 20.2901ZM20.0001 19.0001V6.83005L6.83005 20.0001H19.0001C19.5501 20.0001 20.0001 19.5501 20.0001 19.0001Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularNull$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-cellular-null", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-cellular-null"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-cellular-null":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalCellularNull$1);
      }
      break;
  } });
}

const RuxIconSignalCellularNull = RuxIconSignalCellularNull$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalCellularNull, defineCustomElement };
