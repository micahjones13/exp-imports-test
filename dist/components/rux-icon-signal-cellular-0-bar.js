import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9944 3.91464C21.9088 3.0801 20.8691 2.6835 20.252 3.30043L3.30307 20.2527L3.22822 20.3354C2.69734 20.9865 3.14675 22 4.01865 22H19.9555L20.1075 21.9944C21.1617 21.916 22 21.0293 22 19.9563V4.02593L21.9944 3.91464ZM4.01004 20.9599L20.9591 4.00747L20.9755 4.0021C20.9876 4.00317 21 4.01273 21 4.02593V19.9563L20.9938 20.0692C20.9366 20.5888 20.4896 21 19.9555 21H4.01865L4.006 20.9932C3.99982 20.985 3.99914 20.9708 4.01004 20.9599Z" fill="currentColor"/></svg>';

const RuxIconSignalCellular0Bar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-cellular-0-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-cellular-0-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-cellular-0-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalCellular0Bar$1);
      }
      break;
  } });
}

const RuxIconSignalCellular0Bar = RuxIconSignalCellular0Bar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalCellular0Bar, defineCustomElement };
