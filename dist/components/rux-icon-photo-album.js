import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4ZM8.62 15.63L6.63 18.19C6.37 18.52 6.61 19 7.02 19.01H17C17.41 19.01 17.65 18.54 17.4 18.21L14.53 14.39C14.34 14.12 13.94 14.12 13.74 14.38L11.14 17.72L9.4 15.62C9.2 15.37 8.82 15.38 8.62 15.63Z" fill="currentColor"/></svg>';

const RuxIconPhotoAlbum$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-photo-album", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-photo-album"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-photo-album":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPhotoAlbum$1);
      }
      break;
  } });
}

const RuxIconPhotoAlbum = RuxIconPhotoAlbum$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPhotoAlbum, defineCustomElement };
