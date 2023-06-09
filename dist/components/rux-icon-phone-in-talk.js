import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.69 14.9698L19.23 15.2598C20.24 15.3798 21 16.2298 20.99 17.2398V18.9698C20.99 20.0998 20.05 21.0398 18.92 20.9698C10.39 20.4398 3.55998 13.6198 3.02998 5.07977C2.95998 3.94977 3.89998 3.00977 5.02998 3.00977H6.75998C7.77998 3.00977 8.62998 3.76977 8.74998 4.77977L9.03998 7.29977C9.10998 7.90977 8.89998 8.50977 8.46998 8.93977L6.61998 10.7898C8.05998 13.6298 10.38 15.9398 13.21 17.3798L15.05 15.5398C15.48 15.1098 16.08 14.8998 16.69 14.9698ZM12.88 5.04977C16.06 5.44977 18.55 7.93977 18.95 11.1198C19.01 11.6298 19.44 11.9998 19.94 11.9998C19.98 11.9998 20.02 11.9998 20.06 11.9898C20.61 11.9198 21 11.4198 20.93 10.8698C20.42 6.77977 17.21 3.56977 13.12 3.05977C12.57 2.99977 12.07 3.38977 12.01 3.93977C11.94 4.48977 12.33 4.98977 12.88 5.04977ZM13.26 7.15977C12.73 7.01977 12.18 7.33977 12.04 7.87977C11.9 8.41977 12.22 8.95977 12.76 9.09977C13.81 9.36977 14.63 10.1898 14.91 11.2498C15.03 11.6998 15.43 11.9998 15.88 11.9998C15.96 11.9998 16.05 11.9898 16.13 11.9698C16.66 11.8298 16.98 11.2798 16.85 10.7498C16.38 8.97977 15.01 7.60977 13.26 7.15977Z" fill="currentColor"/></svg>';

const RuxIconPhoneInTalk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-phone-in-talk", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-phone-in-talk"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-phone-in-talk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhoneInTalk$1);
      }
      break;
  } });
}

const RuxIconPhoneInTalk = RuxIconPhoneInTalk$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhoneInTalk, defineCustomElement };
