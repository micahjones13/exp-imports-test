import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.86 1.86003L22.65 5.65003C22.84 5.84003 22.84 6.16003 22.64 6.35003L18.85 10.14C18.54 10.46 18 10.24 18 9.79003V8.00003H14.5C14.22 8.00003 14 7.78003 14 7.50003V4.50003C14 4.22003 14.22 4.00003 14.5 4.00003H18V2.21003C18 1.76003 18.54 1.54003 18.86 1.86003ZM16.69 14.97L19.23 15.26C20.24 15.38 21 16.23 20.99 17.24V18.97C20.99 20.1 20.05 21.04 18.92 20.97C10.39 20.44 3.55998 13.62 3.02998 5.08003C2.95998 3.95003 3.89998 3.01003 5.02998 3.01003H6.75998C7.77998 3.01003 8.62998 3.77003 8.74998 4.78003L9.03998 7.30003C9.10998 7.91003 8.89998 8.51003 8.46998 8.94003L6.61998 10.79C8.05998 13.63 10.38 15.94 13.21 17.38L15.05 15.54C15.48 15.11 16.08 14.9 16.69 14.97Z" fill="currentColor"/></svg>';

const RuxIconPhoneForwarded$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-forwarded", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-forwarded"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-forwarded":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneForwarded$1);
      }
      break;
  } });
}

const RuxIconPhoneForwarded = RuxIconPhoneForwarded$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneForwarded, defineCustomElement };
