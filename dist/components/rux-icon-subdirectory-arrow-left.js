import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.70998 15.71L10.29 20.29C10.68 20.68 11.32 20.68 11.71 20.29C12.1 19.9 12.1 19.26 11.71 18.87L8.82998 16H19C19.55 16 20 15.55 20 15V5C20 4.45 19.55 4 19 4C18.45 4 18 4.45 18 5V14H8.82998L11.71 11.13C12.1 10.74 12.1 10.1 11.71 9.71C11.32 9.32 10.68 9.32 10.29 9.71L5.70998 14.29C5.31998 14.68 5.31998 15.32 5.70998 15.71Z" fill="currentColor"/></svg>';

const RuxIconSubdirectoryArrowLeft$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-subdirectory-arrow-left", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-subdirectory-arrow-left"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-subdirectory-arrow-left":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSubdirectoryArrowLeft$1);
      }
      break;
  } });
}

const RuxIconSubdirectoryArrowLeft = RuxIconSubdirectoryArrowLeft$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSubdirectoryArrowLeft, defineCustomElement };
