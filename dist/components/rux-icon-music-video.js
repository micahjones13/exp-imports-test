import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 18C21 18.55 20.55 19 20 19H4C3.45 19 3 18.55 3 18V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V18ZM11 12C9.16 12 7.72 13.64 8.05 15.54C8.25 16.75 9.24 17.74 10.45 17.95C12.34 18.29 13.98 16.85 14 15.03V8H16C16.55 8 17 7.55 17 7C17 6.45 16.55 6 16 6H14C12.9 6 12 6.9 12 8V12.18C11.69 12.07 11.35 12 11 12Z" fill="currentColor"/></svg>';

const RuxIconMusicVideo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-music-video", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-music-video"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-music-video":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMusicVideo$1);
      }
      break;
  } });
}

const RuxIconMusicVideo = RuxIconMusicVideo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMusicVideo, defineCustomElement };
