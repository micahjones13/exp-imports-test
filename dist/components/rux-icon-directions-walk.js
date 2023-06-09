import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 3.5C15.5 4.6 14.6 5.5 13.5 5.5C12.4 5.5 11.5 4.6 11.5 3.5C11.5 2.4 12.4 1.5 13.5 1.5C14.6 1.5 15.5 2.4 15.5 3.5ZM7.24 21.81L9.8 8.9L8 9.6V12C8 12.55 7.55 13 7 13C6.45 13 6 12.55 6 12V9.63C6 8.82 6.48 8.1 7.22 7.78L11.05 6.16C12.02 5.75 13.14 6.11 13.7 7L14.7 8.6C15.37 9.78 16.63 10.68 18.15 10.93C18.64 11.01 19 11.42 19 11.91C19 12.52 18.46 13 17.86 12.91C16.12 12.63 14.57 11.74 13.5 10.5L12.9 13.5L14.38 14.91C14.78 15.29 15 15.81 15 16.36V22C15 22.55 14.55 23 14 23C13.45 23 13 22.55 13 22V17L10.9 15L9.28 22.22C9.17 22.68 8.77 23 8.3 23H8.22C7.59 23 7.11 22.42 7.24 21.81Z" fill="currentColor"/></svg>';

const RuxIconDirectionsWalk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-directions-walk", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-directions-walk"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-directions-walk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDirectionsWalk$1);
      }
      break;
  } });
}

const RuxIconDirectionsWalk = RuxIconDirectionsWalk$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDirectionsWalk, defineCustomElement };
