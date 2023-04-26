import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.45 7.55 6 7 6C6.45 6 6 6.45 6 7V17C6 17.55 6.45 18 7 18C7.55 18 8 17.55 8 17V7ZM16.43 16.89L10.66 12.82C10.09 12.42 10.09 11.58 10.66 11.18L16.43 7.11C17.1 6.65 18.01 7.12 18.01 7.93V16.07C18.01 16.88 17.09 17.36 16.43 16.89Z" fill="currentColor"/></svg>';

const RuxIconSkipPrevious$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-skip-previous", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-skip-previous"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-skip-previous":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSkipPrevious$1);
      }
      break;
  } });
}

const RuxIconSkipPrevious = RuxIconSkipPrevious$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSkipPrevious, defineCustomElement };
