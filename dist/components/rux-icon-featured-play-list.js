import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM11 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H11C11.55 9 12 9.45 12 10C12 10.55 11.55 11 11 11ZM4 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H4C3.45 5 3 5.45 3 6C3 6.55 3.45 7 4 7Z" fill="currentColor"/></svg>';

const RuxIconFeaturedPlayList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-featured-play-list", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-featured-play-list"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-featured-play-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFeaturedPlayList$1);
      }
      break;
  } });
}

const RuxIconFeaturedPlayList = RuxIconFeaturedPlayList$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFeaturedPlayList, defineCustomElement };
