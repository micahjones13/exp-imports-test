import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.77 4.12995C14.4 6.11995 18 10.91 18 14C18 14.28 17.97 14.56 17.93 14.84L9.48998 6.39995C10.14 5.48995 10.76 4.69995 11.22 4.12995C11.62 3.63995 12.37 3.63995 12.77 4.12995ZM6.11998 5.83995L19.29 19.01C19.68 19.4 19.68 20.04 19.28 20.42C18.89 20.81 18.26 20.81 17.87 20.42L15.95 18.5C14.9 19.43 13.52 20 12 20C8.68998 20 5.99998 17.31 5.99998 14C5.99998 12.79 6.54998 11.33 7.31998 9.85995L4.70998 7.24995C4.31998 6.85995 4.31998 6.22995 4.70998 5.83995C5.09998 5.44995 5.72998 5.44995 6.11998 5.83995Z" fill="currentColor"/></svg>';

const RuxIconFormatColorReset$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-color-reset", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-color-reset"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-color-reset":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatColorReset$1);
      }
      break;
  } });
}

const RuxIconFormatColorReset = RuxIconFormatColorReset$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatColorReset, defineCustomElement };
