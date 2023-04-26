import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4H9.17C9.7 4 10.21 4.21 10.59 4.59L12 6ZM4 17C4 17.55 4.45 18 5 18H19C19.55 18 20 17.55 20 17V9C20 8.45 19.55 8 19 8H5C4.45 8 4 8.45 4 9V17Z" fill="currentColor"/></svg>';

const RuxIconFolderOpen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-folder-open", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-folder-open"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-folder-open":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFolderOpen$1);
      }
      break;
  } });
}

const RuxIconFolderOpen = RuxIconFolderOpen$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFolderOpen, defineCustomElement };
