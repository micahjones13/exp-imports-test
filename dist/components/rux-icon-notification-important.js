import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17L20.29 18.29C20.92 18.92 20.48 20 19.58 20H4.40999C3.51999 20 3.07999 18.92 3.70999 18.29L4.99999 17V11C4.99999 7.65 7.35999 4.85 10.5 4.17V3C10.5 2.17 11.17 1.5 12 1.5C12.83 1.5 13.5 2.17 13.5 3V4.17C16.64 4.85 19 7.65 19 11V17ZM13.99 21.01C13.99 22.11 13.1 23 12 23C10.9 23 10.01 22.11 10.01 21.01H13.99ZM11 16V14H13V16H11ZM12 12C12.55 12 13 11.55 13 11V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11C11 11.55 11.45 12 12 12Z" fill="currentColor"/></svg>';

const RuxIconNotificationImportant$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-notification-important", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-notification-important"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-notification-important":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconNotificationImportant$1);
      }
      break;
  } });
}

const RuxIconNotificationImportant = RuxIconNotificationImportant$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconNotificationImportant, defineCustomElement };
