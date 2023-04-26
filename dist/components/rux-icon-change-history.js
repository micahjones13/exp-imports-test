import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.95002 18.47L11.15 5.36C11.54 4.73 12.46 4.73 12.85 5.36L21.05 18.47C21.46 19.14 20.99 20 20.2 20H3.80002C3.02002 20 2.54002 19.14 2.95002 18.47ZM18.39 18L12 7.77L5.61002 18H18.39Z" fill="currentColor"/></svg>';

const RuxIconChangeHistory$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-change-history", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-change-history"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-change-history":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconChangeHistory$1);
      }
      break;
  } });
}

const RuxIconChangeHistory = RuxIconChangeHistory$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconChangeHistory, defineCustomElement };
