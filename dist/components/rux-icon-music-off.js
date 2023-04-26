import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9.61L12 7.61V4C12 3.45 12.45 3 13 3H16C17.1 3 18 3.9 18 5C18 6.1 17.1 7 16 7H14ZM3.70998 3.56C4.09998 3.17 4.72998 3.17 5.11998 3.56L20.43 18.88C20.82 19.27 20.82 19.9 20.43 20.29C20.04 20.68 19.41 20.68 19.02 20.29L14 15.27V16.85C14 18.84 12.61 20.64 10.65 20.95C7.91998 21.38 5.59998 19.04 6.05998 16.3C6.29998 14.9 7.32998 13.71 8.66998 13.23C9.89998 12.8 11.06 13.01 12 13.55V13.27L3.70998 4.97C3.31998 4.58 3.31998 3.95 3.70998 3.56Z" fill="currentColor"/></svg>';

const RuxIconMusicOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-music-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-music-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-music-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconMusicOff$1);
      }
      break;
  } });
}

const RuxIconMusicOff = RuxIconMusicOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconMusicOff, defineCustomElement };
