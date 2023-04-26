import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.45 4 4 4.45 4 5V10C4 10.55 3.55 11 3 11C2.45 11 2 10.55 2 10V4C2 2.9 2.9 2 4 2H10C10.55 2 11 2.45 11 3C11 3.55 10.55 4 10 4H5ZM6.65 17.19L9.61 13.49C9.81 13.24 10.19 13.24 10.39 13.49L12.97 16.71L14.6 14.53C14.8 14.26 15.2 14.26 15.4 14.53L17.4 17.2C17.65 17.53 17.41 18 17 18H7.04C6.62 18 6.39 17.52 6.65 17.19ZM17 8.5C17 7.67 16.33 7 15.5 7C14.67 7 14 7.67 14 8.5C14 9.33 14.67 10 15.5 10C16.33 10 17 9.33 17 8.5ZM14 2H20C21.1 2 22 2.9 22 4V10C22 10.55 21.55 11 21 11C20.45 11 20 10.55 20 10V5C20 4.45 19.55 4 19 4H14C13.45 4 13 3.55 13 3C13 2.45 13.45 2 14 2ZM20 19C20 19.55 19.55 20 19 20H14C13.45 20 13 20.45 13 21C13 21.55 13.45 22 14 22H20C21.1 22 22 21.1 22 20V14C22 13.45 21.55 13 21 13C20.45 13 20 13.45 20 14V19ZM2 14C2 13.45 2.45 13 3 13C3.55 13 4 13.45 4 14V19C4 19.55 4.45 20 5 20H10C10.55 20 11 20.45 11 21C11 21.55 10.55 22 10 22H4C2.9 22 2 21.1 2 20V14Z" fill="currentColor"/></svg>';

const RuxIconWallpaper$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-wallpaper", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-wallpaper"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-wallpaper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWallpaper$1);
      }
      break;
  } });
}

const RuxIconWallpaper = RuxIconWallpaper$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWallpaper, defineCustomElement };
