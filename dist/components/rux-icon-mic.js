import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 11C15 12.66 13.66 14 12 14C10.34 14 8.99999 12.66 8.99999 11V5C8.99999 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5V11ZM16.93 11.85C17.01 11.36 17.42 11 17.91 11C18.52 11 19.01 11.54 18.91 12.14C18.42 15.14 16.02 17.49 13 17.92V20C13 20.55 12.55 21 12 21C11.45 21 11 20.55 11 20V17.92C7.97999 17.49 5.57999 15.14 5.08999 12.14C4.99999 11.54 5.47999 11 6.08999 11C6.57999 11 6.98999 11.36 7.06999 11.85C7.47999 14.2 9.52999 16 12 16C14.47 16 16.52 14.2 16.93 11.85Z" fill="currentColor"/></svg>';

const RuxIconMic$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-mic", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-mic"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-mic":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMic$1);
      }
      break;
  } });
}

const RuxIconMic = RuxIconMic$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMic, defineCustomElement };
