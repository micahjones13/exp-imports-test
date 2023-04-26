import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13V5ZM10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19Z" fill="currentColor"/></svg>';

const RuxIconPriorityHigh$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-priority-high", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-priority-high"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-priority-high":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPriorityHigh$1);
      }
      break;
  } });
}

const RuxIconPriorityHigh = RuxIconPriorityHigh$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPriorityHigh, defineCustomElement };
