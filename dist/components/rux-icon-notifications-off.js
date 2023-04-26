import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C10.2979 4.73052 10.1029 4.80231 9.91502 4.87149L9.915 4.8715L9.81 4.91L18 13.1V11ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM4 4.76L5.41 3.35L21.39 19.33L19.98 20.74L18.24 19H5.41C4.52 19 4.08 17.92 4.71 17.29L6 16V11C6 9.73 6.29 8.57 6.81 7.57L4 4.76Z" fill="currentColor"/></svg>';

const RuxIconNotificationsOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-notifications-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-notifications-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-notifications-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNotificationsOff$1);
      }
      break;
  } });
}

const RuxIconNotificationsOff = RuxIconNotificationsOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNotificationsOff, defineCustomElement };
