import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM3 18.01C3 18.56 3.45 19.01 4 19.01H20C20.55 19.01 21 18.56 21 18.01V5.99C21 5.44 20.55 4.99 20 4.99H4C3.45 4.99 3 5.44 3 5.99V18.01ZM8.5 16H10.5L11.65 17.15C11.85 17.35 12.16 17.35 12.36 17.15L13.5 16H15.5C15.78 16 16 15.78 16 15.5V13.5L17.15 12.35C17.35 12.15 17.35 11.84 17.15 11.64L16 10.5V8.5C16 8.22 15.78 8 15.5 8H13.5L12.35 6.85C12.15 6.65 11.84 6.65 11.64 6.85L10.5 8H8.5C8.22 8 8 8.22 8 8.5V10.5L6.85 11.65C6.65 11.85 6.65 12.16 6.85 12.36L8 13.5V15.5C8 15.78 8.22 16 8.5 16ZM15 12C15 10.34 13.66 9 12 9V15C13.66 15 15 13.66 15 12Z" fill="currentColor"/></svg>';

const RuxIconSettingsBrightness$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-settings-brightness", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-settings-brightness"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-settings-brightness":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSettingsBrightness$1);
      }
      break;
  } });
}

const RuxIconSettingsBrightness = RuxIconSettingsBrightness$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSettingsBrightness, defineCustomElement };
