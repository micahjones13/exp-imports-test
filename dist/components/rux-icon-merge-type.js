import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.99996H8.71C8.26 7.99996 8.04 7.45996 8.35 7.14996L11.64 3.85996C11.84 3.65996 12.15 3.65996 12.35 3.85996L15.64 7.14996C15.96 7.45996 15.74 7.99996 15.29 7.99996H13V13.59C13 14.12 12.79 14.62 12.41 15L7.7 19.7C7.31 20.09 6.68 20.09 6.29 19.7C5.9 19.31 5.9 18.68 6.29 18.29L11 13.59V7.99996ZM17.7 18.29C18.09 18.68 18.09 19.31 17.7 19.7C17.32 20.09 16.68 20.09 16.29 19.7L13.59 17L15 15.59L17.7 18.29Z" fill="currentColor"/></svg>';

const RuxIconMergeType$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-merge-type", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-merge-type"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-merge-type":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMergeType$1);
      }
      break;
  } });
}

const RuxIconMergeType = RuxIconMergeType$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMergeType, defineCustomElement };
