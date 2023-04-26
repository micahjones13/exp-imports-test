import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 6H12L10.59 4.59C10.21 4.21 9.7 4 9.17 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM15 9C16.1 9 17 9.9 17 11C17 12.1 16.1 13 15 13C13.9 13 13 12.1 13 11C13 9.9 13.9 9 15 9ZM11 16V17H19V16C19 14.67 16.33 14 15 14C13.67 14 11 14.67 11 16Z" fill="currentColor"/></svg>';

const RuxIconFolderShared$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-folder-shared", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-folder-shared"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-folder-shared":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFolderShared$1);
      }
      break;
  } });
}

const RuxIconFolderShared = RuxIconFolderShared$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFolderShared, defineCustomElement };
