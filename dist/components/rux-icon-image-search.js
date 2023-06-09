import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3 8.88994C19.78 8.11994 20.05 7.21994 19.99 6.22994C19.86 4.07994 18.15 2.25994 16.02 2.02994C13.3 1.72994 11 3.83994 11 6.49994C11 8.98994 13.01 10.9999 15.49 10.9999C16.37 10.9999 17.19 10.7399 17.88 10.2999L20.29 12.7099C20.68 13.0999 21.32 13.0999 21.71 12.7099C22.1 12.3199 22.1 11.6799 21.71 11.2899L19.3 8.88994ZM18 18.9999V14.9999C18 14.4499 18.45 13.9999 19 13.9999C19.55 13.9999 20 14.4499 20 14.9999V19.9999C20 21.0999 19.1 21.9999 18 21.9999H4C2.9 21.9999 2 21.0999 2 19.9999V5.99994C2 4.89994 2.9 3.99994 4 3.99994H8.02C8.57 3.99994 9.02 4.44994 9.02 4.99994C9.02 5.54994 8.57 5.99994 8.02 5.99994H5C4.45 5.99994 4 6.44994 4 6.99994V18.9999C4 19.5499 4.45 19.9999 5 19.9999H17C17.55 19.9999 18 19.5499 18 18.9999ZM6.52 17.9999H15.5C15.91 17.9999 16.15 17.5299 15.9 17.2099L13.35 13.8199C13.16 13.5499 12.76 13.5499 12.56 13.8099L10.21 16.8299L8.65 14.9499C8.45 14.6999 8.07 14.7099 7.87 14.9599L6.13 17.1899C5.87 17.5199 6.1 17.9999 6.52 17.9999ZM13 6.49994C13 7.87994 14.12 8.99994 15.5 8.99994C16.88 8.99994 18 7.87994 18 6.49994C18 5.11994 16.88 3.99994 15.5 3.99994C14.12 3.99994 13 5.11994 13 6.49994Z" fill="currentColor"/></svg>';

const RuxIconImageSearch$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-image-search", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-image-search"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-image-search":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconImageSearch$1);
      }
      break;
  } });
}

const RuxIconImageSearch = RuxIconImageSearch$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconImageSearch, defineCustomElement };
