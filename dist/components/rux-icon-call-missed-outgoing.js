import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.69998 9.11L11.29 16.7C11.68 17.09 12.31 17.09 12.7 16.7L19 10.4V14C19 14.55 19.45 15 20 15C20.55 15 21 14.55 21 14V8C21 7.45 20.55 7 20 7H14C13.45 7 13 7.45 13 8C13 8.55 13.45 9 14 9H17.59L12 14.59L5.10998 7.7C4.71998 7.31 4.08998 7.31 3.69998 7.7C3.31998 8.09 3.31998 8.73 3.69998 9.11Z" fill="currentColor"/></svg>';

const RuxIconCallMissedOutgoing$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-call-missed-outgoing", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-call-missed-outgoing"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-call-missed-outgoing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCallMissedOutgoing$1);
      }
      break;
  } });
}

const RuxIconCallMissedOutgoing = RuxIconCallMissedOutgoing$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCallMissedOutgoing, defineCustomElement };
