import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12C23 5.93 18.07 1 12 1ZM15 6.5C15 5.67 14.33 5 13.5 5H10.5C9.67 5 9 5.67 9 6.5C9 7.33 9.67 8 10.5 8H13.5C14.33 8 15 7.33 15 6.5ZM8 11.5C8 10.67 7.33 10 6.5 10C5.67 10 5 10.67 5 11.5C5 12.33 5.67 13 6.5 13C7.33 13 8 12.33 8 11.5ZM7 16.5C7 15.67 7.67 15 8.5 15C9.33 15 10 15.67 10 16.5C10 17.33 9.33 18 8.5 18C7.67 18 7 17.33 7 16.5ZM3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C7.04 3 3 7.04 3 12ZM17.5 10C16.67 10 16 10.67 16 11.5C16 12.33 16.67 13 17.5 13C18.33 13 19 12.33 19 11.5C19 10.67 18.33 10 17.5 10ZM14 16.5C14 15.67 14.67 15 15.5 15C16.33 15 17 15.67 17 16.5C17 17.33 16.33 18 15.5 18C14.67 18 14 17.33 14 16.5Z" fill="currentColor"/></svg>';

const RuxIconSettingsInputSvideo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-settings-input-svideo", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-settings-input-svideo"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-settings-input-svideo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSettingsInputSvideo$1);
      }
      break;
  } });
}

const RuxIconSettingsInputSvideo = RuxIconSettingsInputSvideo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSettingsInputSvideo, defineCustomElement };
