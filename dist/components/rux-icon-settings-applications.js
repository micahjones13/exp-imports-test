import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM17.2 12.68C17.23 12.46 17.25 12.23 17.25 12C17.25 11.77 17.23 11.54 17.2 11.31L18.68 10.15C18.81 10.04 18.85 9.85 18.76 9.7L17.36 7.28C17.27 7.13 17.09 7.07 16.93 7.13L15.19 7.83C14.83 7.55 14.44 7.32 14.01 7.14L13.75 5.29C13.72 5.13 13.57 5 13.4 5H10.6C10.43 5 10.28 5.13 10.25 5.3L9.99 7.15C9.57 7.33 9.17 7.56 8.81 7.84L7.07 7.14C6.91 7.08 6.73 7.14 6.64 7.29L5.24 9.71C5.15 9.86 5.19 10.05 5.32 10.16L6.8 11.32C6.77 11.54 6.75 11.77 6.75 12C6.75 12.23 6.77 12.46 6.8 12.69L5.32 13.85C5.19 13.96 5.15 14.15 5.24 14.3L6.64 16.72C6.73 16.87 6.91 16.93 7.07 16.87L8.81 16.17C9.17 16.45 9.56 16.68 9.99 16.86L10.25 18.71C10.28 18.87 10.43 19 10.6 19H13.4C13.57 19 13.72 18.87 13.75 18.7L14.01 16.85C14.43 16.67 14.83 16.44 15.19 16.16L16.93 16.86C17.09 16.92 17.27 16.86 17.36 16.71L18.76 14.29C18.85 14.14 18.81 13.95 18.68 13.84L17.2 12.68Z" fill="currentColor"/></svg>';

const RuxIconSettingsApplications$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-settings-applications", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-settings-applications"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-settings-applications":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSettingsApplications$1);
      }
      break;
  } });
}

const RuxIconSettingsApplications = RuxIconSettingsApplications$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSettingsApplications, defineCustomElement };
