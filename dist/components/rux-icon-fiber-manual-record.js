import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="currentColor"/></svg>';

const RuxIconFiberManualRecord$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-fiber-manual-record", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-fiber-manual-record"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-fiber-manual-record":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFiberManualRecord$1);
      }
      break;
  } });
}

const RuxIconFiberManualRecord = RuxIconFiberManualRecord$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFiberManualRecord, defineCustomElement };
