import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6V9.5L20.29 7.2C20.92 6.57 22 7.02 22 7.91V16.08C22 16.97 20.92 17.42 20.29 16.79L18 14.5V18C18 18.55 17.55 19 17 19H3C2.45 19 2 18.55 2 18V6C2 5.45 2.45 5 3 5H17C17.55 5 18 5.45 18 6ZM13 13V15.5L16.15 12.36C16.35 12.16 16.35 11.85 16.15 11.65L13 8.5V11H7V8.5L3.85 11.64C3.65 11.84 3.65 12.15 3.85 12.35L7 15.5V13H13Z" fill="currentColor"/></svg>';

const RuxIconSwitchVideo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-switch-video", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-switch-video"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-switch-video":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSwitchVideo$1);
      }
      break;
  } });
}

const RuxIconSwitchVideo = RuxIconSwitchVideo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSwitchVideo, defineCustomElement };
