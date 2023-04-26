import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H13C13.55 5 14 5.45 14 6C14 6.55 13.55 7 13 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5ZM3 9H13C13.55 9 14 9.45 14 10C14 10.55 13.55 11 13 11H3C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9ZM3 15H9C9.55 15 10 14.55 10 14C10 13.45 9.55 13 9 13H3C2.45 13 2 13.45 2 14C2 14.55 2.45 15 3 15ZM22.3 11.3L22.21 11.21C21.82 10.82 21.18 10.82 20.8 11.22L16.02 16.01L13.72 13.71C13.33 13.32 12.7 13.32 12.31 13.71L12.22 13.8C11.83 14.19 11.83 14.82 12.22 15.21L15.31 18.3C15.7 18.69 16.33 18.69 16.72 18.3L22.3 12.71C22.69 12.32 22.69 11.69 22.3 11.3Z" fill="currentColor"/></svg>';

const RuxIconPlaylistAddCheck$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-playlist-add-check", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-playlist-add-check"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-playlist-add-check":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPlaylistAddCheck$1);
      }
      break;
  } });
}

const RuxIconPlaylistAddCheck = RuxIconPlaylistAddCheck$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPlaylistAddCheck, defineCustomElement };
