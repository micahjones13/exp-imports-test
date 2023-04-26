import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 4H18L19.74 6.61C19.85 6.78 19.73 7 19.53 7H17.53C17.2 7 16.88 6.83 16.7 6.55L15 4H13L14.74 6.61C14.85 6.78 14.73 7 14.53 7H12.53C12.2 7 11.88 6.83 11.7 6.55L10 4H8L9.74 6.61C9.85 6.78 9.73 7 9.53 7H7.53C7.2 7 6.89 6.83 6.7 6.55L5 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4.5C22 4.22 21.78 4 21.5 4ZM11.25 15.25L10 18L8.75 15.25L6 14L8.75 12.75L10 10L11.25 12.75L14 14L11.25 15.25ZM16 14L16.94 11.94L19 11L16.94 10.06L16 8L15.06 10.06L13 11L15.06 11.94L16 14Z" fill="currentColor"/></svg>';

const RuxIconMovieFilter$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-movie-filter", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-movie-filter"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-movie-filter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMovieFilter$1);
      }
      break;
  } });
}

const RuxIconMovieFilter = RuxIconMovieFilter$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMovieFilter, defineCustomElement };
