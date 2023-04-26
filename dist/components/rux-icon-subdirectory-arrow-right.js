import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.29 15.71L15.71 20.29C15.32 20.68 14.68 20.68 14.29 20.29C13.9 19.9 13.9 19.26 14.29 18.87L17.17 16H7C6.45 16 6 15.55 6 15V5C6 4.45 6.45 4 7 4C7.55 4 8 4.45 8 5V14H17.17L14.29 11.13C13.9 10.74 13.9 10.1 14.29 9.71C14.68 9.32 15.32 9.32 15.71 9.71L20.29 14.29C20.68 14.68 20.68 15.32 20.29 15.71Z" fill="currentColor"/></svg>';

const RuxIconSubdirectoryArrowRight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-subdirectory-arrow-right", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-subdirectory-arrow-right"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-subdirectory-arrow-right":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSubdirectoryArrowRight$1);
      }
      break;
  } });
}

const RuxIconSubdirectoryArrowRight = RuxIconSubdirectoryArrowRight$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSubdirectoryArrowRight, defineCustomElement };
