import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V17.88C11.48 18.41 12.19 18.58 12.43 18.1L15.99 10.98C16.15 10.65 15.91 10.26 15.54 10.26H13V6.07002C13 5.54002 12.29 5.37002 12.06 5.84002L8.38002 13.01C8.20002 13.34 8.45002 13.74 8.82002 13.74H11.48Z" fill="currentColor"/></svg>';

const RuxIconOfflineBolt$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-offline-bolt", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-offline-bolt"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-offline-bolt":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconOfflineBolt$1);
      }
      break;
  } });
}

const RuxIconOfflineBolt = RuxIconOfflineBolt$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconOfflineBolt, defineCustomElement };
