import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H13C13.55 5 14 5.45 14 6C14 6.55 13.55 7 13 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5ZM3 9H13C13.55 9 14 9.45 14 10C14 10.55 13.55 11 13 11H3C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9ZM18 13V10C18 9.45 17.55 9 17 9C16.45 9 16 9.45 16 10V13H13C12.45 13 12 13.45 12 14C12 14.55 12.45 15 13 15H16V18C16 18.55 16.45 19 17 19C17.55 19 18 18.55 18 18V15H21C21.55 15 22 14.55 22 14C22 13.45 21.55 13 21 13H18ZM9 15H3C2.45 15 2 14.55 2 14C2 13.45 2.45 13 3 13H9C9.55 13 10 13.45 10 14C10 14.55 9.55 15 9 15Z" fill="currentColor"/></svg>';

const RuxIconPlaylistAdd$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-playlist-add", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-playlist-add"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-playlist-add":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPlaylistAdd$1);
      }
      break;
  } });
}

const RuxIconPlaylistAdd = RuxIconPlaylistAdd$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPlaylistAdd, defineCustomElement };
