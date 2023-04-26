import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.96001 11.38C4.24001 9.91 5.62001 8.9 7.12001 8.9H10.05C10.57 8.9 11 8.47 11 7.95C11 7.43 10.57 7 10.05 7H7.22001C4.61001 7 2.28001 8.91 2.03001 11.51C1.74001 14.49 4.08001 17 7.00001 17H10.05C10.57 17 11 16.57 11 16.05C11 15.53 10.57 15.1 10.05 15.1H7.00001C5.09001 15.1 3.58001 13.36 3.96001 11.38ZM9.00001 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H9.00001C8.45001 11 8.00001 11.45 8.00001 12C8.00001 12.55 8.45001 13 9.00001 13ZM13.95 7H16.78C19.39 7 21.73 8.91 21.98 11.51C22.26 14.49 19.92 17 17 17H13.95C13.43 17 13 16.57 13 16.05C13 15.53 13.43 15.1 13.95 15.1H17C18.91 15.1 20.42 13.36 20.04 11.38C19.76 9.91 18.38 8.9 16.88 8.9H13.95C13.43 8.9 13 8.47 13 7.95C13 7.43 13.43 7 13.95 7Z" fill="currentColor"/></svg>';

const RuxIconInsertLink$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-insert-link", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-insert-link"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-insert-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconInsertLink$1);
      }
      break;
  } });
}

const RuxIconInsertLink = RuxIconInsertLink$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconInsertLink, defineCustomElement };
