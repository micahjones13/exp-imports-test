import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3.5C17.5 4.6 16.6 5.5 15.5 5.5C14.4 5.5 13.5 4.6 13.5 3.5C13.5 2.4 14.4 1.5 15.5 1.5C16.6 1.5 17.5 2.4 17.5 3.5ZM0 17C0 14.2 2.2 12 5 12C7.8 12 10 14.2 10 17C10 19.8 7.8 22 5 22C2.2 22 0 19.8 0 17ZM5 20.5C3.1 20.5 1.5 18.9 1.5 17C1.5 15.1 3.1 13.5 5 13.5C6.9 13.5 8.5 15.1 8.5 17C8.5 18.9 6.9 20.5 5 20.5ZM17.96 10.92C16.38 10.68 15.06 9.96 14 8.9L13.2 8.1L10.8 10.5L12.45 12.22C12.8 12.59 13 13.08 13 13.6V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V14L7.8 11.2C7.4 10.9 7.2 10.4 7.2 9.8C7.2 9.3 7.4 8.8 7.8 8.4L10.6 5.6C10.9 5.2 11.4 5 12 5C12.6 5 13.1 5.2 13.6 5.6L15.5 7.5C16.23 8.22 17.14 8.75 18.25 8.93C18.73 9.01 19.1 9.43 19.1 9.92C19.1 10.53 18.56 11.01 17.96 10.92ZM19 12C16.2 12 14 14.2 14 17C14 19.8 16.2 22 19 22C21.8 22 24 19.8 24 17C24 14.2 21.8 12 19 12ZM15.5 17C15.5 18.9 17.1 20.5 19 20.5C20.9 20.5 22.5 18.9 22.5 17C22.5 15.1 20.9 13.5 19 13.5C17.1 13.5 15.5 15.1 15.5 17Z" fill="currentColor"/></svg>';

const RuxIconDirectionsBike$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-directions-bike", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-directions-bike"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-directions-bike":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDirectionsBike$1);
      }
      break;
  } });
}

const RuxIconDirectionsBike = RuxIconDirectionsBike$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDirectionsBike, defineCustomElement };
