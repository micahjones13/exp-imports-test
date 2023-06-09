import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.95 4.5 20.49 4.72 21.77 5.29C22.5 5.62 22.99 6.33 22.99 7.14V18.42C22.99 19.73 21.77 20.69 20.51 20.36C19.53 20.11 18.49 20 17.49 20C15.93 20 14.27 20.25 12.93 20.92C12.34 21.22 11.66 21.22 11.06 20.92C9.72 20.26 8.06 20 6.5 20C5.5 20 4.46 20.11 3.48 20.36C2.22 20.68 1 19.72 1 18.42V7.14C1 6.33 1.49 5.62 2.22 5.29C3.51 4.72 5.05 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6ZM19.8 18.21C20.42 18.32 21 17.86 21 17.23V7.76C21 7.29 20.66 6.88 20.2 6.78C19.33 6.59 18.42 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8V19.51C13.35 18.66 15.8 18.01 17.5 18.01C18.27 18.01 19.05 18.07 19.8 18.21Z" fill="currentColor"/></svg>';

const RuxIconImportContacts$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-import-contacts", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-import-contacts"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-import-contacts":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconImportContacts$1);
      }
      break;
  } });
}

const RuxIconImportContacts = RuxIconImportContacts$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconImportContacts, defineCustomElement };
